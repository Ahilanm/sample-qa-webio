let WDIOReporter = require('@wdio/reporter').default;
const request = require("sync-request");

class CustomReporter extends WDIOReporter {
    constructor(options) {
        /*
         * make reporter to write to the output stream by default
         */
        options = Object.assign(options, { stdout: true })
        super(options)
    }

    onTestPass(test) {
        this.write(`Congratulations! Your test "${test.title}" passed 👏`);
    }

    onTestEnd(test) {
        let result = request('GET', "https://dckap.qatouch.com/logcheck");
        if (result.error) {
            if (error) {
                error(result.error);
            } else {
                throw new Error(result.error);
            }
        }

        this.write(`Congratulations! Your test "${test.title}" Ended 👏`);
    }


}

module.exports = CustomReporter;