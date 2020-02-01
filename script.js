var animBlock1 = document.getElementById("hidden_block"),
	animBlock2 = document.getElementById("hidden_block_static"),
	animBackground = document.getElementById("header_anim"),
	animHeader = document.getElementById("h1_anim");
animBackground.style.display = "block";
setTimeout(hideAnimBlocks, 2000);
setTimeout(hideBackground, 5000);

function hideAnimBlocks(){
	animBlock1.style.display = "none";
	animBlock2.style.display = "none";
};
function hideBackground(){
	animBackground.style.display = "none";
	animHeader.style.display = "none";
};