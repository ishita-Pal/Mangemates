import React, { useState, useRef } from "react";

const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    setFiles(droppedFiles);
  };

  const handleUpload = () => {
    if (!files) {
      console.error("No files selected for upload.");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files[]", files[i]);
    }

    fetch("http://localhost:3000/files", {  // Update the endpoint to /files
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          setFiles(null); // Clear file selection after successful upload
          console.log("Files uploaded successfully!");
        } else {
          console.error("Upload failed:", data.error);
        }
      })
      .catch((error) => console.error("Upload failed:", error.message));
  };

  return (
    <div>
      {files ? (
        <div className="uploads">
          <ul>
            {Array.from(files).map((file, idx) => (
              <li key={idx}>{file.name}</li>
            ))}
          </ul>
          <div className="actions">
            <button onClick={() => setFiles(null)}>Cancel</button>
            <button onClick={handleUpload}>Upload</button>
          </div>
        </div>
      ) : (
        <div
          className="dropzone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h1>Drag and Drop Files to Upload</h1>
          <h1>Or</h1>
          <input
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            ref={inputRef}
          />
          <button onClick={() => inputRef.current.click()}>Select Files</button>
        </div>
      )}
    </div>
  );
};

export default DragDropFiles;
