export function fileToBlob(file: File, callback: (blob: Blob) => void) {
    // Create a new file reader
    const reader = new FileReader();
  
    // Define the onload event handler
    reader.onload = (event: ProgressEvent<FileReader>) => {
      // Ensure event target is not null
      if (event.target) {
        // Create a new Blob object with the file content
        const blob = new Blob([event.target.result as ArrayBuffer], { type: file.type });
        
        // Execute the callback function with the Blob object
        callback(blob);
      }
    };
  
    // Read the file as array buffer
    reader.readAsArrayBuffer(file);
  }
  