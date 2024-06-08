document.addEventListener("DOMContentLoaded", function() {
    // Function to create a task card
    function createTaskCard(task) {
        // Create the card element
        var card = document.createElement("div");
        card.classList.add("card");

        // Create the card body
        var cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        // Create the title element
        var cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = task.title;

        // Create the description element
        var cardDescription = document.createElement("p");
        cardDescription.classList.add("card-text");
        cardDescription.textContent = task.description;

        // Create the priority element
        var cardPriority = document.createElement("p");
        cardPriority.classList.add("card-text");
        cardPriority.innerHTML = "<strong>Priority:</strong> " + task.priority;

        // Append elements to the card body
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardDescription);
        cardBody.appendChild(cardPriority);

        // Append card body to card
        card.appendChild(cardBody);

        return card;
    }

   // Example tasks
    var exampleTasks = [
        {
            title: "Example Task 1",
            description: "This is an example task description 1.",
            priority: "High"
        },
        {
            title: "Example Task 2",
            description: "This is an example task description 2.",
            priority: "Medium"
        }
    ];

    // Get the task list container
    var taskListContainer = document.getElementById("taskList");

    // Loop through example tasks and create task cards
    exampleTasks.forEach(function(task, index) {
        // Create task card
        var taskCard = createTaskCard(task);
        // Append task card to task list container
        taskListContainer.appendChild(taskCard);
    });

    // Function to handle form submission
    function handleFormSubmission(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var title = document.getElementById("title").value;
        var description = document.getElementById("description").value;
        var priority = document.getElementById("priority").value;

        // Create task object
        var newTask = {
            title: title,
            description: description,
            priority: priority
        };

        // Create task card
        var taskCard = createTaskCard(newTask);

        // Append task card to task list container
        taskListContainer.appendChild(taskCard);

        // Send data to server (e.g., using fetch)
        fetch('/tasks/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add task');
            }
            return response.json();
        })
        .then(task => {
            // Optionally, handle successful response from server
            console.log('Task added successfully:', task);
        })
        .catch(error => {
            console.error('Error adding task:', error);
            // Optionally, provide feedback to the user (e.g., display an error message)
        });

        // Clear form fields
        event.target.reset();
    }

    // Get the task form
    var taskForm = document.getElementById("taskForm");

    // Add event listener for form submission
    taskForm.addEventListener("submit", handleFormSubmission);
});
