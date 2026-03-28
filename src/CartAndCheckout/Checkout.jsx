// import React, { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// // const stripePromise = loadStripe(' ');

// function CheckoutForm() {
//   const [paymentSuccess, setPaymentSuccess] = useState(false);
//   const [error, setError] = useState(null);
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const card = elements.getElement(CardElement);
    
//     const { error, paymentIntent } = await stripe.confirmCardPayment(
//       '', {
//         payment_method: {
//           card: card,
//         },
//       }
//     );

//     if (error) {
//       setError(error.message);
//       setPaymentSuccess(false);
//     } else if (paymentIntent.status === 'succeeded') {
//       setPaymentSuccess(true);  
//     }
//   };

//   return (
//     <div>
//       {paymentSuccess ? (
//         <div>
//           <h2>Payment Successful!</h2>
//           <p>Thank you for your purchase. Your payment has been successfully processed.</p>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <CardElement />
//           <button type="submit" disabled={!stripe}>Pay</button>
//         </form>
//       )}
//       {error && <div>{error}</div>}
//     </div>
//   );
// }

// export default function StripeCheckout() {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// }
