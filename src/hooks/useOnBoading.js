import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
export const useOnBoarding = (phoneNumber) => {
  const [users, setUsers] = useState([]);
  const collectionRef = collection(db, "onBoarding");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(collectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  const alreadyHaveNumber = users.find(
    (user) => user.phoneNumber === phoneNumber
  );
  const postUsersData = async(data) => {
    await addDoc(collectionRef,data)
  }

  return {
    users,
    alreadyHaveNumber,
    postUsersData
  };
};
