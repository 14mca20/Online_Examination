
	
	function authenticate()
	{
		txtusername=document.getElementById("usr").value;
		
		txtpass=document.getElementById("pass").value;
		
		
			if(txtusername=="")
		{
			alert('Please enter Username');
			
		}
		else if(txtpass=="")
		{
		alert('Please enter a password');	
		}
		else
		{
		
		
		
		
		
		
		if (window.XMLHttpRequest)
  	 {
   xmlhttp=new XMLHttpRequest();
   	}
	else
  	 {
   xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	 }
	 xmlhttp.open("GET","Scripts/users.xml",false);
 	xmlhttp.send();
 	xmlDoc=xmlhttp.responseXML; 
 
 
 	var username=xmlDoc.getElementsByTagName("user")[0].childNodes[0].nodeValue;
	var password=xmlDoc.getElementsByTagName("password")[0].childNodes[0].nodeValue;
		
		
		
		
		
		
	
			
			
		
		if(txtusername==username && txtpass==password)
		{
			sessionStorage.setItem("userinfo",pass);
			
			alert('Authentication Successful');
			var r=confirm("It is a 7 Minutes exam starting from now! Please do not refresh or close your browser.Are you sure you want to attempt?");
			if(r==true)
			{
			document.getElementById("form1").setAttribute("action","framePage.html");
			
			}
			else
			{
				
			}
		}
		
		else
		{
			alert('Invalid User');
			
		}
		
		
		}
		
	}

	

		

