import styled from 'styled-components';

export const Photo = styled.div`
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.1);
    padding: .88rem .88rem  0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 325px;

    opacity: 0;
    transform: scale(.5);
    position: relative;
    animation: showCard .2s forwards;
    overflow: hidden;

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
      transition: all .2s ease-out;
      transition-delay: 0.1s;
      transform: scale(1.25);
    }
    &:hover{
      .delete,
      button{
        opacity: 1;
      transform: translateY(0px);
      }
    }
    .delete{
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.7);
      position: absolute;
      top:0;
      left:0;
      display:flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: all .2s;
    }
    button{
      transition: all .3s;
      padding: 1.25rem 0;
      width: calc(100% - 64px);
      border:0;
      border-radius: 10px;
      background: #e7235e;
      color:#fff;
      text-transform: uppercase;
      font-weight: 900;
      text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
      box-shadow: 1px 1px 40px rgba(0, 0, 0, 0.7);
      opacity: 0;
      transform: translateY(15px);
      cursor: pointer;
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