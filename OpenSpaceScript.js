// Add onclick events to buttons.
document.getElementById('okButton').addEventListener('click', checkPassword);
document.getElementById('launchBtn').addEventListener('click', launch);

// Initially disable all input elements of 'checkbox', 'range' type and the Launch button.
const inputs = document.querySelectorAll('input[type="checkbox"], input[type="range"], input[value="Launch"]');
for (let i of inputs) {
    i.disabled = true;
}

// Check provided password. If correct, enable checkboxes and range sliders, disable the other input elements.
function checkPassword () {
    if (document.getElementById('password').value === 'TrustNo1') {
        for (let i of inputs) {
            i.disabled = false;
        }
        document.getElementById('launchBtn').disabled = true;
        document.getElementById('password').disabled = true;
        document.getElementById('okButton').disabled = true;
    }
}

// Select all range and checkbox inputs, apply onchange function for each.
const sliders = document.querySelectorAll('input[type="range"]');
const checks = document.querySelectorAll('input[type="checkbox"]');

for (let slider of sliders) {
    slider.onchange = controls
}

for (let check of checks) {
    check.onchange = controls;
}

// Check if all the checkboxes are checked and all the sliders are set to maximum. Depending on the
// state enable/disable Launch button.
function controls () {
    let all = true;
    for (let check of checks) {
        if (check.checked === false) {
            all = false;
            break;
        }
    }
    for (let slider of sliders) {
        if (slider.value !== '100') {
            all = false;
            break;
        }
    }
    document.getElementById('launchBtn').disabled = all !== true;
}

// Set interval to call move function for the rocket image.
function launch () {
    const rocket = document.getElementsByClassName('rocket')[0];
    setInterval(() => move(rocket), 30);
}

// Increase the 'object' element distance from left and bottom of the window with every call.
function move (object) {
    let leftDist = getComputedStyle(object).left;
    leftDist = Number(leftDist.slice(0, leftDist.length -2)) + 0.5;
    object.style.left = leftDist + 'px';
    
    let bottomDist = getComputedStyle(object).bottom;
    bottomDist = Number(bottomDist.slice(0, bottomDist.length -2)) + 4;
    object.style.bottom = bottomDist + 'px';
}