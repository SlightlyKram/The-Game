var check

alert("Welcome to the Sinnoh region! An adventure awaits");

	var name = prompt("What is your name?");

		check = prompt("Is" + " " + name + " " + "acceptable?");
					if (check == "yes") {
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
			