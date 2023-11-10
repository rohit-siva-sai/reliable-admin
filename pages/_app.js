import "@/styles/globals.css";
import { useStore } from "@/useStore/store";
import { useEffect, useState } from "react";
import { db, storage } from "../config/firebase";
import {
  getDocs,
  addDoc,
  doc,
  collection,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";
import Navbar from "@/components/navbar";

export default function App({ Component, pageProps }) {
  const [updateTalents, updateCutomers,updateAllTalents,updateAllCustomers] = useStore((store) => [
    store.updateTalents,
    store.updateCutomers,
    store.updateAllTalents,
    store.updateAllCustomers,
  ]);

  const devCollection = collection(db, "developers");
  const custCollection = collection(db, "customers");
  const [talents, setTalents] = useState([]);
  const [customers, setCustomers] = useState([]);

  // const [updatedRfqData, setUpdatedRfqData] = useState([]);
  const getTalents = async (id) => {
    try {
      // console.log('sller',sellerCategory);

      const data = await getDocs(devCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // const user = JSON.parse(localStorage.getItem("userDetails"));
      const sortData = filteredData.sort((a, b) => a.timestamp && b.timestamp &&  b.timestamp["seconds"] - a.timestamp["seconds"]);
      // console.log("gfacsf", sortData);
      updateTalents(sortData);
      updateAllTalents(sortData);
      setTalents(filteredData);
      // console.log("rfq0,rfq", rfq);

      // setUpdatedRfqData(rfq);
      // setIsLoading(false);
    } catch (err) {
      console.log(err.message);
      // setIsLoading(false);
    }
  };
  const getCustomers = async (id) => {
    try {
      // console.log('sller',sellerCategory);

      const data = await getDocs(custCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // const user = JSON.parse(localStorage.getItem("userDetails"));
      const sortData = filteredData.sort((a, b) => a.timestamp && b.timestamp &&  b.timestamp["seconds"] - a.timestamp["seconds"]);
      // console.log("gfacsf", );
      updateCutomers(sortData);
      updateAllCustomers(sortData)

      setCustomers(filteredData);
      // console.log("rfq0,rfq", rfq);

      // setUpdatedRfqData(rfq);
      // setIsLoading(false);
    } catch (err) {
      console.log(err.message);
      // setIsLoading(false);
    }
  };
  const router = useRouter()

  useEffect(() => {
    getTalents();
    getCustomers();


  
  }, []);

  return (
    <>
      <Toaster
        toastOptions={{
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />

      {/* <Navbar logOut={logOut} /> */}
      <Navbar/>

      <Component talents={talents} customers={customers} {...pageProps} />
    </>
  );
}
