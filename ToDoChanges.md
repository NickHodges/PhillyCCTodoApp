# List of changes to the ToDo Application by step

## Step 1

### Lesson

- See the basic construction of an Angular application

### Changes

- Changed index.html to use Bootstrap
- Added title
- Changed to app.component.html to be basic template

## Step 2

### Lesson

- Build a backend server with json-server
- `npm -g install json-server`
- Check functionality at `http://localhost:3000`

## Step 3

### Lesson

- Add new component via `ng generate component NavBar`
- Use Angular tag to make component appear

### Changes

- Added NavBar component
- Used Bootstrap component to build it
- Links are empty at this point
- Update app.module.ts to use NavBarComponent
- Put component name in `[declarations]` section

## Step 4

### Lesson

- Adding components and routing for basic page functionality

### Changes

- Added `routes` file
- Added `<router-outlet>` tag
- Added components for each route
- Updated imports in `app.module.ts`
- Updated `styles.css` to set container styles

## Step 5

### Lesson

- Add `todo` class
- Add Todo Service to access API
- Dependency Injection of services

### Changes

- Added `todos.ts`
- Added `todo-data.service.ts`
- Updated `app.module.ts` for HTTP modules
- Inject `ToDoDataService`

## Step 6

### Lessons

- Accessing API and displaying data
- Databinding in HTML file
- Observables
- async

### Changes

- Update to the all-tasks component
- Added `ngIf` and `ngFor` directives

## Step 7

### Lessons

- Display Todos by complete/incomplete

### Changes

- Added completed/incompleted methods to Todo page and to DataService
- Updated HTML to display Todos

## Step 8

### Lessons

- Add a component to add Todos
- Display component in Todo checklist page
- Add EventEmitter to notify lists that things have changed

### Changes

- Added AddToDoComponent, with code to input and add
- Add EventEmitter
- Add FormsModule to NgModule imports

## Step 9

### Lession

- Add ability to mark a Todo as done

### Changes

- Added checkbox to mark item complete
- Added makeComplete method to update Todo

## Step 10

### Lesson

- Add abilty to mark complete Todo as uncomplete.

### Changes

- Add `onclick`

## Step 11

### Lesson

- Delete a Todo

### Changes

- Added big red 'X' to delete a Todo item
- Add `removeTodo` to delete a todo entirely

## Step 12

### Lesson

- Add ability to edit an incomplete todo in place

### Changes

- update HTML to add an input box when you click on an item
- Code to update the text of an incomplete todo

## Step 13

### Lesson

- Use the Angular Material interface

### Changes

- Major changes to HTML and code
- Update CSS, index.html for material

## Step 14

### Lesson

- Notice changes to todo items with Material tab sheet

### Changes

- Add code to see changes when the tabs change

## Step 15

### Lesson

- Add Contact Form with basic validation

### Changes

- New component for contact form
- New Contact tab
- Basic validation of form data
- onSubmit code to output form data to console

## Step 16

### Lessons

- Build email component with Material Design

### Changes

- Add email component
- Embed in Contact HTML

## Step 17

### Lesson

- Componentize the entire Contact Form, including Material Design with error messages

### Changes

- Add components for each input
- update Contact HTML

## Step 18

### Lesson

- Add custom validation

### Changes

- Add phone number validator
- Use in HTML/code
- Disable Submit button if form is not valid

## Step 19

### Lesson

-Refactor to Modules

### Changes

- Add Todo module
- Add Shared module
- Added Input module