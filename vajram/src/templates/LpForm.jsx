import React from 'react';

export default function LpForm() {
  return (
  
     <>
<form
  action="https://forms.zohopublic.com/ebikego/form/vajramleadform/formperma/ZKCusEvAfG1T5tAaWyXbWDkxHfqm7uBYn6TE5KcjZFc/htmlRecords/submit"
  name="form"
  id="form"
  method="POST"
  acceptCharset="UTF-8"
  encType="multipart/form-data"
>
  <input type="hidden" name="zf_referrer_name" defaultValue="" />
  <input type="hidden" name="zf_redirect_url" defaultValue="" />
  <input type="hidden" name="zc_gad" defaultValue="" />
  <div classname="banner-form">
    <div style={{ marginTop: 20 }}>
      <input
        type="text"
        maxLength={255}
        name="Name_First"
        fieldtype="{7}"
        placeholder="First Name"
      />
    </div>
    <div classname="input-1">
      <input
        type="text"
        maxLength={255}
        name="Name_Last"
        fieldtype="{7}"
        placeholder="Last Name"
      />
    </div>
    <div style={{ display: "flex" }}>
      <input
        type="text"
        compname="PhoneNumber_countrycodeval"
        name="PhoneNumber_countrycodeval"
        phoneformat={1}
        maxLength={10}
        id="international_PhoneNumber_countrycodeval"
        placeholder="Code"
        defaultValue={+91}
        style={{ width: "20%" }}
      />
      <input
        type="text"
        compname="PhoneNumber"
        name="PhoneNumber_countrycode"
        phoneformat={1}
        iscountrycodeenabled="{true}"
        maxLength={20}
        defaultValue=""
        fieldtype="{11}"
        id="international_PhoneNumber_countrycode"
        placeholder="Number"
      />
    </div>
    <div>
      <input
        type="text"
        maxLength={255}
        name="Email"
        defaultValue=""
        fieldtype="{9}"
        placeholder="Email Address"
      />
    </div>
    <div>
      <select
        name="Radio"
        style={{
          background: "transparent",
          color: "var(--e-global-color-text)",
          borderColor: "var(--e-global-color-4a28204)",
          fontWeight: "var(--e-global-typography-text-font-weight)"
        }}
      >
        <option selected="true" value="-Select-">
          Your Investment Amount
        </option>
        <option value="Less than 10L">Less than 10L</option>
        <option value="10L - 50L">10L - 50L</option>
        <option value="Greater than 50L">Greater than 50L</option>
      </select>
    </div>
    <div classname="button-text">
      <button type="submit">
        <em>Check Eligibility</em>
      </button>
    </div>
  </div>
</form>



     </>
       
     
  );
};

