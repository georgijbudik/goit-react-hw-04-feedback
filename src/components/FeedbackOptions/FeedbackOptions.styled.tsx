import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  box-shadow: 1px 1px 1px rgb(0 0 0 / 0.2);
  border: 1px solid gray;
  border-radius: 3px;
  background-color: white;
  text-transform: capitalize;
  :hover {
    cursor: pointer;
  }
`;
