import React from "react";

function ImagenBase64() {
  const uploadImage = (e) => {
    console.log(e.target.files);
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
