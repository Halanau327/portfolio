import './App.css';
import {Header} from "./layout/header/Header";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {Testimony} from "./layout/sections/testimony/Testimony";

function App() {
    return (
        <div className="App">
            <Header/>
            <Skills/>
            <Projects/>
            <Testimony/>
        </div>
    );
}

export default App




