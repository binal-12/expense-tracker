import React from 'react'

const Transaction = ( {data, setData} ) => {

    const buttonHandler = () => {

      let nkey

      if(data.length === 0){
        nkey = 1
      } else {
        nkey = data[data.length-1].key + 1
      }

        let name = document.getElementById('name').value
        let amount = document.getElementById('amount').value
        console.log(amount)
        let add = [...data, {
            name, amount , key : nkey
        }]
        name = ""
        amount = ""
        setData(add)

    }

  return (
    <div className='trans'>
        <div className="app-head">Add new transaction</div>
        <div className="hor-br"></div>

        <h2 className="trans-text">Text :</h2>
        <input required id="name" type="text" className='trans-input'/>

        <h2 className="trans-text">Amount :</h2>
        <h3 className="trans-subtext">(negative - expense, positive + expense)</h3>
        <input id='amount' type="number" className='trans-input'/>
        <div className="button" onClick={buttonHandler}>Add transaction</div>
    </div>
  )
}

export default Transaction