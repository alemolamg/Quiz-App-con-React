import { Link } from 'react-router-dom';
import { imgs, categories } from '../data';
import { CategoryCard } from './CategoryCard';

const [
	imgCiencia,
	imgDeportes,
	imgFilosofia,
	imgGeografia,
	imgHistoria,
	imgLiteratura,
	imgTecnologia,
] = imgs;

export const CategoryList = () => {

	// render() {
	// 	const data = [{name: "John Doe", "age": 44}, {name:"Jane Doe", "age": 45}]
	// 	console.log('App started');
	// 	return <div>
	// 	{data.map(person => <p key={person.name}>{`${person.name}, ${person.age} years old`}</p>)}
	// 	</div>
	//   }

	// const productos = [
	// 	{ id: 1, nombre: 'Producto 1', precio: 10 },
	// 	{ id: 2, nombre: 'Producto 2', precio: 20 },
	// 	{ id: 3, nombre: 'Producto 3', precio: 30 }
	//   ];
	
	  const categoriasHtml = [];
	
	  for (let i = 0; i < categories.length; i++) {
		const producto = productos[i];
		categoriasHtml.push(
			<CategoryCard
			category={categories[i]}
			src={imgCiencia}
			alt={`Categoría ${categories[i]}`}
			gradientColor=' from-purple-500 to-pink-500'
		/>
		);
	  }

	return (
		<div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
			
			{categoriasHtml}

			{/* Category Link Ciencia */}
			<CategoryCard
				category={categories.ciencia}
				src={imgCiencia}
				alt={`Categoría ${categories.ciencia}`}
				gradientColor=' from-purple-500 to-pink-500'
			/>
			{/* Category Link Deportes */}
			<CategoryCard
				category={categories.deportes}
				src={imgDeportes}
				alt={`Categoría ${categories.deportes}`}
				gradientColor='from-lime-400 to-teal-700'
			/>
			{/* Category Link Filosofia */}
			<CategoryCard
				category={categories.filosofia}
				src={imgFilosofia}
				alt={`Categoría ${categories.filosofia}`}
				gradientColor='from-red-400 to-zinc-400'
			/>
			{/* Category Link Geografia */}
			<CategoryCard
				category={categories.geografia}
				src={imgGeografia}
				alt={`Categoría ${categories.geografia}`}
				gradientColor='from-cyan-200 to-lime-200'
			/>
			{/* Category Link Historia */}
			<CategoryCard
				category={categories.historia}
				src={imgHistoria}
				alt={`Categoría ${categories.historia}`}
				gradientColor='from-sky-300 to-indigo-900'
			/>
			{/* Category Link Literatura */}
			<CategoryCard
				category={categories.literatura}
				src={imgLiteratura}
				alt={`Categoría ${categories.literatura}`}
				gradientColor='from-amber-400 to-emerald-600'
			/>
			{/* Category Link Tecnologia */}
			<CategoryCard
				category={categories.tecnologia}
				src={imgTecnologia}
				alt={`Categoría ${categories.tecnologia}`}
				gradientColor='from-violet-900 to-rose-500 '
			/>

			{/* Category Lagos Plitvice */}
			<CategoryCard
				category={categories.lagosPlitvice}
				src={imgTecnologia}
				alt={`Categoría ${categories.lagosPlitvice}`}
				gradientColor='from-violet-900 to-blue-400 '
			/>
		</div>
	);
};
