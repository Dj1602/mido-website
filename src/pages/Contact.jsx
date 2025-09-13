import ContactForm from "../components/ContactForm.jsx";

function Contact() {
  return (
    <section className="max-w-screen-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Contact Information</h2>
      <p className="text-lg text-gray-700 mb-2"><strong>Email:</strong> donjoutd@gmail.com</p>
      <p className="text-lg text-gray-700 mb-2"><strong>Phone:</strong> +251-911873268</p>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Address:</strong> Office no.110, First floor on Kaleb Minweyelet building, next to Urael church on the road to Atlas, Addis Ababa, Ethiopia
      </p>
      <ContactForm />
    </section>
  );
}

export default Contact;
