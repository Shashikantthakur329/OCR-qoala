import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
// import '../App.css'
import Header from "../components/Header";
import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


import './FileUpload.css'
const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
    },
  });

  return (
    <>
      {/* </Header> */}
      <div className="container">
        <div className='FileUpload'  {...getRootProps()}>
          <div className="card">
            <h3>Upload Files</h3>
            <div className="drop_box">
              <header>
              <input {...getInputProps()} />
                <h4>Select File here</h4>
              </header>
              <p>Files Supported: JPEG, PNG, SVG, WEBP</p>
              {/* <button className="btn">Choose File</button> */}
              <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>Choose File</Button>
            </div>
          </div>

          <ul>
              {uploadedFiles.map((file) => (
                // {file && <li key={file.name}>{file.name}</li>}
                <li key={file.name}>{file.name}</li>
              ))}
            </ul>
        </div>
      </div>
    </>
  );
};

export default FileUpload;

