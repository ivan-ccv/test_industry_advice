import React, { useEffect, useState } from "react";

const JornayaForm = ({ data }) => {
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
      const s = document.createElement("script");
      s.id = 'LeadiDscript_campaign';
      s.type = 'text/javascript';
      s.async = true;
      s.src = '//create.lidstatic.com/campaign/9c31c6b9-2c86-3074-dd44-2b9d41374089.js?snippet_version=2';
      var LeadiDscript = document.getElementById('LeadiDscript');
      LeadiDscript.parentNode.insertBefore(s, LeadiDscript);

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
   <div>
    <form onSubmit={handleSubmit}>
      {inputs}
      <input type="hidden" id="leadid_token" name="jornaya_leadid" value="" />
      <input type="hidden" id="leadid_tcpa_disclosure" /><label htmlFor="leadid_tcpa_disclosure">TCPA TEXT HERE</label>
      
      <button type="submit" className="bg-blue-300 rounded p-4">Submit jornaya</button>
      <img src='//create.leadid.com/noscript.gif?lac=A668D4D8-9DC2-D5CA-DFCE-1637228B9E33&lck=9c31c6b9-2c86-3074-dd44-2b9d41374089&snippet_version=2' />

    </form>
    <script id="LeadiDscript" type="text/javascript">
   {/* {` (function() {
     console.log('script did run');
        var s = document.createElement('script');
        s.id = 'LeadiDscript_campaign';
        s.type = 'text/javascript';
        s.async = true;
        s.src = '//create.lidstatic.com/campaign/9c31c6b9-2c86-3074-dd44-2b9d41374089.js?snippet_version=2';
        var LeadiDscript = document.getElementById('LeadiDscript');
        LeadiDscript.parentNode.insertBefore(s, LeadiDscript);
       
    })();`} */}
</script>
<noscript><img src='//create.leadid.com/noscript.gif?lac=A668D4D8-9DC2-D5CA-DFCE-1637228B9E33&lck=9c31c6b9-2c86-3074-dd44-2b9d41374089&snippet_version=2' /></noscript>
    </div>
  );
};

export default JornayaForm;
