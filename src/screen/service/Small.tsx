// import { createDateFromString } from '@/utils/convertDateFromString';
import { getFilesFromDirectory } from '@/utils/getFilesfromdirectory';
import services from '@/app/services/service.json';
import ImageCmp from '@/components/Image';
import ServiceSummery from '@/components/ServiceSummery';

export default async function SmallScreenService() {
  const serviceImages = await getFilesFromDirectory('./public/services');
  return services.map((service, index) => {
    const imageName = serviceImages.find((image) =>
      image.includes(service.alias)
    );
    return (
      <div
        className="flex flex-col  justify-between items-center"
        key={`Service-${index}`}
      >
        <ImageCmp
          folder="services"
          alt={service.alias}
          imageName={imageName || ''}
        />
        <ServiceSummery service={service} />
      </div>
    );
  });
}
