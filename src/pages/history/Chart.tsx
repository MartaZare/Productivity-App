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
    <div className="chart">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={800}
          height={400}
          data={props.historyArray}
          margin={{ top: 50, left: 0, right: 0, bottom: 40 }}
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
  );
}

export default Chart;
