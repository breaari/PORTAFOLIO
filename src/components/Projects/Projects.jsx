import { Fitness } from "./fitness"
import { Siglo21 } from "./siglo21"

export const Projects = ()=>{
    return (
        <div id="projects" className="z-0 bg-celeste flex flex-col items-center justify-center font-squada p-12">
            <h1 className="text-blanco text-5xl text-center mb-12">PROYECTOS</h1>
            <div className="flex flex-col items-stretch justify-center px-12">
            <Siglo21 className=""></Siglo21>
            <Fitness></Fitness>
            </div>

        </div>
    )
}