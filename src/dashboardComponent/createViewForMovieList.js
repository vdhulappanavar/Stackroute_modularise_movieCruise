function dummyOnClick(){
  console.log("in on click")
}

function dummyOnClick1(){
  console.log("in dummy on click1")
}

export function createViewForMovieList(list){
  //   let template = `
  //   <div class="row">

  //   <div class="col s12 m3">
  //     <div class="card">
  //       <div class="card-image">
  //         <img src="https://image.tmdb.org/t/p/w500/${list[0].poster_path}">
  //         <span class="card-title">${list[0].title}</span>
  //         <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
  //       </div>
  //       <div class="card-content">
  //         <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
  //       </div>
  //     </div>
  //   </div>
 
  //   <div class="col s12 m3">
  //     <div class="card">
  //       <div class="card-image">
  //         <img src="https://image.tmdb.org/t/p/w500/${list[0].poster_path}">
  //         <span class="card-title">${list[0].title}</span>
  //         <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
  //       </div>
  //       <div class="card-content">
  //         <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
  //       </div>
  //     </div>
  //   </div>
  
  //   <div class="col s12 m3">
  //     <div class="card">
  //       <div class="card-image addButtonClick">
  //         <img src="https://image.tmdb.org/t/p/w500/${list[0].poster_path}">
  //         <span class="card-title ">${list[0].title}</span>
          
  //       </div>
  //       <div class="card-content" id="checking">
  //         <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  //   `

  //   $("#checking").append(`<div>HEY</div>`)
    //template = 

    //return template;


   // $("#app").append("<div>HEY</div>").on("click" , dummyOnClick )

   //return ("<div>HEY</div>").on("click" , dummyOnClick)


  //  $("#app").append(`

  //  <div class="row">

  //    <div class="col s12 m3">
  //      <div class="card">
  //        <div class="card-image">
  //          <img src="https://image.tmdb.org/t/p/w500/${list[0].poster_path}">
  //          <span class="card-title">${list[0].title}</span>
  //          <a class="btn-floating halfway-fab waves-effect waves-light red" id="testClick"><i class="material-icons">add</i></a>
  //        </div>
  //        <div class="card-content" id="testing">
  //          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
  //        </div>
  //      </div>
  //    </div>
  //    </div>

  //  `)

  //  $("#testing").append("<div>HEEEYY</div>")
  //  $("#testClick").on("click" , dummyOnClick1)

  // for(let i=0; i<list.length; i++){
  //   template
  // }

  let template = `
  <div class="row">

    <div class="col s12 m3">
      <div class="card">
        <div class="card-image">
          <img src="https://image.tmdb.org/t/p/w500/${list[0].poster_path}">
          <span class="card-title">${list[0].title}</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red testClick" id="${list[0].id}"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>
  
    <div class="col s12 m3">
      <div class="card">
        <div class="card-image">
          <img src="https://image.tmdb.org/t/p/w500/${list[1].poster_path}">
          <span class="card-title">${list[1].title}</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red testClick" id="${list[1].id}"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>
  
  
    </div>
  `
  
   return template;
}

// <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>