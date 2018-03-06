import {appState, chnageCurrentView , setApiKey} from './appState';
import $ from 'jquery';
//import 'materialize-css/dist/css/materialize.min.css'
console.log("restart")
console.log("appState")
console.log(appState['currentView'])
appState['currentView'] = 'homeDashBoard'
console.log(appState['currentView'])
setApiKey("4a9f640e502709dc6bcd23286de1426e")
//appState.chnageCurrentView('testHomeDashboard')
chnageCurrentView('testHomeDashboard')
console.log(appState);



// function testjquery(){
//       console.log("in testJquery??");
//       //$("#checkDiv").append("<div>FOOCLICKCHECK_1</div>");
//       console.log(      document.getElementById("checkDiv").innerHTML)
//       document.getElementById("checkDiv").innerHTML += "<div>FOOCLICKCHECK_DOCUMENT</div>"
//       console.log(      document.getElementById("checkDiv").innerHTML)

//       //$("#checkDiv").append("<div>FOOCLICKCHECK_1</div>");
//       $(document).ready(function(){
//         $("#p1").mouseleave(function(){
//             alert("Bye! You now leave p1!");
//         });
//     });
//     $("#checkDiv").append("<div>FOOCLICKCHECK_1</div>");
//       console.log("exit textquery")

//     $("#checkDiv").append(`
//     <div class="collection">
//     <a href="#!" class="collection-item"><span class="badge">1</span>Alan</a>
//     <a href="#!" class="collection-item"><span class="new badge">4</span>Alan</a>
//     <a href="#!" class="collection-item">Alan</a>
//     <a href="#!" class="collection-item"><span class="badge">14</span>Alan</a>
//   </div>
//     `)

//     $("#checkDiv").append(`
//     <a class='dropdown-button btn' href='#' data-activates='dropdown1'>Drop Me JS!</a>

//     <!-- Dropdown Structure -->
//     <ul id='dropdown1' class='dropdown-content'>
//       <li><a href="#!">one</a></li>
//       <li><a href="#!">two</a></li>
//       <li class="divider"></li>
//       <li><a href="#!">three</a></li>
//       <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
//       <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
//     </ul>
          
//     `)
// }

// testjquery();

// import _ from 'lodash';
// import $ from 'jquery'
// import {checkImport} from './checkImport'
// import { secretParagraph, secretButton, checkDiv , foo} from './dom-loader';
// function component() {
//   var element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(['Hello', 'world'], ' ');

//   return element;
// }

// document.body.appendChild(component());


// var showSecret = false;

// secretButton.addEventListener('click', toggleSecretState);
// updateSecretParagraph();

// function toggleSecretState() {
//     showSecret = !showSecret;
//     updateSecretParagraph();
//     updateSecretButton()
// }

// function updateSecretButton() {
//     if (showSecret) {
//         secretButton.textContent = 'Hide the Secret';
//     } else {
//         secretButton.textContent = 'Show the Secret';
//     }
// }

// function updateSecretParagraph() {
//     if (showSecret) {
//         secretParagraph.style.display = 'block';
//     } else {
//         secretParagraph.style.display = 'none';
//     }
// }
// foo();
// checkDiv.innerHTML = "<button onclick='foo()'>Hey</button>"
// var ele = document.createElement('button')
// ele.innerHTML = "HOLA"
// checkDiv.innerHTML += ele;
// ele.onclick = foo
// checkDiv.appendChild(ele)

// function testjquery(){
//     console.log("in testJquery")
//     $("#checkDiv").append("<div>FOOCLICKCHECK_1</div>").on("click" , foo    )
// }

// testjquery()