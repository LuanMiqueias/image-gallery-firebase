import styled from 'styled-components';

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  .emoji{
    font-size:48px;
    margin-bottom: 24px;
    animation: rotate .25s infinite alternate linear;
    transform: rotate(-15deg) scale(1);
  }
  .spinner{
    width: 20px;
    height: 20px;
    border-radius: 20px;
    border:solid transparent;
    border-top:solid #fff;
    border-width: 2px;
    animation: rotateSpinner .4s infinite linear;

  }
  @keyframes rotate{
    to{
      transform: rotate(15deg);
    }
  }
  @keyframes rotateSpinner{
    to{
      transform: rotate(360deg);
    }
  }
`