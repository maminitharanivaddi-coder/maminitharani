import React, { useState } from "react";
import "./App.css";
import StudentCard from "./StudentCard";

function App() {
  const [students, setStudents] = useState([]);
  const [rollNo, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [viewType, setViewType] = useState("");

  const quotes = [
    "Failure is the stepping stone to success.",
    "Every expert was once a beginner.",
    "Mistakes are proof that you are trying.",
    "Success comes from persistence.",
    "Don't stop until you're proud."
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rollNo || !name || !marks) {
      setError("Please fill all fields");
      return;
    }

    setStudents([
      ...students,
      { id: Date.now(), rollNo, name, marks }
    ]);

    setRollNo("");
    setName("");
    setMarks("");
    setError("");
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const passedStudents = students.filter((s) => Number(s.marks) >= 40);
  const failedStudents = students.filter((s) => Number(s.marks) < 40);

  const passPercentage = students.length
    ? ((passedStudents.length / students.length) * 100).toFixed(2)
    : 0;

  const failPercentage = students.length
    ? ((failedStudents.length / students.length) * 100).toFixed(2)
    : 0;

  const topper =
    students.length > 0
      ? students.reduce((a, b) =>
          Number(a.marks) > Number(b.marks) ? a : b
        )
      : null;

  return (
    <div className="container">
      <h1>🎓 Student Management System</h1>

      {topper && (
        <div className="topper">
          🏆 Topper: {topper.name} ({topper.marks})
        </div>
      )}

      <div className="stats">
        <div className="stat-card" onClick={() => setViewType("all")}>
          <h2>{students.length}</h2>
          <p>Total Students</p>
        </div>

        <div className="stat-card" onClick={() => setViewType("passed")}>
          <h2>{passedStudents.length}</h2>
          <p>Passed</p>
        </div>

        <div className="stat-card" onClick={() => setViewType("failed")}>
          <h2>{failedStudents.length}</h2>
          <p>Failed</p>
        </div>
      </div>

      <form className="form-box" onSubmit={handleSubmit}>
        <input placeholder="Roll Number" value={rollNo} onChange={(e)=>setRollNo(e.target.value)} />
        <input placeholder="Student Name" value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="number" placeholder="Marks" value={marks} onChange={(e)=>setMarks(e.target.value)} />
        <button type="submit">Add Student</button>
      </form>

      {error && <p className="error">{error}</p>}

      <div className="search-container">
        <input
          placeholder="Search Student"
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <div className="suggestions">
            {students
              .filter((s)=>s.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
              .map((s)=>(
                <div key={s.id} onClick={()=>setSearchTerm(s.name)}>
                  {s.name}
                </div>
              ))}
          </div>
        )}
      </div>

      <div className="students-grid">
        {filteredStudents.map((student, index)=>(
          <StudentCard
            key={student.id}
            student={student}
            rank={index + 1}
            onDelete={deleteStudent}
            onSelect={setSelectedStudent}
          />
        ))}
      </div>

      {selectedStudent && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedStudent.name}</h2>
            <p>Roll No: {selectedStudent.rollNo}</p>
            <p>Marks: {selectedStudent.marks}</p>
            <button onClick={()=>setSelectedStudent(null)}>Close</button>
          </div>
        </div>
      )}

      {viewType && (
        <div className="modal">
          <div className="modal-content">
            {viewType === "all" && (
              <>
                <h2>All Students</h2>
                {students.map((s)=><p key={s.id}>{s.name} - {s.marks}</p>)}
              </>
            )}

            {viewType === "passed" && (
              <>
                <h2>Passed Students</h2>
                <h3>Pass Percentage: {passPercentage}%</h3>
                {passedStudents.map((s)=><p key={s.id}>{s.name} - {s.marks}</p>)}
              </>
            )}

            {viewType === "failed" && (
              <>
                <h2>Failed Students</h2>
                <h3>Fail Percentage: {failPercentage}%</h3>
                {failedStudents.map((s)=><p key={s.id}>{s.name} - {s.marks}</p>)}
                <div className="quote">
                  {quotes[Math.floor(Math.random() * quotes.length)]}
                </div>
              </>
            )}

            <button onClick={()=>setViewType("")}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
