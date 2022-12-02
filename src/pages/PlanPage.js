import React, { useEffect, useState } from 'react';
import './PlanPage.css';
import db from '../firebase';

const PlanPage = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    db.collection("subscriptions")
    .where("active","==",true)
    .get()
    .then(querySnapshot => {
      const subscriptions = {};
      querySnapshot.forEach(async subscriptionDoc => {
        subscriptions[subscriptionDoc.id] = subscriptionDoc.data();
        const priceSnap = await subscriptionDoc.ref.collection("prices").get();
        priceSnap.docs.forEach(price => {
          subscriptions[subscriptionDoc.id].prices = {
            priceId: price.id,
            priceData: price.data(),
          };
        });
      });
      setSubscriptions(subscriptions);
    })
  }, [])

  console.log(subscriptions);


  return (
    <div className='planPage'>
      
    </div>
  )
}

export default PlanPage