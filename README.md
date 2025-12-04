# Chatgpt Tracker

A task tracker made with 100% chatgpt code. 

![UI Example](./images/UIExample.png)

## Installation

After cloning the repository:
```
git clone https://github.com/Skrypak/SlopTracker.git
cd SlopTracker
```

Install all dependencies (root, client, and server):
```
npm install          # installs root-level tools like npm-run-all
npm install --prefix client
npm install --prefix server
```

Alternatively, run them individually:
Root: 
```
npm install
```
Client:
```
cd client && npm install
```
Server:
```
cd server && npm install
```

## Running the project

From the root folder, run:
```
npm start
```

This will:

Start the client (start:client)

Start the server (start:server)

Run them in parallel using npm-run-all

Make sure your root package.json contains:
```
{
  "scripts": {
    "start": "npm-run-all --parallel start:client start:server",
    "start:client": "npm --prefix client start",
    "start:server": "npm --prefix server start"
  }
}
```
## Project Structure

As proposed by chatgpt

```
project-root/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskList.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   └── AddTaskForm.jsx
│   │   ├── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── routes/
│   │   └── tasks.js
│   ├── controllers/
│   │   └── tasksController.js
│   ├── services/
│   │   └── taskStorage.js
│   ├── data/
│   │   └── tasks.json
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Stack

**Client:**
- React
- Webpack
- Babel

**Server:**
- Node.js
- Express

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/[id]` | Update a task |
| DELETE | `/api/tasks/[id]` | Delete a task |
