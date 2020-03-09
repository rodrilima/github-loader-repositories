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
        margin: 10px 0;
    }
`;

export const IssueList = styled.ul`
    padding-top: 30px;
    padding: 15px 10px;
    border-top: 1px solid #eee;
    list-style: none;

    p.no-issues {
        text-align: center;
    }

    h2 {
        text-align: center;
        padding: 10px 0;
    }

    li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;
    }

    li:not(:last-child) {
        margin-bottom: 10px;
    }

    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 2px solid #eee;
    }

    div {
        flex: 1;
        margin-left: 15px;

        strong {
            font-size: 16px;

            a {
                text-decoration: none;
                color: #333;

                &:hover {
                    color: #227093
                }
            }
        }

        p {
            margin-top: 5px;
            font-size: 12px;
            color: #999;
        }
    }
    a {
        color: #227093;
        font-size: 14px;
        text-decoration: none;
    }
`;
