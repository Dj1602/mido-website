import { useState } from "react";

const countryData = {
  "251": { name: "Ethiopia", flag: "🇪🇹", minLength: 9, maxLength: 10 },
  "256": { name: "Uganda", flag: "🇺🇬", minLength: 9, maxLength: 12 },
};

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryCodeChange = (e) => {
    let code = e.target.value.replace(/\D/g, "");
    setCountryCode(code);
    setPhoneNumber("");

    let matchedCode = Object.keys(countryData).find((c) => code.startsWith(c));
    if (matchedCode) {
      setSelectedCountry(countryData[matchedCode]);
      setCountryCode(matchedCode);
      setError("");
    } else {
      setSelectedCountry(null);
    }
  };

  const handlePhoneNumberChange = (e) => {
    const phone = e.target.value.replace(/\D/g, "");
    setPhoneNumber(phone);

    if (selectedCountry) {
      const { minLength, maxLength } = selectedCountry;
      if (phone.length < minLength || phone.length > maxLength) {
        setError(`Phone number must be between ${minLength} and ${maxLength} digits.`);
      } else {
        setError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return setError("Name is required.");
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return setError("Valid email is required.");
    if (!message.trim()) return setError("Message cannot be empty.");
    if (!selectedCountry) return setError("Enter a valid country code (251 or 256). ");
    if (phoneNumber.length < selectedCountry.minLength || phoneNumber.length > selectedCountry.maxLength)
      return setError(`Phone number must be between ${selectedCountry.minLength} and ${selectedCountry.maxLength} digits.`);

    alert(`Form submitted:\nName: ${name}\nEmail: ${email}\nPhone: +${countryCode} ${phoneNumber}\nMessage: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
    setCountryCode("");
    setPhoneNumber("");
    setSelectedCountry(null);
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg space-y-4">
      <h2 className="text-2xl font-semibold text-gray-700">Contact Us</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full Name"
        className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
      />

      <div className="flex space-x-2">
        <input
          type="text"
          value={countryCode}
          onChange={handleCountryCodeChange}
          placeholder="Country Code (e.g., 251)"
          className="w-1/3 p-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
        {selectedCountry && <span className="text-2xl">{selectedCountry.flag}</span>}
      </div>

      <input
        type="text"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="Phone Number"
        className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        disabled={!selectedCountry}
      />

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your Message"
        className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        rows="4"
      ></textarea>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition">Submit</button>
    </form>
  );
}

export default ContactForm;
