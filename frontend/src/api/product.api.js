
import axios from 'axios';

export const createProductRequest = async (product) => {
    await axios.post("http://localhost:4000/api/products", product)

}

