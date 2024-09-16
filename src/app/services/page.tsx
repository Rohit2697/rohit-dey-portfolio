// import { createDateFromString } from '@/utils/convertDateFromString';
import { getFilesFromDirectory } from '@/utils/getFilesfromdirectory';
import services from '@/resources/service.json';
import ImageCmp from '@/components/Image';
import ServiceSummery from '@/components/ServiceSummery';
export default async function Service() {
  const serviceImages = await getFilesFromDirectory('./public/services');

  return (
    <div className="grid md:grid-cols-2 gap-4 grid-cols-1 p-4">
      {services.map((service) => {
        const imageName = serviceImages.find((image) =>
          image.includes(service.alias)
        );
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
      })}
    </div>
  );
}
