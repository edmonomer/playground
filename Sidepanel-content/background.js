// Listen for browser action (extension icon) clicks
/*chrome.action.onClicked.addListener(() => {
  // Open the side panel
  chrome.sidePanel.open();
});*/

const domain_ORIGIN = 'https://www.google.com';

// Allows users to open the side panel by clicking on the action toolbar icon
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
  if (!tab.url) return;
  const url = new URL(tab.url);
  // Enables the side panel on google.com
  if (url.origin === domain_ORIGIN) {
    await chrome.sidePanel.setOptions({
      tabId,
      path: 'sidepanel.html',
      enabled: true
    });
  } else {
    // Disables the side panel on all other sites
    await chrome.sidePanel.setOptions({
      tabId,
      enabled: false
    });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  chrome.notifications.create({
    type: 'basic',
    title: 'Text Replacement Extension',
    message: request.noti,
    iconUrl: 'icon.png'   
  });
 });
