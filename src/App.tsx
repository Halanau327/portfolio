import './App.css';
import {Header} from "./layout/header/Header";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Footer} from "./layout/sections/footer/Footer";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn";

function App() {
    return (
        <div className="App">
            <Header/>
            <Skills/>
            <Projects/>
            <Testimony/>
            <Contacts/>
            <Footer/>
            <GoTopBtn/>
        </div>
    );
}

export default App




