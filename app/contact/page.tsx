import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ananta Aspen Centre",
  description:
    "Get in touch with Ananta Aspen Centre for enquiries, partnerships, or to learn more about our dialogues and leadership programmes.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Reach out to us for dialogue, collaboration or leadership development. We're here to connect."
      />
      <Contact />
      <Map />
    </>
  );
};

export default ContactPage;


const Map = () => {
  return (
    <div className="mt-10 overflow-hidden rounded-md shadow-md">
      <iframe
        title="Ananta Aspen Centre Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.628350416096!2d77.17336297167312!3d28.591687493920097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2d65c6822f3%3A0x5f5c587b53a3b5ef!2sThe%20Ravi%20Shankar%20Centre!5e0!3m2!1sen!2sin!4v1719058606371!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};


