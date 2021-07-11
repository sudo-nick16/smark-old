console.log(window.location)
if(sessionStorage.getItem("/share/")){
    const url = sessionStorage.getItem("/share/");
    sessionStorage.removeItem("/share");
    window.close()
    chrome.runtime.sendMessage(url)
}

// const url = window.location.hash
// window.close()
// chrome.runtime.sendMessage(url)
