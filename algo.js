/*first = "";
second = "";*/

UkraineD = 0.03;
UgandaD = 0.0002;
NorthKoreaD = 0.0011;
AfghanistanD = 0.011;
KiribatiD = 0.7521;

var needle = require("needle");
var cheerio = require("cheerio");

function Start() 
{
	var amount = document.getElementById('Inp').value;

	if (amount < 0)
	{
		window.alert("The value is incorrect.");
		return;
	}
	else
	{
		var num =  Number(amount)// The Number() only visualizes the type and is not needed
		var roundedString = num.toFixed(2);
		var rounded = Number(roundedString);
		
		if(amount == rounded)
		{
			const ValueFrom = document.querySelector('#From').value;
			if(!ValueFrom) 
				return;
			const ValueTo = document.querySelector('#To').value;
			if(!ValueTo) 
				return;

			if (ValueFrom == "Ukraine, Hryvnia")
				first = UkraineD;
			if (ValueFrom == "Uganda, Ugandan Schling")
				first = UgandaD;
			if (ValueFrom == "North Korea, Won")
				first = NorthKoreaD;
			if (ValueFrom == "Afghanistan, Afghani")
				first = AfghanistanD;
			if (ValueFrom == "Kiribati, Australian dollar")
				first = KiribatiD;

			if (ValueTo == "Ukraine, Hryvnia")
				second = UkraineD;
			if (ValueTo == "Uganda, Ugandan Schling")
				second = UgandaD;
			if (ValueTo == "North Korea, Won")
				second = NorthKoreaD;
			if (ValueTo == "Afghanistan, Afghani")
				second = AfghanistanD;
			if (ValueTo == "Kiribati, Australian dollar")
				second = KiribatiD;

			OUTCOME = (first * amount) / second;
			window.alert(OUTCOME);
			
			/*url = "https://www.xe.com/currencyconverter/convert/?Amount=" + amount + "&From=" + first + "&To=" + second;
			xpath = "/html/body/div[1]/div[2]/div[2]/section/div[2]/div/main/form/div[2]/div[1]/p[2]/text()[1]";*/



			/*needle.get("https://www.xe.com/currencyconverter/convert/?Amount=56&From=KPW&To=AFN", function(err, res)
			{
				if(err) 
					throw(err);
				var $ = cheerio.load(res.body);
				window.alert($(".faded-digits").text());
			});*/

			/*RESULT = "";

			const axios = require('axios');
			const cheerio = require('cheerio');

			axios.get(url).then(html => {
				const $ = cheerio.load(html.data);
				let text = '';
				$(xpath).each(i, el) => {
					text = `${$(elem).text()}`;
				}
				window.alert(text);
			})*/

			/*RESULT = someJavaScriptMagic.parse(url, xpath).value;
			window.alert(RESULT);*/
		}
		else
		{
			window.alert("The value is incorrect.");
			return;
		}
	}
}