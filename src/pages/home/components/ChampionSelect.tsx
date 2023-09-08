import { useDispatch } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { chooseChampion } from "./champSelectSlice";
import { useNavigate } from "react-router-dom";

const ChampionSelect: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const images = [
    { name: "warrior" },
    { name: "athena" },
    { name: "druid" },
    { name: "alchemy" },
    { name: "assasin" },
    { name: "barbarian" },
    { name: "magician" },
    { name: "samurai" },
  ];

  const handleClick = (name: string) => {
    console.log(name);
    dispatch(chooseChampion(name));
    navigate("/play");
  };

  return (
    <Carousel className="carousel">
      {images.map((image) => (
        <div key={image.name} onClick={() => handleClick(image.name)}>
          <img
            id={image.name}
            src={`assets/champions/${image.name}.png`}
            alt={`${image.name}-image`}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ChampionSelect;
