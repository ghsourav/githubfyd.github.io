let input=document.getElementById('search');

input.addEventListener("keyup", e=>{
    let searchText =e.target.value;
    getGitHubProfile(searchText);
});

async function getGitHubProfile(searchText){
  //  console.log(searchText);
  let clint_id="dfb42413fc3f9dc92e1f";
  let Client_Secret="d4e5fb63ee66efc8757d21ffc654b03dc9dfbb96";
  let githuburl = `https://api.github.com/users/${searchText}?clint_id=${clint_id}&Client_Secret=${Client_Secret}`;
  let res=await window.fetch(githuburl).catch(err => console.log(err))
 // .fetch("http://api.github.com/users")
 // .catch(err => console.log(err));
  let Data=await res.json().catch(err => console.log (err));
  console.log(Data);

 // document.getElementById("template").innerHTML=`<img src="${Data.avatar_url}">`
 document.getElementById("template").innerHTML=`
 <div class="container">
 
 <div class="card" style="width:20rem">
   <img class="rounded" src="${Data.avatar_url}" alt="Card image" style="width:90%;margin:0 auto">
   <div class="card-body">
     <h4 class="card-title">${Data.login}</h4>
     <p class="card-text">
     <ul>
     <li>Bio:${Data.bio}</li>
     <li>Last Update:${Data.updated_at}</li>
     </ul></p>
     <a href="#" class="btn btn-primary stretched-link" data-toggle="modal" data-target="#myModal">See Profile</a>
   </div>
 </div>
</div>

<div class="modal" id="myModal">
<div class="modal-dialog">
  <div class="modal-content">
  
    <!-- Modal Header -->
    <div class="modal-header">
      <h4 class="modal-title">Profile Detail of ${Data.login}</h4>
      <button type="button" class="close" data-dismiss="modal">&times;</button>
    </div>
    
    <!-- Modal body -->
    <div class="modal-body">
    <div class="card" style="width:100%;">
    <img class="card-img-top" src="${Data.avatar_url}" alt="Card image" style="width:90%;margin:0 auto">
    <div class="card-body">
      <p class="card-title">User Name: ${Data.login}</p>
      <p class="card-text">
      <ul>
      <li>Name:<b> ${Data.name}</b></li>
      <li>Company: ${Data.company}</li>
      <li>Location: ${Data.location}</li>
      <li>Email: ${Data.email}</li>
      <li>Public Repositetory: ${Data.public_repos}</li>
      <li>Last Update:${Data.updated_at}</li>
      <li>Following:${Data.following}</li>
     
     
      
    </div>
    </div>
    
    <!-- Modal footer -->
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
    </div>
    
  </div>
</div>
</div>
 `
}