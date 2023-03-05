<?php
if (isset($_POST['email'])) {

    // REPLACE THIS 2 LINES AS YOU DESIRE
    $email_to = "you@awesomecompany.com";
    $email_subject = "You've got a new submission";


    // validation expected data exists
    if (
        !isset($_POST['fullName']) ||
        !isset($_POST['email']) ||
        !isset($_POST['message'])
    ) {
        problem('Oh looks like there is some problem with your form data.');
    }

    $name = $_POST['fullName']; // required
    $email = $_POST['email']; // required
    $message = $_POST['message']; // required


    <!-- Replace this as your success message -->

    Thanks for contacting us, we will get back to you as soon as possible.

    <a href="Home.html" class="arrow-circle">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" stroke="black" stroke-width="2"/>
        <path d="M12 8L8 12L12 16" stroke="black" stroke-width="2"/>
      </svg>
    </a>    

<?php
}
?>