document.getElementById('save-text').addEventListener('click', () => {
  const textArea = document.getElementById('text-input');
  const text = textArea.value.trim(); // Trim whitespace to validate for empty content
  
  if (text === '') {
    alert('Text area cannot be empty. Please enter some text.');
    return; // Exit the function if validation fails
  }

  const lines = text.split('\n').filter(line => line.trim() !== ''); // Split into non-empty lines

  chrome.storage.local.set({ textLines: lines }, () => {
    console.log('Data Saved.');
  });

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "processTextLines"});
  });
});

document.getElementById('reset-text').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "resetText"});
      });
});




