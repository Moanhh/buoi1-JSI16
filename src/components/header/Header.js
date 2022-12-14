import React from 'react';
import "./Header.css";


function Header() {
  return (
    <div className="header">
       <div className="headerContainer">
        <div className="headerList">
       
        <div className="headerListItem active">
            {/* <FontAwesomeIcon icon={faBed} /> */}
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            {/* <FontAwesomeIcon icon={faPlane} /> */}
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            {/* <FontAwesomeIcon icon={faCar} /> */}
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            {/* <FontAwesomeIcon icon={faBed} /> */}
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            {/* <FontAwesomeIcon icon={faTaxi} /> */}
            <span>Airport taxis</span>
          </div>
        </div>
        <div>
          <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
        </div>
        <button className="headerBtn">Sign in / Register</button>
          
        <div className="headerSearch">
        <div className="headerSearchItem">
          <input type="text" className="headerSearchInput" 
            placeholder='Where are you going?' />
        </div>

        <div className="headerSearchItem">
          <span className="headerSearchText">10/2/2022 to 10/2/2022</span>
        </div>

        <div className="headerSearchItem">
          <span className="headerSearchText">2 adult 2 children 2 room </span>
        </div>
        <div className="headerSearchItem">
          <button className="headerBtn" >
            Search
          </button>
        </div>

        </div>
        

        
       
        </div>

      
    </div>
    
  )
}

export default Header