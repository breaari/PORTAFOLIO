export const Resume = ()=>{
    
    return (
        <div id="resume" className="z-0 bg-azuloscuro h-auto w-full flex flex-col items-center justify-center">
            <div className="flex justify-center text-celesteclaro text-[30px] py-3 font-bold">Historial</div>
        <div className="flex flex-row items-start">
         
          <div className="w-[40%] flex flex-col justify-center items-center">
            <div className="text-celesteclaro flex justify-center items-start text-[24px] font-bold">Educación</div>
                <div className="flex flex-col items-start w-[350px] h-[120px] mt-4 bg-[#00000080] text-celesteclaro p-4 rounded-[20px] shadow-md">
                    <a className="font-bold text-[20px]">Carrera de Desarollo Full Stack</a>
                    <a className="font-bold text-[16px]">Soy Henry</a>
                    <a className="text-[16px]">Junio 2023 - Abril 2024</a>
                </div>
          </div>

          <div className="w-[20%] flex flex-row justify-center mb-8">
            <div className="flex justify-end  w-[49%]">
                <div className="absolute  mt-[115px] w-[30px] h-[2px] bg-celesteclaro rounded-[20px]"></div>
            </div>  
            <div className="flex justify-center w-[2%]">
                <div className="w-full h-[500px] bg-celesteclaro rounded-[20px]"></div>
                <div className="absolute mt-[110px] flex justify-center w-[12px] h-[12px] bg-celesteclaro rounded-[100px]"></div>
                <div className="absolute mt-[240px] flex justify-center w-[12px] h-[12px] bg-celesteclaro rounded-[100px]"></div>
                <div className="absolute mt-[380px] flex justify-center w-[12px] h-[12px] bg-celesteclaro rounded-[100px]"></div>
            </div>
            <div className="flex w-[49%]">
                <div className="absolute mt-[245px] w-[30px] h-[2px] bg-celesteclaro rounded-[20px]"></div>
                <div className="absolute mt-[385px] w-[30px] h-[2px] bg-celesteclaro rounded-[20px]"></div>
            </div>  
          </div>
          <div className="w-[40%] flex flex-col justify-center items-center">
          <div className="text-celesteclaro flex justify-center items-start mb-4 text-[24px] font-bold">Experiencia laboral</div>
            <div className=" bg-[#00000080] text-celesteclaro p-4 w-[350px] h-[120px] mt-[130px] flex flex-col mb-6 rounded-[20px] shadow-md">
                <a className="font-bold text-[20px]">Encargada del área de admisión</a>
                <a className="font-bold text-[16px]">U. E. Siglo 21 & I. S. Teclab</a>
                <a className="text-[16px]">Febrero 2023 - Enero 2024</a>
            </div>
            <div className=" bg-[#00000080] text-celesteclaro p-4 w-[350px] h-[120px] flex flex-col mb-6 rounded-[20px] shadow-md">
                <a className="font-bold text-[20px]">Inspectora de Siniestros</a>
                <a className="font-bold text-[16px]">Estudio de liquidación Vian</a>
                <a className="text-[16px]">Octubre 2021 - Enero 2023</a>
            </div>
          </div>

        </div>
      </div>
    )
}