import React, { useEffect, useState } from 'react';
import './PlanPage.css';
import db from '../firebase';
// import { collection, getDocs, where } from "firebase/firestore";


const PlanPage = () => {
  const [subscriptions, setSubscriptions] = useState([]); 


  useEffect(() => {
    const fetchData = async () => {
      await getDocs(collection(db, "subscriptions"), where("active", "==", true))
      .then (querySnapshot => {
        const subscriptions = {};
        querySnapshot.map(async (subscriptionDoc) => {
          subscriptions[subscriptionDoc.id] = subscriptionDoc.data();
          // const priceSnap = await subscriptionDoc.ref.collection("prices").get();
          // const priceSnap = await getDocs(collection(db, `subscriptions/${subscriptionDoc.id}/prices`))
          // priceSnap.docs.map(price => {
          //   subscriptions[subscriptionDoc.id].prices = {
          //     priceId: price.id,
          //     priceData: price.data(),
          //   };
          // });

        });
        // setSubscriptions(subscriptions);
        console.log(subscriptions)
      });
    }
    fetchData();
  }, []);

  // console.log(subscriptions);

  return (
    <div className='planPage'>
      
    </div>
  )
}

export default PlanPage