var localdata = {};

for(var i=0; i<localStorage.length; i++){
    let key = localStorage.key(i);
    if(key !== "##SeLeCtEd#$"){
      let content = localStorage.getItem(key);
      content = JSON.parse(content)
      localdata[key] = content;
    }
}

const addBtn =document.getElementById('addBtn');

addBtn.addEventListener('click', () =>{

  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    const url = tabs[0].url;
    const title = tabs[0].title;
    const listName = document.getElementById('dropdown').value;
    let listContent = JSON.parse(localStorage.getItem(listName));
    listContent = [...listContent, {title: title, url: url}]
    console.log(url, title, listContent)
    localStorage.setItem(listName, JSON.stringify(listContent));
    addBtn.innerText = "Added";
  });
})

const open = document.getElementById('smark-head')
open.addEventListener('click', () =>{
  chrome.tabs.create({ url: "index.html" })
})

const select = document.getElementById('dropdown')

select.addEventListener('change', () =>{
  const listName = document.getElementById('dropdown').value;
  console.log(listName)
  localStorage.setItem("##SeLeCtEd#$", listName);
})

const selected = localStorage.getItem( "##SeLeCtEd#$")

for (let i =0; i < localStorage.length; i++) {
  key = localStorage.key(i)
  console.log(key)
  if(key !== "##SeLeCtEd#$"){ 
  const option = document.createElement("option");
  option.innerText = key
  if(key === selected){
    option.selected = true
  }
  select.appendChild(option);
}
}

const anchor = document.getElementById("a");
anchor.addEventListener('click',() => {
    chrome.tabs.create({url : "https://github.com/sudo-nick16/smark"})
})