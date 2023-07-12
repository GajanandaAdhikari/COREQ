import React, { useState } from 'react';

function UploadPDF({message}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileSelected, setFileSelected] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileSelected(true);
    }
  };

  const handleUpload = () => {
    // Implement the upload logic here
    // You can use Axios or any other method to send the file to the server
    console.log('Selected File:', selectedFile);
  };

  return (
    <div className="flex flex-col items-center w-full   mt-5 ">
      {!fileSelected && (
        <label className="w-full h-[200px]  flex flex-col items-center px-4 py-6 bg-back-color text-blue rounded-lg shadow-lg  cursor-pointer hover:bg-blue hover:text-white">
          <svg
            className="w-80 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
           
            <path
              fillRule="evenodd"
              d="M2 5a3 3 0 013-3h5a3 3 0 013 3v1h4a1 1 0 011 1v9a3 3 0 01-3 3H5a3 3 0 01-3-3V6a1 1 0 011-1h4V5zm10 2a2 2 0 11-4 0 2 2 0 014 0zM7 10a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          <span className="mt-2 text-base leading-normal">{message}</span>
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleFileChange}
            onClick={(event) => {
              event.target.value = null; // Clear the file selection on each click
            }}
            disabled={fileSelected}
          />
        </label>
      )}
      {selectedFile && (
        <p className="text-gray-600 mt-2">{selectedFile.name}</p>
      )}

    </div>
  );
}

export default UploadPDF;