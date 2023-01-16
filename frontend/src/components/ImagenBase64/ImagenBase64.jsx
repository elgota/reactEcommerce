import React from "react";
import FileBase64 from "react-file-base64";

function ImagenBase64() {
  const uploadImage = (e) => {
    console.log(e.target.files);

    const file = e.targe.files[0];
  };

  return (
    <div>
      <input type="file" onChange={(e) => uploadImage(e)} />

      {/* <FileBase64
        multiple={ false }
        onDone={ this.getFiles.bind(this) } /> */}
    </div>
  );
}

export default ImagenBase64;
