import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
console.log("button is clicked");
    try {
      const res = await axios.post('http://localhost:5000/api/users', {
        name,
        email,
      });
      alert(res.data.message);
      setName('');
      setEmail('');
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Register User</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border w-full p-2"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="border w-full p-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button onClick={() => alert('✅ Button was clicked')} className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Login;
