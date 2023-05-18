import './ChartBar.css';

const ChartBar = (props: {value: number; label: string; maxValue: number}) => {
  let barFillHight = '0%';

  if (props.maxValue > 0) {
    barFillHight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div style={{height: barFillHight}} className='chart-bar__fill'></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;