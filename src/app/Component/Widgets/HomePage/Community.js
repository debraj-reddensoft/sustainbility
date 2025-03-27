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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative left-0.5">
                    <path d="M3 22V7C3 4.64298 3 3.46447 3.73223 2.73223C4.46447 2 5.64298 2 8 2H11C13.357 2 14.5355 2 15.2678 2.73223C16 3.46447 16 4.64298 16 7V22" stroke="white" strokeWidth="1.5"/>
                    <path d="M2 22H17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M3 11H16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M21 8.52662L21.4472 8.30539C21.7162 8.17234 21.8507 8.10582 21.9253 7.98628C22 7.86674 22 7.71799 22 7.42048V6.72636C22 6.0826 22 5.76071 21.8255 5.61265C21.7702 5.5658 21.7053 5.53144 21.6353 5.51197C21.414 5.45041 21.1433 5.62896 20.6018 5.98606C19.9072 6.44425 19.5598 6.67335 19.3385 7.0001C19.265 7.10863 19.2025 7.2241 19.152 7.34482C19 7.70824 19 8.12125 19 8.94727V10.5797C19 10.8118 19.1902 11 19.4248 11C19.7722 11 20.0846 10.7907 20.2136 10.4716L21 8.52662Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="w-full pl-3">
                <p className="flex items-center text-sm font-medium text-black mb-2 justify-between">
                    GHG Community
                    <span className="font-light text-black text-base">61%</span>
                </p>
                <div className="bg-[#E4E4E4] rounded-full overflow-hidden w-full">
                    <div className="bg-[#6C5DD3] h-2" style={{width:'61%'}}></div>
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

      {/* Floating Bar Chart */}
      <div className="mt-4">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
