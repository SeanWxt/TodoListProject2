//Check off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	//if li is grey and line-through, turn it black and normal; if li is black and normal, vise versa
	$(this).toggleClass("completed");
});

//Click on Trash bin to delete Todo
$("ul").on("click", "span:nth-child(1)", function(event){
	$(this).parent().fadeOut(function(){
		$(this).closest('li').remove();
	});
	event.stopPropagation();
});

//Click on the up arrow to put the Todo on top and make text bold
$("ul").on("click", "span:nth-child(2)", function(event){
	$(this).closest('ul').prepend(this.closest('li'));
	$(this).parent().addClass("highlighted");
	event.stopPropagation();
});

//Click on the down arrow to put the Todo at the bottom.
$("ul").on("click", "span:nth-child(3)", function(event){
	$(this).closest('ul').append(this.closest('li'));
	$(this).parent().removeClass("highlighted");
	event.stopPropagation();
});

//Make a new Todo by typing in the input box
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val()
		//clear the content after ENTER key is pressed
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span><span><i class=\"fas fa-arrow-circle-up\"></i></span><span><i class=\"fas fa-arrow-circle-down\"></i></span> " + todoText + "</li>")
	}
});

$("#editIcon").click(function(){
	$("input[type='text']").fadeToggle();
});