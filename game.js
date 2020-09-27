var check

alert("Welcome to the Sinnoh region! An adventure awaits");

	var name = prompt("What is your name?");

		check = prompt("Is" + " " + name + " " + "acceptable?");
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
			
			var img = document.createElement("img");
			img.src = "Images/chimchar.png"
			var src = document.getElementById("x");
			