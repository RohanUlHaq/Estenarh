import type { Options } from '@wdio/types'

export const config: any = {
    // new commit 
    port: 4723,
    specs: [
        './test/specs/Test1.ts'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel 5',
        'appium:platformVersion': '14.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'C:/Users/IOMechs/Documents/es/app/Estenarh_v8a(1).apk',
        'appium:noReset': true  // This prevents app reinstallation
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 12000,
    connectionRetryTimeout: 100000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 150000
    },
};