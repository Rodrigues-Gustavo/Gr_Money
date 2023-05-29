import { useContextSelector } from 'use-context-selector';
import { TransactionsContext } from '../contexts/TransactionsContext';
import { useMemo } from 'react';

export function useSummary() {
    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions
    });

    const summary = useMemo(() => {
        return transactions.reduce(
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
    }, [transactions])

    return summary;
}