import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ImageCmp from './Image';
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
            <ImageCmp folder={folderName} imageName={fileName} alt={fileName}/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
