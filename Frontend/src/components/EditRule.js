// import React, { useState, useEffect } from 'react';
// import './EditRule.css';

// function EditRule({ onClose, rule }) {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [programType, setProgramType] = useState('');
//   const [mediaType, setMediaType] = useState('');

//   useEffect(() => {
//     if (rule) {
//       setTitle(rule[0]);
//       setDescription(rule[2]);
//       setProgramType(rule[3]);
//       setMediaType(rule[1]);
//     }
//   }, [rule]);

//   const handleEdit = async () => {
//     if (title && description && programType && mediaType) {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/edit_rule/${rule[4]}`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ title, description, programType, mediaType })
//         });
//         const data = await response.json();
//         if (data.status === 'SUCCESS') {
//           alert('Rule edited successfully!');
//           setTimeout(() => {
//             onClose();
//             window.location.reload();
//           }, 2000);
//         } else {
//           alert('Failed to edit rule: ' + data.data);
//         }
//       } catch (error) {
//         console.error('Error editing rule:', error);
//         alert('Error editing rule');
//       }
//     } else {
//       alert('Please enter all fields');
//     }
//   };

//   return (
//     <div className="edit-rule-overlay">
//       <div className="edit-rule">
//         <div className="edit-rule-header">
//           <div>Edit Rule</div>
//           <button className="edit-rule-close" onClick={onClose}>×</button>
//         </div>
//         <div className="edit-rule-body">
//           <div className="edit-rule__form-group">
//             <label>Title</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder="Enter title"
//             />
//           </div>
//           <div className="edit-rule__form-group">
//             <label>Description</label>
//             <input
//               type="text"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Enter description"
//             />
//           </div>
//           <div className="edit-rule__form-group">
//             <label>Program Type</label>
//             <select
//               value={programType}
//               onChange={(e) => setProgramType(e.target.value)}
//             >
//               <option value="">Select Program Type</option>
//               <option value="IAP">IAP</option>
//               <option value="Product">Product</option>
//               <option value="NFO">NFO</option>
//             </select>
//           </div>
//           <div className="edit-rule__form-group">
//             <label>Media Type</label>
//             <select
//               value={mediaType}
//               onChange={(e) => setMediaType(e.target.value)}
//             >
//               <option value="">Select Media Type</option>
//               <option value="PDF/Image">PDF/Image</option>
//               <option value="Video">Video</option>
//             </select>
//           </div>
//         </div>
//         <div className="edit-rule-footer">
//           <button className="edit-rule-save" onClick={handleEdit}>Save</button>
//           <button className="edit-rule-cancel" onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditRule;




// import React, { useState, useEffect } from 'react';
// import './EditRule.css';

// function EditRule({ onClose, rule }) {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [programType, setProgramType] = useState('');
//   const [mediaType, setMediaType] = useState('');

//   useEffect(() => {
//     if (rule) {
//       setTitle(rule[0]);
//       setDescription(rule[2]);
//       setProgramType(rule[3]);
//       setMediaType(rule[1]);
//     }
//   }, [rule]);

//   const handleEdit = async () => {
//     if (title && description && programType && mediaType) {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/edit_rule/${rule[4]}`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ rulename: title, description, program_type: programType, media_type: mediaType })
//         });
//         const data = await response.json();
//         if (data.status === 'SUCCESS') {
//           alert('Rule updated successfully!');
//           setTimeout(() => {
//             onClose();
//           }, 2000);
//         } else {
//           alert('Failed to update rule: ' + data.data);
//         }
//       } catch (error) {
//         console.error('Error updating rule:', error);
//         alert('Error updating rule');
//       }
//     } else {
//       alert('Please enter all fields');
//     }
//   };

//   return (
//     <div className="edit-rule-overlay">
//       <div className="edit-rule">
//         <div className="edit-rule-header">
//           <div>Edit Rule</div>
//           <button className="edit-rule-close" onClick={onClose}>×</button>
//         </div>
//         <div className="edit-rule-body">
//           <div className="edit-rule__form-group">
//             <label>Title</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder='Enter title'
//             />
//           </div>
//           <div className="edit-rule__form-group">
//             <label>Description</label>
//             <input
//               type="text"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder='Enter description'
//             />
//           </div>
//           <div className="edit-rule__form-group">
//             <label>Program Type</label>
//             <select 
//               value={programType}
//               onChange={(e) => setProgramType(e.target.value)}
//             >
//               <option value="">Select Program Type</option>
//               <option value="IAP">IAP</option>
//               <option value="Product">Product</option>
//               <option value="NFO">NFO</option>
//             </select>
//           </div>
//           <div className="edit-rule__form-group">
//             <label>Media Type</label>
//             <select 
//               value={mediaType}
//               onChange={(e) => setMediaType(e.target.value)}
//             >
//               <option value="">Select Media Type</option>
//               <option value="PDF/Image">PDF/Image</option>
//               <option value="Video">Video</option>
//             </select>
//           </div>
//         </div>
//         <div className="edit-rule-footer">
//           <button className="edit-rule-save" onClick={handleEdit}>Save</button>
//           <button className="edit-rule-cancel" onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditRule;














// import React, { useState, useEffect } from 'react';
// import './EditRule.css';

// function EditRule({ onClose, rule }) {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [programType, setProgramType] = useState('');
//   const [mediaType, setMediaType] = useState('');

//   useEffect(() => {
//     if (rule) {
//       setTitle(rule[0]);
//       setDescription(rule[2]);
//       setProgramType(rule[3]);
//       setMediaType(rule[1]);
//     }
//   }, [rule]);

//   const handleEdit = async () => {
//     if (title && description && programType && mediaType) {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/edit_rule/${rule[4]}`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ rulename: title, description, program_type: programType, media_type: mediaType })
//         });
//         const data = await response.json();
//         if (data.status === 'SUCCESS') {
//           alert('Rule updated successfully!');
//           onClose();
//         } else {
//           alert('Failed to update rule: ' + data.data);
//         }
//       } catch (error) {
//         console.error('Error updating rule:', error);
//         alert('Error updating rule');
//       }
//     } else {
//       alert('Please enter all fields');
//     }
//   };

//   return (
//     <div className="edit-rule-overlay">
//       <div className="edit-rule">
//         <div className="edit-rule-header">
//           <div>Edit Rule</div>
//           <button className="edit-rule-close" onClick={onClose}>×</button>
//         </div>
//         <div className="edit-rule-body">
//           <div className="edit-rule__form-group">
//             <label>Title</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder='Enter title'
//             />
//           </div>
//           <div className="edit-rule__form-group">
//             <label>Description</label>
//             <input
//               type="text"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder='Enter description'
//             />
//           </div>
          
//           <div className="edit-rule__form-group">
//             <label>Program Type</label>
//             <select 
//               value={programType}
//               onChange={(e) => setProgramType(e.target.value)}
//             >
//               <option value="">Select Program Type</option>
//               <option value="IAP">IAP</option>
//               <option value="Product">Product</option>
//               <option value="NFO">NFO</option>
//             </select>
//           </div>
//           <div className="edit-rule__form-group">
//             <label>Media Type</label>
//             <select 
//               value={mediaType}
//               onChange={(e) => setMediaType(e.target.value)}
//             >
//               <option value="">Select Media Type</option>
//               <option value="PDF/Image">PDF/Image</option>
//               <option value="Video">Video</option>
//             </select>
//           </div>
//         </div>
//         <div className="edit-rule-footer">
//           <button className="edit-rule-save" onClick={handleEdit}>Save</button>
//           <button className="edit-rule-cancel" onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditRule;









// import React, { useState, useEffect } from 'react';
// import './EditRule.css';

// function EditRule({ onClose, rule }) {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [disclaimer, setDisclaimer] = useState('');
//   const [programType, setProgramType] = useState('');
//   const [mediaType, setMediaType] = useState('');

//   useEffect(() => {
//     if (rule) {
//       setTitle(rule[0]);
//       setDescription(rule[2]);
//       setDisclaimer(rule[3]);
//       setProgramType(rule[4]);
//       setMediaType(rule[1]);
//     }
//   }, [rule]);

  // const handleEdit = async () => {
  //   if (title && description && disclaimer && programType && mediaType) {
  //     try {
  //       const response = await fetch(`http://127.0.0.1:8000/edit_rule/${rule[4]}`, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({ rulename: title, description, disclaimer, program_type: programType, media_type: mediaType })
  //       });
  //       const data = await response.json();
  //       if (data.status === 'SUCCESS') {
  //         alert('Rule updated successfully!');
  //         onClose();
  //       } else {
  //         alert('Failed to update rule: ' + data.data);
  //       }
  //     } catch (error) {
  //       console.error('Error updating rule:', error);
  //       alert('Error updating rule');
  //     }
  //   } else {
  //     alert('Please enter all fields');
  //   }
  // };

//   return (
//     <div className="edit-rule-overlay">
//       <div className="edit-rule">
//         <div className="edit-rule-header">
//           <div>Edit Rule</div>
//           <button className="edit-rule-close" onClick={onClose}>×</button>
//         </div>
//         <div className="edit-rule-body">
//           <div className="edit-rule__form-group">
//             <label>Title</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder='Enter title'
//             />
//           </div>
//           <div className="edit-rule__form-group">
//             <label>Description</label>
//             <input
//               type="text"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder='Enter description'
//             />
//           </div>
//           <div className="edit-rule__form-group">
//             <label>Disclaimer</label>
//             <input
//               type="text"
//               value={disclaimer}
//               onChange={(e) => setDisclaimer(e.target.value)}
//               placeholder='Enter disclaimer'
//             />
//           </div>
//           <div className="edit-rule__form-group-row">
//             <div className="edit-rule__form-group">
//               <label>Program Type</label>
//               <select 
//                 value={programType}
//                 onChange={(e) => setProgramType(e.target.value)}
//               >
//                 <option value="">Select Program Type</option>
//                 <option value="IAP">IAP</option>
//                 <option value="Product">Product</option>
//                 <option value="NFO">NFO</option>
//               </select>
//             </div>
//             <div className="edit-rule__form-group">
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
//           </div>
//         </div>
//         <div className="edit-rule-footer">
//           <button className="edit-rule-save" onClick={handleEdit}>Save</button>
//           <button className="edit-rule-cancel" onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditRule;

















// import React, { useState, useEffect } from 'react';
// import './EditRule.css';

// function EditRule({ onClose, rule }) {
//   const [title, setTitle] = useState('');
//   const [mediaType, setMediaType] = useState('');
//   const [description, setDescription] = useState('');
//   const [disclaimer, setDisclaimer] = useState('');
//   const [programType, setProgramType] = useState('');

//   useEffect(() => {
//     if (rule) {
//       setTitle(rule[0]); 
//       setMediaType(rule[1]); 
//       setDescription(rule[2]); 
//       setDisclaimer(rule[3]); 
//       setProgramType(rule[4]);
//     }
//   }, [rule]);

//   const handleEdit = async () => {
//     if (title && description && programType && mediaType) {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/edit_rule/${rule[5]}`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ rulename: title, description, disclaimer})
//         });
//         const data = await response.json();
//         if (data.status === 'SUCCESS') {
//           alert('Rule updated successfully!');
//           onClose();
//         } else {
//           alert('Failed to update rule: ' + data.data);
//         }
//       } catch (error) {
//         console.error('Error updating rule:', error);
//         alert('Error updating rule');
//       }
//     } else {
//       alert('Please enter all fields');
//     }
//   };

//   return (
//     <div className="edit-rule-overlay">
//       <div className="edit-rule">
//         <div className="edit-rule-header">
//           <div>Edit Rule</div>
//           <button className="edit-rule-close" onClick={onClose}>×</button>
//         </div>
//         <div className="edit-rule-body">
//           <div className="edit-rule-field">
//             <label>Rule Name</label>
//             <input 
//               type="text" 
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder="Enter title" 
//             />
//             {console.log("Title value: ",title)}
//           </div>
//           <div className="edit-rule-field">
//             <label>Description</label>
//             <input 
//               type="text" 
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Enter description" 
//             />
//             {console.log("Description value: ",description)}
//           </div>
//           <div className="edit-rule-field">
//             <label>Disclaimer</label>
//             <input 
//               type="text" 
//               value={disclaimer}
//               onChange={(e) => setDisclaimer(e.target.value)}
//               placeholder="Enter disclaimer" 
//             />
//             {console.log("Disclaimer value: ",disclaimer)}
//           </div>
//           <div className="edit-rule-field-row">
//             <div className="edit-rule-field">
//               <label>Program Type</label>
//               <select 
//                 value={programType}
//                 onChange={(e) => setProgramType(e.target.value)}
//               >
//                 <option value="">Select Program Type</option>
//                 <option value="IAP">IAP</option>
//                 <option value="Product">Product</option>
//                 <option value="NFO">NFO</option>
//               </select>
//               {console.log("ProgramType value: ",programType)}
//             </div>
//             <div className="edit-rule-field">
//               <label>Media Type</label>
//               <select 
//                 value={mediaType}
//                 onChange={(e) => setMediaType(e.target.value)}
//               >
//                 <option value="">Select Media Type</option>
//                 <option value="PDF/Image">PDF/Image</option>
//                 <option value="Video">Video</option>
//               </select>
//               {console.log("MediaType value: ",mediaType)}
//             </div>
//           </div>
//         </div>
//         <div className="edit-rule-footer">
//           <button className="edit-rule-save" onClick={handleEdit}>Save</button>
//           <button className="edit-rule-cancel" onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditRule;










import React, { useState, useEffect } from 'react';
import './EditRule.css';

function EditRule({ onClose, rule }) {
  const [title, setTitle] = useState('');
  const [mediaType, setMediaType] = useState('');
  const [description, setDescription] = useState('');
  const [disclaimer, setDisclaimer] = useState('');
  const [programType, setProgramType] = useState('');

  useEffect(() => {
    if (rule) {
      setTitle(rule[0]); 
      setMediaType(rule[1]); 
      setDescription(rule[2]); 
      setDisclaimer(rule[3]); 
      setProgramType(rule[4]);
    }
  }, [rule]);

  const handleEdit = async () => {
    if (title && description && programType && mediaType) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/edit_rule/${rule[5]}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ rulename: title, description, disclaimer })
        });
        const data = await response.json();
        if (data.status === 'SUCCESS') {
          alert('Rule updated successfully!');
          onClose();
        } else {
          alert('Failed to update rule: ' + data.data);
        }
      } catch (error) {
        console.error('Error updating rule:', error);
        alert('Error updating rule');
      }
    } else {
      alert('Please enter all fields');
    }
  };

  return (
    <div className="edit-rule-overlay">
      <div className="edit-rule">
        <div className="edit-rule-header">
          <div>Edit Rule</div>
          <button className="edit-rule-close" onClick={onClose}>×</button>
        </div>
        <div className="edit-rule-body">
          <div className="edit-rule-field">
            <label>Rule Name</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title" 
            />
            {console.log("Title value: ",title)}
          </div>
          <div className="edit-rule-field">
            <label>Description</label>
            <input 
              type="text" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description" 
            />
            {console.log("Description value: ",description)}
          </div>
          <div className="edit-rule-field">
            <label>Disclaimer</label>
            <input 
              type="text" 
              value={disclaimer}
              onChange={(e) => setDisclaimer(e.target.value)}
              placeholder="Enter disclaimer" 
            />
            {console.log("Disclaimer value: ",disclaimer)}
          </div>
          <div className="edit-rule-field-row">
            <div className="edit-rule-field">
              <label>Program Type</label>
              <select 
                value={programType}
                onChange={(e) => setProgramType(e.target.value)}
                disabled
              >
                <option value="IAP">IAP</option>
                <option value="Product">Product</option>
                <option value="NFO">NFO</option>
              </select>
              {console.log("ProgramType value: ",programType)}
            </div>
            <div className="edit-rule-field">
              <label>Media Type</label>
              <select 
                value={mediaType}
                onChange={(e) => setMediaType(e.target.value)}
                disabled
              >
                <option value="PDF/Image">PDF/Image</option>
                <option value="Video">Video</option>
              </select>
              {console.log("MediaType value: ",mediaType)}
            </div>
          </div>
        </div>
        <div className="edit-rule-footer">
          <button className="edit-rule-save" onClick={handleEdit}>Save</button>
          <button className="edit-rule-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default EditRule;
