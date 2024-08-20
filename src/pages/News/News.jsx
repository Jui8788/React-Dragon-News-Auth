import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const News = () => {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h2>News Detail</h2>
          <p>{id}</p>
        </div>

        <div className="grid col-span-1">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default News;
