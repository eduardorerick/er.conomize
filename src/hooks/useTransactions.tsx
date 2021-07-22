import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';
interface Transaction {
    id: string;
    title: string;
    amount: number;
    type: string; 
    category: string;
    createdAt: Date;
}

interface TransactionsProviderProps {
    children: ReactNode
}

// interface TransactionInput {
//     title: string;
//     amount: number;
//     type: string; 
//     category: string;
// }

// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction:TransactionInput) => Promise<void>;
}


export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider ({children}: TransactionsProviderProps) {
    
    const [transactions, setTransactions] = useState<Transaction[]>([])


    useEffect(() => {
        const returnURL =  localStorage.getItem('transactions');
        if (returnURL) {
            const data = JSON.parse(returnURL)
            setTransactions(data)
        }
    }, [])

    async function createTransaction(transactionInput: TransactionInput) {

        const transaction = {...transactionInput, createdAt:new Date() , id: uuid()}


        setTransactions([
            ...transactions,
            transaction,
        ]);

        localStorage.setItem('transactions', JSON.stringify(
            [
                ...transactions,
                transaction,
            ]
        ));

    }

    return (
        <TransactionsContext.Provider value={{ createTransaction, transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext)

    return context
}