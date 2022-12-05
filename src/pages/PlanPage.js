import React, { useEffect, useState } from 'react';
import './PlanPage.css';
import db from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../reducers/userSlice';
// import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const PlanPage = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const user = useSelector(selectUser);
  const [subscribe, setSubscribe] = useState(null);


  useEffect(() => {
    db.collection("users")
    .doc(user.uid).collection("subscriptions")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(async subscription => {
        setSubscribe({
          role: subscription.data().role,
          current_period_end: subscription.data().current_period_end.seconds,
          current_period_start: subscription.data().current_period_start.seconds
        })
      }) 
    })
  }, [user.uid])



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
  console.log(subscribe);

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("users")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

      docRef.onSnapshot(async (snap) => {
        const {error, sessionId} = snap.data();

        if(error) {
          // show an error to user and inspect your cloud function logs
          // in the firebase console
          alert(`An error occured: ${error.message}`);
        }
        if(sessionId) {
          // let's redirect to checkout and initialize stripe
          // publishable key used here
          const stripe = await loadStripe("pk_test_51M8o3RSAIprvsdgCA9uSIozIsWq3uwH7vVWOgY1Tupi5tSd3fdJClBTzDwrABMduGchi1urivMPbcsEOhcLDRhui00zIQnHjM4");
          stripe.redirectToCheckout({ sessionId })
        }
      })
  }


  return (
    <div className='planPage'>
      <br />
      {subscribe && 
        <p>Renewal Date:  
          {new Date(subscribe?.current_period_end * 1000).toDateString()}
        </p>
      }
      {Object.entries(subscriptions).map(([ subscriptionId, subscriptionData ]) => {
        // user subscription active or not
        const isCurrentPackage = subscriptionData.name?.includes(subscribe?.role);


        return (
          <div
            key={subscriptionId}
            className={`${
              isCurrentPackage && "planPage-plan-disabled"
            } planPage-plan `} 
          >
            <div className="planPage-info">
              <h5>{subscriptionData.name}</h5>
              <h5>{subscriptionData.description}</h5> 
            </div>
            <button onClick={() => 
              !isCurrentPackage && loadCheckout(subscriptionData.prices.priceId)
            }>
              {isCurrentPackage ? "Current Package" : "Subscribe"}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default PlanPage