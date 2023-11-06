import { useEffect } from "react";
import setTableHeight from "../admin/setTableHeight";

type HistoryTableProps = {
  dateArray: string[];
  timeArray: number[];
};

function HistoryTable(props: HistoryTableProps) {
  function getWeekday(date: string) {
    let daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let dateObject = new Date(date);
    let dayOfWeek = dateObject.getDay();
    let dayName = daysOfWeek[dayOfWeek];
    return dayName;
  }

  useEffect(() => {
    setTableHeight("history", 30);
  }, []);

  return (
    <div className="table-wrapper history">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Weekday</th>
            <th>Minutes</th>
            <th>Sessions</th>
          </tr>
        </thead>
        <tbody style={{ maxHeight: "200px" }}>
          {props.dateArray.map((date, index) => (
            <tr key={index}>
              <td data-label="Date">{date}</td>
              <td data-label="Weekday">{getWeekday(date)}</td>
              <td data-label="Minutes">{props.timeArray[index]}</td>
              <td data-label="Sessions">
                {Math.floor(props.timeArray[index] / 25)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryTable;
