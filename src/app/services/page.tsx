// import { createDateFromString } from '@/utils/convertDateFromString';
import { getFilesFromDirectory } from '@/utils/getFilesfromdirectory';
import services from './service.json';
import ImageCmp from '@/components/Image';
import ServiceSummery from '@/components/ServiceSummery';
export default async function Service() {
  const serviceImages = await getFilesFromDirectory('./public/services');

  return (
    <div className="grid grid-cols-2 gap-4">
      {services.map((service, index) => {
        const imageName = serviceImages.find((image) =>
          image.includes(service.alias)
        );
        if ((index + 1) % 2 !== 0) {
          return (
            <>
              <ImageCmp
                folder="services"
                alt={service.alias}
                imageName={imageName || ''}
              />
              <ServiceSummery service={service} />
            </>
          );
        } else {
          return (
            <>
              <ServiceSummery service={service} />
              <ImageCmp
                folder="services"
                alt={service.alias}
                imageName={imageName || ''}
              />
            </>
          );
        }
      })}
    </div>
  );
}
