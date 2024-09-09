import AboutClientComponent from './AboutClientCmp';
import BigScreen from '@/screen/about/Big';
import SmallScreen from '@/screen/about/Small';
export default async function About() {
  return <AboutClientComponent Big={<BigScreen />} Small={<SmallScreen />} />;
}
