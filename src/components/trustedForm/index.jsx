import React, { useEffect, useState } from "react";

const TrustedForm = ({ data }) => {
  const [shouldRender, setShouldRender] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Collect form data securely using FormData
    const formData = new FormData(event.target); // Access form data

    // Log all data (avoid logging sensitive information)
    console.log("Form data:");
    for (const [key, value] of formData.entries()) {
      // **Security:** Avoid logging sensitive information like passwords or tokens.
      if (
        key.toLowerCase().includes("password") 
       // || key.toLowerCase().includes("token")
      ) {
        console.log(`${key}: (sensitive data omitted)`);
      } else {
        console.log(`${key}: ${value}`);
      }
    }
  };

  useEffect(() => {
    if (shouldRender) {
      const tf = document.createElement("script");
      tf.type = "text/javascript";
      tf.async = true;
      tf.src =
        (window.location.protocol === "https:" ? "https" : "http") +
        "://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&ping_field=xxTrustedFormPingUrl&invert_field_sensitivity=true&l=" +
        new Date().getTime() +
        Math.random();
      const s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(tf, s);

      // Cleanup function
      return () => {
        tf.remove();
      };
    }
  }, [shouldRender]);

  useEffect(() => {
    if (data && data instanceof Map && data.size > 0) {
      // Data is a valid Map with at least one key-value pair
      setShouldRender(true);
    } else {
      setShouldRender(false);
    }
  }, [data]); // Dependency array ensures effect runs only when data changes

  if (!shouldRender) {
    return null;
  }

  const inputs = Array.from(data.entries()).map(([key, value]) => (
    <input key={key} type="hidden" name={key} value={value} />
  ));

  //   const inputs = Object.entries(data).map(([key, value]) => (
  //     <input key={key} type="hidden" name={key} value={value} />
  //   ));
  return (
    <form onSubmit={handleSubmit}>
      {inputs}
      <button className="rounded bg-green-300 p-4" type="submit">Submit TF</button>
    </form>
  );
};

export default TrustedForm;
