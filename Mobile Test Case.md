Here’s my mobile test case document for application Instagram

```markdown
# Mobile Test Case Document

## Application: Instagram

---

### Test Executed By:
### Test Title: Verify login with valid credentials
**Test Execution Date:**  
**Description:** This test case verifies that the user can log in with a valid username and password.

**Precondition:** The user has a registered Instagram account with a valid username and password.

| Test Case ID | TC_001 |
|--------------|--------|
| **Step**     | **Test Steps**                      | **Test Data**         | **Expected Result**                                           |
|--------------|--------------------------------------|------------------------|--------------------------------------------------------------|
| 1            | Open the Instagram app.             |                        | The app opens successfully.                                  |
| 2            | Enter a valid username.             | `newaccount34`         | The username is entered.                                    |
| 3            | Enter valid password.               | `123456789`            | Password is entered.                                        |
| 4            | Click the “Log In” button.         |                        | A login attempt is made, and the user is successfully logged in and navigated to the home feed. |

---

### Test Title: Verify sending a direct message to a user.
**Test Execution Date:**  
**Description:** This test case verifies successfully sending a direct message to another user.

**Precondition:** The user is logged into their Instagram account.

| Test Case ID | TC_002 |
|--------------|--------|
| **Step**     | **Test Steps**                           | **Test Data**          | **Expected Result**                                           |
|--------------|------------------------------------------|------------------------|--------------------------------------------------------------|
| 1            | Go to the Direct Messages section.      |                        | DM section is displayed.                                     |
| 2            | Select a correspondence user from DM    | `asRock2233`           | The user is selected.                                       |
| 3            | Type a message in the message field.    | `Hello World`          | The message is entered in the message field.                |
| 4            | Click “Send”.                            |                        | The message is successfully sent and appears in the chat thread. |

---

### Test Title: Verify user can’t log in with invalid credentials.
**Test Execution Date:**  
**Description:** This test case verifies that login fails with an invalid username and password.

**Precondition:** The user doesn’t have an account with the given invalid credentials.

| Test Case ID | TC_003 |
|--------------|--------|
| **Step**     | **Test Steps**                      | **Test Data**         | **Expected Result**                                         |
|--------------|--------------------------------------|------------------------|------------------------------------------------------------|
| 1            | Open the Instagram app.             |                        | The app opened successfully.                               |
| 2            | Enter an invalid username.          | `duck-duck`            | The username is entered.                                   |
| 3            | Enter an invalid password.          | `123dfr456`            | Password is entered.                                       |
| 4            | Click the “Log In” button.         |                        | The error message is displayed indicating invalid credentials. |

---

### Test Title: Verify user can't send a message to the user that blocked the current account.
**Test Execution Date:**  
**Description:** This test case verifies that sending a direct message fails to a user who has blocked your Instagram account.

**Precondition:** The user is logged into their Instagram account.

| Test Case ID | TC_004 |
|--------------|--------|
| **Step**     | **Test Steps**                           | **Test Data**          | **Expected Result**                                         |
|--------------|------------------------------------------|------------------------|------------------------------------------------------------|
| 1            | Go to the Direct Messages section.      |                        | DM section is displayed.                                   |
| 2            | Select the correspondence user who blocked the account. | `asRock2233` | The user is selected.                                     |
| 3            | Type a message in the input field.      | `Hello World`          | The message is entered in the message field.              |
| 4            | Click “Send”.                            |                        | The error message is displayed indicating that the message cannot be sent. |

---

### Test Title: Verify user can’t update the profile bio with excessive characters.
**Test Execution Date:**  
**Description:** This test case verifies that the profile bio update fails when the bio exceeds the characters limit.

**Precondition:** The user is logged into their Instagram account.

| Test Case ID | TC_005 |
|--------------|--------|
| **Step**     | **Test Steps**                           | **Test Data**              | **Expected Result**                                         |
|--------------|------------------------------------------|-----------------------------|------------------------------------------------------------|
| 1            | Go to the profile page.                 |                             | The profile page is displayed.                             |
| 2            | Click on “Edit Profile”.                |                             | Edit Profile screen appears.                               |
| 3            | Enter a bio update in the characters field. | `Excessive characters bio (31)` | Bio update is entered.                                     |
| 4            | Save the changes.                       |                             | The error message is displayed indicating that the bio exceeds the characters limit. |

---

### Test Title: Verify several likes on one post won’t increase the number of likes.
**Test Execution Date:**  
**Description:** This test case verifies that liking a post multiple times does not count as multiple likes.

**Precondition:** The user is logged into their Instagram account.

| Test Case ID | TC_006 |
|--------------|--------|
| **Step**     | **Test Steps**                     | **Test Data**        | **Expected Result**                                   |
|--------------|-------------------------------------|----------------------|------------------------------------------------------|
| 1            | Navigate to the post in the feed.  |                      | The post is displayed.                               |
| 2            | Click the “Like” button multiple times. |                  | The post is liked once, and the like count increased once. |

---

### Test Title: Verify story highlight creation and deletion.
**Test Execution Date:**  
**Description:** This test case verifies the process of creating and deleting story highlights on the user account.

**Precondition:** The user is logged into their Instagram account and has active stories.

| Test Case ID | TC_007 |
|--------------|--------|
| **Step**     | **Test Steps**                             | **Test Data**            | **Expected Result**                                   |
|--------------|--------------------------------------------|---------------------------|------------------------------------------------------|
| 1            | Go to the profile page.                   |                           | The profile page is displayed.                       |
| 2            | Click on the “ + ” button under highlights. |                         | A highlight creation screen is displayed.            |
| 3            | Select a story to add to the highlight.    | `Beautiful Nature`       | Stories are selected.                                |
| 4            | Enter a name for the highlight.           | `Beautiful World`         | Highlight name is entered.                           |
| 5            | Save the highlight.                        |                           | Highlight attempt is made, and is successfully created and displayed on the profile. |
| 6            | Long press on the created highlight.      |                           | Highlight options are displayed.                     |
| 7            | Click “Delete Highlight”.                  |                           | A delete attempt is made, and a highlight is successfully deleted. |

---

### Test Title: Verify account deactivation and reactivation.
**Test Execution Date:**  
**Description:** This test case verifies that an account can be temporarily deactivated and later reactivated successfully.

**Precondition:** The user is logged into their Instagram account.

| Test Case ID | TC_008 |
|--------------|--------|
| **Step**     | **Test Steps**                             | **Test Data**            | **Expected Result**                                   |
|--------------|--------------------------------------------|---------------------------|------------------------------------------------------|
| 1            | Navigate to the settings menu.           |                           | The settings menu is displayed.                      |
| 2            | Select “Account” from the options.       |                           | Account settings are displayed.                      |
| 3            | Click on “Deactivate Account”.           |                           | The account deactivation screen is displayed.        |
| 4            | Select a reason for deactivation.        | `Other`                   | The reason is selected.                              |
| 5            | Enter the account password.               | `123456789`               | Password is entered.                                 |
| 6            | Confirm the deactivation.                 |                           | A deactivation attempt is made, and the account is successfully deactivated. |
| 7            | Log in again to reactivate the account.  | `Username: newaccount34`, `Password: 123456789` | A login attempt is made, the account is successfully reactivated, and the user is logged in. |

---
```

