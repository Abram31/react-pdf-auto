import module from './App.module.css';
import { MyDocument } from './components/MyDocument/MyDocument.js';
import { PDFViewer } from '@react-pdf/renderer';

function App() {
  return (
    <div className={module.App}>
      <PDFViewer className={module.wrapper_pdf}>
        <MyDocument />
      </PDFViewer>
    </div>
  );
}

export default App;
