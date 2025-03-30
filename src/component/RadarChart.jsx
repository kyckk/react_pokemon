import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, Tooltip, Legend, ArcElement, Filler, CategoryScale, Title, LinearScale ,PointElement,LineElement} from 'chart.js';
import "bootstrap/dist/css/bootstrap.min.css";
// Chart.js에서 필요한 모듈들을 등록합니다.
ChartJS.register(
  RadialLinearScale, 
  Tooltip, 
  Legend, 
  ArcElement, 
  Filler, 
  CategoryScale, 
  Title, 
  LinearScale,
  PointElement, // PointElement 추가
  LineElement
);

const RadarChartComponent = () => {
  // Radar 차트 데이터 설정
  const data = {
    labels: ['타입', '능력', '이동', '높이', '무게게'], // 레이블
    datasets: [
      {
        label: 'Dataset 1', // 데이터셋 이름
        data: [65, 59, 90, 81, 56], // 각 데이터 값
        fill: true, // 그래프를 채울지 여부
        backgroundColor: 'rgba(179, 181, 198, 0.2)', // 채워진 부분의 색상
        borderColor: 'rgba(179, 181, 198, 1)', // 테두리 색상
        pointBackgroundColor: 'rgba(179, 181, 198, 1)', // 포인트 색상
        pointBorderColor: '#fff', // 포인트의 테두리 색상
        pointHoverBackgroundColor: '#fff', // 포인트 hover 시 색상
        pointHoverBorderColor: 'rgba(179, 181, 198, 1)', // 포인트 hover 시 테두리 색상
      },
    ],
  };

  // 옵션 설정 (차트의 스타일 등을 정의)
  const options = {
    scales: {
      r: {
        angleLines: {
          display: true, // 각도 선 표시 여부
        },
        suggestedMin: 0, // 최소값
        suggestedMax: 100, // 최대값
      },
    },
  };

  return (
    <div className=''>
      {/* <h2 >Radar Chart Example</h2> */}
      <Radar key={JSON.stringify(data)}  data={data} options={options} />
    </div>
  );
};

export default RadarChartComponent;