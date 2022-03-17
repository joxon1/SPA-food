import { Link } from "react-router-dom";
export default function MealsItem(props) {
  const { strMeal, strMealThumb, idMeal } = props;
  return(
    <div class="card">
      <div class="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div class="card-content">
        <h3 class="card-title">
          <b>{strMeal}</b>
        </h3>
      </div>
      <div className="card-action">
        <Link to={`/retcipe/:${idMeal}`} className="btn">
          Watch Retcipe
        </Link>
      </div>
    </div>
  )
}
