import logo from './logo.svg';
import module from './App.module.css';
import { MyDocument } from './components/MyDocument/MyDocument.js';
import { PDFViewer } from '@react-pdf/renderer';
// import "@fontsource/dm-serif-display"
// import { MyDocument } from './components/MyDocument';

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
