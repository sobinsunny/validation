function checke_fname()
		         {
		         var fname = b.f_name.value;
		         var regex = /^[A-Za-z ]{3,20}$/;
	         	 	
				   if(!regex.test(fname))
					 {
				 		document.getElementById("e_first").innerHTML = "* enter the First name in correct  format ";        	 	
				 		return false;	
				 	 }
				 	 else
				 	 {
				 	 	document.getElementById("e_first").innerHTML = " ";
				 	 	return	true;

				 	 }
		         }	
		   function checke_lname()
		         {
		         var lname = b.l_name.value;
		         var regex = /^[A-Za-z ]{3,20}$/;
	         	 	
				   if(!regex.test(lname))
					 {
				 		document.getElementById("e_first").innerHTML = "* enter the First name in correct  format ";	
				 		return false;					 				 	
				 	 }
				 	 else
				 	 {
				 	 	document.getElementById("e_second").innerHTML = " ";
				 	 	return	true;	


				 	 }
		         }	

		function checke_dob()
		         {	
		          var  dob  = b.dob_name.value;
		          var d= /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;       	 	
				   if(!d.test(dob))
					 {
				 		document.getElementById("e_dob").innerHTML = "* enter the DOB in correct  format ";	
		         		return false;

				 	 }
				 	 else
				 	 {
				 	 	document.getElementById("e_dob").innerHTML = " ";
				 	 	return	true;	

				 	 }
				 }

		   function checke_email()
		         {	         	 	
		           var  x = b.email.value;
		           var e=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
				   if(!e.test(x))
					 {
				 		document.getElementById("e_mail").innerHTML = "* enter the Email in correct  format ";	
				 		return false;			 	
				 	 }
				 	 else{
				 	 	document.getElementById("e_mail").innerHTML = " ";
				 	 	return	true;	
				 	 }
		         }				 	
		   function checke_ph()
		         {	         	 	
		           var ph    = b.ph.value;
		           var p=/^\(?([0-9|+]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{6})$/;
				   if(!p.test(ph))
					 {
				 		document.getElementById("e_ph").innerHTML = "* enter the phone Number in correct  format ";	
				 		return false;			 	
				 	 }
				 	  else
				 	 {
				 	 	document.getElementById("e_ph").innerHTML = " ";
				 	 	return	true;	
				 	 }
				 	
		         }		
		   function checke_add()
		         {	         	 	

				   var address=b.address.value;
				   var t=/^[ A-Za-z0-9_ \n.#-]*$/;
				   if(!t.test(address))
					 {
				 		document.getElementById("e_address").innerHTML = "* enter the Address in correct  format ";
				 		return false;			 	
				 	 }
				 	  else
				 	 {
				 	 	document.getElementById("e_address").innerHTML = " ";
				 	 	return	true;
				 	 }
		         }
	       function sub()
		        { 	
							 fname = b.f_name.value;
							 lname = b.l_name.value;
							 dob   = b.dob_name.value;
							 x	   = b.email.value;
							 address=b.address.value;
							 ph    = b.ph.value;
                       if(fname||dob||x||address||ph)
                       {
	
				 	  	if(checke_fname()&&checke_dob()&&checke_ph()&&checke_add()&&checke_email())
				 	  		{
				 	  			alert("OK");
				 	  			document.getElementById("e_address").innerHTML = " ";
				 	  		}
				 	  	}

				       else
				        {
				 		  document.getElementById("e_full").innerHTML = "* Fill the  feilds";
				 	      return false;
				 	     }
              }