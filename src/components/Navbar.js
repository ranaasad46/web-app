import React, { useState } from "react";
import { useEffect } from "react";
// import { useEffect } from "react";
// import { useContext } from "react";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import { CartContext } from "../context/Cart";
import { WishContext } from "../context/Wish";



export default function Navbar(props) {

  const [category, setCategory] = useState(sessionStorage.getItem("category"));
  const { openCart, cartQuantity } = CartContext();
  const {openWish,WishQuantity} =  WishContext();
  const handleClick = (newCategory) => {
    setCategory(newCategory);
  };
  useEffect(() => {
    sessionStorage.setItem("category", category);
  }, [category]);
  
  return (
    <div>
      <div className="sticky">
        <nav className={`navbar navbar-expand-lg navbar-light bg-light py-3`}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item text-decor">
                  <Link className="nav-link" type="submit" to="/" onClick={(e)=>{window.scrollTo(0,0);e.stopPropagation();}}>
                    Logo here
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" type="submit" to="/AboutUs" onClick={()=>window.scrollTo(0,0)}>
                    About Us
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" type="submit" to="/ContactUs" onClick={()=>window.scrollTo(0,0)}>
                    Contact Us
                  </Link>
                </li>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search Products,Brands and more"
                    aria-label="Search"
                    style={{ width: "100%" }}
                    size="80"
                  />
                  <a href="/" className="btn btn-outline-light" type="icon">
                    <svg className="svg-icon" viewBox="0 0 20 20">
                      <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                    </svg>
                  </a>
                </form>
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0 ml-2">
                <li className="nav-item text-decor">
                  <Link
                    to="/SignIn"
                    className=" nav-link "
                    type="submit"
                    value="sign-in"
                    onClick={()=>window.scrollTo(0,0)}
                  >
                    <svg className="svg-icon" viewBox="0 0 20 20">
                      <path
                        fill="none"
                        d="M12.443,9.672c0.203-0.496,0.329-1.052,0.329-1.652c0-1.969-1.241-3.565-2.772-3.565S7.228,6.051,7.228,8.02c0,0.599,0.126,1.156,0.33,1.652c-1.379,0.555-2.31,1.553-2.31,2.704c0,1.75,2.128,3.169,4.753,3.169c2.624,0,4.753-1.419,4.753-3.169C14.753,11.225,13.821,10.227,12.443,9.672z M10,5.247c1.094,0,1.98,1.242,1.98,2.773c0,1.531-0.887,2.772-1.98,2.772S8.02,9.551,8.02,8.02C8.02,6.489,8.906,5.247,10,5.247z M10,14.753c-2.187,0-3.96-1.063-3.96-2.377c0-0.854,0.757-1.596,1.885-2.015c0.508,0.745,1.245,1.224,2.076,1.224s1.567-0.479,2.076-1.224c1.127,0.418,1.885,1.162,1.885,2.015C13.961,13.689,12.188,14.753,10,14.753z M10,0.891c-5.031,0-9.109,4.079-9.109,9.109c0,5.031,4.079,9.109,9.109,9.109c5.031,0,9.109-4.078,9.109-9.109C19.109,4.969,15.031,0.891,10,0.891z M10,18.317c-4.593,0-8.317-3.725-8.317-8.317c0-4.593,3.724-8.317,8.317-8.317c4.593,0,8.317,3.724,8.317,8.317C18.317,14.593,14.593,18.317,10,18.317z"
                      ></path>
                    </svg>
                    Sign In
                  </Link>
                </li>
                <li className="nav-item text-decor">
                  <Link
                    to="/SignUp"
                    className="nav-link"
                    type="submit"
                    value="sign-up"
                  >
                    <svg className="svg-icon" viewBox="0 0 20 20">
                      <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                    </svg>
                    Sign Up
                  </Link>
                </li>
                <li>
                  {WishQuantity > 0 && (
                    <Button onClick={()=>openWish()} style={{height:"3rem", width:"3rem",position:"relative"}} variant= "outline" className="rounded-circle grid justify-content-center">
                      <svg
                                className="svg-wish-nav"
                                style={{
                                  width: "2rem",
                                  height: "2rem",
                                  fill: "#FFFFFF",
                                }}
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 122.88 107.21"
                              >
                                <path d="M73.13,93.77,59.58,107.21,44,92.19c-2.43-2.35-5.25-4.92-8.18-7.59C19.93,70.14.79,52.69,0,31.09l0-1.65A28.51,28.51,0,0,1,9,8.54,31.68,31.68,0,0,1,29.57.31l1.71,0c13.72.18,20,6.2,28.18,14.24C66.21,7.38,71.81,1.52,83.21.21a33.07,33.07,0,0,1,18.62,3.37,34.41,34.41,0,0,1,12.24,10.25,31,31,0,0,1,6,14.86A30.55,30.55,0,0,1,116.82,46c-.41.8-.88,1.65-1.39,2.52l-.45.74A30.65,30.65,0,0,1,73.13,93.77Zm15.22-35.6a3.69,3.69,0,0,1,.3-1.48l0-.06a3.8,3.8,0,0,1,2.06-2,3.94,3.94,0,0,1,1.47-.31h0a3.87,3.87,0,0,1,1.48.29,4.15,4.15,0,0,1,1.26.84,3.87,3.87,0,0,1,.84,1.25l0,.07a4,4,0,0,1,.28,1.4v7.78h7.75a3.87,3.87,0,0,1,1.48.29,3.92,3.92,0,0,1,1.26.84,4,4,0,0,1,.84,1.25l0,.07a3.78,3.78,0,0,1,.28,1.35v.15a3.86,3.86,0,0,1-.29,1.41,4.15,4.15,0,0,1-.84,1.26,3.7,3.7,0,0,1-1.25.83l-.07,0a4,4,0,0,1-1.39.28H96.12v7.75a3.87,3.87,0,0,1-.3,1.48A3.92,3.92,0,0,1,95,84.17l-.08.07a3.72,3.72,0,0,1-1.17.77l-.07,0a3.8,3.8,0,0,1-1.4.28h0a4.07,4.07,0,0,1-1.48-.3,3.85,3.85,0,0,1-2.09-2.08,3.79,3.79,0,0,1-.3-1.47V73.69H80.6a3.87,3.87,0,0,1-1.48-.3l-.06,0a3.58,3.58,0,0,1-1.2-.81A3.87,3.87,0,0,1,77,71.3l0-.07a4,4,0,0,1-.28-1.4v0A4,4,0,0,1,77,68.33a3.86,3.86,0,0,1,.84-1.27,4,4,0,0,1,1.25-.83,3.71,3.71,0,0,1,1.47-.3h7.78V58.17Zm21.7-13.31c.34-.58.67-1.17,1-1.76a24.13,24.13,0,0,0,2.56-13.67,24.39,24.39,0,0,0-4.72-11.73,27.78,27.78,0,0,0-9.92-8.31A26.62,26.62,0,0,0,84,6.68c-9.13,1-14,6.2-19.9,12.47l-4.43,4.64L55.2,19.45c-7.27-7.14-12.74-12.52-24-12.67l-1.4,0a25.21,25.21,0,0,0-16.36,6.5A22.12,22.12,0,0,0,6.49,29.52l0,1.34c.67,18.85,18.72,35.3,33.67,48.93,2.89,2.63,5.67,5.16,8.32,7.72l11,10.61,9-8.91a30.66,30.66,0,0,1,41.55-44.35Zm-.76,7.87a24.14,24.14,0,1,0,7.07,17.07,24.06,24.06,0,0,0-7.07-17.07Z" />
                              </svg>
                    </Button>

                  )
                  }
                </li>
                <li>
                {cartQuantity > 0 && (
                  <Button onClick={()=>openCart()} style={{height:"3rem", width:"3rem",position:"relative"}} variant= "outline" className="rounded-circle grid justify-content-center">
                  <svg  xmlns="http://www.w3.org/2000/svg"  version="1.1" width="25px" height="25px" viewBox="10 30 256 256" xmlSpace="preserve">


<g style={{stroke: "none" , strokeWidth: "0" , strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter" , strokeMiterlimit: "10" , fill: "none" , fillRule: "nonzero", opacity: "1"}} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
	<path d="M 89.138 21.425 c -0.824 -1.103 -2.087 -1.736 -3.464 -1.736 H 17.129 l -0.886 -3.413 c -0.704 -2.713 -3.153 -4.607 -5.956 -4.607 H 1 c -0.552 0 -1 0.448 -1 1 c 0 0.552 0.448 1 1 1 h 9.287 c 1.892 0 3.545 1.279 4.021 3.11 l 11.165 42.995 c 0.114 0.441 0.512 0.749 0.968 0.749 h 52.201 c 0.553 0 1 -0.447 1 -1 s -0.447 -1 -1 -1 H 27.214 l -2.398 -9.232 h 53.3 c 2.704 0 5.128 -1.812 5.894 -4.404 l 5.809 -19.649 C 90.21 23.918 89.961 22.528 89.138 21.425 z M 87.901 24.671 l -5.809 19.649 c -0.518 1.75 -2.152 2.972 -3.977 2.972 H 24.297 l -6.649 -25.602 h 68.025 c 0.74 0 1.418 0.34 1.861 0.933 C 87.977 23.215 88.111 23.961 87.901 24.671 z" style={{stroke: "none", strokeWidth: "1", strokeDasharray: "none",  strokeLinecap:" butt", strokeLinejoin: "miter", strokeMiterlimit: "10", fill: "rgb(0,0,0)",  fillRule: "nonzero", opacity: "1"}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
	<path d="M 35.47 78.331 c -3.762 0 -6.822 -3.061 -6.822 -6.822 s 3.061 -6.822 6.822 -6.822 c 3.762 0 6.823 3.061 6.823 6.822 S 39.232 78.331 35.47 78.331 z M 35.47 66.686 c -2.659 0 -4.822 2.163 -4.822 4.822 c 0 2.659 2.163 4.822 4.822 4.822 s 4.823 -2.163 4.823 -4.822 C 40.293 68.849 38.129 66.686 35.47 66.686 z" style={{stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt" , strokeLinejoin: "miter", strokeMiterlimit: "10" , fill: "rgb(0,0,0)", fillRule: "nonzero" ,  opacity: "1"}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
	<path d="M 68.27 78.331 c -3.762 0 -6.822 -3.061 -6.822 -6.822 s 3.061 -6.822 6.822 -6.822 c 3.763 0 6.823 3.061 6.823 6.822 S 72.032 78.331 68.27 78.331 z M 68.27 66.686 c -2.659 0 -4.822 2.163 -4.822 4.822 c 0 2.659 2.163 4.822 4.822 4.822 c 2.659 0 4.823 -2.163 4.823 -4.822 C 73.093 68.849 70.929 66.686 68.27 66.686 z" style={{stroke: "none", strokeWidth: "1",  strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10",  fill: "rgb(0,0,0)",  fillRule:" nonzero",opacity:"1"}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
</g>
</svg>
<div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{color: "white" ,height:"1.5rem",width:"1.5rem", bottom:"0",right:"0",position:"absolute",transform:"translate(25%,-125%)"}}>{cartQuantity}</div>
                  </Button>
                )}
                </li>
                
                
              </ul>
            </div>
          </div>
        </nav>
        <div>
          <nav className={`navbar navbar-expand-lg py-0 navbar-dark bg-dark`}>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/Category" onClick={()=>{handleClick("Electronics");props.selectedCategory("Electronics");window.scrollTo(0,280)}} >
                    Electronics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Category" onClick={()=>{handleClick("Toys");props.selectedCategory("Toys");window.scrollTo(0,280)}}>
                    Toys
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Category" onClick={()=>{handleClick("Home Appliance");props.selectedCategory("Home Appliance");window.scrollTo(0,280)}}>
                  Home Appliance
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Category" onClick={()=>{handleClick("Accessories");props.selectedCategory("Accessories");window.scrollTo(0,280)}}>
                  Accessories
                  </Link>
                </li>
                
                
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
