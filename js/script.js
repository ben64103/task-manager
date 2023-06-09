
const addTaskInput = document.getElementById('addInput')

let recentDate = new Date()

// Initialize empty array where object is to be stored
let tasksArray = JSON.parse(localStorage.getItem('tasks')) || []

function addTasks() {
  // Object for each task
  let task = {
    taskName: addInput.value,
    taskDate: recentDate.toLocaleDateString()
  }

  // Add object(task) to array
  tasksArray.push(task)
  // Add items to local storage
  localStorage.setItem('tasks', JSON.stringify(tasksArray))
  // add function createTask
  createTasks()
//   deleteTask(task)
}

function createTasks(){
  // Where tasks is to be displayed
  const tableDisplay = document.getElementById('table-display')
  tableDisplay.innerHTML = ''

  tasksArray.forEach((taskElement, index) => {
    // code for each task
    tableDisplay.innerHTML += `
      <div class="task row px-3 mb-2">
        <div class="col-md-2 col-sm-1">
          ${index}.
        </div>
        <div class="col-md-5 col-sm-7">
          <div class="d-flex align-items-center justify-content-around">
            ${taskElement.taskName}
          </div>
        </div>
        <div class=" col-md-2">${taskElement.taskDate}</div>
        <div class="col-md-3 col-sm-4">
          <button class="border border-0 bg-warning px-4">Edit</button>
          <a href="" onclick="removeItem(${index})" class="text-decoration-none text-danger" id="delete">×</a>
        </div>
      </div>
    `

    
  })
    
  }
  const delItem = document.getElementById('delete')
//   delItem.addEventListener("click", removeItem)
  function removeItem(index){
    tasksArray.splice(index, 1)

    // update the local storage
    localStorage.setItem('tasks', JSON.stringify(tasksArray))

    createTasks()
  }
createTasks()


