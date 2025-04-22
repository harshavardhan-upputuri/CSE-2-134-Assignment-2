import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaUserGraduate, FaEdit, FaTrashAlt } from 'react-icons/fa';

function StudentList() {
  const [students, setStudents] = useState([]);

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

      {students.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Enrollment Year</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      alt="avatar"
                      width="40"
                      height="40"
                      className="rounded-circle border border-dark"
                    />
                  </td>
                  <td>{student.firstName} {student.lastName}</td>
                  <td>{student.email}</td>
                  <td>{student.department}</td>
                  <td>{student.enrollmentYear}</td>
                  <td>
                    <span className={student.isActive ? 'text-success' : 'text-danger'}>
                      {student.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center mt-5">
          <p>No students found.</p>
        </div>
      )}
    </div>
  );
}

export default StudentList;
