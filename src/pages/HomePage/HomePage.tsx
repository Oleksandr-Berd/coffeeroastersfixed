import Collection from "../../components/Collection/Collection";
import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Pros from "../../components/Pros/Pros";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Collection />
      <Pros/>
      <HowItWorks/>
    </div>
  );
};

export default HomePage;
