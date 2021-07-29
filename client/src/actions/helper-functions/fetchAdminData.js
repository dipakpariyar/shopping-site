/* eslint-disable import/no-cycle */
import axios from 'axios';
import { ENDPOINT } from '../../config';
import { updateMainValue } from '../updateMainValue';

export default () => async (dispatch, getState) => {
  // console.log('fetch initial admin data called');
  const userId = await sessionStorage.getItem('USER_ID');
  const userType = await sessionStorage.getItem('USER_TYPE');
  const resData = await axios.post(`${ENDPOINT}/web/fetch-admin-data`, { userId, userType });
  // console.log('initial admin data res', resData);
  if (resData.status === 200) {
    dispatch(updateMainValue('initialAdminData', resData.data));
  }
};
