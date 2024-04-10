import Header from "../components/Header";
import LeftNav from "../components/LeftNav";
import Nav from "../components/Nav";
import RightContent from "../components/RightContent";

const Home = () => {
  return (
    <div>
      <Header />
      <Nav />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-8 ">
        <div className="border-2">
          <LeftNav />
        </div>
        <div className="border-2 lg:col-span-2 ">
          <h1>Middle News</h1>
        </div>
        <div className="border-2">
          <RightContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
