import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ChampionSelect: React.FC = () => {
  //onClickItem={}
  return (
    <Carousel className="carousel">
      <div>
        <img id="warrior" src="assets/champions/warrior.png" alt="warrior" />
      </div>
      <div>
        <img id="athena" src="assets/champions/athena.png" alt="athena" />
      </div>
      <div>
        <img id="druid" src="assets/champions/druid.png" alt="druid" />
      </div>
      <div>
        <img id="alchemy" src="assets/champions/alchemy.png" alt="alchemy" />
      </div>
      <div>
        <img id="assasin" src="assets/champions/assasin.png" alt="assasin" />
      </div>
      <div>
        <img
          id="barbarian"
          src="assets/champions/barbarian.png"
          alt="barbarian"
        />
      </div>
      <div>
        <img id="magician" src="assets/champions/magician.png" alt="magician" />
      </div>
      <div>
        <img id="samurai" src="assets/champions/samurai.png" alt="samurai" />
      </div>
    </Carousel>
  );
};

export default ChampionSelect;
