let menuList = document.getElementById("menuList")

menuList.style.maxHeight = "0px" ;

function toggleMenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "500px"
}
else{
    menuList.style.maxHeight = "0px"
}
}
// const CommentEl = document.querySelector(".swiper-wrapper")
// async function getdata(){
//   try {
//     const response = await fetch("https://dummyjson.com/comments")
//     const data = await response.json();
//     let Comments= []
//     data.comments = Comments
//     console.log(Comments)
//     Comments.forEach((item) => {
//       console.log("ali");
//       let a=item.comments.body
//       let b=item.comments.fullname
//       let c=item.username
//       console.log(c)
//       CommentEl.innerHTML+= `<div class="comment-box swiper-slide">
//       <p class="comment-text">"${a}"</p>
//       <div class="comment-detail">
//       <h3>${b}</h3>  
//       <p>${c}</p>
//       </div>`
      
      
//     });
    
//   } catch (error) {
//     console.log(error)
//   }
// }
// getdata()
const CommentEl = document.querySelector(".swiper-wrapper");

async function getdata() {
  try {
    const response = await fetch("https://dummyjson.com/comments");
    const data = await response.json();

    
    console.log(data);

    
    data.comments.forEach((item) => {
      let a = item.body; 
      let b = item.user.fullName; 
      let c = item.user.username; 

      

      
      CommentEl.innerHTML += `
      <div class="comment-box swiper-slide">
        <p class="comment-text">"${a}"</p>
        <div class="comment-detail">
          <h3>${b}</h3>  
          <p>@${c}</p>
        </div>
      </div>`;
    });

  } catch (error) {
    console.log(error);
  }
}

getdata();

let swiper = new Swiper('.comments', {
    // Optional parameters

    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });