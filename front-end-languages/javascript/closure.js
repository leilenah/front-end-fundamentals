/**
 * Closure
 *
 * JavaScript closures make it possible for functions to have private variables.
 */


function add() {
	let counter = 0;

	function plus() {
		return counter += 1;
	}

	plus();
}

// self-invoking anonymous function closure
(function (){
	let counter = 0;

	function plus() {
		return counter += 1;
	}

	plus();
})();
