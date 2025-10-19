import Assignment from '../components/Assignment';
import './AssignmentPage.css';

function AssignmentPage() {
  return (
    <div className="page assignment-page">
      <div className="assignment-page-hero">
        <div className="assignment-hero-content">
          <h1>Opdracht Details</h1>
          <p>Man6 - Advanced Release Management</p>
        </div>
      </div>
      <Assignment />
    </div>
  );
}

export default AssignmentPage;
