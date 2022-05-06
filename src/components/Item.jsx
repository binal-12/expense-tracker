import React from 'react'

const Item = ( {name, amount, color} ) => {
  return (
    <div className='item'>
        <div className="item-container">
            <h2 className="item-name">{name}</h2>
            <h2 className="item-amount">{amount}</h2>
        </div>
        <div className="item-colorband" style={{backgroundColor: color}}></div>
    </div>
  )
}

export default Item