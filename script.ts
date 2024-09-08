//Listing Element

document.getElementById("resumeForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    //Get references to form elements using their IDs

    const profilePictureInput = document.getElementById(`profile-picture`) as HTMLInputElement;
    const nameElement = document.getElementById(`name`) as HTMLInputElement;
    const contactElement = document.getElementById(`contact`) as HTMLInputElement;
    const emailElement = document.getElementById(`email`) as HTMLInputElement;
    const addressElement = document.getElementById(`address`) as HTMLInputElement;
    const ageElement = document.getElementById(`age`) as HTMLInputElement;
    const educationElement = document.getElementById(`education`) as HTMLInputElement;
    const WorkexperienceElement = document.getElementById(`experience`) as HTMLInputElement;
    const skillsElement = document.getElementById(`skills`) as HTMLInputElement;
    const certificationsElement = document.getElementById(`certifications`) as HTMLInputElement;
    const hobbiesElement = document.getElementById(`hobbies`) as HTMLInputElement;

    //Check if all form elements are present

    if (profilePictureInput && nameElement && contactElement && emailElement && addressElement && ageElement && educationElement && WorkexperienceElement && skillsElement && certificationsElement && hobbiesElement) {
        
        const name = nameElement.value;
        const contact = contactElement.value;
        const email = emailElement.value;
        const address = addressElement.value;
        const age = ageElement.value;
        const education = educationElement.value;
        const Workexperience = WorkexperienceElement.value;
        const skills = skillsElement.value;
        const certifications = certificationsElement.value;
        const hobbies = hobbiesElement.value;

        //picture elements

        const profilePictureFile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : ``;
    
    //Create Resume Output

   const resumeOutput = `
    <h2>Resume</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profile-picture">` : ""}
    <p><strong>Name:</strong> <span id="edit-name" class="editable">${name} </span> </p>
    <p><strong>Contact:</strong><span id="edit-contact" class="editable">${contact} </span> </p>
    <p><strong>Email:</strong> <span id="edit-email" class="editable">${email} </span></p>
    <p><strong>Address:</strong> <span id="edit-address" class="editable">${address} </span> </p>
    <p><strong>age:</strong> <span id="edit-age" class="editable">${age} </span> </p>
   
    <h3>Education</h3>
    <p id="edit-education" class="editable">${education}</p>
    
    <h3>Work Experience</h3>
    <p id="edit-workexperience" class="editable">${Workexperience}</p>
    
    <h3 id="edit-skills" class="editable">Skills</h3>
    <p>${skills}</p>

    <h3 id="edit-certifications" class="editable">Certifications</h3>
    <p>${certifications}</p>

    <h3 id="edit-hobbies" class="editable">Hobbies</h3>
    <p>${hobbies}</p>
    `;

    //Display Resume Output

    const resumeOutputElement = document.getElementById(`resumeOutput`);
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        makeEditable();
    } 
    
    } else {
        console.error(`One or more output elements are missing.`);
    }

});


function makeEditable() {
    const editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(element => {
        element.addEventListener("click",function () {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            //replace content

            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                const input = document.createElement("input");
                input.type = "text";
                input.value = currentValue;
                input.classList.add("editing-input");
                
                input.addEventListener("blur", function() {
                    currentElement.textContent = input.value;
                    currentElement.style.display = "inline";
                    input.remove();
                })
                
                currentElement.style.display = "none";
                currentElement.parentNode?.insertBefore(input, currentElement);
                input.focus();
            }

        })
    });
}
