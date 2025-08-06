"use client";

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Create a simple loading fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white">
    <div className="text-center">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
      <p className="mt-4 text-xl">Loading Tech Assistant...</p>
    </div>
  </div>
);

// Dynamically import the Optimized HomePage component with no SSR
const OptimizedHomePage = dynamic(() => import('@/components/Home/OptimizedHome'), {
  loading: () => <LoadingFallback />,
  ssr: false
});

export default function HomeClient() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <OptimizedHomePage />
    </Suspense>
  );
}
