ej.addCulture( "mn-MN", {
	name: "mn-MN",
	englishName: "Mongolian (Cyrillic, Mongolia)",
	nativeName: "Монгол хэл (Монгол улс)",
	language: "mn-Cyrl",
	numberFormat: {
		",": " ",
		".": ",",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "₮"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 1,
			days: {
				names: ["Ням","Даваа","Мягмар","Лхагва","Пүрэв","Баасан","Бямба"],
				namesAbbr: ["Ня","Да","Мя","Лха","Пү","Ба","Бя"],
				namesShort: ["Ня","Да","Мя","Лх","Пү","Ба","Бя"]
			},
			months: {
				names: ["1 дүгээр сар","2 дугаар сар","3 дугаар сар","4 дүгээр сар","5 дугаар сар","6 дугаар сар","7 дугаар сар","8 дугаар сар","9 дүгээр сар","10 дугаар сар","11 дүгээр сар","12 дугаар сар",""],
				namesAbbr: ["1-р сар","2-р сар","3-р сар","4-р сар","5-р сар","6-р сар","7-р сар","8-р сар","9-р сар","10-р сар","11-р сар","12-р сар",""]
			},
			monthsGenitive: {
				names: ["1 дүгээр сарын","2 дугаар сарын","3 дугаар сарын","4 дүгээр сарын","5 дугаар сарын","6 дугаар сарын","7 дугаар сарын","8 дугаар сарын","9 дүгээр сарын","10 дугаар сарын","11 дүгээр сарын","12 дугаар сарын",""],
				namesAbbr: ["1-р сарын","2-р сарын","3-р сарын","4-р сарын","5-р сарын","6-р сарын","7-р сарын","8-р сарын","9-р сарын","10-р сарын","11-р сарын","12-р сарын",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "yyyy-MM-dd",
				D: "yyyy 'оны' M'-р сарын' d. dddd 'гариг'.",
				t: "H:mm",
				T: "HH:mm:ss",
				f: "yyyy 'оны' M'-р сарын' d. dddd 'гариг'. H:mm",
				F: "yyyy 'оны' M'-р сарын' d. dddd 'гариг'. HH:mm:ss",
				M: "MMMM d.",
				Y: "yyyy 'оны' MMMM"
			}
		}
	}
});