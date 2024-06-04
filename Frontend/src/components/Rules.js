// import React, { useState, useEffect } from 'react';
// import './Rules.css';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import AddNewRule from './AddNewRule';
// import EditRule from './EditRule';
// import DeleteRule from './DeleteRule';

// function Rules() {
//   const [rules, setRules] = useState([]);
//   const [showAddNewRule, setShowAddNewRule] = useState(false);
//   const [showEditRule, setShowEditRule] = useState(false);
//   const [showDeleteRule, setShowDeleteRule] = useState(false);
//   const [currentRule, setCurrentRule] = useState(null);

//   useEffect(() => {
//     fetchRules();
//   }, []);

//   const fetchRules = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/list_rules');
//       const data = await response.json();
//       console.log("data.data: ", data.data);
//       if (data.status === 'SUCCESS') {
//         setRules(data.data);
//       } else {
//         console.error('Failed to fetch rules:', data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching rules:', error);
//     }
//   };

//   const handleAddRule = async (newRule) => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/add_rule', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newRule)
//       });
//       const data = await response.json();
//       // console.log("data.data: ", data.data);
//       if (data.status === 'SUCCESS') {
//         alert('Rule added successfully!');
//         fetchRules(); // Refresh rules list
//       } else {
//         alert('Failed to add rule: ' + data.data);
//       }
//     } catch (error) {
//       console.error('Error adding rule:', error);
//     }
//   };

//   const handleEditRule = (rule) => {
//     setCurrentRule(rule);
//     setShowEditRule(true);
//   };

//   const handleDeleteRule = async (rule) => {
//     try {
//       const response = await fetch(`http://127.0.0.1:8000/delete_rule/${rule[5]}`, {
//         method: 'GET',
//       });
//       const data = await response.json();
//       if (data.status === 'SUCCESS') {
//         alert('Rule deleted successfully!');
//         fetchRules(); // Refresh rules list
//       } else {
//         alert('Failed to delete rule: ' + data.data);
//       }
//     } catch (error) {
//       console.error('Error deleting rule:', error);
//     }
//   };

//   return (
//     <div className="rules">
//       <div className="rules-heading">
//         <div>Rules</div>
//         <div><button className="rules__add-new-button" onClick={() => setShowAddNewRule(true)}>+ Add New</button></div>
//       </div>
//       <table className="rules__content-table">
//         <thead>
//           <tr>
//             <th>Sr. No.</th>
//             <th>Rule Name</th>
//             <th>Media Type</th>
//             <th>Description</th>
//             <th>Program</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rules.length > 0 ? (
//             rules.map((rule, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{rule[0]}</td>
//                 <td>{rule[1]}</td>
//                 <td>{rule[2]}</td>
//                 <td>{rule[4]}</td>
//                 <td>
//                   {console.log("RULE: ",rule)}
//                   <button className="rules__edit-button" onClick={() => handleEditRule(rule)}><FaEdit /> Edit</button>
//                   <button className="rules__delete-button" onClick={() => { setCurrentRule(rule); setShowDeleteRule(true); }}><FaTrash /> Delete</button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6">No rules found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       {showAddNewRule && (
//         <AddNewRule 
//           onClose={() => setShowAddNewRule(false)}
//           onAddRule={handleAddRule} 
//         />
//       )}
//       {showEditRule && (
//         <EditRule
//           onClose={() => {
//             setShowEditRule(false);
//             fetchRules(); // Refresh the rules after edit
//           }}
//           rule={currentRule}
//         />
//       )}
//       {showDeleteRule && (
//         <DeleteRule
//           onClose={() => setShowDeleteRule(false)}
//           onDelete={handleDeleteRule}
//           rule={currentRule}
//         />
//       )}
//     </div>
//   );
// }

// export default Rules;








import React, { useState, useEffect } from 'react';
import './Rules.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import AddNewRule from './AddNewRule';
import EditRule from './EditRule';
import DeleteRule from './DeleteRule';

function Rules() {
  const [rules, setRules] = useState([]);
  const [showAddNewRule, setShowAddNewRule] = useState(false);
  const [showEditRule, setShowEditRule] = useState(false);
  const [showDeleteRule, setShowDeleteRule] = useState(false);
  const [currentRule, setCurrentRule] = useState(null);

  useEffect(() => {
    fetchRules();
  }, []);

  const fetchRules = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/list_rules');
      const data = await response.json();
      if (data.status === 'SUCCESS') {
        setRules(data.data);
      } else {
        console.error('Failed to fetch rules:', data.data);
      }
    } catch (error) {
      console.error('Error fetching rules:', error);
    }
  };

  const handleAddRule = async (newRule) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/add_rule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRule)
      });
      const data = await response.json();
      if (data.status === 'SUCCESS') {
        alert('Rule added successfully!');
        fetchRules(); // Refresh rules list
      } else {
        alert('Failed to add rule: ' + data.data);
      }
    } catch (error) {
      console.error('Error adding rule:', error);
    }
  };

  const handleEditRule = (rule) => {
    setCurrentRule(rule);
    setShowEditRule(true);
  };

  const handleDeleteRule = async (rule) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/delete_rule/${rule[5]}`, {
        method: 'GET',
      });
      const data = await response.json();
      if (data.status === 'SUCCESS') {
        alert('Rule deleted successfully!');
        fetchRules(); // Refresh rules list
      } else {
        alert('Failed to delete rule: ' + data.data);
      }
    } catch (error) {
      console.error('Error deleting rule:', error);
    }
  };

  return (
    <div className="rules">
      <div className="rules-heading">
        <div className='rule-page-header'>Rules</div>
        <div><button className="rules__add-new-button" onClick={() => setShowAddNewRule(true)}>+ Add New</button></div>
      </div>
      <table className="rules__content-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Rule Name</th>
            <th>Media Type</th>
            <th>Description</th>
            <th>Program</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rules.length > 0 ? (
            rules.map((rule, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{rule[0]}</td>
                <td>{rule[1]}</td>
                <td>{rule[2]}</td>
                <td>{rule[4]}</td>
                <td>
                  <button className="rules__edit-button" onClick={() => handleEditRule(rule)}><FaEdit /> Edit</button>
                  <button className="rules__delete-button" onClick={() => { setCurrentRule(rule); setShowDeleteRule(true); }}><FaTrash /> Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No rules found</td>
            </tr>
          )}
        </tbody>
      </table>
      {showAddNewRule && (
        <AddNewRule 
          onClose={() => setShowAddNewRule(false)}
          onAddRule={handleAddRule} 
        />
      )}
      {showEditRule && (
        <EditRule
          onClose={() => {
            setShowEditRule(false);
            fetchRules(); // Refresh the rules after edit
          }}
          rule={currentRule}
        />
      )}
      {showDeleteRule && (
        <DeleteRule
          onClose={() => setShowDeleteRule(false)}
          onDelete={() => handleDeleteRule(currentRule)}
          rule={currentRule}
        />
      )}
    </div>
  );
}

export default Rules;
