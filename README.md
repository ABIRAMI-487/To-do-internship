# 📝 React To-Do

A task management application that stores all tasks in the browser, so data is retained after a page refresh.

## 👩‍💻 Internship Details

| Field | Details |
|---|---|
| Intern ID | CITS9910 |
| Full Name | ABIRAMI M |
| Duration | 04 Weeks |
| Project Name | React To-Do with LocalStorage |
| Project Scope | Build a task management application that allows users to add, edit, complete, delete and filter tasks, with data persisted in the browser using the LocalStorage API. |

## 🎯 Objectives

- Implement full CRUD operations in a React application.
- Persist application data with the Web LocalStorage API.
- Work with controlled inputs, lists and keys.
- Apply component-based design.

## ✨ Features

- Add new tasks.
- Edit tasks inline by double-clicking or using the edit button.
- Mark tasks as completed or active.
- Delete individual tasks.
- Filter tasks by All, Active or Completed.
- Display the number of remaining tasks.
- Clear all completed tasks in one action.
- Automatic saving to LocalStorage on every change.

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| Library | React 18 |
| Build Tool | Vite 5 |
| Styling | CSS3 |
| Persistence | Web LocalStorage API |

## 📋 Prerequisites

- Node.js (LTS version)
- A modern web browser

## 🚀 Installation and Usage

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in the browser.

To create a production build:

```bash
npm run build
npm run preview
```

## ⌨️ Keyboard Shortcuts

| Action | Shortcut |
|---|---|
| Save an edited task | Enter |
| Cancel editing | Escape |

## 📁 Project Structure

```
06-todo-localstorage
├── src
│   ├── App.jsx
│   ├── TodoItem.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 📚 Key Learnings

- Lazy state initialization to read stored data on first render.
- Synchronizing state with LocalStorage using `useEffect`.
- Rendering lists with unique keys.
- Controlled form inputs and event handling.

## 🔮 Future Enhancements

- Add due dates, priorities and categories.
- Support drag-and-drop reordering.
- Add user accounts with cloud synchronization.

## 🔧 Troubleshooting

| Issue | Resolution |
|---|---|
| `npm` is not recognized | Install Node.js and restart the editor. |
| Blank page on opening `index.html` | Run the project with `npm run dev`. Do not open the file directly. |
| Tasks are missing | Browser data was cleared. LocalStorage is specific to each browser. |

## 👤 Author

ABIRAMI M
Intern ID: CITS9910
