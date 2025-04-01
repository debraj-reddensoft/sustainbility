import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function PerformanceOverTime() {
  // Chart data for floating bars
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Community",
        data: [
          { x: "Jan", y: [20, 40] },
          { x: "Feb", y: [30, 60] },
          { x: "Mar", y: [50, 80] },
          { x: "Apr", y: [40, 70] },
          { x: "May", y: [0, 65] },
          { x: "Jun", y: [30, 50] },
          { x: "Jul", y: [10, 30] },
          { x: "Aug", y: [90, 40] },
          { x: "Sep", y: [20, 60] },
          { x: "Oct", y: [0, 70] },
          { x: "Nov", y: [20, 50] },
          { x: "Dec", y: [10, 80] }
        ],
        backgroundColor: "#FB8B4C",
        borderColor: "#FB8B4C",
        borderWidth: 1
      }
    ]
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true }
    }
  };

  return (
    <div className="border border-neutral-200 rounded-md p-3">

      <div className="flex items-center border-b border-neutral-200 pb-4">
        <p className="flex items-center text-base font-medium text-black pr-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <path d="M11.1 7.5H12.9V16.5H11.1V7.5ZM14.7 11.1H16.5V16.5H14.7V11.1ZM7.5 12.9H9.3V16.5H7.5V12.9ZM14.7 4.8H5.7V19.2H18.3V8.4H14.7V4.8ZM3.9 3.8928C3.9 3.3996 4.3023 3 4.7991 3H15.6L20.1 7.5V20.0937C20.1008 20.2119 20.0784 20.3291 20.0339 20.4386C19.9894 20.5481 19.9238 20.6478 19.8409 20.7319C19.7579 20.8161 19.6591 20.8831 19.5502 20.9291C19.4414 20.9751 19.3245 20.9992 19.2063 21H4.7937C4.55734 20.9984 4.33112 20.9038 4.1639 20.7367C3.99668 20.5697 3.90189 20.3436 3.9 20.1072V3.8928Z" fill="currentColor"/>
          </svg>
          Performance Over Time
        </p>
        <div className="border border-neutral-200 rounded-lg ml-auto">
          <div className="relative ml-2 w-44">
            <button className="flex items-center text-sm text-neutral-700 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 4.75H6.75a3.5 3.5 0 0 0-3.5 3.5v9.5a3.5 3.5 0 0 0 3.5 3.5h10.5a3.5 3.5 0 0 0 3.5-3.5v-9.5a3.5 3.5 0 0 0-3.5-3.5m-14 4.5h17.5M7.361 4.75v-2m9.25 2v-2"/>
              </svg>
              Jan 24 - Feb 24 2023
            </button>
          </div>
        </div>
      </div>

      {/* Floating Bar Chart */}
      <div className="mt-4">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

