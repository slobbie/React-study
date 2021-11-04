import React from "react";
import {
    Link
  } from "react-router-dom";
  



const PcNav = () => {

  
   
    return (
            <div className="header">
                    <div className="navtop">
                        <ul>
                            <li><a href="/">고객센터</a></li>
                            <li><a href="/">관심상품</a></li>
                            <li><Link to="/profile">마이페이지</Link></li>
                            <li><a href="/">로그인</a></li>
                        </ul>
                    </div>
                    <div className="nav">
                            <div> 
                                <Link to="/" className="mainlogo"><img src="" alt=""/></Link>
                            </div>
                        <ul className="menunav">                         
                             <li><Link to="/style">STYLE</Link></li>                 
                             <li><Link to="shop">SHOP</Link></li>
                             <li><Link to="/search">돋보기</Link></li>   
                        </ul>
                    </div>
            </div>
    );
};

export default PcNav;