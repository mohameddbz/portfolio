import React , {useState} from 'react'

const ContactRight = () => {

    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const emailValidation = () => {
        return String(email)
          .toLocaleLowerCase()
          .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
      };

    const handlSend = (e) => {
        e.preventDefault();
        if (username === "") {
            setErrMsg("Username is required!");
          } else if (phoneNumber === "") {
            setErrMsg("Phone number is required!");
          } else if (email === "") {
            setErrMsg("Please give your Email!");
          } else if (!emailValidation(email)) {
            setErrMsg("Give a valid Email!");
          } else if (subject === "") {
            setErrMsg("Plese give your Subject!");
          } else if (message === "") {
            setErrMsg("Message is required!");
          } else {
            setSuccessMsg(
              `Thank you dear ${username}, Your Messages has been sent Successfully!`
            );
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
        }
    }

  return (
    <div className="w-[60%] h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 
                    rounded-lg shadow-shadowOne flex flex-col gap-8">
        <form action="" className='w-full flex flex-col gap-6 py-5'>
            <div className='w-full flex gap-10'>
                <div className='w-1/2 flex flex-col gap-4'>
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                        Your name
                    </p> 
                    <input
                        className={`${ errMsg === "Username is required!" &&
                            "outline-designColor"
                          } contactInput`}
                        type="text"
                        value={username}
                        onChange={(e)=>{setUsername(e.target.value)}}
                    />
                </div>
                <div className='w-1/2 flex flex-col gap-4'>
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                        Phone Number
                    </p> 
                    <input
                        className={`${ errMsg === "Phone number is required!" &&
                            "outline-designColor"
                          } contactInput`}
                        type="text"
                        value={phoneNumber}
                        onChange={(e)=>{setPhoneNumber(e.target.value)}}
                    />
                </div>
            </div>
            <div className='w-full flex flex-col gap-4'>
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Email
                </p> 
                <input
                    className={`${ errMsg === "Please give your Email!" &&
                        "outline-designColor"
                      } contactInput`}
                    type="email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
            </div>
            <div className='w-full flex flex-col gap-4'>
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Subject
                </p> 
                <input
                    className={`${ errMsg === "Plese give your Subject!" &&
                        "outline-designColor"
                      } contactInput`}
                    type="text"
                    value={subject}
                    onChange={(e)=>{setSubject(e.target.value)}}
                />
            </div>
            <div className='w-full flex flex-col gap-4'>
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your Message
                </p> 
                <textarea 
                    className={`${ errMsg === "Message is required!" && "outline-designColor"
                      } contactTextArea`} 
                    value={message}
                    cols="30" 
                    rows="8"
                    onChange={(e)=>{setMessage(e.target.value)}}></textarea>
            </div>
            <div>
                <button className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white 
                                duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                                onClick={handlSend}>
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
  )
}

export default ContactRight
