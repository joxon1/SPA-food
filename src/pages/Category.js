import { getFilterCategoies } from "../api";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import MealsList from "../components/MealsList";

import { useParams } from "react-router-dom";

export default function Category() {
  const [meals, setMeals] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    getFilterCategoies(name).then((data) => setMeals(data.meals));
  }, [name]);
  return (
    <div className="category">
      {!meals.length ? <Loader /> : <MealsList meals={meals} />}
    </div>
  );
}
