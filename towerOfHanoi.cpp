#include<iostream>
#include<stack>

int main(){
	int 		 ringNum	= 0;
	int		 moveNum	= 0;
	std::stack<int>  poleOne;
	std::stack<int>  poleTwo;
	std::stack<int>  poleThree;

	poleOne.push(0);
	poleTwo.push(0);
	poleThree.push(0);
	
	std::cout<<"Welcome to Tower of Hanoi!"<<std::endl;
	std::cout<<"Input number of rings to play with: "<<std::endl;
	std::cin>>ringNum;
	
	for(int i = 1; i <= ringNum; i++){
		poleOne.push(i);
	}

	while((poleOne.top() != 0) || (poleTwo.top() != 0)){

		if(ringNum % 2 == 0){	//If number of rings is even

			if(poleOne.top() > poleTwo.top()){		//Make the legal move between poles 1 and 2:
				std::cout<<"Moving ring of size "<<poleOne.top()<<" from pole 1 to pole 2"<<std::endl;
				poleTwo.push(poleOne.top());	//copy top ring of pole one to pole two,
				poleOne.pop();			//remove the original ring from ring one
			}else{
				std::cout<<"Moving ring of size "<<poleTwo.top()<<" from pole 2 to pole 1"<<std::endl;
				poleOne.push(poleTwo.top());	//copy top ring of pole two to pole one,
				poleTwo.pop();			//remove the original ring from ring two
			}
			
			moveNum++;		//count number of moves

			if(poleOne.top() > poleThree.top()){		//Make the legal move between poles 1 and 3:
				std::cout<<"Moving ring of size "<<poleOne.top()<<" from pole 1 to pole 3"<<std::endl;
				poleThree.push(poleOne.top());	//copy top ring of pole one to pole three,
				poleOne.pop();			//remove the original ring from ring one
			}else{
				std::cout<<"Moving ring of size "<<poleThree.top()<<" from pole 3 to pole 1"<<std::endl;
				poleOne.push(poleThree.top());	//copy top ring of pole three to pole one,
				poleThree.pop();		//remove the original ring from ring three
			}

			moveNum++;		//count number of moves
	
			if(poleTwo.top() > poleThree.top()){		//Make the legal move between poles 2 and 3:
				std::cout<<"Moving ring of size "<<poleTwo.top()<<" from pole 2 to pole 3"<<std::endl;		
				poleThree.push(poleTwo.top());	//copy top ring of pole Two to pole three,
				poleTwo.pop();			//remove the original ring from ring Two
			}else{
				std::cout<<"Moving ring of size "<<poleThree.top()<<" from pole 3 to pole 2"<<std::endl;
				poleTwo.push(poleThree.top());	//copy top ring of pole three to pole two,
				poleThree.pop();		//remove the original ring from ring three
			}
	
			moveNum++;		//count number of moves

		}else if(ringNum % 2 != 0){			//else if number of rings is odd

			if(poleOne.top() > poleThree.top()){		//Make the legal move between poles 1 and 3:
				std::cout<<"Moving ring of size "<<poleOne.top()<<" from pole 1 to pole 3"<<std::endl;
				poleThree.push(poleOne.top());	//copy top ring of pole one to pole three,
				poleOne.pop();			//remove the original ring from ring one
			}else{
				std::cout<<"Moving ring of size "<<poleThree.top()<<" from pole 3 to pole 1"<<std::endl;
				poleOne.push(poleThree.top());	//copy top ring of pole three to pole one,
				poleThree.pop();		//remove the original ring from ring three
			}
			
			moveNum++;		//count number of moves
			
			if((poleOne.top() != 0) || (poleTwo.top() != 0)){
				
				if(poleOne.top() > poleTwo.top()){		//Make the legal move between poles 1 and 2:
					std::cout<<"Moving ring of size "<<poleOne.top()<<" from pole 1 to pole 2"<<std::endl;
					poleTwo.push(poleOne.top());	//copy top ring of pole one to pole two,
					poleOne.pop();			//remove the original ring from ring one
				}else{
					std::cout<<"Moving ring of size "<<poleTwo.top()<<" from pole 2 to pole 1"<<std::endl;
					poleOne.push(poleTwo.top());	//copy top ring of pole two to pole one,
					poleTwo.pop();			//remove the original ring from ring two
				}
	
				moveNum++;		//count number of moves
	
				if(poleTwo.top() > poleThree.top()){		//Make the legal move between poles 2 and 3:
					std::cout<<"Moving ring of size "<<poleTwo.top()<<" from pole 2 to pole 3"<<std::endl;		
					poleThree.push(poleTwo.top());	//copy top ring of pole Two to pole three,
					poleTwo.pop();			//remove the original ring from ring Two
				}else{
					std::cout<<"Moving ring of size "<<poleThree.top()<<" from pole 3 to pole 2"<<std::endl;
					poleTwo.push(poleThree.top());	//copy top ring of pole three to pole two,
					poleThree.pop();		//remove the original ring from ring three
				}
		
				moveNum++;		//count number of moves	
			}
		}
	}
	
	std::cout<<"Tower complete! Smallest number of moves for "<<ringNum<<" rings is "<<moveNum<<"."<<std::endl;
	
}
