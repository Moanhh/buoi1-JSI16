import React from 'react'
import './Featured.css'
import dh from '../img/dh.jpg'

function Featured() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img className="featuredImg" src={dh} alt={"img"}/>
            <div className="featuredTitles">
                <h1>Duck's house</h1>
                <h1>1223</h1>
            </div>
        </div>

        <div className="featuredItem">
        <img className="featuredImg" src={dh} alt={"img"}/>
            <div className="featuredTitles">
                <h1>Duck's house</h1>
                <h1>1223</h1>
            </div>
        </div>

        <div className="featuredItem">
        <img className="featuredImg" src={dh} alt={"img"}/>
            <div className="featuredTitles">
                <h1>Duck's house</h1>
                <h1>1223</h1>
            </div>
        </div>

    </div>
  )
}

export default Featured;
