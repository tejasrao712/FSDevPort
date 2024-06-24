// import React, { useState } from 'react';
// import axios from 'axios';

// const Contact: React.FC = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const sendMessage = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:3001/msg/message", { name, email, message });
//       console.log('Message sent successfully');
//     } catch (error: any) {
//       console.error('Message not sent', error.message);
//     }
//   };

//   return (
//     <section id='contact' className="bg-white min-h-screen p-8">
//       <div className="container mx-auto">
//         <h2 className="text-5xl font-bold text-gray-800">Contact</h2>
//         <form onSubmit={sendMessage}>
//           <label>
//             Name
//             <input
//               type="text"
//               id="Name"
//               className=''
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </label>
//           <label>
//             E-mail
//             <input
//               type="email"
//               id="Email"
//               className=''
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </label>
//           <label>
//             Message
//             <input
//               type='text'
//               id="Message"
//               className=''
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//           </label>
//           <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white">
//             Submit
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-left">Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-left">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-left">Message</label>
            <textarea className="w-full px-4 py-2 border rounded-lg"></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
