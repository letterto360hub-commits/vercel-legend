import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import axios from "axios";
export default function ({ isContactPage = false }) {
  let router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const submitForm = useCallback(async () => {
    setError("");
    setSuccess("");
    let data = JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      page: router.pathname,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/api/leads",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    try {
      let res = await axios.request(config);
      console.log(res);
      if (res.error) {
        setError(res.message);
      } else {
        setSuccess(
          "Thank you! Someone from our team will get in touch with you soon.",
        );
        setName("");
        setEmail("");
        setPhone("");
      }
    } catch (e) {
      setSuccess("");
      console.log(e);
      setError(e);
    }
  }, [name, email, phone]);
  return (
    <div
      className={`flex flex-col gap-6 items-start justify-start p-4 ${isContactPage ? "bg-black/60" : "bg-white/80"} text-black`}
    >
      <p
        className={`${isContactPage ? "text-gray-50" : "text-gray-900"} text-xl`}
      >
        Express your Interest
      </p>
      {success && (
        <p className="text-md text-green-800 lg:col-span-3">{success}</p>
      )}
      {error && <p className="text-md text-red-400 lg:col-span-3">{error}</p>}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="h-10 w-full rounded shadow px-1"
        placeholder="Your Name"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-10 w-full rounded shadow px-1"
        placeholder="Your Email"
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="h-10 w-full rounded shadow px-1"
        placeholder="Your Phone"
      />
      <button
        onClick={submitForm}
        className="primary-btn px-4 py-2 self-center"
      >
        Submit
      </button>
    </div>
  );
}
