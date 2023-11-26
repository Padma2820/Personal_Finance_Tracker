// // initializeDatabase.js
// import { database } from './firebase';
// import schema from './schema';

// const initializeDatabase = () => {
//   Object.keys(schema).forEach(collection => {
//     Object.keys(schema[collection]).forEach(document => {
//       // Set initial data in the database
//       database.ref(`${collection}/${document}`).set(schema[collection][document]);
//     });
//   });
// };

// export default initializeDatabase;
