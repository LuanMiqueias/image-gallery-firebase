import styled from 'styled-components';

export const Photo = styled.div`
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.1);
    padding: .88rem .88rem  0;
    display: flex;
    flex-direction: column;
    height: 325px;

    opacity: 0;
    transform: scale(.5);
    animation: showCard .2s forwards;

        @keyframes showCard{
      to{
        opacity: 1;
        transform: initial;
      }
    }
    p{
      margin: 0;
      padding: 1.25rem 4px;
      color:rgba(255, 255, 255, 0.6);
      font-size:10px;
      transition:all .2s
    }
    &:hover p{
      color:rgba(255, 255, 255, .9);
    }
    &:hover .image img{
      transition: all .2s;
      transform: scale(1.25);
    }
  .image{
    border-radius: inherit;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    display:flex;
    align-items: center;
    justify-content: center;
  .loading-container{
    position: absolute;
    opacity: .2;
  }
    img{
      transition: all .1s;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
    }
    img.hide{
      display: none;
    }
    img.show{
      animation: show .2s forwards;
    }
    @keyframes show{
      to{
        opacity: 1;
      }
    }
  }
`