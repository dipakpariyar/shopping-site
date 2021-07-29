
import db from '../db';
import { siteURL } from '../../../webConfig.json';
// import titleDescriptionProvider from '../../../client/src/screens/common/react-helmet/titileDescriptionProvider';

export default async (url) => {
  const path = url['0'];
  const slug = url.param;
  // console.log('path and url', url, path, slug);

  // // for home page
  // if (path === '/') {
  //   return `
  //   <title itemprop="name">Sawari Kinbech: New Cars And Bikes in Nepal, Car And Bikes Prices in Nepal, Buy &amp; Sell Used Cars and Bikes in Nepal</title>
  //   <meta name="description" itemprop="description" content="Thinking of buying a car or bike? At sawarikinbech.com, buy new and used cars and bikes, search by filter and preferences, compare bikes and cars, read latest news and updates, see 360 views &amp; more!"/>
  //   <meta name="keywords" content="Sawari, kinbech, sawarikinbech, compare, bike, car, service, center, dealer in nepalm, bike price, car price" />
  //   `;
  // }

  // if (path === '/details') {
  //   // const id = parseInt(slug.split('-')[1], 10);
  //   const currentProductDetails = await db.execute(async ({ findOne }) => {
  //     const result = await findOne('ServiceTypeBrandModel', { slug });
  //     return result;
  //   });

  //   // for new product details meta tags
  //   return  `<title>New ${currentProductDetails.name} 2021 Price In Nepal, Images, Review & Colours</title>
  //             <meta property="og:image" content="${siteURL}/model_image/${currentProductDetails.image}" />
  //             <meta property="og:image:secure_url" content="${siteURL}/model_image/${currentProductDetails.image}"/>
  //             <meta name="description" itemprop="description" content="${currentProductDetails.name} price Read ${currentProductDetails.name} Reviews, view Mileage, Images, Specifications, Variants Details &amp; get ${currentProductDetails.name} latest news.">`;
  // }

  // // for news meta tags
  // if (path === '/news-details') {
  //   const id = parseInt(slug.split('-')[1], 10);
  //   const currentNews = await db.execute(async({ findOne }) => {
  //     const result = await findOne('News', { slug });
  //     return result;
  //   });
  //   const description = currentNews.content.replace(/(<([^>]+)>)/gi, '').slice(0, 145);
  //   return  `<title>${currentNews.header}</title>
  //   <meta property="og:image" content="${siteURL}/images/${currentNews.image}"/>
  //   <meta property="og:image:secure_url" content="${siteURL}/images/${currentNews.image}"/>
  //   <meta name="description" content="${description}"/>`;
  // }

  // // for used product details meta tags
  // if (path === '/used-vehicle/details') {
  //   const currentVehicle = await db.execute(async({ findOne }) => {
  //     const result = await findOne('SellVehicle', { slug });
  //     return result;
  //   });

  //   return `<title>${currentVehicle.model}</title>
  //   <meta property="og:image" content="${siteURL}/images/${currentVehicle.image1}"/>
  //   <meta property="og:image:secure_url" content="${siteURL}/images/${currentVehicle.image1}"/>
  //   <meta name="description" content="${currentVehicle.variant}"/>`;
  // }

  // const { title, description } = titleDescriptionProvider(`${path}/${slug}`, slug);
  // console.log('title', path, slug, title);
  // return `
  // <title itemprop="name">${title}</title>
  // <meta name="description" itemprop="description" content="${description}">
  // `;
  return '';
};
