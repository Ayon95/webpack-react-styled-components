import styled from 'styled-components';
import Counter from './components/Counter';
import Technologies from './components/Technologies';
import { technologies } from './services/technologies';
import reactProgramming from './assets/images/react-programming.jpg';

function App() {
	return (
		<AppContainer>
			<h1>Webpack Demo</h1>
			<Counter />
			<Technologies technologies={technologies} />
			<img src={reactProgramming} alt="Computer screen showing react code" />
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
