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

      mt-2 " data-bs-toggle="modal" data-bs-target="#twentyModal" class="modal"></i></div>
      

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
// det
const loadToolDetails =(id)=>{
  const url=`https://openapi.programming-hero.com/api/ai/tool/${id}`;
 fetch(url)
 .then(res=>res.json())
 .then (data=>displayToolDetail(data));
}
const displayToolDetail=tool=>{
    console.log(tool);
    const modal=document.getElementById('singleInfo');
    modal.textContent='';
    const div=document.createElement('div');
    div.classList.add('modal-content');
    div.innerHTML=`
    <div class="modal-body">
    <div class="closeBTN">
        <button type="button" class="btn-close p-1 rounded bg-danger" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <div>
            <div class="card h-100 p-3">
                <h6 class="text-center">${tool.data.description}</h6>
                <div class="row gap-1 mt-3">
                    <div class="col">
                        <a href="">
                            <div class="card p-2">
                                <p class="text-center packageTextColor mb-0">${tool.data.pricing[0].price}<br>month<br>Basic</p>
                            </div>
                        </a>
                    </div>
                    <div class="col">
                        <a href="">
                            <div class="card p-2">
                                <p class="text-center packageTextColor mb-0">${tool.data.pricing[1].price}<br>month<br>Pro</p>
                            </div>
                        </a>
                    </div>
                    <div class="col">
                        <a href="">
                            <div class="card p-2">
                                <p class="text-center packageTextColor mb-0">${tool.data.pricing[2] ? tool.data.pricing[2].price :"Free of cost"}<br>us<br>Enterprise</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                            <div class="p-2">
                                <h4>Features</h4>
                                <ul>
                                    <li>${tool.data.features[1].feature_name}</li>
                                    <li>>${tool.data.features[2].feature_name}</li>
                                    <li>>${tool.data.features[3].feature_name}</li>
                                </ul>
                            </div>
                    </div>
                    <div class="col">
                        <div class="p-2">
                            <h4>Integrations</h4>
                            <ul>
                                <li>${tool.data.integrations[0]}</li>
                                <li>${tool.data.integrations[1]}</li>
                                <li>${tool.data.integrations[2]}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="card h-100">
                <div class="card text-bg-dark">
                    <img src="${tool.data.image_link[0]}" class="card-img-top p-2" alt="img">
                    <div class="card-img-overlay d-flex flex-column align-items-end">
                        <span class="badge text-bg-danger">94% accuracy</span>
                    </div>
                </div>
                <div class="card-body text-center">
                     <h5 class="card=title">HI,How are you doiung today?</h5>
                     <p>i m doing well,thank you for asking.How can i assist you today?</p>

                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>

    `;
    modal.appendChild(div);


  

}
loadtool();