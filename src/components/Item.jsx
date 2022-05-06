import React from 'react'
import bin from '../assets/bin.svg'

const Item = ( {name, amount, color, nkey, imgHandler} ) => {



  return (
    <div className='item'>
        <div className="item-container">
            <h2 className="item-name">{name}</h2>
            <h2 className="item-name" id={"id" + nkey} style={{display: "none"}}>{nkey}</h2>
            <h2 className="item-amount">{amount}</h2>
        </div>
        <div className="item-colorband" style={{backgroundColor: color}} >
            <img src={bin} alt="bin" onClick={imgHandler}/>
        </div>
    </div>
  )
}

export default Item