import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";



const View = () => {
  const [recipe,setRecipe] = useState({})
  const { id } = useParams();

  useEffect(()=>{
    if(sessionStorage.getItem("allRecipes")){
      const allRecipes = JSON.parse(sessionStorage.getItem("allRecipes"))
      setRecipe(allRecipes.find((item) => item.id == id))
    }
  },[])
  return (
    <>
      <div className="container-fluid">
        <div className="row p-5 w-100">
          <div className="mb-4">
            <Link className="text-white text-decoration-none btn btn-primary" to={'/'}><FaArrowLeft/> Back</Link>
          </div>
          <div className="col-lg-6">
            <h1 className="text-dark">{recipe?.name}</h1>
            <h4>
              Cuisine : <span>{recipe?.cuisine}</span>
            </h4>
            <p>Incredients : </p>
            <ul>
              {
                recipe?.ingredients?.length>0?
                recipe?.ingredients.map((item,index)=>(
                  <li key={index}>{item}</li>
                )):(
                  <li>No Incredients</li>
                )
              }
            </ul>
            <p>Instuctions :</p>
            <ul>
              {
                recipe?.instructions?.length>0?
                recipe?.instructions.map((item,index)=>(
                  <li key={index}>{item}</li>
                )):(
                  <li>No Instuctions</li>
                )
              }
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="">
              <p>
                Time to Prepare : <span>{recipe?.prepTimeMinutes} minutes</span>
              </p>
              <p>
                Time to Cook : <span>{recipe?.cookTimeMinutes} minutes</span>
              </p>
              <p>
                Difficulty : <span>{recipe?.difficulty}</span>
              </p>
            </div>
            {/* REVIEWS */}
            <div className="mt-5">
              <h2 className="text-dark">Reviews</h2>
              <img width={'250px'} className="rounded" src={recipe?.image} alt="" />
              <p className="mt-4 d-flex align-items-center">Rating : <span className="ms-2"><FaStar className="text-warning"/>{recipe?.rating}/5 </span><span> ({recipe?.reviewCount} Reviews)</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
