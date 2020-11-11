import styled from 'styled-components';

export const StarRatingContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  li {
    margin: 0;
    padding: 0;
    svg {
      fill: ${({ theme }) => theme.color.attention};
    }
  }
`;
