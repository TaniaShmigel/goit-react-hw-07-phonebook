import styled from 'styled-components';

export const ListElem = styled.li`
  display: flex;
  flex-basis: calc((100% - 20px - 60px) / 3);
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  padding: 10px;
  border-radius: 50px;

  color: #fff;
  background: rgb(260 150 220);
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const Button = styled.button`
  margin: 0 auto;
  padding: 5px 15px;

  border: 1px solid black;
  border-radius: 100px;
  border-color: white;
  background-color: transparent;
  color: white;

  :hover,
  :focus {
    background-color: violet;
    color: white;
  }
`;
