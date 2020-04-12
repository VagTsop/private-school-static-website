




$().ready(function(){
//validate signup form on keyup and submit
$("#signupForm").validate({
	rules:  {
		username: {

			required: true,
			minlength:4
		},

		email: {
			required: true,
			email:true

		},


		password:  {

			required:true,
			minlength:5
		},

		confirmPassword: {

			required: true,
			minlength: 5,
			equalTo: "#password"

		},
		agree: "required"

	},   

	messages: {

		username:{
			required:"Please enter a username",
			minlength:"Your username must consist of at least 4 characters"
		},

		email:{
			required:"Please enter  a valid email address"
		},

		password: {

			required: "Please provide a password",
			minlength:"Your password must be at least 5 characters"

		},

		confirmPassword: {
			required:"Please provide a password",
			minlength: "Your password must be at least 5 characters",
			equalTo: "Please enter the same password as above"
		},

		agree: "Please accept our policy"


	},



});


 // (example: vatsop52@gmail.com---> This regex verifies email with 2 to 4 characters after . )

 function isEmail(email) {     
 	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 	return regex.test(email);
 }



addEventListener("load", function() {
	setTimeout(hideURLbar, 0);
}, false); 
function hideURLbar(){
	window.scrollTo(0,1); 
}


 $(document).on("click", "#submit", function () {
 	$("#signupForm").valid();





 });
});