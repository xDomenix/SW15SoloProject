import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class Practice extends BasePage {
    cServ: By = By.xpath('(//button[@class="sc-1khk1ow-0 sc-1khk1ow-1 sc-1rwgv8q-1 dqNlQo"])[1]');
    Contact: By = By.xpath('(//a[@class="sc-121hctt-0 MWcza sc-1xcr92g-0 hVfLxh"])[1]');
    subj: By = By.xpath('//div[@class="react-select__control css-yk16xz-control"]');
    name: By = By.id('contactUsForm-Name-name');
    phoneN: By = By.id('contactUsForm-PhoneNumber-phoneNumber');
    email: By = By.id('contactUsForm-Email-email');
    zipCode: By = By.id('contactUsForm-ZipCode-zipCode');
    storeAd: By = By.id('contactUsForm-StoreAddress-storeNumber');
    findStore: By = By.xpath('//button[@class="sc-1khk1ow-0 sc-1khk1ow-1 sc-1wbczwm-0 jnQKgL"]');
    DateofServ: By = By.id('contactUsForm-DateofService-dateOfService');
    calendar: By = By.xpath('//img[@class="bhzba7-0 eWwbaC bhzba7-1 sc-164onah-3 iZPtjv"]');
    inorEst: By = By.id('contactUsForm-InvoiceorEstimate-invoiceOrEstimate');
    comments: By = By.id('contactUsForm-Comments');
    checkBox: By = By.xpath('//div[@class="recaptcha-checkbox-border"]');
    robot: By = By.xpath('//label[@class="rc-anchor-center-item rc-anchor-checkbox-label"]');
    captcha: By = By.xpath('//div[@class="rc-anchor-logo-img rc-anchor-logo-img-portrait"]');

    constructor() {
        super({url: "https://www.bigotires.com/?y_source=1_MTAyOTY0MjQ2Mi03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D"});
    }
}