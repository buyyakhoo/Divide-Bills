import { useState } from 'react'

import './App.css'
import InputBox from './components/InputBox'
import DisplayList from './components/DisplayList'


function App() {
  type Money = {
    description: string,
    category: string,
    amount: number,
    frequency: number,
    amountPerPerson: number
  }

  const [handleMoneyChange, setHandleMoneyChange] = useState<Money[]>([])

  const updateHandleMoneyChange = (newMoney: Money) : void => {
    newMoney.amountPerPerson = newMoney.amount / newMoney.frequency
    setHandleMoneyChange([...handleMoneyChange, newMoney]);
  }

  const deleteHandleMoneyChange = (newMoney: Money) : void => {
    setHandleMoneyChange(handleMoneyChange.filter((money) => money !== newMoney))
  }

  const getSumOfAmount = (handleMoneyChange : Money[]) : number => {
    return handleMoneyChange.reduce((acc: number, money: Money) => 
      money.category === "income" ? acc + money.amount : acc - money.amount, 0)
  }

  const getSumOfAmountPerPerson = (handleMoneyChange : Money[]) : number => {
    return handleMoneyChange.reduce((acc: number, money: Money) => 
      money.category === "income" ? acc + money.amountPerPerson : acc - money.amountPerPerson, 0)
  }

  return (
    <div className="relative flex flex-col h-screen w-screen items-center bg-red-800">
      <h1 className="sm:text-4xl text-2xl mt-5 text-amber-200 font-bold">Divide Bills</h1>
      <h2 className="sm:text-2xl text-xl mt-2 text-amber-200">หารค่าใช้จ่าย</h2>
      <div className="flex flex-row gap-5">
        <h2 className="sm:text-xl text-lg mt-2 text-amber-200">ผลรวม: { getSumOfAmount(handleMoneyChange) } บาท
        </h2>
        <h2 className="sm:text-xl text-lg mt-2 text-amber-200">ผลรวมต่อคน: { getSumOfAmountPerPerson(handleMoneyChange).toFixed(2) } บาท
        </h2>
      </div>
      <InputBox setHandleMoneyChange={updateHandleMoneyChange}/>

      <div className="flex flex-col h-4/6 w-6/12 min-w-80 mt-5 rounded-xl overflow-y-auto">
        <DisplayList handleMoneyChange={handleMoneyChange} deleteHandleMoneyChange={deleteHandleMoneyChange}/>
      </div>
    </div>
  )
}

export default App
