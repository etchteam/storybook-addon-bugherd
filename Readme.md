# Storybook Addon Bugherd

A Storybook Addon to add a [Bugherd](https://bugherd.com/) feedback button in [Storybook](https://storybook.js.org).

![React Storybook Screenshot](https://raw.githubusercontent.com/etchteam/storybook-addon-bugherd/master/screenshot.png)

## Installation

```sh
npm install @etchteam/storybook-addon-bugherd --save-dev
```

## Configuration

Create a file called `main.js` in your `.storybook` config folder.

Add the following content to it:

```js
module.exports = {
  addons: ['@etchteam/storybook-addon-bugherd/register']
}
```

Next, add a file called `preview-head.html` in your storybook config folder and add this bugherd script to it.

```html
<script>
  var BugHerdConfig = {
    feedback: {
      hide: true,
    }
  };
</script>
<script type="text/javascript" src="https://www.bugherd.com/sidebarv2.js?apikey=<BUGHERD_API_KEY>" async="true"></script>
```

Finally, in `preview.js` or `config.js` (depending on how you have set up storybook) in your storybook folder, you'll need to add a global decorator.

```js
import { addDecorator } from '@storybook/react';
import withBugherd from '@etchteam/storybook-addon-bugherd';

addDecorator(withBugherd);
```

You'll get a bugherd feedback button for anonymous users injected in the top toolbar.

Made with ☕ at [Etch](https://etch.co)