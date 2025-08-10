import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

function Home() {
  return (
    <>
      <div className=" w-[95%] mx-auto px-0">
        <TopBar />
        <Dashboard />
      </div>
    </>
  );
}

export default Home;
