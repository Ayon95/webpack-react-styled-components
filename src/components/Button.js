import styled from 'styled-components';

function Button({ text, handleClick }) {
	return <ButtonStyled onClick={handleClick}>{text}</ButtonStyled>;
}

export default Button;

const ButtonStyled = styled.button`
	border: none;
	border-radius: 4px;
	background-color: blueviolet;
	color: #fff;
	font-size: 1rem;
	padding: 0.7rem 1.5rem;
	cursor: pointer;

	&:not(:last-of-type) {
		margin-right: 0.7rem;
	}
`;
