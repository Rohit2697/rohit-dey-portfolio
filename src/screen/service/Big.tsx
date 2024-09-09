import { getFilesFromDirectory } from '@/utils/getFilesfromdirectory';

import services from '../../app/services/service.json';
import ImageCmp from '@/components/Image';
import ServiceSummery from '@/components/ServiceSummery';
export default async function BigScreenService() {
  const serviceImages = await getFilesFromDirectory('./public/services');
  return services.map((service, index) => {
    const imageName = serviceImages.find((image) =>
      image.includes(service.alias)
    );
    if ((index + 1) % 2 !== 0) {
      return (
        <div
          className="flex flex-col lg:flex-row justify-between items-center lg:items-center lg:px-10"
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
    } else {
      return (
        <div
          className="flex flex-col lg:flex-row justify-between items-center lg:items-center lg:px-10"
          key={`Service-${index}`}
        >
          <ServiceSummery service={service} />
          <ImageCmp
            folder="services"
            alt={service.alias}
            imageName={imageName || ''}
          />
        </div>
      );
    }
  });
}
