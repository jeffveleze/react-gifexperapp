import { React, useState } from 'react';
import { AddCategory } from './componets/AddCategory';
import { GifGrid } from './componets/GifGrid';



export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One punch'])

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories}/>
			
			<hr />

			<ol>
				{
					categories.map( (category, index) =>
						<GifGrid
							key={index}
							category={category}
						/>
					)
				}
			</ol>	
		</>
	)
}