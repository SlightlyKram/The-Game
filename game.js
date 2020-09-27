

alert("Welcome to the Sinnoh region! An adventure awaits");

	var name = prompt("What is your name?");

		var check = prompt("Is" + " " + name + " " + "acceptable?");
					if (check == "yes") {
						document.write("Trainer ID:" + " " + name);
						check = prompt("Are you ready for your adventure," + " " + name + "?");
									if (check == "yes") {
										alert("Good luck on your adventure!");
				  } else {
						check = prompt("Do you wish to quit?");
									if (check != "yes") {
										alert("Good luck on your adventure!");
								  } else {
								  		alert("Feel free to return anytime!");
								} 
				}


		  		  } else if (check == "no") {
						name = prompt("What is your name?");
						check = prompt("Is" + " " + name + " " + "acceptable?");
						document.write("Trainer ID:" + " " + name);
						check = prompt("Are you ready for your adventure," + " " + name + "?");
								if (check != "yes") {
									check = prompt("Do you wish to quit?");
												if (check == "yes") {
													alert("Feel free to return anytime!");
									  		  } else {
									  				alert("Good luck on your adventure!");
									  }
								}
				}
			
			alert("?:" + " " + "Hello," + " " + name + "." + " " + "My name is Professor Rowan. I will be assisting you on your adventure.");
			alert("Prof. Rowan:" + " " + "You get to choose one of my three Pokemon to help you on your journey.");
			alert("Prof. Rowan: Here they are!");

				setTimeout(function() {
  					var starter = prompt("Prof. Rowan: Who do you want to take on your journey? You can only take 1! (Type Chimchar, Turtwig or Piplup)");
  					if (starter == "Chimchar") {
										var chimCheck = prompt("Is Chimchar ok?");
													      if (chimCheck == "yes") {
													      	var chimName = prompt("Prof. Rowan: Would you like to name Chimchar?");
													      					 if (chimName == "yes") {
													      					 	chimName = prompt("What is his name?");
													      					 }
													      }
				} 					else if (starter == "Turtwig") {
												var turCheck = prompt("Is Turtwig ok?");
																 if (turCheck == "yes") {
														 			var turName = prompt("Prof. Rowan: Would you like to name Turtwig?");
														 							if (turName == "yes") {
														 								chimName = prompt("What is his name?");
														 					}
														 }
									}

  		},800) 					
								
									
					