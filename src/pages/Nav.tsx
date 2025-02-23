import { Link } from "react-router-dom";
import "./Nav.css"
import image1 from "./images/freshcart-logo.svg"
const Nav = () => {
    return (

        <div>
            {/* <div className="d-flux" >
                <p className="row  nav_content">Super Value Deals - Save more with coupons</p>
                <select className="drop_down" name="" id="">
                    <option value="">English</option>
                    <option value="">Deutsch</option>
                </select>
            </div> */}
            {/* <div className="row  nav_content1">
                <div className="col-6 ">
                    <p className="row  nav_content">Super Value Deals - Save more with coupons</p>
                </div>
                <div className=" col-6">
                    <select className="drop_down" name="" id="">
                        <option value="">English</option>
                        <option value="">Deutsch</option>
                    </select>
                </div>
            </div> */}

            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img className="mt-4 " src={image1} alt="freshcart logo" />
                    </div>
                    <div className="col-6">
                        <input className=" search_bar" placeholder="      Search For Products  🔍" type="text" />
                    </div>
                    <div className="col-2 location">
                        <a className="location_icon" href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill me-2" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>Location
                        </a>
                    </div>
                    <div className="col-2">
                        <div>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="16" fill="currentColor" className="bi bi-heart  nav_bar_icon" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                </svg> </a>
                            <a href="">  <Link to='/User'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="16" fill="currentColor" className="bi bi-person  nav_bar_icon " viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            </svg></Link></a>
                            <a href=""> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="16" fill="currentColor" className="bi bi-bag-heart nav_bar_icon  ms-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                            </svg></a>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <a className="col-3">
                        <button className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-columns-gap me-2" viewBox="0 0 16 16">
                            <path d="M6 1v3H1V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm14 12v3h-5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 8v7H1V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm14-6v7h-5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z" />
                        </svg>All Department</button>
                    </a>
                    <a className="col-1 menus">
                        <nav className="Nav-links">
                            <Link to='/Home'>Home</Link>
                        </nav>
                    </a>

                    <a className="col-1 menus">
                        <nav className="Nav-links">
                            <Link to='/Stores'>Stores</Link>
                        </nav>
                    </a>

                    <a className=" col-1 menus">
                        <nav className="Nav-links">
                            <Link to='/MegaMenu'> Menu</Link>
                        </nav>
                    </a>
                    <a className="col-1 menus">
                        <nav className="Nav-links">
                            <Link to='/Pages'>Pages</Link>
                        </nav>
                    </a>
                    <a className="col-1 menus">
                        <nav className="Nav-links">
                            <Link to='/Account'>Account</Link>
                        </nav>
                    </a>
                    <a className="col-1  menus">
                        <nav className="Nav-links">
                            <Link to='/Pages'>Dashboard</Link>
                        </nav> </a>
                    <a className="col-3 menus">
                        <nav className="Nav-links">
                            <Link to='/Account'>Docs</Link>
                        </nav>
                    </a>
                </div>
            </div>
            <hr />
        </div>





    )
}
export default Nav;