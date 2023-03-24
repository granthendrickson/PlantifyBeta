import React from 'react'

import plant1 from "../img/plant1.jpeg" 

function Pin({ pinSize }) {
  return <div className={`pin ${pinSize}`}>
    <img 
        classname="main-pic" 
        src={ plant1 }
        alt="" 
    />
  </div>;
}

export default Pin;