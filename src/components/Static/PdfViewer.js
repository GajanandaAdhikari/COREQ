import React from 'react';
import { Document, Page } from 'react-pdf';

function PDFViewer({ pdfUrl }) {
  const handleDownload = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
}

export default PDFViewer;
