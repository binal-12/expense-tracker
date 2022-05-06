import React, { useState } from 'react'
import Head from './components/Head'
import History from './components/History'
import Transaction from './components/Transaction'

import './App.css'



const App = () => {

    let dummy = [
        {
            name : 'Books',
            amount : '-100',
            key : 1
        },
        {
            name: 'Payment',
            amount: '+500',
            key : 2
        },
        {
            name: 'ice-cream',
            amount: '-10',
            key : 3
        }
    ]
    
    let [data, setData] = useState(dummy);
    
    let total = 0;
    let expense = 0;
    let income = 0;
    data.forEach(function(item) {
        let amt = Number(item.amount)
        total += amt
        if( amt > 0){
            income += amt
        } else {
            expense += amt
        }
    })

    

  return (
    <div className='app'>
        <Head total={total} income={income} expense={expense} />
        <History data={data}/>
        <Transaction setData={setData} data={data}/>
    </div>
  )
}

export default App