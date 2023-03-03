const loadtool =() =>{
    url=`https://openapi.programming-hero.com/api/ai/tools`
    console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTool(data.data.tools));
}
// load card
const displayTool=(tools)=>{
    const toolContainer=document.getElementById('tool-container')
    // toolContainer.innerText='';
    // const showAll=document.getElementById('show-all')
//     if(dataLimit && tools.length > 10){
//         tools=tools.slice(0,10);
//         showAll.classList.remove('d-none');
//     }
//     else{
//         showAll.classList.add('d-none');
//     }

// display all tools
for (const tool of tools){
  console.log(tool);
    const toolsDiv=document.createElement('div');
    toolsDiv.classList.add('col');
    
    toolsDiv.innerHTML=`
    <div class="card h-100 p-3">
    <img src="${tool.image}" class=" card-img-top h-50" alt="...">
    <div class="card-body">
      <h4 class="fw-bold">Features</h4>
      <p class="card-text fw-light">
                            1.Natural Language Processing<br>
                            2.contextual understanding<br>
                            3.Text generation<br>
                            </p>
    </div>
    <div class="card-footer d-flex justify-content-between p-3">
    <div>
    <h5 class="card-title p-2 fw-bold">${tool.name}</h5>
    <i class="fa-regular fa-calendar px-2"></i>
      <small class="text-muted">11/01/2022</small>
      </div>
    <div>
      <i class="fa-solid fa-arrow-right bg-warning-subtle rounded-5 text-danger p-3

      mt-2"></i></div>
    </div>
</div>
    `;
  toolContainer.appendChild(toolsDiv);
};
}
loadtool();