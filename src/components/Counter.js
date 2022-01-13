import { useState } from 'react';
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
			<p>{count}</p>
			<Button text="Increment" handleClick={increment} />
			<Button text="Decrement" handleClick={decrement} />
			<Button text="Reset" handleClick={reset} />
		</div>
	);
}

export default Counter;
