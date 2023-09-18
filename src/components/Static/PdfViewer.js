import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import Cookies from 'js-cookie';
import pdfIcon from '../../img/pdf-icon-png-2058.png'; // Import your PDF icon image

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer({ pdfUrl, message }) {
  const [showPDF, setShowPDF] = useState(false);

  const handleDownload = () => {
    window.open('http://127.0.0.1:8081/' + pdfUrl, '_blank');
  };

  const handlePDFLoadSuccess = () => {
    setShowPDF(true);
  };

  return (
    <div
      className="flex justify-center flex-col items-center w-full mt-5"
      style={{ position: 'relative' }}
    >
      {!showPDF && (
        <img
          src={pdfIcon}
          alt="PDF Icon"
          style={{
            width: '100px', // Adjust icon size as needed
            height: '100px', // Adjust icon size as needed
            cursor: 'pointer',
          }}
          
        />
      )}
      {showPDF && (
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
          }}
        >
          <Document file={pdfUrl} onLoadSuccess={handlePDFLoadSuccess}>
            <Page pageNumber={1} />
          </Document>
        </div>
      )}
      <button
        style={{
          marginTop: '20px', // Spacing between button and document
          backgroundColor: 'blue', // Button background color
          color: 'white', // Button text color
          border: 'none', // Remove button border
          padding: '12px 24px', // Button padding
          borderRadius: '6px', // Rounded button corners
          cursor: 'pointer',
        }}
        onClick={handleDownload}
      >
        {message}
      </button>
    </div>
  );
}

export default PDFViewer;
