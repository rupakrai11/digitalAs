import React, { Component } from 'react';
import { Document, Page ,pdfjs} from 'react-pdf';


class PDF extends Component {

    constructor(props){
        super(props);
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
       this.state = {
            numPages: null,
            pageNumber: 1,
          }
          this.onDocumentLoad=this.onDocumentLoad.bind(this);
        
    }
       
          onDocumentLoad({ numPages }) {
            this.setState({ numPages });

          }

  render() {
      
    const { pageNumber, numPages } = this.state;
    return (

      <div style={{height:"500px",overflowY:"scroll",width:"700px",border:"5px solid black"}}>
        <Document
          file={process.env.PUBLIC_URL +'/BIM.pdf'}
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
          {Array.apply(null, Array(numPages))
    .map((x, i)=>i+1)
    .map(page => <Page pageNumber={page}/>)}
        </Document>
        <p>Page {pageNumber} of {numPages}</p>



      </div>
    )
  }
}
export default PDF;
