import styled from 'styled-components';

export const ResultsListContainer = styled.section`
  display: grid;
  grid-gap: var(--spacing);
  width: 100%;
  margin: auto;
  max-width: var(--image-max-width);
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: var(--column-max-width);
  }
`;
