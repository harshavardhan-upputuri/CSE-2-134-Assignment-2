// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { FaUserGraduate, FaEdit, FaTrashAlt } from 'react-icons/fa';

// function StudentList() {
//   const [students, setStudents] = useState([]);

//   // Function to generate a random color
//   const getRandomColor = () => {
//     const colors = ['#ffcc00', '#00bfff', '#32cd32', '#ff6347', '#8a2be2', '#ff1493'];
//     return colors[Math.floor(Math.random() * colors.length)];
//   };

//   const fetchStudents = async () => {
//     const backendUrl = import.meta.env.VITE_APP_BACKEND_BASEURL;
//     const res = await axios.get(`${backendUrl}/students`);
//     setStudents(res.data);
//   };

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const deleteStudent = async (id) => {
//     const backendUrl = import.meta.env.VITE_APP_BACKEND_BASEURL;
//     await axios.delete(`${backendUrl}/students/${id}`);
//     fetchStudents();
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4 fw-bold text-primary">
//         <FaUserGraduate className="me-2" />
//         Student List
//       </h2>

//       <div className="row">
//         {students.length > 0 ? (
//           students.map((student) => (
//             <div key={student._id} className="col-md-4 mb-4">
//               <div className="card shadow-sm border-0 h-100">
//                 <div className="card-body text-center">
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // Placeholder student image
//                     alt="Student Avatar"
//                     className="rounded-circle mb-3"
//                     width="80"
//                     height="80"
//                     style={{
//                       backgroundColor: getRandomColor(), // Apply random background color
//                       border: '5px solid #333', // Border color and size
//                     }}
//                   />
//                   <h5 className="card-title fw-bold">{student.name}</h5>
//                   <p className="card-text mb-1"><strong>Email:</strong> {student.email}</p>
//                   <p className="card-text"><strong>Course:</strong> {student.course}</p>
//                   <div className="d-flex justify-content-center gap-2 mt-3">
//                     <Link to={`/edit/${student._id}`} className="btn btn-outline-success btn-sm">
//                       <FaEdit /> Edit
//                     </Link>
//                     <button
//                       className="btn btn-outline-danger btn-sm"
//                       onClick={() => deleteStudent(student._id)}
//                     >
//                       <FaTrashAlt /> Delete
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="text-center mt-5">
//             <p>No students found.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default StudentList;

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaUserGraduate, FaEdit, FaTrashAlt } from 'react-icons/fa';

function StudentList() {
  const [students, setStudents] = useState([]);

  // Generate a random color
  const getRandomColor = () => {
    const colors = ['#ffcc00', '#00bfff', '#32cd32', '#ff6347', '#8a2be2', '#ff1493'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const fetchStudents = async () => {
    const backendUrl = import.meta.env.VITE_APP_BACKEND_BASEURL;
    const res = await axios.get(`${backendUrl}/students`);
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    const backendUrl = import.meta.env.VITE_APP_BACKEND_BASEURL;
    await axios.delete(`${backendUrl}/students/${id}`);
    fetchStudents();
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold text-primary">
        <FaUserGraduate className="me-2" />
        Student List
      </h2>

      <div className="row">
        {students.length > 0 ? (
          students.map((student) => (
            <div key={student._id} className="col-md-4 mb-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body text-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="Student Avatar"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                    style={{
                      backgroundColor: getRandomColor(),
                      border: '5px solid #333',
                    }}
                  />
                  <h5 className="card-title fw-bold">
                    {student.firstName} {student.lastName}
                  </h5>
                  <p className="card-text mb-1">
                    <strong>Email:</strong> {student.email}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Department:</strong> {student.department}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Enrollment Year:</strong> {student.enrollmentYear}
                  </p>
                  <p className="card-text">
                    <strong>Status:</strong>{' '}
                    <span className={student.isActive ? 'text-success' : 'text-danger'}>
                      {student.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </p>
                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <Link to={`/edit/${student._id}`} className="btn btn-outline-success btn-sm">
                      <FaEdit /> Edit
                    </Link>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deleteStudent(student._id)}
                    >
                      <FaTrashAlt /> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center mt-5">
            <p>No students found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentList;
