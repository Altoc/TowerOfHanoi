package towerofhanoi;
import java.util.Stack;

public class Game {
	public static void main(String[] args) {
		int moves = 0;
		int rings = 64;	//64 rings is the fabled number
		Pole pole1 = new Pole(rings);
		Pole pole2 = new Pole(0);
		Pole pole3 = new Pole(0);
		while(pole3.ringCount != rings) {
			System.out.println("loop 1");
			if(rings % 2 == 0) {
				pole2.transferRing(pole1);
				moves++;
				pole3.transferRing(pole1);
				moves++;
				pole3.transferRing(pole2);
				moves++;
			} else {
				pole3.transferRing(pole1);
				moves++;
				if(pole3.ringCount != rings) {
					pole2.transferRing(pole1);
					moves++;
					pole3.transferRing(pole2);
					moves++;
				}
			}
		}
		System.out.println("Game Done! Moves: " + moves);
	}

}

class Pole{
	public int ringCount;			//How many rings a pole holds
	public Stack<Ring> ps = new Stack<>();	//Ring container
	
	public Pole(int amtOfRings) {
		ringCount = amtOfRings;
		ps.push(new Ring(2147483647)); //int limit on 32bit machines
		for(int i = amtOfRings; i >= 1; i--) {
			System.out.println("loop 2");
			ps.push(new Ring(i));
		}
	}
	
	public void transferRing(Pole poleToSwap) {
		if((poleToSwap.ps.peek().size < ps.peek().size) || (ps.empty())) {
			ps.push(poleToSwap.ps.peek());
			ringCount++;
			poleToSwap.ps.pop();
			poleToSwap.ringCount--;
		} else if(poleToSwap.ps.peek().size > ps.peek().size) {
			poleToSwap.ps.push(ps.peek());
			poleToSwap.ringCount++;
			ps.pop();
			ringCount--;
		}
	}
}

class Ring{
	public int size;
	public Ring(int sizeOfRing) {
		size = sizeOfRing;
	}
}
