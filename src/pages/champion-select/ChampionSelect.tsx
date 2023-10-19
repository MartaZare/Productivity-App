import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  setChampion as setChampionInRedux,
  setCharacter,
} from "../../reducers/characterSlice";
import axios from "axios";
import { BASE_URL } from "../../api/axios";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/characters/1`);
        dispatch(setCharacter(response.data));
      } catch (error) {
        console.error("Error fetching character data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    axios.patch(`${BASE_URL}/characters/1`, { champion: champion });
    dispatch(setChampionInRedux(champion));
    props.setChampionSelected(true);
    if (!champion) {
      dispatch(setChampionInRedux("warrior"));
      props.setChampionSelected(true);
    }
  };

  return (
    <main className="champion-page">
      <h1>SELECT CHAMPION</h1>
      <section className="champion-page-wrapper">
        <article className="champion-select">
          <div className="champion-select-window">
            <button
              className="prev"
              onClick={() => setImgIndex((prev) => prev - 1)}
            >
              &lt;
            </button>
            <figure className="all-champions">
              {images.map((image) => (
                <img
                  className="champion"
                  src={`assets/champions/${image.name}.png`}
                  alt={`${image.name}-image`}
                  style={{ transform: `translate(-${imgIndex * 100}%)` }}
                  onClick={() => chooseChampion(image.name)}
                />
              ))}
            </figure>
            <button
              className="next"
              onClick={() => {
                imgIndex < images.length - 1 && setImgIndex((prev) => prev + 1);
              }}
            >
              &gt;
            </button>
          </div>
        </article>
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
      </section>
      <button onClick={handleClick}>CONTINUE</button>
    </main>
  );
}

export default ChampionSelect;
