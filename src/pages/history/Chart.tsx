import {
  XAxis,
  YAxis,
  CartesianGrid,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import { HistoryType } from "../../data/Types";

type ChartProps = {
  historyArray: HistoryType[];
};

function Chart(props: ChartProps) {
  return (
    <>
      {props.historyArray.length === 0 ? (
        <section>
          <h2>No Results to Display</h2>
          <p>
            If you already completed at least one study session try reloading
            the page.
          </p>
        </section>
      ) : (
        <figure className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={800}
              height={400}
              data={props.historyArray}
              margin={{ top: 20, left: -10, right: 10, bottom: -10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <YAxis tick={{ fill: "#ffffff" }} />
              <XAxis tick={{ display: "none" }} />

              <Area
                type="monotone"
                dataKey="time"
                stroke="#ffffff"
                fill="#e25788"
              />
            </AreaChart>
          </ResponsiveContainer>
        </figure>
      )}
    </>
  );
}

export default Chart;
