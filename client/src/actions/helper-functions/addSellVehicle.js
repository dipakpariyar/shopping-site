/* eslint-disable import/no-cycle */
import axios from 'axios';
import { ENDPOINT } from '../../config';
import { updateFormValue } from '../formHandler';
import { updateMainValue } from '../updateMainValue';
 
const updateAdminSellVehicleData = (main, dispatch, record) => {
  const  { id } = record;
  const findOneRes = main.initialAdminData.SellVehicle.find((sv) => sv.id === id);
  // console.log('find res in add sell vehicle', findOneRes);
  let dataTobeUpdte;
  if (findOneRes) {
    dataTobeUpdte = main.initialAdminData.SellVehicle.map((sv) => (sv.id === id ? { ...sv, ...record } : sv));
  } else {
    dataTobeUpdte = [...main.initialAdminData.SellVehicle, record];
  }
  // console.log('data to be update', dataTobeUpdte);
  dispatch(updateMainValue('initialAdminData', { ...main.initialAdminData, SellVehicle: dataTobeUpdte }));
};
 
export default async (dispatch, getState, schema) => {
  try {
    const { form, main } = getState();
    const record = form.sellVehicle;
    const dealerId = await sessionStorage.getItem('USER_ID');
    if (dealerId) {
      record.stypeId = form.sellVehicleFilter.stypeId;
      record.dealerId = dealerId;
      record.customerType = 'Institutional';
    }
    // console.log('add Sell Vehicle', dealerId, getState());
    delete record.loading;
    delete record.success;
    delete record.error;
    if (!record.sbId) {
      dispatch(updateFormValue(schema, { error: 'Please fill all the field' }));
    } else {
      // console.log('else is also called');
      dispatch(updateFormValue(schema, { loading: true, error: null, success: null }));
      const enquiryRes = await axios.post(`${ENDPOINT}/web/add-vehicle`, { ...record });
      // console.log('add sellVehicle res', enquiryRes);
      if (enquiryRes.status === 200) {
        dispatch(updateFormValue(schema, {
          loading: false,
          success: 'Your vehicle will be listed soon. Thank you!',
          error: null,
        }));
        if (dealerId) {
          if (record.id) {
            updateAdminSellVehicleData(main, dispatch, record);
          } else {
            updateAdminSellVehicleData(main, dispatch, { ...record, id: enquiryRes.data });
          }
        }
      }
    }
  } catch (e) {
    dispatch(updateFormValue(schema, { loading: null, success: null, error: 'Faild to  add list vehicle! Try again' }));
    console.error('error in sell vehicle', e);
  }
};
