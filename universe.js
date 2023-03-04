const loadtool =( sortClick,dataLimit) =>{
     const url=`https://openapi.programming-hero.com/api/ai/tools`;
     console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTool(data.data.tools,dataLimit));
}
// load card
const displayTool=(tools,dataLimit)=>{
   const toolContainer= document.getElementById('tool-container');
   const showAll=document.getElementById('show-all');
   if( dataLimit && tools.length > 6){
    tools=tools.slice(0,6);
    showAll.classList.remove('d-none');
   }
   else{
    showAll.classList.add('d-none');
   }

    toolContainer.innerText='';

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
                      <li>1.${tool.features[0]}</li>
                      <li>2.${tool.features[1]}</li>
                      <li>3.${tool.features[2]}</li>
                            </p>
    </div>
    <div class="card-footer d-flex justify-content-between p-3">
    <div>
    <h5 class="card-title p-2 fw-bold">${tool.name}</h5>
    <i class="fa-regular fa-calendar px-2"></i>
      <small class="text-muted">${tool.published_in}</small>
      </div>
    <div>
      <i onclick="loadToolDetails('${tool.id}')" class="fa-solid fa-arrow-right bg-warning-subtle rounded-5 text-danger p-3

      mt-2 "data-bs-toggle="modal" data-bs-target="#modalDetail"></i></div>
      

    </div>
</div>
 
    `;
  toolContainer.appendChild(toolsDiv);
};
  toggleSpinner(false);
}
  const processSearch=(dataLimit)=>{
    toggleSpinner(true);
    loadtool(sortClick,dataLimit);

  }
  const sortClick= document.getElementById('sort-btn').addEventListener('click',function(){
     processSearch(6); 
  })
// spinner
const toggleSpinner =isLoading =>{
  const loaderSection =document.getElementById('loader');
  if(isLoading){
      loaderSection.classList.remove('d-none')
  }
  else{
      loaderSection.classList.add('d-none');
  }
}
document.getElementById('btn-show-all').addEventListener('click',function(){
  processSearch();

})

const loadToolDetails =(id)=>{
  const url=`https://openapi.programming-hero.com/api/ai/tool/01`;
 fetch(url)
 .then(res=>res.json())
 .then (data=>displayToolDetail(data));
}
const displayToolDetail=tool=>{
    console.log(tool);
    const modalTitle=document.getElementById('modal-head');
  

}
loadtool();