import styled from 'styled-components';

export const Container = styled.div`
  width: 1280px;
  margin: 10px auto;
  padding: 30px;
  color: #212121;
  text-align: center;
  border: 0;
  border-radius: 20px;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
`;

export const TitleForm = styled.h1`
  margin: 0;
  font-size: 42px;
  color: pink;
  text-shadow: 0px 6px 4px rgba(80, 94, 233, 0.63);
`;

export const TitleContact = styled.h2`
  font-size: 28px;
  color: pink;
  text-shadow: 0px 2px 2px rgba(80, 94, 233, 0.63);
`;
