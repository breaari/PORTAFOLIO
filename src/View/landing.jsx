import { Nav } from '../components/NavBar/Nav'
import { Home } from '../components/Home/Home'
import { AboutMe } from '../components/AboutMe/AboutMe'
import { Resume } from '../components/Resume/Resume'
import { Expertise } from '../components/Expertise/Expertise'
import { Projects } from '../components/Projects/Projects'
import { Contact } from '../components/Contact/Contact'
import { Studies } from '../components/Studies/Studies'
import { Footer } from "../components/Footer/Footer"

export const Landing = () => {
    return (
        <div>
            <Nav />
            <Home></Home>
            <AboutMe></AboutMe>
            <Expertise></Expertise>
            {/* <Resume></Resume>
            <Studies></Studies> */}
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}