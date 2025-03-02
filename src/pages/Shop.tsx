import "./Home.css"
import image1 from './images/shop1.jpg'
import image2 from "./images/shop2.jpg"
import image3 from './images/shop3.jpg'
import image4 from './images/shop4.jpg'
import image5 from './images/shop5.jpg'
import image6 from './images/shop6.jpg'
import image7 from "./images/shop7.jpg"
import image8 from './images/shop8.jpg'
import amazonpay from "./images/amazonpay.svg"
import americanExpress from "./images/american-express.svg"
import mastercard from "./images/mastercard.svg"
import paypal from "./images/paypal.svg"
import visa from "./images/visa.svg"
import appstore from "./images/appstore-btn.svg"
import googleplay from "./images/googleplay-btn.svg"


const Shop = () => {
    return (
        <div>
            <h4 className='m-5 ps-4 '>We have 9 vendors now</h4>
            <div className='containers'>
                <div className='cards p-3 py-5 px-4 d-flex'>
                    <div>
                        <img className='image me-5' src={image1} width={70} height={70} alt="img" />
                    </div>
                    <div>
                        <h3 className='heading'>E-Grocery Super Market</h3>
                        <p>Organic-Groceries-Butcher Shop</p>
                        <p>Delivery <br />
                            Pickup available</p>
                        <a className='text-secondary mx-2'>7.5 mi away</a>
                        <a className='text-secondary mx-2'>In-store prices</a>
                    </div>
                </div>
                <div className='cards p-3 py-5 px-4 d-flex'>
                    <div>
                        <img className='image me-5' src={image2} width={70} height={70} alt="img" />
                    </div>
                    <div>
                        <h3 className='heading'>DealShare Mart</h3>
                        <p>Alcohol-Groceries</p>
                        <p>Delivery <br />
                            Pickup available</p>
                        <a className='text-secondary mx-2'>7.5 mi away</a>
                    </div>
                </div>
                <div className='cards p-3 py-5 px-4 d-flex'>
                    <div>
                        <img className='image me-5' src={image3} width={70} height={70} alt="img" />
                    </div>
                    <div>
                        <h3 className='heading'>DMart</h3>
                        <p>Groceries-Bakery-Deli</p>
                        <p className='text-green'>Delivery  by 10:30pm <br />
                            Pickup available</p>
                        <a className='text-secondary mx-2 '>9.3 mi away</a>
                    </div>
                </div>
                <div className='cards p-3 py-5 px-4 d-flex'>
                    <div>
                        <img className='image me-5' src={image4} width={70} height={70} alt="img" />
                    </div>
                    <div>
                        <h3 className='heading'>Blinkit Store</h3>
                        <p> Meal-KitsPrepared-MealsOrganic</p>
                        <p >Delivery <br />
                            Pickup available</p>
                        <a className='text-secondary mx-2'>40.5 mi away</a>

                    </div>
                </div>
                <div className='cards p-3 py-5 px-4 d-flex'>
                    <div>
                        <img className='image me-5' src={image5} width={70} height={70} alt="img" />
                    </div>
                    <div>
                        <h3 className='heading'>StoreFront Super Market
                        </h3>
                        <p> Groceries-Bakery</p>
                        <p className='text-green'>Delivery by 11:30pm <br />
                            Pickup available</p>
                        <a className='text-secondary mx-2'>28.5 mi away</a>

                    </div>
                </div>
                <div className='cards p-3 py-5 px-4 d-flex'>
                    <div>
                        <img className='image me-5' src={image6} width={70} height={70} alt="img" />
                    </div>
                    <div>
                        <h3 className='heading'>BigBasket
                        </h3>
                        <p> Groceries-Deli</p>
                        <p className='text-green'>Delivery by 10:30pm <br />
                            Pickup available</p>
                        <a className='text-secondary mx-2'>7.5 mi away</a>

                    </div>
                </div>
                <div className='cards p-3 py-5 px-4 d-flex'>
                    <div>
                        <img className='image me-5' src={image7} width={70} height={70} alt="img" />
                    </div>
                    <div>
                        <h3 className='heading'>Swiggy Instamart
                        </h3>
                        <p>Meal-KitsPrepared-MealsOrganic</p>
                        <p>Delivery <br />
                            Pickup available</p>
                        <a className='text-secondary mx-2'>40.5 mi away</a>

                    </div>
                </div>
                <div className='cards p-3 py-5 px-4 d-flex'>
                    <div>
                        <img className='image me-5' src={image6} width={70} height={70} alt="img" />
                    </div>
                    <div>
                        <h3 className='heading'>Online Grocery Mart</h3>
                        <p>Groceries-Bakery</p>
                        <p className='text-green'>Delivery by 11:30pm <br />
                            Pickup available</p>
                        <a className='text-secondary mx-2'>28.5 mi away</a>
                    </div>
                </div>
                <div className='cards p-3 py-5 px-4 d-flex'>
                    <div>
                        <img className='image me-5' src={image8} width={70} height={70} alt="img" />
                    </div>
                    <div>
                        <h3 className='heading'>Spencers
                        </h3>
                        <p> Groceries-Deli</p>
                        <p>Delivery <br />
                            Pickup available</p>
                        <a className='text-secondary mx-2'>7.5 mi away</a>
                    </div>
                </div>
            </div>
            <h1 className='m-5 ps-4'>Recently viewed</h1>
            <div className='containers'>
                <div className='cards p-3 py-5 px-4 d-flex'>
                    <div>
                        <img className='image me-5' src={image4} width={70} height={70} alt="img" />
                    </div>
                    <div>
                        <h3 className='heading'>Blinkit Store</h3>
                        <p> Meal-KitsPrepared-MealsOrganic</p>
                        <p >Delivery <br />
                            Pickup available</p>
                        <a className='text-secondary mx-2'>40.5 mi away</a>

                    </div>
                </div>
                <div className='cards p-3 py-5 px-4 d-flex'>
                    <div>
                        <img className='image me-5' src={image5} width={70} height={70} alt="img" />
                    </div>
                    <div>
                        <h3 className='heading'>StoreFront Super Market
                        </h3>
                        <p> Groceries-Bakery</p>
                        <p className='text-green'>Delivery by 11:30pm <br />
                            Pickup available</p>
                        <a className='text-secondary mx-2'>28.5 mi away</a>

                    </div>
                </div>
                <div className='cards p-3 py-5 px-4 d-flex'>
                    <div>
                        <img className='image me-5' src={image6} width={70} height={70} alt="img" />
                    </div>
                    <div>
                        <h3 className='heading'>BigBasket
                        </h3>
                        <p> Groceries-Deli</p>
                        <p className='text-green'>Delivery by 10:30pm <br />
                            Pickup available</p>
                        <a className='text-secondary mx-2'>7.5 mi away</a>

                    </div>
                </div>
                <div className='cards p-3 py-5 px-4 d-flex'>
                    <div>
                        <img className='image me-5' src={image7} width={70} height={70} alt="img" />
                    </div>
                    <div>
                        <h3 className='heading'>Swiggy Instamart
                        </h3>
                        <p>Meal-KitsPrepared-MealsOrganic</p>
                        <p>Delivery <br />
                            Pickup available</p>
                        <a className='text-secondary mx-2'>40.5 mi away</a>

                    </div>
                </div>
                <div className='cards p-3 py-5 px-4 d-flex'>
                    <div>
                        <img className='image me-5' src={image6} width={70} height={70} alt="img" />
                    </div>
                    <div>
                        <h3 className='heading'>Online Grocery Mart</h3>
                        <p>Groceries-Bakery</p>
                        <p className='text-green'>Delivery by 11:30pm <br />
                            Pickup available</p>
                        <a className='text-secondary mx-2'>28.5 mi away</a>
                    </div>
                </div>
                <div className='cards p-3 py-5 px-4 d-flex'>
                    <div>
                        <img className='image me-5' src={image8} width={70} height={70} alt="img" />
                    </div>
                    <div>
                        <h3 className='heading'>Spencers
                        </h3>
                        <p> Groceries-Deli</p>
                        <p>Delivery <br />
                            Pickup available</p>
                        <a className='text-secondary mx-2'>7.5 mi away</a>
                    </div>
                </div>

            </div>

            <div className=" foot-container">
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
                    <div className="col-6 d-flex "> <h5 className="fooder_pament ms-4">Payment Partners</h5> <img className="ms-2" src={amazonpay} alt="" /> <img className="ms-2" src={americanExpress} alt="" /><img className="ms-2" src={mastercard} alt="" /> <img className="ms-2" src={paypal} alt="" /><img className="ms-2" src={visa} alt="" /> </div>
                    <div className="col-6 d-flex"><h5 className="fooder_pament">Get deliveries with FreshCart</h5>  <a href=""><img className="ms-3 me-3" src={appstore} alt="" /></a> <a href=""><img src={googleplay} alt="" /></a></div>
                </div>
                <hr />
                <p className="data ms-5 ">© 2022 - 2025 FreshCart eCommerce HTML Template. All rights reserved. Powered by</p>
                <a className="ms-5 fs-6 " href="">Codescandy.</a>
            </div>



        </div>
    )
}
export default Shop;