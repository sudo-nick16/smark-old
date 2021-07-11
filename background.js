chrome.runtime.onMessage.addListener((res, sender, sendRes)=>{
    window.open("index.html" + "#/share/" +res)
 })