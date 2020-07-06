import React from 'react';
import addons, { makeDecorator } from '@storybook/addons';
import { ADDON_ID } from './register';

function shouldButtonShow() {
  // @ts-ignore
  const bh = typeof(_bugHerd) !== 'undefined' ? _bugHerd : undefined
  if (
    typeof(bh) != 'undefined'
    && typeof(bh.win) != 'undefined'
    && typeof(bh.win.bugherd) != 'undefined'
    && typeof(bh.win.bugherd.application) != 'undefined') {
      if (
        bh.win.bugherd.application.getUser() != null
        && bh.win.bugherd.application.getUser().id > 0
      ) {
        return false;
      }
  } else {
    return true;
  }
}

export default makeDecorator({
  name: ADDON_ID,
  parameterName: ADDON_ID,
  wrapper: (getStory, context) => {
    const channel = addons.getChannel();

    channel.on('sendFeedback', () => {
      // @ts-ignore
      const bh = _bugHerd as any; 
      bh.win.bugherd.applicationView.anonymousbar.toggleOptions();
    });

    channel.emit('showButton', shouldButtonShow());

    return getStory(context);
  }
})
