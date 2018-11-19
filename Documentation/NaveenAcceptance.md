## MVP 1:

### 1.01 [Naveen Chandaluri(Views, Controllers, models), Ujjawal(Data_User)] As a user,  I want to register by providing my email ID and password so that I can access my account.

| Acceptance Criteria                                                                         | Yes/No | Comments |
|---------------------------------------------------------------------------------------------|--------|----------|
| The registration page is displayed                                                          |  Yes      |         |
| User has entered the email, password and confirmed the password in the registration page |  Yes      |             |
| If user is an instructor, the Instructor box is checked                                     |  Yes      |          |
| User clicks on ‘Register Now’ button in the registration screen                             |  Yes      |          |
| User should be able to redirect to the Login page                                           |  Yes      |          |

### 1.02 [Naveen Chandaluri(Views, Controllers, models)] As a user, I want to log in with my Email Id and password.

| Acceptance Criteria                                                | Yes/No | Comments |
|--------------------------------------------------------------------|--------|----------|
| User has entered correct email and password in the login screen |  Yes      |          |
| User click on ‘Sign in’ button in the login screen                 |  Yes     |          |
| User should be able to see the home screen with courses          |  Yes     |          |

### [Naveen Chandaluri(Views, Controllers, models)] 1.03 - As a user, if I forget the password, I want to retrieve my account by entering the registered Email ID and submit it. Later I can access my account with the temporary password provided.

| Acceptance Criteria                                                                      | Yes/No | Comments |
|------------------------------------------------------------------------------------------|--------|----------|
| Invalid login results will display the error message as “Invalid Login”                 |  Yes     |          |
| User clicks on ‘Forget password’, is asked for email address to send password reset link |  Yes      |          |

## MVP 2:

### 2.01 [Naveen Chandaluri(Views)] As an instructor, I want to check an "Instructor?" box when I register so that I can distribute code words.

| Acceptance Criteria                                                                         | Yes/No | Comments |
|---------------------------------------------------------------------------------------------|--------|----------|
| Should be able to View the Login page                                                       |  Yes      |          |
| Should be able to Click on Sign Up/Register and should be able to view the Registration page|  Yes      |          |
| Register himself/herself by filling information like Email id, Password, Confirm password and checking the Instructor checkbox                                                                           |  Yes      |          |
| After clicking on “Register Now” button, he/she should be able to view a message “Successfully Registered and Redirecting to Sign In page”                                                               |   Yes     |          |


### 2.08 - [Naveen Kumar Chandaluri(views),Vyshnavi yalamareddy(Controller)] As an instructor, I want one codeword from the specified set to be randomly assigned to only one student and each student must have a unique codeword in that course and each codeword can only be issued once in each course (or not used at all) when a course is created.
|                                  Acceptance Criteria                                  | Yes/No | Comments |
|:-------------------------------------------------------------------------------------:|--------|----------|
| User should be able to see the unique codeword for each student in every course       |  No      |          |
| when course is created user should be able to see the unique codeword in each course. |  No      |          |


# MVP 3 (Fri-9-Nov)

### 3.03 - [Naveen Kumar Chandaluri, Vyshnavi yalamareddy(Controller)] As an instructor, I want to be notified if the codeword set is too small. If the calculated count of codewords is less than the calculated count of students then I want to see a warning that says “You have n students, but the codeword set has only m words. Please select another set or click the + button next to the codeword dropdown to add a new, larger set of codewords" while creating or editing a course. 
|                                  Acceptance Criteria                                  | Yes/No | Comments |
|:-------------------------------------------------------------------------------------:|--------|----------|
| Instructor should successfully select an existing codewordset       |  Yes      |          |
| Warning with "You have n students, but the codeword set has only m words" |  Yes      |   But saying codeword count as 0 for all sets       |


### 3.04 - [Naveen Kumar Chandaluri , Anurag Kumar]As an instructor, I want the codewords confidential and must not know or be able to see the code word each student gets.  

|                                  Acceptance Criteria                                  | Yes/No | Comments |
|:-------------------------------------------------------------------------------------:|--------|----------|
| User want the codewords confidential                                                  |  Yes   |          |



### 3.05 - [Naveen Kumar Chandaluri]As a user, I want to navigate between multiple pages (Home (list of active courses), + New Course, View a Set of Codewords and Confirm Delete Course).


|                                  Acceptance Criteria                                  | Yes/No | Comments |
|:-------------------------------------------------------------------------------------:|--------|----------|
| I want to navigate between multiple pages                                             |  Yes   |          |
| Adding new Course                                                                     |  Yes   |          |
| View a Set of Codewords and Confirm Delete Course                                     |  Yes   |          |
