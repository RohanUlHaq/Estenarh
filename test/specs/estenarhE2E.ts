/// <reference types="@wdio/globals/types" />
import allure from '@wdio/allure-reporter';
import { cardInputs } from '../constants/cardDetails';
import { miscellaneous } from '../constants/miscellaneous';

const login_screenLocators = require('../screenobjects/login_screen-locators');
const signup_screenLocators = require('../screenobjects/signup_screen-locators');
const forgot_passwordLocators = require('../screenobjects/forgot_password-locators');
const book_sessionLocators = require('../screenobjects/book_session-locators');
const gift_walletLocators = require('../screenobjects/gift_wallet-locators');
const { completeLoginFlow, ForgotPassword, SignupFlow, BookSessionTabby, SavedCardsbookingflow, Packagebuy, GiftWalletFlow, E2EFlow } = require('../helpers/testFlows');

describe('Estenarh App Test Suite', () => {
    // beforeEach(async function () {
    //     allure.addFeature('Estenarh Mobile App');
    // });

    // it('login flow', async () => {
    //     allure.addFeature('Authentication');
    //     allure.addSeverity('critical');
    //     allure.addDescription('Verify user can login with valid credentials', 'text');
    //     allure.startStep('Execute login flow');
    //     await completeLoginFlow({
    //         email: miscellaneous.ClientMail,
    //         password: miscellaneous.ClientPassword
    //     });
    //     allure.endStep();
    // })

    // it('Signup flow with fresh build', async () => {
    //     allure.addFeature('Authentication');
    //     allure.addSeverity('critical');
    //     allure.addDescription('Verify new user registration process', 'text');

    //     allure.startStep('Complete signup process');
    //     await SignupFlow({
    //         otp: miscellaneous.ClientOTP,
    //         password: miscellaneous.ClientPassword,
    //         confirmpassword: miscellaneous.ClientConfirmPassword
    //     });
    //     allure.endStep();
    // });

    // it('Package buying', async () => {
    //     allure.addFeature('Package Purchase');
    //     allure.addSeverity('critical');
    //     allure.addDescription('Verify user can purchase a consultation package', 'text');
    //     allure.startStep('Select and purchase package');
    //     await Packagebuy({
    //         consultant: miscellaneous.ConsultantName,
    //         cvc: cardInputs.CVC
    //     });
    //     allure.endStep();
    // });

    //     it('Forgot Password', async () => {
    //         allure.addFeature('Authentication');
    //         allure.addSeverity('critical');
    //         allure.addDescription('Verify forgot password functionality', 'text');

    //         allure.startStep('Initiate password reset');
    //         await ForgotPassword({
    //             email: miscellaneous.ClientMail,
    //             otp: miscellaneous.ClientOTP,
    //             password: miscellaneous.ClientPassword,
    //             confirmpassword: miscellaneous.ClientConfirmPassword
    //         });
    //         allure.endStep();
    //     });

    // it('Book Session with Tabby', async () => {
    //     allure.addFeature('Payment Processing');
    //     allure.addSeverity('critical');
    //     allure.addDescription('Verify booking session using Tabby payment method', 'text');

    //     allure.startStep('Book session with consultant');
    //     await BookSessionTabby({
    //         consultant: miscellaneous.ConsultantName2,
    //         email: cardInputs.TabbyEmail,
    //         phone: cardInputs.TabbyPhone,
    //         otp: cardInputs.TabbyOTP
    //     });
    //     allure.endStep();
    // });

    //     it('Gift Wallet Flow', async () => {
    //         allure.addFeature('Gift Wallet');
    //         allure.addSeverity('critical');
    //         allure.addDescription('Verify gift wallet functionality', 'text');

    //         allure.startStep('Gift wallet flow for logged in client')
    //         await GiftWalletFlow({
    //             email: 'nayela@mailinator.com',
    //             name: 'Nayela',
    //             message: 'Here is a heart whelming gift for You!',
    //             cvc: cardInputs.CVC,
    //             cardNumber: cardInputs.CardNumber,
    //             expiryDate: cardInputs.ExpiryDate,
    //             cardholderName: cardInputs.CardHolderName
    //         });
    //         allure.endStep();
    //     })

    it('E2E Flow', async () => {
        allure.addFeature('End-to-End Flow');
        allure.addSeverity('critical');
        allure.addDescription('Verify complete user journey from login to booking a session', 'text');
        allure.startStep('Execute end-to-end user flow');
        await E2EFlow({
            email: miscellaneous.ClientMail,
            password: miscellaneous.ClientPassword,
            consultant: miscellaneous.ConsultantName,
            cvc: cardInputs.CVC
        });
        allure.endStep();
    });
});