import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

function Counter() {
	const [count, setCount] = useState(0);

	function increment() {
		setCount(currentState => currentState + 1);
	}

	function decrement() {
		setCount(currentState => currentState - 1);
	}

	function reset() {
		setCount(0);
	}
	return (
		<div>
			<CountDisplay>Count: {count}</CountDisplay>
			<Button text="Increment" handleClick={increment} />
			<Button text="Decrement" handleClick={decrement} />
			<Button text="Reset" handleClick={reset} />
		</div>
	);
}

export default Counter;

const CountDisplay = styled.p`
	font-size: 1.6rem;
`;
