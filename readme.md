# Site-specific side panel and contentscript communication example

This example demonstrates how to display the side panel only on google.com using the [Side Panel API](https://developer.chrome.com/docs/extensions/reference/sidePanel/) and [Storage API](https://developer.chrome.com/docs/extensions/reference/api/storage) and [Notification API](https://developer.chrome.com/docs/extensions/reference/api/notifications). 
It allows users to open the side panel by clicking on the [action icon](https://developer.chrome.com/docs/extensions/reference/action/) which is site-specific.

## Functions of this extension
1. Pass textarea by row to content page textboxes by one button via storage.local and chrome.tabs.sendMessage.  
2. Contentscript include conditional examining data to take different action 
3. Contentscript send message to service worker to trigger notification when complete via chrome.runtime.sendMessage.

## Running this extension

1. Clone this repository.
2. Load this directory in Chrome as an [unpacked extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked).
3. [Pin](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#pin) the extension.
4. Go to https://www.google.com.
5. Click on the action icon to open the side panel.
