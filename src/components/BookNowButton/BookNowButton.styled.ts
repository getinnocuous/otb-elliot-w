import styled from 'styled-components';

export const Button = styled.a`
  background: ${({ theme }) => theme.color.attention};
  color: ${({ theme }) => theme.color.primary};
  padding: calc(var(--spacing) / 2) var(--spacing);
  border-radius: 0.5rem;
  margin: auto auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 22rem;
  transition: transform 0.2s ease-in-out;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: none;
  }
  .cta {
    font-size: 1.6rem;
    font-weight: bold;
  }
  .price {
    font-size: 2.4rem;
    font-weight: bold;
  }
  @media (hover: hover) {
    &:hover {
      transform: scale(1.01);
    }
  }
`;
