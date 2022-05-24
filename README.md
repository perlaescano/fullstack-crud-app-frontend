# fullstack-crud-app-frontend


Group members:\
Eric Dittus @ericdittus\
Perla Escano Estrella @perlaescano\

Goal:
Using Node, Express, React, Redux, PostgreSQL, and Sequelize, build a RESTful full-stack web application to manage courses and instructors. This will cover all of the CRUD operations: Create, Read, Update, and Delete. This will encompass writing models, querying a database with an ORM, designing routes/endpoints and handler functions to process user requests and generate responses, writing out React Components, managing the state of the application with React-Redux, and much more. This will also involve having two individual repositories/applications (a separate server and a separate client), which encourages separation of concerns and modularity. 

* Unfortunately, we were unable to get to real-time error messages as a part of the key functionality of our project. We have a few ideas to implement it. We were also unable to test whether or not we could add another instructor in real-time, without refreshing. Other than that, we have implemented the code for most functionality, but had trouble relaying it for some visualizations on the website.

As a user I:
* [x] will land on a visually pleasing homepage by default, which allows navigation to view all courses and all instructors
* can navigate to all instructors view, and
   * [x] see a list of all instructors in the database
   * [x] see an informative message if no instructors exist
   * [x] add a new instructor
   * [ ] with a validated form displaying real-time error messages


* can navigate to a single instructor view, and
   * [x] see details about a single instructor, including courses they teach (if any) 
   * [x] see an informative message if no courses belong to that instructor
   * [x] can navigate to single course view (see below)
   * [x] delete the instructor 
   * [x] edit instructor information (including adding/removing courses)
   * [ ] with a validated form displaying real-time error messages


* can navigate to all courses view, and
   * [x] see a list of all courses in the database
   * [x] see an informative message if no courses exist
   * [x] add a new course
   * [ ] with a validated form displaying real-time error messages


* can navigate to a single course view, and
   * [x] see details about a single course, including the instructor
   * [x] should display “Staff” if the course is not assigned an instructor
   * [x] navigate to single instructor view of the course’s instructor
   * [x] delete the course
   * [x] edit the course’s information (including instructor )
   * [ ] with a validated form displaying real-time error messages


Technical breakdown of requirements:


All instructors and All courses 


Database (Sequelize) 
- [x] Write a `instructors` model with the following information:   
 
- [x] firstname  
- [x] lastname 
- [x] department 
- [x] imageUrl


- [x] Write a `courses` model with the following information:  
- [x] title 
- [x] timeslot
- [x] location


- [x] courses may be associated with at most one instructor
- [x] instructors may be associated with many courses  


API (Express, Sequelize)
- [x] Write a route to serve up all courses 
- [x] Write a route to serve up all instructors  


State management (Redux)
- [x] Write a instructors sub-reducer to manage instructors in your Redux store 
- [x] Write a courses sub-reducer to manage courses in your Redux store


UI (React)
- [x] Write a component to display a list of all instructors (just their names and images) 
- [x] Write a component to display a list of all courses (just their names)


Client-side routing (React-Router)
- [x] Display the all-instructors component when the url matches `/instructors`
- [x] Display the all-courses component when the url matches `/courses` 
- [x] Add links to the navbar that can be used to navigate to the all-instructors view and the all-courses view


Single course and Single instructor 


API (Express, Sequelize)
 - [x] Write a route to serve up a single instructor (based on their id), including that instructor’s courses
 - [x] Write a route to serve up a single course (based on its id), including that course's instructor


UI (React)
- [x] Write a component to display a single instructor with the following information:  
- [x] The instructor's name, image, and department
- [x] A list of all courses that instructor is assigned 
- [x] Write a component to display a single course with the following information:   
- [x] The course title, timeslot, and location
- [x] The name of the instructor 




Client-side routing (React-Router)
- [x] Display the appropriate instructor's info when the url matches `/instructors/:instructorId`
 - [x] Clicking on a instructor from the all-instructors view should navigate to show that instructor in the single-instructor view
 - [x] Display the appropriate course when the url matches `/courses/:courseId`
 - [x] Clicking on a course from the all-courses view should navigate to show that course in the single-course view  
- [x] Clicking on the name of a course in the single-instructor view should navigate to show that course in the single-course view
 - [x] Clicking on the name of a instructor in the single-course view should navigate to show that instructor in the single-instructor view    


Editing a instructor and Editing a course 


API (Express, Sequelize)
 - [x] Write a route to edit a new instructor 
- [x] Write a route to edit a new course  


UI (React) 
- [x] Write a component to display a form for editing an instructor’s information
- [x] Display this component EITHER as part of the single-instructor view, or as its own view
 - [x] Submitting the form with should:   
- [x] Make a request that causes the instructor to be updated in the database   
- [x] Display the updates without needing to refresh the page  


- [x] Write a component to display a form for editing a course
- [x] Display this component EITHER as part of the single-course view, or as its own view
 - [x] Submitting the form with a should:   
- [x] Make a request that causes the course to be updated in the database   
- [x] Display the updates without needing to refresh the page  


Adding course and Adding instructor


API (Express, Sequelize)
 - [x] Write a route to add a new instructor 
- [x] Write a route to add a new course  


UI (React ) 
- [x] Write a component to display a form for adding a new instructor that contains inputs for at least the name and address. 
- [x] Display this component EITHER as part of the all-instructors view, or as its own view
 - [x] Submitting the form with a valid name/address should:   
- [x] Make a request that causes the new instructor to be persisted in the database   
- [ ] Add the new instructor to the list of instructors without needing to refresh the page  


- [x] Write a component to display a form for adding a new course that contains inputs for at least first name, last name and email 
- [x] Display this component EITHER as part of the all-courses view, or as its own view
 - [x] Submitting the form with a valid first name/last name/email should:   
- [x] Make a request that causes the new course to be persisted in the database   
- [ ] Add the new course to the list of courses without needing to refresh the page  


Removing a instructor and Removing a course


API (Express, Sequelize) 
- [x] Write a route to remove a instructor (based on its id) 
- [x] Write a route to remove a course (based on their id)  


UI (React)
- [x] In the all-instructors view, include an `X` button next to each instructor 
- [x] Clicking the `X` button should:   
- [x] Make a request that causes that instructor to be removed from database   
- [x] Remove the instructor from the list of instructors without needing to refresh the page  
- [x] In the all-courses view, include an `X` button next to each course
- [x] Clicking the `X` button should:   
- [x] Make a request that causes that course to be removed from database   
- [x] Remove the course from the list of courses without needing to refresh the page
