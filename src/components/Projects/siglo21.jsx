import siglo21 from "../../assets/desktopsiglo21.png"

export const Siglo21 = () => {
    return (
        <div className=" rounded-sm w-[40%] mt-12 flex flex-col justify-center items-center text-center">
            <img src={siglo21} className="w-[90%] p-4"></img>
            <div className="pb-4 px-4 flex flex-col justify-center">
                <h1 className="text-celesteclaro font-bold text-xl">Landing Page Universitaria</h1> 
                <p className="text-celesteclaro font-semibold">En respuesta a las necesidades de nuestra prestigiosa sede universitaria, desarrollé una impactante 
                landing page con un formulario de contacto como llamada a la acción.</p>
            </div>
        </div>
    )
}