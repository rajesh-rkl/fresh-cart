import { Form } from "react-router-dom"
import "./Home.css"
import imag10001 from "./images/10001.png"
import ContentImg from "./images/1000055.jpg"
import cleaning from "./images/category-cleaning-essentials.jpg"
import coldDrink from "./images/category-cold-drinks-juices.jpg"
import FtuitsVegedable from "./images/category-fruits-vegetables.jpg"
import petCare from "./images/category-pet-care.jpg"


const Home = () => {
    return (

        <div>
            <div className="container">
                <div className="row  card1 ">
                    <div className=" col-7 home_card">
                        <p className="card_paragraph ms-5">Opening Sale Discound 50%</p>

                        <h2 className=" card_heading ms-5">Super Market For fresh <br />
                            Grocery</h2>
                        <p className="card_paragraph2 ms-5 mt-3"> Introduced a new model for online grocery shopping and <br /> convenient home delivery.</p>
                        <button className="shop_btn ms-5" >Shop Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="ms-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>  </button>
                    </div>
                    <div className="col-5">
                        <img className=" contentimg" src={ContentImg} alt="" />
                    </div>

                </div>
                <h3 className="mt-5">Featured Categories</h3>
            </div>


            <div className=" ms-5 me-5  mt-4 product_list_cardsow">

                <a className="products_list  " href="">
                    <img className="products_list_pic" src={cleaning} alt="" />
                    <p className="products_list_names"  >Cleaning Essential</p>
                </a>
                <a className="products_list  " href="">
                    <img className="products_list_pic" src={petCare} alt="" />
                    <p className="products_list_names"  >Pet Care</p>
                </a>
                <a className="products_list  " href="">
                    <img className="products_list_pic" src={FtuitsVegedable} alt="" />
                    <p className="products_list_names">Fruits & Vegetables</p>
                </a>
                <a className="products_list  " href="">
                    <img className="products_list_pic" src={coldDrink} alt="" />
                    <p className="products_list_names">Cool Drinks</p>
                </a>

            </div>


        </div>

    )
};

export default Home;