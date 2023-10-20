import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  setChampionInRedux,
  setCharacter,
} from "../../reducers/characterSlice";
import axios from "axios";
import { BASE_URL } from "../../api/axios";
import { RootState } from "../../store";
import { HeroArray } from "../../data/Arrays";
import { useNavigate } from "react-router-dom";

function ChampionSelect() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imgIndex, setImgIndex] = useState(0);
  const [champion, setChampion] = useState("");
  const characterId = useSelector((state: RootState) => state.character.id);
  const images = HeroArray;

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 3000);
    return () => clearInterval(interval);
  });

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

  function carouselInfiniteScroll() {
    if (imgIndex === images.length - 1) {
      return setImgIndex(0);
    }
    setImgIndex(imgIndex + 1);
  }

  function chooseChampion(name: string) {
    setChampion(name);
  }

  function handleClick() {
    axios.patch(`${BASE_URL}/characters/${characterId}`, {
      champion: champion,
    });
    dispatch(setChampionInRedux(champion));

    if (!champion) {
      dispatch(setChampionInRedux("warrior"));
    }
    navigate("/play");
  }

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
