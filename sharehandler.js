const url = window.location.hash
window.close()
chrome.runtime.sendMessage(url)
