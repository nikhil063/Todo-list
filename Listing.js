import { useState } from "react";
const Listing = ({ data, setData }) => {
  const [enableEdit, setEnableEdit] = useState({ state: false, index: "" });
  const [editData, setEditData] = useState();

  const handleEdit = (index) => {
    console.log("data here", data[index]);
    setEditData(data[index]);
    setEnableEdit({ state: !enableEdit?.state, index: index });
  };
  const handleEditSubmit = () => {
    let temp = data;
    temp[enableEdit?.index] = editData;
    setData(temp);
    setEnableEdit({ ...enableEdit, state: !enableEdit?.state });
  };
  const handleDelete = (index) => {
    console.log("index", index);
    let temp = data?.filter((item, i) => i != index);
    setData(temp);
  };
  return (
    <div>
      {data.map((item, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          {enableEdit?.state && (
            <div>
              <input
                value={editData}
                onChange={(e) => setEditData(e.target.value)}
              />
              <button onClick={handleEditSubmit}>submit edit</button>
            </div>
          )}
          <button onClick={() => handleEdit(index)}>Edit</button>
          <h5 key={index}>{item}</h5>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default Listing;
