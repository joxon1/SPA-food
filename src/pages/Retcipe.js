import { getMealsById } from "../api";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Loader from "../components/Loader";

export default function Retcipe() {
  const { id } = useParams();
  const { goBack } = useHistory();
  const [retsipe, setRetsipe] = useState([]);
  const [showRetsipe, setShowRetcipe] = useState(false);
  const handleRetcipe = () => {
    setShowRetcipe(!showRetsipe);
  };
  useEffect(() => {
    getMealsById(id).then((data) => setRetsipe(data.meals[0]));
  }, []);

  return (
    <>
      <button className="btn" onClick={goBack}>
        Go Back
      </button>
      {!retsipe.idMeal ? (
        <Loader />
      ) : (
        <div className="retcipe">
          <img src={retsipe.strMealThumb} alt={retsipe.strMeal} />
          <h1>{retsipe.strMeal}</h1>
          <h6>
            <b>Category:</b>
            {retsipe.strCategory}
          </h6>
          {retsipe.strArea ? (
            <h6>
              <b>Area:</b> {retsipe.strArea}
            </h6>
          ) : null}
          <p>{retsipe.strInstructions}</p>
          <button onClick={handleRetcipe} className="btn">
            Show Retcipe
          </button>
          {showRetsipe ? (
            <table className="centred">
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(retsipe).map((key) => {
                  if (key.includes("Ingredient") && retsipe[key]) {
                    return (
                      <tr>
                        <td>{retsipe[key]}</td>
                        <td>{retsipe[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          ) : null}

          {retsipe.strYoutube ? (
            <div className="row">
              <h5>Video Retsipe</h5>
              <iframe
                src={`https://www.youtube.com/embed/${retsipe.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
                title={id}
                frameborder="0"
              />
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}
