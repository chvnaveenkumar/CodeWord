# Project Charter: Code Word Project (Team C and Team D)

This is the project charter for the Code Word.
This application will be delivered as a web application. (e.g. web, iOS, Android)

- [View Published Version](https://chvnaveenkumar.github.io/CodeWord/)
- [Source Code](https://github.com/chvnaveenkumar/CodeWord)

Update the links above and add team name, year, semester, course, or other important project information

## Client

Clients include:

- Dr. Charles Hoot, <hoot@nwmissouri.edu>

## Mentor

Mentors include:

- Dr. Denise Case, <dcase@nwmissouri.edu>

## Collaborator

Collabrators include:

- Naveen Kumar Chandaluri, <S530742@nwmissouri.edu>
- Shivani Reddy Dodla, <S531496@nwmissouri.edu>
- Sreelekha Vijaya, <S531382@nwmissouri.edu>
- cherukuru Chaithanya, <S531495@nwmissouri.edu>
- Ujjawal Kumar, <S530473@nwmissouri.edu>
- Anurag Kumar, <S531372@nwmissouri.edu>
- Srimai Reddy Yanala, <S531384@nwmissouri.edu>
- Vyshnavi Yalamareddy, <S531383@nwmissouri.edu>
- Sravya Kancharla, <S531500@nwmissouri.edu>

## Project Purpose

- This project involves creating an app that issue confidential codewords to each student in a course.
- Course instructors must not know what code word is given to each student.

## Benefits

1. Instead of printing out a separate codeword and distributing it among the students, the process is automated which will generate the codewords for all the students in a particular course.
2. It is generating the new codeword each time a student enrolls the course.
3. It makes it easy for the student as they need not memorize the codeword.

## User Roles

This application is used by students.

1. Administrators
2. Professors
3. Students

## Stories by Role

**Administators**
1. Admin should be able to login the website.
2. Admin can grant access to student and instructor.
3. Admin can approve any changes made by the instructor.

**Students**
1. Student should be able to login the website.
2. Student can need to select the course to get the codeword.

**Instructor**
1. Instructor should be able to login the website.
2. Instructor can add new course and upload excel sheet with student details (student ID’s, names and course ID) for each course.
3. Instructor can delete the existing course for students if needed.

## Team Organization

This team is organized as follows.
  
|                        | Primary                            | Secondary          | Content |
| ---------------------- | ---------------------------------- | ------------------ |---------|
| client manager         | Ujjwal Kumar                       |  Sreelekha Vijaya  | Team meetings,keeps notes,Contacting client  |
| architectural team     | Naveen Chandaluri,Shivani Reddy    |  Sravya Kancharla  | Technical implementation decisions, responsible for choosing platform, tools, frameworks, libraries, and deployment |
| project management team| Sreelekha Vijaya                   |   Shivani reddy  |  Team deadlines and progress is being made and reported to mentors and the client lead |
| scrum masters          | Ujjwal Kumar, Anurag Kumar         |  Naveen Chandaluri | Making sure tasks are entered, assigned, completed, and tracked correctly in Jira |
| UX design team         | Vyshnavi Yalamareddy,Srimai Yanala |  Shivani Reddy     | Choosing colors and branding for the app and verifying the look & feel with the client manager and/or NW website team  |
| development team       | Naveen Chandaluri, Naveen Kumar Nuggu, Vyshnavi Yalamareddy|Srimai Yanala, Anurag Kumar, Sravya Kancharla,Shivani Reddy                       To plan and perform the implementation |
| marketing team         | Sreelekha Vijaya,Anurag Kumar               |Srimai Reddy        | Advertising your app, your clients, and your team and periodically posting project-related progress and events on social media |
| quality assurance and client acceptance| Chaithanya Cherukuru|Naveen Kumar Nuggu| Unit tests and perform critical testing 

## Scope

### Phase 1 - Conception and initiation (Module 1)

Phase 1 will include the development of a detailed Project Charter to be presented in Markdown with in-line images and tables (not Word). It will include at least the following sections.

* Overview
* Purpose
* Benefits
* Stories
* scope 
* User experience sketches
* E-R diagram
* Sample data
* Risks and assumptions

Deliverables:

- Project charter
- Supporting artifacts (as described in this document)
- Contract (link - the contract will reference this charter and supporting documents)

This phase includes the development of:

This phase includes the development of:

- Initial acceptance criteria
- [E-R diagram](https://github.com/chvnaveenkumar/CodeWord/blob/Developer/Documentation/ErDiagram.png)
- [Project Sketches](https://github.com/chvnaveenkumar/CodeWord/tree/Developer/Documentation/Sketches)
- [RFP Document](https://github.com/profcase/rfp-codewords/blob/master/index.md)

E-R Diagram:

- [E-R Diagram](https://github.com/chvnaveenkumar/CodeWord/blob/Developer/Documentation/ErDiagram.png)

## sample table

Student Table

|Student ID	|Course ID	|Student Name   |Codeword         |
|-----------|----------|---------------|-----------------|
|S531482	   |CSE1023	  |WILLIAM	       |Whale_ Blue      |
|S531483	   |CSE1024	  |JOHN	          |Shark_ whale     |
|S531484	   |CSE1025	  |GEORGE	        |Elephant_ African|
|S531485	   |CSE1026	  |THOMAS	        |Elephant_ Indian |
|S531486	   |CSE1027	  |ARTHUR	        |Giraffe_ male    |
|S531487	   |CSE1028	  |JAMES	         |Mule             |

Login Table

|UserName	  |Password	|Status |
|-----------|---------|-------|
|WILLIAM	   |MARY	    |s      |
|DAVID	     |ANN	     |s      |
|BRIAN	     |JEAN	    |s      |
|DAVID	     |ANN	     |s      |
|JAMES	     |SUSAN	   |s      |

CodeWord Table

| Codewords | GroupName |
|-----------|-----------|
| Africa    | Default   |
| Almond    | Default   |
| Anger     | Default   |
| America   | Default   |
| Bravo     | 44561_codeWord   |
| Bank      | 44561_codeword   |
| Bounce    | 44561_codeword   |
| Bigger    | 44561_codeword   | 
| Computer  | 44562_codeword   |
| Cancer    | 44562_codeword   |
| Chair     | 44562_codeword   |

Instructor Table

| Instructor ID | Course Name |
|---------------|-------------|
| Dr.Case       | Web App 01  |
| Dr.Caase      | GDP 1       |
| Dr.Hoot       | Android     |
| Dr.Hoot       | IOS         |

Sketches:

![Sketches1](/Documentation/Sketches/Sketches1.png)
![Sketches2](/Documentation/Sketches/Sketches2.png)
![Sketches3](/Documentation/Sketches/Sketches3.png)
![Sketches4](/Documentation/Sketches/Sketches4.png)

### Phase 2 - Definition and planning (Module 2 and 3)

During Phase 2, the best parts of each platform-specific charter will be used to create a single, 
consolidated charter that allows different platforms to share fundamental aspects such as the E-R diagram and 
sample data.

Deliverables:

- Combined project charter
- Integrated supporting artifacts (taking the best from Phase 1)

Include:

- Final stories by role (see above)
- Final acceptance criteria (see above)
- Final E-R diagram (link)
- Detailed project sketches by platform (link - images must be displayed)
- Architectural decisions, including platforms, languages, frameworks, libraries, cloud resources, data stores, releases, milestones, authentication, authorization, responsive supports, progressive supports, security, performance requirements, traditional or SPA, client-side rendering vs server-side rendering, REST vs GraphQL, web vs native vs hybrid, etc.
- List of projects with versions in JIRA
- Schedules for sprints, client presentations, milestones and acceptance criteria in JIRA
- Construction of product backlogs built from epics, stories, tasks, and subtasks in JIRA

### Phase 3 - Implementation of architectural prototypes (Module 4 and 5)

During Phase 3, new teams will be defined to work in parallel (again in friendly competition) to build platform-specific architectural prototypes to identify any major issues with the plan. 

Deliverables:

- Updated versions of all artifacts
- JIRA management system
- Working prototype deployed in each proposed platform
- Presentation of architectural prototype to client and extended team (include pros & cons of these choices).
- Together with the client decide what platform(s) will be selected for implementation.
- Client acceptance of the plan

### Phase 4 - System requirement specification (Module 6)

Based on the results and lessons learned during the architectural prototypes, finalize the requirements to be used during the coming implementation phase.

Finalize implementation plan (including all remaining phases along with scope, schedule, and budget by phase).

Deliverables:

- Complete implementation plan for next semester.
- Suggested project organization for next semester.
- Signed acceptance by the client with comments.

## Out of scope

The following items are specifically not included in this scope of work:

- We can access the application offline once the webpage is loaded in the browser.
- If we have the appropriate resources and time, we will deploy it into the canvas.

## Schedule

The following general schedule will be followed:

Phase1:

Following are the tasks completed in week 1:
- Created repository and collaborated with the team members.
- Analyzed Scope of the project
- Designed ER diagram
- Populated Sample data
- Benefits of the project
- Added project related documents into the cloud repository

Following are the tasks need to be completed in week 2:

- Reviewing and modifying the documents if needed.
- Meeting the client to know the requirements of the project.


- Phase 2 completed and presented at the end of week 7.
- Client feedback and updates completed at the end of week 8.
- Phase 3 completed and presented at the end of week 12.
- Client feedback and updates completed at the end of week 13.
- Phase 4 finalized and published at the end of week 14.
- Client feedback and updates completed at the end of week 15.
- Project reflections and discussions completed during week 16.

You will develop the schedule for next semester as part of this work. 

The complete schedule is shown in the following Gantt chart:
- Display or link to the current project Gantt chart 
- Schedule by work tasks by phase
- Include through final implementation (next semester)
- Include durations, dependencies, and key milestones

## Budget

Bill estimation:

| Week | No of Hours Worked | Wage Rate | Bill for per Person | No of Persons | Total Bill |
|------|--------------------|-----------|---------------------|---------------|------------|
| 1    | 16                 | 70        | $ 1,120             | 10             | $ 11,200  |
| 2    | 15                 | 70        | $ 1,050             | 10             | $ 10,500  |
| 3    | 16                 | 70        | $ 1,120             | 10             | $ 11,200  |
| 4    | 17                 | 70        | $ 1,190             | 10             | $ 11,900  |
| 5    | 17                 | 70        | $ 1,190             | 10             | $ 11,900  |
| 6    | 18                 | 70        | $ 1,260             | 10             | $ 12,600  |
| 7    | 18                 | 70        | $ 1,260             | 10             | $ 12,600  |

## Risk

The following have been identified as risks that could contribute to not making scope, budget, or schedule:
- The client changes requirements mid-project...
- Early and effective communication of project issues to organization and project stakeholders.
- An effective team building tool, as team buy-in and acceptance is assured.
- Inadequate funding from the client.
- Conflicts between the team members.
- Delay of project completion due to unavailability of resources.
To control Risk management we have to follow certain principles:

The organization-mandated risk management framework is reviewed and tailored to define the project risk management plan when the project is initiated. The risk management plan includes these definitions and guidelines:

- List of possible risk sources and categories
- Impact and probability matrix
- Risk reduction and action plan
- Risk threshold and metrics

## Acceptance criteria

- For each story, enumerate and clearly describe the acceptance criteria. 
- Be specific - your client may have a very different definition of vague words. 
- Backup and Restore testing have to been completed successfully.
- All requirements have to be formally approved.
- User acceptance testing (UAT) has to be completed.
- The Senior User/Project Executive has to be signed off on user acceptance testing.
- For each story, enumerate and clearly describe the acceptance criteria.
- Be specific - your client may have a very different definition of vague words.
How to run our Project?

git clone https://github.com/chvnaveenkumar/CodeWord.git
Now open our project in Visual Studio and

Use npm install if node.js is already installed. if node.js is not installed go to this link(https://nodejs.org/en/) and install node.js and hit the command

After step 2 set path to client (cd ..\Client) and use npm install command to install all the dependency modules in the project which is used in package.json.

In Client use command cd '.\build.js' hit npm run build to run the project.

And get back use cd .. command to get back.

Now start the Server using npm start

Now open chrome and use localhost:8080

Screenshots:




© 2018 GitHub, Inc.