import logo from "./logo.svg"
import "./App.css"
import ButtonComponent from "./Components/ButtonComponent"
import ClassImageComponent from "./Components/ClassImageComponent"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonComponent
          label="This is a Blue Button"
          customClass="button-blue"
        />
        <ButtonComponent
          label="This is a Red Button"
          customClass="button-red"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ClassImageComponent
          imageUrl="https://img.freepik.com/free-photo/beautiful-scenery-road-forest-with-lot-colorful-autumn-trees_181624-30942.jpg?w=2000"
          imageAlt="A lovely nature phone in a serene road"
          myImageStyle="customImage"
        />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Happy Reactive Coding !
        </a>
      </header>
    </div>
  )
}

export default App
