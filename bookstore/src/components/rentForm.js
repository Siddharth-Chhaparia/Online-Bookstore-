import React, { useState,useEffect} from "react";
import M from "materialize-css";
const options = [
  { value: "option1", label: "Cash" },
  { value: "option2", label: "Other goods" }
];


const RentForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState('');
  useEffect(() => {
    M.FormSelect.init(document.querySelectorAll("select"), {});
  }, []);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleCheckboxChange = (event) => {
    setSelectedCheckbox(event.target.value);
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  }
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }


  const renderSelectedOption = () => {
    if (selectedOption === "option1") {
      return <div>Get on Payment Gateway</div>;
    } else if (selectedOption === "option2") {
      return (<div>
              <h2>Select the item you want to exchange with </h2>
              <form onSubmit={handleSubmit}>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="options"
                          value="option1"
                          checked={selectedCheckbox === "option1"}
                          onChange={handleCheckboxChange}
                        />
                        <span> Electronics</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="options"
                          value="option2"
                          checked={selectedCheckbox === "option2"}
                          onChange={handleCheckboxChange}
                        />
                        <span>Daily purpose product</span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="options"
                          value="option3"
                          checked={selectedCheckbox === "option3"}
                          onChange={handleCheckboxChange}
                        />
                        <span>Other</span>
                      </label>
                    </div>
                    {selectedCheckbox &&
                      <div>
                        <label>
                          <input
                            type="file"
                            onChange={handleFileSelect}
                          />
                        </label>
                        <div>
                          <label>
                            <textarea
                              value={description}
                              onChange={handleDescriptionChange}
                            />
                          </label>
                        </div>
                      </div>
                    }
                    <button type="submit">Submit</button>
                  </form>


      </div>);}
    else {
      return null;
    }
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [enrollmentNo, setenrollmentNo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, enrollmentNo);
   
    console.log('Selected file:', selectedFile);
    console.log('Description:', description);
    // submit logic goes here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field">
        <input
          type="text"
          id="first_name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <label htmlFor="first_name">First Name</label>
      </div>
      <div className="input-field">
        <input
          type="text"
          id="last_name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <label htmlFor="last_name">Last Name</label>
      </div>
      <div className="input-field">
        <input
          type="text"
          id="enrollmentNo"
          value={enrollmentNo}
          onChange={(e) => setenrollmentNo(e.target.value)}
          required
        />
      <label htmlFor="email">Enrollment No</label>
      </div>
      <select onChange={handleChange}>
        <option value="" disabled selected>
          Set exchange method
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {renderSelectedOption()}


    </form>
  );
};

export default RentForm;
