import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Success or error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData();
    formData.append("access_key", "d26628f9-7385-4687-b864-4244032ee876");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong. Try again later.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="min-vh-100 py-5">
      <div className="container shadow-lg rounded-4 p-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-warning">Contact Me</h2>
          <p className="mt-3 fs-5 text-muted">
            Feel free to reach out for any inquiries or collaborations!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label fw-semibold">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-info w-100">
            Send Message
          </button>

          {/* Status Message */}
          {status && (
            <div className="mt-3 text-center text-muted small">{status}</div>
          )}
        </form>
      </div>
    </div>
  );
}

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const mailtoLink = `mailto:gangwar030@gmail.com?subject=Contact from Portfolio&body=Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0AMessage: ${form.message}`;
//     window.location.href = mailtoLink;
//     setForm({
//       name: "",
//       email: "",
//       message: "",
//     });
//   };

//   return (
//     <div className="min-vh-100 py-5">
//       <div className="container shadow-lg rounded-4 p-4">
//         <div className="text-center mb-5">
//           <h2 className="fw-bold text-warning">Contact Me</h2>
//           <p className="mt-3 fs-5 text-muted">
//             Feel free to reach out for any inquiries or collaborations!
//           </p>
//         </div>
//         <form
//           onSubmit={handleSubmit}
//           className="mx-auto"
//           style={{ maxWidth: "600px" }}
//         >
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label fw-semibold">
//               Name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               name="name"
//               placeholder="Your Name"
//               value={form.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label fw-semibold">
//               Email
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               placeholder="Your Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="message" className="form-label fw-semibold">
//               Message
//             </label>
//             <textarea
//               className="form-control"
//               id="message"
//               name="message"
//               rows="4"
//               placeholder="Your Message"
//               value={form.message}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-info w-100 hover-bg-success">
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

//  <form action="https://api.web3forms.com/submit" method="POST" class="contact-form">
//     <input type="hidden" name="access_key" value="d26628f9-7385-4687-b864-4244032ee876"></input>
