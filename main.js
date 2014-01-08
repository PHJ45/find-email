var sendify = (function(){ // A self excuting anonymous function that creates a namespace. Basically keeping all variables in one place as opposed to making them global 
	var api = {}; // empty object that is returned if you want to make stuff public
	
	var init = function(){ // The init function. This gets called first when the page loads (call happens at the bottom of the page)

	}
	
	
	//Click event happens here
	$("#create-button").click(function(e){
		e.preventDefault(); // stops the click event of the link 
		
		api.contact = {}; // init api.contact object
		
		//get the info from the boxes and save them into api.contact
		api.contact.first_name = $("#contact_firstname").val();
		api.contact.last_name = $("#contact_lastname").val();
		api.contact.company = $("#contact_company_url").val();
		
		create_options(); //calls the create function 
	});
	
	var create_options = function(){
		var ops = []; // makes an empty array to store the options
		
		// api.ops.push() pushes the value within the () onto the end of the array
		
		ops.push(api.contact.first_name);
		
		ops.push(api.contact.last_name);
		
		ops.push(api.contact.first_name + api.contact.last_name);
		
		ops.push(api.contact.first_name + "." + api.contact.last_name);
		
		ops.push(api.contact.first_name + "_" + api.contact.last_name);
		
		ops.push(api.contact.first_name.substring(0,1) + api.contact.last_name);
		
		ops.push(api.contact.first_name.substring(0,1) + "." + api.contact.last_name);
		
		ops.push(api.contact.first_name.substring(0,1) + "_" + api.contact.last_name);
		
		ops.push(api.contact.last_name + api.contact.first_name);
		
		ops.push(api.contact.last_name + "." + api.contact.first_name);
		
		ops.push(api.contact.last_name + "_" + api.contact.first_name);
		
		ops.push(api.contact.last_name + api.contact.first_name.substring(0,1));
		
		ops.push(api.contact.last_name + "." + api.contact.first_name.substring(0,1));
		
		ops.push(api.contact.last_name + "_" + api.contact.first_name.substring(0,1));
		
		output_options(ops); // call the function output_options and pass it the options (ops)
		
	}
	
	var output_options = function(ops){
		
		var well = $("#export_well"); // This just saves the selector so the dom doesn't have to keep looking it up in the for loop (just makes things a little quicker)
		
		well.empty(); //empties the well so if you double click on create it doesn't just keep making more.
		
		for(var i = 0; i < ops.length; i++){ // For loop to go through each element
			well.append(ops[i]+api.contact.company + ", "); // Append the last part of the url @company.com to the option, then append it to the well. 
		}
	}
	
	
	
	init(); //calls init function 
	return api;
})();