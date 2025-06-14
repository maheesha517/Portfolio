import { ThemeToggle } from "../components/TeameToggle";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection} from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";


export const Home =() => {

return( 
 <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 

    <ThemeToggle />
    <Navbar/>

   <main>
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
   </main>
 </div>
);
}