import { useTransactions } from "../../hooks/useTransactions";
import { Container, ToggleButton } from "./styles";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import { useState } from "react";






export function TransactionTable() {

    const { transactions } = useTransactions()
    const [toggleChart, setToggleChart] = useState(false)


    const summary = transactions.reduce((acc, transaction) => {
      if(transaction.type ==='deposit'){
          acc.deposits += transaction.amount;
          acc.total += transaction.amount;
      } else {
          acc.withdraws += transaction.amount;
          acc.total -= transaction.amount;
      }
      return acc
  }, {
      deposits: 0,
      withdraws: 0,
      total: 0,
  })


    let acc = 0;
    const data = transactions.map(transaction => {

      if(transaction.type ==='deposit'){
        acc += transaction.amount;
    } else {
        acc -= transaction.amount;
    }

      return {title:transaction.title, amount: transaction.amount, total: acc}
    })

    console.log(data)
    
    function handleToggleChart() {
      return setToggleChart(!toggleChart)
    }
    return(
        <Container>
          <ToggleButton onClick={handleToggleChart}>{toggleChart? 'Mostrar lista' : 'Mostrar gráfico'}</ToggleButton>
          {toggleChart ? (
            <LineChart width={1080} height={300} data={data} margin={{ top: -10, right: 20, bottom: 25, left: 0 }}>
            <Line type="monotone" dataKey='total' stroke={summary.total > 0 ? "#03a83a":"#940000"} />
            <CartesianGrid stroke="#3010be" strokeDasharray="5 5" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
          </LineChart>
          ): (
            <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Preço</th>
                    <th>Categoria</th>
                    <th>Data</th>

                </tr>
            </thead>
            <tbody>
              {transactions.map( transaction => (
                <tr key={transaction.id}>
                    <td>{transaction.title}</td>
                    <td className={transaction.type}>
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(transaction.amount)}
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                        {new Intl.DateTimeFormat('pt-BR').format( new Date(transaction.createdAt))}
                    </td>
                </tr>
              ))}
            </tbody>
        </table>
          )}
            
           
          
        </Container>
    )
}