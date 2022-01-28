# Todo-groupped-tasks

## Create react-app

## installations
- install Sass
- install uuid

## Connect API
- call the api with fetch

## Components 
- I have created 3 Components
### Tasks Component
- useState to change the state from close to open
- I created a toggle function to manage the state
- I have mapped the tasks to get acces to their description and checked value
- Using an input with type='checkbox' I have implemented the check task functionality
- Using an onChange function I have implemented the actions of the checkbox (false or true) using the function markTaskAsDone() created in app.tsx and passed as a prop
- I have use the method every() to check if all task are checked in a group
### Dropdown Component
- In this Component I have mapped the api(selection) to get the firt level
- I have called TasksComponent and passed the props.
### ProgressBar
- I have created the progress bar with the <progress> tag
- The value of this progress bar is implemented with the nomalize state, created in app.tsx
## aap.js 
- useState for selection (checkboxes) initialize with an empty array
- useState for normalize value (progressBar) initialize with 0
- I have created the function markTaskAsDone. I have mapped twice to get the level of checked value and do son conditionals in order to get the value of checked in all cases
- I have created the function sumAllValuesTask. Using reduce method I can have total number of the values value.
- I have created the function sumAllCheckedTasks. Using the same logig of sumAllValuesTask and adding a conditional I can have the value of all checked tasks
- I have created a fuction to calculet the normalize formula and pass this result to the normalize state.
- useEffect let me get the data from the api. I have mapped to it twice to get the single task level and return the data with an id using uuidv4()
- I have created a second useEffect to call all the functions I have created
- In the return I just create the structure, add the components and pass the props

