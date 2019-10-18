import React from 'react';
import Card from './Card'

const CardList = ({robots}) => {

	return(
			<div>
				{
					robots.map((user, i) => {
						return (
							<Card 
								key={robots[i].id} 
								id={robots[i].id} 
								name={robots[i].name} 
								email={robots[i].email} 
								// Could also use return <Card key={user.id} id={user.id} name={user.name} email={user.email} />
								/>);
					})
				}
			</div>
		);
};

export default CardList;