myLeads = []

const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsLocalStorage = JSON.parse(localStorage.getItem("myLeads"));


// Renders from localstorage
if (leadsLocalStorage){
    myLeads = leadsLocalStorage
    render(myLeads)
    
}


//Saves input from url
tabBtn.addEventListener("click", function(){
    browser.tabs.query({currentWindow: true, active: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)

    })
        
       
   



    
    
})


//renders to the dom
function render(leads){
    let listItems = ""
    for (let i =0; i< leads.length; i++){
        //listItems += "<li><a target='_blank' href='"+ myLeads[i] + "'>" + myLeads[i] + "</a></li>" 
        
        listItems += `
        <li>
            <a target="_blank" href="${leads[i]}">
                ${leads[i]}
            </a>
        </li>
        `
    }   


    ulEl.innerHTML = listItems

}

//delets and clears from localstorage, Array and the dom
deleteBtn.addEventListener("click", function(){
    localStorage.clear()
    
    myLeads = []
    render(myLeads)
})


// Pushes value to the array
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    
})

