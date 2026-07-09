import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("SetInterval on contact page");
    }, 1000);

    return () => {
      console.log("Destructor");
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h1>Contact Us</h1>
      <h2>This is Contact US page</h2>
    </div>
  );
};

export default Contact;
