/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "es",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		// {
		// 	module: "calendar",
		// 	header: "US Holidays",
		// 	position: "top_left",
		// 	config: {
		// 		calendars: [
		// 			{
		// 				symbol: "calendar-check-o ",
		// 				url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
		// 			}
		// 		]
		// 	}
		// },
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Guayaquil, Ecuador",
				locationID: "3657509",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "cef18dd541fed64b5e20184729ff9bdf"
			}
		},
		// {
		// 	module: "weatherforecast",
		// 	position: "top_right",
		// 	header: "Weather Forecast",
		// 	config: {
		// 		location: "New York",
		// 		locationID: "5128581",  //ID from http://www.openweathermap.org/help/city_list.txt
		// 		appid: "YOUR_OPENWEATHER_API_KEY"
		// 	}
		// },
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "El universo",
						url: "https://www.eluniverso.com/rss/all.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},

		//{
		//module: 'MMM-iFrame',
		//position: 'bottom_left',	// This can be any of the regions.
		//config: {
		//	// See 'Configuration options' for more information.
		//		url: ["https://www.youtube.com/embed/yw_nqzVfxFQ?autoplay=1"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
		//		updateInterval:  3* 60 * 1000, // rotate URLs every 30 seconds
		//		width: "100%", // Optional. Default: 100%
		//		height: "100px" //Optional. Default: 100px
		//	}
		//},
	
		


	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
