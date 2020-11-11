import styled, { css } from 'styled-components';

interface ButtonProps {
  isActive: boolean;
}

export const Button = styled.button<ButtonProps>`
  font-size: 1.2rem;
  padding: 0.5rem;
  flex: 1;
  text-align: center;
  margin: 0;
  width: 100%;
  max-width: 30rem;
  min-height: 5rem;
  border: none;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.primary};
  transition: background-color color 0.1s ease-in-out;
  border-radius: 0;
  svg {
    margin: 1rem auto 0;
    display: block;
    fill: ${({ theme }) => theme.color.lightGrey};
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      float: right;
      margin: 0;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: var(--spacing);
    font-size: 1.6rem;
    padding: calc(var(--spacing) / 2) var(--spacing);
    text-align: left;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex: none;
    border-bottom: solid 0.1rem ${({ theme }) => theme.color.primary};
    &:last-of-type {
      border-bottom: solid 0.1rem transparent;
    }
  }
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.white};
      svg {
        fill: ${({ theme }) => theme.color.white};
      }
    `};
`;
