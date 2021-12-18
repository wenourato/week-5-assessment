
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})




test ('Removed bot goes back to choices', async () => {
    await driver.findElement(By.id('draw')).click()

    await driver.findElement(By.xpath('//button[text()="Add to Duo"])[1]')).click()
    await driver.findElement(By.xpath('(//button[text()="Remove from Duo"])')).click()
    const returnedCard = await driver.findElement(By.xpath('(//div[@class="bot-card outline"][5])'))

    const displayed = await returnedCard.isDisplayed()
    expect(displayed).toBe(true)
})

test('Add to duo button displays player-id div', async() => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(3000)

    await driver.findElement(By.className('bot-btn')).click()
    await driver.sleep(3000)

    const div = await driver.findElement(By.id('player-duo'))
    const displayed = await div.isDisplayed()
    expect(displayed).toBe(true)
})


test('Clicking draw button displays the div with id "choices"', async () => {
    await driver.findElement(By.id('draw')).click()
    driver.sleep(3000)
 
    const checkDivId = await driver.findElement(By.id('choices'))
    const displayed = await checkDivId.isDisplayed()
    expect(displayed).toBe(true)
})