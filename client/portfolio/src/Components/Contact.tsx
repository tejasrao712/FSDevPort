import React, { useState } from 'react';
import axios from 'axios';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/msg/message", { name, email, message });
      console.log('Message sent successfully');
    } catch (error: any) {
      console.error('Message not sent', error.message);
    }
  };

  return (
    <section id='contact' className="bg-white min-h-screen p-8">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-gray-800">Contact</h2>
        <form onSubmit={sendMessage}>
          <label>
            Name
            <input
              type="text"
              id="Name"
              className=''
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            E-mail
            <input
              type="email"
              id="Email"
              className=''
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Message
            <input
              type='text'
              id="Message"
              className=''
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
