import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src="https://freesvg.org/img/cash1.png" alt="" />
                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}