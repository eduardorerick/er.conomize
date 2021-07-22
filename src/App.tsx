import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import {  useEffect, useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');



export function App() {

  
  useEffect(() => {
    const response = localStorage.getItem('transactions')

    if(response) {
        console.log(JSON.parse(response))
    }
}, []);

  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    return setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    return setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal} 
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

