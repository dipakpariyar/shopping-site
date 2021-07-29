import _ from 'lodash';
import { getSchema } from './helper-functions';
import { ENDPOINT } from '../../../../client/src/config';

export default {
  brandList: async (context, args) => {
    const { variables } = args.body;
    let res = await getSchema('ServiceTypeBrand');
    if (variables.vehicleType) {
      res = res.filter((b) => b.stypeId === variables.vehicleType);
    }
    if (variables.limit) {
      if (variables.offset > res.length) {
        throw new Error('dataFetchComplete');
      }
      res = res.slice(variables.offset, (variables.offset + variables.limit));
    }
    res = res.map((obj) => ({ ...obj, brandImageUrl: `${ENDPOINT}/brand_image/${obj.brandImageUrl}` }));
    return res;
  },

};
