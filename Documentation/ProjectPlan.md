# Codewords Project Plan

Prioritized User Stories

List user stories (with supporting images & data) in a numbered, prioritized list for each of these iterations.

MVP 1 (Fri-28-Sep)

1. As a user,  I want to register by providing my email ID and password so that I can access my account.

| ID      | Criteria   | Yes/No | Comments |   |
|---------|------------|--------|----------|---|
| 1.01.01 | The reg... |        |          |   |
| 1.01.02 |            |        |          |   |
| 1.02.03 |            |        |          |   |


2. As a user, I want to log in with my Email Id and password.
3. As a user, if I forget the password, I want to retrieve my account by entering the registered Email ID and submit it. Later I can access my account with the temporary password provided.
MVP 2 (Fri-19-Oct)

As an instructor, I want to check an "Instructor?" box when I register so that I can distribute code words. (Required for MVP 2)
As an instructor, I want to see my list of courses, those are “active” today between the start and end date inclusively.
As an instructor, I want to create a new set of codewords by entering a unique name for the codeword set and uploading an Excel sheet that contains a new list of codewords.
As an instructor, I want to see the unique name of the codeword set in parentheses and the calculated number of words in the set when selecting a codeword set from a drop-down box.
 As an instructor, I want the app to always have an "Original Small" codeword set (with ~90) and a second “Large Codeword Set” with 200 unique codewords and Do NOT allow instructors to delete codeword sets. 
 As an instructor, I want to create a new course by adding a list of students (containing one *.edu email & one name field for each student), selecting a codeword set from a drop-down that shows the name of the set with the calculated count in parenthesis, and setting the start date (default to today) and end date (defaulted to 4 Months after then start date) for the course, and a pre-survey URL, and a post-survey URL. Team: implement either cut & paste a tab or comma separated list of students OR offer to import by selecting a csv file or Excel file in the proper format). 
 As an instructor, if I click on “View Students” I want to see a list of students for the selected course (emails and names) and want to see the calculated count of students in that course.
 As an instructor, when I view my list of active courses, for each active course, I want to see:
    a. The unique name,
    b. The codeword set name with the calculated count of words,
    c. The start date and the end date,
    d. The pre-survey URL and the post-survey URL
    e. An option to “View N Students”,
    f. An option to “Edit”,
    g. An option to “Delete” an active course (expired courses will be not appear).
  9.  As a student, I want to see my courses and see/acknowledge/get my random codeword for the respective course on my home page.
MVP 3 (Fri-9-Nov)

 As an instructor, I want one codeword from the specified set to be randomly assigned to only one student and each student must have a unique codeword in that course and each codeword can only be issued once in each course (or not used at all) when a course is created.
 As an instructor, I want to be notified if the codeword set is too small. If the calculated count of codewords is less than the calculated count of students then I want to see a warning that says “You have n students, but the codeword set has only m words. Please select another set or click the + button next to the codeword dropdown to add a new, larger set of codewords" while creating or editing a course.
 As an instructor, I want the codewords confidential and must not know or be able to see the code word each student gets.
 As an instructor, I want to see the calculated count of students and codewords when I edit or view a course with the unique name, list of students, codeword set, start and end date.
 As an instructor, I want to delete an existing course once it is completed. 
 As an instructor, I want the percentage of students who have accessed their codewords in that course.
As an instructor, I want to assign codewords for the concurrent survey in different courses.
Additional Requirements

Registration emails are limited to *.edu addresses. (New!)
Instructors are limited to no more than 5 active courses. (New!)
Each course is limited to no more than 200 students. (New!)
Each codeword set limited to no more than 200 codewords. (New!)
Registration is limited to 25 teachers. (New!)
Maximum values are negotiable - exact values can be customized with the client. 

GDP2

Administrator Functionality

As an administrator, I want to add new instructors, see the list of instructors and instructor surveys details. 
As an administrator, I want to be able to add new sets of codewords. (Already provided above - can be deleted)
As an administrator, I want the option to hide the Instructor checkbox when new users are registering.
As an administrator, I want a set of instructions on how to deploy a new instance of the application (e.g. an administrator at another institution OR if each instructor has their own deployed version.)
Core Version

As an instructor, I want to delete a student from an active course (e.g. when they drop). 
As an instructor, I want to add a student to an active course (e.g. when a new student transfers in)
    a. The unique name,
    b. The codeword set name with the calculated count of words,
    c. The start date and end date,
    d. The pre-survey URL and the post-survey URLAs an instructor, I want to edit a course by clicking "Edit" on a course entry. I want to be able to modify:
As an instructor, I want to delete an active course, by clicking the delete button on the view courses screen, getting a confirmation box that says" Are you sure you want to delete course <Unique Name>? This action is not reversible. with two buttons "Delete", "Cancel". If I click cancel, I return to the view courses screen, if I click "Delete", the course will be deleted (along with the course student list). New!
As a user, I want to navigate between multiple pages (Home (list of active courses), + New Course, View a Set of Codewords and Confirm Delete Course). This should be available in the earlier MVPs. 
