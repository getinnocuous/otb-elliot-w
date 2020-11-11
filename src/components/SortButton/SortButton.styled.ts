import styled, { css } from 'styled-components';

interface ButtonProps {
  isActive: boolean;
}

export const Button = styled.button<ButtonProps>`
  font-size: 1.2rem;
  padding: var(--spacing);
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
    display: none;
    float: right;
    fill: ${({ theme }) => theme.color.lightGrey};
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: block;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.8rem;
    padding: calc(var(--spacing) / 2) var(--spacing);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex: none;
    text-align: left;
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
