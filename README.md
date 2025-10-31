# 📝 ToDoApp (PERN Stack)

A full-stack **ToDo application** built using the **PERN stack** — **PostgreSQL**, **Express.js**, **React.js**, and **Node.js**.  
This project demonstrates how to create, read, update, and delete (CRUD) tasks while connecting a React frontend with a PostgreSQL-powered backend.

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

ToDoApp/
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
git clone https://github.com/<your-username>/todoapp-pern.git
cd ToDoApp

Install dependencies:

npm install

Start the server:

nodemon index.js

Open in browser:

http://localhost:3000


Made with ❤️ by Suresh Kumar Prajapat C