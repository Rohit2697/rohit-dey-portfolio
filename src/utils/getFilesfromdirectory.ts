import  fs from 'fs';


export function getFilesFromDirectory(directoryPath: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    // Read the directory contents
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        return reject(`Unable to read directory: ${err.message}`);
      }

      // Return the files array
      resolve(files);
    });
  });
}

// Example usage:

