import BigScreen from '@/screen/home/Big';
import SmaillScreen from '@/screen/home/small';
import HomeClientComponent from './HomeClientCmp';
export default function Home() {
  return <HomeClientComponent Big={<BigScreen />} Small={<SmaillScreen />} />;
}
