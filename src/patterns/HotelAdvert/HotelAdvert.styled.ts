import styled, { css } from 'styled-components';

export const HotelAdvertContainer = styled.article`
  display: grid;
  box-shadow: 0px 0.2rem 0.2rem rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.color.white};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: var(--image-max-width) 1fr;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  max-width: var(--image-max-width);
  height: 100%;
  img {
    display: block;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ToggleOverviewButton = styled.button<{ toggle: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  padding: var(--spacing);
  border: none;
  width: 100%;
  text-align: left;
  max-width: 24rem;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.primary};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: calc(var(--spacing) / 2) var(--spacing);
  }
  svg {
    float: right;
    transition: transform 0.2s ease-in-out;
  }
  ${({ toggle }) =>
    toggle &&
    css`
      svg {
        transform: rotate(90deg);
      }
    `};
`;

export const HotelDetails = styled.div`
  padding: var(--spacing);
  display: flex;
  flex-direction: column;
  h1 {
    margin: 0 0 0.5rem;
    color: ${({ theme }) => theme.color.primary};
  }
  h2 {
    margin: 0 0 1rem;
    color: ${({ theme }) => theme.color.darkGrey};
    font-weight: normal;
  }
  p {
    margin: 1rem 0 1rem;
  }
`;

export const HotelOverview = styled.div`
  grid-row: 2;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-column: 1 / span 2;
  }
  .inner {
    padding: var(--spacing);
  }
  h3 {
    margin: 0 0 1rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.primary};
  }
  p {
    margin: 0;
  }
`;
