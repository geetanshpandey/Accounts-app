"use client"; // Mark this as a Client Component

import { Caveat } from "next/font/google";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component in Shadcn
import { Input } from "@/components/ui/input"; // Assuming you have an Input component in Shadcn
import { Toaster, toast } from "sonner"; // For toast notifications
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from 'next/image'; // Import Next.js Image component

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isSignup, setIsSignup] = useState(false); // To toggle between login and signup form

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password || (isSignup && !confirmPassword)) {
            setError("Please fill in all fields.");
            return;
        }
        if (isSignup && password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Mock login or signup logic
        console.log(isSignup ? "Signing up with:" : "Logging in with:", { email, password });
        setError("");

        // Redirect to dashboard after successful action
        window.location.href = '/dashboard'; // Redirect to the dashboard
    };

    return (
        <div className="flex h-screen bg-blue-50">

            {/* Left Section for Login/Signup Form */}
            <div className="flex flex-col justify-center p-10 shadow-lg max-w-md mx-auto bg-white rounded-lg">
                {/*Image Section*/}
                <Avatar className="w-30 h-30 -mb-6 rounded-sm -mt-14">
                    <AvatarImage
                        src="/10613259_10118.svg" // Replace with your image path
                        alt="Illustrative Image"
                        className="object-fill w-full h-full rounded-sm"
                    />
                    <AvatarFallback className="bg-blue-200 text-blue-800">Image</AvatarFallback>
                </Avatar>
                <h1 className={`text-center -mt-4 mb-2 text-3xl font-bold text-blue-900 ${caveat.className}`}>Account<span className="text-black">X</span></h1>
                <h2 className="text-center mb-5 text-lg text-blue-800">
                    {isSignup ? "Sign Up your Account" : "Login your Account"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                        <div className="text-red-500 text-center mb-4">{error}</div>
                    )}
                    <div>
                        <label htmlFor="email" className="block -mb-1 text-blue-700">Email:</label>
                        <Input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 text-blue-700">Password:</label>
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full"
                        />
                    </div>
                    {isSignup && (
                        <div>
                            <label htmlFor="confirmPassword" className="block mb-1 text-blue-700">Confirm Password:</label>
                            <Input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full"
                            />
                        </div>
                    )}
                    <div className="text-center">
                        <Button
                            type="submit"
                            className={`w-30 py-3 bg-blue-600 text-white text-2xl text-center rounded-lg hover:bg-blue-700 ${caveat.className}`}
                        >
                            {isSignup ? "Sign Up" : "Login"}
                        </Button>
                    </div>
                </form>
                <p className="text-center mt-4 text-blue-600">
                    {isSignup ? (
                        <>
                            Already have an account?{" "}
                            <a
                                onClick={() => setIsSignup(false)}
                                className="cursor-pointer underline hover:text-blue-800"
                            >
                                Login
                            </a>
                        </>
                    ) : (
                        <>
                            Don’t have an account?{" "}
                            <a
                                onClick={() => setIsSignup(true)}
                                className="cursor-pointer underline hover:text-blue-800"
                            >
                                Sign Up
                            </a>
                        </>
                    )}
                </p>
            </div>

            {/* Right Section for Image */}
            <div className="flex-1 relative overflow-hidden hidden md:block bg-neutral-800">
                <Image
                    src="/6183516_3129482.svg" // Replace with your image path
                    alt="Illustrative Image"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Toaster component for notifications */}
            <Toaster />
        </div>
    );
};

export default Login;
