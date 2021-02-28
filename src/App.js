import { useEffect, useState } from "react";
import "./App.css";
import imageCompression from "browser-image-compression";
import imgZone from "./img/imageZone.svg";
import { useDropzone } from "react-dropzone";
import Card from "./components/Card/Card";

function App() {
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
  }, [acceptedFiles]);

  useEffect(() => {
    console.log("Lol");
  }, [files[0]]);

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
    <div className="main">
      <div className="green1"></div>
      <div className="green2"></div>
      <div className="wrapper">
        <Card />
      </div>
    </div>
  );
}

export default App;
