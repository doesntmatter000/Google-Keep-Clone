import { MainInputComponent } from "./components/MainInput/MainInputComponent"
function App() {

  return (
    <>
      <div className="container" style={{width: "100%", height:"fit-content", minHeight: "100px", display: "flex", justifyContent: "center", alignItems: "center", padding: "100px 0"}}>
        <MainInputComponent />
      </div>
    </>
  )
}

export default App
