/*
 * Your regex expression goes here -- It will be tested against the URL
 */
const regex = /homeserve/gi;

/*
 * Your target URLs go here as an array of strings
 */     
const targetUrls = [];

/*
 * If you need to initialize or reset anything when the page reloads, use this function
 */
const initialize = () => {};

// Mimics export
(() => ({regex, targetUrls, initialize}))();

export {regex, targetUrls, initialize};
