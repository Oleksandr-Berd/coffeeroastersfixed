import Collection from "../../components/Collection/Collection";
import Hero from "../../components/Hero/Hero";
import Pros from "../../components/Pros/Pros";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Collection />
      <Pros/>
    </div>
  );
};

export default HomePage;
