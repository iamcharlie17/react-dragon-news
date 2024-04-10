import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="">
      <h1 className="text-2xl font-bold">All Categories</h1>
      {categories.map((c) => (
        <div key={c.id} className="bg-slate-100 py-2 px-4">
          <NavLink to={`/category${c.id}`} >{c.name}</NavLink>
        </div>
      ))}
    </div>
  );
};

export default LeftNav;
