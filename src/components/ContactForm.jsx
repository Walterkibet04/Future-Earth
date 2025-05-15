import React from 'react'

const contacts = [
  {
    region: 'America',
    address: [
      'Future Earth, Suite 380',
      '1839 S Alma School Rd',
      'Mesa, AZ 85210 USA',
      '480 649 4127'
    ]
  },
  {
    region: 'Mexico, South America',
    address: [
      'Place: Gracious Rd, T Building, 3rd Floor',
      'Email: jambo@futureearth1.com',
      'Phone: +33 345 678 123'
    ]
  },
  {
    region: 'Malawi, Africa',
    address: [
      'Place: Gracious Rd, T Building, 3rd Floor',
      'Email: jambo@futureearth1.com',
      'Phone: +33 345 678 123'
    ]
  }
];

const ContactForm = () => {
  return (
    <section className="w-full bg-[#fbe9dc] py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row bg-white/0 overflow-hidden">
        {/* Regional Contacts */}
        <div className="lg:w-1/2 bg-primary text-white p-8">
          <h2 className="text-2xl font-bold mb-6">Regional Contacts</h2>
          {contacts.map((contact, index) => (
            <div key={index} className="mb-6">
              <h3 className="flex items-center gap-2 font-semibold">
                <img src="/Pin_light.png" alt="location icon" className='w-[38px]'/>
                {contact.region}
              </h3>
              <div className="text-sm mt-2 space-y-1">
                {contact.address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 bg-[#faeada] p-8">
          <h2 className="text-2xl font-bold text-[#0e5c2c] mb-6">Talk to us</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full name" className="w-full border border-[#0e5c2c] p-2 focus:outline-none" />
            <input type="email" placeholder="Email address" className="w-full border border-[#0e5c2c] p-2 focus:outline-none" />
            <input type="text" placeholder="Subject" className="w-full border border-[#0e5c2c] p-2 focus:outline-none" />
            <textarea placeholder="Message" rows="4" className="w-full border border-[#0e5c2c] p-2 focus:outline-none"></textarea>

            <div className="border border-[#0e5c2c]">
              <div className="bg-[#0e5c2c] text-white p-2 text-sm font-semibold">CAPTCHA</div>
              <div className="p-2 text-sm">
                <p className="mb-2">This question is for testing whether or not you are a human visitor and to
                     prevent automated spam submissions.</p>
                <label className="font-bold">Math question *</label>
                <p className="mb-1">6 + 11 =</p>
                <input type="text" className="w-full border border-[#0e5c2c] p-2 focus:outline-none" />
              </div>
            </div>

            <button type="submit" className="mt-4 bg-[#0e5c2c] text-white py-2 px-6 flex items-center justify-center ml-auto">
              SEND <span className="ml-2">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
