import { useDispatch, useSelector } from "react-redux";
import { chooseChampion } from "./champSelectSlice";
import { RootState } from "../../../store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ChampionSelect() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selection = useSelector((state: RootState) => state.champion);
  const [imgIndex, setImgIndex] = useState(0);

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

  const handleClick = (name: string) => {
    dispatch(chooseChampion(name));
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
                  onClick={() => handleClick(image.name)}
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

        <img
          className="displayed-champion"
          src={`assets/champions/${selection}.png`}
          alt={`${selection}-image`}
        />
      </div>
      <button onClick={() => navigate("/play")}>CONTINUE</button>
    </div>
  );
}

export default ChampionSelect;
