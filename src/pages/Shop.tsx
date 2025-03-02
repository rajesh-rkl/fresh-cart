import "./Home.css"
import image1 from './images/shop1.jpg'
import image2 from "./images/shop2.jpg"
import image3 from './images/shop3.jpg'
import image4 from './images/shop4.jpg'
import image5 from './images/shop5.jpg'
import image6 from './images/shop6.jpg'
import image7 from "./images/shop7.jpg"
import image8 from './images/shop8.jpg'

const Shop = ()=>{
    return(
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
        <div  className='containers'>
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
    </div>
    )
}
export default Shop ;