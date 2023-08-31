import Imagenes from "../config/dataBase"

const Galeria = () => {
    return (
        <section id="prueba">
            {
                Imagenes.map((imagen) =>
                (
                    <section>
                        <img src={imagen.url} alt="" />
                        <p>{imagen.Nombre}</p>
                        <p>{imagen.descripcion}</p>
                        <a href={imagen.url} >
                            {imagen.url}
                        </a>
                    </section>
                ))
            }
        </section>
    )
}

export default Galeria 