import React, {useState, useEffect} from  "react";


//create your first component
const Todo = () => {

	const [inputValue, setInputValue] = useState('');
	const [listaTareas, setListaTareas] = useState([])

	useState(()=> {
		fetch("https://playground.4geeks.com/todo/users/Marck")
		.then((resp)=> {
			if(!resp.ok){
				throw new Error("El request no pudo completarse");
			}
			return resp.json();
		})
		.then((data)=> {
		setListaTareas(data.todos)
		})
		.catch((error)=> {
			console.error(error)
		})
	},[]);







	const handleChange =(e)=>{
		setInputValue(e.target.value)
	}

	const handleKey =(e)=>{
		if(e.key === 'Enter'){
			fetch("https://playground.4geeks.com/todo/todos/Marck",{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					label: inputValue,
					is_done: false
				})
			})
			.then((resp)=> {
				if(!resp.ok){
					throw new Error("No se pudo agregar la tarea")
				}
				return resp.json()
			})
			.then((data)=> {
				setListaTareas([...listaTareas, data])
			})
			.catch((error) => {
				console.error(error)
			})

			setInputValue("");
		}
	}


	return (
		<div className="text-center">
			<h1>4to intento</h1>
			<div> 
				<input 
				type="text"
			  	onChange={handleChange} 
				onKeyDown={handleKey}
				/>
				
			</div>
			<p>Nueva tarea: {inputValue}</p>
			<ul>
				{listaTareas.map((tarea, index)=> (
						<li key={index}>
							{tarea.label}
						</li>
					)
				)}
				
			</ul>
		</div>
	);
};

export default Todo;
