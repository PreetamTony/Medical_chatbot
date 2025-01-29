import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function HealthMetrics() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Blood Pressure',
        data: [120, 125, 118, 122, 119, 121],
        borderColor: 'rgb(59, 130, 246)',
        tension: 0.4,
      },
      {
        label: 'Heart Rate',
        data: [72, 75, 70, 74, 71, 73],
        borderColor: 'rgb(239, 68, 68)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Health Metrics Over Time',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Health Metrics</h2>
      <Line data={data} options={options} />
    </div>
  );
}