import React from "react";
import { useEffect, useState } from "react";
import "./Card.css";
import imageCompression from "browser-image-compression";
import { useDropzone } from "react-dropzone";

export default function Card() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const [originalImage, setOriginalImage] = useState("");
  const [originalImageFile, setOriginalImageFile] = useState("");
  const [compressImage, setCompressImage] = useState("");
  const [fileName, setFileName] = useState("");
  const [imageSize, setImageSize] = useState(1920);
  const [compressProgress, setCompressProgress] = useState(0);
  const [dropzone, setDropzone] = useState("");

  useEffect(() => {
    setOriginalImage(acceptedFiles[0]);
    if (acceptedFiles[0]) {
      setOriginalImageFile(URL.createObjectURL(acceptedFiles[0]));
      setFileName(acceptedFiles[0].name);
    }
    console.log(files);
  }, [acceptedFiles]);

  const handler = (e) => {
    const imageFile = e.target.files[0];
    setOriginalImage(imageFile);
    setOriginalImageFile(URL.createObjectURL(imageFile));
    setFileName(imageFile.name);
    // console.log(URL.createObjectURL(imageFile));
  };

  const compressImageHandler = (e) => {
    e.preventDefault();

    const oprions = {
      maxSizeMB: 1,
      maxWidthOrHeight: imageSize,
      useWebWorker: true,
      onProgress: (e) => setCompressProgress(e),
    };

    if (Option.maxSizeMB >= originalImage / 1024) {
      alert("Image is too small");
      return 0;
    }

    let output;
    imageCompression(originalImage, oprions).then((x) => {
      output = x;

      const downloadLink = URL.createObjectURL(output);
      setCompressImage(downloadLink);
    });
  };

  return (
    <div className="App">
      <div className="compressor">
        <div className="compressor-title">Compressor</div>

        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          Drag 'n' drop some files here
        </div>
        {originalImageFile ? (
          <img src={originalImageFile} className="original-img" />
        ) : (
          <div className="compressor-original-img"></div>
        )}

        {acceptedFiles[0] ? (
          <div className="compressor-info">
            <div className="file-name">{acceptedFiles[0].path}</div>
            <div className="file-size">
              {Math.round(acceptedFiles[0].size * 0.000977)} Kb
            </div>
          </div>
        ) : (
          ""
        )}

        {acceptedFiles[0] ? (
          <>
            <input
              className="scroller"
              type="range"
              id="volume"
              name="volume"
              min="0"
              max="5000"
              step="10"
              value={imageSize}
              onChange={(e) => setImageSize(e.target.value)}
            ></input>
            <input
              className="max-size"
              type="text"
              value={`${imageSize} px`}
              onChange={(e) => setImageSize(e.target.value)}
            />
          </>
        ) : (
          ""
        )}

        {originalImageFile && (
          <div className="compress-btn">
            <button
              className="compress-btn-text"
              onClick={(e) => {
                compressImageHandler(e);
              }}
            >
              Compress Image
            </button>
            <div
              className="compress-btn-bg"
              style={{ width: `${compressProgress}%` }}
            ></div>
          </div>
        )}

        {compressImage && (
          <>
            <div className="compress-line"></div>
            <button className="download-btn">
              <a href={compressImage} download={fileName}>
                Download Image
              </a>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
