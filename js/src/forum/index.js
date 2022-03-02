import Editor from './components/Editor.js';
import Pdf_Files from './components/pdf_files.js';

app.initializers.add('vascan/editor', () => {
  Editor(),
  Pdf_Files()
});
