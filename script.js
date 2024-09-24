function isPerfectSquare(x) {
			let s = Math.sqrt(x);
			return s === Math.floor(s);
		}

		// Function to check if a number is a Fibonacci number
		function isFibonacci(num) {
			// Check if 5*num^2 + 4 or 5*num^2 - 4 is a perfect square
			return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
		}

		// Take input from user and check if it's a Fibonacci number
		const input = parseInt(prompt("Enter a number"));
		alert(isFibonacci(input));
