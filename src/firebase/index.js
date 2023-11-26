// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth';
// const firebaseConfig = {
//   apiKey: "AIzaSyDn0XBBAzKqMn07HkhSaoqrt4TSXskh96E",
//   authDomain: "personal-finance-tracker-77dd8.firebaseapp.com",
//   projectId: "personal-finance-tracker-77dd8",
//   storageBucket: "personal-finance-tracker-77dd8.appspot.com",
//   messagingSenderId: "825252587257",
//   appId: "1:825252587257:web:17265abc8505609200e428"
// };


// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);


// const db = firebase.firestore();
// const usersCollection = db.collection('users');
// const transactionsCollection = db.collection('transactions');
// const budgetsCollection = db.collection('budgets');
// const savingsGoalsCollection = db.collection('savingsGoals');

// // Define functions to interact with the collections

// // Users Collection
// const addUser = (uid, email, displayName) => {
//   return usersCollection.doc(uid).set({
//     uid,
//     email,
//     displayName,
//   });
// };

// // Transactions Collection
// const addTransaction = (userId, amount, category, type, date) => {
//   return transactionsCollection.add({
//     userId,
//     amount,
//     category,
//     type,
//     date,
//   });
// };

// // Budgets Collection
// const addBudget = (userId, category, limit) => {
//   return budgetsCollection.add({
//     userId,
//     category,
//     limit,
//   });
// };

// // Savings Goals Collection
// const addSavingsGoal = (userId, goalName, goalAmount, currentAmount) => {
//   return savingsGoalsCollection.add({
//     userId,
//     goalName,
//     goalAmount,
//     currentAmount,
//   });
// };

// export {
//   addUser,
//   addTransaction,
//   addBudget,
//   addSavingsGoal,
// };










// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   // Your Firebase configuration

//   apiKey: "AIzaSyDn0XBBAzKqMn07HkhSaoqrt4TSXskh96E",
//   authDomain: "personal-finance-tracker-77dd8.firebaseapp.com",
//   projectId: "personal-finance-tracker-77dd8",
//   storageBucket: "personal-finance-tracker-77dd8.appspot.com",
//   messagingSenderId: "825252587257",
//   appId: "1:825252587257:web:17265abc8505609200e428"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// const db = getFirestore(app); // Use getFirestore to get the Firestore instance

// const database = firebase.database();

// // Example data for users
// const usersData = {
//   "uid1": {
//     email: "user1@example.com",
//     displayName: "User 1",
//     password: "hashed_password", // Ensure to hash passwords securely
//     createdAt: 1672531200000 // Timestamp of user creation
//   },
//   "uid2": {
//     email: "user2@example.com",
//     displayName: "User 2",
//     password: "hashed_password",
//     createdAt: 1672617600000
//   }
// };

// // Writing data to Firebase
// function writeToFirebase(path, data) {
//   const ref = database.ref(path);
//   ref.set(data)
//     .then(() => console.log(`Data written to ${path} successfully.`))
//     .catch(error => console.error(`Error writing data to ${path}: ${error.message}`));
// }

// // Write example data to Firebase
// writeToFirebase('users', usersData);











// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { getFirestore, setDoc, doc } from 'firebase/firestore';

// const firebaseConfig = {
//   // Your Firebase configuration

//   apiKey: "AIzaSyDn0XBBAzKqMn07HkhSaoqrt4TSXskh96E",
//   authDomain: "personal-finance-tracker-77dd8.firebaseapp.com",
//   projectId: "personal-finance-tracker-77dd8",
//   storageBucket: "personal-finance-tracker-77dd8.appspot.com",
//   messagingSenderId: "825252587257",
//   appId: "1:825252587257:web:17265abc8505609200e428"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// const db = getFirestore(app); // Use getFirestore to get the Firestore instance

// // Example data for users
// const usersData = {
//   "uid1": {
//     email: "user1@example.com",
//     displayName: "User 1",
//     createdAt: 1672531200000 // Timestamp of user creation
//   },
//   "uid2": {
//     email: "user2@example.com",
//     displayName: "User 2",
//     createdAt: 1672617600000
//   }
// };

// // Function to write user data to Firestore
// async function writeToFirestore() {
//   const usersCollection = doc(db, 'users'); // 'users' is the name of the Firestore collection

//   try {
//     for (const [userId, userData] of Object.entries(usersData)) {
//       const userDoc = doc(usersCollection, userId);
//       await setDoc(userDoc, userData);
//       console.log(`Data for ${userId} written to Firestore successfully.`);
//     }
//   } catch (error) {
//     console.error('Error writing data to Firestore:', error.message);
//   }
// }

// // Call the function to write data to Firestore
// writeToFirestore();









//Bard

// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getDatabase } from 'firebase/database';

// const firebaseConfig = {
//   apiKey: "AIzaSyDn0XBBAzKqMn07HkhSaoqrt4TSXskh96E",
//     authDomain: "personal-finance-tracker-77dd8.firebaseapp.com",
//     projectId: "personal-finance-tracker-77dd8",
//     storageBucket: "personal-finance-tracker-77dd8.appspot.com",
//     messagingSenderId: "825252587257",
//     appId: "1:825252587257:web:17265abc8505609200e428"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const database = getDatabase(app);

// // Create the users collection
// const usersRef = database.ref('users');
// const usersData = {
//   "userId1": {
//     "name": "John Doe",
//     "email": "johndoe@example.com",
//     "createdAt": 1674718687000,
//     "updatedAt": 1674718687000
//   },
//   "userId2": {
//     "name": "Jane Doe",
//     "email": "janedoe@example.com",
//     "createdAt": 1674718687000,
//     "updatedAt": 1674718687000
//   }
// };
// usersRef.set(usersData);

// // Create the transactions collection
// const transactionsRef = database.ref('transactions');
// const transactionsData = {
//   "transactionId1": {
//     "userId": "userId1",
//     "amount": 100.00,
//     "type": "income",
//     "category": "salary",
//     "description": "Salary for October 2023",
//     "date": 1674718687000,
//     "createdAt": 1674718687000,
//     "updatedAt": 1674718687000
//   },
//   "transactionId2": {
//     "userId": "userId2",
//     "amount": 50.00,
//     "type": "expense",
//     "category": "groceries",
//     "description": "Groceries for the week",
//     "date": 1674718687000,
//     "createdAt": 1674718687000,
//     "updatedAt": 1674718687000
//   }
// };
// transactionsRef.set(transactionsData);
















import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDn0XBBAzKqMn07HkhSaoqrt4TSXskh96E",
  authDomain: "personal-finance-tracker-77dd8.firebaseapp.com",
  projectId: "personal-finance-tracker-77dd8",
  storageBucket: "personal-finance-tracker-77dd8.appspot.com",
  messagingSenderId: "825252587257",
  appId: "1:825252587257:web:17265abc8505609200e428"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);