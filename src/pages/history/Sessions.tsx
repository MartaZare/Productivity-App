import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../api/axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { SessionType, HistoryType } from "../../data/Types";
import Chart from "./Chart";
import HistoryTable from "./HistoryTable";

function Sessions() {
  const currentCharacterId = useSelector(
    (state: RootState) => state.character.id
  );
  const [sessions, setSessions] = useState<SessionType[]>([]);
  const [timeArray, setTimeArray] = useState<number[]>([]);
  const [dateArray, setDateArray] = useState<string[]>([]);
  const [historyArray, setHistoryArray] = useState<HistoryType[]>([]);

  useEffect(() => {
    const getSessions = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/sessions?characterId=${currentCharacterId}`
        );
        setSessions(response.data);
      } catch (err) {
        console.error("Error:", err);
      }
    };
    getSessions();
  }, [currentCharacterId]);

  useEffect(() => {
    if (sessions.length > 0) {
      const uniqueTimeArray = [];
      let currentSessionDate = sessions[0].date;
      let currentTimeSum = 0;

      for (let i = 0; i < sessions.length; i++) {
        if (sessions[i].date === currentSessionDate) {
          currentTimeSum += sessions[i].time;
        } else {
          uniqueTimeArray.push(currentTimeSum);
          currentSessionDate = sessions[i].date;
          currentTimeSum = sessions[i].time;
        }
      }
      uniqueTimeArray.push(currentTimeSum);

      let dates = [...new Set(sessions.map((session) => session.date))];
      setTimeArray(uniqueTimeArray);
      setDateArray(dates);

      let dateTimeArray = dates.map(function (date, index) {
        return { date: date, time: timeArray[index] };
      });
      setHistoryArray(dateTimeArray);
    }
  }, [sessions]);

  return (
    <>
      {timeArray?.length ? (
        <article>
          <Chart historyArray={historyArray} />
          <HistoryTable dateArray={dateArray} timeArray={timeArray} />
        </article>
      ) : (
        <p>No users to display</p>
      )}
    </>
  );
}

export default Sessions;
