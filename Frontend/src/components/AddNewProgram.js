// import React, { useState } from 'react';
// import './AddNewProgram.css';

// function AddNewProgram({ onClose, onAddProgram }) {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const handleAdd = async () => {
//     if (title && description) {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/add_program', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ name: title, description })
//         });
//         const data = await response.json();
//         if (data.status === 'SUCCESS') {
//           alert('Program added successfully!');
//         //   setTimeout(() => {
//             onAddProgram({ name: title, description });
//             onClose();
//         //   }, 2000);
//           window.location.reload()
//         } else {
//           alert('Failed to add program: ' + data.data);
//         }
//       } catch (error) {
//         console.error('Error adding program:', error);
//         alert('Error adding program');
//       }
//     } else {
//       alert('Please enter both title and description');
//     }
//   };

//   return (
//     <div className="add-new-program-overlay">
//       <div className="add-new-program">
//         <div className="add-new-program-header">
//           <div>Add New Program</div>
//           <button className="add-new-program-close" onClick={onClose}>×</button>
//         </div>
//         <div className="add-new-program-body">
//           <div className="add-new-program__form-group">
//             <label>Title</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder='Enter title'
//             />
//           </div>
//           <div className="add-new-program__form-group">
//             <label>Description</label>
//             <input
//               type="text"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder='Enter description'
//             />
//           </div>
//         </div>
//         <div className="add-new-program-footer">
//           <button className="add-new-program-add" onClick={handleAdd}>Add</button>
//           <button className="add-new-program-cancel" onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddNewProgram;




import React, { useState } from 'react';
import './AddNewProgram.css';

function AddNewProgram({ onClose, onAddProgram }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = async () => {
    if (title && description) {
      try {
        const response = await fetch('http://127.0.0.1:8000/add_program', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: title, description })
        });
        const data = await response.json();
        if (data.status === 'SUCCESS') {
          alert('Program added successfully!');
          onAddProgram([title, description]);
          onClose();
        } else {
          alert('Failed to add program: ' + data.data);
        }
      } catch (error) {
        console.error('Error adding program:', error);
        alert('Error adding program');
      }
    } else {
      alert('Please enter both title and description');
    }
  };

  return (
    <div className="add-new-program-overlay">
      <div className="add-new-program">
        <div className="add-new-program-header">
          <div>Add New Program</div>
          <button className="add-new-program-close" onClick={onClose}>×</button>
        </div>
        <div className="add-new-program-body">
          <div className="add-new-program__form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Enter title'
            />
          </div>
          <div className="add-new-program__form-group">
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Enter description'
            />
          </div>
        </div>
        <div className="add-new-program-footer">
          <button className="add-new-program-add" onClick={handleAdd}>Add</button>
          <button className="add-new-program-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default AddNewProgram;
