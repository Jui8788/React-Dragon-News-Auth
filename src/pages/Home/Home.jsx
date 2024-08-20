import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);

  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <h2 className="text-3xl font-poppins font-bold">This is Home</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div>
          <LeftSideNav />
        </div>
        <div className="col-span-2">
          {news.map((aNews) => (
            <NewsCard key={aNews.id} news={aNews}></NewsCard>
          ))}
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
