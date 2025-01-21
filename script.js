<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Manager</title>
    <style>
        body {
            font-family: "Fira Code", Consolas, "Courier New", monospace;
            margin: 20px;
            position: relative;
        }

        #dateTime {
            position: absolute;
            top: 20px;
            right: 20px;
            text-align: right;
            font-size: 18px;
            font-weight: bold;
        }

        #taskContainer {
            margin-top: 20px;
        }

        .task {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            background-color: #ffffff;
        }

        button {
            cursor: pointer;
        }

        #taskInput {
            margin-right: 10px;
            padding: 5px;
            font-size: 16px;
        }

        #taskForm {
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div id="dateTime">
        <div id="date"></div>
        <div id="clock"></div>
    </div>
    <h1>Task Manager</h1>
    <form id="taskForm" onsubmit="return false;">
        <input type="text" id="taskInput" placeholder="Enter task name">
        <button type="button" id="addTaskButton">Add Task</button>
    </form>

    <div id="taskContainer"></div>

    <script>
        const addTaskButton = document.getElementById('addTaskButton');
        const taskInput = document.getElementById('taskInput');
        const taskContainer = document.getElementById('taskContainer');
        const clock = document.getElementById('clock');
        const date = document.getElementById('date');

        // Add Task functionality
        function addTask() {
            const taskTitle = taskInput.value.trim();
            if (taskTitle) {
                const taskElement = document.createElement('div');
                taskElement.classList.add('task');

                const taskText = document.createElement('span');
                taskText.textContent = taskTitle;
                
                const completeButton = document.createElement('button');
                completeButton.textContent = 'Complete';
                completeButton.addEventListener('click', () => {
                    taskElement.remove();
                });

                taskElement.appendChild(taskText);
                taskElement.appendChild(completeButton);

                taskContainer.appendChild(taskElement);

                taskInput.value = ''; // Clear input field
            }
        }

        addTaskButton.addEventListener('click', addTask);

        taskInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                addTask();
            }
        });

        // Live clock functionality
        function updateClock() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            clock.textContent = `${hours}:${minutes}:${seconds}`;
        }

        // Live date functionality
        function updateDate() {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            date.textContent = now.toLocaleDateString(undefined, options);
        }

        setInterval(updateClock, 1000);
        updateClock(); // Initialize immediately
        updateDate(); // Initialize date
    </script>
</body>
</html>
