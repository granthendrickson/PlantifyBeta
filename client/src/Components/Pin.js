import React from 'react'
import { Link } from "react-router-dom"

function Pin({ pinSize, img, link }) {
  return <div className={`pin ${pinSize}`}>
    <Link to={ link }>
      <img 
          className="main-pic" 
          src={ img }
          alt="" 
      />
    </Link>
  </div>;
}

export default Pin;