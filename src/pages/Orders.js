import { useLocalStorage } from '@uidotdev/usehooks';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Orders() {
    const [orders] = useLocalStorage('orders', []);
    const [myOrders, setMyOrders] = useState([]);
    const [loggedInUser] = useLocalStorage('user', {});
    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedInUser.email) {
            navigate('/login');
        }
        setMyOrders(orders.filter(order => order.user.email === loggedInUser.email));
    }, [orders, loggedInUser, navigate]);



    const deleteOrder = (index) => {
        const updatedOrders = myOrders.filter((_, i) => i !== index);
        setMyOrders(updatedOrders);
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
    };
    

    return (
        <div className='container mx-auto my-12 px-4'>
            <h1 className='text-4xl font-bold text-gray-800 mb-8 text-center'>My Orders</h1>
            {myOrders.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myOrders.map((order, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all">
                            <h2 className="text-lg font-semibold text-gray-700">Order #{index + 1}</h2>
                            <p className="text-sm text-gray-500 mb-4">
                                Placed by: {order.user.name} ({order.user.email})
                            </p>
                            
                            {/* Data dhe ora e porosisë */}
                            <p className="text-gray-600 text-sm">
                                <strong>Order Date:</strong> {new Date(order.timestamp).toLocaleString()}
                            </p>

                      

                            <div className="border-t border-gray-200 my-2"></div>

                            <div>
                                {order.items.map(item => (
                                    <p key={item.id} className="text-gray-600 text-sm">
                                        <span className="font-medium">{item.title}</span> x {item.qty}
                                    </p>
                                ))}
                            </div>

                            <div className="border-t border-gray-200 my-2"></div>
                            <p className="text-lg font-bold text-blue-600">Total: ${order.total.toFixed(2)}</p>
                            <button 
    onClick={() => deleteOrder(index)}
    className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
>
     Delete Order
</button>

                        </div>
                    ))}
                </div>
                
            ) : (
                <p className="text-gray-600 text-center text-lg">You have no orders yet.</p>
            )}
        </div>

        
    );
}

export default Orders;
