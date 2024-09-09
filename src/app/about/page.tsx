import ImageCmp from '@/components/Image';
import Link from 'next/link';
import { CreateCarousel } from '@/components/CreateCarousel';
import { getFilesFromDirectory } from '@/utils/getFilesfromdirectory';
export default async function About() {
  const filesName = await getFilesFromDirectory('./public/hobbies');
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col text-start justify-center mb-2">
        <p>
          Hello, I&apos;m Rohit Dey, hailing from the culturally rich town of
          Murshidabad in West Bengal, where I was born and brought up. Coming
          from a humble yet disciplined background, my father, Atin Dey, served
          the country as an army personnel, instilling values of dedication and
          resilience in me from a young age. My mother, Ruma Dey, has always
          been the pillar of our family, managing the household with care and
          love as a homemaker. Together, their support has been a constant
          driving force behind my journey.
        </p>
      </div>
      <ImageCmp alt="Greeting Pic" imageName="Greeting.jpeg" />
      <ImageCmp alt="Karunya pic" imageName="Karunya.jpg" />
      <div className="flex flex-col text-start justify-center mb-2">
        <span className="lg:text-2xl text-xl font-bold mb-2 custom-border-b-4">
          GRADUATION
        </span>
        <ul className="list-disc">
          <li>
            Pursued Bachelor of Technology (BTech) in{' '}
            <b>Computer Science and Engineering(CSE)</b> from{' '}
            <Link
              className="font-bold"
              target="_blank"
              href="https://www.karunya.edu/"
            >
              Karunya Institute of Technology and Sciences.
            </Link>
          </li>
          <li>
            Time at Karunya was both academically enriching and personally
            transformative, molding me into a resourceful individual ready for
            real-world challenges.
          </li>
          <li>
            Graduated with a CGPA of <b>8.38</b>, embracing every learning
            opportunity.
          </li>
          <li>Gained deep knowledge in computing and problem-solving.</li>
          <li>
            This academic foundation has well-prepared me for professional
            endeavors.
          </li>
        </ul>
      </div>
      <div className="flex flex-col text-start justify-center mb-2">
        <span className="lg:text-2xl text-xl font-bold mb-2 custom-border-b-4">
          SCHOOLING
        </span>
        <ul className="list-disc">
          <li>
            Completed higher secondary and matriculation from{' '}
            <Link
              href="https://school.banglarshiksha.gov.in/ws/website/index/19072701003"
              className="font-bold"
              target="_blank"
            >
              Nawab Bahadur&apos;s Institution
            </Link>
            , an esteemed institution that laid the foundation for my interest
            in technology and engineering.
          </li>
          <li>
            The rigorous academic environment during schooling instilled a deep
            love for learning and exploration, which continues to drive my
            curiosity.
          </li>
          <li>
            In Higher Secondary, studied{' '}
            <b>
              Physics, Chemistry, Math, Computer, English, and Bengali, securing
              77.4%
            </b>
            .
          </li>
          <li>
            In Matriculation, studied{' '}
            <b>
              English, Bengali, History, Geography, Math, Physical Science, and
              Life Science, securing 79%
            </b>
            .
          </li>
        </ul>
      </div>
      <ImageCmp alt="Nbi Pic" imageName="Nbi.jpg" />
      <div className="flex justify-center mb-2">
        <CreateCarousel filesName={filesName} folderName="hobbies" />
      </div>
      <div className="flex flex-col text-start justify-center mb-2">
        <span className="lg:text-2xl text-xl font-bold custom-border-b-4 mb-2">
          HOBBIES
        </span>
        <ul className="list-disc">
          <li>
            Passionate about learning new technologies and staying up-to-date
            with the latest advancements in the tech world.
          </li>
          <li>Enjoy experimenting with new tools and frameworks.</li>
          <li>
            Unwind by watching movies, appreciating various genres, and
            storytelling.
          </li>
          <li>
            Cherish cycling as it keeps me fit and provides a sense of freedom
            and adventure.
          </li>
          <li>
            Strive to balance learning, creativity, and personal and
            professional growth in everything I do.
          </li>
        </ul>
      </div>
    </div>
  );
}
