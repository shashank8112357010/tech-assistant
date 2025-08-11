"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type DemoFormData = {
  name: string;
  phone: string;
  email: string;
};

type DemoFormProps = {
  initialData?: DemoFormData;
  onSubmit: (data: DemoFormData) => Promise<void>;
  onCancel: () => void;
  isSubmitting: boolean;
};

export function DemoForm({
  initialData = { name: "", phone: "", email: "" },
  onSubmit,
  onCancel,
  isSubmitting,
}: DemoFormProps) {
  const [formData, setFormData] = useState<DemoFormData>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-neutral-900/95 border border-neutral-700 rounded-2xl p-8 max-w-md w-full backdrop-blur-xl"
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Get Your Free Demo</h3>
          <p className="text-neutral-300">Fill in your details and we'll redirect you to the product demo</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-neutral-800/50 border-2 border-neutral-600 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Phone Number *
            </label>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-neutral-800/50 border-2 border-neutral-600 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-neutral-800/50 border-2 border-neutral-600 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-4 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-xl transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </div>
              ) : (
                "Get Demo"
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
