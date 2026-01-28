import Image from 'next/image';
import Link from 'next/link';

type Props={
    project:{
        id:string;
        domain:string;
        year:string;
        title:string;
        description:string;
        image:string;
        projectLink:string;
        techStack?: { [key: string]: string }[];
    }
}

export default function ProjectCard({project}:Props){
    return(
        <div className='w-260 h-96 p-3 bg-stone-50 rounded-2xl'>
            <div className='inline-flex gap-6'>
            <div className='w-110 h-90 relative'>
                <Image src={project.image} alt={project.title} fill  />
            </div>
            <div className='py-2 w-140'>
            <h3 className='text-Secondary text-base font-normal'>{project.domain} &#8226; {project.year}</h3> 
            <h3 className="text-Primary text-3xl font-bold leading-8 mt-4">{project.title}</h3>
            <p className="text-Secondary text-base font-normal font-['Product_Sans'] leading-6 mt-4 whitespace-normal">{project.description}</p>
            <div className='mt-4 inline-flex gap-2'>
                {project.techStack?.map((tech,id)=>(
                    <div key={id} className='inline-flex w-25 h-8 px-3 py-1.5 rounded-lg outline-[0.76px] gap-2.5 justify-center items-center'>
                        <Image src={Object.values(tech)[0]} alt={Object.keys(tech)[0]} width={20} height={8} />
                       <p className=" text-Primary text-base font-bold font-['Product_Sans']">{Object.keys(tech)[0]}</p> 
                    </div>
                ))}
            </div>
            <div>
                <Link href={project.projectLink} target="_blank" rel="noopener noreferrer">
                    <button className='inline-flex mt-12 px-5 py-2 w-40 h-10 rounded-[52px] cursor-pointer  outline outline-blue-600 gap-2 justify-center items-center'>
                       <p className='text-base font-medium text-blue-600 '> View Project</p>
                       <Image src="/icons/arrow.svg" alt='/icons/arrow.svg' width={15} height={6}/>
                    </button>
                    
                </Link>
            </div>
            </div>
            </div>
        </div>
    )
}