import React, { useState } from "react";

export default function StudentForm() {
  const [students, setStudents] = useState([]); // list of students
  const [student, setStudent] = useState({ id: "", name: "", dept: "" }); // current form
  const [editIndex, setEditIndex] = useState(null); // track editing student

  // Handle input change
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // Add student
  const handleAdd = () => {
    if (student.id && student.name && student.dept) {
      setStudents([...students, student]);
      setStudent({ id: "", name: "", dept: "" }); // reset form
    }
  };

  // Delete student
  const handleDelete = (index) => {
    const newList = [...students];
    newList.splice(index, 1);
    setStudents(newList);
  };

  // Edit student
  const handleEdit = (index) => {
    setStudent(students[index]);
    setEditIndex(index);
  };

  // Update student
  const handleUpdate = () => {
    const updatedList = [...students];
    updatedList[editIndex] = student;
    setStudents(updatedList);
    setStudent({ id: "", name: "", dept: "" });
    setEditIndex(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Details Form</h2>

      <input
        type="text"
        name="id"
        placeholder="Student ID"
        value={student.id}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={student.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="dept"
        placeholder="Department"
        value={student.dept}
        onChange={handleChange}
      />

      {editIndex === null ? (
        <button onClick={handleAdd}>Add Student</button>
      ) : (
        <button onClick={handleUpdate}>Update Student</button>
      )}

      <h3>Student List</h3>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu, index) => (
            <tr key={index}>
              <td>{stu.id}</td>
              <td>{stu.name}</td>
              <td>{stu.dept}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
