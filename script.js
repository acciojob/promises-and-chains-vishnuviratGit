//your JS code here. If required.
document.getElementById("btn").addEventListener("click", ()=>{
	 let age=document.getElementById("age").value;
	 let name=document.getElementById("name").value;
	if(!age || !name){
		alert("Please enter valid details.");
	}
	else{
		let myPromise=new Promise((resolve, reject)=>{
			 setTimeout(()=>{
				 if(parseInt(age)>=18){
					 resolve(`Welcome, ${name}. You can vote.`);
				 }
				 else{
					 reject(`Oh sorry ${name}. You aren't old enough.`);
				 }
			 }, 4000)
		})
		myPromise.then((result)=>alert(result)).catch((error)=> alert(error));
	}
})
