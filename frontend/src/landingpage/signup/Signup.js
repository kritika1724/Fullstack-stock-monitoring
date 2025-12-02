import { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/auth/signup', form);
      setMessage(`Hello ${res.data.username}, signup successful! Kindly Login`);
    } catch (err) {
      if (err.response?.data?.message) {
        setMessage(err.response.data.message);
      } else {
        setMessage('Server not responding or network error');
        console.error(err);
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <input 
            name="username" 
            placeholder="Username" 
            onChange={handleChange} 
            style={styles.input}
            required
          />

          <input 
            name="email" 
            placeholder="Email" 
            type="email" 
            onChange={handleChange} 
            style={styles.input}
            required
          />

          <input 
            name="password" 
            placeholder="Password" 
            type="password" 
            onChange={handleChange}
            style={styles.input}
            required 
          />

          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>

        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

// Simple inline CSS styles
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f8f9fa",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "380px",
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "600",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    background: "black",
    color: "white",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
  message: {
    marginTop: "15px",
    textAlign: "center",
    color: "#007bff",
  }
};
