document.getElementById('apply-bg').addEventListener('click',function(){
    const friends=document.getElementsByClassName('friends');
    console.log(friends);
    for (const friend of friends) {
        console.log(friend);

        friend.style.backgroundColor='lightblue';
        
    }
})
document.getElementById('Center-the-third').addEventListener('click',function(){
    console.log('clicked');
    const third=document.getElementById('center-th');
    third.style.textAlign='center';
})
document.getElementById('new-friend').addEventListener('click',function(){
    const friendContainer=document.getElementById('friends');
    const friend=document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML=`
    <h3 class="friend-name">New Friends</h3>
    <p>Something New added</p>
    `
    friendContainer.appendChild(friend);

})