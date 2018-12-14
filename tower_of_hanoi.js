function tower_update(){	//update the tower instruction
	var numberOfRings = document.getElementById("input_rings").value;
	var ringNum = numberOfRings;
	var moveNum = 0;
	
	var poleOne = [0];
	var poleTwo = [0];
	var poleThree = [0];
	
	var outputStack = [0];
	var outputStackItr = 0;
	
	for(var i = 1; i <= ringNum; i++){
		poleOne.push(i);
	}
	
    var div = document.createElement('div');
	var p = document.createElement('p');
	
	div.innerHTML = "Generating your steps...";
	document.getElementById('playable_tower').appendChild(div);
	
	while((poleOne[poleOne.length-1] != 0) || (poleTwo[poleTwo.length-1] != 0)){
		if(ringNum % 2 == 0){	//If number of rings is even
			if(poleOne[poleOne.length-1] > poleTwo[poleTwo.length-1]){		//Make the legal move between poles 1 and 2:
				poleTwo.push(poleOne[poleOne.length-1]);	//copy top ring of pole one to pole two,
				outputStack[outputStackItr] = "Moving ring of size " + poleOne[poleOne.length-1] + " from pole 1 to pole 2";
				outputStackItr++;
				console.log("Moving ring of size " + poleOne[poleOne.length-1] + " from pole 1 to pole 2");
				poleOne.pop();			//remove the original ring from ring one
			}else{
				outputStack[outputStackItr] = "Moving ring of size " + poleTwo[poleTwo.length-1] + " from pole 2 to pole 1";
				outputStackItr++;
				console.log("Moving ring of size " + poleTwo[poleTwo.length-1] + " from pole 2 to pole 1");
				poleOne.push(poleTwo[poleTwo.length-1]);	//copy top ring of pole two to pole one,
				poleTwo.pop();			//remove the original ring from ring two
			}
			
			moveNum++;		//count number of moves

			if(poleOne[poleOne.length-1] > poleThree[poleThree.length-1]){		//Make the legal move between poles 1 and 3:
				outputStack[outputStackItr] = "Moving ring of size " + poleOne[poleOne.length-1] + " from pole 1 to pole 3";
				outputStackItr++;
				console.log("Moving ring of size " + poleOne[poleOne.length-1] + " from pole 1 to pole 3");
				poleThree.push(poleOne[poleOne.length-1]);	//copy top ring of pole one to pole three,
				poleOne.pop();			//remove the original ring from ring one
			}else{
				outputStack[outputStackItr] = "Moving ring of size " + poleThree[poleThree.length-1] + " from pole 3 to pole 1";
				outputStackItr++;
				console.log("Moving ring of size " + poleThree[poleThree.length-1] + " from pole 3 to pole 1");
				poleOne.push(poleThree[poleThree.length-1]);	//copy top ring of pole three to pole one,
				poleThree.pop();		//remove the original ring from ring three
			}

			moveNum++;		//count number of moves
	
			if(poleTwo[poleTwo.length-1] > poleThree[poleThree.length-1]){		//Make the legal move between poles 2 and 3:	
				outputStack[outputStackItr] = "Moving ring of size " + poleTwo[poleTwo.length-1] + " from pole 2 to pole 3";
				outputStackItr++;
				console.log("Moving ring of size " + poleTwo[poleTwo.length-1] + " from pole 2 to pole 3");
				poleThree.push(poleTwo[poleTwo.length-1]);	//copy top ring of pole Two to pole three,
				poleTwo.pop();			//remove the original ring from ring Two
			}else{
				outputStack[outputStackItr] = "Moving ring of size " + poleThree[poleThree.length-1] + " from pole 3 to pole 2";
				outputStackItr++;
				console.log("Moving ring of size " + poleThree[poleThree.length-1] + " from pole 3 to pole 2");
				poleTwo.push(poleThree[poleThree.length-1]);	//copy top ring of pole three to pole two,
				poleThree.pop();		//remove the original ring from ring three
			}
	
			moveNum++;		//count number of moves
		}else if(ringNum % 2 != 0){			//else if number of rings is odd

			if(poleOne[poleOne.length-1] > poleThree[poleThree.length-1]){		//Make the legal move between poles 1 and 3:
				outputStack[outputStackItr] = "Moving ring of size " + poleOne[poleOne.length-1] + " from pole 1 to pole 3";
				outputStackItr++;
				console.log("Moving ring of size " + poleOne[poleOne.length-1] + " from pole 1 to pole 3");
				poleThree.push(poleOne[poleOne.length-1]);	//copy top ring of pole one to pole three,
				poleOne.pop();			//remove the original ring from ring one
			}else{
				outputStack[outputStackItr] = "Moving ring of size " + poleThree[poleThree.length-1] + " from pole 3 to pole 1";
				outputStackItr++;
				console.log("Moving ring of size " + poleThree[poleThree.length-1] + " from pole 3 to pole 1");
				poleOne.push(poleThree[poleThree.length-1]);	//copy top ring of pole three to pole one,
				poleThree.pop();		//remove the original ring from ring three
			}
			
			moveNum++;		//count number of moves
			
			if((poleOne[poleOne.length-1] != 0) || (poleTwo[poleTwo.length-1])){
				
				if(poleOne[poleOne.length-1] > poleTwo[poleTwo.length-1]){		//Make the legal move between poles 1 and 2:
					poleTwo.push(poleOne[poleOne.length-1]);	//copy top ring of pole one to pole two,
					outputStack[outputStackItr] = "Moving ring of size " + poleOne[poleOne.length-1] + " from pole 1 to pole 2";
					outputStackItr++;
					console.log("Moving ring of size " + poleOne[poleOne.length-1] + " from pole 1 to pole 2");
					poleOne.pop();			//remove the original ring from ring one
				}else{
					outputStack[outputStackItr] = "Moving ring of size " + poleTwo[poleTwo.length-1] + " from pole 2 to pole 1";
					outputStackItr++;
					console.log("Moving ring of size " + poleTwo[poleTwo.length-1] + " from pole 2 to pole 1");
					poleOne.push(poleTwo[poleTwo.length-1]);	//copy top ring of pole two to pole one,
					poleTwo.pop();			//remove the original ring from ring two
				}
	
				moveNum++;		//count number of moves
	
				if(poleTwo[poleTwo.length-1] > poleThree[poleThree.length-1]){		//Make the legal move between poles 2 and 3:	
					outputStack[outputStackItr] = "Moving ring of size " + poleTwo[poleTwo.length-1] + " from pole 2 to pole 3";
					outputStackItr++;
					console.log("Moving ring of size " + poleTwo[poleTwo.length-1] + " from pole 2 to pole 3");
					poleThree.push(poleTwo[poleTwo.length-1]);	//copy top ring of pole Two to pole three,
					poleTwo.pop();			//remove the original ring from ring Two
				}else{
					outputStack[outputStackItr] = "Moving ring of size " + poleThree[poleThree.length-1] + " from pole 3 to pole 2";
					outputStackItr++;
					console.log("Moving ring of size " + poleThree[poleThree.length-1] + " from pole 3 to pole 2");
					poleTwo.push(poleThree[poleThree.length-1]);	//copy top ring of pole three to pole two,
					poleThree.pop();		//remove the original ring from ring three
				}
		
				moveNum++;		//count number of moves	
			}
		}
	}
	
	for(var i = 0; i < moveNum; i++){
		p.innerHTML = p.innerHTML + outputStack[i] + "<br />";
	}
	
	document.getElementById('playable_tower').appendChild(p);
	
	var numberOfMoves = document.createElement('p');
	
	numberOfMoves.innerHTML = "Number of steps required: " + moveNum;
	document.getElementById('playable_tower').appendChild(numberOfMoves);
}