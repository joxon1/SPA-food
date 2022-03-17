import { API_URL } from "./config";

const getMealsById = async (mealsID) => {
  const response = await fetch(API_URL + "lookup.php?i=" + mealsID);
  return response.json();
};
const getAllMealsCategories = async () => {
  const response = await fetch(API_URL + "categories.php");
  return response.json();
};
const getFilterCategoies = async (categoryName) => {
  const response = await fetch(API_URL + "filter.php?c=" + categoryName);
  return response.json();
};
export { getMealsById, getAllMealsCategories, getFilterCategoies };
