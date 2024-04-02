export const logger = store => next => action => {
    if (typeof action === 'function') {
        action(store.dispatch, store.getState)
    } else {
        console.log('Dispatch!', store.getState())
        next(action)
        console.log('After Dispatch!', store.getState())
    }    
}