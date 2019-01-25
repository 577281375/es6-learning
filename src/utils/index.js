export function log(message,variable) {
    if (!(process && process.env && process.env.process == 'production')) {
        console.warn(`${message}`);
        console.log( variable);
    };
};
