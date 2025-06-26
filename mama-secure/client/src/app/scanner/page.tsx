"use client"

import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import orbAnimation from '../../animations/orb.json';
import typingDots from '../../animations/typing.json';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 18) return 'Good Afternoon';
  return 'Good Evening';
};

interface User {
  name?: string;
}

interface ScanResult {
  status: 'scam' | 'safe';
  confidence: number;
  explanation: string[];
  sources: string[];
}

export default function ScannerPage({ user }: { user: User }) {
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [greeting, setGreeting] = useState<string>('');
  const [submittedInput, setSubmittedInput] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  const handleScan = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);
    setSubmittedInput(input);

    setTimeout(() => {
      const fakeResult: ScanResult = {
        status: input.includes('scam') ? 'scam' : 'safe',
        confidence: input.includes('scam') ? 96 : 91,
        explanation: input.includes('scam')
          ? ['Matches known scam patterns', 'Obfuscated domain']
          : ['No suspicious activity detected'],
        sources: [
          'ScamWatch.org',
          'Blacklisted by DNSBL',
          'Verified IBM Match'
        ]
      };
      setResult(fakeResult);
      setLoading(false);
    }, 3000);
  };

  const handleReset = () => {
    setInput('');
    setSubmittedInput(null);
    setResult(null);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0f172a] text-white px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">{greeting}, {user?.name}</h1>
          <h2 className="text-xl text-purple-400">Stay protected with AI-driven scam detection</h2>
        </div>

        {!submittedInput && !result && !loading && (
          <div className="flex justify-center mb-10">
            <Lottie animationData={orbAnimation} className="w-40" />
          </div>
        )}

        {/* Animated Input Field */}
            <div className="fixed bottom-0 left-0 right-0 px-6 py-4  z-50">
  <div className="max-w-2xl mx-auto">
    <div className="relative w-full">
              <textarea
                className="w-full p-4 rounded-xl bg-transparent text-white border border-gray-600 placeholder-gray-400 shadow-md resize-none h-24 pr-24"
                placeholder="Paste a suspicious link or message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                aria-label="Input suspicious link or message"
                title="Paste a suspicious link or message here"
              />
<button
  onClick={handleScan}
  disabled={!input.trim()}
  className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-200 transition disabled:opacity-50"
  aria-label="Scan the input content"
  title="Click to scan the input content"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
</button>

            </div>
            </div>
            </div>
          

        {submittedInput && (
          <motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  className="mt-10 w-full mb-4 flex justify-end"
>

            <p className="bg-purple-600 px-4 py-2 rounded-lg w-fit max-w-full text-white italic">
              {submittedInput}
            </p>
          </motion.div>
        )}

        {loading && (
          <div role="progressbar" aria-live="polite" aria-busy="true" className="mt-4 flex justify-start">
            <Lottie animationData={typingDots} className="w-24" />
          </div>
        )}

        {result && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-6 w-fit max-w-full text-left"
          >
            <p className={`text-lg font-bold ${result.status === 'scam' ? 'text-red-400' : 'text-green-400'}`}>
              {result.status === 'scam' ? '⚠️ This site is flagged as a phishing scam.' : '✅ This content appears safe.'}
            </p>
            <p className="text-sm text-gray-300 mt-2">Confidence: {result.confidence}%</p>
            <ul className="text-gray-400 mt-2 list-disc list-inside">
              {result.explanation.map((line: string, i: number) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <div className="mt-4 flex gap-2 flex-wrap justify-start">
              {result.sources.map((src: string, i: number) => (
                <span key={i} className="text-xs px-2 py-1 bg-gray-700 text-white rounded-full">
                  {src}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
