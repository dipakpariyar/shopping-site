/* eslint-disable import/no-cycle */
import axios from 'axios';
import { ENDPOINT } from '../../config';
import { updateFormValue } from '../formHandler';

export default async (dispatch, getState, schema) => {
  try {
    const { form, main } = getState();
    const record = form.fileUpload;
    delete record.loading;
    delete record.success;
    delete record.error;
    dispatch(updateFormValue(schema, { loading: true, error: null, success: null }));
    const res = await axios.post(`${ENDPOINT}/web/add-vehicle-meta-data`, record);
    dispatch(updateFormValue(schema, { loading: false, error: null, success: 'Data added Successfully' }));
  } catch (e) {
    console.error('Error in upload file meta data', e);
    dispatch(updateFormValue(schema, { loading: false, error: 'Faild to add data', success: null }));
  }
};
