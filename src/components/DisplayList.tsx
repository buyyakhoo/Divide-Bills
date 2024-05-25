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
    <table className="table-auto">
      <thead className="sticky top-0 w-60 text-center uppercase bg-pink-900 text-pink-200">
        <tr>
          <th className="md:px-4 px-2 py-2 sm:w-11/12 min-w-36 max-w-96">รายการ</th>
          <th className="md:px-4 px-2 py-2">ราคา</th>
          <th className="md:px-4 px-2 py-2">จำนวน</th>
          <th className="md:px-4 px-2 py-2">ราคา/คน</th>
        </tr>
      </thead>
      <tbody>
  
        {handleMoneyChange.map((money, index) => (
          <tr key={index} className="text-white border-b text-center dark:bg-red-600 dark:border-red-600 hover:dark:bg-red-900" onClick={() => deleteHandleMoneyChange(money)}>          
            <th className="md:px-4 px-2 py-2 break-all">{money.description}</th>
            <td className="md:px-4 px-2 py-2">{ getAmount(money) }</td>
            <td className="md:px-4 px-2 py-2">{money.frequency}</td>
            <td className="md:px-4 px-2 py-2">{ getAmountPerPerson(money).toFixed(2) }</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DisplayList