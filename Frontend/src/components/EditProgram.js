// import React, { useState, useEffect } from 'react';
// import './EditProgram.css';

// function EditProgram({ onClose, program }) {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     if (program) {
//       setTitle(program[0]);
//       setDescription(program[1]);
//     }
//   }, [program]);

//     console.log("Program is: ", program);

//   const handleEdit = async () => {
//     if (title && description) {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/edit_program`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ name: title, description, id })
//         });
//         const data = await response.json();
//         if (data.status === 'SUCCESS') {
//           alert('Program edited successfully!');
//           setTimeout(() => {
//             onClose();
//           }, 2000);
//         } else {
//           alert('Failed to edit program: ' + data.data);
//         }
//       } catch (error) {
//         console.error('Error editing program:', error);
//         alert('Error editing program');
//       }
//     } else {
//       alert('Please enter both title and description');
//     }
//   };

//   return (
//     <div className="edit-program-overlay">
//       <div className="edit-program">
//         <div className="edit-program-header">
//           <div>Edit Program</div>
//           <button className="edit-program-close" onClick={onClose}>×</button>
//         </div>
//         <div className="edit-program-body">
//           <div className="edit-program__form-group">
//             <label>Title</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder='Enter title'
//             />
//           </div>
//           <div className="edit-program__form-group">
//             <label>Description</label>
//             <input
//               type="text"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder='Enter description'
//             />
//           </div>
//         </div>
//         <div className="edit-program-footer">
//           <button className="edit-program-save" onClick={handleEdit}>Save</button>
//           <button className="edit-program-cancel" onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditProgram;





// import React, { useState, useEffect } from 'react';
// import './EditProgram.css';

// function EditProgram({ onClose, program }) {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     if (program) {
//       setTitle(program[0]);
//       setDescription(program[1]);
//     }
//   }, [program]);

//   const handleEdit = async () => {
//     if (title && description) {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/edit_program/${program[2]}`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ name: title, description })
//         });
//         const data = await response.json();
//         if (data.status === 'SUCCESS') {
//           alert('Program edited successfully!');
//           setTimeout(() => {
//             onClose();
//           }, 2000);
//         } else {
//           alert('Failed to edit program: ' + data.data);
//         }
//       } catch (error) {
//         console.error('Error editing program:', error);
//         alert('Error editing program');
//       }
//     } else {
//       alert('Please enter both title and description');
//     }
//   };

//   return (
//     <div className="edit-program-overlay">
//       <div className="edit-program">
//         <div className="edit-program-header">
//           <div>Edit Program</div>
//           <button className="edit-program-close" onClick={onClose}>×</button>
//         </div>
//         <div className="edit-program-body">
//           <div className="edit-program__form-group">
//             <label>Title</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder='Enter title'
//             />
//           </div>
//           <div className="edit-program__form-group">
//             <label>Description</label>
//             <input
//               type="text"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder='Enter description'
//             />
//           </div>
//         </div>
//         <div className="edit-program-footer">
//           <button className="edit-program-save" onClick={handleEdit}>Save</button>
//           <button className="edit-program-cancel" onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditProgram;













import React, { useState, useEffect } from 'react';
import './EditProgram.css';

function EditProgram({ onClose, program, onEditProgram }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (program) {
      setTitle(program[0]);
      setDescription(program[1]);
    }
  }, [program]);

  {console.log("PG GG: ",program)}

  const handleEdit = async () => {
    if (title && description) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/edit_program/${program[2]}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: title, description })
        });
        const data = await response.json();
        if (data.status === 'SUCCESS') {
          alert('Program edited successfully!');
          onEditProgram([title, description, program[2]]);
          onClose();
        } else {
          alert('Failed to edit program: ' + data.data);
        }
      } catch (error) {
        console.error('Error editing program:', error);
        alert('Error editing program');
      }
    } else {
      alert('Please enter both title and description');
    }
  };

  return (
    <div className="edit-program-overlay">
      <div className="edit-program">
        <div className="edit-program-header">
          <div>Edit Program</div>
          <button className="edit-program-close" onClick={onClose}>×</button>
        </div>
        <div className="edit-program-body">
          <div className="edit-program__form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Enter title'
            />
          </div>
          <div className="edit-program__form-group">
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Enter description'
            />
          </div>
        </div>
        <div className="edit-program-footer">
          <button className="edit-program-save" onClick={handleEdit}>Save</button>
          <button className="edit-program-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default EditProgram;
