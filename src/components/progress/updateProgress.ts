import { CharacterType } from "../../data/Types";
import axios from "axios";
import { BASE_URL } from "../../api/axios";

function updateProgress(totalTime: number, character: CharacterType) {
  const SESSION_MINUTES = 25;

  const updateProgress = async () => {
    await axios.patch(`${BASE_URL}/characters/${character.id}`, {
      progress: (totalTime / SESSION_MINUTES) % 4,
    });
  };

  if (character.progress === 0) {
    const updateLevel = async () => {
      await axios.patch(`${BASE_URL}/characters/${character.id}`, {
        level: character.level + 1,
      });
    };

    updateLevel();
  }

  updateProgress();
}

export default updateProgress;
