import Sitemap from 'react-router-sitemap';
import routes from './router';
import db from '../server/src/db';
// import { cities } from '../server/src/api/budgetRangeProvider';

async function makeConfigFile() {
  const { props } = routes;
  const { children } = props;

  const configs = [];
  const dataPiromises = [];

  await db.execute(async ({ insert, find, update }) => {
    children.filter((r) => r.props.schema).forEach((r, idx) => {
      if (r.props.schema) {
        const { schema } = r.props;
        if (schema === 'Brand') {
          dataPiromises.push(find('ServiceTypeBrand'));
          configs.push(r.props);
        }
        if (schema === 'Model') {
          dataPiromises.push(find('ServiceTypeBrandModel'));
          configs.push(r.props);
        }

        if (schema === 'UsedVehicle') {
          dataPiromises.push(find('SellVehicle'));
          configs.push(r.props);
        }

        if (schema === 'News') {
          dataPiromises.push(find('News'));
          configs.push(r.props);
        }
      }
    });
  });

  let allData = (await Promise.all(dataPiromises));

  children.filter((r) => r.props.schema).forEach((r, idx) => {
    const { schema } = r.props;
    if (schema === 'City') {
      allData.push(cities);
      configs.push(r.props);
    }
  });

  allData = allData.map((arr, idx) => {
    const { schema } = configs[idx];
    // console.log('schema', schema);
    if (schema === 'Brand') {
      // /:vehicleType/brand/:brandName"
      return arr.map((obj) => ({ vehicleType: obj.stypeId === 1 ? 'car' : 'bike', brandName: `${obj.brandName.replace(/\s/g, '')}-${obj.id}`.toLocaleLowerCase() }));
    }

    if (schema === 'Model') {
      // /details/:proId
      return arr.map((obj) => ({ proId: obj.slug }));
    }

    if (schema === 'UsedVehicle') {
      // /used-vehicle/details/:usedVehicleId"
      return arr.map((obj) => ({ usedVehicleId: obj.slug }));
    }

    if (schema === 'News') {
      return arr.map((n) => ({ newsSlug: n.slug }));
    }

    if (schema === 'City') {
      // /used/city/:cityId/:usedVehicleType
      return arr.map((city) => ({ cityId: city, usedVehicleType: ['cars', 'bikes'] }));
    }
  });

  // console.log('all Data', configs, allData);
  const paramsConfig = configs.reduce((obj, r, idx) => {
    obj[r.path] = allData[idx];
    return obj;
  }, {});
  return paramsConfig;
}

export default async function createSiteMap() {
  const paramsConfig = await makeConfigFile();
  const sitemap = new Sitemap(routes)
    .applyParams(paramsConfig)
    .build('https://sawarikinbech.com')
    .save('./build/public/sitemap.xml');
}
