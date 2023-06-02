import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  @media screen and (max-width: 670px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export const TransactionsTable = styled.table`
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    @media screen and (max-width: 670px) {
      width: 400px;
      display: flex;
      justify-content: center;
    }

    @media screen and (max-width: 450px) {
      width: 250px;
      display: flex;
      justify-content: center;
    }
  }
`

interface PriceHighlightProps {
    variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
        props.variant === 'income'
            ? props.theme['green-300']
            : props.theme['red-300']};
`