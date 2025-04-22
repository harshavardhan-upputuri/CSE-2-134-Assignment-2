import React from 'react';
import { Assets } from '../Assests/Assets';
import { useNavigate } from 'react-router-dom';
import { FaCogs } from 'react-icons/fa'; 
const Home = () => {
  const navigate = useNavigate();
  const stats = [
    { number: '100+', label: 'Students Registered' },
    { number: '6+', label: 'Academic Departments' },
    { number: '24/7', label: 'System Availability' },
    { number: '100%', label: 'Data Accuracy' },
  ];
  return (
    <div className=''>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Assets.home1}
              className="d-block w-100"
              alt="..."
              height="500px"
            />
          </div>
          <div className="carousel-item">
            <img
              src={Assets.home2}
              className="d-block w-100"
              alt="..."
              height="500px"
            />
          </div>
          <div className="carousel-item">
            <img
              src={Assets.home3}
              className="d-block w-100"
              alt="..."
              height="500px"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Welcome Section */}
      <div className="container mt-5 text-center user">
        <h2 className="mb-3">Welcome to the Student Registration System</h2>
        <p className="lead">
          Easily register, view, and manage student details all in one place.
          Designed for simplicity, accuracy, and speed.
        </p>
      </div>

      {/* Features Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-5 fw-bold text-primary">
          <FaCogs className="me-2" /> {/* Icon added here */}
          Key Features
        </h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4" >
            <div className="card shadow-sm h-100 feature-card">
              <div className="card-body">
                <h5 className="card-title">📄 Register Students</h5>
                <p className="card-text">
                  Add new student records quickly and efficiently with our
                  easy-to-use form.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4" >
            <div className="card shadow-sm h-100 feature-card">
              <div className="card-body">
                <h5 className="card-title">📋 View Student List</h5>
                <p className="card-text">
                  Access a complete list of all registered students with
                  filtering and sorting options.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4" >
            <div className="card shadow-sm h-100 feature-card">
              <div className="card-body">
                <h5 className="card-title">🛠️ Edit & Manage</h5>
                <p className="card-text">
                  Update student data easily and ensure all information stays
                  up to date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-flex flex-column justify-content-center align-items-center  bg-light p-5">
        <h2 className="  fw-bold mb-4">Get Started</h2>

        <div className="d-flex gap-3">
          <button class="btn btn-primary" type="submit" onClick={() => navigate('/add')}>Add Student</button>
          <button type="button" className="btn btn-outline-primary" onClick={() => navigate('/students')}>Student List</button>

        </div>
      </div>
      <section className="bg-light py-5 mt-5">
        <div className="container">
          <div className="row text-center">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-3 mb-4">
                <h2 className="display-5 fw-bold text-primary">{stat.number}</h2>
                <p className="mb-0 text-dark">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
