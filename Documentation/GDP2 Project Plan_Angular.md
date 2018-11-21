# Team Members:
- Ujjawal Kumar
- Chaithanya Cherukuru
- Anurag Kumar

### Below user stories would be completed in Angular as Client side and Node js as serverside with Mongo DB as database.

## User Stories:
1. As a user, I want to register by providing my email ID and password so that I can access my account.

2. As a user, I want to log in with my Email Id and password.

3. As a user, if I forget the password, I want to retrieve my account by entering the registered Email ID and submit it. Later I can access my account with the temporary password provided.

4. As an instructor, I want to check an "Instructor?" box when I register so that I can distribute code words.

5. As an instructor, I want to see my list of active courses

6. As an instructor, I want to create a new set of code words by entering a unique name for the codeword set and uploading a plain text file that contains a new list of codewords.

7. As an instructor, I want the app to always have my Basic small codeword set (with 90 unique codewords) and a second Large Codeword Set (with 200 unique codewords) and instructors are not allowed to delete them.

8. As an instructor, I want to create a new course by adding a list of students (containing one *.edu email & one name field for each student), selecting a codeword set from a drop-down that shows the name of the set with the calculated count in parenthesis, and setting the start date (default to today) and end date (defaulted to 4 Months after then start date) for the course, and a pre-survey URL, and a post-survey URL. Team: implement either cut & paste a tab or comma separated list of students OR offer to import by selecting a csv file or Excel file in the proper format).

9. As an instructor, if I click on “View Students” I want to see a list of students for the selected course (emails and names) and want to see the calculated count of students in that course.

10. As an instructor, when I view my list of active courses, for each active course, I want to see: a. The unique name, b. The codeword set name with the calculated count of words, c. The start date and the end date, d. The pre-survey URL and the post-survey URL e. An option to “View N Students”, f. An option to “Edit”, g. An option to “Delete” an active course (expired courses will be not appear)

11. As an instructor, I want one codeword from the specified set to be randomly assigned to only one student and each student must have a unique codeword in that course and each codeword can only be issued once in each course (or not used at all) when a course is created.

12. As a student, I want to see my courses and see/acknowledge/get my random codeword for the respective course on my home page.

14. As an instructor, I want to see my list of courses, those are “active” today between the start and end date inclusively.

15. As an instructor, I want to be notified if the codeword set is too small. If the calculated count of codewords is less than the calculated count of students then I want to see a warning that says “You have n students, but the codeword set has only m words.

16. As an instructor, I want the codewords confidential and must not know or be able to see the code word each student gets.

17. As a user, I want to navigate between multiple pages (Home (list of active courses), + New Course, View a Set of Codewords and Confirm Delete Course)

18. As an instructor, I want to see the calculated count of students for codewords when I view a course.
3.07 As an instructor, I want to delete an existing course once it is completed

19. As an instructor, I want the percentage of students who have accessed their codewords in that course

20. Instructors are limited to no more than 10 active courses. (Verified with client)

21. Each course is limited to no more than 1000 students.

22. As an Instructor, while creating codeword set, If there is more than 1200 codewords in the file which is getting uploaded to create codeword set, Instructor should be notified with a pop up message that "Each codeword set has a limit of upto 1200 codewords".

## MVP 1:                                                   
1.01. As a user, I want to register by providing my email ID and password so that I can access my account.            

1.02 As a user, I want to log in with my Email Id and password.   

 1.03 As a user, if I forget the password, I want to retrieve my account by entering the registered Email ID and submit it. Later I can access my account with the temporary password provided. 

## MVP 2:

2.01 As an instructor, I want to check an "Instructor?" box when I register so that I can distribute code words.

2.02 As an instructor, I want to see my list of active courses  

2.03 As an instructor, I want to create a new set of code words by entering a unique name for the codeword set and uploading a plain text file that contains a new list of codewords.

2.04 As an instructor, I want the app to always have my Basic small codeword set (with 90 unique codewords) and a second Large Codeword Set (with 200 unique codewords) and instructors are not allowed to delete them.  

2.05 As an instructor, I want to create a new course by adding a list of students (containing one *.edu email & one name field for each student), selecting a codeword set from a drop-down that shows the name of the set with the calculated count in parenthesis, and setting the start date (default to today) and end date (defaulted to 4 Months after then start date) for the course, and a pre-survey URL, and a post-survey URL. Team: implement either cut & paste a tab or comma separated list of students OR offer to import by selecting a csv file or Excel file in the proper format).  

2.06 As an instructor, if I click on “View Students” I want to see a list of students for the selected course (emails and names) and want to see the calculated count of students in that course.

2.07 As an instructor, when I view my list of active courses, for each active course, I want to see:     a. The unique name,     b. The codeword set name with the calculated count of words,     c. The start date and the end date,     d. The pre-survey URL and the post-survey URL     e. An option to “View N Students”,     f. An option to “Edit”,     g. An option to “Delete” an active course (expired courses will be not appear)  

2.08 As an instructor, I want one codeword from the specified set to be randomly assigned to only one student and each student must have a unique codeword in that course and each codeword can only be issued once in each course (or not used at all) when a course is created.                                                                                                                                                                                                                                                  
## MVP 3:

3.01 As a student, I want to see my courses and see/acknowledge/get my random codeword for the respective course on my home page.                     

3.02 As an instructor, I want to see my list of courses, those are “active” today between the start and end date inclusively. 

3.03 As an instructor, I want to be notified if the codeword set is too small. If the calculated count of codewords is less than the calculated count of students then I want to see a warning that says “You have n students, but the codeword set has only m words.                                                                                                 

3.04 As an instructor, I want the codewords confidential and must not know or be able to see the code word each student gets.                                                                     

3.05 As a user, I want to navigate between multiple pages (Home (list of active courses), + New Course, View a Set of Codewords and Confirm Delete Course) 

3.06 As an instructor, I want to see the calculated count of students for codewords when I view a course.                                                                      
3.07 As an instructor, I want to delete an existing course once it is completed  

3.08 As an instructor, I want the percentage of students who have accessed their codewords in that course

3.09 Instructors are limited to no more than 10 active courses. (Verified with client) 

3.10 Each course is limited to no more than 1000 students.          

3.11 As an Instructor, while creating codeword set, If there is more than 1200 codewords in the file which is getting uploaded to create codeword set, Instructor should be notified with a pop up message that "Each codeword set has a limit of upto 1200 codewords".                                                                        
