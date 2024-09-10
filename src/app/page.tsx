// import { AnimatedText } from '@/components/AnimatedText';
import ImageCmp from '@/components/Image';
import { Button } from '@/components/ui/button';
export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-10 md:mb-0 p-4">
        <div className="mb-2 flex flex-col text-start justify-center">
          <span className="lg:text-xl text-lg font-semibold">HELLO</span>
          <span className="font-bold lg:text-3xl text-2xl">
            {' '}
            I AM ROHIT DEY
          </span>
          <div
            className={`lg:text-xl text-lg font-semibold custom-border-b-4 w-fit`}
          >
            Senior Application Developer
          </div>
          <div className="flex flex-row gap-2  justify-start mt-2">
            <Button size="sm" className="font-bold">
              HIRE ME
            </Button>
            <Button size="sm" className="font-bold">
              GET CV
            </Button>
          </div>
        </div>
        <ImageCmp imageName="Greeting.jpeg" alt="greeting pic" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
        <ImageCmp imageName="introduction.jpg" alt="introduction pic" />

        <div className="flex flex-col justify-center mb-2">
          <span className="lg:text-2xl text-xl font-bold">LET&apos;S</span>
          <span className="lg:text-2xl text-xl font-bold">INTRODUCE ABOUT</span>
          <span className="lg:text-2xl text-xl font-bold custom-border-b-4 mb-2">
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
