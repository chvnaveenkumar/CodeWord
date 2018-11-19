## MVP 1:

### 1.01 [Naveen Chandaluri(Views, Controllers, models), Ujjawal(Data_User)] As a user,  I want to register by providing my email ID and password so that I can access my account.

| Acceptance Criteria                                                                         | Yes/No | Comments |
|---------------------------------------------------------------------------------------------|--------|----------|
| The registration page is displayed                                                          |        |   V       |
| User has entered the username, password and confirmed the password in the registration page |        |    V       |
| If user is an instructor, the Instructor box is checked                                     |        |     V      |
| User clicks on ‘Register Now’ button in the registration screen                             |        |     V     |
| User should be able to redirect to the Login page                                           |        |   V       |

### 1.02 [Naveen Chandaluri(Views, Controllers, models)] As a user, I want to log in with my Email Id and password.

| Acceptance Criteria                                                | Yes/No | Comments |
|--------------------------------------------------------------------|--------|----------|
| User has entered correct username and password in the login screen |        |    V     |
| User click on ‘Sign in’ button in the login screen                 |        |    V     |
| User should be able to see the home screen with codewords          |        |    V     |

### [Naveen Chandaluri(Views, Controllers, models)] 1.03 - As a user, if I forget the password, I want to retrieve my account by entering the registered Email ID and submit it. Later I can access my account with the temporary password provided.

| Acceptance Criteria                                                                      | Yes/No | Comments |
|------------------------------------------------------------------------------------------|--------|----------|
| Invalid login results will display the error message as “Password wrong”                 |        |    V      |
| User clicks on ‘Forget password’, is asked for email address to send password reset link |        |    V     |

## MVP 2:

### 2.01 [Naveen Chandaluri(Views)] As an instructor, I want to check an "Instructor?" box when I register so that I can distribute code words.

| Acceptance Criteria                                                                         | Yes/No | Comments |
|---------------------------------------------------------------------------------------------|--------|----------|
| Should be able to View the Login page                                                       |        |    V      |
| Should be able to Click on Sign Up/Register and should be able to view the Registration page|        |      V    |
| Register himself/herself by filling information like Name, Email id, Password, Confirm password and checking the Instructor checkbox                                                                           |        |   V       |
| After clicking on “Register Now” button, he/she should be able to view a message “Successfully Registered and Redirecting to Sign In page”                                                               |        |    V      |

### 2.02 [Sravya Kancharla(controllers, models), Chaithanya Cherukuru(views)] - As an instructor, I want to see my list of active courses

| Acceptance Criteria                                                                         | Yes/No | Comments |
|---------------------------------------------------------------------------------------------|--------|----------|
| After filling information in Sign In page and clicking on Sign In button, he/she should be able to view a message “Sign In successful. Redirecting to Instructor’s Dashboard”                                   |        |    V     |
| After successful Sign In, he/she should be able to view Instructor’s dashboard where they can view all the courses he/she are added to along with list of active courses.                                                                                         |        |     V     |
| After clicking on courses, instructor should be able to view course details like Course Name and Code-words assigned for respective course|        |     V     |

### 2.03 [ Ujjawal Kumar, Srimai Reddy Yanala(Data,Model,Controller)]- As an instructor, I want to create a new set of code words by entering a unique name for the codeword set and uploading a plain text file that contains a new list of codewords.

| Acceptance Criteria                                                                         | Yes/No | Comments |
|---------------------------------------------------------------------------------------------|--------|----------|
| After successfull login, he/she should be able to view his/her Email Id (used for signing in) on top right corner of navigation bar along with dropdown arrow symbol for change password and logout options          |        |          |
| Once clicking on Code-word Set, he/she should be able to view “Create Code-word Set”                                                                |        |         |
| Once clicking on Code-word Set, he/she should be able to view "Delete Code-word Set”                                                                |        |         |
| After clicking on “Create Code-word Set” , he/she should be redirected to Code-Word set page where they should be able to set a unique name for that set and fill the data in that codeword set by uploading the list of codeword from Basic Small or Basic Large file from the dropdown                       |        |     V     |

 ### 2.04 [Sreelekha(Modal,Data and Controller), Naveen Nuggu (views, rules - codewords), Ujjawal(View_cordwordset)] - As an instructor, I want the app to always have my Basic small codeword set (with 90 unique codewords) and a second Large Codeword Set (with 200 unique codewords) and instructors are not allowed to delete them.

| Acceptance Criteria                                                                         | Yes/No | Comments |
|---------------------------------------------------------------------------------------------|--------|----------|
| After logging In as Instructor, he/she should be able to have all the Instructor's privilages and view all the options related to Instructor's dashboard.                                   |        |          |
| After successful Sign In of Instructor, he/she should be able to select the codeword set from the codeword set dropdown menu.                                                                 |        |          |
| At the time of codeword selection, Instructor should be able to view Basic Small and Basic Large code-word sets in the dropdown list but they should not have any acces to delete those code-word sets                                                 |        |          |

### 2.05[CHERUKURU CHAITHANYA] - As an instructor, I want to create a new course by adding a list of students (containing one *.edu email & one name field for each student), selecting a codeword set from a drop-down that shows the name of the set with the calculated count in parenthesis, and setting the start date (default to today) and end date (defaulted to 4 Months after then start date) for the course, and a pre-survey URL, and a post-survey URL. Team: implement either cut & paste a tab or comma separated list of students OR offer to import by selecting a csv file or Excel file in the proper format). 

|                             Acceptance Criteria                            | Yes/No | Comments |
|:--------------------------------------------------------------------------:|--------|----------|
| User should be able to add students lists by uploading names and Email Id. |        |          |
| User should be able to select codeword set from dropdown list .            |        |          |
| User should be able to add new course                                      |        |          |
| And also able to set start date and end date for the course                |        |          |
| User should able to enter Survey Start URL                                 |        |          |
| User should able to enter Survey End URL                                   |        |          |

### 2.06 [Anurag Kumar] - As an instructor, if I click on “View Students” I want to see a list of students for the selected course (emails and names) and want to see the calculated count of students in that course.
|                                        Acceptance Criteria                                       | Yes/No | Comments |
|:------------------------------------------------------------------------------------------------:|--------|----------|
| If user clicks on “View Students”, list of students for the selected course should be displayed. |        |          |
| Email address and names should be included while displaying the list of students.                |        |          |
| User can see the calculated count of the students in the selected course.                        |        |          |

### 2.07 [Shivani Dodla] - As an instructor, when I view my list of active courses, for each active course, I want to see:
    a. The unique name,

    b. The codeword set name with the calculated count of words,

    c. The start date and the end date,

    d. The pre-survey URL and the post-survey URL

    e. An option to “View N Students”,

    f. An option to “Edit”,

    g. An option to “Delete” an active course (expired courses will be not appear)
    
|                                                   Acceptance Criteria                                                  | Yes/No | Comments |
|:----------------------------------------------------------------------------------------------------------------------:|--------|----------|
| User should be able to see a unique name for the codeword set.                                                         |        |          |
| User should be able to see the codeword set name which is selected from dropdown list.                                 |        |          |
| User should also able to see the calculated count of words in the set by  selecting a code word set from dropdown box. |        |          |
| User should be able to see the Start date and End date for courses                                                     |        |          |
| User must be able to see pre-survey URL and the post-survey URL                                                        |        |          |
| User must able to see the calculated count of the students in the  selected course                                     |        |          |
| User must be able to see the edit option to edit the student names  and Email ID                                       |        |          |
| User must be able to see delete option to delete an active course.                                                     |        |          |
### 2.08 - [Naveen Kumar Chandaluri(views),Vyshnavi yalamareddy(Controller)] As an instructor, I want one codeword from the specified set to be randomly assigned to only one student and each student must have a unique codeword in that course and each codeword can only be issued once in each course (or not used at all) when a course is created.
|                                  Acceptance Criteria                                  | Yes/No | Comments |
|:-------------------------------------------------------------------------------------:|--------|----------|
| User should be able to see the unique codeword for each student in every course       |        |    No      |
| when course is created user should be able to see the unique codeword in each course. |        |     No     |


# MVP 3 (Fri-9-Nov)

### 3.01 - As a student, I want to see my courses and see/acknowledge/get my random codeword for the respective course on my home page.

|                                 Acceptance Criteria                                 | Yes/No | Comments |
|:-----------------------------------------------------------------------------------:|--------|----------|
| User should be able to see the list of courses assigned to him/her.                 |        |          |
| User should be able to see the Random codeword which is displayed on the home page. |        |          |

### 3.02 - [Sravya Kancharla] As an instructor, I want to see my list of courses, those are “active” today between the start and end date inclusively.

|                       Acceptance Criteria                      | Yes/No | Comments |
|:--------------------------------------------------------------:|--------|----------|
| User should be able to see the list of his/her courses.        |        |    V      |
| User should be able to see the courses which are active today. |        |    V      |

### 3.03 - [Naveen Kumar Chandaluri, Vyshnavi yalamareddy(Controller)] As an instructor, I want to be notified if the codeword set is too small. If the calculated count of codewords is less than the calculated count of students then I want to see a warning that says “You have n students, but the codeword set has only m words. 

|                                                              Acceptance Criteria                                                              | Yes/No | Comments |
|:---------------------------------------------------------------------------------------------------------------------------------------------:|--------|----------|
| When the codeword doesnt not meet the requirements, user should be notified.                                                                  |        |          |
| User gets a warning "You have n students, but the codeword set has only m words" when count of codewords are less that the count of students. |        |          |

### 3.04 - [Naveen Kumar Chandaluri , Anurag Kumar]As an instructor, I want the codewords confidential and must not know or be able to see the code word each student gets.

|                    Acceptance Criteria                    | Yes/No | Comments |
|:---------------------------------------------------------:|--------|----------|
| User should not know the codeword when each student gets. |        |          |
| Codewords should be confidential.                         |        |          |

### 3.05 - [Naveen Kumar Chandaluri]As a user, I want to navigate between multiple pages (Home (list of active courses), + New Course, View a Set of Codewords and Confirm Delete Course).

|                                                                Acceptance Criteria                                                               | Yes/No | Comments |
|:------------------------------------------------------------------------------------------------------------------------------------------------:|--------|----------|
| User should be able to navigate easily between the pages.                                                                                        |        |          |
| When clicked on "+ Add course", it should redirect to the page where we can add the course details.                                              |        |          |
| When clicked on "View Students", it should redirect to the page where it has the course details and students assigned to that particular course. |        |          |
| When clicked on "Delete course", user should get a pop up asking for a confirmation.                                                             |        |          |

### 3.06 -[Shivani Reddy Dodla] As an instructor, I want to see the calculated count of students for codewords when I view a course.

|                                                            Acceptance Criteria                                                           | Yes/No | Comments |
|:----------------------------------------------------------------------------------------------------------------------------------------:|--------|----------|
| When user view the course details page, he/she should be able to see the calculate count of students when acknowledged for the codeword. |        |          |

### 3.07 - [Sravya Kancharla] As an instructor, I want to delete an existing course once it is completed. 

|                        Acceptance Criteria                        | Yes/No | Comments |
|:-----------------------------------------------------------------:|--------|----------|
| User should be able see the delete button for each course.        |        |   V      |
| When clicked on delete button, existing course should be deleted. |        |   V       |

### 3.08 - [Srimai Reddy Yanala , Anurag Kumar ] As an instructor, I want the percentage of students who have accessed their codewords in that course.

|                                   Acceptance Criteria                                   | Yes/No | Comments |
|:---------------------------------------------------------------------------------------:|--------|----------|
| When student access their codewords for the course, it should calculate the percentage. |        |          |
| When user clicks on "View students", it should show the percentage of students.         |        |          |

## Additional Requirements

### 3.09 - {Shivani Reddy Dodla] Instructors are limited to no more than 10 active courses. (Verified with client)

### 3.10 - [Anurag Kumar]Each course is limited to no more than 1000 students.  (Verified with client)

### 3.11 - [Ujjawal Kumar] As an Instructor, while creating codeword set, If there is more than 1200 codewords in the file which is getting uploaded to create codeword set, Instructor should be notified with a pop up message that "Each codeword set has a limit of upto 1200 codewords".(Verified with client)

| Acceptance Criteria                                                | Yes/No | Comments |
|--------------------------------------------------------------------|--------|----------|
| After successfull login, Instructor should be able to view Codeword Set list where he/she should be able to view all the codeword set created by him/her along with the two default codeword set |        |          |
| After clicking on Create Codeword Set button at the top left corner of the page and post filling the required fields for codewordset creation and post uploading the file containing codewordset, Instructor should be able to view actual count of codewords in the uploaded file                 |        |          |
| After filling all the required fields and clicking on Create codeword set button, If there is more than 1200 codewords in the file which was uploaded, Instructor should be notified with a pop up message that "Each codeword set has a limit of upto 1200 codewords".           |        |          |

### 3.13 - Registration is limited to 25 teachers.  (Verified with client)
