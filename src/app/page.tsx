import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Heroimg from "./components/FeaturedProducts";
import TopPicks from "./components/TopPicks";
import NewArrival from "./components/NewArrival";
import Blog from "./components/Blog"; 
import Insta from "./components/Insta";



export default function Home() {
  return (
    <div>

      <Navbar/>
      <HeroSection/>
      <Heroimg/>
      <TopPicks/>
      <NewArrival/>
      <Blog/>
      <Insta/>
    
    </div>
  );
}
