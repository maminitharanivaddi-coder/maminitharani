import React from "react";

function StudentCard({ student, onDelete, onSelect, rank }) {
  return (
    <div className="student-card" onClick={() => onSelect(student)}>
      <h3>{student.name}</h3>
      <p>Roll No: {student.rollNo}</p>
      <p>Marks: {student.marks}</p>
      <p>Rank: #{rank}</p>

      <div className="progress">
        <div
          className="progress-fill"
          style={{ width: `${student.marks}%` }}
        ></div>
      </div>

      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(student.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default StudentCard;
