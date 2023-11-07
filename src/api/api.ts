import { AxiosError } from "axios";
import { CharacterType } from "../data/Types";
import axios, { BASE_URL } from "./axios";
import { SESSION_MINUTES } from "../data/Constants";

export const updateProgressInDB = async (
  totalTime: number,
  character: CharacterType
) => {
  try {
    await axios.patch(`${BASE_URL}/characters/${character.id}`, {
      progress: (totalTime / SESSION_MINUTES) % 4,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateLevelInDB = async (
  totalTime: number,
  character: CharacterType
) => {
  try {
    await axios.patch(`${BASE_URL}/characters/${character.id}`, {
      level: Math.floor(totalTime / SESSION_MINUTES / 4),
    });
  } catch (error) {
    console.error(error);
  }
};

export async function getData(data: string, id: string) {
  try {
    const response = await axios.get(`${BASE_URL}/${data}${id}`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      if (error.response.status === 400) {
        return "Error 400: Bad request.";
      } else if (error.response.status === 404) {
        return "Error 404: Not Found.";
      } else if (error.response.status === 500) {
        return "Error 500: Internal Server Error.";
      } else if (error.response.status === 503) {
        return "Error 503: Service unavailable.";
      }
    }
    console.log(error.message);
    return "Something went wrong. Try reloading the page.";
  }
}
