import React from 'react';
import { useCartContext } from '../Context/CartContext';
import './ItemCart.css'

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCart'>
            <img src={product.img} alt={product.name} />
            <div className='itemBox'>
                <p>{product.name}</p>
                <p>Cantidad:{product.quantity}</p>
                <p>Precio: ${product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button className="btn btn-danger"onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart