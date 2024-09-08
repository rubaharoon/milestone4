//Listing Element
var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    //Get references to form elements using their IDs
    var profilePictureInput = document.getElementById("profile-picture");
    var nameElement = document.getElementById("name");
    var contactElement = document.getElementById("contact");
    var emailElement = document.getElementById("email");
    var addressElement = document.getElementById("address");
    var ageElement = document.getElementById("age");
    var educationElement = document.getElementById("education");
    var WorkexperienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    var certificationsElement = document.getElementById("certifications");
    var hobbiesElement = document.getElementById("hobbies");
    //Check if all form elements are present
    if (profilePictureInput && nameElement && contactElement && emailElement && addressElement && ageElement && educationElement && WorkexperienceElement && skillsElement && certificationsElement && hobbiesElement) {
        var name_1 = nameElement.value;
        var contact = contactElement.value;
        var email = emailElement.value;
        var address = addressElement.value;
        var age = ageElement.value;
        var education = educationElement.value;
        var Workexperience = WorkexperienceElement.value;
        var skills = skillsElement.value;
        var certifications = certificationsElement.value;
        var hobbies = hobbiesElement.value;
        //picture elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        //Create Resume Output
        var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profile-picture\">") : "", "\n    <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">").concat(name_1, " </span> </p>\n    <p><strong>Contact:</strong><span id=\"edit-contact\" class=\"editable\">").concat(contact, " </span> </p>\n    <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\">").concat(email, " </span></p>\n    <p><strong>Address:</strong> <span id=\"edit-address\" class=\"editable\">").concat(address, " </span> </p>\n    <p><strong>age:</strong> <span id=\"edit-age\" class=\"editable\">").concat(age, " </span> </p>\n   \n    <h3>Education</h3>\n    <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n    \n    <h3>Work Experience</h3>\n    <p id=\"edit-workexperience\" class=\"editable\">").concat(Workexperience, "</p>\n    \n    <h3 id=\"edit-skills\" class=\"editable\">Skills</h3>\n    <p>").concat(skills, "</p>\n\n    <h3 id=\"edit-certifications\" class=\"editable\">Certifications</h3>\n    <p>").concat(certifications, "</p>\n\n    <h3 id=\"edit-hobbies\" class=\"editable\">Hobbies</h3>\n    <p>").concat(hobbies, "</p>\n    ");
        //Display Resume Output
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error("One or more output elements are missing.");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editing-input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
