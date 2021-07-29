import sharp from 'sharp';
import path from 'path';
import { ENDPOINT } from '../../../client/src/config/index';
import db from '../db';

const sharpHandler = (record) => {
  const { outputFile, inputFile, tableRecord, size, fileName } = record;
  sharp(inputFile)
    .resize(...size).jpeg({ quality: 100 })
    .toFile(outputFile)
    .then((res) => {
      db.execute(({ insert }) => {
        insert('FileMetadata', { ...tableRecord, url: `${ENDPOINT}/${tableRecord.fType}/${tableRecord.fileName}` });
      });
    });
};

export default async (data, type) => {
  // console.log('old product manulation', data, type);

  const { id, image1, image2, image3, image4, image5, image6, image7 } = data;
  const res = await db.execute(async ({ findOne }) => {
    const findOneRes = await findOne('FileMetadata', { pId: id });
    return findOneRes;
  });

  if (res) {
    return true;
  }

  const uploadedImages = [image1, image2, image3, image4, image5, image6, image7].filter((i) => (i && i !== null && i !== 'null'));
  const uploadedImagesPath = uploadedImages.map((i) => path.join(process.cwd(), 'build', 'public', 'images', i));
  const thumbnailSize = [320, 240];
  const fullSize = [600, 600];
  uploadedImagesPath.forEach((file, idx) => {
    if (idx === 0) {
      // makeThumbNail for this product
      const thumbnailName = `thumbnail-${Date.now()}.jpeg`;
      const outputFile = path.join(process.cwd(), 'build', 'public', 'thumbnail_used', thumbnailName);
      if (uploadedImages[0] && uploadedImagesPath[0]) {
        sharpHandler({
          inputFile: uploadedImagesPath[0],
          outputFile,
          tableRecord: { pId: id, pType: type, fType: 'thumbnail_used', fileName: thumbnailName },
          size: thumbnailSize,
        });
      }
    }
    const fileName = `used-image-${Date.now()}.jpeg`;
    const outputFile = path.join(process.cwd(), 'build', 'public', 'used_image', fileName);
    sharpHandler({
      inputFile: file,
      outputFile,
      tableRecord: { pId: id, pType: type, fType: 'used_image', fileName },
      size: fullSize,
    });
  });
};
