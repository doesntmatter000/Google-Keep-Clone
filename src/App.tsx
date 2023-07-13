import { MainInput } from "./components/MainInput/MainInput"
function App() {

  return (
    <>
      <div className="container" style={{width: "100%", height:"fit-content", minHeight: "100px", display: "flex", justifyContent: "center", alignItems: "center", padding: "100px 0"}}>
        <MainInput />
      </div>
    </>
  )
}

export default App
