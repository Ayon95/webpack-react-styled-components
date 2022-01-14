import React from 'react';
import styled from 'styled-components';

function Technologies({ technologies }) {
	return (
		<section>
			<h2>Technologies used</h2>
			<TechnologiesList>
				{technologies.map(technology => (
					<li key={technology.altText}>
						<TechnologyLogo src={technology.imgPath} alt={technology.altText} />
					</li>
				))}
			</TechnologiesList>
		</section>
	);
}

export default Technologies;

const TechnologiesList = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const TechnologyLogo = styled.img`
	width: 7rem;
`;
