(() => {
    //Form element variables
    const projectOnePicture = document.getElementById('project1');
    const projectTwoPicture = document.getElementById('project2');
    const projectThreePicture = document.getElementById('project3');
    const projectFourPicture = document.getElementById('project4');

    const projectDetails = document.getElementById('details');
    const projectTitle = document.getElementById('details-title');

    projectOnePicture.addEventListener('click', () => {

        //resets all input fields and error messages
        projectTitle.textContent = "";
        projectDetails.textContent = ""

        projectTitle.textContent = "Interactive Web Form with JavaScript";
        projectDetails.textContent = "While working through this assignment, I had to expand my knowledge of javascript.\n" +
            "Specifically when having to validate the input sections, I had to gain an understanding of \n" +
            "connecting the given user input with certain outcomes.";

    });

})();