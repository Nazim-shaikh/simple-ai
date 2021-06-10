messages = document.getElementById('messages')
input = document.getElementById('input')
sellerblock = document.getElementById('sellerblock')
buyerblock = document.getElementById('buyerblock')

msgno = 0

products = {
"mobile":{price:12000},
"tomato":{price:30},
"rice":{price:60},
"book":{price:500},
"laptop":{price:25000},
"chair":{price:350}
}


function taketheinput(event) {
	// here is the js code for input processing
	//if they hit the enter key 
	if(event.key === "Enter"){
// create a buyer message block
		messages.innerHTML += buyerblock.outerHTML
		// and change its id
		msgno += 1
		messages.lastChild.id = msgno
		//now changing its text
		messages.lastChild.childNodes[1].textContent = input.value
		// finally process the input 
		processinput(input.value.toLowerCase())
		input.value = ""

	}
}

function processinput(inputval){

	if(inputval!=""){
		messages.innerHTML += sellerblock.outerHTML
		// and change its id
		msgno += 1
		messages.lastChild.id = msgno
		//now changing its text
		messages.lastChild.childNodes[1].textContent = reply(inputval)	
	}

}



function reply(inputval) {
	result = inputval.match(/(how)|(\w+)/g)

	if(result.includes("how")){
		return "fine" 
	}
	if(result.includes("fund")){
		return "To receive Payment Acknowledgement please follow these instructions: a]. If you have used direct payment method i.e Debit Card/Credit Card or Net banking, then you need to login to your profile using the email ID used to make the transaction and download it from the donation history section. You can click on forgot password to retrieve your password. b]. If you have used UPI/Bank transfer/PayTM Wallet payment method, you need to visit on the fundraiser page to which you have supported and look out for click here to receive payment acknowledgement option and fill up the necessary details in order to receive payment acknowledgement. c]. For 80G Certificate please follow the below instructions: Link to download the certificate- d]. Also, check your inbox & spam box, you might have received an email from Ketto with the attachment of the same when you completed your transaction. If you are still unable to find it, please drop us an email on info@funded"
		
	}
	if(result.includes("hi")){
		return "hi"
	}
	if(result.includes("price")){
		return recentproduct.price
	}
	if(result.includes("ok")){
		return "hmm"
	}
	if(result.includes("hero")){
		return "yes we hero"
	}
	if(result.includes("fear")){
		return "fear is hounted"
	}
	if(result.includes("anywhere")){
		return "yes i am anywhere"
	}
	if(result.includes("family")){
		return "you are friend and your my family"
	}
	if(result.includes("hero")){
		return "yes we hero"
	}
	if(result.includes("angry")){
		return "No friend"
	}
	if(result.includes("work hard")){
		return "work hard make you better person"
	}
	if(result.includes("workhard")){
		return "work hard make you better person"
	}
	if(result.includes("career")){
		return "its depend on you"
	}
	if(result.includes("job")){
		return "do the job what gives profit to world"
	}
	if(result.includes("proudest")){
		return "work hard take the proud"
	}
	if(result.includes("proud")){
		return "work hard take the proud"
	}
	if(result.includes("favorite book")){
		return "my favourite book is i am robot"
	}
	if(result.includes("book")){
		return "my favourite book is i am robot"
	}
	if(result.includes("favorite")){
		return "you are my favourite"
	}
	if(result.includes("name")){
		return "my name is cute bot"
	}
	if(result.includes("age")){
		return "hey.. i am bot i dont have any age"
	}
	if(result.includes("hello")){
		return "hello"
	}
		if(result.includes("hmm")){
		return "say more"
	}
		if(result.includes("nothing")){
		return "hmm"
	}
       if(result.includes("say")){
		return "what is say"
	}	
	if(result.includes("say more")){
		return "first you say"
	}	
	
	a="";
	result.forEach(function(product){
		if(products.hasOwnProperty(product)){
			a = "Yes we have " + product
			recentproduct = products[product]
		}
	})
	if(a){
		return a;
	}


	return "Sorry " + inputval + " i dont understand"
	// if (inputval === "How are you?") {
	// 	return "I am fine"
	// }
}
