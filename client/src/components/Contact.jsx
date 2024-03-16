import React, {useState} from 'react'

import axios from "axios"
import toast from "react-hot-toast";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
 

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/contact/send",
        { name, email, subject , message },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("")
     
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div id='contact'>
        <h1  data-aos="zoom-in" data-aos-duration="1500">CONTACT US</h1>
        <form data-aos="fade-up" data-aos-duration="1500" >
            <input type="text" placeholder='Enter your name' id='firstName' 
            value={name}
            onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder='Type your email' id='email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='Enter your subject ' id='phone' value={subject} 
             onChange={(e)=>setSubject(e.target.value)} />
            <textarea name="textArea" placeholder='Write Here.....' id="" cols="30" rows="10" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}></textarea>
            <input type="submit" value="Send"  onClick={handleReservation}/>

        </form>

    </div>
  )
}

export default Contact