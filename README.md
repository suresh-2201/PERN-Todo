# 📝 ToDoApp (PERN Stack)

A full-stack **ToDo web application** built using the **PERN stack** — **PostgreSQL**, **Express.js**, **React.js**, and **Node.js**.  

This project showcases the complete workflow of a modern full-stack application, demonstrating how to **create, read, update, and delete (CRUD)** tasks using a PostgreSQL database as the persistent storage layer and a React-based frontend for the user interface.

The **frontend** is developed with **React.js**, providing a smooth, dynamic, and responsive user experience. It uses React Hooks like `useState` and `useEffect` to handle state management and side effects efficiently. The interface allows users to easily add new tasks, edit existing ones, and delete completed items — all updated in real time.

The **backend** is powered by **Node.js** and **Express.js**, which together serve as a RESTful API. Each operation (add, read, edit, delete) is exposed through dedicated API endpoints that interact with the PostgreSQL database securely using the `pg` library. The server efficiently manages data transactions, validates requests, and handles communication between the client and database.

The **database layer** is implemented using **PostgreSQL**, storing each to-do item in a structured and relational format. The backend uses SQL queries to perform insertions, updates, deletions, and selections through a connection pool for optimized performance.

This project demonstrates the ability to:
- Design and implement a **frontend–backend integrated system**
- Build and consume **RESTful APIs**
- Perform **CRUD operations** on a relational database
- Handle **asynchronous requests** using `async/await`
- Maintain a clean, modular, and scalable project structure

Overall, **ToDoApp (PERN Stack)** is a practical and fully functional example of a full-stack web application, built to strengthen understanding of how different layers of modern web development work together to deliver a seamless user experience.


---

## 💡 Why I Built This Project

I built this project to strengthen my understanding of **full-stack web development** using the PERN stack.  
It helped me learn how the **frontend (React)** interacts with the **backend API (Express + Node.js)** and how data is stored and managed in **PostgreSQL**.  
This project showcases my ability to integrate multiple technologies into a real-world, fully functional web application.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React.js, HTML5, CSS3 |
| **Backend** | Node.js, Express.js |
| **Database** | PostgreSQL |
| **Tools & Libraries** | npm, Git, VS Code, dotenv, cors, nodemon |

---

## 📁 Project Structure

ToDoApp/</br>
│</br>
├── client/ # React Frontend </br>
│ ├── public/</br>
│ │ └── index.html</br>
│ └── src/</br>
│ ├── Components/</br>
│ │ ├── InputTodo.js</br>
│ │ ├── ListTodo.js</br>
│ │ └── EditTodo.js</br>
│ ├── App.js</br>
│ ├── index.js</br>
│ └── index.css</br>
│</br>
├── server/ # Express Backend</br>
│ ├── db.js</br>
│ ├── index.js</br>
│ └── .env</br>
│</br>
├── .gitignore</br>
├── README.md</br>
└── package.json</br>


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/suresh-2201/PERN-Todo.git 
cd PERN ToDoApp

For backend:

cd server
npm install


For frontend:

cd ../client
npm install

Run the Project

Open two terminals — one for backend and one for frontend.

Backend

cd server
npm start


Frontend

cd client
npm start

Then open your browser and visit 👉 http://localhost:3000

Made with ❤️ by Suresh Kumar Prajapat C