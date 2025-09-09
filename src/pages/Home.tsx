
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
import image6 from "./images/product-img-3 (1).jpg"
import image7 from "./images/product-img-6 (1).jpg"
import image8 from "./images/product-img-7.jpg"
import image9 from "./images/product-img-8.jpg"
import image10 from "./images/product-img-9.jpg"
import teaPower from "./images/tea_sasha.jpg"
import centoDen from "./images/cento_den.jpg"
import pinapple from "./images/pineapple.jpg"
import svgicon1 from "./images/10001.svg"
import svgicon2 from "./images/10002.svg"
import svgicon3 from "./images/10003.svg"
import svgicon4 from "./images/10004.svg"
import amazonpay from "./images/amazonpay.svg"
import americanExpress from "./images/american-express.svg"
import mastercard from "./images/mastercard.svg"
import paypal from "./images/paypal.svg"
import visa from "./images/visa.svg"
import appstore from "./images/appstore-btn.svg"
import googleplay from "./images/googleplay-btn.svg"



const Home = () => {
    return (

        <div>
            <div className="fixed_button">
                <a target="_blank" className="btn btn-dark btn-float-button m-5 fs-5" href="https://bit.ly/3ZXO47D"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-share"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M12.5 17h-6.5v-14h-2"></path><path d="M6 5l14 1l-1 7h-13"></path><path d="M16 22l5 -5"></path><path d="M21 21.5v-4.5h-4.5"></path></svg>  Buy Now</a>
            </div>
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
                    <a href="">
                        <img className=" m-1 list_of_product_img" src={image1} alt="" /></a>
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
                    <div className=" ms-2  d-flex"><h6 >$21.6 $24</h6><a className="ms-5 mb-3 product_add_card_btn" href=""> + Add</a></div>
                </div>
                <div className="list_of_product">
                    <a href=""><img className=" m-1 list_of_product_img" src={image2} alt="" /></a>
                    <p className=" ms-3 lists_of_broduct_par">Bakery & Biscuits</p>
                    <a className=" ms-3 mb-4 lists_of_broduct_head" href="">NutriChoice Digestive</a>
                    <div className="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 ms-3 text-warning svg_image"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-half mt-2 text-warning"><path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path></svg>
                        <p className=" mt-1 ms-1 list_of_product_reting">4.3 (4)</p>
                    </div>
                    <div className=" ms-2  d-flex"><h6 >$24 $24</h6><a className="ms-5 mb-3 product_add_card_btn" href=""> + Add</a></div>
                </div>
                <div className="list_of_product">
                    <div className="list_of_product_discount"><span className="custom-badge  badge bg-danger">Buy 1 Get $4.00 Off</span>
                    </div>
                    <a href=""><img className=" m-1 list_of_product_img" src={image3} alt="" /></a>
                    <p className=" ms-3 lists_of_broduct_par">Snack & Munchies</p>
                    <a className=" ms-3 mb-4 lists_of_broduct_head" href="">Cadbury 5 Star Chocolate</a>
                    <div className="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 ms-3 text-warning svg_image"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-half mt-2 text-warning"><path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path></svg>
                        <p className=" mt-1 ms-1 list_of_product_reting">4.3 (4)</p>
                    </div>
                    <div className=" ms-2  d-flex"><h6 >$35 $35</h6><a className="ms-5 mb-3 product_add_card_btn" href=""> + Add</a></div>
                </div>
                <div className="list_of_product">
                    <div className="list_of_product_discount"> <span className="custom-badge  badge bg-danger">Hot</span><br />
                        <span className="custom-badge  badge bg-success">40%</span></div>
                    <a href=""><img className=" m-1 list_of_product_img" src={image4} alt="" /></a>
                    <p className=" ms-3 lists_of_broduct_par">Instant Food</p>
                    <a className=" ms-3 mb-4 lists_of_broduct_head" href="">Salted Instant Popcorn</a>
                    <div className="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 ms-3 text-warning svg_image"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-half mt-2 text-warning"><path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path></svg>
                        <p className=" mt-1 ms-1 list_of_product_reting">4.3 (4)</p>
                    </div>
                    <div className=" ms-2  d-flex"><h6 className="" >$11.7 $18</h6><a className="ms-5 mb-3 product_add_card_btn" href=""> + Add</a></div>
                </div>
                <div className="list_of_product">
                    <div className="list_of_product_discount">
                        <span className="custom-badge  badge bg-success">35%</span></div>
                    <a href=""><img className=" m-1 list_of_product_img" src={image5} alt="" /></a>
                    <p className=" ms-3 lists_of_broduct_par">Instant Food</p>
                    <a className=" ms-3 mb-4 lists_of_broduct_head" href="">Salted Instant Popcorn</a>
                    <div className="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 ms-3 text-warning svg_image"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-half mt-2 text-warning">
                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path></svg>
                        <p className=" mt-1 ms-1 list_of_product_reting">4.3 (4)</p>
                    </div>
                    <div className=" ms-2  d-flex"><h6 >$11.7 $18</h6><a className="ms-5 mb-3 product_add_card_btn" href=""> + Add</a></div>
                </div>




            </div>
            <div className="lists_of_broduct">
                <div className="list_of_product">
                    <div className="list_of_product_discount"> <span className="custom-badge  badge bg-danger">Buy 1 Get $4.00 Off</span><br />
                    </div>
                    <a href="">
                        <img className=" m-1 list_of_product_img" src={image6} alt="" /></a>
                    <p className=" ms-3 lists_of_broduct_par">Bakery & Biscuits</p>
                    <a className=" ms-3 mb-4 lists_of_broduct_head" href="">Cadbury 5 Star Chocolate</a>
                    <div className="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 ms-3 text-warning svg_image"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-half mt-2 text-warning"><path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path></svg>
                        <p className=" mt-1 ms-1 list_of_product_reting">4.3 (4)</p>
                    </div>
                    <div className=" ms-2  d-flex"><h6 >$21.6 $24</h6><a className="ms-5 mb-3 product_add_card_btn" href=""> + Add</a></div>
                </div>
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
                    <div className=" ms-2  d-flex"><h6 >$24 $24</h6><a className="ms-5 mb-3 product_add_card_btn" href=""> + Add</a></div>
                </div>
                <div className="list_of_product">
                    <div className="list_of_product_discount"><span className="custom-badge  badge bg-success">40%</span>
                    </div>
                    <a href=""><img className=" m-1 list_of_product_img" src={image7} alt="" /></a>
                    <p className=" ms-3 lists_of_broduct_par">Dairy, Bread & Eggs</p>
                    <a className=" ms-3 mb-4 lists_of_broduct_head" href="">Blueberry Greek Yogurt</a>
                    <div className="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 ms-3 text-warning svg_image"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-half mt-2 text-warning"><path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path></svg>
                        <p className=" mt-1 ms-1 list_of_product_reting">4.3 (4)</p>
                    </div>
                    <div className=" ms-2  d-flex"><h6 >$14.4 $24</h6><a className="ms-5 mb-3 product_add_card_btn" href=""> + Add</a></div>
                </div>
                <div className="list_of_product">
                    <a href=""><img className=" m-1 list_of_product_img" src={image8} alt="" /></a>
                    <p className=" ms-3 lists_of_broduct_par">Dairy, Bread & Eggs</p>
                    <a className=" ms-3 mb-4 lists_of_broduct_head" href="">Britannia Cheese Slices</a>
                    <div className="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 ms-3 text-warning svg_image"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-half mt-2 text-warning"><path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path></svg>
                        <p className=" mt-1 ms-1 list_of_product_reting">4.3 (4)</p>
                    </div>
                    <div className=" ms-2  d-flex"><h6 className="" >$24 $24</h6><a className="ms-5 mb-3 product_add_card_btn" href=""> + Add</a></div>
                </div>
                <div className="list_of_product">
                    <div className="list_of_product_discount">
                        <span className="custom-badge  badge bg-success">15%</span></div>
                    <a href=""><img className=" m-1 list_of_product_img" src={image9} alt="" /></a>
                    <p className=" ms-3 lists_of_broduct_par">Instant Food</p>
                    <a className=" ms-3 mb-4 lists_of_broduct_head" href="">Kellogg's Original Cereals</a>
                    <div className="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 ms-3 text-warning svg_image"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-half mt-2 text-warning"><path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path></svg>
                        <p className=" mt-1 ms-1 list_of_product_reting">4.3 (4)</p>
                    </div>
                    <div className=" ms-2  d-flex"><h6 >$29.75 $35</h6><a className="ms-5 mb-3 product_add_card_btn" href=""> + Add</a></div>
                </div>
            </div>
            <div className="lists_of_broduct">
                <div className="list_of_product">
                    <a href="">
                        <img className=" m-1 list_of_product_img" src={image2} alt="" /></a>
                    <p className=" ms-3 lists_of_broduct_par">Bakery & Biscuits</p>
                    <a className=" ms-3 mb-4 lists_of_broduct_head" href="">NutriChoice Digestive</a>
                    <div className="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 ms-3 text-warning svg_image"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-half mt-2 text-warning"><path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path></svg>
                        <p className=" mt-1 ms-1 list_of_product_reting">4.3 (4)</p>
                    </div>
                    <div className=" ms-2  d-flex"><h6 >$24 $24</h6><a className="ms-5 mb-3 product_add_card_btn" href=""> + Add</a></div>
                </div>
                <div className="list_of_product">
                    <a href=""><img className=" m-1 list_of_product_img" src={image10} alt="" /></a>
                    <p className=" ms-3 lists_of_broduct_par">Snack & Munchies</p>
                    <a className=" ms-3 mb-4 lists_of_broduct_head" href="">Slurrp Millet Chocolate</a>
                    <div className="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 ms-3 text-warning svg_image"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-half mt-2 text-warning"><path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path></svg>
                        <p className=" mt-1 ms-1 list_of_product_reting">4.3 (4)</p>
                    </div>
                    <div className=" ms-2  d-flex"><h6 >$0 $0</h6><a className="ms-5 mb-3 product_add_card_btn" href=""> + Add</a></div>
                </div>
                <div className="list_of_product">
                    <div className="list_of_product_discount">
                        <span className="custom-badge  badge bg-success">25%</span></div>
                    <a href=""><img className=" m-1 list_of_product_img" src={image7} alt="" /></a>
                    <p className=" ms-3 lists_of_broduct_par">Dairy, Bread & Eggs</p>
                    <a className=" ms-3 mb-4 lists_of_broduct_head" href="">Amul Butter - 500 g</a>
                    <div className="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 ms-3 text-warning svg_image"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-half mt-2 text-warning"><path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path></svg>
                        <p className=" mt-1 ms-1 list_of_product_reting">4.3 (4)</p>
                    </div>
                    <div className=" ms-2  d-flex"><h6 >$13.5 $18</h6><a className="ms-5 mb-3 product_add_card_btn" href=""> + Add</a></div>
                </div>
                <div className="list_of_product">
                    <a href=""><img className=" m-1 list_of_product_img" src={image8} alt="" /></a>
                    <p className=" ms-3 lists_of_broduct_par">Bakery & Biscuits</p>
                    <a className=" ms-3 mb-4 lists_of_broduct_head" href="">NutriChoice Digestive</a>
                    <div className="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 ms-3 text-warning svg_image"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-half mt-2 text-warning"><path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path></svg>
                        <p className=" mt-1 ms-1 list_of_product_reting">4.3 (4)</p>
                    </div>
                    <div className=" ms-2  d-flex"><h6 className="" >$11.7 $18</h6><a className="ms-5 mb-3 product_add_card_btn" href=""> + Add</a></div>
                </div>
                <div className="list_of_product">
                    <a href=""><img className=" m-1 list_of_product_img" src={image10} alt="" /></a>
                    <p className=" ms-3 lists_of_broduct_par">Snack & Munchies</p>
                    <a className=" ms-3 mb-4 lists_of_broduct_head" href="">Slurrp Millet Chocolate</a>
                    <div className="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 ms-3 text-warning svg_image"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-half mt-2 text-warning"><path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path></svg>
                        <p className=" mt-1 ms-1 list_of_product_reting">4.3 (4)</p>
                    </div>
                    <div className=" ms-2  d-flex"><h6 >$0 $0</h6><a className="ms-5 mb-3 product_add_card_btn" href=""> + Add</a></div>
                </div>




            </div>
            <div>
                <h2 className="ms-5 mt-5 fw-bolder">Daily Best Sells</h2>
            </div>

            <div className=" mt-4  fooder_card_parent">
                <div className="ms-5">
                    <div className="ms-4 fooder_card_bg">
                        <h3 className="ms-3 ">100% Organic Coffee Beans.</h3>
                        <p>Get the best deal before <br /> close.</p>
                        <button className="shop_now_button">Shop Now </button>
                    </div>
                </div>
                <div >
                    <div className=" ms-4 fooder_card"><a href=""><img className="ms-3" src={teaPower} alt="" /></a>
                        <p className=" ms-3 lists_of_broduct_par">Tea, Coffee & Drinks</p>
                        <a className=" ms-3 fw-bold fs-5 lists_of_broduct_head">Roast Ground Coffee</a>

                        <div className=" ms-2  mt-3  d-flex">
                            <h6 className="ms-1 " >$11.7 $18</h6>
                            <div className="ms-5 mb-1 d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 ms-3 text-warning svg_image"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-half mt-2 text-warning"><path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path></svg>
                                <p className=" mt-1 ms-1 list_of_product_reting">4.3 (4)</p>
                            </div>
                        </div>
                        <div className="">
                            <button className=" ms-3 add_card_btn">+ Add Card</button>
                            <div className=" d-flex w-100">
                                <span className="counton_days">1232 <br />Days
                                </span>
                                <span className="counton_days">1 <br />Hour
                                </span>
                                <span className="counton_days">2 <br />Mins
                                </span>
                            </div>
                            <span className=" counton_sec">2 <br />sec</span>
                        </div>

                    </div>
                </div>
                <div >
                    <div className=" ms-4 fooder_card"><a href=""><img className="ms-3" src={centoDen} alt="" /></a>
                        <p className=" ms-3 lists_of_broduct_par">Fruits & Vegetables</p>
                        <a className=" ms-3 fs-5 fw-bold  lists_of_broduct_head">Crushed Tomatoes</a>

                        <div className=" ms-2  mt-3  d-flex">
                            <h6 className="ms-1 " >$11.7 $18</h6>
                            <div className="ms-5 mb-1 d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 ms-3 text-warning svg_image"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-half mt-2 text-warning"><path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path></svg>
                                <p className=" mt-1 ms-1 list_of_product_reting">4.3 (4)</p>
                            </div>
                        </div>
                        <div className="">
                            <button className=" ms-3 add_card_btn">+ Add Card</button>
                            <div className=" d-flex w-100">
                                <span className="counton_days">1232 <br />Days
                                </span>
                                <span className="counton_days">1 <br />Hour
                                </span>
                                <span className="counton_days">2 <br />Mins
                                </span>
                            </div>
                            <span className=" counton_sec">2 <br />sec</span>
                        </div>

                    </div>
                </div>
                <div >
                    <div className=" ms-4 fooder_card"><a href=""><img className="ms-3" src={pinapple} alt="" /></a>
                        <p className=" ms-3 lists_of_broduct_par">Fruits & Vegetables</p>
                        <a className=" ms-3 fs-5 fw-bold lists_of_broduct_head">Golden Pineapple</a>

                        <div className=" ms-2  mt-3  d-flex">
                            <h6 className="ms-1 " >$14.4 $18</h6>
                            <div className="ms-5 mb-1 d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 ms-3 text-warning svg_image"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-fill mt-2 text-warning"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="bi bi-star-half mt-2 text-warning"><path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path></svg>
                                <p className=" mt-1 ms-1 list_of_product_reting">4.3 (4)</p>
                            </div>
                        </div>
                        <div className="">
                            <button className=" ms-3 add_card_btn">+ Add Card</button>
                            <div className=" d-flex w-100">
                                <span className="counton_days">1232 <br />Days
                                </span>
                                <span className="counton_days">1 <br />Hour
                                </span>
                                <span className="counton_days">2 <br />Mins
                                </span>
                            </div>
                            <span className=" counton_sec">2 <br />sec</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex mt-5  container ">

                <div className=" ms-3 mb-5  mt-5 terms_condision">
                    <img src={svgicon1} alt="" />
                    <h4 className="fs-4 ">10 minute grocery now</h4>
                    <p className=" lists_of_broduct_par">Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
                </div>
                <div className="  ms-5 mb-5  mt-5 terms_condision">
                    <img src={svgicon2} alt="" />
                    <h4>Best Prices & Offers</h4>
                    <p className=" lists_of_broduct_par">Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.</p>
                </div>
                <div className=" ms-5 mb-5  mt-5 terms_condision">
                    <img src={svgicon4} alt="" />
                    <h4>Wide Assortment</h4>
                    <p className=" lists_of_broduct_par">Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.</p>
                </div>
                <div className=" ms-5 mb-5  mt-5 terms_condision">
                    <img src={svgicon3} alt="" />
                    <h4>Easy Returns</h4>
                    <p className=" lists_of_broduct_par">Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy .</p>
                </div>
            </div>


            <div className="foot-container">
                <div className='d-flex ms-5 me-5 foot-content' >
                    <div className='d-flex flex-column'>
                        <h6>Categories</h6>
                        <a className='data'>Vegetables & Fruits</a>
                        <a className='data'> Breakfast & instant food</a>
                        <a className='data'> Bakery & Biscuits</a>
                        <a className='data'> Atta, rice & dal</a>
                        <a className='data'> Sauces & spreads</a>
                        <a className='data'> Organic & gourmet</a>
                        <a className='data'> Baby care</a>
                        <a className='data'> Cleaning essentials</a>
                        <a className='data'> Personal care</a>
                    </div>
                    <div className='d-flex mt-4 flex-column'>
                        <a className='data'>Dairy, bread & eggs </a>
                        <a className='data'> Cold drinks & juices</a>
                        <a className='data'> Tea, coffee & drinks</a>
                        <a className='data'> Masala, oil & more</a>
                        <a className='data'> Chicken, meat & fish</a>
                        <a className='data'>Paan corner</a>
                        <a className='data'>Pharma & wellness</a>
                        <a className='data'> Home & office</a>
                        <a className='data'>Pet care</a>
                    </div>
                    <div className='d-flex flex-column'>
                        <h6>Get to know us</h6>
                        <a className='data'>Company</a>
                        <a className='data'>About</a>
                        <a className='data'>Blog</a>
                        <a className='data'> Help Center</a>
                        <a className='data'>Our Value</a>
                    </div>
                    <div className='d-flex flex-column'>
                        <h6>For Consumers</h6>
                        <a className='data'> Payments</a>
                        <a className='data'>Shipping</a>
                        <a className='data'>Product Returns</a>
                        <a className='data'>FAQ</a>
                        <a className='data'> Shop Checkout</a>
                    </div>
                    <div className='d-flex flex-column'>
                        <h6>Become a Shopper</h6>
                        <a className='data'>  Shopper Opportunities</a>
                        <a className='data'> Become a Shopper</a>
                        <a className='data'> Earnings</a>
                        <a className='data'> Ideas & Guides</a>
                        <a className='data'>New Retailers</a>
                    </div>

                    <div className='d-flex flex-column'>
                        <h6>Freshcart programs</h6>
                        <a className='data'> Freshcart programs</a>
                        <a className='data'> Gift Cards</a>
                        <a className='data'>Promos & Coupons</a>
                        <a className='data'> Freshcart Ads</a>
                        <a className='data'> Careers</a>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-5 d-flex "> <h5 className="fooder_pament ms-4">Payment Partners</h5> <img className="ms-2" src={amazonpay} alt="" /> <img className="ms-2" src={americanExpress} alt="" /><img className="ms-2" src={mastercard} alt="" /> <img className="ms-2" src={paypal} alt="" /><img className="ms-2" src={visa} alt="" /> </div>
                    <div className="col-6 d-flex"><h5 className="fooder_pament">Get deliveries with FreshCart</h5>  <a href=""><img className="ms-3 me-3" src={appstore} alt="" /></a> <a href=""><img src={googleplay} alt="" /></a></div>
                </div>
                <hr />
                <p className="data ms-6">© 2022 - 2025 FreshCart eCommerce HTML Template. All rights reserved. Powered by</p>
                <a className="ms-5 fs-6 " href="">Codescandy.</a>
            </div>
        </div>



    )
};

export default Home;