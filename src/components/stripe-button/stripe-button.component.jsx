import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JM5GPLar2uNA2rL3IkFpLkkkbphVKM2A0bozucdOjIih9o3VAk4nqkLa7fstXtdKaAl4IuNL04rgPltwvXLQgQZ00h7PQgSxS';

    const onToken = token => {
        console.log(token);
        alert('payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Shopping App'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}
export default StripeCheckoutButton;