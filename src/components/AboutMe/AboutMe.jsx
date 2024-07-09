export const AboutMe = ()=>{
    return (
        <div id="aboutme" className="z-0 bg-azuloscuro font-squada flex flex-row items-stretch justify-start p-12 space-x-8">
            <div className="w-[50%] p-8 text-center border-2 border-celeste rounded-md">
                <h1 className="text-5xl text-white">SOBRE MÍ</h1>
                <p className="text-celesteclaro text-2xl text-center mt-2">
                ¡HOLA! SOY ARIANA, UNA APASIONADA DESARROLLADORA FULL STACK CON EXPERIENCIA EN JAVASCRIPT, NODE.JS, EXPRESS, REACT, REDUX, CSS, HTML, SQL Y MÁS. ME DESTACO POR MI CAPACIDAD DE RESOLUCIÓN Y MI ENFOQUE POSITIVO ANTE DESAFÍOS NUEVOS. DISFRUTO COMBINAR LÓGICA Y CREATIVIDAD PARA CREAR SOLUCIONES INNOVADORAS QUE IMPULSEN PROYECTOS HACIA ADELANTE. SIEMPRE ESTOY ABIERTA A NUEVOS DESAFÍOS Y OPORTUNIDADES PARA CRECER PROFESIONALMENTE.
                </p>
            </div>
            <div className="flex flex-col w-[50%] space-y-8">
                <div className="text-center border-2 border-celeste rounded-md  p-8">
                    <h1 className="text-5xl text-white">EDUCACIÓN</h1>
                    <p className="text-celesteclaro text-2xl mt-2">
                    CARRERA DE DESARROLLO FULL STACK - SOY HENRY (AGO 2023 - ABR 2024)
                    </p>
                </div>
                <div className="text-center border-2 border-celeste rounded-md p-8">
                    <h1 className="text-5xl text-white">EXPERIENCIA LABORAL</h1>
                    <p className="text-celesteclaro text-2xl mt-2">
                    RESPONSABLE DEL ÁREA DE ADMISIÓN - SIGLO 21 Y TECLAB - ( FEB 2023 - ENE 2024)
                    </p>
                    <p className="text-celesteclaro text-2xl text-center mt-2">
                    INSPECTORA DE SINIESTROS - ESTUDIO DE LIQUIDACIÓN VIAN (OCT 2021 - ENE 2023 )
                    </p>
                </div> 
            </div>
        </div>
    )
}