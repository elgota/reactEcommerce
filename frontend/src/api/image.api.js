import axios from "axios";

export const createImageRequest = async (formdata) => {
  const options = {
    method: "POST",
    url: "http://localhost:4000/api/images",
    data: formdata,
  };

  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
