chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.action) {
    case "processTextLines":
      chrome.storage.local.get('textLines', (data) => {
        if (data.textLines) {
          processTextLines(data.textLines);
          notifyUser('Replacement completed.');
        }
      });
      break;
    case "resetText":
      resetTextFields();
      notifyUser('Text fields reset.');
      break;
    default:
      console.log('Unknown action:', message.action);
  }
});

function processTextLines(lines) {
  const textBoxes = document.querySelectorAll('[id^="Self"]');

  lines.forEach((line, index) => {
    if (textBoxes[index]) {
      // Auto-click (focus) the text box if the line contains "amendment" or "rejection"
      if (line.trim().toLowerCase() === 'amendment' || line.trim().toLowerCase() === 'rejection') {
        textBoxes[index].focus(); // Simulate click by focusing the textbox
      } else {
        textBoxes[index].value = line; // Otherwise, set the value of the textbox
      }
    }
  });
}

function resetTextFields() {
  const prefixes = ['Self', 'Spouse']; 
  prefixes.forEach(prefix => {
    const textBoxes = document.querySelectorAll(`[id^="${prefix}"]`);
    textBoxes.forEach(box => box.value = '');
  });
}

function notifyUser(cmessage) {
  chrome.runtime.sendMessage({noti: cmessage});
}