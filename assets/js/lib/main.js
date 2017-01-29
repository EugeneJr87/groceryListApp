//get value of to dos and save to local storage
$("ul").html(localStorage.getItem('listItems'));
//check off specific todo by clicking
$("ul").on("click", "li" ,function(){
	$(this).toggleClass("completed");		
});

//click on X do delete
$("ul").on("click", "span" ,function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
		localStorage.setItem('listItems', $("ul").html());
	});
	event.stopPropagation();
})
//adding to do list
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing input value
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")

		localStorage.setItem('listItems', $("ul").html());
	}
});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});