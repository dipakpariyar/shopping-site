import axios from 'axios';
import { ENDPOINT } from '../../config';

export default (details, type) => async (dispatch, getState) => {
  // console.log('add product called', details);
  const { id } = details;
  axios.post(`${ENDPOINT}/web/add-product-view`, { productId: id, type });
  // console.log('res add product view', res);
};
