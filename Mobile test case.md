Here is the content of my Mobile test cases for application Instagram.

```
# Instagram Mobile Testing - Test Cases

## Test Case ID: 001 - Verify login with valid credentials

| **Step** | **Test Steps**               | **Test Data**            | **Expected Result**                                                       |
|----------|------------------------------|--------------------------|---------------------------------------------------------------------------|
| 1        | Open the Instagram app.       |                          | The app opens successfully.                                               |
| 2        | Enter a valid username.       | Username: "newaccount34" | The username is entered.                                                  |
| 3        | Enter a valid password.       | Password: "123456789"    | Password is entered.                                                      |
| 4        | Click the "Log In" button.    |                          | The user is successfully logged in and navigated to the home feed.        |

## Test Case ID: 002 - Verify sending a direct message to a user

| **Step** | **Test Steps**                           | **Test Data**            | **Expected Result**                                                       |
|----------|------------------------------------------|--------------------------|---------------------------------------------------------------------------|
| 1        | Go to the Direct Messages section.       |                          | DM section is displayed.                                                  |
| 2        | Select a correspondence user from DM.    | "asRock2233"             | The user is selected.                                                     |
| 3        | Type a message in the message field.     | "Hello World"            | The message is entered in the message field.                              |
| 4        | Click "Send".                            |                          | The message is successfully sent and appears in the chat thread.          |

## Test Case ID: 003 - Verify user can’t log in with invalid credentials

| **Step** | **Test Steps**               | **Test Data**            | **Expected Result**                                                       |
|----------|------------------------------|--------------------------|---------------------------------------------------------------------------|
| 1        | Open the Instagram app.       |                          | The app opened successfully.                                              |
| 2        | Enter an invalid username.    | "duck-duck"              | The username is entered.                                                  |
| 3        | Enter an invalid password.    | "123dfr456"              | Password is entered.                                                      |
| 4        | Click the "Log In" button.    |                          | The error message is displayed indicating invalid credentials.            |

## Test Case ID: 004 - Verify user can't send a message to the user that blocked the current account

| **Step** | **Test Steps**                                      | **Test Data**            | **Expected Result**                                                       |
|----------|-----------------------------------------------------|--------------------------|---------------------------------------------------------------------------|
| 1        | Go to the Direct Messages section.                  |                          | DM section is displayed.                                                  |
| 2        | Select the correspondence user from DM.             | "asRock2233"             | The user is selected.                                                     |
| 3        | Type a message in the input field.                  | "Hello World"            | The message is entered in the message field.                              |
| 4        | Click "Send".                                       |                          | The error message is displayed indicating that the message cannot be sent.|

## Test Case ID: 005 - Verify user can’t update the profile bio with excessive characters

| **Step** | **Test Steps**                       | **Test Data**                   | **Expected Result**                                                       |
|----------|--------------------------------------|---------------------------------|---------------------------------------------------------------------------|
| 1        | Go to the profile page.              |                                 | The profile page is displayed.                                            |
| 2        | Click on "Edit Profile".             |                                 | Edit Profile screen appears.                                              |
| 3        | Enter a bio update in the character field. | Excessive characters bio *31   | Bio update is entered.                                                    |
| 4        | Save the changes that the user made. |                                 | The error message is displayed indicating that the bio exceeds the character limit.|

## Test Case ID: 006 - Verify several likes on one post won't increase the number of likes

| **Step** | **Test Steps**                              | **Test Data** | **Expected Result**                                     |
|----------|---------------------------------------------|---------------|---------------------------------------------------------|
| 1        | Navigate to the post in the feed.           |               | The post is displayed.                                  |
| 2        | Click the "Like" button multiple times.     |               | The post is liked once, and the like count increases once.|

## Test Case ID: 007 - Verify story highlight creation and deletion

| **Step** | **Test Steps**                         | **Test Data**          | **Expected Result**                                                   |
|----------|----------------------------------------|------------------------|------------------------------------------------------------------------|
| 1        | Go to the profile page.                |                        | The profile page is displayed.                                        |
| 2        | Click on the "+" button under the highlights section. |                        | A highlight creation screen is displayed.                             |
| 3        | Select a story to add to the highlight. | "Beautiful Nature"     | Stories are selected.                                                 |
| 4        | Enter a name for the highlight.         | "Beautiful World"      | Highlight name is entered.                                            |
| 5        | Save the highlight.                    |                        | Highlight is successfully created and displayed on the profile.       |
| 6        | Long press on the created highlight.   |                        | Highlight options are displayed.                                      |
| 7        | Click "Delete Highlight".              |                        | The highlight is successfully deleted.                                |

## Test Case ID: 008 - Verify account deactivation and reactivation

| **Step** | **Test Steps**                             | **Test Data**            | **Expected Result**                                                      |
|----------|--------------------------------------------|--------------------------|---------------------------------------------------------------------------|
| 1        | Navigate to the settings menu.             |                          | The settings menu is displayed.                                           |
| 2        | Select "Account" from the options.         |                          | Account settings are displayed.                                           |
| 3        | Click on "Deactivate Account".             |                          | The account deactivation screen is displayed.                             |
| 4        | Select a reason for deactivation.          | "Other"                  | The reason is selected.                                                   |
| 5        | Enter the account password.                | "123456789"              | Password is entered.                                                      |
| 6        | Confirm the deactivation.                  |                          | The account is successfully deactivated.                                  |
| 7        | Log in again to reactivate the account.    | Username: "newaccount34" | The account is successfully reactivated, and the user is logged in.       |
|          |                                            | Password: "123456789"    |                                                                           |
```

