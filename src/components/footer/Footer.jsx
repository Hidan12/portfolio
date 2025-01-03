import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const messageAlert = () => {
  Swal.fire({
    title: "Email Sent",
    icon: "success",
    text: "Thank you very much for contacting me! Please check your email (including spam or junk folder) for a confirmation message. I will get back to you as soon as possible. Have a great day!",
    confirmButtonText: "Back",
  });
};

const FormContact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://mytinerary-back-martinvidan.onrender.com/api/portfolio/sendMail",
        {
          email: email,
          subject: subject,
          message: message,
        }
      );
      if (response.data) {
        messageAlert();
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    }
  };

  return (
    <form onSubmit={(e) => sendMail(e)} className="flex flex-col gap-3 w-[75%]">
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-md w-full"
        type="email"
        placeholder="Email"
        required
      />
      <input
        onChange={(e) => setSubject(e.target.value)}
        className="rounded-md w-full"
        type="text"
        placeholder="subject (Optional)"
        name="subject"
      />
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        className="rounded-md w-full"
        name="message"
        placeholder="message (Optional)"
      ></textarea>
      <button
        type="submit"
        className="text-white p-3 rounded-md bg-blue-600 hover:bg-blue-900"
      >
        Send
      </button>
    </form>
  );
};

const MobileFooter = () => {
  return (
    <footer className="flex flex-col justify-center w-full bg-black bg-gradient-to-r from-[#434343] to-black">
      <div
        id="contact"
        className="flex flex-col justify-center items-center pt-4"
      >
        <h4 className="font-bold text-white p-4">Contact</h4>
        <FormContact />
      </div>
      <div>
        <div className="footer-bottom text-center py-5 text-[#ccc]">
          2024 Designed by{" "}
          <a
            href="https://github.com/Hidan12"
            target="_blank"
            className="hover:text-blue-600"
          >
            Martin Vidan
          </a>
        </div>
      </div>
    </footer>
  );
};

const Footer = () => {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  if (windowSize.width < 600) {
    return <MobileFooter />;
  }
  return (
    <footer className="flex flex-col bg-black bg-gradient-to-r from-[#434343] to-black">
      <div className="w-full grid grid-cols-3 pt-4">
        <div className="w-full flex flex-col  items-center">
          <h4 className="font-bold text-white p-4">Social Networks</h4>
          <div className="flex flex-col justify-between gap-2 md:gap-8">
            <a href="https://www.linkedin.com/in/martin-vidan/" target="_blank">
              <div className="flex items-center w-full h-4 gap-1 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-linkedin text-white w-5 h-5 group-hover:text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
                <span className="text-xl text-white group-hover:text-blue-500">
                  Linkedin
                </span>
              </div>
            </a>
            <a href="https://x.com/?lang=es" target="_blank">
              <div className="flex items-center w-full h-4 gap-1 group ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-twitter-x text-white w-5 h-5 group-hover:text-blue-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
                <span className="text-xl text-white group-hover:text-blue-400">
                  Twitter
                </span>
              </div>
            </a>
            <a href="https://github.com/Hidan12" target="_blank">
              <div className="flex items-center w-full h-4 gap-1 group ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-github text-white w-5 h-5 group-hover:text-orange-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                <span className="text-xl text-white group-hover:text-orange-400">
                  Git Hub
                </span>
              </div>
            </a>
          </div>
        </div>
        <div id="contact" className="w-full flex flex-col items-center">
          <h4 className="font-bold text-white p-4">Contact</h4>
          <FormContact />
        </div>
        <div className="w-full flex flex-col  items-center">
          <h4 className="font-bold text-white p-4">About Us</h4>
          <p className="text-white">
            Martin Vidan is a Full Stack Developer from Córdoba, Argentina, now
            in Medellín. Passionate about creating innovative web solutions with
            a focus on both front-end and back-end development.
          </p>
        </div>
      </div>
      <div className="footer-bottom text-center py-5 text-[#ccc]">
        2024 Designed by{" "}
        <a
          href="https://github.com/Hidan12"
          target="_blank"
          className="hover:text-blue-600"
        >
          Martin Vidan
        </a>
      </div>
    </footer>
  );
};
export { Footer };
