
function addPost(){
    var postTitle = document.getElementById("postTitle")
    var postDescription = document.getElementById("postDescription")
    var posts = document.getElementById("posts")
    if(postTitle.value.trim() && postDescription.value.trim()){
    posts.innerHTML += `<div class="card mt-3">
    <div class="card-header fontStyle">
        @Posts
    </div>
    <div class="card-body ">
        <h5 class="card-title fontStyle" id="displayTitle">${postTitle.value}</h5>
        <p class="card-text fontStyle" id="displayDescription">${postDescription.value}</p>
        <div><button type="button" class="btn btn-primary" onclick=editPost(event)>Edit</button>
        <button type="button" class="btn btn-danger" onclick=remove(event)>Delete</button>
        </div>
    </div>
 `


postTitle.value = ""
postDescription.value = ""
}
else{
    Swal.fire({
        title: "No Input?",
        text: "Insert Something!",
        icon: "question"
      });

}
}
function remove(event){
event.target.parentNode.parentNode.remove()
}

async function editPost() {
    const { value: formValues } = await Swal.fire({
        title: "Update Post",
        html: `
        <div>
        <label>
         Title
          <input id="swal-input1" class="swal2-input">
          </lable>
          <div>
          <label>
          Description
          <input id="swal-input2" class="swal2-input">
          </label>
          </div>
          </div>
        `,
        focusConfirm: false,
        preConfirm: () => {
            const editTitle = document.getElementById("swal-input1").value;
            const editDescription = document.getElementById("swal-input2").value;
          return {
            title: editTitle,
            description: editDescription

          };
    
        }
      });

       
      var editTitle = formValues.title
      var editDescription = formValues.description


      var previousTitle = document.getElementById("displayTitle")
      var previousDescription = document.getElementById("displayDescription")


    previousTitle .innerHTML = editTitle;
    previousDescription.innerHTML = editDescription
      
     
    }
      

