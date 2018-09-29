# Prioritized User Stories

List user stories (with supporting images & data) in a numbered, prioritized list for each of these iterations.

## MVP 1 (Fri-28-Sep)

- As a user, I want to register by providing my email ID and password so that I can access my account.
- As a user, I want to log in with my Email Id and password.
- As a user, if I forget the password, ~~I want to retrieve my account by entering the registered Email ID and submit it. Later I can access my account with the temporary password provided.~~ `after clicking on forget password link, I should be redirected to forget password page where after entering registered Email ID and clicking on "Reset password" button, I will recieve an email with a link post clicking on which I would be redirected to a new page where I would be asked to reset my password by filling "New Password" and "Confirm Password" followed by clicking on "Change password" button.[Poor english-Dr.hoot]`
- As a student,I want to see my `current` courses and see/acknowledge ~~/get~~ my random codeword for the respective course on my home page.
## MVP 2 (Fri-19-Oct)

- ~~As an instructor, I want to check an "Instructor?" box when I register so that I can distribute code words.~~`[Don't want this point as an option as this is an admin option-Dr. Hoot]`
- As an instructor, I want to see my list of `all active` courses ~~, those are “active” today~~ between ~~the~~ start and end date ~~inclusively.~~ `(Which would be after 4 months of start date)[Poor englisg-Dr. Hoot]`
- As an instructor, I want to create a new set of code words by entering a unique name for the codeword set and uploading an Excel sheet`(.csv), Word doc or plain text file` that `would` contain ~~a~~ new list`s` of codewords.
- As an instructor, I want to see the unique name of the codeword set in parentheses and the calculated number of words in the set when selecting a codeword set from a drop-down box.` [Why there would be parenthesis and when do the instructor will see this? Also, this point is covered in next to next point - Dr. Hoot] `
- As an instructor, I want the app to always have ~~my “Hoot Original”~~ **Basic Small** codeword set (with 90 `unique codewords`) and ~~a second “~~ **Basic Large** codeword set `(with 200 unique codewords)` and ~~Do NOT allow instructors~~ `instructor's would not be having access to delete codeword sets.`
- As an instructor, I want to create a new course by adding a list of students from the first sheet in an Excel file`/Word file/ Plain text file` (containing emails and names in the first 2 columns), selecting a codeword set from a drop-down that shows the name of the set with the calculated count in parenthesis, and setting the start date (default to today) and end date (defaulted to 4 Months after ~~then~~ start date) for the course, and a pre-survey URL, and a post-survey URL.` [Survey URL is optional and As an Instructor, I  should be able to change the URL ~ can be deffered in next sprint] `
- As an instructor, if I click on “View Students” I want to see a list of students for the selected course (emails and names) and want to see the calculated count of students in that course.
- As an instructor, when I view my list of active courses, for each active course, I want to see:
    - The unique name,
    - The codeword set name with the calculated count of words,
    - The start date and the end date,
    - The pre-survey URL and the post-survey URL
    - An option to ~~“View N Students”~~ `"View" student's information [What is N Students? - Dr. Hoot],`
    - An option to ~~“Edit”~~ `"Add/Remove/Edit" student's information, [What is Edit? specify everything in detail - Dr. Hoot]`
    - An option to ~~“Delete” and~~ `"Remove" an` active course (expired courses do not need`s` to be deleted - they just won't appear `in active courses section.) [If Instructor accidently delete the course, he/she should be able to view that deleted course in Inactive course section and should be able to undo that delete - Dr. Hoot]`
## MVP 3 (Fri-9-Nov)

- As an instructor, I want one codeword from the specified set to be randomly assigned to only one student and each student must have a unique codeword in that course and each codeword can only be issued once in each course (or not used at all) when a course is created. `[Whenever a student is added to a course, random cord should be assigned to them - Dr. Hoot]`
- As an instructor, I want to be notified if the codeword set is too small. If the calculated count of codewords is less than the calculated count of students then I want to see a warning that says “You have n students, but the codeword set has only m words. Please select another set or click the + button next to the codeword dropdown to add a new, larger set of codewords" while creating or editing a course.
- As an instructor, ~~I want the codewords confidential and must not know or be able to see the code word each student gets.~~ `I won't be able to know what codeword is assigned to which student as the codewords should be confedential. [Poor english - Dr. Hoot]`
- As an instructor, I want to see the calculated count of students and codewords when I edit or view a course with the unique name, list of students, codeword set, start and end date.
- ~~As an instructor, I want to delete an existing course once it is completed.~~ `[Inconsistent statement - Why do you want to delete an existing course? - Dr. Hoot]`
- As an instructor, I want the `view` percentage of students who have accessed their codewords in that course.
- As an instructor, I want to assign codewords for the concurrent survey in different courses.
## GDP2:

- ~~As an administrator, I want to add new instructors, see the list of instructors and instructor surveys details.~~ `[Remove instructor's survey details, remove the instructor, all the courses related to instructor should be deleted - Dr. Hoot]`
- As an administrator, I want to be able to add new sets of codewords.
- As an instructor, I want to delete a student from a course (e.g. when they drop). 
- As an instructor, I want to add a student to a course (e.g. when a new student transfers in)
- As an instructor, I want to create a new course by adding a list of students from Excel`/Word/Plain text`, selecting a codeword set from a drop-down, and setting the start date and end date for the course.`[Uploading the student codewords in format other than Excel, like word docs so that an instructor can convert that word doc into plain text and upload that codewords. This can be deffered for next release - Dr. Hoot]`
- As a user, I want to navigate between multiple pages (Home (list of active courses), + New Course, View a Set of Codewords and Confirm Delete Course).
- `As an Instructor, I should be able to search for courses, ordering/sorting of courses.`
- `As an Instructor, if I fill the form and select a set of codeword and try to send those to students and if the number of students in that course is more than the number of codewords in the selected sets, then I would be happy to see an pop up message with a reason  to select different codeword set, and after selecting larger codeword set, I should not be asked to fill the previously filled details again(Only I should be asked to select different codeword set, not to fill the details again which I already filled.) [Filling details in form for the first time is okey for me, but if those details goes away and if I have to fill those details again, then I would go really, really, really, really mad...!!! - Dr. Hoot]`


# Hand-Written Notes:
