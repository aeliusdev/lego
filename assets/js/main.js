$(function() 
{
	var el = $("#amount");
	var menu_open = false;
	
	$( "#calculator-slider-div" ).slider({range: "min",
		min: 0,
		max: 10000,
		value: 2000,
		slide: function( event, ui ) 
		{
			var amount = ui.value;

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
		}
	});
	
	var amount = $( "#calculator-slider-div" ).slider( "value" );
	
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
	
	$(window).resize(function () 
	{
		
	}).resize();
});