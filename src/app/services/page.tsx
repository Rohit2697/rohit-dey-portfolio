// import { createDateFromString } from '@/utils/convertDateFromString';

import BigScreenService from '@/screen/service/Big';
import SmallScreenService from '@/screen/service/Small';
import ServiceClientComponent from './ServiceClientCmp';
export default function Service() {
  return (
    <ServiceClientComponent
      BigScreenService={<BigScreenService />}
      SmallScreenService={<SmallScreenService />}
    />
  );
}
