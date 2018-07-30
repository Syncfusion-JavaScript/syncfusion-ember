ej.addCulture( "it-IT", {
	name: "it-IT",
	englishName: "Italian (Italy)",
	nativeName: "italiano (Italia)",
	language: "it",
	numberFormat: {
		pattern: ['-n'],
		",": ".",
		".": ",",
		groupSizes: [3],
		"NaN": "Non un numero",
		negativeInfinity: "-Infinito",
		positiveInfinity: "+Infinito",
		percent: {
			pattern: ["-n%","n%"],
			groupSizes: [3],
			",": ".",
			".": ",",
			symbol: '%'
		},
		currency: {
			pattern: ["-$ n","$ n"],
			groupSizes: [3],
			",": ".",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			":": ".",
			firstDay: 1,
			days: {
				names: ["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],
				namesAbbr: ["dom","lun","mar","mer","gio","ven","sab"],
				namesShort: ["do","lu","ma","me","gi","ve","sa"]
			},
			months: {
				names: ["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre",""],
				namesAbbr: ["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd d MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dddd d MMMM yyyy HH:mm",
				F: "dddd d MMMM yyyy HH:mm:ss",
				M: "dd MMMM",
				Y: "MMMM yyyy"
			}
		}
	}
});