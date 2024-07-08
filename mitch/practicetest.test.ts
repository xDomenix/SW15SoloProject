import { Practice } from "./PracticePage";
const practiceInstance = new Practice();

test('firstTest', async () => {
    await practiceInstance.navigate();
    await practiceInstance.click(practiceInstance.cServ);
    await practiceInstance.click(practiceInstance.Contact); // Corrected the name to match the property defined in Practice class
    await practiceInstance.click(practiceInstance.subj);
    await practiceInstance.click(practiceInstance.name);
    await practiceInstance.click(practiceInstance.phoneN);
    await practiceInstance.click(practiceInstance.email);
    await practiceInstance.click(practiceInstance.zipCode);
    await practiceInstance.click(practiceInstance.storeAd);
    await practiceInstance.click(practiceInstance.findStore);
    await practiceInstance.driver.sleep(2000);
    await practiceInstance.driver.quit();
});

test('secondTest', async () => {
    await practiceInstance.navigate();
    await practiceInstance.driver.navigate().back();
    await practiceInstance.click(practiceInstance.cServ);
    await practiceInstance.driver.navigate().back();
    await practiceInstance.click(practiceInstance.Contact); // Corrected the name to match the property defined in Practice class
    await practiceInstance.driver.navigate().back();
    await practiceInstance.click(practiceInstance.subj);
    await practiceInstance.driver.navigate().back();
    await practiceInstance.click(practiceInstance.name);
    await practiceInstance.driver.navigate().back();
    await practiceInstance.click(practiceInstance.phoneN);
    await practiceInstance.driver.navigate().back();
    await practiceInstance.click(practiceInstance.email);
    await practiceInstance.driver.navigate().back();
    await practiceInstance.click(practiceInstance.zipCode);
    await practiceInstance.driver.navigate().back();
    await practiceInstance.click(practiceInstance.storeAd);
    await practiceInstance.driver.navigate().back();
    await practiceInstance.click(practiceInstance.findStore);
    await practiceInstance.driver.navigate().back();
});
