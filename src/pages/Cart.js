import { useLocalStorage } from '@uidotdev/usehooks';
import React from 'react';

function Cart() {
    const [cart, setCart] = useLocalStorage('cart', []);
    const [orders, setOrders] = useLocalStorage('orders', []);
    const [loggedInUser] = useLocalStorage('user', {});

    const handleQtyDec = (id) => {
        setCart(cart.map(item => 
            item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item
        ));
    };

    const handleQtyInc = (id) => {
        setCart(cart.map(item => 
            item.id === id ? { ...item, qty: item.qty + 1 } : item
        ));
    };

    const handleRemoveItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const handleCheckout = () => {
        if (cart.length === 0) return;
        
        const order = {
            user: loggedInUser,
            items: cart,
            total: cart.reduce((total, item) => total + item.qty * item.price, 0),
            timestamp: new Date().toISOString()
        };
        
        setOrders([...orders, order]);
        setCart([]);
        alert('Order was completed successfully.');
    };

    return (
        <div className='container mx-auto my-12 p-6 bg-white shadow-lg rounded-lg'>
            <h1 className='text-3xl font-bold mb-6'>Shopping Cart</h1>
            <div>
                {cart.length > 0 ? cart.map(item => (
                    <div key={item.id} className='grid grid-cols-5 gap-4 items-center p-4 border-b'>
                        <h4 className='text-lg font-semibold'>{item.title}</h4>
                        <p className='text-lg font-medium'>${item.price}</p>
                        <div className='flex items-center gap-4'>
                            <button onClick={() => handleQtyDec(item.id)} className='px-3 py-1 bg-gray-200 rounded'>-</button>
                            <span className='text-lg'>{item.qty}</span>
                            <button onClick={() => handleQtyInc(item.id)} className='px-3 py-1 bg-gray-200 rounded'>+</button>
                        </div>
                        <p className='text-lg font-bold'>${(item.price * item.qty).toFixed(2)}</p>
                        <button onClick={() => handleRemoveItem(item.id)} className='text-red-500'>Remove</button>
                    </div>
                )) : <p>Your cart is empty</p>}
            </div>
            {cart.length > 0 && (
                <div className='mt-6 text-right'>
                    <p className='text-xl font-bold'>Total: ${cart.reduce((total, item) => total + item.qty * item.price, 0).toFixed(2)}</p>
                    {loggedInUser?.email && (
                        <button onClick={handleCheckout} className='mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>Checkout</button>
                    )}
                </div>
            )}
        </div>
    );
}

export default Cart;
