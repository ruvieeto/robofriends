import React from 'react';

const Card = ({ name, email, id }) => {
	// We can use   "  const { name, email, id } = props;    that we've seen in ES6 instead of typing props.name etc 
	// To take it to the next level. Instead of destructuring  within the function, we destructed in the function parameters
	return(
		<div className='tc bg-light-pink dib br3 pa3 ma2 grow shadow-5'>
			<img alt="robot" src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;