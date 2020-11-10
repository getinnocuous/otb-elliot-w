import styled, { css } from 'styled-components';

interface ButtonProps {
  isActive: boolean;
}

export const Button = styled.button<ButtonProps>`
  font-size: 1.8rem;
  margin: 0;
  padding: 1rem 2rem;
  width: 100%;
  max-width: 30rem;
  min-height: 5rem;
  border: none;
  text-align: left;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.primary};
  border-bottom: solid 0.2rem ${({ theme }) => theme.color.primary};
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.white};
    `};
`;
