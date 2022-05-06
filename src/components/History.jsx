import React from 'react'
import Item from './Item'

const History = ( {data} ) => {

    const color = (amt) => {
        if(amt > 0){
            return '#3D972E'
        } else {
            return '#CE3E3E'
        }
    }

  return (
    <div className='history'>
        <h2 className="app-head">History</h2>
        <div className="hor-br"></div>
        <div className="history-list">
            {data.map((item) => (
                <Item
                    name={item.name}
                    amount={item.amount.slice(0,1) + '$' + item.amount.slice(1, item.amount.length)}
                    color={color(item.amount)}
                    key={item.key}
                />
            ))} 
        </div>
    </div>
  )
}

export default History