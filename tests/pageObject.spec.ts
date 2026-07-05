import {test, expect} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker'

test.beforeEach(async({page}) => {
    await page.goto('/')
})

test('navigate to form page', async({page}) => {
    const pm = new PageManager(page)
    //const navigateTo = new NavigatioPage(page)// new instance of the class
    await pm.navigateTo().formLayouPage()
    await pm.navigateTo().datepickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toastrPage()
    await pm.navigateTo().tooltipPage()

})

test('paramwertiezd methods', async({page}) => {
    const pm = new PageManager(page)
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`

    await pm.navigateTo().formLayouPage()
    await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialAndSelectOptions('tesdt@test.com', 'Welcome1', 'Option 2')
    //await page.screenshot({path: 'screenshots/formLayoutPage.png'})
    await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, false)
    await page.locator('nb-card', {hasText: "Inline form"}).screenshot({path: 'screenshots/inlineForm.png'})

})

test('date picker', async({page}) => {
    const pm = new PageManager(page)

    await pm.navigateTo().datepickerPage()
    await pm.onDatepickerPage().selectCommonDatePickerDateFormToday(6)
    await pm.onDatepickerPage().selectDatePickerWithRangeFromToday(6, 15)
})

test.only('testing with argos ci', async({page}) => {
    const pm = new PageManager(page)
    await pm.navigateTo().formLayouPage()
    await pm.navigateTo().datepickerPage()
})
