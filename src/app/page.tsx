import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import SelectedProjects from "@/components/sections/selected-projects";
import FeaturedProject from "@/components/sections/featured-project";
import Clients from "@/components/sections/clients";
import ServicesIntro from "@/components/sections/services-intro";
import ServiceStory from "@/components/sections/service-story";
import Awards from "@/components/sections/awards";
import Manifesto from "@/components/sections/manifesto";
import Stats from "@/components/sections/stats";
import ShowreelProcess from "@/components/sections/showreel-process";
import DiscoveryCta from "@/components/sections/discovery-cta";
import Bento from "@/components/sections/bento";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <SelectedProjects />
      <FeaturedProject />
      <Clients />
      <ServicesIntro />
      <ServiceStory />
      <Awards />
      <Manifesto />
      <Stats />
      <ShowreelProcess />
      <DiscoveryCta />
      <Bento />
      <Footer />
    </main>
  );
}
