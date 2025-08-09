







const Project = ({ size, project }) => {
    return <div className="py-[3.5rem]">
        <div


            className={`h-full w-full flex items-center justify-center px-[2rem] py-[5rem] font-samirFont bg-${project.them}`}
        >
            <div >
                <img
                    src={project.image}
                    className="w-full h-full rounded-[4px] max-w-[300px] min-w-[300px] max-h-[210px] min-h-[210px]"
                />
            </div>


        </div>

        <div className="flex  flex-col">
            <span className="text-3xl font-light py-[1.3rem]">{project.title}</span>
            <div className="h-[1px] bg-gray opacity-70 w-full"></div>
            <div className="flex items-center justify-between py-3 ">
                <span className="italic">{project.tech.join(", ")}</span>
                <span>2025</span>
            </div>

        </div>
    </div>;
};

export default Project;
