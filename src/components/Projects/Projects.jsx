import { Fitness } from "./fitness"
import { Siglo21 } from "./siglo21"

export const Projects = ()=>{
    return (
        <div id="projects" className="z-0 bg-azuloscuro h-screen w-full flex flex-col items-center justify-center">
            <h1 className="text-celesteclaro font-bold text-3xl text-center">Proyectos personales</h1>
            <div className="flex flex-row justify-center">
            <Siglo21 className=""></Siglo21>
            <Fitness></Fitness>
            </div>

        </div>
    )
}