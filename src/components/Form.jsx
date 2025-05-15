import React from 'react'
import { useState } from 'react';
const Form = () => {

    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    captcha: '',
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Full name is required.';
    if (!formData.email) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^2547\d{8}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be in the format 254 7XX XXX XXX.';
    }
    if (!formData.message) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setShowPopup(true);
      setFormData({ name: '', email: '', phone: '', message: '', captcha: '' });
    }
  };


  return (
    <section className="bg-secondary px-6 md:px-12 py-10">


        {showPopup && (
        <div className="fixed inset-0 bg-primary/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md max-w-sm w-full text-center">
            <p className="text-green-600 font-semibold">Thank you for your message! We'll be in touch soon.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-[#0E562F] text-white px-4 py-2 rounded hover:bg-[#094a25]"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Regional Contacts */}
        <div className="bg-primary text-white p-6 space-y-6">
          <h2 className="text-xl font-bold">Regional Contacts</h2>
          <div>
            <p className="font-semibold">America</p>
            <p>Future Earth, Suite 380<br/>1839 S Alma School Rd<br/>Mesa, AZ 85210 USA<br/>480 649 4127</p>
          </div>
          <div>
            <p className="font-semibold">Mexico, South America</p>
            <p>Place: Gracious Rd, T Buiding, 3rd Floor<br/>Email: jambo@futureearth1.com<br/>Phone: +33 345 678 123</p>
          </div>
          <div>
            <p className="font-semibold">Malawi, Africa</p>
            <p>Place: Gracious Rd, T Buiding, 3rd Floor<br/>Email: jambo@futureearth1.com<br/>Phone: +33 345 678 123</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-primary text-xl font-bold">Talk to us</h2>

          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name"
              className="w-full border border-primary p-2"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full border border-primary p-2"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border border-primary p-2"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full border border-primary p-2 h-24"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* CAPTCHA Placeholder */}
          <div>
            <label className="font-bold text-sm block mb-1">Math question </label>
            <p className="mb-2">6 + 11 =</p>
            <input
              type="text"
              name="captcha"
              value={formData.captcha}
              onChange={handleChange}
              placeholder="Your answer"
              className="w-full border border-primary p-2"
            />
          </div>

          <button type="submit" className="bg-primary text-white px-6 py-2 mt-2 ">
            SEND →
          </button>
        </form>
      </div>
    </section>
  )
}

export default Form
