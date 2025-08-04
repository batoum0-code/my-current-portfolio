import { useEffect, useRef, useState } from "react";

const videosRow1 = [
  {video:"/videos/project1.mkv" , bg:'gray'},
  {video:"/videos/project1.mkv" , bg:'blue'},
  {video:"/videos/project1.mkv" , bg:'gray'},
  {video:"/videos/project1.mkv" , bg:'gray'},
];

const videosRow2 = [
  {video:"/videos/project1.mkv" , bg:'gray'},
  {video:"/videos/project1.mkv" , bg:'gray'},
  {video:"/videos/project1.mkv" , bg:'gray'},
  {video:"/videos/project1.mkv" , bg:'gray'},
];

const VideoTickerRow = ({ videos, reverse, scrollY }) => {
  const rowRef = useRef(null);

  useEffect(() => {
    if (rowRef.current) {
      const scrollOffset = 200; // Adjust this to shift initial position
      const translateX = reverse
        ? -scrollY * 0.9 + scrollOffset
        : -scrollY * 0.5;

      rowRef.current.style.transform = `translateX(${translateX}px)`;
    }
  }, [scrollY, reverse]);

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={rowRef}
        className="flex gap-8  transition-all duration-900 ease-linear"
      >
        {/* Duplicate videos to allow infinite-looking scroll */}
        {videos.concat(videos).map((item, index) => (
          <div
            key={index}
            className={`text-center bg-${item.bg} px-[1.3rem] py-[1.6rem] overflow-hidden flex-shrink-0 `}
          >
            <video
              src={item.video}
              className="max-w-[300px] max-h-[180px] min-w-[300px] min-h-[180px] object-contain"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const VideoShowcase = () => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      const vh = window.innerHeight;

      if (rect && rect.top < vh / 2 && rect.bottom > vh /2) {
        setActive(true);
        setScrollY(window.scrollY);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col gap-8 bg-light py-16 ">
      <VideoTickerRow
        videos={videosRow1}
        reverse={false}
        scrollY={active ? scrollY : 0}
      />
      <VideoTickerRow
        videos={videosRow2}
        reverse={true}
        scrollY={active ? scrollY : 0}
      />
    </div>
  );
};

export default VideoShowcase;
