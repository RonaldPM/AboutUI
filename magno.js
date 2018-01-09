var modal = document.getElementById('mdl-custom-modal'),
	btn = document.getElementById("mdl-custom-btn"),
	close = document.getElementsByClassName("mdl-custom-close")[0];

btn.onclick = function() {
	'use strict';
	modal.style.display = "block";
}

close.onclick = function() {
	'use strict';	
	modal.style.display = "none";
}

/* Use if you whant to close modal when click outside of modal window */
window.onclick = function(event) {
	'use strict';
	
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
