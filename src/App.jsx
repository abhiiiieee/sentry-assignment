function handleerror(){
  throw new Error("Erorr")
}

function App() {
   return (
    <>
      <button onClick={handleerror}>submit</button>
    </>
  )
}

export default App
