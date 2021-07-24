import logoImg from '../../assets/logo2.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header ({ onOpenNewTransactionModal }:HeaderProps) {
    
    const clearTransactions = () => {
        localStorage.clear()
        window.location.reload()
    }


    return(
        <Container>
            <Content>
                <img src={logoImg} alt="er.conomize"/>

                <div>
                    <button type="button" onClick={clearTransactions}>
                        Limpar tudo
                    </button>
                    <button type="button" onClick={onOpenNewTransactionModal}>
                        Nova transação
                    </button>
                </div>

            
            </Content>

        </Container>
    )
}