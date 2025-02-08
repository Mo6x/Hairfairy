import React, { useState } from "react";
import Profile from "../../../Asserts/Profile.png";
import StarOne from "../../../Asserts/StarOne.png";
import StarHalf from "../../../Asserts/StarHalf.png";
import Styles from "./Section.module.css";

const SectionE: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Add form submission logic here
  };

  return (
    <div className={Styles.SectionECotainer}>
      <div className={Styles.ProfileItems}>
        <div className={Styles.ProfileLists}>
          <h1 className={Styles.ProfileHeader}>What they say about us</h1>
          <img src={Profile} alt="design Icon" className={Styles.profileImage} />
          <div className={Styles.profileStar}>
            <img src={StarOne} alt="PStar Icon" />
            <img src={StarOne} alt="PStar Icon" />
            <img src={StarOne} alt="PStar Icon" />
            <img src={StarOne} alt="PStar Icon" />
            <img src={StarHalf} alt="PStar Icon" />
          </div>
          <p className={Styles.ProfileParagraph}>
            Slate helps you see how many more days you need to work to 
            reach your financial goal.
          </p>
          <div className={Styles.ProfileDetails}>
            <h4 className={Styles.ProfileName}>Regina Miles</h4>
            <h4 className={Styles.ProfileOwner}>Designer</h4>
          </div>
        </div>

    
        <div className={Styles.MessageFormContainer}>
          <h2 className={Styles.FormHeader}>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className={Styles.MessageForm}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className={Styles.inputField}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className={Styles.inputField}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={Styles.inputField}
            />
            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className={Styles.textareaField}
            />
            <button type="submit" className={Styles.submitButton}>Send Message</button>
          </form>
        </div>
      </div>    
    </div>
  );
};

export default SectionE;