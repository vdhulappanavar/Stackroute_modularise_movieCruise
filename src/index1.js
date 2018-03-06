import _ from 'lodash';
import $ from 'jquery'
import {checkImport} from './checkImport'
import { secretParagraph, secretButton, checkDiv , foo} from './dom-loader';
function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'world'], ' ');

  return element;
}

document.body.appendChild(component());


var showSecret = false;

secretButton.addEventListener('click', toggleSecretState);
updateSecretParagraph();

function toggleSecretState() {
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretButton()
}

function updateSecretButton() {
    if (showSecret) {
        secretButton.textContent = 'Hide the Secret';
    } else {
        secretButton.textContent = 'Show the Secret';
    }
}

function updateSecretParagraph() {
    if (showSecret) {
        secretParagraph.style.display = 'block';
    } else {
        secretParagraph.style.display = 'none';
    }
}
foo();
checkDiv.innerHTML = "<button onclick='foo()'>Hey</button>"
var ele = document.createElement('button')
ele.innerHTML = "HOLA"
checkDiv.innerHTML += ele;
ele.onclick = foo
checkDiv.appendChild(ele)

function testjquery(){
    console.log("in testJquery")
    $("#checkDiv").append("<div>FOOCLICKCHECK_1</div>").on("click" , foo    )
}

testjquery()