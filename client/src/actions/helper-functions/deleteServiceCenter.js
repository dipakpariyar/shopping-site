/* eslint-disable import/no-cycle */
import axios from 'axios';
import { updateMainValue } from '../index';
import { ENDPOINT } from '../../config';

const deleteBrand = (getState, id) => getState.main.initialAdminData.serviceCenterList.filter(data => data.id !== id); //eslint-disable-line

export default (id) => async (dispatch, getState) => {
  try {
    const token = await sessionStorage.getItem('SESSION_ID'); //eslint-disable-line
    const userRes = await axios.post(`${ENDPOINT}/web/delete-service-center`, { id, token });
    if (userRes.status === 200) {
      dispatch(updateMainValue('initialAdminData', { ...getState().main.initialAdminData, serviceCenterList: deleteBrand(getState(), id) }));
      return true;
    }
  } catch (e) {
    return false;
  }
};
