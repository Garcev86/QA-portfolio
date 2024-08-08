Module name: Add Employees
Test executed by:
Test Title: Verify the error message is displayed when the Name field is left empty.
Test Execution date:
Description: Test when the user (HR) creates new employees that the system displays an error message when the Name (mandatory) field is left empty, and all other mandatory fields are entered.
 

 
Precondition: The user is logged in, and chooses an HR view.

 
Test Case ID_001
 
Step
Test steps
Test Data
Expected result
1
Click on the “Employees” link


Employees page opened.
2
Click on the “Add Employees” button.


Add Employees page with information opened.
3
Left empty “Name” field
“”
Error message: “*Required” above Name field.
4
Enter “Surname”
“Smith”
The surname field accepts input.
5
Enter “Email address”
“smith@example.com”
The email address field accepts input.
6
Select “Locations” from the dropdown menu
“Becej”
The locations field accepts input.
7
Select “Tier” from the dropdown menu
“Benefiti test 300”
The tier field accepts input.
8
Click on the “Save” button
 
Error: “*Required” is displayed under the field as a pop-up.

 
 
 
Module name: Add Employees
Test executed by:
Test Title: Verify the system display an error message when the Email address field is left empty.
Test Execution date:
Description: Test when the user (HR) creates new employees that the system displays an error message when the Email address (mandatory) field is left empty, and all other mandatory fields are entered.
 

 
Precondition: The user is logged in, chooses an HR view.

 
Test Case ID_002
 
Step
Test steps
Test Data
Expected result
1
Click on the “Employees” link


Employees page opened.
2
Click on the “Add Employees” button.


Add Employees page with information opened.
3
Enter the “Name” field
“John”
The name field accepts input.
4
Enter “Surname”
“Smith”
The surname field accepts input.
5
Left empty “Email address”
“”
Error: “*Required” message for Email.
6
Select “Locations” from the dropdown menu
“Becej”
The locations field accepts input.
7
Select “Tier” from the dropdown menu
“Benefiti test 300”
The tier field accepts input.
8
Click on the “Save” button
 
Error: “*Required” in red is displayed under the field.

 

 


Module name: Add Employees
Test executed by:
Test Title: Verify an error message is displayed when the length of the Name is above the maximum (25) characters.
Test Execution date:
Description: Test when the user (HR) creates new employees that the system displays an error message when Name (mandatory) input is above maximum length, and all other mandatory fields are entered.
 


Boundary values:
-Name and Surname: Minimum length = 1 character, Maximum length = 25 characters.
-Email address: Minimum length = 3 characters (a@b), Maximum length = 25 characters.
- Locations and Tier: Selected from a dropdown menu, so only valid selections are needed.
Precondition: The user is logged in, and chooses an HR view.


Test Case ID_003
 
Step
Test steps
Test Data
Expected result
1
Click on the “Employees” link


Employees page opened.
2
Click on the “Add Employees” button.


Add Employees page with information opened.
3
Enter the “Name” field
“Jqwertyuioplkhgfdsazxcvbnm”
Error message: “Name cannot exceed 25 characters.

 
 
Module name: Add Employees
Test executed by:
Test Title: Verify the system accepts a name with a minimum length of (1) character.
Test Execution date:
Description: Test when the user (HR) creates new employees that the system accepts Name (mandatory) input are on minimum length, and all other mandatory fields are entered.
 

 
Boundary values:
-Name and Surname: Minimum length = 1 character, Maximum length = 25 characters.
-Email address: Minimum length = 3 characters (a@b), Maximum length = 25 characters.
- Locations and Tier: Selected from a dropdown menu, so only valid selections are needed.
Precondition: The user is logged in, and chooses an HR view.

 
Test Case ID_004
 
Step
Test steps
Test Data
Expected result
1
Click on the “Employees” link


Employees page opened.
2
Click on the “Add Employees” button.


Add Employees page with information opened.
3
Enter the “Name” field
“J”
The name field accepts input.


Module name: Add Employees
Test executed by:
Test Title: Verify the system accepts a Surname with a maximum length of (25) characters.
Test Execution date:
Description: Test when the user (HR) creates new employees that the system accepts Surname (mandatory) input are on maximum length, and all other mandatory fields are entered.
 

 
Boundary values:
-Name and Surname: Minimum length = 1 character, Maximum length = 25 characters.
-Email address: Minimum length = 3 characters (a@b), Maximum length = 25 characters.
- Locations and Tier: Selected from a dropdown menu, so only valid selections are needed.
Precondition: The user is logged in, and chooses an HR view.

 
Test Case ID_005
 
Step
Test steps
Test Data
Expected result
1
Click on the “Employees” link


Employees page opened.
2
Click on the “Add Employees” button.


Add Employees page with information opened.
3
Enter the “Name” field
“John”
The name field accepts input.
4
Enter “Surname”
“Sqwertyuioplkjhgfdazxcvbn”
The surname field accepts input.
5
Enter “Email address”
“smith@example.com”
The email address field accepts input.
6
Select “Locations” from the dropdown menu
“Becej”
The locations field accepts input.
7
Select “Tier” from the dropdown menu
“Benefiti test 300”
The tier field accepts input.
8
Click on the “Save” button
 
The user redirects to the “Employees page, with the success message: “Employee successfully created”.


Module name: Add Employees
Test executed by:
Test Title: Verify adding a New Employee with all fields filled.
Test Execution date:
Description: This test case verifies that a new employee can be successfully added when all mandatory and optional fields are filed with valid data.
 

 
Precondition: The user is logged in, and chooses an HR view.

 
Test Case ID_006
 
Step
Test steps
Test Data
Expected result
1
Click on the “Employees” link


Employees page opened.
2
Click on the “Add Employees” button.


Add Employees page with information opened.
3
Enter the “Name” field
“John”
The name field accepts input.
4
Enter “Surname”
“Smith”
The surname field accepts input.
5
Choose “Birthday” from date-picker
“10/10/1980”
Birthday date-picker accepts input.
6
Enter “Email address”
“smith@example.com”
The email address field accepts input.
7
Choose “Enroll date” from date-picker
“31/5/2023”
Enroll date date-picker accept input.
8
Enter the “Contact” field
065123456
The contact field accepts input.
9
Enter the “Team” field
“Teams”
The team field accepts input.
10
Select “Gender” from the dropdown menu
“Male”
“Male” is selected in the Gender dropdown menu.
11
Enter the “Position” field
“Test Lead”
The position field accepts input.
12
Select “Relationship” from the dropdown menu
“Married”
“Married” is selected in the Relationship dropdown menu.
13
Select “Locations” from the dropdown menu
“Becej”
The locations field accepts input.
14
Select “Tier” from the dropdown menu
“Benefiti test 300”
The tier field accepts input.
13
Click on the “Save” button
 
The user is redirected to the “Employees page, with the success message: “Employee successfully created” and it is in the list of employees.

Ovo je isto proba test case u drugacijem formatu, pa me interesuje dal moze i ovako da se pise, ili da se izbegava.
Module name: Add Employees
Test executed by:
Test Title: Verify adding a New Employee with only the mandatory field filed.
Test Execution date:
Description: This test case verifies that a new employee can be successfully added when only mandatory fields are filed with valid data, and optional fields are left empty.
 


Precondition: The user is logged in, and chooses an HR view.

 
Test Case ID_007
 
Step
Test steps
Test Data
Expected result
1
Click on the “Employees” link


Employees page opened.
2
Click on the “Add Employees” button.


Add Employees page with information opened.
3
Enter “John” in the Name field
Name: “John”
The name field is populated with “John”.
4
Enter “Doe” in the Surname field
Surname: “Doe”
The surname field is populated with “Doe”.
5
Enter john.doe@example.com in the Email address field
Email address
“john.doe@example.com”
The email address field is populated with “john.doe@example.com”
6
Select “Becej” from the dropdown menu
Locations: “Becej”
“Becej” is selected in the Locations dropdown menu.
7
Select “Benefiti test 300” from the Tier dropdown menu
Tier: “Benefiti test 300”
“Benefiti test 300” is selected from the Tier dropdown menu.
8
Click on the “Save” button
 
A new employee is successfully created, and a confirmation message is displayed.



Ovaj test case je ubacen iz Pairwise tabele radi probe i vezbe.

Module name: Add Employees
Test executed by:
Test Title: Verify user details for a male, single, in Novi Sad with Tier 2 benefiti.
Test Execution date:
Description: Verify that user details are correctly saved for a male, single, in Novi Sad with Tier 2 benefiti.
 

 
Precondition: The user is logged in, and chooses an HR view.

 
Test Case ID_008
 
Step
Test steps
Test Data
Expected result


Click on the “Employees” link


Employees page opened.


Click on the “Add Employees” button.


Add Employees page with information opened.
1
Fill in the gender field.
Gender: “Male”
The gender field is populated with “Male”.
2
Fill in the family status field.
Family status: “single”
The family status field is populated with “single”.
3
Fill in the locations field.
Locations:
“Novi Sad”
The locations field is populated with “Novi Sad”
4
Fill in the Tier field
Tier: “tier2”
The tier field is populated with “tier2”.
5
Save the user details.
 
User details are successfully saved.
6
Retrieve the user details and verify the saved information.
 
The user profile shows: Gender: male
Family status: single
Locations: Novi Sad
Tier: tier2

