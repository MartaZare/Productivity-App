import { CharacterType } from "../../data/Types";
import axios from "axios";
import { BASE_URL } from "../../api/axios";
import { updateProgressInDB } from "../../api/api";

export const SESSION_MINUTES = 25;

function updateProgress(totalTime: number, character: CharacterType) {
  updateProgressInDB(totalTime, character);
}

// if (character.progress === 0) {
//   const updateLevel = async () => {
//     await axios.patch(`${BASE_URL}/characters/${character.id}`, {
//       level: character.level + 1,
//     });
//   };

//   updateLevel();
// }

// updateProgress();

export default updateProgress;
