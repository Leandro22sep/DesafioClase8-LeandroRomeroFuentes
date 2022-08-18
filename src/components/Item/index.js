import { NavLink } from "react-router-dom"
import ItemCount from '../ItemCount'
import { useState } from "react";

const Item = (props) => {
    const [contador, setContador] = useState(0);
    if (props.detail === false) {
        return (

            <section className="item">
                <div>{props.producto.nombre}</div>
                <img src={props.producto.imagen} alt={props.producto.nombre} />
                <div>${props.producto.precio}</div>
                <NavLink to={`/detalle/${props.producto.id}`}><button>Ver detalle</button></NavLink>
            </section>

        )
    } else {
        return (
            <section className="item">
                <div>{props.producto.nombre}</div>
                <img src={props.producto.imagen} alt={props.producto.nombre} />
                <div>${props.producto.precio}</div>
                <div>{props.producto.detalle}</div>
                <div>Stock disponible:{props.producto.stock}</div>
                <ItemCount contador={contador} setContador={setContador} stock={props.producto.stock} initial={0}></ItemCount>
            </section>
        )
    }
}
export default Item