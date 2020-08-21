import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import { Container } from './styles';

interface DropzoneProps {
  onFileUpload: (file: File) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({ onFileUpload }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(
    acceptedFiles => {
      const file = acceptedFiles[0];

      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);
      onFileUpload(file);
    },
    [onFileUpload],
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} name="avatar" accept="image/*" />

      {selectedFileUrl ? (
        <img id="upload" src={selectedFileUrl} alt="Imagem adicionada" />
      ) : (
        <div>
          <FiUpload size={28} />
          <span>
            Arraste ou clique aqui para adicionar a imagem do produto*
          </span>
        </div>
      )}
    </Container>
  );
};

export default Dropzone;
