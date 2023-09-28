import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {

    const datapointValues =  props.dataPoints.map(dataPoint=>dataPoint.value);  

    const totalMax = Math.max(...datapointValues);

  return (
    <div className="chart">
      <h1>{props.dataPoint}</h1>
      {props.dataPoints.map((datapoint) => {
        return <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
        />;
      })}
    </div>
  );
};

export default Chart;
