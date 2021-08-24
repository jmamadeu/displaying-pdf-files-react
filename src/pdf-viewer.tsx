import { useState } from 'react';
import { Document, Page } from 'react-pdf';

import samplePDF from './back-to-school.pdf'


function PDFViewer() {
  const [numPages, setNumPages] = useState<null | number>(null);
  const [pageNumber, setPageNumber] = useState<number>(1)

  function onDocumentLoadSuccess({ numPages }: {numPages: number}) {
    console.log("funcionou")
    setNumPages(numPages);

    setPageNumber(1)
  }

  return (
    <div>
      <Document
      onLoadError={err => console.log(err)}
      onLoadProgress={pr => console.log(pr)}
        file={samplePDF}
        onLoadSuccess={onDocumentLoadSuccess}
        options={{ workerSrc: "/pdf.worker.js" }}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {1} of {numPages}</p>
    </div>
  );
}

export default PDFViewer