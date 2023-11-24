import React, { useEffect, useState } from "react";
import '../ItemCount/ItemCount.css'

const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div className="counter">
			<button  type="button" disabled={count <= 1} onClick={decrease} className="btn btn-secondary">
				-
			</button>
			<span>{count}</span>
			<button  type="button" disabled={count >= stock} onClick={increase} className="btn btn-secondary">
				+
			</button> 
			<div>
				<button type="button" disabled={stock <= 0} onClick={() => onAdd(count)} className="btn btn-success">
					Agregar al carrito
				</button>
			</div>
		</div>
	);
};

export default ItemCount;