function containsAll(needles, haystack) { //If array contains all values
	for (var i = 0 , len = needles.length; i < len; i++) {
		if($.inArray(needles[i], haystack) == -1) return false;
	}
	return true;
}