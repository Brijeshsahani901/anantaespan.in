import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]" data-wow-delay=".15s">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Get in Touch
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                For enquiries, partnerships, or to engage with our work, please fill out the form below.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  {[
                    { label: "Full Name", type: "text", placeholder: "Enter your full name" },
                    { label: "Designation", type: "text", placeholder: "Your position" },
                    { label: "Organisation", type: "text", placeholder: "Organisation name" },
                    { label: "City", type: "text", placeholder: "City" },
                    { label: "Email", type: "email", placeholder: "Enter your email" },
                    { label: "Phone", type: "text", placeholder: "Contact number" },
                  ].map((field, index) => (
                    <div className="w-full px-4 md:w-1/2" key={index}>
                      <div className="mb-8">
                        <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                  ))}

                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Write your message"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Submit
                    </button>
                  </div>
                </div>
              </form>

              <div className="mt-12">
                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Headquarters
                </h3>
                <p className="text-base text-body-color">
                  The Ravi Shankar Centre<br />
                  7, R. P, Dr Jose P Rizal Marg,<br />
                  Chanakyapuri, New Delhi, Delhi 110021
                </p>

                <div className="mt-6 flex space-x-4">
                  {[
                    { icon: "facebook", link: "https://facebook.com" },
                    { icon: "twitter", link: "https://twitter.com" },
                    { icon: "instagram", link: "https://instagram.com" },
                    { icon: "youtube", link: "https://youtube.com" },
                    { icon: "linkedin", link: "https://linkedin.com" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-color hover:text-primary"
                    >
                      <i className={`lni lni-${social.icon} text-2xl`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
