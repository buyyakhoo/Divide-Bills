type Money = {
  description: string,
  amount: number,
  frequency: number,
  category: string
}

function DisplayList({handleMoneyChange, deleteHandleMoneyChange} : {handleMoneyChange: Money[], deleteHandleMoneyChange: Function}) {
  const getAmount = (money : Money) : number => {
    return money.category === "income" ? money.amount : money.category == "expense" ? -money.amount : -1
  }

  const getAmountPerPerson = (money : Money) : number => {
    return money.category === "income" ? money.amount / money.frequency : money.category == "expense" ? -money.amount / money.frequency : -1
  }

  return (
    <div className="flex flex-col w-full mt-5 h-full p-2 gap-1 bg-red-700 rounded-xl overflow-y-auto">
        {handleMoneyChange.map((money, index) => (
          <div key={index} className="flex flex-row justify-between bg-red-500 hover:bg-red-600 text-amber-200 p-2 rounded-xl" onClick={() => deleteHandleMoneyChange(money)}>
                  <div className="sm:text-xl text-xs">{money.description}</div>
                  <div className="flex flex-row gap-10 sm:min-w-56 w-36 justify-between">
                    <div className="sm:text-xl text-xs">{ getAmount(money) }</div>
                    <div className="sm:text-xl text-xs">{money.frequency}</div>
                    <div className="sm:text-xl text-xs">{ getAmountPerPerson(money).toFixed(2) }</div>
                  </div>
          </div>
        ))}
  </div>
  )
}

export default DisplayList