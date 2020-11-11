import styled from 'styled-components';

export const SortResultsContainer = styled.aside`
  display: flex;
  margin: 0 auto;
  max-width: var(--column-max-width);
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex-direction: column;
  }
`;
