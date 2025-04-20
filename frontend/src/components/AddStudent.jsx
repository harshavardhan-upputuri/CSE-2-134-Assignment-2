import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';

function AddStudent() {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/students', student);
    navigate('/students');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-success mb-4 fw-bold">
        <FaUserPlus className="me-2" />
        Add New Student
      </h2>

      {/* Profile Icon Section */}
      <div className="text-center mb-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // Static profile icon
          alt="Profile Icon"
          className="rounded-circle mb-3"
          width="80"
          height="80"
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded shadow-sm bg-light"
        style={{ maxWidth: '600px', margin: '0 auto' }}
      >
        {['name', 'email', 'phone', 'course'].map(field => (
          <div className="mb-3" key={field}>
            <label htmlFor={field} className="form-label text-capitalize fw-semibold">
              {field}
            </label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              className="form-control"
              id={field}
              name={field}
              placeholder={`Enter ${field}`}
              value={student[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <button type="submit" className="btn btn-success w-100">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
