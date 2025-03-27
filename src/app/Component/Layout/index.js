import Header from "./Header";
import Aside from "./Aside";

export default function Layouts({ children }) {
  return (
    <>
      <Header/>
        <main className="max-w-[calc(100%_-_224px)] w-full ml-auto pt-20 pb-6 px-3">
          {children}
        </main>
      <Aside/>
    </>
  );
}