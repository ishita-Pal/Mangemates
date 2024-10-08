import React, { useEffect, useState } from 'react';

const FileList = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching files from the server...");
    fetch('http://localhost:3000/files')
      .then((response) => {
        console.log('Response received:', response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data received:', data);
        setFiles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching files:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading files: {error.message}</div>;
  }

  return (
    <div className="file-list">
      <h2>Uploaded Files</h2>
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            <a href={`http://localhost:3000/backend/uploads/${file.filename}`} target="_blank" rel="noopener noreferrer">
              <strong>{file.filename}</strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
