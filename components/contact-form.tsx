"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent SSR mismatch
  if (!isClient) return null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2>We’d love to hear your story</h2>
        <p>+91 90268 49414 &nbsp; +91 90262 3490</p>
        <p>shashanksharma1235999@gmail.com</p>
      </div>

      <div className="form-box">
        <h3>Get in touch</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            HI! I am <a href="#">eg : Musk</a>
          </label>
          <input {...register("name", { required: true })} />
          {errors.name && <span className="error">This field is required</span>}

          <label>
            Reach me at <a href="#">eg : musk@first.com</a>
          </label>
          <input type="email" {...register("email", { required: true })} />
          {errors.email && (
            <span className="error">Valid email is required</span>
          )}

          <label>
            Country <a href="#">eg : India</a>
          </label>
          <input {...register("country")} />

          <label>
            Mobile no. <a href="#">eg : 8976345789</a>
          </label>
          <input type="tel" {...register("mobile", { required: true })} />
          {errors.mobile && (
            <span className="error">Mobile number is required</span>
          )}

          <label>
            Company Name <a href="#">eg : Tech Assistant</a>
          </label>
          <input {...register("company")} />

          <label>
            Message <a href="#">eg : ...........</a>
          </label>
          <textarea {...register("message")} />

          <div className="checkbox">
            <input
              type="checkbox"
              {...register("consent", { required: true })}
            />
            <span>
              By submitting your email, you consent to receive communication
              from us.
            </span>
          </div>
          {errors.consent && (
            <span className="error">You must agree before submitting</span>
          )}

          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
}
