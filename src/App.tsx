import Rate from "./Rate";

function App() {
  return (
    <div className="App">
      <Rate onChange={(val: number) => console.log(val)} />
      {/* <Rate defaultValue={2} /> */}
    </div>
  );
}

export default App;
