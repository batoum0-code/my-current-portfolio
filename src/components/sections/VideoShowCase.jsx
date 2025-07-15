import { useEffect, useRef } from "react";

const videosRow1 = [
  "/videos/project1.mkv",
  "/videos/project1.mkv",
  "/videos/project1.mkv",
  "/videos/project1.mkv",
];

const videosRow2 = [
  "/videos/project1.mkv",
  "/videos/project1.mkv",
  "/videos/project1.mkv",
  "/videos/project1.mkv",
];

const VideoTickerRow = ({ videos, reverse }) => {
  const rowRef = useRef(null);

  useEffect(() => {
    let scrollAmount = 0;
    const el = rowRef.current;

    const animate = () => {
      scrollAmount += reverse ? -0.5 : 0.5;
      if (el) el.scrollLeft = scrollAmount;
      requestAnimationFrame(animate);
    };

    animate();
  }, [reverse]);

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={rowRef}
        className="flex gap-6 w-max py-6"
        style={{ scrollBehavior: "smooth" }}
      >
        {videos.concat(videos).map((video, index) => (
          <div
            key={index}
            className="w-[330px] h-[230px] bg-gray p-[2rem] overflow-hidden flex-shrink-0"
          >
            <video
              src={video}
              className="w-full h-full object-cover "
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
  return (
    <div className="flex flex-col gap-8 bg-light py-16 px-6">
      <VideoTickerRow videos={videosRow1} reverse={false} />
      <VideoTickerRow videos={videosRow2} reverse={true} />
    </div>
  );
};

export default VideoShowcase;
