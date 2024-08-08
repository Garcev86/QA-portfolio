Here’s my Mobile test cases for application Instagram.

---

### Application: Instagram

#### Test Case 1: Verify Login with Valid Credentials  
**Test Execution Date:**  
**Description:** This test case verifies that the user can log in with a valid username and password.  

**Precondition:** The user has a registered Instagram account with a valid username and password.  

**Test Case ID:** TC_001  

| Step | Test Steps                             | Test Data        | Expected Result                                                        |
|------|----------------------------------------|------------------|-----------------------------------------------------------------------|
| 1    | Open the Instagram app.                |                  | The app opens successfully.                                          |
| 2    | Enter a valid username.                | “newaccount34”   | The username is entered.                                            |
| 3    | Enter a valid password.                | “123456789”      | The password is entered.                                            |
| 4    | Click the “Log In” button.             |                  | A login attempt is made, and the user is successfully logged in and navigated to the home feed. |

---

#### Test Case 2: Verify Sending a Direct Message to a User  
**Test Execution Date:**  
**Description:** This test case verifies successfully sending a direct message to another user.  

**Precondition:** The user is logged into their Instagram account.  

**Test Case ID:** TC_002  

| Step | Test Steps                             | Test Data      | Expected Result                                                        |
|------|----------------------------------------|----------------|-----------------------------------------------------------------------|
| 1    | Go to the Direct Messages section.     |                | DM section is displayed.                                            |
| 2    | Select a correspondence user from DM.  | “asRock2233”   | The user is selected.                                              |
| 3    | Type a message in the message field.   | “Hello World”  | The message is entered in the message field.                       |
| 4    | Click “Send”.                          |                | The message is successfully sent and appears in the chat thread.    |

---

#### Test Case 3: Verify User Can’t Log In with Invalid Credentials  
**Test Execution Date:**  
**Description:** This test case verifies that login fails with an invalid username and password.  

**Precondition:** The user doesn’t have an account with the given invalid credentials.  

**Test Case ID:** TC_003  

| Step | Test Steps                             | Test Data      | Expected Result                                                        |
|------|----------------------------------------|----------------|-----------------------------------------------------------------------|
| 1    | Open the Instagram app.                |                | The app opens successfully.                                          |
| 2    | Enter an invalid username.              | “duck-duck”    | The username is entered.                                            |
| 3    | Enter an invalid password.              | “123dfr456”    | The password is entered.                                            |
| 4    | Click the “Log In” button.             |                | The error message is displayed indicating invalid credentials.       |

---

#### Test Case 4: Verify User Can't Send a Message to a User That Blocked the Current Account  
**Test Execution Date:**  
**Description:** This test case verifies that sending a direct message fails to a user who has blocked your Instagram account.  

**Precondition:** The user is logged into their Instagram account.  

**Test Case ID:** TC_004  

| Step | Test Steps                             | Test Data      | Expected Result                                                        |
|------|----------------------------------------|----------------|-----------------------------------------------------------------------|
| 1    | Go to the Direct Messages section.     |                | DM section is displayed.                                            |
| 2    | Select the correspondence user who blocked the account. | “asRock2233” | The user is selected.                                              |
| 3    | Type a message in the input field.     | “Hello World”  | The message is entered in the message field.                       |
| 4    | Click “Send”.                          |                | The error message is displayed indicating that the message cannot be sent. |

---

#### Test Case 5: Verify User Can’t Update the Profile Bio with Excessive Characters  
**Test Execution Date:**  
**Description:** This test case verifies that the profile bio update fails when the bio exceeds the character limit.  

**Precondition:** The user is logged into their Instagram account.  

**Test Case ID:** TC_005  

| Step | Test Steps                             | Test Data              | Expected Result                                                        |
|------|----------------------------------------|------------------------|-----------------------------------------------------------------------|
| 1    | Go to the profile page.                |                        | The profile page is displayed.                                      |
| 2    | Click on “Edit Profile”.                |                        | Edit Profile screen appears.                                       |
| 3    | Enter a bio update in the character field. | Excessive characters *31 | Bio update is entered.                                             |
| 4    | Save the changes made.                 |                        | The error message is displayed indicating that the bio exceeds the character limit. |

---

#### Test Case 6: Verify Several Likes on One Post Won’t Increase the Number of Likes  
**Test Execution Date:**  
**Description:** This test case verifies that liking a post multiple times does not count as multiple likes.  

**Precondition:** The user is logged into their Instagram account.  

**Test Case ID:** TC_006  

| Step | Test Steps                             | Test Data      | Expected Result                                                        |
|------|----------------------------------------|----------------|-----------------------------------------------------------------------|
| 1    | Navigate to the post in the feed.      |                | The post is displayed.                                             |
| 2    | Click the “Like” button multiple times. |                | The post is liked once, and the like count increases once.          |

---

#### Test Case 7: Verify Story Highlight Creation and Deletion  
**Test Execution Date:**  
**Description:** This test case verifies the process of creating and deleting story highlights on the user account.  

**Precondition:** The user is logged into their Instagram account and has active stories.  

**Test Case ID:** TC_007  

| Step | Test Steps                             | Test Data            | Expected Result                                                        |
|------|----------------------------------------|----------------------|-----------------------------------------------------------------------|
| 1    | Go to the profile page.                |                      | The profile page is displayed.                                      |
| 2    | Click on the “ + ” button under the highlights section. |                      | A highlight creation screen is displayed.                           |
| 3    | Select a story to add to the highlight. | “Beautiful Nature”   | Stories are selected.                                              |
| 4    | Enter a name for the highlight.        | “Beautiful World”    | Highlight name is entered.                                        |
| 5    | Save the highlight.                     |                      | Highlight attempt is made, and is successfully created and displayed on the profile. |
| 6    | Long press on the created highlight.    |                      | Highlight options are displayed.                                   |
| 7    | Click “Delete Highlight”.               |                      | A delete attempt is made, and the highlight is successfully deleted. |

---

#### Test Case 8: Verify Account Deactivation and Reactivation  
**Test Execution Date:**  
**Description:** This test case verifies that an account can be temporarily deactivated and later reactivated successfully.  

**Precondition:** The user is logged into their Instagram account.  

**Test Case ID:** TC_008  

| Step | Test Steps                             | Test Data            | Expected Result                                                        |
|------|----------------------------------------|----------------------|-----------------------------------------------------------------------|
| 1    | Navigate to the settings menu.         |                      | The settings menu is displayed.                                      |
| 2    | Select “Account” from the options.     |                      | Account settings are displayed.                                     |
| 3    | Click on “Deactivate Account”.         |                      | The account deactivation screen is displayed.                       |
| 4    | Select a reason for deactivation.      | “Other”              | The reason is selected.                                            |
| 5    | Enter the account password.             | “123456789”          | Password is entered.                                              |
| 6    | Confirm the deactivation.              |                      | A deactivation attempt is made, and the account is successfully deactivated. |
| 7    | Log in again to reactivate the account. | Username: “newaccount34”<br>Password: “123456789” | A login attempt is made, the account is successfully reactivated, and the user is logged in. |

--- 

