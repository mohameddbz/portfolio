import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactRight = () => {
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const form = useRef();

    const emailValidation = () => {
        return String(email)
            .toLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Perform validation
        if (username === "") {
            setErrMsg("Username is required!");
        } else if (phoneNumber === "") {
            setErrMsg("Phone number is required!");
        } else if (email === "") {
            setErrMsg("Please give your Email!");
        } else if (!emailValidation(email)) {
            setErrMsg("Give a valid Email!");
        } else if (subject === "") {
            setErrMsg("Please give your Subject!");
        } else if (message === "") {
            setErrMsg("Message is required!");
        } else {
            // Sending email using EmailJS
            emailjs
                .sendForm(
                    'service_03y5v4h',  // Replace with your EmailJS service ID
                    'template_u6f5zzm',  // Replace with your EmailJS template ID
                    form.current,
                    'K53GYBNvAOY_frCWz'    // Replace with your EmailJS public key
                )
                .then(() => {
                    setSuccessMsg(
                        `Thank you dear ${username}, your message has been sent successfully!`
                    );
                    setErrMsg("");
                    setUsername("");
                    setPhoneNumber("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                })
                .catch((error) => {
                    setErrMsg("Failed to send message. Please try again.");
                    console.log("FAILED...", error.text);
                });
        }
    };

    return (
        <div className="w-full lgl:w-[60%] h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 
                    rounded-lg shadow-shadowOne flex flex-col gap-8">
            <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-6 py-5">
                <div className="w-full flex flex-col lgl:flex-row gap-10">
                    <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                        <p className="text-sm text-gray-400 uppercase tracking-wide">Your name</p>
                        <input
                            className={`${errMsg === "Username is required!" && "outline-designColor"} contactInput`}
                            type="text"
                            name="from_name"  // Name for EmailJS template
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                        <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                        <input
                            className={`${errMsg === "Phone number is required!" && "outline-designColor"} contactInput`}
                            type="text"
                            name="user_phone"  // Name for EmailJS template
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                    <input
                        className={`${errMsg === "Please give your Email!" && "outline-designColor"} contactInput`}
                        type="email"
                        name="from_email"  // Name for EmailJS template
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="w-full flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                    <input
                        className={`${errMsg === "Please give your Subject!" && "outline-designColor"} contactInput`}
                        type="text"
                        name="subject"  // Name for EmailJS template
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
                <div className="w-full flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Your Message</p>
                    <textarea
                        className={`${errMsg === "Message is required!" && "outline-designColor"} contactTextArea`}
                        name="message"  // Name for EmailJS template
                        value={message}
                        cols="30"
                        rows="8"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white 
                        duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                        type="submit"
                    >
                        Send Message
                    </button>
                </div>
                {errMsg && (
                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                        {errMsg}
                    </p>
                )}
                {successMsg && (
                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                        {successMsg}
                    </p>
                )}
            </form>
        </div>
    );
};

export default ContactRight;
