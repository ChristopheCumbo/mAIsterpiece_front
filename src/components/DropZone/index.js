import PropTypes from 'prop-types';
import React from 'react';
import { useDropzone } from 'react-dropzone';

import './style.scss';

function DropZone(props) {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
  } = useDropzone({
    maxFiles: 1,
    accept: {
      'image/*': ['.png', '.gif', '.jpeg', '.jpg'],
    },
    maxSize: 64000,
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <>
      <div>DropZone</div>
      <section className="dropzone_container">
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
      </section>
    </>
  );
}

DropZone.propTypes = {

};

export default DropZone;
