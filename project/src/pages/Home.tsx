import { HeroSection } from '../components/HeroSection';
import { MainSections } from '../components/MainSections';
import { NewsSection } from '../components/NewsSection';

export function Home() {
  return (
    <>
      <HeroSection />
      <MainSections />
      <NewsSection />
    </>
  );
}