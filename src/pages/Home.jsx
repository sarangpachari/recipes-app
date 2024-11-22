import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRecipes } from "../redux/slices/recipeSlice";
import { FaBackward, FaForward } from "react-icons/fa";

const Home = () => {
  const dispatch = useDispatch();
  const { allRecipes, loading, errorMsg } = useSelector(
    (state) => state.recipeReducer
  );
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 6;
  const totalPages = Math.ceil(allRecipes?.length / recipesPerPage);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const visibleAllRecipes = allRecipes?.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [currentPage]);

  //PAGINATION FUNCTIONS
  const navigateToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const navigateToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <div style={{paddingTop:'10px'}} className="container-fluid my-3">
        <div className="row">
          <div className="d-flex justify-content-center flex-wrap">
            {loading ? (
              <div className="text-primary">
                <span>Loading...</span>
              </div>
            ) : allRecipes?.length > 0 ? (
              visibleAllRecipes.map((recipe, index) => (
                <div key={index}>
                  <Link
                    to={`/${recipe?.id}/view`}
                    className="text-decoration-none"
                  >
                    <div
                      class="card text-white bg-dark m-3"
                      style={{ minWidth:'20rem',maxwidth: "28rem", height: "7rem" }}
                    >
                      <div class="card-header">
                        Cuisine : <span>{recipe?.cuisine}</span>
                      </div>
                      <div class="card-body">
                        <h4 class="card-title">{recipe?.name}</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="my-5 text-center text-lg font-medium text-red-600">
                No Products Found
              </div>
            )}
          </div>
        </div>
        {/* PAGINATION   */}
        <div className="d-flex align-items-center justify-content-center mt-5">
          <span onClick={navigateToPreviousPage} style={{cursor:'pointer'}}>
            <FaBackward />
          </span>
          <span className="mx-4">
            Page {currentPage} of {totalPages}
          </span>
          <span onClick={navigateToNextPage} style={{cursor:'pointer'}}>
            <FaForward />
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
