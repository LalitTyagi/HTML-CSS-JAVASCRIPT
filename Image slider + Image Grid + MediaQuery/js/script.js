//function for hiding the contact form after getting details
function myFunction() {
	var fname=document.myform.fname.value; 
	var lname=document.myform.lname.value; 
	var email=document.myform.email.value; 
	var msg=document.myform.message.value;
	if((fname==null or fname=="")||(lname==null or lname=="")||(email==null or email=="")||(msg==null or msg==""))
	{	
		//for the erroe msg
		var showBlock = document.getElementById('error')
		if (showBlock.style.display === 'none')
	    {
	    	showBlock.style.display ='block';
	    }

	}
	else
	{
		//for the form submitted msg
		var showBlock = document.getElementById('show');
	    var hideBlock = document.getElementById('hide');
	    if (showBlock.style.display === 'none')
	    {
	    	showBlock.style.display ='block';
	    	hideBlock.style.display = 'none';
	    }
	}

}