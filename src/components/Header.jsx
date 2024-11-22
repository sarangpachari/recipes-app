import React from "react";
import { Link } from "react-router-dom";
import logoImg from '../../public/logo.png'
import { useDispatch } from "react-redux";
import { searchRecipe } from "../redux/slices/recipeSlice";

const Header = () => {
  const dispatch = useDispatch()
  return (
    <>
      <nav className="bg-light p-3 shadow">
        <div className="d-flex justify-content-between align-items-center">
            <Link to={'/'} className="text-decoration-none d-flex align-items-center"><img src={logoImg} width="40px" alt="" /><h5 className=" text-dark ms-3 d-flex flex-column">Recipe App <span className="text-secondary h6">Get ready</span></h5></Link>
            <input onChange={(e)=>dispatch(searchRecipe(e.target.value.toLowerCase()))} type="text" placeholder="Search any Recipe" className="border-0 rounded-pill p-2 w-25" />
        </div>
      </nav>
    </>
  );
};

export default Header;
