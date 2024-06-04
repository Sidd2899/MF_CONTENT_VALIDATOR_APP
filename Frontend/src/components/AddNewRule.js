// import React, { useState } from 'react';
// import './AddNewRule.css';

// function AddNewRule({ onClose, onAddRule }) {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [programType, setProgramType] = useState('');
//   const [mediaType, setMediaType] = useState('');
//   const [disclaimer, setDisclaimer] = useState('');

//   const handleAdd = () => {
//     if (title && description && programType && mediaType && disclaimer) {
//       const newRule = { rulename: title, media_type: mediaType, description, program_type: programType, disclaimer };
//       onAddRule(newRule);
//       onClose();
//     } else {
//       alert('Please enter all fields');
//     }
//   };

//   return (
//     <div className="add-new-rule-overlay">
//       <div className="add-new-rule">
//         <div className="add-new-rule-header">
//           <div>Add Rule</div>
//           <button className="add-new-rule-close" onClick={onClose}>×</button>
//         </div>
//         <div className="add-new-rule-body">
//           <div className="add-new-rule-field">
//             <label>Title</label>
//             <input 
//               type="text" 
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder="Enter title"
//             />
//             {console.log("Title value: ",title)}
//           </div>
//           <div className="add-new-rule-field">
//             <label>Description</label>
//             <input 
//               type="text" 
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Enter description" 
//             />
//             {console.log("Disc value: ",description)}
//           </div>
//           <div className="add-new-rule-field">
//             <label>Disclaimer</label>
//             <input 
//               type="text" 
//               value={disclaimer}
//               onChange={(e) => setDisclaimer(e.target.value)}
//               placeholder="Enter disclaimer" 
//             />
//             {console.log("Disc value: ",disclaimer)}
//           </div>
//           <div className="add-new-rule-field-row">
//             <div className="add-new-rule-field">
//               <label>Program Type</label>
//               <select 
//                 value={programType}
//                 onChange={(e) => setProgramType(e.target.value)}
//                 >
//                 <option value="">Select Program Type</option>
//                 <option value="IAP">IAP</option>
//                 <option value="Product">Product</option>
//                 <option value="NFO">NFO</option>
//               </select>
//               {console.log("Progerm value: ",programType)}
//             </div>
//             <div className="add-new-rule-field">
//               <label>Media Type</label>
//               <select 
//                 value={mediaType}
//                 onChange={(e) => setMediaType(e.target.value)}
//               >
//                 <option value="">Select Media Type</option>
//                 <option value="PDF/Image">PDF/Image</option>
//                 <option value="Video">Video</option>
//               </select>
//             </div>
//             {console.log("Media value: ",mediaType)}
//           </div>
//         </div>
//         <div className="add-new-rule-footer">
//           <button className="add-new-rule-add" onClick={handleAdd}>Add</button>
//           <button className="add-new-rule-cancel" onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddNewRule;









import React, { useState, useEffect } from 'react';
import './AddNewRule.css';

function AddNewRule({ onClose, onAddRule }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [programType, setProgramType] = useState('');
  const [mediaType, setMediaType] = useState('');
  const [disclaimer, setDisclaimer] = useState('');
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/list_programs');
      const data = await response.json();
      if (data.status === 'SUCCESS') {
        setPrograms(data.data);
      } else {
        console.error('Failed to fetch programs:', data.data);
      }
    } catch (error) {
      console.error('Error fetching programs:', error);
    }
  };

  const handleAdd = () => {
    if (title && description && programType && mediaType && disclaimer) {
      const newRule = { rulename: title, media_type: mediaType, description, program_type: programType, disclaimer };
      onAddRule(newRule);
      onClose();
    } else {
      alert('Please enter all fields');
    }
  };

  return (
    <div className="add-new-rule-overlay">
      <div className="add-new-rule">
        <div className="add-new-rule-header">
          <div>Add Rule</div>
          <button className="add-new-rule-close" onClick={onClose}>×</button>
        </div>
        <div className="add-new-rule-body">
          <div className="add-new-rule-field">
            <label>Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
            />
            {console.log("Title value: ",title)}
          </div>
          <div className="add-new-rule-field">
            <label>Description</label>
            <input 
              type="text" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description" 
            />
            {console.log("Disc value: ",description)}
          </div>
          <div className="add-new-rule-field">
            <label>Disclaimer</label>
            <input 
              type="text" 
              value={disclaimer}
              onChange={(e) => setDisclaimer(e.target.value)}
              placeholder="Enter disclaimer" 
            />
            {console.log("Disc value: ",disclaimer)}
          </div>
          <div className="add-new-rule-field-row">
            <div className="add-new-rule-field">
              <label>Program Type</label>
              <select 
                value={programType}
                onChange={(e) => setProgramType(e.target.value)}
              >
                <option value="">Select Program Type</option>
                {programs.map((program, index) => (
                  <option key={index} value={program[0]}>{program[0]}</option>
                ))}
              </select>
              {console.log("Progerm value: ",programType)}
            </div>
            <div className="add-new-rule-field">
              <label>Media Type</label>
              <select 
                value={mediaType}
                onChange={(e) => setMediaType(e.target.value)}
              >
                <option value="">Select Media Type</option>
                <option value="PDF/Image">PDF/Image</option>
                <option value="Video">Video</option>
              </select>
            </div>
            {console.log("Media value: ",mediaType)}
          </div>
        </div>
        <div className="add-new-rule-footer">
          <button className="add-new-rule-add" onClick={handleAdd}>Add</button>
          <button className="add-new-rule-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default AddNewRule;
