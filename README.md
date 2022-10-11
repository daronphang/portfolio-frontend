## Testing

Modal, navigation, redux.

### React Hooks

```console
$ npm test
```

react/hooks was previously not compatible with React 18, and PR created to implement **minimal renderHook with result, rerender and unmount**. There is currently no support for asyncutils i.e. waitForNextUpdate, waitFor, waitForValueToChange. Current discussion is that they are more of an implementation detail and go against the philosophies of RTL.

https://github.com/testing-library/react-testing-library/pull/991


### Scroll Events

Running tests in JSDOM would not be possible as it doesn't suport GUI/layout. Need to write tests in a real browser i.e. Cypress, TestCafe, Puppeteer.

https://github.com/testing-library/react-testing-library/issues/671