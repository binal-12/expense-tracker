import React from 'react'

const Transaction = ( {data, setData} ) => {

    const buttonHandler = () => {
        const name = document.getElementById('name').value
        const amount = document.getElementById('amount').value
        console.log(amount)
        let add = [...data, {
            name, amount , key : data[data.length-1].key + 1
        }]
        console.log(add)
        setData(add)

    }

  return (
    <div className='trans'>
        <div className="app-head">Add new transaction</div>
        <div className="hor-br"></div>

        <h2 className="trans-text">Text :</h2>
        <input id="name" type="text" className='trans-input'/>

        <h2 className="trans-text">Amount :</h2>
        <h3 className="trans-subtext">(negative - expense, positive + expense)</h3>
        <input id='amount' type="text" className='trans-input'/>
        <div className="button" onClick={buttonHandler}>Add transaction</div>
    </div>
  )
}

export default Transaction