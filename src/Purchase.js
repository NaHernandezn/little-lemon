import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Purchase() {
    const location = useLocation();
    const navigate = useNavigate();
    const { order } = location.state || { order: {} };

    // Filter out items with count <= 0
    const items = Object.values(order).filter(item => item.count > 0);
    const finalPrice = items.reduce((sum, item) => sum + item.totalPrice, 0);

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can process the form data here if needed

        // Navigate to ConfirmedDelivery
        navigate('/delivery');
    };


    return (
        <section className='purchase-row'>
            <section className='your-order'>
                <h2>Your Order</h2>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            {item.count} x {item.foodName}: ${item.totalPrice.toFixed(2)}
                        </li>
                    ))}
                </ul>
                <h3>Total: ${finalPrice.toFixed(2)}</h3>
            </section>

            <section className='customer-info'>
                <h2>Customer Information</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" required />
                    </label>
                    <br />
                    <label>
                        Address:
                        <input type="text" name="address" required />
                    </label>
                    <br />
                    <label>
                        Phone:
                        <input type="tel" name="phone" required />
                    </label>
                    <br />
                    <button type="submit">Submit Order</button>
                </form>
            </section>
        </section>
    );
}
