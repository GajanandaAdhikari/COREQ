import React from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import Cookies from 'js-cookie';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer({ pdfUrl,message }) {
  const handleDownload = () => {
    window.open('file://' + Cookies.get('pwd') + '/' + pdfUrl, '_blank');
  };

  return (
	<div className="flex justify-center flex-col items-center w-full   mt-5 ">
    <div className='w-full h-[100px]  flex flex-col items-center px-4 py-6 bg-back-color text-blue rounded-lg shadow-lg  cursor-pointer hover:bg-blue hover:text-white'>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
      <button onClick={handleDownload}>{message}</button>
    </div>
	</div>
  );
}

export default PDFViewer;