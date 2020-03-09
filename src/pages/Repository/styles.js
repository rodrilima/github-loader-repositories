import styled from 'styled-components';

export const Loading = styled.div`
  color: #FFF;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  height: 100vh;
  margin-top: 60px;
`;

export const Owner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    a:first-child {
        color: #227093;
        font-size: 16px;
        text-decoration: none;
    }
    img {
        width: 120px;
        border-radius: 50%;
        margin-top: 20px;
    }
    h1 {
        font-size: 24px;
        margin-top: 10px;
    }
    p{
        margin-top: 10px;
        font-size: 14px;
        color: #555;
        line-height: 1.4;
        text-align: center;
        max-width: 600px;
    }
    a {
        color: #227093;
        font-size: 14px;
        text-decoration: none;
        margin-top: 10px;
    }
`;
