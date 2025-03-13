let currentStep = 0;
const steps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".step-container");

function nextStep(index) {
    const inputs = steps[index].querySelectorAll("input[required]");
    let valid = true;

    inputs.forEach(input => {
        const errorMessage = input.nextElementSibling;
        if (!input.value.trim()) {
            input.style.border = "1px solid red";
            errorMessage.textContent = `${input.previousElementSibling.textContent} cannot be left blank`;
            errorMessage.style.display = "block";
            valid = false;
        } else {
            input.style.border = "1px solid #ccc";
            errorMessage.style.display = "none";
        }
    });

    if (valid) {
        steps[currentStep].classList.remove("active");
        progressSteps[currentStep].classList.add("completed");
        progressSteps[currentStep].querySelector(".step-circle").innerHTML = "✔";

        currentStep++;
        steps[currentStep].classList.add("active");

        if (currentStep === 2) {
            document.getElementById("displayLocation").value = document.getElementById("location").value;
            document.getElementById("displayRole").value = document.getElementById("role").value;
        }
    }
}

function prevStep(index) {
    steps[currentStep].classList.remove("active");
    currentStep--;
    steps[currentStep].classList.add("active");
}

function submitForm() {
    if (currentStep === 2) {
        nextStep(2);
    }
}
