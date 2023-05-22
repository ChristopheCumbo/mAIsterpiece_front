import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useCallback } from 'react';
import { useState } from 'react';

import PropTypes from 'prop-types';

import './style.scss';



function DropZoneAvatar({ uploadedFiles, setUploadedFiles }) {
  // const [uploadedFiles, setUploadedFiles] = useState([]);
  // console.log('state avant upload: ', uploadedFiles);
  const onDrop = useCallback(acceptedFiles => {
    setUploadedFiles(acceptedFiles[0]);
    // console.log('onDrop');
    // console.log(acceptedFiles[0].name);
  }, []);
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    maxFiles: 1,
    accept: {
      'image/*': ['.png', '.gif', '.jpeg', '.jpg'],
    },
    maxSize: 64000,
    onDrop,
    // onDrop: (acceptedFiles) => { console.log(acceptedFiles[0].name); },
  });

  return (
    <div className="DropZoneAvatar__container">
      <section>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Glissez-déposez une image d'avatar ici, ou cliquez pour sélectionner un fichier sur votre disque dur</p>
        </div>
        <aside>
          <h4>{(uploadedFiles !== []) ? uploadedFiles.name : 'Pas de fichier'}</h4>
        </aside>
      </section>


    </div>
  );
}

DropZoneAvatar.propTypes = {

};

export default DropZoneAvatar;
