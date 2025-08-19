import ListGroup from "./components/ListGroup";

let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
let heading = "Cities";

function App() {
  return (
    <div>
      <ListGroup items={items} heading={heading} />
    </div>
  );
}

export default App;
