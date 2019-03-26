var mins=6,sec=60;
	window.setInterval(function(){timer()},1000);
	function timer()
	{
		sec=sec-1;
		
		if(sec<0)
		{
			mins=mins-1;
			sec=60;
			
		}
		document.getElementById("t").innerHTML = "<b>Time Left:</b> " + mins + ":" + sec;
				if(mins<0)
			{
				window.clearInterval(1);
						
				//	parent.document.location="Questions/Results.html";
					self.parent.location="Questions/Results.html";
					
				
			}
		
	}
	function endtest()
	{
	
		if(confirm("Are you sure you want to end?"))
		{
					
				self.parent.location="Questions/Results.html";
								window.clearInterval(1);
					
		}
		else
		{
			
		}
	}
	
	function checkConfirm()
	{
		var c=document.getElementById('check');
		var s=document.getElementById('end');
		
		
		if(c.checked)
		{
			s.disabled=false;
		}
		else
		{
			s.disabled=true;
	}		}
