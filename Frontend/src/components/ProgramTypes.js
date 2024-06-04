// import React, { useState, useEffect } from 'react';
// import './ProgramTypes.css';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import AddNewProgram from './AddNewProgram';

// function ProgramTypes({ onEditProgram }) {
//   const [programs, setPrograms] = useState([]);
//   const [showAddNewProgram, setShowAddNewProgram] = useState(false);

//   useEffect(() => {
//     fetchPrograms();
//   }, []);

//   const fetchPrograms = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/list_programs');
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         setPrograms(data.data);
//       } else {
//         console.error('Failed to fetch programs:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching programs:', error);
//     }
//   };

//   const handleAddProgram = (newProgram) => {
//     setPrograms([...programs, newProgram]);
//   };

//   return (
//     <div className="program-types">
//       <div className="program-types-heading">
//         <div>Program Types</div>
//         <div><button className="program-types__add-new-button" onClick={() => setShowAddNewProgram(true)}>+ Add New</button></div>
//       </div>
//       <table className="program-types__content-table">
//         <thead>
//           <tr>
//             <th>Type of Content</th>
//             <th>Description</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {programs.length > 0 ? (
//             programs.map((program, index) => (
//               <tr key={index}>
//                 <td>{program[0]}</td>
//                 <td>{program[1]}</td>
//                 <td>
//                   <button className="program-types__edit-button" onClick={() => onEditProgram(program)}><FaEdit /> Edit</button>
//                   <button className="program-types__delete-button"><FaTrash /> Delete</button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3">No programs found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       {showAddNewProgram && (
//         <AddNewProgram
//           onClose={() => setShowAddNewProgram(false)}
//           onAddProgram={handleAddProgram}
//         />
//       )}
//     </div>
//   );
// }

// export default ProgramTypes;






// import React, { useState, useEffect } from 'react';
// import './ProgramTypes.css';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import AddNewProgram from './AddNewProgram';
// import EditProgram from './EditProgram';

// function ProgramTypes() {
//   const [programs, setPrograms] = useState([]);
//   const [showAddNewProgram, setShowAddNewProgram] = useState(false);
//   const [showEditProgram, setShowEditProgram] = useState(false);
//   const [currentProgram, setCurrentProgram] = useState(null);

//   useEffect(() => {
//     fetchPrograms();
//   }, []);

//   const fetchPrograms = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/list_programs');
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         setPrograms(data.data);
//       } else {
//         console.error('Failed to fetch programs:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching programs:', error);
//     }
//   };

//   const handleEditProgram = (program) => {
//     setCurrentProgram(program);
//     setShowEditProgram(true);
//   };

//   return (
//     <div className="program-types">
//       <div className="program-types-heading">
//         <div>Program Types</div>
//         <div><button className="program-types__add-new-button" onClick={() => setShowAddNewProgram(true)}>+ Add New</button></div>
//       </div>
//       <table className="program-types__content-table">
//         <thead>
//           <tr>
//             <th>Type of Content</th>
//             <th>Description</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {programs.length > 0 ? (
//             programs.map((program, index) => (
//               <tr key={index}>
//                 <td>{program[0]}</td>
//                 <td>{program[1]}</td>
//                 {console.log("Programs: ",program)}
//                 <td>
//                   <button className="program-types__edit-button" onClick={() => handleEditProgram(program)}><FaEdit /> Edit</button>
//                   <button className="program-types__delete-button"><FaTrash /> Delete</button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3">No programs found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       {showAddNewProgram && (
//         <AddNewProgram
//           onClose={() => setShowAddNewProgram(false)}
//         />
//       )}
//       {showEditProgram && (
//         <EditProgram
//           onClose={() => setShowEditProgram(false)}
//           program={currentProgram}
//         />
//       )}
//     </div>
//   );
// }

// export default ProgramTypes;





// import React, { useState, useEffect } from 'react';
// import './ProgramTypes.css';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import AddNewProgram from './AddNewProgram';
// import EditProgram from './EditProgram';

// function ProgramTypes() {
//   const [programs, setPrograms] = useState([]);
//   const [showAddNewProgram, setShowAddNewProgram] = useState(false);
//   const [showEditProgram, setShowEditProgram] = useState(false);
//   const [currentProgram, setCurrentProgram] = useState(null);

//   useEffect(() => {
//     fetchPrograms();
//   }, []);

//   const fetchPrograms = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/list_programs');
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         setPrograms(data.data);
//       } else {
//         console.error('Failed to fetch programs:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching programs:', error);
//     }
//   };

//   const handleEditProgram = (program) => {
//     setCurrentProgram(program);
//     setShowEditProgram(true);
//   };

//   return (
//     <div className="program-types">
//       <div className="program-types-heading">
//         <div>Program Types</div>
//         <div><button className="program-types__add-new-button" onClick={() => setShowAddNewProgram(true)}>+ Add New</button></div>
//       </div>
//       <table className="program-types__content-table">
//         <thead>
//           <tr>
//             <th>Type of Content</th>
//             <th>Description</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {programs.length > 0 ? (
//             programs.map((program, index) => (
//               <tr key={index}>
//                 <td>{program[0]}</td>
//                 <td>{program[1]}</td>
//                 <td>
//                   <button className="program-types__edit-button" onClick={() => handleEditProgram(program)}><FaEdit /> Edit</button>
//                   <button className="program-types__delete-button"><FaTrash /> Delete</button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3">No programs found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       {showAddNewProgram && (
//         <AddNewProgram
//           onClose={() => setShowAddNewProgram(false)}
//         />
//       )}
//       {showEditProgram && (
//         <EditProgram
//           onClose={() => setShowEditProgram(false)}
//           program={currentProgram}
//         />
//       )}
//     </div>
//   );
// }

// export default ProgramTypes;







// import React, { useState, useEffect } from 'react';
// import './ProgramTypes.css';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import AddNewProgram from './AddNewProgram';
// import EditProgram from './EditProgram';

// function ProgramTypes() {
//   const [programs, setPrograms] = useState([]);
//   const [showAddNewProgram, setShowAddNewProgram] = useState(false);
//   const [showEditProgram, setShowEditProgram] = useState(false);
//   const [currentProgram, setCurrentProgram] = useState(null);

//   useEffect(() => {
//     fetchPrograms();
//   }, []);

//   const fetchPrograms = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/list_programs');
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         setPrograms(data.data);
//       } else {
//         console.error('Failed to fetch programs:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching programs:', error);
//     }
//   };

//   const handleEditProgram = (program) => {
//     setCurrentProgram(program);
//     setShowEditProgram(true);
//   };

//   const handleAddProgram = (newProgram) => {
//     setPrograms([...programs, newProgram]);
//   };

//   const handleUpdateProgram = (updatedProgram) => {
//     setPrograms(programs.map((program) =>
//       program[2] === updatedProgram[2] ? updatedProgram : program
//     ));
//   };

//   return (
//     <div className="program-types">
//       <div className="program-types-heading">
//         <div>Program Types</div>
//         <div><button className="program-types__add-new-button" onClick={() => setShowAddNewProgram(true)}>+ Add New</button></div>
//       </div>
//       <table className="program-types__content-table">
//         <thead>
//           <tr>
//             <th>Type of Content</th>
//             <th>Description</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {programs.length > 0 ? (
//             programs.map((program, index) => (
//               <tr key={index}>
//                 <td>{program[0]}</td>
//                 <td>{program[1]}</td>
//                 <td>
//                   {console.log("HHHHHHH: ",program)}
//                   <button className="program-types__edit-button" onClick={() => handleEditProgram(program)}><FaEdit /> Edit</button>
//                   <button className="program-types__delete-button"><FaTrash /> Delete</button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3">No programs found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       {showAddNewProgram && (
//         <AddNewProgram
//           onClose={() => setShowAddNewProgram(false)}
//           onAddProgram={handleAddProgram}
//         />
//       )}
//       {showEditProgram && (
//         <EditProgram
//           onClose={() => setShowEditProgram(false)}
//           program={currentProgram}
//           onEditProgram={handleUpdateProgram}
//         />
//       )}
//     </div>
//   );
// }

// export default ProgramTypes;






// import React, { useState, useEffect } from 'react';
// import './ProgramTypes.css';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import AddNewProgram from './AddNewProgram';
// import EditProgram from './EditProgram';
// import DeleteProgram from './DeleteProgram';

// function ProgramTypes() {
//   const [programs, setPrograms] = useState([]);
//   const [showAddNewProgram, setShowAddNewProgram] = useState(false);
//   const [showEditProgram, setShowEditProgram] = useState(false);
//   const [showDeleteProgram, setShowDeleteProgram] = useState(false);
//   const [currentProgram, setCurrentProgram] = useState(null);

//   useEffect(() => {
//     fetchPrograms();
//   }, []);

//   const fetchPrograms = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/list_programs');
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         setPrograms(data.data);
//       } else {
//         console.error('Failed to fetch programs:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching programs:', error);
//     }
//   };

//   const handleEditProgram = (program) => {
//     setCurrentProgram(program);
//     setShowEditProgram(true);
//   };

//   const handleDeleteProgram = (program) => {
//     setCurrentProgram(program);
//     setShowDeleteProgram(true);
//   };

//   const handleAddProgram = (newProgram) => {
//     setPrograms([...programs, newProgram]);
//   };

//   const handleUpdateProgram = (updatedProgram) => {
//     setPrograms(programs.map((program) =>
//       program[2] === updatedProgram[2] ? updatedProgram : program
//     ));
//   };

//   const handleConfirmDelete = async (program) => {
//     try {
//       const response = await fetch(`http://127.0.0.1:8000/delete_program/${program[2]}`, {
//         method: 'DELETE',
//       });
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         alert('Program deleted successfully!');
//         setPrograms(programs.filter(p => p[2] !== program[2]));
//       } else {
//         alert('Failed to delete program: ' + data.data);
//       }
//     } catch (error) {
//       console.error('Error deleting program:', error);
//       alert('Error deleting program');
//     }
//   };

//   return (
//     <div className="program-types">
//       <div className="program-types-heading">
//         <div>Program Types</div>
//         <div><button className="program-types__add-new-button" onClick={() => setShowAddNewProgram(true)}>+ Add New</button></div>
//       </div>
//       <table className="program-types__content-table">
//         <thead>
//           <tr>
//             <th>Type of Content</th>
//             <th>Description</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {programs.length > 0 ? (
//             programs.map((program, index) => (
//               <tr key={index}>
//                 <td>{program[0]}</td>
//                 <td>{program[1]}</td>
//                 <td>
//                   <button className="program-types__edit-button" onClick={() => handleEditProgram(program)}><FaEdit /> Edit</button>
//                   <button className="program-types__delete-button" onClick={() => handleDeleteProgram(program)}><FaTrash /> Delete</button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3">No programs found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       {showAddNewProgram && (
//         <AddNewProgram
//           onClose={() => setShowAddNewProgram(false)}
//           onAddProgram={handleAddProgram}
//         />
//       )}
//       {showEditProgram && (
//         <EditProgram
//           onClose={() => setShowEditProgram(false)}
//           program={currentProgram}
//           onEditProgram={handleUpdateProgram}
//         />
//       )}
//       {showDeleteProgram && (
//         <DeleteProgram
//           onClose={() => setShowDeleteProgram(false)}
//           program={currentProgram}
//           onDelete={handleConfirmDelete}
//         />
//       )}
//     </div>
//   );
// }

// export default ProgramTypes;






import React, { useState, useEffect } from 'react';
import './ProgramTypes.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import AddNewProgram from './AddNewProgram';
import EditProgram from './EditProgram';
import DeleteProgram from './DeleteProgram';

function ProgramTypes() {
  const [programs, setPrograms] = useState([]);
  const [showAddNewProgram, setShowAddNewProgram] = useState(false);
  const [showEditProgram, setShowEditProgram] = useState(false);
  const [showDeleteProgram, setShowDeleteProgram] = useState(false);
  const [currentProgram, setCurrentProgram] = useState(null);

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

  const handleEditProgram = (program) => {
    setCurrentProgram(program);
    setShowEditProgram(true);
  };

  const handleDeleteProgram = (program) => {
    setCurrentProgram(program);
    setShowDeleteProgram(true);
  };

  const handleAddProgram = (newProgram) => {
    setPrograms([...programs, newProgram]);
  };

  const handleUpdateProgram = (updatedProgram) => {
    setPrograms(programs.map((program) =>
      program[2] === updatedProgram[2] ? updatedProgram : program
    ));
  };

  const handleConfirmDelete = (deletedProgram) => {
    setPrograms(programs.filter(program => program[2] !== deletedProgram[2]));
  };

  return (
    <div className="program-types">
      <div className="program-types-heading">
        <div className='program-type-page-header'>Program Types</div>
        <div><button className="program-types__add-new-button" onClick={() => setShowAddNewProgram(true)}>+ Add New</button></div>
      </div>
      <table className="program-types__content-table">
        <thead>
          <tr>
            <th>Type of Program</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {programs.length > 0 ? (
            programs.map((program, index) => (
              <tr key={index}>
                <td>{program[0]}</td>
                <td>{program[1]}</td>
                <td>
                  <button className="program-types__edit-button" onClick={() => handleEditProgram(program)}><FaEdit /> Edit</button>
                  <button className="program-types__delete-button" onClick={() => handleDeleteProgram(program)}><FaTrash /> Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No programs found</td>
            </tr>
          )}
        </tbody>
      </table>
      {showAddNewProgram && (
        <AddNewProgram
          onClose={() => setShowAddNewProgram(false)}
          onAddProgram={handleAddProgram}
        />
      )}
      {showEditProgram && (
        <EditProgram
          onClose={() => setShowEditProgram(false)}
          program={currentProgram}
          onEditProgram={handleUpdateProgram}
        />
      )}
      {showDeleteProgram && (
        <DeleteProgram
          onClose={() => setShowDeleteProgram(false)}
          program={currentProgram}
          onDelete={handleConfirmDelete}
        />
      )}
    </div>
  );
}

export default ProgramTypes;


