import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="my-4 flex items-center">
      <button className="btn btn-error text-white text-sm px-0 md:px-4  md:text-lg rounded-sm">Breaking News</button>
      {/* use react marquee */}
      <span>
        <Marquee pauseOnHover={true} speed={100} className="bg-slate-100 py-2">
          I can be a React component, multiple React components, or just some
          text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, accusamus?
        </Marquee>
      </span>
      
    </div>
  );
};

export default BreakingNews;
