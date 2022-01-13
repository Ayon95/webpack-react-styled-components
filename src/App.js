import styled from 'styled-components';
import Counter from './components/Counter';

function App() {
	return (
		<AppContainer>
			<h1>Webpack Demo</h1>
			<Counter />
		</AppContainer>
	);
}

export default App;

const AppContainer = styled.div`
	background-color: #ceede3;
	padding: 1rem;
	border-radius: 4px;
	font-family: Arial, Helvetica, sans-serif;
`;
