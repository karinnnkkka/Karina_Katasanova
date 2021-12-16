const {Builder,By,Key,util,Actions, List,WebElement,Browser,} = require('selenium-webdriver');
require('chromedriver')
  
  async function test() {
    var driver = await new Builder().forBrowser('chrome').build();
  
    await driver.get('https://opensource-demo.orangehrmlive.com/');
  
    await driver.findElement(By.id('txtUsername')).sendKeys('Admin', Key.ENTER);
    await driver.findElement(By.id('txtPassword')).sendKeys('admin123', Key.ENTER);
    await driver.findElement(By.id('menu_admin_viewAdminModule')).click();
    await driver.findElement(By.id('menu_admin_Job')).click();
    await driver.findElement(By.id('menu_admin_viewPayGrades')).click();
    await driver.findElement(By.id('btnAdd')).click();
  
    await driver.findElement(By.id('payGrade_name')).sendKeys('TEST payGrade');
    await driver.findElement(By.id('btnSave')).click();
    await driver.findElement(By.id('btnAddCurrency')).click();
    const currencyName = 'USD - United States Dollar'
    await driver.findElement(By.id('payGradeCurrency_currencyName')).sendKeys(currencyName);
    await driver.findElement(By.id('payGradeCurrency_minSalary')).sendKeys('1200');
    await driver.findElement(By.id('payGradeCurrency_maxSalary')).sendKeys('120000000');
    await driver.findElement(By.id('btnSaveCurrency')).click();
  
    await driver.findElement(By.id('menu_admin_viewAdminModule')).click();
    await driver.findElement(By.id('menu_admin_Job')).click();
    await driver.findElement(By.id('menu_admin_viewPayGrades')).click();
  
    const el = await driver.findElement(By.xpath("//td[@class='left']/a[text()='TEST payGrade']"));
  
    const row = await el.findElement(By.xpath('./../..'));
  
    if (
      // (
      //   await row
      //     .findElement(By.xpath('td[text()="TEST payGrade"]'))
      //     .isDisplayed()
      // ).valueOf() &&
      (
        await row
          .findElement(By.xpath('td[text()="United States Dollar"]'))
          .isDisplayed()
      ).valueOf() //&&
      // (await row.findElement(By.xpath('td[1]/input')).isDisplayed()).valueOf()
    ) {
      await row.findElement(By.xpath('td[1]/input')).click()
    } else {
      throw new Error('Element is not present in the list')
    }
  
    await driver.findElement(By.id('btnDelete')).click()
    await driver.findElement(By.id('dialogDeleteBtn')).click()
  
    try {
      await row
        .findElement(By.xpath('td[text()="United States Dollar"]'))
        .isDisplayed()
    } catch (e) {
      console.log('Element is no more present in the list')
    }
  
    await driver.quit()
  }
  
  test();





