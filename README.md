## Bug Fixes

### 1.0.0

- Name field showing invalid with spaces.
- Firefox displaying white space at bottom for zoomed image.
- Profile description disappearing upon page refresh.
- Incorrect formatting when viewed on mobile devices.

## Deployment

Build is done on local computer, not remote server instance. Folder needs write access for SSH user.

```console
$ npm run build
$ rsync -avP build/ exampleuser@mydomain.com:/var/www/mydomain.com/
```

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