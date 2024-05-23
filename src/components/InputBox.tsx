import { useState } from "react"

function InputBox({ setHandleMoneyChange } : { setHandleMoneyChange: Function }) {

  const [description, setDescription] = useState<string>('')
  const [amount, setAmount] = useState<number>(-1)
  const [frequency, setFrequency] = useState<number>(-1)
  const [category, setCategory] = useState<string>('expense')

  const handleClick = () : void => {
    if (amount > 0 && category !== 'null') {
      setHandleMoneyChange({ description, amount, frequency, category})
    }
  }

  const setAmountWithCheck = (value: string) : void => {
    if (!isNaN(parseInt(value)) && parseInt(value) > 0){
      setAmount(parseInt(value))
    } else {
      setAmount(-1)
    }
  }

  const setFrequencyWithCheck = (value: string) : void => {
    if (!isNaN(parseInt(value)) && parseInt(value) > 0) {
      setFrequency(parseInt(value))
    } else {
      setFrequency(-1)
    }
  }

  return (
    <div className="flex flex-row h-10 w-6/12 mt-5 gap-2 justify-center items-center bg-red-800 rounded-x0l">
        <input 
          className="h-10 min-w-28 sm:text-lg text-sm bg-red-700 text-amber-200 border-collapse rounded-xl" 
          type="text" 
          placeholder="อธิบายรายการ" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}  
        />
        <input 
          className="h-10 sm:w-20 w-10 sm:text-lg text-sm bg-red-700 text-amber-200 border-collapse rounded-xl" 
          type="text" 
          placeholder="ราคา/คน" 
          value={amount === -1 ? '' : amount}
          onChange={(e) => setAmountWithCheck(e.target.value) }  
        />
        <input 
          className="h-10 sm:w-20 w-10 sm:text-lg text-sm bg-red-700 text-amber-200 border-collapse rounded-xl" 
          type="text" 
          placeholder="สมาชิก" 
          value={frequency === -1 ? '' : frequency}
          onChange={(e) => setFrequencyWithCheck(e.target.value) }  
        />
        {/* รายรับหรือรายจ่าย dropdown */}
        <select 
          className="h-10 sm:w-20 w-15 sm:text-lg text-xs bg-red-700 text-amber-200 border-collapse rounded-xl"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="expense">รายจ่าย</option>
          <option value="income">รายรับ</option>
        </select>
        <button className="h-10 w-10 sm:text-lg text-sm bg-red-500 text-amber-200 rounded-xl" onClick={handleClick}>เพิ่ม</button>
    </div>
  )
}

export default InputBox
