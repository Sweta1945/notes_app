import React, { useState } from "react";
import "./PopupWindow.css"
export default function PopupWindow({ onClose, onCreateGroup }) {
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleCreateGroup = () => {
    if (groupName && selectedColor) {
      const newGroup = {
        name: groupName,
        color: selectedColor,
      };
      onCreateGroup(newGroup);
      onClose();
    }
  };

  return (
    <div className="popup-container">
    
      <div className="popup">
      <div className="cross" onClick={onClose}>❌</div>
        <h2>Create New Notes Group</h2>
        <label className="groupName">
            Group Name
       
        <input
          type="text"
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          
        />
         </label>

         <div className="selectColors">
         Choose color
         <div className="color-options">
          <div
            className="color-option"
            style={{  backgroundColor: "#B38BFA"
            }}
            onClick={() => setSelectedColor("#B38BFA")}
          ></div>
          <div
            className="color-option"
            style={{ backgroundColor: "#FF79F2" }}
            onClick={() => setSelectedColor("#FF79F2")}
          ></div>
         <div className="color-option"
         style={{background: "#43E6FC"}}
         onClick={()=> setSelectedColor("#43E6FC")}></div>

         <div className="color-option"
         style={{background: "#F19576"}}
         onClick={()=> setSelectedColor("#F19576")}></div>
         <div className="color-option"
         style={{background:"#0047FF"}}
         onClick={()=> setSelectedColor("#0047FF")}></div>
         <div className="color-option"
         style={{background:" #6691FF"}}
         onClick={()=>setSelectedColor(" #6691FF")}></div>
        </div>
         </div>
       
        <button onClick={handleCreateGroup} className="create" >Create</button>
      </div>
    </div>
  );
}
