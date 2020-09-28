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
													      					 	alert(chimName + " " + "has joined your team!");
													      					 	alert("As you walk into the tall grass on your way to the next city, you get ambushed!");
													      					 	alert("A Budew appears!");
													      					 	alert(name + " " + "sends out" + " " + chimName + "!");
													      					 		var ball = prompt("Would you like to catch the Budew?");
													      					 				     if (ball == "yes") {
													      					 				  		alert(name + " " + "throws a pokeball at opposing Budew!");
													      					 				  		alert(name + " " + "caught the Budew!");
													      					 				  			var nickname = prompt("Would you like to give Budew a nickname?");
													      					 				  							 if (nickname == "yes") {
													      					 				  								var bud = prompt("What should the name be?");
													      					 				  								alert(bud + " " + "has joined the party!");
													      					 				  		}
													      					 				  	
													      				   } else if (chimName == "no") {
													      				   			 alert("Chimchar has joined your team!");
													      					 		 alert("As you walk into the tall grass on your way to the next city, you get ambushed!");
													      					 		 alert("A Budew appears!");
													      					 		 alert(name + " " + "sends out Chimchar!");
													      					 		 var ball = prompt("Would you like to catch the Budew?");
													      					 				      if (ball == "yes") {
													      					 				  		 alert(name + " " + "throws a pokeball at opposing Budew!");
													      					 				  		 alert(name + " " + "caught the Budew!");
													      					 				  		 var nickname = prompt("Would you like to give Budew a nickname?");
													      					 				  						  if (nickname == "yes") {
													      					 				  						  	  var bud = prompt("What should the name be?");
													      					 				  							  alert(bud + " " + "has joined the party!");
													      					 				  		}
													      					 				  	
													      				   }
													      				   }

													      					 			  	   } else if (ball == "no") {
													      					 							 alert(chimName + " " + "scratches the hell out of the Budew!");
													      					 							 alert("Opposing Budew fainted!" + " " + chimName + " " + "gained exp!");
													      					 							 alert("You feel a surge of confidence overwhelm you!");
													      					 							 alert("You're trying to decide on who to battle,");
													      					 							 alert("A gym badge would be awesome, but it's a rock type gym");
													      					 							 alert("A Budew would've been nice to have...");
													      					 							 alert("Thankfully there's another trainer walking around!");
													      					 							 var choice = prompt("What will you do? Fight the gym leader with a disadvantage or fight the other trainer? (Type Gym or Trainer)");
													      					 							 				if (choice == "Trainer") {
													      					 							 					alert("You challenged Trainer Ben!");
													      					 							 					alert("Trainer Ben sends out Goldeen!");
													      					 							 					alert(name + " " + "sends out" + " " + chimName + "!");
													      					 							 					alert("What should" + " " + chimName + " " + "do?");
													      					 							 					var battle = prompt("Attack/Switch");
													      					 							 								   if (battle == "Attack") {
													      					 							 								   		var attack = prompt("Type 1, 2, or 3 to use Scratch!");
													      					 							 								   		 			   if (attack <= "2") {
													      					 							 								   		 			   		alert("Trainer Ben's Goldeen evaded the attack!");
													      					 							 								   		 			   		alert("Goldeen used Bubble!");
													      					 							 								   		 			   		alert("It's super-effective!");
													      					 							 								   		 			   		alert(chimName + " " + "fainted!");
													      					 							 								   		 			   		alert(name + " " + "is out of usable Pokemon!");
													      					 							 								   		 			   		alert(name + " " + "whited out!");
													      					 							 								   		 			   		alert("......Game Over......");

													      					 							 								   		 			 } else if (attack >= "1") {
													      					 							 								   		 			 			alert(chimName + " " + "used Scratch!");
													      					 							 								   		 			 			alert("It's a critical hit!");
													      					 							 								   		 			 			alert("Trainer Ben's Goldeen fainted!");
													      					 							 								   		 			 			alert("You beat Trainer Ben!");
													      					 							 								   		 			 			alert("Congratulations" + " " + name + "!");
													      					 							 								   		 			 			alert("You won the game!");
													      					 							 								   		 			 } 
													      					 																			     } else if (battle == "Switch") {
													      					 							 								   		 			 		alert("You only have 1 Pokemon!");
													      					 							 								   		 			 		var attack = prompt("Type 1, 2, or 3 to use Scratch!");
																	      					 							 								   		 			 	   if (attack <= "2") {
																	      					 							 								   		 			   			alert("Trainer Ben's Goldeen evaded the attack!");
																	      					 							 								   		 			   			alert("Goldeen used Bubble!");
																	      					 							 								   		 			   			alert("It's super-effective!");
																	      					 							 								   		 			   			alert(chimName + " " + "fainted!");
																	      					 							 								   		 			   			alert(name + " " + "is out of usable Pokemon!");
																	      					 							 								   		 			   			alert(name + " " + "whited out!");
																	      					 							 								   		 			   			alert("......Game Over......");
													      					 							 								   		 			 }
													      					 							 								   }
													      					 					
													      					 }
													    }

													      					 							 								 } 
													      					 } else if (chimCheck == "no") {
													    	var starter = prompt("Prof. Rowan: Who do you want to take on your journey? You can only take 1! (Type Chimchar, Turtwig or Piplup)");
													    					if (starter == "Chimchar") {
													      						var chimName = prompt("Prof. Rowan: Would you like to name Chimchar?");
													      										 if (chimName == "yes") {
													      					 						chimName = prompt("What is his name?");
													      					 						alert(chimName + " " + "has joined your team!");
													    }
													    } else if (starter == "Turtwig") {
															var turCheck = prompt("Is Turtwig ok?");
																			 if (turCheck == "yes") {
														 						var turName = prompt("Prof. Rowan: Would you like to name Turtwig?");
														 										if (turName == "yes") {
														 											turName = prompt("What is his name?");
														 											alert(turName + " " + "has joined your team!");
														 					}
														 }
														} else if (starter == "Piplup") {
															var pipCheck = prompt("Is Piplup ok?");
																			 if (pipCheck == "yes") {
																				var pipName = prompt("Prof. Rowan: Would you like to name Piplup?");
																								if (pipName == "yes") {
																								 	pipName = prompt("What is his name?");
																								 	alert(pipName + " " + "has joined your team!");
																								 					}
																								 }
																			}
												         

				  } else if (starter == "Turtwig") {
										var turCheck = prompt("Is Turtwig ok?");
													      if (turCheck == "yes") {
													      	var turName = prompt("Prof. Rowan: Would you like to name Turtwig?");
													      					 if (turName == "yes") {
													      					 	turName = prompt("What is his name?");
													      					 	alert(turName + " " + "has joined your team!");
													      					 	alert("As you walk into the tall grass on your way to the next city, you get ambushed!");
													      					 	alert("A Starly appears!");
													      					 	alert(name + " " + "sends out" + " " + turName + "!");
													      					 	var ball = prompt("Would you like to catch the Starly?");
													      					 				 if (ball == "yes") {
													      					 				  	alert(name + " " + "throws a pokeball at opposing Starly!");
													      					 				  	alert(name + " " + "caught the Starly!");
													      					 				  	var nickname = prompt("Would you like to give Starly a nickname?");
													      					 				  					 if (nickname == "yes") {
													      					 				  						var bird = prompt("What should the name be?");
													      					 				  						alert(bird + " " + "has joined the party!");
													      					 				  		}
													      					 				  	
													      					 			    } else if (ball == "no") {
													      					 							 alert(turName + " " + "tackles the hell out of the Starly!");
													      					 							 alert("Opposing Starly fainted!" + " " + turName + " " + "gained exp!");
													      					 							 alert("You feel a surge of confidence overwhelm you!");
													      					 							 alert("You're trying to decide on who to battle,");
													      					 							 alert("A gym badge would be awesome, luckily it's a rock type gym!");
													      					 							 alert("There's also another trainer walking around!");
													      					 							 var choice = prompt("What will you do? (Type Gym or Trainer)");
													      					 							 				if (choice == "Trainer") {
													      					 							 					alert("You challenged Trainer Ben!");
													      					 							 					alert("Trainer Ben sends out Starly!");
													      					 							 					alert(name + " " + "sends out" + " " + turName + "!");
													      					 							 					alert("What should" + " " + turName + " " + "do?");
													      					 							 					var battle = prompt("Attack/Switch");
													      					 							 								   if (battle == "Attack") {
													      					 							 								   		var attack = prompt("Type 1, 2, or 3 to use Tackle!");
													      					 							 								   		 			   if (attack <= "2") {
													      					 							 								   		 			   		alert("Trainer Ben's Starly evaded the attack!");
													      					 							 								   		 			   		alert("Starly used Peck!");
													      					 							 								   		 			   		alert("It's super-effective!");
													      					 							 								   		 			   		alert(turName + " " + "fainted!");
													      					 							 								   		 			   		alert(name + " " + "is out of usable Pokemon!");
													      					 							 								   		 			   		alert(name + " " + "whited out!");
													      					 							 								   		 			   		alert("......Game Over......");

													      					 							 								   		 			 } else if (attack >= "1") {
													      					 							 								   		 			 			alert(turName + " " + "used Tackle!");
													      					 							 								   		 			 			alert("It's a critical hit!");
													      					 							 								   		 			 			alert("Trainer Ben's Starly fainted!");
													      					 							 								   		 			 			alert("You beat Trainer Ben!");
													      					 							 								   		 			 			alert("Congratulations" + " " + name + "!");
													      					 							 								   		 			 			alert("You won the game!");
													      					 							 								   		 			 } 
													      					 																			     } else if (battle == "Switch") {
													      					 							 								   		 			 		alert("You only have 1 Pokemon!");
													      					 							 								   		 			 		var attack = prompt("Type 1, 2, or 3 to use Scratch!");
																	      					 							 								   		 			 	   if (attack <= "2") {
																	      					 							 								   		 			   			alert("Trainer Ben's Goldeen evaded the attack!");
																	      					 							 								   		 			   			alert("Goldeen used Bubble!");
																	      					 							 								   		 			   			alert("It's super-effective!");
																	      					 							 								   		 			   			alert(turName + " " + "fainted!");
																	      					 							 								   		 			   			alert(name + " " + "is out of usable Pokemon!");
																	      					 							 								   		 			   			alert(name + " " + "whited out!");
																	      					 							 								   		 			   			alert("......Game Over......");
													      					 							 								   		 			 }
													      					 							 								   }
													      					 					
													      					 }
													    }

													      					 							 								 } 
													      					 }
													    }
													    else if (turCheck == "no") {
													    	var starter = prompt("Prof. Rowan: Who do you want to take on your journey? You can only take 1! (Type Chimchar, Turtwig or Piplup)");
													    					if (starter == "Chimchar") {
													      						var chimName = prompt("Prof. Rowan: Would you like to name Chimchar?");
													      					if (chimName == "yes") {
													      					 	chimName = prompt("What is his name?");
													      					 	alert(chimName + " " + "has joined your team!");
													    }
													}	else if (starter == "Turtwig") {
															var turCheck = prompt("Is Turtwig ok?");
																			 if (turCheck == "yes") {
														 						var turName = prompt("Prof. Rowan: Would you like to name Turtwig?");
														 										if (turName == "yes") {
														 											turName = prompt("What is his name?");
														 											alert(turName + " " + "has joined your team!");
														 					}
																							 }
													  } else if (starter == "Piplup") {
																var pipCheck = prompt("Is Piplup ok?");
																				 if (pipCheck == "yes") {
																					var pipName = prompt("Prof. Rowan: Would you like to name Piplup?");
																									if (pipName == "yes") {
																										pipName = prompt("What is his name?");
																										alert(pipName + " " + "has joined your team!");
																										alert("As you walk into the tall grass on your way to the next city, you get ambushed!");
																						      			alert("A Bidoof appears!");
																						      		 	alert(name + " " + "sends out" + " " + pipName + "!");
																						      			var ball = prompt("Would you like to catch the Bidoof?");
																						      					 	 if (ball == "yes") {
																						      					 		alert(name + " " + "throws a pokeball at opposing Bidoof!");
																						      					  		alert(name + " " + "caught the Bidoof!");
																							 				  			var nickname = prompt("Would you like to give Bidoof a nickname?");
																						      					 				 		 if (nickname == "yes") {
																						      					 							var oof = prompt("What should the name be?");
																						      				  								alert(oof + " " + "has joined the party!");
																						      					 				  		}
																						      					 				  	
																						      					   } else if (ball == "no") {
																						      					 			 alert(pipName + " " + "pounds the hell out of the Bidoof!");
																						      								 alert("Opposing Bidoof fainted!" + " " + pipName + " " + "gained exp!");
																						      	 							 alert("You feel a surge of confidence overwhelm you!");
																										 			     	 alert("You're trying to decide on who to battle,");
																						      					 			 alert("A gym badge would be awesome, luckily it's a rock type gym!");
																						      								 alert("There's also another trainer walking around!");
																				 				 							 var choice = prompt("What will you do? (Type Gym or Trainer)");
																						      					 							if (choice == "Trainer") {
																						      					 					 			alert("You challenged Trainer Ben!");
																						      					 								alert("Trainer Ben sends out Cherubi!");
																						      					 			 					alert(name + " " + "sends out" + " " + pipName + "!");
																						      								 					alert("What should" + " " + pipName + " " + "do?");
																								 							 					var battle = prompt("Attack/Switch");
																						      					 							 				   if (battle == "Attack") {
																						      					 							 						var attack = prompt("Type 1, 2, or 3 to use Pound!");
																						      					 							 				   		 			   if (attack <= "2") {
																						      					 							 								   		 	alert("Trainer Ben's Cherubi evaded the attack!");
																						      					 							 									   		alert("Cherubi used Absorb!");
																						      					 							 							   		 		alert("It's super-effective!");
																						      					 							 								   		 	alert(pipName + " " + "fainted!");
																						      					 							 								   		 	alert(name + " " + "is out of usable Pokemon!");
																						      					 							 								   		 	alert(name + " " + "whited out!");
																						      					 							 								   		 	alert("......Game Over......");

																						      					 							 								   	 } else if (attack >= "1") {
																						      					 							 								   		 		alert(pipName + " " + "used Pound!");
																						      					 							 								  	 			alert("It's a critical hit!");
																						      					 							 				 		 			 			alert("Trainer Ben's Cherubi fainted!");
																						      					 							 				   		 			 			alert("You beat Trainer Ben!");
																						      					 											   		 			 			alert("Congratulations" + " " + name + "!");
																						      								 								   		 			 			alert("You won the game!");
																						      					 							 								   		 			 } 
																						      					 											 } else if (battle == "Switch") {
																						      					 							 							alert("You only have 1 Pokemon!");
																						      					 							   		 			 		var attack = prompt("Type 1, 2, or 3 to use Pound!");
																										      					 							 						   if (attack <= "2") {
																										      					 							 								alert("Trainer Ben's Goldeen evaded the attack!");
																										      					 							   		 			   			alert("Cherubi used Absorb!");
																										      				 								   		 			   			alert("It's super-effective!");
																										      					 							 								alert(pipName + " " + "fainted!");
																										      					 							   		 			   			alert(name + " " + "is out of usable Pokemon!");
																										      				 								   		 			   			alert(name + " " + "whited out!");
																								 							 								   		 			   			alert("......Game Over......");
																						      					 							 								   		 			 }
																						      					 							 								   }
																						      					 					
																						      					 }
																						    }

																						      					 							 								 } 
																						      					 }
																						    }
																								 					}
					else if (starter == "Piplup") {
							var pipCheck = prompt("Is Piplup ok?");
			   						         if (pipCheck == "yes") {
										      	var pipName = prompt("Prof. Rowan: Would you like to name Piplup?");
				   					      					    if (pipName == "yes") {
													   			 	pipName = prompt("What is his name?");
													      			alert(pipName + " " + "has joined your team!");
													      					 }
										   } else if (pipCheck == "no") {
													   var starter = prompt("Prof. Rowan: Who do you want to take on your journey? You can only take 1! (Type Chimchar, Turtwig or Piplup)");
													    			   if (starter == "Chimchar") {
													      					var chimName = prompt("Prof. Rowan: Would you like to name Chimchar?");
													      									 if (chimName == "yes") {
													      					 					chimName = prompt("What is his name?");
													      					 					alert(chimName + " " + "has joined your team!");
													    }
											  						 } else if (starter == "Turtwig") {
																				var turCheck = prompt("Is Turtwig ok?");
																			 					 if (turCheck == "yes") {
														 											var turName = prompt("Prof. Rowan: Would you like to name Turtwig?");
														 															if (turName == "yes") {
														 																turName = prompt("What is his name?");
														 																alert(turName + " " + "has joined your team!");
														 					}
														 }
																	 } else if (starter == "Piplup") {
																				var pipCheck = prompt("Is Piplup ok?");
																								 if (pipCheck == "yes") {
																									var pipName = prompt("Prof. Rowan: Would you like to name Piplup?");
																													if (pipName == "yes") {
																								 						pipName = prompt("What is his name?");
																								 						alert(pipName + " " + "has joined your team!");
																								 					}
																								 }
																			}
												        } 

				}

  		},800) 					
								
									
					