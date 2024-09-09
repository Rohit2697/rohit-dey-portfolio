import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
interface CreateCarouselProps {
  filesName: string[];
  folderName?: string;
}
export function CreateCarousel({ filesName, folderName }: CreateCarouselProps) {
  return (
    <Carousel className="w-full max-w-xs sm:px-4">
      <CarouselContent>
        {filesName.map((fileName, index) => (
          <CarouselItem key={index}>
            <Image
              // {`/${fileName}`}
              src={folderName ? `/${folderName}/${fileName}` : `/${fileName}`}
              alt="Carousel Pic"
              height={500}
              width={500}
              className="h-80 w-80 object-cover rounded-full shadow-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
