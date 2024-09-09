import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';







export default function About() {
  return (
    <Card>
      <div className="flex flex-col md:flex-row mx-auto p-3">
        <div className="h-48 md:h-auto md:w-1/3 border">
          <Image
            src="/profile.jpg"
            alt="Profile Pic"
            height={500}
            width={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="md:w-2/3 mt-4 md:mt-0 md:ml-4 relative">
          <CardHeader>
            <div className="flex flex-col items-start">
              <CardTitle className="font-bold text-3xl">Rohit Dey</CardTitle>
              <CardDescription className="text-xl">
                Senior Application Developer
              </CardDescription>
            </div>
        
          </CardHeader>
          <CardContent className="mt-2 text-xm">
            <p>
              A dynamic and self-driven Senior Application Developer with
              exceptional quantitative abilities, known for conducting thorough
              and innovative analyses. Proficient in rapidly acquiring
              industry-specific knowledge and seamlessly integrating into
              project teams. Consistently ensures successful management and
              delivery of assigned responsibilities, adhering closely to project
              scope and budget constraints.
            </p>
          </CardContent>
    

        </div>
      </div>
    </Card>
  );
}
