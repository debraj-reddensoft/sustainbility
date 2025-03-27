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
        label: "Scope 1",
        data: [
          { x: "Jan", y: [10, 30] },
          { x: "Feb", y: [20, 50] },
          { x: "Mar", y: [30, 60] },
          { x: "Apr", y: [25, 55] },
          { x: "May", y: [5, 40] },
          { x: "Jun", y: [15, 45] },
          { x: "Jul", y: [8, 28] },
          { x: "Aug", y: [35, 65] },
          { x: "Sep", y: [18, 48] },
          { x: "Oct", y: [0, 50] },
          { x: "Nov", y: [12, 42] },
          { x: "Dec", y: [7, 37] }
        ],
        backgroundColor: "#27A376",
        borderColor: "#27A376",
        borderWidth: 1
      },
      {
        label: "Scope 2",
        data: [
          { x: "Jan", y: [20, 40] },
          { x: "Feb", y: [30, 60] },
          { x: "Mar", y: [50, 80] },
          { x: "Apr", y: [40, 70] },
          { x: "May", y: [10, 65] },
          { x: "Jun", y: [30, 50] },
          { x: "Jul", y: [10, 30] },
          { x: "Aug", y: [60, 90] },
          { x: "Sep", y: [20, 60] },
          { x: "Oct", y: [10, 70] },
          { x: "Nov", y: [20, 50] },
          { x: "Dec", y: [10, 80] }
        ],
        backgroundColor: "#FB8B4C",
        borderColor: "#FB8B4C",
        borderWidth: 1
      },
      {
        label: "Scope 3",
        data: [
          { x: "Jan", y: [5, 25] },
          { x: "Feb", y: [15, 45] },
          { x: "Mar", y: [25, 55] },
          { x: "Apr", y: [20, 50] },
          { x: "May", y: [0, 35] },
          { x: "Jun", y: [10, 40] },
          { x: "Jul", y: [5, 20] },
          { x: "Aug", y: [50, 75] },
          { x: "Sep", y: [15, 45] },
          { x: "Oct", y: [0, 40] },
          { x: "Nov", y: [10, 35] },
          { x: "Dec", y: [5, 50] }
        ],
        backgroundColor: "#FC8DB7",
        borderColor: "#FC8DB7",
        borderWidth: 1
      }
    ]
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: { display: true }, // Show legend to distinguish scopes
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.2 7.5V19.2C19.2 19.6774 19.0104 20.1352 18.6728 20.4728C18.3352 20.8104 17.8774 21 17.4 21H6.6C6.12261 21 5.66477 20.8104 5.32721 20.4728C4.98964 20.1352 4.8 19.6774 4.8 19.2V7.5H3V5.7H21V7.5H19.2ZM6.6 7.5V19.2H17.4V7.5H6.6ZM11.1 9.3H12.9V11.1H11.1V9.3ZM11.1 12H12.9V13.8H11.1V12ZM11.1 14.7H12.9V16.5H11.1V14.7ZM7.5 3H16.5V4.8H7.5V3Z" fill="white"/>
                </svg>
            </div>
            <div className="w-full pl-3">
                <p className="flex items-center text-sm font-medium text-black mb-2 justify-between">
                    Waste
                    <span className="font-light text-black text-base">40%</span>
                </p>
                <div className="bg-[#E4E4E4] rounded-full overflow-hidden w-full">
                    <div className="bg-[#6C5DD3] h-2" style={{width:'40%'}}></div>
                </div>
            </div>
        </div>
        <div className="border border-neutral-200 rounded-lg ml-auto">
          <div className="relative ml-2 w-52">
            <button className="flex items-center text-sm text-neutral-700 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 4.75H6.75a3.5 3.5 0 0 0-3.5 3.5v9.5a3.5 3.5 0 0 0 3.5 3.5h10.5a3.5 3.5 0 0 0 3.5-3.5v-9.5a3.5 3.5 0 0 0-3.5-3.5m-14 4.5h17.5M7.361 4.75v-2m9.25 2v-2"/>
              </svg>
              1 Aug 2023 - 31 Aug 2024
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
