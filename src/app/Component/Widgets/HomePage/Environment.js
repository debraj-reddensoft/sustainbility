import { Bar } from "react-chartjs-2";
import SustomSelectDropdown from "../SustomSelectDropdown";
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
                    GHG Emissions
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
              1 Jun 2023 - 11 Feb 2024
            </button>
          </div>
        </div>
      </div>

      {/* Floating Bar Chart */}
      <div className="mt-4 grid grid-cols-3 gap-x-10">
        <div className="col-span-2">
          <Bar data={data} options={options} />
        </div>
        <div className="border border-neutral-200 rounded-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl text-black font-medium">Compare it to</h3>
            <div className="border border-neutral-200 w-fit rounded-md">
              <SustomSelectDropdown/>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="shrink-0 size-12 flex items-center justify-center rounded-full border border-neutral-200 mr-3">
                <svg width="24" height="25" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.27 11.2875L13.9825 15H5.4985V6.51603L9.211 10.2285L13.453 5.98578L14.5143 7.04628L10.27 11.2875Z" fill="#375DFB"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-zinc-600 font-medium">TOTAL GHG EMISSIONS (TC02E)</p>
                <h3 className="text-sm text-zinc-700 font-medium">
                  <span className="text-xl text-black">1800</span>
                  <span className="text-xs rounded-full px-2 py-0.5 text-green-700 bg-green-400/30 mx-2">+5%</span>
                  Compare to 1 Year
                  <span className="text-base text-green-800 ml-2">+7%</span>
                </h3>
              </div>
            </div>
            <div className="flex items-center">
              <div className="shrink-0 size-12 flex items-center justify-center rounded-full border border-neutral-200 mr-3">
                <svg width="24" height="25" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.7875 10.77L6.54549 15.0135L5.48499 13.9522L9.72774 9.71024L6.01524 5.99774H14.5V14.4825L10.7875 10.77Z" fill="#35B9E9"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-zinc-600 font-medium">REDUCED (TC02E)</p>
                <h3 className="text-sm text-zinc-700 font-medium">
                  <span className="text-xl text-black">50</span>
                  <span className="text-xs rounded-full px-2 py-0.5 text-red-700 bg-red-400/30 mx-2">-3%</span>
                  Compare to 1 Year
                  <span className="text-base text-red-800 ml-2">-7%</span>
                </h3>
              </div>
            </div>
            <div className="flex items-center">
              <div className="shrink-0 size-12 flex items-center justify-center rounded-full border border-neutral-200 mr-3">
                <svg width="24" height="25" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.7875 10.77L6.54549 15.0135L5.48499 13.9522L9.72774 9.71024L6.01524 5.99774H14.5V14.4825L10.7875 10.77Z" fill="#35B9E9"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-zinc-600 font-medium">OFFSET (TC02E)</p>
                <h3 className="text-sm text-zinc-700 font-medium">
                  <span className="text-xl text-black">180</span>
                  <span className="text-xs rounded-full px-0 py-0 text-zinc-600 bg-transparent mx-2">=0.00%</span>
                  Compare to 1 Year
                  <span className="text-base text-red-800 ml-2">-7%</span>
                </h3>
              </div>
            </div>
            <div className="flex items-center">
              <div className="shrink-0 size-12 flex items-center justify-center rounded-full border border-neutral-200 mr-3">
                <svg width="24" height="25" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.27 11.2875L13.9825 15H5.4985V6.51603L9.211 10.2285L13.453 5.98578L14.5143 7.04628L10.27 11.2875Z" fill="#375DFB"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-zinc-600 font-medium">TOTAL GHG EMISSIONS (TC02E)</p>
                <h3 className="text-sm text-zinc-700 font-medium">
                  <span className="text-xl text-black">1800</span>
                  <span className="text-xs rounded-full px-2 py-0.5 text-green-700 bg-green-400/30 mx-2">+5%</span>
                  Compare to 1 Year
                  <span className="text-base text-green-800 ml-2">+7%</span>
                </h3>
              </div>
            </div>
            <div className="flex items-center">
              <div className="shrink-0 size-12 flex items-center justify-center rounded-full border border-neutral-200 mr-3">
                <svg width="24" height="25" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.7875 10.77L6.54549 15.0135L5.48499 13.9522L9.72774 9.71024L6.01524 5.99774H14.5V14.4825L10.7875 10.77Z" fill="#35B9E9"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-zinc-600 font-medium">REDUCED (TC02E)</p>
                <h3 className="text-sm text-zinc-700 font-medium">
                  <span className="text-xl text-black">50</span>
                  <span className="text-xs rounded-full px-2 py-0.5 text-red-700 bg-red-400/30 mx-2">-3%</span>
                  Compare to 1 Year
                  <span className="text-base text-red-800 ml-2">-7%</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}