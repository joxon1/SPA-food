import { useState, useEffect } from "react";
import { getAllMealsCategories } from "../api";
import CategoryList from "../components/CategoryList";
import  Loader  from "../components/Loader";

export default function Home() {
  const [catalog, setCatalog] = useState([]);
  useEffect(() => {
    getAllMealsCategories().then((data) => setCatalog(data.categories));
  }, []);
  return (
    <div className="home">
      {!catalog.length ? <Loader /> : <CategoryList catalog={catalog} />}
    </div>
  );
}
