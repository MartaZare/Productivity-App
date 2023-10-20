import { BeastArray } from "../../data/Arrays";

export default function getRandomMonster() {
  const image = BeastArray[Math.floor(Math.random() * 8)];

  return image.name;
}
