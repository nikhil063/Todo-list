import { useState } from "react";
import Listing from "./Listing";

export default function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState();

  const handleSubmit = () => {
    let temp = name;
    setData([...data, temp]);
    setName("");
  };

  console.log("data", data);
  return (
    <div className="App">
      <label>
        Add Task:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Submit</button>
      <Listing data={data} setData={setData} />
    </div>
  );
}



