var arrayTasks = {

	concat: function (arr1, arr2) {
		var newArray = [];
		for (var array of arguments){
			for (item of array){
				newArray.push(item);
			}
		}
		return newArray;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var squaresArray = [];
		for (var item of arr){
			item *= item;
			squaresArray.push(item);
		}
		return squaresArray;
	},

	sum: function (arr) {
		var total = 0;
		for (var item of arr){
			total += item;
		}
		return total;
	},

	findDuplicates: function (arr) {
		var duplicateArray = [];
		arr.forEach(function(item, index){
			var itemIsDuplicate = (index !== arr.indexOf(item));
			var itemIsNotInDuplicateArray = (duplicateArray.indexOf(item) === -1);
			if (itemIsDuplicate && itemIsNotInDuplicateArray ){
				duplicateArray.push(item);
			}
			console.log("item is: ", item, "at index: ", index);
			console.log();
		})

		return duplicateArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		var newArray = [];
		for (var item of arr){
			if (item !== valueToRemove){
				newArray.push(item);
			}
		}
		return newArray;
		},

	findIndexesOf: function (arr, itemToFind) {
		var newArray = [];
		var counter = 0;
		for (var item of arr){
			if (item === itemToFind){
				newArray.push(counter);
			}
			counter ++;
		}
		return newArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var total = 0;
		for (var item of arr){
			if (item % 2 === 0){
				total += item**2;
			}
		}
		return total;
	}

}

module.exports = arrayTasks
