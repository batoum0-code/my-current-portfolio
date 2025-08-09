import Project from './Project';


import img1 from "../../assets/cerveau.png";
import img3 from "../../assets/5.png";
import img4 from "../../assets/q1.webp";











const projects = [
  {
    id: 1,
    title: "Riad BERBERE",
    tech: ["React", "Node.js", "MongoDB"],
    image: img1,
    them: "blue",
  },
  {
    id: 2,
    title: "AMELKIS RESOURTS",
    tech: ["Next.js", "Tailwind", "NestJS"],
    image: img4,
    them: "gray",
  },
  {
    id: 3,
    title: "WEDEDING SIWO",
    tech: ["Vue.js", "Firebase"],
    image: img3,
    them: "blue",
  },
  {
    id: 4,
    title: "AMELKIS RESOURTS",
    tech: ["Next.js", "Tailwind", "NestJS"],
    image: img4,
    them: "gray",
  },
];




const MobileProjectPreview = () => {






  return <div className='px-[1.3rem]'>
    {
      projects.map((project) => {
        return <div key={project.id}
        className=''>
          <Project size={'3rem'} project={project} />
        </div>
      })
    }
  </div>;
};

export default MobileProjectPreview;
