## Bugs

### Viewport

Mobile keyboard will push content up when input fields are focused; unable to use vh for container but need set either absolute values of %.

Mobile calculates VH as (top bar + document + bottom bar = 100vh); trick is to use min(window.innerheight, 100vh) or (window.innerHeight)px.


### Overflow

When viewing on mobile devices, there is extra space on the right, and users are able to scroll horizontally. Main culprit is media query sizing; on Pixel 7, size rendered in potrait mode is 'tablet', not 'phone'.

Zooming feature will cause content to overflow. For iOS, setting overflow to hidden in body does not prevent horizontal scrolling. Workaround is to set it for both html and body. However, this will cause sticky to not work. Alternative is to set overflow to clip.

```css
body, html {
    overflow-x: hidden;
}

div {
    overflow: clip;
}
```

### iOS Bounce

Add CSS to prevent iOS bounce from scrolling to the bottom.

```css
div {
    overscroll-behavior-y: none;
}
```

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

## Examples

Bepatrickdavid.com

www.danuekspatzek.com/home

Y78.fr/4/