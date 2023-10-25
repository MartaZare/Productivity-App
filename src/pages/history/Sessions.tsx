import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { SessionType, HistoryType } from "../../data/Types";
import Chart from "./Chart";
import HistoryTable from "./HistoryTable";
import Loading from "../../components/loading/Loading";
import { getData } from "../../api/api";

function Sessions() {
  const [loading, setLoading] = useState(true);
  const currentCharacterId = useSelector(
    (state: RootState) => state.character.id
  );
  const [sessions, setSessions] = useState<SessionType[]>([]);
  const [timeArray, setTimeArray] = useState<number[]>([]);
  const [dateArray, setDateArray] = useState<string[]>([]);
  const [historyArray, setHistoryArray] = useState<HistoryType[]>([]);

  useEffect(() => {
    const getSessions = async () => {
      setSessions(await getData("sessions?characterId=", currentCharacterId));
    };
    getSessions();
  }, [currentCharacterId]);

  console.log(sessions);

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

  useEffect(() => {
    setLoading(false);
  }, [sessions, timeArray, dateArray, historyArray]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {timeArray?.length ? (
            <section>
              <Chart historyArray={historyArray} />
              <HistoryTable dateArray={dateArray} timeArray={timeArray} />
            </section>
          ) : (
            <p>No users to display</p>
          )}
        </>
      )}
    </>
  );
}

export default Sessions;
