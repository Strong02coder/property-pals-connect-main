
import React from 'react';
import AuthForm from '@/components/auth/AuthForm';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col bg-estate-dark">
      <Navbar />
      <main className="flex-grow py-20 bg-gradient-to-b from-estate-black to-estate-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-estate-dark p-8 rounded-lg border border-estate-primary/30 shadow-xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Create Your Account</h1>
              <p className="text-gray-400">Join our community to find your dream property</p>
            </div>
            <AuthForm type="register" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
