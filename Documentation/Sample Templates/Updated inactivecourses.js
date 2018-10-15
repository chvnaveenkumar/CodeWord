var btnContainer = document.getElementById("btnDiv");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) 
{
	if ($(btns[i]).hasClass('active')) 
  {
		var para = document.createElement("p");
		var t = document.createTextNode(this.innerHTML);       
		para.appendChild(t);                                
		document.body.appendChild(para);
		}
	}
