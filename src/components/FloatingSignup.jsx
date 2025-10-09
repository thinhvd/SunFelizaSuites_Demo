import React, { useState, useEffect } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyP2KvCcnHCASsheC70pbJWRHHW7kvPXIRKoANsHnsVYt2d0OdV3sz0-8puM6GopXEQ/exec";

export const FloatingSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  // Animation cho icon hòm thư
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 3000);
    }, 5000); // Animation mỗi 5 giây

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setStatus("error");
      setMessage("Vui lòng nhập đầy đủ tên và email.");
      return;
    }
    setStatus("loading");
    setMessage("");
    
    // Gửi request (không đợi response)
    fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
      }),
      mode: "no-cors",
    }).catch(() => {
      // Ignore errors, không cần xử lý
    });

    // Hiển thị loading trong 0.5 giây rồi thành công
    setTimeout(() => {
      setStatus("success");
      setMessage("Đã gửi! Cảm ơn bạn.");
      setName("");
      setEmail("");
      
      // Animation khi submit thành công
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2000);
    }, 1000);
  };

  return (
    <div className="floating-signup">
      <button
        className={`floating-signup__toggle ${isAnimating ? 'animate' : ''}`}
        aria-label="Mở form đăng ký"
        onClick={() => {
          const next = document.body.classList.toggle("floating-signup--open");
          return next;
        }}
      >
        {"✉️"}
      </button>
      <form className="floating-signup__panel" onSubmit={handleSubmit}>
        <div className="floating-signup__header">Đăng ký nhận thông tin</div>
        <label className="floating-signup__label">
          Tên
          <input
            type="text"
            className="floating-signup__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên của bạn"
          />
        </label>
        <label className="floating-signup__label">
          Email
          <input
            type="email"
            className="floating-signup__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>
         <button
           type="submit"
           className={`floating-signup__submit ${status === "success" ? "floating-signup__submit--success" : ""}`}
           disabled={status === "loading" || status === "success"}
         >
           {status === "loading" ? "" : status === "success" ? "Đã gửi! Cảm ơn bạn." : "Gửi"}
         </button>
        {status === "error" && message ? (
          <div
            className={`floating-signup__message floating-signup__message--${status}`}
            role="status"
          >
            {message}
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default FloatingSignup;


