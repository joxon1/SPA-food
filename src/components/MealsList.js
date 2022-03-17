import MealsItem from "./MealsItem";

export default function MealsList({ meals = [] }) {
  return (
    <div className="list">
      {meals.map((meal) => (
        <MealsItem key={meal.idMeal} {...meal} />
      ))}
    </div>
  );
}
