import { useContext } from "react"
import { TransactionsContext } from "../contexts/TransactionsContext";

export function useSummary() {
    const { transactions } = useContext(TransactionsContext);

    const summary = transactions.reduce(
        (acc, transaction) => {
            switch (transaction.type) {
                case 'income':
                    acc.income += transaction.price;
                    acc.total += transaction.price;
                    break;
                default:
                    acc.outcome += transaction.price;
                    acc.total -= transaction.price;
            }
            
            return acc;
        },
        {
            income: 0,
            outcome: 0,
            total: 0
        }
    )

    return summary;
}