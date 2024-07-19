import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { TrashSimple } from "@phosphor-icons/react/dist/ssr";

export const Users = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      firstName: "Alcinda",
      lastName: "chirime",
      age: 27,
      residence: "Hulene",
      email: "example@example.com",
      phone: "123-456-7890"
    },
    {
      id: 2,
      firstName: "Joaquim",
      lastName: "Ubisse",
      age: 30,
      residence: "Mahotas",
      email: "example2@example.com",
      phone: "987-654-3210"
    }
  ]);

  const [searchParams] = useSearchParams();
  const [showModal, setShowModal] = useState(false);
  const [newStudentInfo, setNewStudentInfo] = useState({
    firstName: "",
    lastName: "",
    age: "",
    residence: "",
    email: "",
    phone: ""
  });

  // Função para filtrar estudantes com base na pesquisa
  function getFilteredStudents() {
    const searchString = searchParams.get("search");
    if (!searchString) {
      return students;
    } else {
      return students.filter(
        (student) =>
          student.firstName.toLowerCase().includes(searchString.toLowerCase()) ||
          student.lastName.toLowerCase().includes(searchString.toLowerCase())
      );
    }
  }

  // Função para adicionar um novo estudante
  const handleAdd = () => {
    setShowModal(true);
  };

  // Função para salvar o novo estudante
  const saveNewStudent = () => {
    const newStudent = {
      id: students.length + 1,
      ...newStudentInfo
    };
    setStudents([...students, newStudent]);
    setNewStudentInfo({
      firstName: "",
      lastName: "",
      age: "",
      residence: "",
      email: "",
      phone: ""
    });
    setShowModal(false);
  };

  // Função para deletar um estudante pelo ID
  const handleDelete = (id) => {
    const updatedStudents = students.filter(student => student.id !== id);
    setStudents(updatedStudents);
  };

  const closeModal = () => {
    setShowModal(false);
    setNewStudentInfo({
      firstName: "",
      lastName: "",
      age: "",
      residence: "",
      email: "",
      phone: ""
    });
  };

  return (
    <>
      <Header />
      <main className="flex relative bottom-44 flex-col items-center justify-center min-h-screen">
  <h1 className="text-3xl font-bold mb-8">Lista de estudantes</h1>
  <button onClick={handleAdd} className="bg-black text-white border border-black px-4 py-2 mb-4 rounded-md">Adicionar Estudante </button>
  <div className="overflow-x-auto">
    <table className="bg-green-200 table-auto border-collapse">

      <thead>
        <tr className="bg-green-300">
          <th className="px-4 py-2">Nome</th>
          <th className="px-4 py-2">Apelido</th>
          <th className="px-4 py-2">Idade</th>
          <th className="px-4 py-2">Residência</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Contato</th>
          <th className="px-4 py-2">Ações</th>
        </tr>
      </thead>

      <tbody>
        {getFilteredStudents().map((student) => (
          <tr key={student.id}>
            <td className="border px-4 py-2">{student.firstName}</td>
            <td className="border px-4 py-2">{student.lastName}</td>
            <td className="border px-4 py-2">{student.age}</td>
            <td className="border px-4 py-2">{student.residence}</td>
            <td className="border px-4 py-2">{student.email}</td>
            <td className="border px-4 py-2">{student.phone}</td>
            <td className="border px-4 py-2">
              <button onClick={() => handleDelete(student.id)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"><TrashSimple/></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</main>

      {showModal && (
        <div className="modal bg-gray-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg p-6 w-96">
        <div className="modal-content">
          <span className="close text-gray-600 absolute top-2 right-2 cursor-pointer" onClick={closeModal}>&times;</span>
          <h2 className="text-xl font-bold mb-4">Adicionar Estudante</h2>
          <form onSubmit={saveNewStudent} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-sm font-medium text-gray-700">Primeiro Nome:</label>
              <input
                id="firstName"
                type="text"
                value={newStudentInfo.firstName}
                onChange={(e) => setNewStudentInfo({...newStudentInfo, firstName: e.target.value})}
                required
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Último Nome:</label>
              <input
                id="lastName"
                type="text"
                value={newStudentInfo.lastName}
                onChange={(e) => setNewStudentInfo({...newStudentInfo, lastName: e.target.value})}
                required
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="age" className="text-sm font-medium text-gray-700">Idade:</label>
              <input
                id="age"
                type="number"
                value={newStudentInfo.age}
                onChange={(e) => setNewStudentInfo({...newStudentInfo, age: e.target.value})}
                required
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="residence" className="text-sm font-medium text-gray-700">Residência:</label>
              <input
                id="residence"
                type="text"
                value={newStudentInfo.residence}
                onChange={(e) => setNewStudentInfo({...newStudentInfo, residence: e.target.value})}
                required
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email:</label>
              <input
                id="email"
                type="email"
                value={newStudentInfo.email}
                onChange={(e) => setNewStudentInfo({...newStudentInfo, email: e.target.value})}
                required
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700">Contato:</label>
              <input
                id="phone"
                type="text"
                value={newStudentInfo.phone}
                onChange={(e) => setNewStudentInfo({...newStudentInfo, phone: e.target.value})}
                required
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              />
            </div>
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">Salvar</button>
          </form>
        </div>
      </div>
      
      )}
      <Footer />
    </>
  );
}; 