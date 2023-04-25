import React, { useEffect, useState } from 'react';
import { auth } from '../../../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';

export default function Profile() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);


  useEffect(() => {
    // Redirect to login page if user is not authenticated
    if (!loading && !user) route.push('/auth/Login');
  }, [loading, user, route]);


  if (loading) return (
    <div className="flex justify-center items-center bg-gray-900 h-screen">
      <div className="bg-white flex space-x-2 p-5 rounded-full justify-center items-center">
        <div className="bg-blue-600 p-2 w-4 h-4 rounded-full"></div>
        <div className="bg-green-600 p-2 w-4 h-4 rounded-full"></div>
        <div className="bg-red-600 p-2 w-4 h-4 rounded-full"></div>
      </div>
    </div>
  )

  if (user) {
    return (
      <div className="grid items-center justify-center gap-3 bg-purple-400">
        <div className='py-5'>
          <img className='rounded-full' src={user.photoURL} alt="Avatar" />
        </div>
        <div className="mt-4">
          <h2>{user.displayName}</h2>
          <ul>
            <h5>content</h5>
            <li>Email: {user.email}</li>
          </ul>
        </div>

        {/* Discussion Section */}
        <section>
        </section>
      </div>
    );
  }

  // Return null if the user is not logged in to avoid displaying the Profile page briefly before redirecting.
  return null;
}
