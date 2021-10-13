import styled from "styled-components";

export const Container = styled.div`
	background: #27282f;
	color: #fff;
	min-height: 100vh;
`;

export const Area = styled.div`
	margin: 0 auto;
	max-width: 980px;
	padding: 30px 0;
	overflow: hidden;
`;
export const Header = styled.h1`
	margin: 0;
	padding: 0;
	text-align: center;
	margin-bottom: 32px;
`;
export const ScreenWarning = styled.div`
	overflow: hidden;
	text-align: center;
	.emoji {
		font-size: 48px;
		margin-bottom: 24px;
		animation: rotate 0.25s infinite alternate linear;
		transform: rotate(-15deg) scale(1);
	}
	@keyframes rotate {
		to {
			transform: rotate(15deg);
		}
	}
`;
export const PhotosList = styled.div`
	width: 100%;
	padding: 2rem 0;

	.content {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		/* grid-template-columns: repeat(4, 1fr); */
		gap: 1rem;
	}
`;

export const UploadPhoto = styled.form`
	width: 100%;
	display: flex;
	gap: 12px;
	align-items: center;
	justify-content: space-between;
	border-radius: 12px;
	/* background: rgba(255, 255, 255, 0.1); */
	height: 45px;

	label {
		display: flex;
		align-items: center;
		justify-content: center;
    padding: 1rem;
    content: "";
    top: 0;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 12px;
    transition: all .2s;
    &:hover{
      transition: all .1s;
      background-color: #0080ca;
    }
		input[type="file"] {
      font-size: 10px;
      cursor: pointer;
			background: none;
			opacity: 1;
			position: relative;
      width: calc(100% - 10px);
			&::before {
			}
		}
	}
	button[type="submit"] {
		background: transparent;
		border: 2px solid #fff;
		color: #fff;
		border-radius: 12px;
    width: 200px;
		height: calc(100% - 4px);
		text-transform: uppercase;
		font-size: 12px;
		font-weight: 700;
		cursor: pointer;
    transition: all .2s;
    &:disabled{
      opacity: .2;
      cursor: not-allowed;
      &:hover{
			  background: transparent;
			  color: #fff;
      }
    }
		&:hover {
      transition: all .1s;
			background: #fff;
			color: #121212;
		}
	}
`;
