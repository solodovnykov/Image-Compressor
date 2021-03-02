import React from "react";
import { useEffect, useState } from "react";
import "./Card.css";
import imageCompression from "browser-image-compression";
import { useDropzone } from "react-dropzone";

export default function Card() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const [originalImage, setOriginalImage] = useState("");
  const [originalImageFile, setOriginalImageFile] = useState("");
  const [compressImage, setCompressImage] = useState("");
  const [fileName, setFileName] = useState("");
  const [imageSize, setImageSize] = useState(1920);
  const [compressProgress, setCompressProgress] = useState(0);
  const [dropzone, setDropzone] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (acceptedFiles[0]) {
        let img = new Image();
        img.src = originalImageFile;
        setImageSize(img.width);
        console.log(img.width);
      }
    }, 160);
  }, [originalImage]);

  useEffect(() => {
    setOriginalImage(acceptedFiles[0]);
    if (acceptedFiles[0]) {
      setOriginalImageFile(URL.createObjectURL(acceptedFiles[0]));
      setFileName(acceptedFiles[0].name);
      setDropzone("");
      setCompressProgress(0);
      setCompressImage("");
    }
  }, [acceptedFiles]);

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

  const setDefaultImgSizeHandler = () => {
    let img = new Image();
    img.src = originalImageFile;
    setImageSize(img.width);
  };

  return (
    <div className="App">
      <div className="compressor">
        <div className="compressor-title">
          Compressor <div className="card-icon"></div>
        </div>

        <div
          {...getRootProps({ className: `dropzone ${dropzone}` })}
          onDragOver={() => setDropzone("dragover")}
          onDragLeave={() => setDropzone("")}
        >
          <input {...getInputProps()} />
          Drag files here or click
        </div>
        {originalImageFile ? (
          <div
            style={{ backgroundImage: `url(${originalImageFile})` }}
            className="original-img"
          />
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
            <div className="image-prop">
              <input
                className="max-size"
                type="text"
                value={`${imageSize} px`}
                onChange={(e) => setImageSize(e.target.value)}
              />
              <button
                onClick={() => setDefaultImgSizeHandler()}
                className="default-btn"
              >
                Default
              </button>
            </div>
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
