// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { FaUserPlus } from 'react-icons/fa';

// function AddStudent() {
//   const [student, setStudent] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     course: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = e => {
//     setStudent({ ...student, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     // Use the VITE_APP_BACKEND_BASEURL environment variable
//     const backendUrl = import.meta.env.VITE_APP_BACKEND_BASEURL;
//     await axios.post(`${backendUrl}/students`, student);
//     navigate('/students');
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center text-success mb-4 fw-bold">
//         <FaUserPlus className="me-2" />
//         Add New Student
//       </h2>

//       {/* Profile Icon Section */}
//       <div className="text-center mb-4">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // Static profile icon
//           alt="Profile Icon"
//           className="rounded-circle mb-3"
//           width="80"
//           height="80"
//         />
//       </div>

//       <form
//         onSubmit={handleSubmit}
//         className="border p-4 rounded shadow-sm bg-light"
//         style={{ maxWidth: '600px', margin: '0 auto' }}
//       >
//         {['name', 'email', 'phone', 'course'].map(field => (
//           <div className="mb-3" key={field}>
//             <label htmlFor={field} className="form-label text-capitalize fw-semibold">
//               {field}
//             </label>
//             <input
//               type={field === 'email' ? 'email' : 'text'}
//               className="form-control"
//               id={field}
//               name={field}
//               placeholder={`Enter ${field}`}
//               value={student[field]}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         ))}

//         <button type="submit" className="btn btn-success w-100">
//           Add Student
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddStudent;


import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';

function AddStudent() {
  const [student, setStudent] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    department: '',
    enrollmentYear: '',
    isActive: true
  });

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setStudent({
      ...student,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const backendUrl = import.meta.env.VITE_APP_BACKEND_BASEURL;
    await axios.post(`${backendUrl}/students`, student);
    navigate('/students');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-success mb-4 fw-bold">
        <FaUserPlus className="me-2" />
        Add New Student
      </h2>

      <div className="text-center mb-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
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
        {[ 
          { label: 'Student ID', name: 'studentId', placeholder: 'Enter Student ID (e.g., S1234)' },
          { label: 'First Name', name: 'firstName', placeholder: 'Enter First Name (e.g., John)' },
          { label: 'Last Name', name: 'lastName', placeholder: 'Enter Last Name (e.g., Doe)' },
          { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter Email Address (e.g., john.doe@example.com)' },
          { label: 'Date of Birth', name: 'dob', type: 'date', placeholder: 'Enter Date of Birth (YYYY-MM-DD)' },
          { label: 'Department', name: 'department', placeholder: 'Enter Department (e.g., Computer Science)' },
          { label: 'Enrollment Year', name: 'enrollmentYear', type: 'number', placeholder: 'Enter Enrollment Year (e.g., 2022)' }
        ].map(({ label, name, type = 'text', placeholder }) => (
          <div className="mb-3" key={name}>
            <label htmlFor={name} className="form-label fw-semibold">
              {label}
            </label>
            <input
              type={type}
              className="form-control"
              id={name}
              name={name}
              value={student[name]}
              onChange={handleChange}
              placeholder={placeholder}
              required
            />
          </div>
        ))}

        {/* isActive Checkbox */}
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="isActive"
            name="isActive"
            checked={student.isActive}
            onChange={handleChange}
          />
          <label htmlFor="isActive" className="form-check-label fw-semibold">
            Is Active
          </label>
        </div>

        <button type="submit" className="btn btn-success w-100">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
