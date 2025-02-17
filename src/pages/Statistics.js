import { useLocalStorage } from '@uidotdev/usehooks';
import React, { useEffect, useState } from 'react';

function Statistics() {
    const [orders] = useLocalStorage('orders', []);
    const [loggedInUser] = useLocalStorage('user', {});
    const [totalSpent, setTotalSpent] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);
    const [lastPurchaseDate, setLastPurchaseDate] = useState('');
    const [mostBoughtProduct, setMostBoughtProduct] = useState('');

    useEffect(() => {
        const userOrders = orders.filter(order => order.user.email === loggedInUser.email);
        
        let totalAmount = 0;
        let itemsCount = 0;
        let productFrequency = {};

        userOrders.forEach(order => {
            totalAmount += order.total;
            itemsCount += order.items.reduce((sum, item) => sum + item.quantity, 0);
            
            order.items.forEach(item => {
                productFrequency[item.name] = (productFrequency[item.name] || 0) + item.quantity;
            });
        });

        // Gjej produktin më të blerë
        const mostBought = Object.entries(productFrequency).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

        // Data e fundit e porosisë
        const lastOrder = userOrders[userOrders.length - 1]?.date || 'No purchases';

        setTotalSpent(totalAmount);
        setTotalItems(itemsCount);
        setTotalOrders(userOrders.length);
        setLastPurchaseDate(lastOrder);
        setMostBoughtProduct(mostBought);
    }, [orders, loggedInUser]);

    return (
        <div className="container mx-auto my-12 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Statistics</h1>
            <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-blue-100 rounded-lg">
                    <h2 className="text-xl font-semibold">Total Spent</h2>
                    <p className="text-2xl font-bold">${totalSpent.toFixed(2)}</p>
                </div>
             
                <div className="p-4 bg-yellow-100 rounded-lg">
                    <h2 className="text-xl font-semibold">Total Orders</h2>
                    <p className="text-2xl font-bold">{totalOrders}</p>
                </div>
               
            </div>
        </div>
    );
}

export default Statistics;
