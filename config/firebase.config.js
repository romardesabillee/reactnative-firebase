// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDixVvDF-5j1XmOPEGBKUCMgidlIdP5BL8",
  authDomain: "reactnative-22040.firebaseapp.com",
  projectId: "reactnative-22040",
  storageBucket: "reactnative-22040.appspot.com",
  messagingSenderId: "201648412250",
  appId: "1:201648412250:web:5502fb9739f814bff9ea63",
  measurementId: "G-W7BM9ZH46L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});