//  ----------------------------------------------------------------------------
//  Logger
//  ----------------------------------------------------------------------------
//
//  Action and state logging based on interaction in the app. Able to troubleshoot
//  issues that may arrise in state management.
//
const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log('The action: ', action);
    const result = next(action);
    console.log('The new state: ', store.getState());
    console.groupEnd();
    return result;
};

export default logger;
