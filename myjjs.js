function SendInputValue(){
  let username = document.getElementById("name").value;
  let inputs = document.querySelectorAll("#userid");
  
  inputs.forEach(input =>{
      input.value = username;
  })

}

function OpenForm(){
 document.getElementById("linkform").style.cssText = "display: flex;"

 document.getElementById("form").addEventListener("submit", function(){
  let fb = document.getElementById("fblink").value;

  window.open(fb);
})
}


const previewImage = document.getElementById('imageInput');
    const fileInput2 = document.getElementById('fileInput');

    // Add a click event listener to the image
    previewImage.addEventListener('click', () => {
      fileInput.click(); // Trigger the file input dialog
    });

    // Handle the file input change event
    fileInput.addEventListener('change', function () {
      if (this.files && this.files[0]) {
        const file = this.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
          // Replace the src of the image with the uploaded image
          previewImage.src = e.target.result;
        };

        // Read the image file as a data URL
        reader.readAsDataURL(file);
      }
    });

const previewImage2 = document.getElementById('imageInput2');
const fileInputt= document.getElementById('fileInput2');

    // Add a click event listener to the image
    previewImage2.addEventListener('click', () => {
      fileInputt.click(); // Trigger the file input dialog
    });

    // Handle the file input change event
    fileInputt.addEventListener('change', function () {
      if (this.files && this.files[0]) {
        const file = this.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
          // Replace the src of the image with the uploaded image
          previewImage2.src = e.target.result;
        };

        // Read the image file as a data URL
        reader.readAsDataURL(file);
      }
    });
    let barCount = 1;

// Add skills

function resizeBar(input) {
    const bar = input.parentElement;
    const filled = bar.querySelector('.bar-filled');
    const value = input.value;
    const valueDisplay = bar.querySelector('.bar-value');

    filled.style.width = value + '%';
    valueDisplay.textContent = value + '%';
}

function updateBarName(input) {
    const barContainer = input.parentElement;
    const barNameElement = barContainer.querySelector('.bar-name');
    barNameElement.value = input.value; // Update the text input field as the name changes
}

function addBar() {
    barCount++;

    const barContainer = document.createElement('div');
    barContainer.className = 'bar-container';

    const barNameInput = document.createElement('input');
    barNameInput.type = 'text';
    barNameInput.className = 'bar-name';
    barNameInput.value = `Enter skill ${barCount} : `;
    barNameInput.oninput = function () {
        updateBarName(barNameInput);
    };

    const bar = document.createElement('div');
    bar.className = 'bar';

    const filled = document.createElement('div');
    filled.className = 'bar-filled';
    filled.style.width = '25%';

    const valueDisplay = document.createElement('span');
    valueDisplay.className = 'bar-value';
    valueDisplay.textContent = '25%';

    const range = document.createElement('input');
    range.type = 'range';
    range.min = '0';
    range.max = '100';
    range.value = '25';
    range.oninput = function () {
        resizeBar(range);
    };

    bar.appendChild(filled);
    bar.appendChild(valueDisplay);
    bar.appendChild(range);
    barContainer.appendChild(barNameInput);
    barContainer.appendChild(bar);

    document.getElementById('bars-wrapper').appendChild(barContainer);

    // Show Done button after adding a bar
    document.getElementById('done-btn').style.display = 'inline-block';
}

function done() {
    // Disable the inputs and range sliders after clicking done
    const barContainers = document.querySelectorAll('.bar-container');
    barContainers.forEach((container) => {
        const nameInput = container.querySelector('.bar-name');
        const rangeInput = container.querySelector('input[type="range"]');
        nameInput.disabled = true;
        rangeInput.disabled = true;
    });

    // Hide the Add Bar button after clicking Done
    document.getElementById('add-bar-btn').style.display = 'none';
    document.getElementById('done-btn').style.display = 'none'; // Hide Done button
}

let SbarCount = 1;

// Soft Skills
function sresizeBar(input) {
    const Sbar = input.parentElement;
    const Sfilled = Sbar.querySelector('.bar-filled');
    const Svalue = input.value;
    const SvalueDisplay = Sbar.querySelector('.bar-value');

    Sfilled.style.width = Svalue + '%';
    SvalueDisplay.textContent = Svalue + '%';
}

function supdateBarName(input) {
    const SbarContainer = input.parentElement;
    const SbarNameElement = SbarContainer.querySelector('.bar-name');
    SbarNameElement.value = input.value; // Update the text input field as the name changes
}

function saddBar() {
    SbarCount++;

    const SbarContainer = document.createElement('div');
    SbarContainer.className = 'bar-container';

    const SbarNameInput = document.createElement('input');
    SbarNameInput.type = 'text';
    SbarNameInput.className = 'bar-name';
    SbarNameInput.value = `Enter skill ${SbarCount} : `;
    SbarNameInput.oninput = function () {
        supdateBarName(SbarNameInput);
    };

    const Sbar = document.createElement('div');
    Sbar.className = 'bar';

    const Sfilled = document.createElement('div');
    Sfilled.className = 'bar-filled';
    Sfilled.style.width = '25%';

    const SvalueDisplay = document.createElement('span');
    SvalueDisplay.className = 'bar-value';
    SvalueDisplay.textContent = '25%';

    const Srange = document.createElement('input');
    Srange.type = 'range';
    Srange.min = '0';
    Srange.max = '100';
    Srange.value = '25';
    Srange.oninput = function () {
        sresizeBar(Srange);
    };

    Sbar.appendChild(Sfilled);
    Sbar.appendChild(SvalueDisplay);
    Sbar.appendChild(Srange);
    SbarContainer.appendChild(SbarNameInput);
    SbarContainer.appendChild(Sbar);

    document.getElementById('s-bars-wrapper').appendChild(SbarContainer);

    // Show Done button after adding a bar
    document.getElementById('s-done-btn').style.display = 'inline-block';
}

function sdone() {
    // Disable the inputs and range sliders after clicking done
    const SbarContainers = document.querySelectorAll('.bar-container');
    SbarContainers.forEach((Scontainer) => {
        const SnameInput = Scontainer.querySelector('.bar-name');
        const SrangeInput = Scontainer.querySelector('input[type="range"]');
        SnameInput.disabled = true;
        SrangeInput.disabled = true;
    });

    // Hide the Add Bar button after clicking Done
    document.getElementById('s-add-bar-btn').style.display = 'none';
    document.getElementById('s-done-btn').style.display = 'none'; // Hide Done button
}
