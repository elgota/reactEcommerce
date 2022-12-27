
import { axios } from 'axios';

const createProductRequest = async (product) => {
    await axios.post("http://localhost:4000/api/products", product)

}

export default createProductRequest;