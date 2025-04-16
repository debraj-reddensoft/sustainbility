import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function LineCurve() {
  // Chart data for the line chart
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Scope 1",
        data: [35, 35, 45, 40, 22, 30, 30, 50, 30, 25, 28, 35],
        backgroundColor: "#27A376",
        borderColor: "#27A376",
        tension: 0,
        fill: false,
      },
    ]
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true }
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true }
    }
  };

  return (
    <Line data={data} options={options} />
  );
}
