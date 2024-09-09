import { AnimatedText } from '@/components/AnimatedText';
import ImageCmp from '@/components/Image';
import { Button } from '@/components/ui/button';

export default function SmaillScreen() {
  return (
    <>
      <div className="flex flex-col justify-between items-center">
        <div className="mb-6 flex flex-col text-start">
          <span className="text-xl font-semibold">HELLO</span>
          <span className="font-bold text-3xl"> I AM ROHIT DEY</span>
          <AnimatedText
            classname="font-semibold custom-border-b-4"
            text="SENIOR APPLICATION DEVELOPER"
          />
          <div className="flex flex-row gap-2 justify-start mt-2">
            <Button className="font-bold">HIRE ME</Button>
            <Button className="font-bold">GET CV</Button>
          </div>
        </div>
        <ImageCmp alt="developer image" imageName="developer.jpeg" />
      </div>

      <div className="flex flex-col justify-between items-center">
        <ImageCmp alt="Introduction" imageName="introduction.jpg" />
        <div className="mb-6 flex flex-col text-start">
          <span className="text-2xl font-bold">LET&apos;S</span>
          <span className="text-2xl font-bold">INTRODUCE ABOUT</span>
          <span className="text-2xl font-bold custom-border-b-4 mb-2">
            MYSELF
          </span>
          <ul className="list-disc">
            <li>
              Dynamic and self-driven Senior Application Developer with
              exceptional quantitative abilities.
            </li>
            <li>Known for conducting thorough and innovative analyses.</li>
            <li>
              Proficient in rapidly acquiring industry-specific knowledge and
              integrating into project teams seamlessly.
            </li>
            <li>
              Consistently ensures successful management and delivery of
              assigned responsibilities.
            </li>
            <li>Adheres closely to project scope and budget constraints.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
