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

    const imgHandler = (e) => {
        let element = e.target.parentElement.parentElement.children[0].children[1]
        // let ele1 = element.parentElement
        // let ele2 = ele1.children[0].children[1]
        let itemId = element.id
        let itemKey = itemId.slice(2, itemId.length)
        // console.log(itemKey)
        let deletedData = [...data]
        for(let i=0, n=data.length; i<n; i++){
            if(data[i].key === Number(itemKey)){
                deletedData.splice(i, 1)
                break
            }
        }
        console.log(deletedData)
        setData(deletedData)
    }

    

  return (
    <div className='app'>
        <Head total={total} income={income} expense={expense} />
        <History data={data} imgHandler={imgHandler}/>
        <Transaction setData={setData} data={data}/>
    </div>
  )
}

export default App