import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setChampion as setChampionInRedux } from "../../reducers/characterSlice";

interface ChampionSelectProps {
  setChampionSelected: (arg: boolean) => void;
}

function ChampionSelect(props: ChampionSelectProps) {
  const dispatch = useDispatch();
  const [imgIndex, setImgIndex] = useState(0);
  const [champion, setChampion] = useState("");

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

  const carouselInfiniteScroll = () => {
    if (imgIndex === images.length - 1) {
      return setImgIndex(0);
    }
    setImgIndex(imgIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 3000);
    return () => clearInterval(interval);
  });

  const chooseChampion = (name: string) => {
    setChampion(name);
  };

  const handleClick = () => {
    dispatch(setChampionInRedux(champion));
    props.setChampionSelected(true);
    if (!champion) {
      dispatch(setChampionInRedux("warrior"));
      props.setChampionSelected(true);
    }
  };

  return (
    <div className="champion-page">
      <h1>SELECT CHAMPION</h1>
      <div className="champion-page-content">
        <div className="champion-select">
          <div className="champion-select-window">
            <button
              className="prev"
              onClick={() => setImgIndex((prev) => prev - 1)}
            >
              &lt;
            </button>
            <div className="all-champions">
              {images.map((image) => (
                <img
                  className="champion"
                  src={`assets/champions/${image.name}.png`}
                  alt={`${image.name}-image`}
                  style={{ transform: `translate(-${imgIndex * 100}%)` }}
                  onClick={() => chooseChampion(image.name)}
                />
              ))}
            </div>
            <button
              className="next"
              onClick={() => {
                imgIndex < images.length - 1 && setImgIndex((prev) => prev + 1);
              }}
            >
              &gt;
            </button>
          </div>
        </div>
        {champion ? (
          <img
            className="displayed-champion"
            src={`assets/champions/${champion}.png`}
            alt={`${champion}-image`}
          />
        ) : (
          <img
            className="displayed-champion"
            src={`assets/champions/warrior.png`}
            alt={`warrior-image`}
          />
        )}
      </div>
      <button onClick={handleClick}>CONTINUE</button>
    </div>
  );
}

export default ChampionSelect;
