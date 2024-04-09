import  { useRef } from 'react';

// Import Tailwind CSS utility classes
import 'tailwindcss/tailwind.css';

// Import CSS for component styling
// import './WYSIWYGEditor.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const WYSIWYGEditor = (_props: any) => {
  const editorRef = useRef(null);

  const handleInsertImage = () => {
    const url = prompt('Enter image URL:');
    if (url) {
      document.execCommand('insertImage', false, url);
    }
  };

  const handleInsertLink = () => {
    const url = prompt('Enter link URL:');
    if (url) {
      document.execCommand('createLink', false, url);
    }
  };

  return (
    <div className="wysiwyg-container">
      <div
        ref={editorRef}
        className="wysiwyg-editor"
        contentEditable="true"
      ></div>
      <div className="wysiwyg-toolbar">
        <button onClick={handleInsertImage}>Insert Image</button>
        <button onClick={handleInsertLink}>Insert Link</button>
      </div>
    </div>
  );
};

export default WYSIWYGEditor;
