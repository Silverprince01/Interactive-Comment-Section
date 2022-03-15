let amy = document.querySelector(".amy");
let myComment = document.querySelector(".myComment");
let JsonData = 'data.json';
// localStorage.setItem("jsondata", JsonData)
// localStorage.getItem("jsondata");
fetch(JsonData)
.then((resp) => resp.json())
.then((json) => {
    let userComments = json.comments;

window.addEventListener('DOMContentLoaded', setupItems);
        

//looping through the first two element of the json array
    for(let i = 0; i<userComments.length; i++){
        // Creating element for the Json data that works for the first two json data in the array
    let scores = document.createElement("div");
    let currentScores = document.createElement("p");
    currentScores.textContent = userComments[i].score;
    let plus = document.createElement("p")
    plus.textContent = "+"
    let minus = document.createElement("p")
    minus.textContent = "-"
    let userimg = document.createElement("img");
    userimg.src = userComments[i].user.image.png;
    let userName = document.createElement("p");
    userName.textContent = userComments[i].user.username
    userName.style.fontWeight = "700"
    let month = document.createElement("p");
    month.textContent = userComments[i].createdAt
    let reply = document.createElement("p");
    reply.textContent = "Reply"
    let replyimg = document.createElement("img");
    replyimg.src = "images/icon-reply.svg";
    let contents = document.createElement("p");
    contents.textContent = userComments[i].content
    let overalcontent = document.createElement("div");
    let nameandate = document.createElement("div");
    let nameandaterep = document.createElement("div");
    let replyar = document.createElement("div");
    let allcomment = document.createElement("div");
    let replycomment = document.createElement("div");
    let editreply = document.createElement("div");
    let deletedBox = document.createElement("div")
    
// Adding classs to the created element
    scores.classList.add("score") 
    plus.classList.add("numbop")
    minus.classList.add("numbop")
    replyar.classList.add("reply")
    nameandate.classList.add("namedate");
    nameandaterep.classList.add("replydate");
    overalcontent.classList.add("textcontent");
    allcomment.classList.add("allcontent");
// Appending each element accordingly and appending to the parent div(.amy)
    scores.appendChild(plus);
    scores.appendChild(currentScores);
    scores.appendChild(minus);
    nameandate.appendChild(userimg)
    nameandate.appendChild(userName)
    nameandate.appendChild(month);
    replyar.appendChild(replyimg);
    replyar.appendChild(reply);
    nameandaterep.appendChild(nameandate);
    nameandaterep.appendChild(replyar);
    overalcontent.appendChild(nameandaterep)
    overalcontent.appendChild(contents)
    allcomment.appendChild(scores)
    allcomment.appendChild(overalcontent);
    amy.appendChild(allcomment);
    amy.appendChild(replycomment)
    amy.appendChild(editreply);
    amy.appendChild(deletedBox)

    // Onclick of the reply button, a div is created to take the user input 
    replyar.addEventListener('click',  ()=>{
        replyar.style.display = "none"
        let replymainbox =  document.createElement("div");
        let userimg = document.createElement("img")
        userimg.src = "images/avatars/fuad.jpg"
        let commentbox = document.createElement("textarea");
        let fname = document.createElement("p")
        fname.textContent = "@"+ userComments[i].user.username + ",";
        commentbox.textContent += fname.textContent;
        let sendbutton =  document.createElement("button");
        sendbutton.textContent = "Reply";

        // Adding styles the user reply section
        replymainbox.classList.add('newComment');
        commentbox.classList.add('text');
        userimg.classList.add('userimg');
        sendbutton.classList.add('send');
// Appending each element accordingly
        replymainbox.appendChild(userimg);
        replymainbox.appendChild(commentbox);
        replymainbox.appendChild(sendbutton);
        replycomment.appendChild(replymainbox);
// On click of the reply button after inputing the user comment we created a div element to take in the user comment 
// and also added option to delete the comment
        sendbutton.addEventListener('click', ()=>{
            if (commentbox.value.length <= 11){
                alert("input a comment")
            }else{
                replyar.style.display = "flex"
                replymainbox.style.display = "none"
                let editComment = document.createElement("div");
                
                let scores = document.createElement("div");
                let currentScores = document.createElement("p");
                currentScores.textContent = userComments[1].replies[1].score; 
                let plus = document.createElement("p")
                plus.textContent = "+"
                let minus = document.createElement("p")
                minus.textContent = "-"
                let userimg = document.createElement("img")
                userimg.src = "images/avatars/fuad.jpg"
                let userName = document.createElement("p");
                userName.textContent = userComments[1].replies[1].user.username
                userName.style.fontWeight = "700"
                let you = document.createElement("button")
                you.textContent = "you";
                let month = document.createElement("p");
                month.textContent = userComments[i].createdAt
                let nameandate = document.createElement("div");
                let nameandaterep = document.createElement("div");
                let deleted = document.createElement("div")
                let deleteimg = document.createElement("img")
                deleteimg.src = "images/icon-delete.svg";
                let deletetext = document.createElement("p")
                deletetext.textContent = "Delete"
                let edited = document.createElement("div")
                let editimg = document.createElement("img")
                editimg.src = "images/icon-edit.svg";
                let deledit = document.createElement("div")
                let overalcontent = document.createElement("div");
                    let text = document.createElement("p");
                    text.value = commentbox.value; 
                    text.textContent = text.value;
                addToLocalStorage(text);

                

                scores.classList.add("score") 
                plus.classList.add("numbop")
                minus.classList.add("numbop")
                nameandate.classList.add("namedate");
                nameandaterep.classList.add("replydate");
                deledit.classList.add("reply")
                deleted.classList.add("reply")
                edited.classList.add("reply")
                overalcontent.classList.add("textcontent")
                editComment.classList.add("allcontent");
                scores.appendChild(plus);
                scores.appendChild(currentScores);
                scores.appendChild(minus);
                nameandate.appendChild(userimg)
                nameandate.appendChild(userName)
                nameandate.appendChild(you)
                nameandate.appendChild(month)
                deleted.appendChild(deleteimg)
                deleted.appendChild(deletetext)
                deledit.appendChild(deleted)
                deledit.appendChild(edited)
                nameandaterep.appendChild(nameandate)
                nameandaterep.appendChild(deledit)
                overalcontent.appendChild(nameandaterep)
                overalcontent.appendChild(text)
                editComment.appendChild(scores)
                editComment.appendChild(overalcontent)
                editreply.appendChild(editComment)
                

// Creating the section wheater to delete a comment or not
                deleted.addEventListener('click', ()=>{
                    let deletebox = document.createElement("div")
                    let deleteComment = document.createElement("p")
                    deleteComment.textContent = "Delete Comment"
                    let deleteConfirm = document.createElement("p")
                    deleteConfirm.textContent = "Are you sure you want to delete this comment? This will remove the comment and can't be undone"
                    let confirmdiv = document.createElement("div")
                    let nobtn = document.createElement("button")
                    nobtn.textContent = "NO, CANCEL"
                    let yesbtn = document.createElement("button")
                    yesbtn.textContent = "YES, DELETE"


                    deletebox.classList.add("deletebox")
                    deleteComment.classList.add("del")
                    confirmdiv.classList.add("confirmdiv")
                    nobtn.classList.add("no")
                    yesbtn.classList.add("yes")




                    deletebox.appendChild(deleteComment)
                    deletebox.appendChild(deleteConfirm)
                    confirmdiv.appendChild(nobtn)
                    confirmdiv.appendChild(yesbtn)
                    deletebox.appendChild(confirmdiv)
                    deletedBox.appendChild(deletebox)
// Confirmation to delete comment or not
                    nobtn.addEventListener('click', ()=>{
                        deletebox.style.display = "none"
                    })
                    yesbtn.addEventListener('click', ()=>{
                        deletebox.style.display = "none"
                        editComment.style.display = "none"
                    })
                })

            }
        })
    })    
}

// Picking by array number the first element of the second array element
        let newReply =  userComments[1].replies[0];
        let scores = document.createElement("div");
        let currentScores = document.createElement("p");
        currentScores.textContent = newReply.score;
        let plus = document.createElement("p")
        plus.textContent = "+"
        let minus = document.createElement("p")
        minus.textContent = "-"
        let userimg = document.createElement("img");
        userimg.src = newReply.user.image.png;
        let userName = document.createElement("p");
        userName.textContent = newReply.user.username
        userName.style.fontWeight = "700"
        let month = document.createElement("p");
        month.textContent = newReply.createdAt
        let reply = document.createElement("p");
        reply.textContent = "Reply"
        let replyimg = document.createElement("img");
        replyimg.src = "images/icon-reply.svg";
        let contents = document.createElement("p");
        contents.textContent = "@" + newReply.replyingTo +","+ newReply.content
        let overalcontent = document.createElement("div");
        let nameandate = document.createElement("div");
        let nameandaterep = document.createElement("div");
        let replyar = document.createElement("div");
        let allcomment = document.createElement("div");
        let replycomment = document.createElement("div");
        let deletedBox = document.createElement("div");
        let editreply = document.createElement("div");

        // Adding classes to it
        scores.classList.add("score") 
        plus.classList.add("numbop")
        minus.classList.add("numbop")
        replyar.classList.add("reply")
        nameandate.classList.add("namedate");
        nameandaterep.classList.add("replydate");
        overalcontent.classList.add("textcontent");
        allcomment.classList.add("allcontent2");
        // Appending each element accordingly
        scores.appendChild(plus);
        scores.appendChild(currentScores);
        scores.appendChild(minus);
        nameandate.appendChild(userimg)
        nameandate.appendChild(userName)
        nameandate.appendChild(month);
        replyar.appendChild(replyimg);
        replyar.appendChild(reply);
        nameandaterep.appendChild(nameandate);
        nameandaterep.appendChild(replyar);
        overalcontent.appendChild(nameandaterep)
        overalcontent.appendChild(contents)
        allcomment.appendChild(scores)
        allcomment.appendChild(overalcontent);
        amy.appendChild(allcomment);
        amy.appendChild(editreply);
        amy.appendChild(replycomment)
        amy.appendChild(deletedBox)

    // Onclick of the reply button, a div is created to take the user input 
        replyar.addEventListener('click',  ()=>{
            replyar.style.display = "none";
            let replymainbox =  document.createElement("div");
            let userimg = document.createElement("img")
            userimg.src = "images/avatars/fuad.jpg"
            let commentbox = document.createElement("textarea");
            commentbox.innerText = "@"+ userComments[1].replies[0].user.username + ",";
            let sendbutton =  document.createElement("button");
            sendbutton.textContent = "Reply";
            
            replymainbox.classList.add('newComment2');
            commentbox.classList.add('text');
            userimg.classList.add('userimg');
            sendbutton.classList.add('send');
            
            replymainbox.appendChild(userimg);
            replymainbox.appendChild(commentbox);
            replymainbox.appendChild(sendbutton);
            replycomment.appendChild(replymainbox);
            // On click of the reply button after inputing the user comment we created a div element to take in the user comment 
            // and also added option to delete the comment
            sendbutton.addEventListener('click', ()=>{
                        replyar.style.display = "flex"
                        replymainbox.style.display = "none"
                        let editComment = document.createElement("div");
                        let scores = document.createElement("div");
                        let currentScores = document.createElement("p");
                        currentScores.textContent = userComments[1].replies[1].score; 
                        let plus = document.createElement("p")
                        plus.textContent = "+"
                        let minus = document.createElement("p")
                        minus.textContent = "-"
                        let userimg = document.createElement("img")
                        userimg.src = "images/avatars/fuad.jpg"
                        let userName = document.createElement("p");
                        userName.textContent = userComments[1].replies[1].user.username
                        userName.style.fontWeight = "700"
                        let you = document.createElement("button")
                        you.textContent = "you";
                        let month = document.createElement("p");
                        month.textContent = userComments[1].replies[0].createdAt
                        let nameandate = document.createElement("div");
                        let nameandaterep = document.createElement("div");
                        let deleted = document.createElement("div")
                        let deleteimg = document.createElement("img")
                    deleteimg.src = "images/icon-delete.svg";
                    let deletetext = document.createElement("p")
                    deletetext.textContent = "Delete"
                    let edited = document.createElement("div")
                    let editimg = document.createElement("img")
                    editimg.src = "images/icon-edit.svg";
                    let editext = document.createElement("p")
                    editext.textContent = "Edit"
                    let deledit = document.createElement("div")
                    let overalcontent = document.createElement("div");
                    let text = document.createElement("p")
                    text.textContent = commentbox.value;
                    let finaltextdiv = document.createElement("div")
                    let finaltext = document.createElement("p")
                    
                    
                    scores.classList.add("score") 
                    plus.classList.add("numbop")
                    minus.classList.add("numbop")
                    nameandate.classList.add("namedate");
                    nameandaterep.classList.add("replydate");
                    deledit.classList.add("reply")
                    deleted.classList.add("delreply")
                    edited.classList.add("editreply")
                    overalcontent.classList.add("textcontent")
                    editComment.classList.add("allcontent2");
                    finaltextdiv.classList.add("finaltext")
                    scores.appendChild(plus);
                    scores.appendChild(currentScores);
                    scores.appendChild(minus);
                    nameandate.appendChild(userimg)
                    nameandate.appendChild(userName)
                    nameandate.appendChild(you)
                    nameandate.appendChild(month)
                    deleted.appendChild(deleteimg)
                    deleted.appendChild(deletetext)
                    edited.appendChild(editimg)
                    edited.appendChild(editext)
                    deledit.appendChild(deleted)
                    deledit.appendChild(edited)
                    nameandaterep.appendChild(nameandate)
                    nameandaterep.appendChild(deledit)
                    overalcontent.appendChild(nameandaterep)
                    overalcontent.appendChild(text)
                    editComment.appendChild(scores)
                    editComment.appendChild(overalcontent)
                    editreply.appendChild(editComment)
                    // Creating the section wheater to delete a comment or not
                    deleted.addEventListener('click', ()=>{
                        let deletebox = document.createElement("div")
                        let deleteComment = document.createElement("p")
                        deleteComment.textContent = "Delete Comment"
                        let deleteConfirm = document.createElement("p")
                        deleteConfirm.textContent = "Are you sure you want to delete this comment? This will remove the comment and can't be undone"
                        let confirmdiv = document.createElement("div")
                        let nobtn = document.createElement("button")
                        nobtn.textContent = "NO, CANCEL"
                        let yesbtn = document.createElement("button")
                        yesbtn.textContent = "YES, DELETE"
                        
                        
                        deletebox.classList.add("deletebox")
                        deleteComment.classList.add("del")
                        confirmdiv.classList.add("confirmdiv")
                        nobtn.classList.add("no")
                        yesbtn.classList.add("yes")
                        
                        
                        
                        
                        deletebox.appendChild(deleteComment)
                        deletebox.appendChild(deleteConfirm)
                        confirmdiv.appendChild(nobtn)
                        confirmdiv.appendChild(yesbtn)
                        deletebox.appendChild(confirmdiv)
                        deletedBox.appendChild(deletebox)
                       // Confirmation wheather to delete a comment or not 
                        nobtn.addEventListener('click', ()=>{
                            deletebox.style.display = "none"
                        })
                        yesbtn.addEventListener('click', ()=>{
                            deletebox.style.display = "none"
                            editComment.style.display = "none"
                        })
                        
                    })
                    // Creating a section to edit a comment if user is not deleting
                    edited.addEventListener('click', ()=>{
                        edited.style.display = "none"
                        deleted.style.display = "none"
                        let editextarea = document.createElement("textarea")
                        let textvalue = text.textContent
                        let update = document.createElement("div")
                        let p = document.createElement("p")
                        let updatebtn = document.createElement("button")
                        updatebtn.textContent = "Update"
                        text.style.display = "none"
                        // console.log(textvalue)
                        
                        editextarea.classList.add("text")
                        updatebtn.classList.add("send")
                        update.classList.add("update")
                        
                        
                        update.appendChild(p);
                        update.appendChild(updatebtn);
                        editextarea.innerText = textvalue;
                        overalcontent.appendChild(editextarea);
                        finaltextdiv.appendChild(finaltext)
                        overalcontent.appendChild(finaltextdiv);
                        overalcontent.appendChild(update);
                        // After editing, the section to update the edited comment
                        updatebtn.addEventListener('click', ()=>{
                            updatebtn.style.display = "none"
                            finaltext.textContent = editextarea.value;
                            
                            editextarea.style.display = "none"
                            edited.style.display = "flex";
                            deleted.style.display = "flex";
                        })
                    })
                    
                })
                
                
                
            })        

            
            
            // My Personal Comment

            let mySend = document.querySelector(".send");
            mySend.addEventListener('click', ()=>{
                // Checking to see if there is value in the comment box
                let comment = document.querySelector(".text")
                   if(comment.value.length == 0){
                    alert("Add a comment")
                 }
                   else {
                    let myCommentBox = document.createElement("div")
                    let scores = document.createElement("div");
                    let currentScores = document.createElement("p");
                    currentScores.textContent = userComments[1].replies[1].score; 
                   let plus = document.createElement("p")
                   plus.textContent = "+"
                    let minus = document.createElement("p")
                minus.textContent = "-" 
                let userimg = document.createElement("img")
                userimg.src = "images/avatars/fuad.jpg"
                // let userName = document.createElement("p");
                // userName.textContent = userComments[1].replies[1].user.username
                // Add to LS
                //  addToLocalStorage(text);
                let you = document.createElement("button")
                you.textContent = "you";
                let month = document.createElement("p");
                month.textContent = "now"
                let nameandate = document.createElement("div");
                let nameandaterep = document.createElement("div");
                let deleted = document.createElement("div")
                let deleteimg = document.createElement("img")
                deleteimg.src = "images/icon-delete.svg";
                let deletetext = document.createElement("p")
                deletetext.textContent = "Delete"
                let edited = document.createElement("div")
                let editimg = document.createElement("img")
                editimg.src = "images/icon-edit.svg";
                let editext = document.createElement("p")
                editext.textContent = "Edit"
                let deledit = document.createElement("div")
                let overalcontent = document.createElement("div");
                let text = document.createElement("p")
                text.textContent = comment.value;
                let finaltextdiv = document.createElement("div")
                let finaltext = document.createElement("p")


                scores.classList.add("score") 
                plus.classList.add("numbop")
                minus.classList.add("numbop")
                nameandate.classList.add("namedate");
                nameandaterep.classList.add("replydate");
                deledit.classList.add("reply")
                deleted.classList.add("delreply")
                edited.classList.add("editreply")
                overalcontent.classList.add("textcontent")
                myCommentBox.classList.add("allcontent")
                
                
                scores.appendChild(plus);
                scores.appendChild(currentScores);
                scores.appendChild(minus);
                nameandate.appendChild(userimg)
                // nameandate.appendChild(userName)
                nameandate.appendChild(you)
                nameandate.appendChild(month)
                deleted.appendChild(deleteimg)
                deleted.appendChild(deletetext)
                edited.appendChild(editimg)
                edited.appendChild(editext)
                deledit.appendChild(deleted)
                deledit.appendChild(edited)
                nameandaterep.appendChild(nameandate)
                nameandaterep.appendChild(deledit)
                overalcontent.appendChild(nameandaterep)
                overalcontent.appendChild(text)
                myCommentBox.appendChild(scores)
                myCommentBox.appendChild(overalcontent)
                myComment.appendChild(myCommentBox)

                deleted.addEventListener('click', ()=>{
                    let deletebox = document.createElement("div")
                    let deleteComment = document.createElement("p")
                    deleteComment.textContent = "Delete Comment"
                    let deleteConfirm = document.createElement("p")
                    deleteConfirm.textContent = "Are you sure you want to delete this comment? This will remove the comment and can't be undone"
                    let confirmdiv = document.createElement("div")
                    let nobtn = document.createElement("button")
                    nobtn.textContent = "NO, CANCEL"
                    let yesbtn = document.createElement("button")
                    yesbtn.textContent = "YES, DELETE"
                    
                    
                    deletebox.classList.add("deletebox")
                    deleteComment.classList.add("del")
                    confirmdiv.classList.add("confirmdiv")
                    nobtn.classList.add("no")
                    yesbtn.classList.add("yes")
                    
                    deletebox.appendChild(deleteComment)
                    deletebox.appendChild(deleteConfirm)
                    confirmdiv.appendChild(nobtn)
                    confirmdiv.appendChild(yesbtn)
                    deletebox.appendChild(confirmdiv)
                    deletedBox.appendChild(deletebox)
                    
                    nobtn.addEventListener('click', ()=>{
                        deletebox.style.display = "none"
                    })
                    yesbtn.addEventListener('click', ()=>{
                        deletebox.style.display = "none"
                        myCommentBox.style.display = "none"
                    })
                    
                })
                edited.addEventListener('click', ()=>{
                    edited.style.display = "none"
                    deleted.style.display = "none"
                    let editextarea = document.createElement("textarea")
                    let textvalue = text.textContent
                    let update = document.createElement("div")
                    let p = document.createElement("p")
                    let updatebtn = document.createElement("button")
                    updatebtn.textContent = "Update"
                    text.style.display = "none"
                    
                    editextarea.classList.add("text")
                    updatebtn.classList.add("send")
                    update.classList.add("update")
                    
                    update.appendChild(p);
                    update.appendChild(updatebtn);
                    editextarea.innerText = textvalue;
                    overalcontent.appendChild(editextarea);
                    finaltextdiv.appendChild(finaltext)
                    overalcontent.appendChild(finaltextdiv);
                    overalcontent.appendChild(update);
                    
                    updatebtn.addEventListener('click', ()=>{
                        updatebtn.style.display = "none"
                        finaltext.textContent = editextarea.value;
                        
                        editextarea.style.display = "none"
                        edited.style.display = "flex";  
                        deleted.style.display = "flex";  
                    })
                })
            }
        })
        
    })
    function addToLocalStorage(text) {
        const texts = {text};
        let items = getLocalStorage();
        items.push(text);
        localStorage.setItem('text', JSON.stringify(items));
       }
   
  
  function getLocalStorage() {
      return localStorage.getItem('text')? JSON.parse(localStorage.getItem('text')): [];
  }

  function setupItems() {
      let items = getLocalStorage();
      if(items.length > 0) {
        let text = document.createElement("p");
        text.value = commentbox.value; 
          text.textContent = text.value
      }
  }
   


 