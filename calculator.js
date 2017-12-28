var display=document.getElementById('result');

function displayNum(n1){
     display.className="focussed";
     display.value+=n1;  
};

function calculate() {
	try{
		display.value=eval(display.value);
	}
	catch(err){
		display.value='Invalid Expression';
	}  
};

function clearAll() {
	display.value=null;
};

function backSpace() {
	var s2=display.value;
	s2=s2.substring(0,(s2.length-1));
	display.value=s2;
};
