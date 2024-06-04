// import React from 'react';
// import './DeleteProgram.css';

// function DeleteProgram({ onClose, onDelete, program }) {
//   const handleDelete = () => {
//     onDelete(program);
//     onClose();
//   };

//   return (
//     <div className="delete-program-overlay">
//       <div className="delete-program">
//         <div className="delete-program-header">
//           <div>Delete Program</div>
//           <button className="delete-program-close" onClick={onClose}>×</button>
//         </div>
//         <div className="delete-program-body">
//           Are you sure you want to delete <strong>{program[0]}</strong>?
//         </div>
//         <div className="delete-program-footer">
//           <button className="delete-program-confirm" onClick={handleDelete}>Yes, Delete</button>
//           <button className="delete-program-cancel" onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DeleteProgram;





import React from 'react';
import './DeleteProgram.css';

function DeleteProgram({ onClose, onDelete, program }) {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/delete_program?program_id=${program[2]}`, {
        method: 'GET',
      });
      const data = await response.json();
      if (data.status === 'SUCCESS') {
        alert('Program deleted successfully!');
        onDelete(program);
        onClose();
      } else {
        alert('Failed to delete program: ' + data.data);
      }
    } catch (error) {
      console.error('Error deleting program:', error);
      alert('Error deleting program');
    }
  };

  return (
    <div className="delete-program-overlay">
      <div className="delete-program">
        <div className="delete-program-header">
          <div>Delete Program</div>
          <button className="delete-program-close" onClick={onClose}>×</button>
        </div>
        <div className="delete-program-body">
          Are you sure you want to delete <strong>{program[0]}</strong>?
        </div>
        <div className="delete-program-footer">
          <button className="delete-program-confirm" onClick={handleDelete}>Yes, Delete</button>
          <button className="delete-program-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProgram;

