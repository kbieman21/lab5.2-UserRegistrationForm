## Reflection Question

# How did event.preventDefault() help in handling form submission?
It helps by stopping the normal behavior of the form submission which includes checks HTML5 validation, send data to server, and refreshes the page. Instead preventDefault() function helps to gain control over the form submission by using custom validation. 
# What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?
HTML5 validation is built-in validation system just by using html attributes, but JS-based validation is a custom validation. We might use both for accessibility reason and other reasons. they both can complement eachother.
# Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?
During form submission after I checked all fields pass validation, I persist a username to be stored in localstorage. and while the page loads and start to fill out the form, username field I retrieve the saved username from local storage and pre-filled it in the username field. The limitation of localstorage for storing sensitive data is the lack of security as the input can be injected with malicious purpose.
# Describe a challenge you faced in implementing the real-time validation and how you solved it.
HTML5 validation was not providing with real-time validation, but I used a js-based validation which is customized and can provide a real-time validation while typing the input.
# How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?
To make sure the custom error messages are user-friendly, I styled them with a different color. Also the message itself is supposed to guide the user what the error was. and the error is displayed in real-time when the user were still typing the input.


