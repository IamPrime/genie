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


  if (loading) return <h1>P.R.O.F.I.L.E......</h1>;

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
