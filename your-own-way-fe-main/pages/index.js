import { getFirestore } from "firebase/firestore";
import { useEffect } from 'react';
// import components
import Hero from '../components/Hero';
import Pets from '../components/Pets';
import Cursos from '../components/Cursos';
import Inscripciones from '../components/Inscripciones';
import Services from '../components/Services';
import Adoption from '../components/Adoption';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

import Aos from 'aos';
import 'aos/dist/aos.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEicr-575Dzz1XFthW9fdTuRZaBoPS488",
  authDomain: "yowinstitute.firebaseapp.com",
  projectId: "yowinstitute",
  storageBucket: "yowinstitute.appspot.com",
  messagingSenderId: "887126197014",
  appId: "1:887126197014:web:20f5963ad8b3a069498637",
  measurementId: "G-LNR38014BB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const Home = () => {

  useEffect(() => {Aos.init({
    duration: 2500,
    delay: 400,
  })},[]);
  
  return (
    <div className='max-w-[1440px] mx-auto overflow-hidden'>
      <Hero />
      <Pets />
      <Cursos />
      <Services />
      <Adoption />
      <Inscripciones />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
