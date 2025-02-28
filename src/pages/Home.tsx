import { Form } from "react-router-dom"
import "./Home.css"
import ContentImg from "./images/1000055.jpg"
import cleaning from "./images/category-cleaning-essentials.jpg"
import coldDrink from "./images/category-cold-drinks-juices.jpg"
import FtuitsVegedable from "./images/category-fruits-vegetables.jpg"
import petCare from "./images/category-pet-care.jpg"
import image1 from "./images/product-img-1.jpg"
import image2 from "./images/product-img-2.jpg"
import image3 from "./images/product-img-3.jpg"
import image4 from "./images/product-img-4.jpg"
import image5 from "./images/product-img-5.jpg"



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

            <div className="shop_parent_card">
                <div className="ms-3 shoping_card_image1">
                    <h3 className="ms-4 mt-4">Fruits & Vegetables</h3>
                    <p className="ms-4 mt-2">Get Upto 30% Off</p>
                    <button className="ms-4">Shop Now</button>
                </div>
                <div className="ms-3 shoping_card_image2">
                    <h3 className="ms-4 mt-4">Freshly Baked Buns</h3>
                    <p className="ms-4 mt-2">Get Upto 25% Off</p>
                    <button className="ms-4">Shop Now</button>
                </div>
            </div>
            <div className="">
                <h2 className=" ms-5">Popular Products</h2>
            </div>
            <div className="lists_of_broduct">
                <div className="list_of_product">
                    <div className="list_of_product_discount"> <span className="custom-badge  badge bg-danger">Sale</span><br />
                        <span className="custom-badge  badge bg-success">10%</span></div>
                    <a href=""><img className=" m-1 list_of_product_img" src={image1} alt="" /></a>
                    <p className=" ms-3 lists_of_broduct_par">Snack & Munchies</p>
                    <a className=" ms-3 mb-4 lists_of_broduct_head" href="">Haldiram's Sev Bhujia</a>
                    <div className="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 ms-3 text-warning svg_image"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-half mt-2 text-warning"><path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path></svg>
                        <p className=" mt-1 ms-1 list_of_product_reting">4.3 (4)</p>
                    </div>
                    <div className=" ms-2  d-flex"><h6 >$21.6 $24</h6><a className="ms-4 mb-3 product_add_card_btn" href=""> + Add</a></div>
                </div>
                <div className="list_of_product">
                    <a href=""><img className=" m-1 list_of_product_img" src={image2} alt="" /></a>
                    <p className=" ms-3 lists_of_broduct_par">Snack & Munchies</p>
                    <a className=" ms-3 mb-4 lists_of_broduct_head" href="">Haldiram's Sev Bhujia</a>
                    <div className="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 ms-3 text-warning svg_image"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-half mt-2 text-warning"><path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path></svg>
                        <p className=" mt-1 ms-1 list_of_product_reting">4.3 (4)</p>
                    </div>
                    <div className=" ms-2  d-flex"><h6 >$21.6 $24</h6><a className="ms-4 mb-3 product_add_card_btn" href=""> + Add</a></div>
                </div>
                <div className="list_of_product">
                    <div className="list_of_product_discount"> <span className="custom-badge  badge bg-danger">Sale</span><br />
                        <span className="custom-badge  badge bg-success">10%</span></div>
                    <a href=""><img className=" m-1 list_of_product_img" src={image3} alt="" /></a>
                    <p className=" ms-3 lists_of_broduct_par">Snack & Munchies</p>
                    <a className=" ms-3 mb-4 lists_of_broduct_head" href="">Haldiram's Sev Bhujia</a>
                    <div className="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 ms-3 text-warning svg_image"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-half mt-2 text-warning"><path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path></svg>
                        <p className=" mt-1 ms-1 list_of_product_reting">4.3 (4)</p>
                    </div>
                    <div className=" ms-2  d-flex"><h6 >$21.6 $24</h6><a className="ms-4 mb-3 product_add_card_btn" href=""> + Add</a></div>
                </div>
                <div className="list_of_product">
                    <div className="list_of_product_discount"> <span className="custom-badge  badge bg-danger">Sale</span><br />
                        <span className="custom-badge  badge bg-success">10%</span></div>
                    <a href=""><img className=" m-1 list_of_product_img" src={image4} alt="" /></a>
                    <p className=" ms-3 lists_of_broduct_par">Snack & Munchies</p>
                    <a className=" ms-3 mb-4 lists_of_broduct_head" href="">Haldiram's Sev Bhujia</a>
                    <div className="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 ms-3 text-warning svg_image"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-half mt-2 text-warning"><path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path></svg>
                        <p className=" mt-1 ms-1 list_of_product_reting">4.3 (4)</p>
                    </div>
                    <div className=" ms-2  d-flex"><h6 >$21.6 $24</h6><a className="ms-4 mb-3 product_add_card_btn" href=""> + Add</a></div>
                </div>
                <div className="list_of_product">
                    <div className="list_of_product_discount"> <span className="custom-badge  badge bg-danger">Sale</span><br />
                        <span className="custom-badge  badge bg-success">10%</span></div>
                    <a href=""><img className=" m-1 list_of_product_img" src={image5} alt="" /></a>
                    <p className=" ms-3 lists_of_broduct_par">Snack & Munchies</p>
                    <a className=" ms-3 mb-4 lists_of_broduct_head" href="">Haldiram's Sev Bhujia</a>
                    <div className="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 ms-3 text-warning svg_image"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-half mt-2 text-warning"><path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path></svg>
                        <p className=" mt-1 ms-1 list_of_product_reting">4.3 (4)</p>
                    </div>
                    <div className=" ms-2  d-flex"><h6 >$21.6 $24</h6><a className="ms-4 mb-3 product_add_card_btn" href=""> + Add</a></div>
                </div>




            </div>
        </div>



    )
};

export default Home;