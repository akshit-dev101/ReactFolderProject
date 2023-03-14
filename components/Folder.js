import { useState, useEffect } from "react";

function Folder(props) {
  const [expand, setExpand] = useState(true);
  console.log(expand);
  if (props.expData.isFolder) {
    return (
      <div style={{ paddingLeft: "10px" }}>
        <span style={{ cursor: "pointer" }} onClick={() => setExpand(!expand)}>
          📁{props.expData.name}
        </span>
        {props.expData.items.map((expItem) => {
          return (
            <span style={{ display: expand ? "block" : "none" }}>
              <Folder expData={expItem} />
            </span>
          );
        })}
      </div>
    );
  } else {
    return (
      <div style={{ paddingLeft: "10px" }}>
        <span>🖺{props.expData.name}</span>
      </div>
    );
  }
}

export default Folder;
