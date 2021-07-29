import db from '../../../db';

export default async (schema, condition) => {
  const res = await db.execute(async ({ findOne }) => {
    const findOneRes = await findOne(schema, condition);
    return findOneRes;
  });
  return res;
};
