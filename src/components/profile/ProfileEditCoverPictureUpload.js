import React, { useState } from 'react';

const CoverPictureUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [fileSelected, setFileSelected] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setFileSelected(true);
    }
  };

  const handleUpload = () => {
    // Implement the upload logic here
    // You can use Axios or any other method to send the file to the server
    console.log('Selected File:', selectedFile);
  };

  return (
    <div className="flex flex-col items-center mt-4">
      {previewUrl && (
        <img
          src={previewUrl}
          alt="Cover Photo Preview"
          className="w-64 h-64 rounded-lg object-cover mb-4"
        />
      )}
      {!fileSelected && (
        <label className="w-2/3 h-[200px] p-20 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
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
          <span className="mt-2 text-base leading-normal">Upload Cover Photo</span>
          <input
            type="file"
            accept=".jpg,.jpeg,.png"
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
      {/* <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
        onClick={handleUpload}
        disabled={!fileSelected}
      >
        Upload
      </button> */}



    </div>
  );
};

export default CoverPictureUpload;
