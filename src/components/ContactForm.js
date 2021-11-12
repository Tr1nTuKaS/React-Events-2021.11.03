import { useState, useEffect } from "react";

function ContactForm() {
  // create name state and conenct to name input (value, onChange)
  const [name, setName] = useState("");
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  // create age state and conenct to age input (value, onChange)
  const [age, setAge] = useState("");
  const onAgeChange = (e) => {
    setAge(Number(e.target.value));
  };
  // create textarea state and conenct to textarea  (value, onChange)
  const [mainText, setMainText] = useState("");
  const onMainTextChange = (e) => {
    setMainText(e.target.value);
  };
  // create termsConditions state and conenct to termsConditions input (value, onChange)
  const [terms, setTerms] = useState(false);
  const onTermsChange = (e) => {
    // toggle terms false->true->false->.....
    setTerms(!terms);
  };
  // create select state and conenct to select input (value, onChange)
  const [subject, setSubject] = useState("information");
  const onSubChange = (e) => {
    setSubject(e.target.value);
  };

  // form submit action
  const onFormSubmit = (e) => {
    e.preventDefault();
    // create one object from all data

    const outFormData = {
      name,
      age,
      subject,
      mainText,
      terms,
    };

    console.log("subminting form", outFormData);
  };

  // allow to send form only if term is true and subject is bills
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    // if (subject !== 'bills') setFormIsValid(false);
    // do not alow to send if name has lest than 3 letters
    if (terms && name.length >= 3) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [terms, subject, name]);

  // const preventToSend = () => {
  //   let prevent = true;

  //   if (terms) prevent = false;

  //   if (subject !== 'bills') prevent = true;

  //   // do not alow to send if name has lest than 3 letters

  //   return prevent;
  // };

  return (
    <div className="w-50 text-left">
      <div className="results">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Subject: {subject}</p>
        <p>Text: {mainText}</p>
        <p>Terms and Conditions: {terms.toString()}</p>
      </div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={onNameChange}
        />
        <input
          type="number"
          className="form-control"
          placeholder="Age"
          value={age}
          onChange={onAgeChange}
        />
        <select
          value={subject}
          onChange={onSubChange}
          className="form-control"
          name="subject"
        >
          <option value="bills">Bills</option>
          <option value="information">Information</option>
          <option value="payments">Payments</option>
        </select>
        <textarea
          cols="30"
          rows="3"
          className="form-control"
          placeholder="your text"
          value={mainText}
          onChange={onMainTextChange}
        ></textarea>
        <div className="form-check">
          <input
            value={terms}
            onChange={onTermsChange}
            className="form-check-input"
            type="checkbox"
            id="terms"
          />
          <label className="form-check-label" htmlFor="terms">
            Terms and Conditions
          </label>
        </div>
        <button disabled={!formIsValid} className="btn btn-dark" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

// sukurti forma
// inputs,
// name, age,
// select [bills, information, payments]
// body - textarea
// checkbox - agree with terms and conditions
// submit btn

// get all data from inputs in one object
// disable submit btn if checkbox is unchecked
