$(function() 
{
	var el = $("#amount");
	var menu_open = false;
	var initial_amount = 1234;
	
	var tooltip = function(event, ui) 
	{
		//console.log(ui.value);
	    var amount = ui.value || initial_amount;
	    var tooltip = '<div class="tooltip"><div class="tooltip-inner">' + amount + '</div><div class="tooltip-arrow"></div></div>';
		if (amount <= 3000)
		{
			el.html("3");
		} else if (amount > 3000 && amount <= 6000)
		{
			el.html("2");				
		} else 
		{
			el.html("1");				
		}
			
	    $('.ui-slider-handle').html(tooltip);
	}
		
	$( "#calculator-slider-div" ).slider({range: "min",
		min: 0,
		max: 10000,
		value: initial_amount,
		create: tooltip,
		slide: tooltip
	});
	
	$("#mobile-menu-toggle").on("click", function () 
	{
		if (menu_open == true)
		{
			$("#mobile-menu ul").slideUp();
			$(this).find("span").text("+");
			
			menu_open = false;
		} else
		{
			$("#mobile-menu ul").slideUp(0).slideDown(400);
			$(this).find("span").text("-");

			menu_open = true;
		}
	});
	
	$(window).resize(function () 
	{
		
	}).resize();
});