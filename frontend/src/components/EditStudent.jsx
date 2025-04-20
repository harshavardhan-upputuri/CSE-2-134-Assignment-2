import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';

function EditStudent() {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const backendUrl = import.meta.env.VITE_APP_BACKEND_BASEURL;
    axios.get(`${backendUrl}/students/${id}`).then(res => {
      setStudent(res.data);
    });
  }, [id]);

  const handleChange = e => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const backendUrl = import.meta.env.VITE_APP_BACKEND_BASEURL;
    await axios.put(`${backendUrl}/students/${id}`, student);
    navigate('/students');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-warning mb-4 fw-bold">
        <FaUserEdit className="me-2" />
        Edit Student
      </h2>

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

        <button type="submit" className="btn btn-warning w-100 fw-semibold">
          Update Student
        </button>
      </form>
    </div>
  );
}

export default EditStudent;
