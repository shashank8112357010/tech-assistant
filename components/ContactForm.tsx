"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // Prevents hydration mismatch
  }

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-5xl flex flex-col">
        {/* Main content container with dark navy background */}
        <div className="w-full bg-navy-900 text-white rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left section with "We'd love to hear your story" */}
            <div className="md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <h1 className="text-5xl font-bold mb-4">
                  We'd love
                  <br />
                  to hear
                  <br />
                  your story
                </h1>
              </div>

              <div className="mt-auto">
                <p className="text-lg">+91 90268 49414 &nbsp; +91 90262 3490</p>
                <p className="text-lg">shashanksharma1235999@gmail.com</p>
              </div>
            </div>

            {/* Right section with the form */}
            <div className="md:w-1/2 p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold">Get in touch</h2>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="flex items-center gap-2">
                    <span>Hi! I am</span>
                    <input
                      {...register("name", { required: true })}
                      placeholder="eg: Musk"
                      className="flex-1 p-1 border-b-2 border-gray-500 bg-transparent outline-none focus:border-blue-500"
                    />
                  </label>
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      This field is required
                    </p>
                  )}
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <span>Reach me at</span>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="eg: musk@first.com"
                      className="flex-1 p-1 border-b-2 border-gray-500 bg-transparent outline-none focus:border-blue-500"
                    />
                  </label>
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      Valid email is required
                    </p>
                  )}
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <span>Country</span>
                    <input
                      {...register("country")}
                      placeholder="eg: India"
                      className="flex-1 p-1 border-b-2 border-gray-500 bg-transparent outline-none focus:border-blue-500"
                    />
                  </label>
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <span>Mobile no.</span>
                    <input
                      type="tel"
                      {...register("mobile", { required: true })}
                      placeholder="eg: 8976345789"
                      className="flex-1 p-1 border-b-2 border-gray-500 bg-transparent outline-none focus:border-blue-500"
                    />
                  </label>
                  {errors.mobile && (
                    <p className="text-red-500 text-sm">
                      Mobile number is required
                    </p>
                  )}
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <span>Company Name</span>
                    <input
                      {...register("company")}
                      placeholder="eg: Tech Assistant"
                      className="flex-1 p-1 border-b-2 border-gray-500 bg-transparent outline-none focus:border-blue-500"
                    />
                  </label>
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <span>Message</span>
                    <input
                      {...register("message")}
                      placeholder="eg: ..............."
                      className="flex-1 p-1 border-b-2 border-gray-500 bg-transparent outline-none focus:border-blue-500"
                    />
                  </label>
                </div>

                <div className="flex items-start gap-2 mt-6">
                  <input
                    type="checkbox"
                    {...register("consent", { required: true })}
                    className="mt-1"
                  />
                  <span className="text-sm">
                    By submitting your email, you consent to receive
                    communication from us via email or phone for the purpose of
                    connecting with you regarding our products and services.
                  </span>
                </div>
                {errors.consent && (
                  <p className="text-red-500 text-sm">
                    You must agree before submitting
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-4 py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-bold"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
