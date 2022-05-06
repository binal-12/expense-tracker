import React from 'react'

const Head = ( {total,income,expense} ) => {
  return (
    <div className='head'>
        <h1 className="head-heading">Expense Tracker</h1>
        <div className="head-mainbalance">
            <h2 className="main-text">your balance</h2>
            <h2 className="main-amount">${total.toFixed(2)}</h2>
        </div>
        <div className="head-amount-container">
            <div className="amount-income">
                <h2 className="amount-text">Income</h2>
                <h2 className="amount-income-money">${income.toFixed(2)}</h2>
            </div>
            <div className="ver-br"></div>
            <div className="amount-income">
                <h2 className="amount-text">Expense</h2>
                <h2 className="amount-expense-money">${Math.abs(expense).toFixed(2)}</h2>
            </div>
        </div>
    </div>
  )
}

export default Head