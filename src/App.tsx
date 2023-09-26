import { MainInputComponent } from "./components/MainInput/MainInputComponent"
import { Menu } from "./components/Menu/Menu"
import { Navigation } from "./components/Navigation/Navigation"
import { PopuSideNavbar } from "./components/PopupSideNavbar/PopuSideNavbar"
import { NotesCard } from "./components/UiComponents/NotesCard"
import { Note } from "./store/Slices/NoteData"
import { useAppSelector } from "./store/hook"
import "./stylesss.scss"


function App() {
  let notes = JSON.parse(JSON.stringify(useAppSelector(state => state.NoteData.notes)))

  return (
    <div style={{ backgroundColor: "var(--bg-color)", transition: ".1s ease"}}>
      <Navigation />
      <div style={{display: "flex", position: "relative"}}>
        <Menu />
        <div className="container" style={{ width: "100%", marginLeft: "80px", height: "fit-content", minHeight: "50px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "100px 0" }}>
          <MainInputComponent />
          <div className="NotesConteiner">
            {notes && notes.map((note:Note) => (<NotesCard notes={notes} id={note.id} key={crypto.randomUUID()}/>))}
          </div>
        </div>
      </div>
      <PopuSideNavbar/>
    </div>
  )
}

export default App
