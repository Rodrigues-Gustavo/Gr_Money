import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { SummaryContainer } from "./styles"

export function Summary() {
    return (
        <SummaryContainer>
            <div>
                <header>
                    <span>Entrada</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>

                <strong>R$ 100.00,00</strong>
            </div>
            <div>
                <header>
                    <span>Saída</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>

                <strong>R$ 100.00,00</strong>
            </div>
            <div>
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff" />
                </header>

                <strong>R$ 100.00,00</strong>
            </div>
        </SummaryContainer>
    );
}