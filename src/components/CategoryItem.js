import { Link } from "react-router-dom";
export default function CategoryItem(props) {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    props;
  return (
    <div class="card">
      <div class="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div class="card-content">
        <h3 class="card-title">
          <b>{strCategory}</b>
        </h3>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`} className="btn">
          Watch Categories
        </Link>
      </div>
    </div>
  );
}
