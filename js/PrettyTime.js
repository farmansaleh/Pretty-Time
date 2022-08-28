/*
    author : @Farman Saleh
 	date   : August 27/2022
 	github : github.com/farmansaleh

	Note : Call function where you want to use and pass date time with 24H Time Stamp as a parameter
	eg.  2022-02-01 10:59:48.023000
**/
function getPrettyTime(val) 
{
	if(val != null && val != "null" && val != "")
	{
		var val=new Date(val);
		var day=val.getDate();
		var month=val.getMonth();
		var year=val.getFullYear();
		var h=val.getHours();
		var m=val.getMinutes();
		var s=val.getSeconds();
		var ampm = h >= 12 ? ' PM' : ' AM';
		
		var c_val=new Date();
		var c_day=c_val.getDate();
		var c_month=c_val.getMonth();
		var c_year=c_val.getFullYear();
		var c_h=c_val.getHours();
		var c_m=c_val.getMinutes();
		var c_s=c_val.getSeconds();
		
		var prettyTime = null;
		
		if((c_year-year) == 1 && c_month <= month)
		{
			var r_m=12-(month-c_month);
			prettyTime = r_m+" Month ago";
		}
		else if(c_year > year)
		{
			prettyTime = (c_year-year)+" Year ago";
		}
		else
		{
			if((c_month-month) == 1 && c_day <= day)
			{
				var r_d=30-(day-c_day);
				prettyTime = getWeekendDay(r_d);
			}
		    else if(c_month > month)
			{
				prettyTime = (c_month-month)+" Month ago";
			}
			else
			{
				if((c_day-day) == 1 && c_h <= h)
				{
					var v_h=24-(h-c_h);
					prettyTime = "Yesterday "+(h-12)+':'+m+ampm;
					
                    // display hour like 2 hour ago - according to your choice
                    // var v_h=24-(h-c_h);
                    // prettyTime = v_h+" HOUR AGO";
				}
				else if(c_day > day)
				{
					prettyTime = getWeekendDay(c_day-day);
				}
				else
				{
					if((c_h-h) == 1 && c_m <= m)
					{
						var v_m=60-(m-c_m);
						prettyTime = v_m+" Min ago";
					}
					else if(c_h > h)
					{
						var t_time = (h>12)?h-12 : h;
						prettyTime = "Today "+t_time+':'+m+ampm;
						
//						prettyTime = (c_h-h)+" HOUR AGO";
					}
					else
					{
						if(c_m > m)
						{
							prettyTime = (c_m-m)+" Min ago";
						}
						else
						{
							prettyTime = "Just now";
						}
					}
				}
			}
		}
		
		return prettyTime;
	}
}

//get Weekend time like 1 week and 2 days ago
function getWeekendDay(val)
{
	var Days = null;
	
	if(val != null && val != "")
	{
		if(val >= '1' && val <= '7')
		{
			Days = val+" Day ago"
		}
		else if(val >= '8' && val <= '14')
		{
			Days = "1 Week ago"
		}
		else if(val >= '15' && val <= '21')
		{
			Days = "2 Week ago"
		}
		else if(val >= '22' && val <= '28')
		{
			Days = "3 Week ago"
		}
		else if(val >= '29' && val <= '31')
		{
			Days = "4 Week ago"
		}
		return Days;
	}
}