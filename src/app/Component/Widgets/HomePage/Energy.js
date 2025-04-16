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

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function PerformanceOverTime() {
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
        fill: false
      },
      {
        label: "Scope 2",
        data: [30, 40, 60, 50, 35, 45, 25, 70, 40, 30, 35, 30],
        backgroundColor: "#FB8B4C",
        borderColor: "#FB8B4C",
        tension: 0,
        fill: false
      },
      {
        label: "Scope 3",
        data: [40, 25, 35, 30, 20, 25, 15, 55, 28, 20, 22, 45],
        backgroundColor: "#FC8DB7",
        borderColor: "#FC8DB7",
        tension: 0,
        fill: false
      }
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
    <div className="border border-neutral-200 rounded-md p-3">
      <div className="flex items-center border-b border-neutral-200 pb-4">
        <div className="flex items-center pr-2 grow max-w-72">
          <div className="flex bg-black shrink-0 rounded-full items-center justify-center size-12">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.19351 11.3965L12.192 3.31186C12.6611 2.67957 13.5405 3.07311 13.5405 3.91536V10.1729C13.5405 10.6775 13.8853 11.0865 14.3107 11.0865H17.2283C17.891 11.0865 18.2443 12.0134 17.8065 12.6035L11.808 20.6881C11.3389 21.3204 10.4595 20.9269 10.4595 20.0846V13.8271C10.4595 13.3225 10.1147 12.9135 9.68931 12.9135H6.77173C6.10895 12.9135 5.75566 11.9866 6.19351 11.3965Z" stroke="white" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="w-full pl-3">
            <p className="flex items-center text-sm font-medium text-black mb-2 justify-between">
              Energy
              <span className="font-light text-black text-base">46%</span>
            </p>
            <div className="bg-[#E4E4E4] rounded-full overflow-hidden w-full">
              <div className="bg-[#6C5DD3] h-2" style={{ width: '46%' }}></div>
            </div>
          </div>
        </div>
        <div className="border border-neutral-200 rounded-lg ml-auto">
          <div className="relative ml-2 w-52">
            <button className="flex items-center text-sm text-neutral-700 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 4.75H6.75a3.5 3.5 0 0 0-3.5 3.5v9.5a3.5 3.5 0 0 0 3.5 3.5h10.5a3.5 3.5 0 0 0 3.5-3.5v-9.5a3.5 3.5 0 0 0-3.5-3.5m-14 4.5h17.5M7.361 4.75v-2m9.25 2v-2"/>
              </svg>
              3 Jun 2023 - 12 Mar 2024
            </button>
          </div>
        </div>
      </div>

      {/* Line Chart */}
      <div className="mt-4">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
