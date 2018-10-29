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

User:

| EmailKey                | Fullname                          | Password | IsInstructor |
|-------------------------|-----------------------------------|----------|--------------|
| s531519@nwmissouri.edu  | Yashwanth Reddy Bommineni         | password | 0            |
| s530742@nwmissouri.edu  | Naveen Kumar Chandaluri           | password | 0            |
| s531495@nwmissouri.edu  | Chaithanya Cherukuru              | password | 0            |
| s531367@nwmissouri.edu  | Sai Sirisha Devineni              | password | 0            |
| s531496@nwmissouri.edu  | Shivani Reddy Dodla               | password | 0            |
| s531369@nwmissouri.edu  | Girish Guntuku                    | password | 0            |
| s531499@nwmissouri.edu  | Saicharan Gurudu                  | password | 0            |
| s531500@nwmissouri.edu  | Sravya Kancharla                  | password | 0            |
| s531372@nwmissouri.edu  | Anurag Kumar                      | password | 0            |
| s530473@nwmissouri.edu  | Ujjawal Kumar                     | password | 0            |
| s531439@nwmissouri.edu  | Dattu Bhargav Medarametla         | password | 0            |
| s531503@nwmissouri.edu  | Santosh Sekhar Muchkur Bogarajula | password | 0            |
| s531373@nwmissouri.edu  | Naveenkumar Nuggu                 | password | 0            |
| s531507@nwmissouri.edu  | Vijay Kumar Tupakula              | password | 0            |
| s531508@nwmissouri.edu  | Satya Sai Ram Vankina             | password | 0            |
| s531382@nwmissouri.edu  | Sreelekha Vijaya                  | password | 0            |
| mwoolery@nwmissouri.edu | Matthew Woolery                   | password | 0            |
| s531383@nwmissouri.edu  | Vyshnavi Yalamareddy              | password | 0            |
| s531384@nwmissouri.edu  | Srimai Reddy Yanala               | password | 0            |
| hoot@nwmissouri.edu     | Charles Hoot                      | password | 1            |
| dcase@nwmissouri.edu    | Denise Case                       | password | 1            |

User.js:

https://github.com/chvnaveenkumar/CodeWord/blob/Developer/model/model.user.js

Course:

| CourseNameKey       | EmailKey             | CodeWordSet       | Startdate | Enddate    | PreSurveyURL | PostSurveyURL |
|---------------------|----------------------|-------------------|-----------|------------|--------------|---------------|
| 2018 Fall 44-444-01 | hoot@nwmissouri.edu  | Hoot Original set | 8/27/2018 | 12/28/2018 |              |               |
| 2018 Fall 44-691-05 | dcase@nwmissouri.edu | Hoot Original set | 8/27/2018 | 12/28/2018 |              |               |
| 2018 Fall 44-542-02 | hoot@nwmissouri.edu  | Hoot Original set | 8/27/2018 | 12/28/2018 |              |               |
| 2018 Fall 44-563-04 | dcase@nwmissouri.edu | Hoot Original set | 8/27/2018 | 12/28/2018 |              |               |
| 2018 Fall 44-563-06 | dcase@nwmissouri.edu | Hoot Original set | 8/27/2018 | 12/28/2018 |              |               |
| 2018 Fall 44-563-07 | dcase@nwmissouri.edu | Hoot Original set | 8/27/2018 | 12/28/2018 |              |               |

Course.js:

https://github.com/chvnaveenkumar/CodeWord/blob/Developer/model/model.course.js

CourseStudents:

| CourseNameKey         | EmailKey                | Codeword  | Acknowledged |
|-----------------------|-------------------------|-----------|--------------|
| 2018   Fall 44-444-01 | s531519@nwmissouri.edu  | Africa    | 1            |
| 2018   Fall 44-444-01 | s530742@nwmissouri.edu  | Almond    | 1            |
| 2018   Fall 44-444-01 | s531495@nwmissouri.edu  | Anger     | 1            |
| 2018   Fall 44-444-01 | s531367@nwmissouri.edu  | America   | 1            |
| 2018   Fall 44-444-01 | s531496@nwmissouri.edu  | Bravo     | 0            |
| 2018   Fall 44-444-01 | s531369@nwmissouri.edu  | Bank      | 0            |
| 2018   Fall 44-444-01 | s531499@nwmissouri.edu  | Bounce    | 0            |
| 2018   Fall 44-444-01 | s531500@nwmissouri.edu  | Bigger    | 0            |
| 2018   Fall 44-444-01 | s531372@nwmissouri.edu  | Computer  | 1            |
| 2018   Fall 44-444-01 | s530473@nwmissouri.edu  | Cancer    | 1            |
| 2018   Fall 44-444-01 | s531439@nwmissouri.edu  | Chair     | 0            |
| 2018   Fall 44-444-01 | s531503@nwmissouri.edu  | Center    | 1            |
| 2018   Fall 44-444-01 | s531373@nwmissouri.edu  | Dagger    | 0            |
| 2018   Fall 44-444-01 | s531507@nwmissouri.edu  | Desk      | 1            |
| 2018   Fall 44-444-01 | s531508@nwmissouri.edu  | Dim       | 0            |
| 2018   Fall 44-444-01 | s531382@nwmissouri.edu  | Dog       | 1            |
| 2018   Fall 44-444-01 | mwoolery@nwmissouri.edu | Echo      | 0            |
| 2018   Fall 44-444-01 | s531383@nwmissouri.edu  | Elvis     | 1            |
| 2018   Fall 44-444-01 | s531384@nwmissouri.edu  | Extra     | 0            |
| 2018   Fall 44-691-05 | s531519@nwmissouri.edu  | Engage    | 1            |
| 2018   Fall 44-691-05 | s530742@nwmissouri.edu  | France    | 0            |
| 2018   Fall 44-691-05 | s531495@nwmissouri.edu  | Foxtrot   | 1            |
| 2018   Fall 44-691-05 | s531367@nwmissouri.edu  | Fancy     | 1            |
| 2018   Fall 44-691-05 | s531496@nwmissouri.edu  | Feline    | 0            |
| 2018   Fall 44-691-05 | s531369@nwmissouri.edu  | Golf      | 0            |
| 2018   Fall 44-691-05 | s531499@nwmissouri.edu  | Ginger    | 1            |
| 2018   Fall 44-691-05 | s531500@nwmissouri.edu  | Globe     | 0            |
| 2018   Fall 44-691-05 | s531372@nwmissouri.edu  | Germany   | 0            |
| 2018   Fall 44-691-05 | s530473@nwmissouri.edu  | Hotel     | 0            |
| 2018   Fall 44-691-05 | s531439@nwmissouri.edu  | Hanger    | 1            |
| 2018   Fall 44-691-05 | s531503@nwmissouri.edu  | Helmet    | 1            |
| 2018   Fall 44-691-05 | s531373@nwmissouri.edu  | Hidden    | 1            |
| 2018   Fall 44-691-05 | s531507@nwmissouri.edu  | Ice       | 0            |
| 2018   Fall 44-691-05 | s531508@nwmissouri.edu  | Inkspot   | 1            |
| 2018   Fall 44-691-05 | s531382@nwmissouri.edu  | Impulse   | 0            |
| 2018   Fall 44-691-05 | mwoolery@nwmissouri.edu | Igor      | 1            |
| 2018   Fall 44-691-05 | s531383@nwmissouri.edu  | Kilo      | 0            |
| 2018   Fall 44-691-05 | s531384@nwmissouri.edu  | Kangaroo  | 1            |
| 2018   Fall 44-542-02 | s531519@nwmissouri.edu  | Kennedy   | 1            |
| 2018   Fall 44-542-02 | s530742@nwmissouri.edu  | Lemon     | 1            |
| 2018   Fall 44-542-02 | s531495@nwmissouri.edu  | Lamp      | 0            |
| 2018   Fall 44-542-02 | s531367@nwmissouri.edu  | London    | 0            |
| 2018   Fall 44-542-02 | s531496@nwmissouri.edu  | Line      | 0            |
| 2018   Fall 44-542-02 | s531369@nwmissouri.edu  | Mink      | 1            |
| 2018   Fall 44-542-02 | s531499@nwmissouri.edu  | Mumbai    | 1            |
| 2018   Fall 44-542-02 | s531500@nwmissouri.edu  | Money     | 0            |
| 2018   Fall 44-542-02 | s531372@nwmissouri.edu  | Market    | 0            |
| 2018   Fall 44-542-02 | s530473@nwmissouri.edu  | Native    | 1            |
| 2018   Fall 44-542-02 | s531439@nwmissouri.edu  | Next      | 0            |
| 2018   Fall 44-542-02 | s531503@nwmissouri.edu  | November  | 1            |
| 2018   Fall 44-542-02 | s531373@nwmissouri.edu  | Nickel    | 0            |
| 2018   Fall 44-542-02 | s531507@nwmissouri.edu  | Object    | 1            |
| 2018   Fall 44-542-02 | s531508@nwmissouri.edu  | Option    | 1            |
| 2018   Fall 44-542-02 | s531382@nwmissouri.edu  | Onion     | 0            |
| 2018   Fall 44-542-02 | mwoolery@nwmissouri.edu | Ogre      | 1            |
| 2018   Fall 44-542-02 | s531383@nwmissouri.edu  | Papa      | 0            |
| 2018   Fall 44-542-02 | s531384@nwmissouri.edu  | Pencil    | 0            |
| 2018   Fall 44-563-04 | s531519@nwmissouri.edu  | Purple    | 1            |
| 2018   Fall 44-563-04 | s530742@nwmissouri.edu  | Pill      | 0            |
| 2018   Fall 44-563-04 | s531495@nwmissouri.edu  | Quick     | 1            |
| 2018   Fall 44-563-04 | s531367@nwmissouri.edu  | Quasar    | 1            |
| 2018   Fall 44-563-04 | s531496@nwmissouri.edu  | Quest     | 1            |
| 2018   Fall 44-563-04 | s531369@nwmissouri.edu  | Romance   | 1            |
| 2018   Fall 44-563-04 | s531499@nwmissouri.edu  | Redwood   | 0            |
| 2018   Fall 44-563-04 | s531500@nwmissouri.edu  | Rose      | 1            |
| 2018   Fall 44-563-04 | s531372@nwmissouri.edu  | Ring      | 1            |
| 2018   Fall 44-563-04 | s530473@nwmissouri.edu  | Steve     | 1            |
| 2018   Fall 44-563-04 | s531439@nwmissouri.edu  | Sender    | 0            |
| 2018   Fall 44-563-04 | s531503@nwmissouri.edu  | Saturn    | 1            |
| 2018   Fall 44-563-04 | s531373@nwmissouri.edu  | Singer    | 1            |
| 2018   Fall 44-563-04 | s531507@nwmissouri.edu  | Twilight  | 0            |
| 2018   Fall 44-563-04 | s531508@nwmissouri.edu  | Titanic   | 1            |
| 2018   Fall 44-563-04 | s531382@nwmissouri.edu  | Tower     | 0            |
| 2018   Fall 44-563-04 | mwoolery@nwmissouri.edu | Tank      | 1            |
| 2018   Fall 44-563-04 | s531383@nwmissouri.edu  | Uniform   | 0            |
| 2018   Fall 44-563-04 | s531384@nwmissouri.edu  | Ultimate  | 0            |
| 2018   Fall 44-563-06 | s531519@nwmissouri.edu  | Victory   | 0            |
| 2018   Fall 44-563-06 | s530742@nwmissouri.edu  | Vagrant   | 1            |
| 2018   Fall 44-563-06 | s531495@nwmissouri.edu  | Velvet    | 0            |
| 2018   Fall 44-563-06 | s531367@nwmissouri.edu  | Voice     | 1            |
| 2018   Fall 44-563-06 | s531496@nwmissouri.edu  | Whiskey   | 0            |
| 2018   Fall 44-563-06 | s531369@nwmissouri.edu  | Witch     | 0            |
| 2018   Fall 44-563-06 | s531499@nwmissouri.edu  | Water     | 1            |
| 2018   Fall 44-563-06 | s531500@nwmissouri.edu  | Well      | 1            |
| 2018   Fall 44-563-06 | s531372@nwmissouri.edu  | Xray      | 0            |
| 2018   Fall 44-563-06 | s530473@nwmissouri.edu  | Yankee    | 1            |
| 2018   Fall 44-563-06 | s531439@nwmissouri.edu  | Yesterday | 0            |
| 2018   Fall 44-563-06 | s531503@nwmissouri.edu  | Young     | 1            |
| 2018   Fall 44-563-06 | s531373@nwmissouri.edu  | Zap       | 1            |
| 2018   Fall 44-563-06 | s531507@nwmissouri.edu  | Zulu      | 0            |
| 2018   Fall 44-563-06 | s531508@nwmissouri.edu  | Zombie    | 0            |
| 2018   Fall 44-563-06 | s531382@nwmissouri.edu  | Zebra     | 0            |
| 2018   Fall 44-563-06 | mwoolery@nwmissouri.edu | Vagrant   | 1            |
| 2018   Fall 44-563-06 | s531383@nwmissouri.edu  | Helmet    | 0            |
| 2018   Fall 44-563-06 | s531384@nwmissouri.edu  | Computer  | 1            |
| 2018   Fall 44-563-07 | s531519@nwmissouri.edu  | Cancer    | 0            |
| 2018   Fall 44-563-07 | s530742@nwmissouri.edu  | Chair     | 1            |
| 2018   Fall 44-563-07 | s531495@nwmissouri.edu  | Center    | 1            |
| 2018   Fall 44-563-07 | s531367@nwmissouri.edu  | Dagger    | 1            |
| 2018   Fall 44-563-07 | s531496@nwmissouri.edu  | Desk      | 0            |
| 2018   Fall 44-563-07 | s531369@nwmissouri.edu  | Dim       | 0            |
| 2018   Fall 44-563-07 | s531499@nwmissouri.edu  | Dog       | 0            |
| 2018   Fall 44-563-07 | s531500@nwmissouri.edu  | Echo      | 0            |
| 2018   Fall 44-563-07 | s531372@nwmissouri.edu  | Elvis     | 0            |
| 2018   Fall 44-563-07 | s530473@nwmissouri.edu  | Extra     | 0            |
| 2018   Fall 44-563-07 | s531439@nwmissouri.edu  | Engage    | 1            |
| 2018   Fall 44-563-07 | s531503@nwmissouri.edu  | France    | 0            |
| 2018   Fall 44-563-07 | s531373@nwmissouri.edu  | Foxtrot   | 0            |
| 2018   Fall 44-563-07 | s531507@nwmissouri.edu  | Fancy     | 0            |
| 2018   Fall 44-563-07 | s531508@nwmissouri.edu  | Feline    | 0            |
| 2018   Fall 44-563-07 | s531382@nwmissouri.edu  | Golf      | 1            |
| 2018   Fall 44-563-07 | mwoolery@nwmissouri.edu | Ginger    | 1            |
| 2018   Fall 44-563-07 | s531383@nwmissouri.edu  | Globe     | 1            |
| 2018   Fall 44-563-07 | s531384@nwmissouri.edu  | Germany   | 0            |

Coursestudent.js:

https://github.com/chvnaveenkumar/CodeWord/blob/Developer/model/model.coursestudent.js

CodewordSet:

| CodeWordSetName  (must be unique) |
|-----------------------------------|
| Hoot Original set                 |
| Large set                         |

CodewordSet.js:

https://github.com/chvnaveenkumar/CodeWord/blob/Developer/model/model.codewordset.js

Codeword:

| CodeWordSetName   | Codeword  |
|-------------------|-----------|
| Large set         | Apple     |
| Large set         | Bearcat   |
| Large set         | Cow       |
| Large set         | Donkey    |
| Large set         | Elephant  |
| Large set         | Fish      |
| Large set         | Giraffe   |
| Large set         | Horse     |
| Large set         | Ibis      |
| Large set         | Jackel    |
| Large set         | Kangaroo  |
| Large set         | Llama     |
| Large set         | Moose     |
| Large set         | Nut       |
| Large set         | Ostrich   |
| Large set         | Puppy     |
| Large set         | Quip      |
| Large set         | Rooster   |
| Large set         | Starfish  |
| Large set         | Tiger     |
| Hoot Original set | Africa    |
| Hoot Original set | Almond    |
| Hoot Original set | Anger     |
| Hoot Original set | America   |
| Hoot Original set | Bravo     |
| Hoot Original set | Bank      |
| Hoot Original set | Bounce    |
| Hoot Original set | Bigger    |
| Hoot Original set | Computer  |
| Hoot Original set | Cancer    |
| Hoot Original set | Chair     |
| Hoot Original set | Center    |
| Hoot Original set | Dagger    |
| Hoot Original set | Desk      |
| Hoot Original set | Dim       |
| Hoot Original set | Dog       |
| Hoot Original set | Echo      |
| Hoot Original set | Elvis     |
| Hoot Original set | Extra     |
| Hoot Original set | Engage    |
| Hoot Original set | France    |
| Hoot Original set | Foxtrot   |
| Hoot Original set | Fancy     |
| Hoot Original set | Feline    |
| Hoot Original set | Golf      |
| Hoot Original set | Ginger    |
| Hoot Original set | Globe     |
| Hoot Original set | Germany   |
| Hoot Original set | Hotel     |
| Hoot Original set | Hanger    |
| Hoot Original set | Helmet    |
| Hoot Original set | Hidden    |
| Hoot Original set | Ice       |
| Hoot Original set | Inkspot   |
| Hoot Original set | Impulse   |
| Hoot Original set | Igor      |
| Hoot Original set | Kilo      |
| Hoot Original set | Kangaroo  |
| Hoot Original set | Kennedy   |
| Hoot Original set | Lemon     |
| Hoot Original set | Lamp      |
| Hoot Original set | London    |
| Hoot Original set | Line      |
| Hoot Original set | Mink      |
| Hoot Original set | Mumbai    |
| Hoot Original set | Money     |
| Hoot Original set | Market    |
| Hoot Original set | Native    |
| Hoot Original set | Next      |
| Hoot Original set | November  |
| Hoot Original set | Nickel    |
| Hoot Original set | Object    |
| Hoot Original set | Option    |
| Hoot Original set | Onion     |
| Hoot Original set | Ogre      |
| Hoot Original set | Papa      |
| Hoot Original set | Pencil    |
| Hoot Original set | Purple    |
| Hoot Original set | Pill      |
| Hoot Original set | Quick     |
| Hoot Original set | Quasar    |
| Hoot Original set | Quest     |
| Hoot Original set | Romance   |
| Hoot Original set | Redwood   |
| Hoot Original set | Rose      |
| Hoot Original set | Ring      |
| Hoot Original set | Steve     |
| Hoot Original set | Sender    |
| Hoot Original set | Saturn    |
| Hoot Original set | Singer    |
| Hoot Original set | Twilight  |
| Hoot Original set | Titanic   |
| Hoot Original set | Tower     |
| Hoot Original set | Tank      |
| Hoot Original set | Uniform   |
| Hoot Original set | Ultimate  |
| Hoot Original set | Victory   |
| Hoot Original set | Vagrant   |
| Hoot Original set | Velvet    |
| Hoot Original set | Voice     |
| Hoot Original set | Whiskey   |
| Hoot Original set | Witch     |
| Hoot Original set | Water     |
| Hoot Original set | Well      |
| Hoot Original set | Xray      |
| Hoot Original set | Yankee    |
| Hoot Original set | Yesterday |
| Hoot Original set | Young     |
| Hoot Original set | Zap       |
| Hoot Original set | Zulu      |
| Hoot Original set | Zombie    |
| Hoot Original set | Zebra     |

hootoriginal.js:

https://github.com/chvnaveenkumar/CodeWord/blob/Developer/model/model.hootoriginal.js

largeset.js:

https://github.com/chvnaveenkumar/CodeWord/blob/Developer/model/model.largeset.js

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

How to run our Project :

git clone https://github.com/chvnaveenkumar/CodeWord.git
Now open our project in Visual Studio and

Use npm install if node.js is already installed. if node.js is not installed go to this link(https://nodejs.org/en/) and install node.js and hit the command

After step 2 set path to client (cd ..\Client) and use npm install command to install all the dependency modules in the project which is used in package.json.

In Client use command cd '.\build.js' hit npm run build to run the project.

And get back use cd .. command to get back.

Now start the Server using npm start

Now open chrome and use localhost:8080

Screenshots:

![Screenshot1](/Documentation/ProjectRun/Capture1.png)

![Screenshot2](/Documentation/ProjectRun/Capture2.png)

Resloving the issues :

To kill the process currently using a port on localhost in windows

https://stackoverflow.com/questions/39632667/how-to-kill-the-process-currently-using-a-port-on-localhost-in-windows

Screenshots:

![Screenshot3](/Documentation/ProjectRun/Capture3.png)
![Screenshot4](/Documentation/ProjectRun/Capture4.png)
![Screenshot5](/Documentation/ProjectRun/Capture5.png)


© 2018 GitHub, Inc.
