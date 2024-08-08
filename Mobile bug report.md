Here’s my Mobile bug report using Samsung Test Lab emulator on a demo website SwagLabs.

**Attachment:** [Bug report attachment](https://drive.google.com/drive/u/0/folders/1xUD6l0xXnEAigtqNWK27cKYlGfJj_FBt)
```
# Bug Reports

## Bug ID: Swag Labs 001

**Summary:** The checkout field “Your information” for purchasing products accepts numbers and special characters for First Name and Last Name.

**Environment:** 
- Android 14
- Samsung Galaxy S22
- Chrome Browser version 126

**Steps to Reproduce:**
1. Open the [Sauce Demo](https://www.saucedemo.com/) in the browser.
2. Enter a valid username and password.
3. Click on the “Login” button.
4. Click the “ADD TO CART” button for any product.
5. Click on the cart icon in the upper right corner.
6. Click on the “CHECKOUT” button.
7. Enter numbers in the “Your Information” fields.
8. Click on the “CONTINUE” button.
9. Scroll down and click on the “FINISH” button.

**Expected Results:** An error message should be displayed: “Only letters between 10 and 20 are accepted” in the First Name and Last Name fields.

**Actual Results:** An error message is not displayed after entering numbers in the First Name and Last Name fields, and the user successfully purchases the product order.

**Severity:** Medium  
**Priority:** Medium  

---

## Bug ID: Swag Labs 002

**Summary:** The dropdown filter on the website overlaps with the main title “Products” when accessed on Android devices.

**Environment:** 
- Android 14
- Samsung Galaxy S22
- Chrome Browser version 126

**Steps to Reproduce:**
1. Open the [Sauce Demo](https://www.saucedemo.com/) in the browser.
2. Enter a valid username and password.
3. Click on the “Login” button.
4. Observe the positioning of the dropdown filter.

**Expected Results:** The dropdown filter should expand without overlapping the title content or any other content on the website, allowing users to normally interact in ordering products from the website.

**Actual Results:** The dropdown filter overlaps the title content, making the website look unappealing, which may lead to a decrease in site usage.

**Severity:** Low  
**Priority:** Low  
```

