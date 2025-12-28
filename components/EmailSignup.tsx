"use client";

import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Since there's no backend, we'll just show success message
    setStatus("success");
    setEmail("");
  };

  return (
    <section id="signup" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Get Early Access
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Join the waitlist and be among the first to map your inner tectonics
        </p>
        
        {status === "success" ? (
          <div className="bg-green-900/20 border border-green-800 rounded-lg p-6">
            <p className="text-green-400 text-lg">
              🎉 Thanks for signing up! We&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-zinc-900 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              Join Waitlist
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
