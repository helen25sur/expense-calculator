import './Chart.css';
import ChartBar from './ChartBar/ChartBar';

const Chart = (props: { dataPoints: {label: string; value: number}[]; }) => {

  const dataPointsValues = props.dataPoints.map(d => d.value);
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => <ChartBar 
        key={dataPoint.label} 
        value={dataPoint.value} 
        maxValue={totalMaximum} 
        label={dataPoint.label} />
      )}
    </div>
  );
};

export default Chart;