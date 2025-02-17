import { useLocalStorage } from '@uidotdev/usehooks';
import React, { useState } from 'react';

function Profile() {
    const [loggedInUser, setLoggedInUser] = useLocalStorage('user', {});
    const [name, setName] = useState(loggedInUser.name || '');
    const [email, setEmail] = useState(loggedInUser.email || '');
    const [password, setPassword] = useState('');

    const handleUpdate = () => {
        if (!name || !email) {
            alert('Name and Email are required.');
            return;
        }
        
        const updatedUser = { ...loggedInUser, name, email, password: password || loggedInUser.password };
        setLoggedInUser(updatedUser);
        alert('Profile updated successfully!');
    };

    return (
        <div className='container mx-auto my-12 p-6 bg-white shadow-lg rounded-lg max-w-lg'>
            <h1 className='text-3xl font-bold mb-6'>Profile</h1>

            <div className='mb-4'>
                <label className='block text-gray-700 font-medium'>Name</label>
                <input 
                    type='text' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className='w-full border border-gray-300 p-2 rounded-lg'
                />
            </div>

            <div className='mb-4'>
                <label className='block text-gray-700 font-medium'>Email</label>
                <input 
                    type='email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className='w-full border border-gray-300 p-2 rounded-lg'
                />
            </div>

            <div className='mb-4'>
                <label className='block text-gray-700 font-medium'>New Password</label>
                <input 
                    type='password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className='w-full border border-gray-300 p-2 rounded-lg'
                    placeholder='Leave blank to keep current password'
                />
            </div>

            <button 
                onClick={handleUpdate} 
                className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition'>
                Update Profile
            </button>
        </div>
    );
}

export default Profile;
