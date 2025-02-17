import { useLocalStorage } from '@uidotdev/usehooks';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaChartBar, FaLifeRing } from 'react-icons/fa';


function Dashboard() {
    const [loggedInUser] = useLocalStorage('user', {});
    const [orders] = useLocalStorage('orders', []);
    const navigate = useNavigate();
    const [totalSpent, setTotalSpent] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);
    const [monthlySpending, setMonthlySpending] = useState([]);

    useEffect(() => {
        if (!loggedInUser.email) {
            navigate('/login');
        }

        const userOrders = orders.filter(order => order.user.email === loggedInUser.email);
        setTotalOrders(userOrders.length);
        setTotalSpent(userOrders.reduce((sum, order) => sum + order.total, 0));
        
        // Calculate spending per month
        const monthlyData = new Array(12).fill(0);
        userOrders.forEach(order => {
            const month = new Date(order.date).getMonth();
            monthlyData[month] += order.total;
        });
        setMonthlySpending(monthlyData);
    }, [orders, loggedInUser, navigate]);

    return (
        <div className="container mx-auto my-12 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-6">Welcome, {loggedInUser.name}!</h1>
            <p className="text-gray-600 mb-6">Here is an overview of your activity.</p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Link to="/orders" className="p-6 bg-blue-100 rounded-lg text-center shadow-md hover:shadow-lg transition">
                    <FaShoppingCart size={40} className="mx-auto mb-2 text-blue-600" />
                    <h2 className="text-xl font-semibold">Orders</h2>
                    <p className="text-lg">{totalOrders} Orders</p>
                </Link>
                <Link to="/profil" className="p-6 bg-green-100 rounded-lg text-center shadow-md hover:shadow-lg transition">
                    <FaUser size={40} className="mx-auto mb-2 text-green-600" />
                    <h2 className="text-xl font-semibold">Profile</h2>
                    <p>Manage your account</p>
                </Link>
                <Link to="/support" className="p-6 bg-yellow-100 rounded-lg text-center shadow-md hover:shadow-lg transition">
                    <FaLifeRing size={40} className="mx-auto mb-2 text-yellow-600" />
                    <h2 className="text-xl font-semibold">Support</h2>
                    <p>Need help?</p>
                </Link>
                <Link to="/statistics" className="p-6 bg-red-100 rounded-lg text-center shadow-md hover:shadow-lg transition">
                    <FaChartBar size={40} className="mx-auto mb-2 text-red-600" />
                    <h2 className="text-xl font-semibold">Statistics</h2>
                    <p>Total Spent: ${totalSpent.toFixed(2)}</p>
                </Link>
            </div>
            
          
        </div>
    );
}

export default Dashboard;
