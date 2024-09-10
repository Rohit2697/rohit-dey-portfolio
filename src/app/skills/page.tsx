import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ProjectCardProps } from './ProjectInterface';
import skillsObj from './skills.json';
import ProjectCard from '@/components/ProjectCard';
import projects from './projects.json';
interface Skills {
  [key: string]: string[];
}
const skills: Skills = skillsObj;

export default function Skills() {
  const tableHeaders = Object.keys(skills);
  return (
    <div className="p-4">
      <div className="lg:text-2xl text-xl font-bold mb-2 custom-border-b-4 w-fit">
        SKILLS
      </div>
      <Table className="mb-2">
        <TableCaption>On the way to add more!🚀</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>CATEGORY</TableHead>
            <TableHead>SKILLS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableHeaders.map((catagory, catIndex) => {
            console.log(catagory);
            return (
              <TableRow key={`Cat-${catIndex}`}>
                <TableCell>
                  {catagory.replace(/_/g, ' ').toUpperCase()}
                </TableCell>
                <TableCell>
                  {skills[catagory].join(', ').toUpperCase()}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <div>
        <div className="lg:text-2xl text-xl font-bold mb-2 custom-border-b-4 w-fit">
          PROJECTS
        </div>

        <Carousel>
          <CarouselContent className="-ml-4">
            {projects.map((project) => (
              <CarouselItem
                className="pl-4 basis-1/2 sm:basis-1/3 h-80 overflow-auto"
                key={`Project-${project.project_name}`}
              >
                <ProjectCard project={project as ProjectCardProps} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
