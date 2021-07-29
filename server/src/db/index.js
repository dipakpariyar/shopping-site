import path from 'path';
import sqliteDb from 'sqlite';
import Promise from 'bluebird';
import insert from './insert';
import find from './find';
import findOne from './findOne';
import upsert from './upsert';
import update from './update';
import deleteQuery from './deleteQuery';
import executeSql from './executeSql';

export const dbPromise = sqliteDb.open('automobile.sqlite', { Promise });

let dbInstance = null;
const getInstance = async () => {
  if (dbInstance !== null) {
    return dbInstance;
  }

  const db = await dbPromise;
  // console.log('path', path.join(process.cwd(), 'migrations'));
  await db.migrate({ migrationsPath: path.join(process.cwd(), 'build', 'migrations') });
  dbInstance = {
    insert: insert.bind(null, db),
    find: find.bind(null, db),
    findOne: findOne.bind(null, db),
    update: update.bind(null, db),
    upsert: upsert.bind(null, db),
    deleteQuery: deleteQuery.bind(null, db),
    executeSql: executeSql.bind(null, db),
  };
  return dbInstance;
};

export const init = async () => {
  await getInstance();
};

export default {
  execute: async (func) => {
    const db = await getInstance();
    const res = await func(db);
    return res;
  },
};
