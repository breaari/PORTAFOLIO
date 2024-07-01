import fitness from "../../assets/fitnessdesktop.png"

export const Fitness = () => {
    return (
        <div className=" rounded-sm w-[40%] mt-12 flex flex-col justify-center items-center text-center">
            <img src={fitness} className="w-[90%] p-4"></img>
            <div className="pb-4 px-4 flex flex-col justify-center">
                <h1 className="text-celesteclaro font-bold text-xl">Tienda Online para distribuidora</h1> 
                <p className="text-celesteclaro font-semibold">Desarrollé una tienda online completa para una distribuidora 
                    de equipamiento deportivo, ofreciendo una experiencia de usuario fluida y funcional tanto para clientes 
                    como para administradores.</p>
            </div>
        </div>
    )
}