import {
  XAxis,
  YAxis,
  CartesianGrid,
  AreaChart,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";
import { History } from "../../data/Types";

interface ChartProps {
  historyArray: History[];
}

function Chart(props: ChartProps) {
  return (
    <>
      {props.historyArray.length === 0 ? (
        <>
          <h2>No Results to Display</h2>
          <p>
            If you already completed at least one study session try reloading
            the page.
          </p>
        </>
      ) : (
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={800}
              height={400}
              data={props.historyArray}
              margin={{ top: 20, left: -10, right: 10, bottom: -10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <YAxis dataKey="time" tick={{ fill: "#ffffff" }} />
              <XAxis dataKey="date" tick={{ display: "none" }} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="time"
                stroke="#ffffff"
                fill="#e25788"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
}

export default Chart;
