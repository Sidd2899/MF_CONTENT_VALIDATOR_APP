import React, { useState, useEffect } from 'react';
import './ValidateContent.css';

function ValidateContent() {
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

  return (
    <div className="validate-content">
      <h2>Validate Content</h2>
      <form className="validate-form">
        <div className="form-group">
          <label><b>Program Type</b></label>
          <select>
            <option>Select</option>
            {programs.map((program, index) => (
              <option key={index} value={program[0]}>{program[0]}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label><b>Media Type</b></label>
          <select>
            <option>Select</option>
            <option value="PDF/Image">PDF/Image</option>
            <option value="Video">Video</option>
          </select>
        </div>
        <div className="form-group media-type-group">
          <label><b>Browse</b></label>
          <div className="input-group">
            <input type="text" placeholder="Select" />
            <button type="button" className="browse-button">Browse</button>
          </div>
        </div>
      </form>
      <div className='analyze-button-repositioning'>
        <button type="submit" className="analyze-button">Analyze</button>
        <div className="uploaded-file">Uploaded: attachment.docx</div>
      </div>
    </div>
  );
}

export default ValidateContent;





