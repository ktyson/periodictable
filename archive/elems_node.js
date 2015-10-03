var $ = jQuery = require('jquery');
require('/Users/administrator/Desktop/jquery.csv.js');
var fs = require('fs');
var readline = require('readline');




Elems = {};
Elems['B_1_1']={'sym':'H', 'name':'Hydrogen', 'der':'the Greek hydro and genes meaning water-forming', 'aw': 1.008, 'an': 1},
Elems['B_1_18']={'sym':'He', 'name':'Helium', 'der':'the Greek, helios meaning sun', 'aw': 4.002602, 'an': 2},
Elems['B_2_1']={'sym':'Li', 'name':'Lithium', 'der':'the Greek lithos meaning stone', 'aw': 6.94, 'an': 3},
Elems['B_2_2']={'sym':'Be', 'name':'Beryllium', 'der':'the Greek name for beryl, beryllo', 'aw': 9.012182, 'an': 4},
Elems['B_2_13']={'sym':'B', 'name':'Boron', 'der':'the Arabic buraq, which was the name for borax', 'aw': 10.81, 'an': 5},
Elems['B_2_14']={'sym':'C', 'name':'Carbon', 'der':'the Latin carbo, meaning charcoal', 'aw': 12.011, 'an': 6},
Elems['B_2_15']={'sym':'N', 'name':'Nitrogen', 'der':'the Greek nitron and genes meaning nitre-forming', 'aw': 14.007, 'an': 7},
Elems['B_2_16']={'sym':'O', 'name':'Oxygen', 'der':'the Greek oxy and genes meaning acid-forming', 'aw': 15.999, 'an': 8},
Elems['B_2_17']={'sym':'F', 'name':'Fluorine', 'der':'the Latin fluere, meaning to flow', 'aw': 18.9984032, 'an': 9},
Elems['B_2_18']={'sym':'Ne', 'name':'Neon', 'der':'the Greek neos, meaning new', 'aw': 20.1797, 'an': 10},


Elems['B_3_1']={'sym':'Na', 'name':'Sodium', 'der':'the English word soda (natrium in Latin)[2]', 'aw': 22.98976928, 'an': 11},
Elems['B_3_2']={'sym':'Mg', 'name':'Magnesium', 'der':'Magnesia, a district of Eastern Thessaly in Greece', 'aw': 24.3050, 'an': 12},
Elems['B_3_13']={'sym':'Al', 'name':'Aluminium', 'der':'the Latin name for alum, alumen meaning bitter salt', 'aw': 26.9815386, 'an': 13},
Elems['B_3_14']={'sym':'Si', 'name':'Silicon', 'der':'the Latin silex or silicis, meaning flint', 'aw': 28.085, 'an': 14},
Elems['B_3_15']={'sym':'P', 'name':'Phosphorus', 'der':'the Greek phosphoros, meaning bringer of light', 'aw': 30.973762, 'an': 15},
Elems['B_3_16']={'sym':'S', 'name':'Sulfur', 'der':'Either from the Sanskrit sulvere, or the Latin sulfurium, both names for sulfur[2]', 'aw': 32.06, 'an': 16},
Elems['B_3_17']={'sym':'Cl', 'name':'Chlorine', 'der':'the Greek chloros, meaning greenish yellow', 'aw': 35.45, 'an': 17},
Elems['B_3_18']={'sym':'Ar', 'name':'Argon', 'der':'the Greek, argos, meaning idle', 'aw': 39.948, 'an': 18},

Elems['B_4_1']={'sym':'K', 'name':'Potassium', 'der':'the English word potash (kalium in Latin)[2]', 'aw': 39.0983, 'an': 19},
Elems['B_4_2']={'sym':'Ca', 'name':'Calcium', 'der':'the Latin calx meaning lime', 'aw': 40.078, 'an': 20},
Elems['B_4_3']={'sym':'Sc', 'name':'Scandium', 'der':'Scandinavia (with the Latin name Scandia)', 'aw': 44.955912, 'an': 21},
Elems['B_4_4']={'sym':'Ti', 'name':'Titanium', 'der':'Titans, the sons of the Earth goddess of Greek mythology', 'aw': 47.867, 'an': 22},
Elems['B_4_5']={'sym':'V', 'name':'Vanadium', 'der':'Vanadis, an old Norse name for the Scandinavian goddess Freyja', 'aw': 50.9415, 'an': 23},
Elems['B_4_6']={'sym':'Cr', 'name':'Chromium', 'der':'the Greek chroma, meaning colour', 'aw': 51.9961, 'an': 24},
Elems['B_4_7']={'sym':'Mn', 'name':'Manganese', 'der':'Either the Latin magnes, meaning magnet or from the black magnesium oxide, magnesia nigra', 'aw': 54.938045, 'an': 25},
Elems['B_4_8']={'sym':'Fe', 'name':'Iron', 'der':'the Anglo-Saxon name iren (ferrum in Latin)', 'aw': 55.845, 'an': 26},
Elems['B_4_9']={'sym':'Co', 'name':'Cobalt', 'der':'the German word kobald, meaning goblin', 'aw': 58.933195, 'an': 27},
Elems['B_4_10']={'sym':'Ni', 'name':'Nickel', 'der':'the shortened of the German kupfernickel meaning either devils copper or St. Nicholass copper', 'aw': 58.6934, 'an': 28},
Elems['B_4_11']={'sym':'Cu', 'name':'Copper', 'der':'the Old English name coper in turn derived from the Latin Cyprium aes, meaning a metal from Cyprus', 'aw': 63.546, 'an': 29},
Elems['B_4_12']={'sym':'Zn', 'name':'Zinc', 'der':'the German, zinc, which may in turn be derived from the Persian word sing, meaning stone', 'aw': 65.38, 'an': 30},
Elems['B_4_13']={'sym':'Ga', 'name':'Gallium', 'der':'France (with the Latin name Gallia)', 'aw': 69.723, 'an': 31},
Elems['B_4_14']={'sym':'Ge', 'name':'Germanium', 'der':'Germany (with the Latin name Germania)', 'aw': 72.63, 'an': 32},
Elems['B_4_15']={'sym':'As', 'name':'Arsenic', 'der':'the Greek name arsenikon for the yellow pigment orpiment', 'aw': 74.92160, 'an': 33},
Elems['B_4_16']={'sym':'Se', 'name':'Selenium', 'der':'Moon (with the Greek name selene)', 'aw': 78.96, 'an': 34},
Elems['B_4_17']={'sym':'Br', 'name':'Bromine', 'der':'the Greek bromos meaning stench', 'aw': 79.904, 'an': 35},
Elems['B_4_18']={'sym':'Kr', 'name':'Krypton', 'der':'the Greek kryptos, meaning hidden', 'aw': 83.798, 'an': 36},
Elems['B_5_1']={'sym':'Rb', 'name':'Rubidium', 'der':'the Latin rubidius, meaning deepest red', 'aw': 85.4678, 'an': 37},
Elems['B_5_2']={'sym':'Sr', 'name':'Strontium', 'der':'Strontian, a small town in Scotland', 'aw': 87.62, 'an': 38},
Elems['B_5_3']={'sym':'Y', 'name':'Yttrium', 'der':'Ytterby, Sweden', 'aw': 88.90585, 'an': 39},
Elems['B_5_4']={'sym':'Zr', 'name':'Zirconium', 'der':'the Persian zargun, meaning gold coloured', 'aw': 91.224, 'an': 40},
Elems['B_5_5']={'sym':'Nb', 'name':'Niobium', 'der':'Niobe, daughter of king Tantalus from Greek mythology', 'aw': 92.90638, 'an': 41},
Elems['B_5_6']={'sym':'Mo', 'name':'Molybdenum', 'der':'the Greek molybdos meaning lead', 'aw': 95.96, 'an': 42},
Elems['B_5_7']={'sym':'Tc', 'name':'Technetium', 'der':'the Greek tekhnetos meaning artificial', 'an': 43},
Elems['B_5_8']={'sym':'Ru', 'name':'Ruthenium', 'der':'Russia (with the Latin name Ruthenia)', 'aw': 101.07, 'an': 44},
Elems['B_5_9']={'sym':'Rh', 'name':'Rhodium', 'der':'the Greek rhodon, meaning rose coloured', 'aw': 102.90550, 'an': 45},
Elems['B_5_10']={'sym':'Pd', 'name':'Palladium', 'der':'From the asteroid Pallas which had been recently discovered and named at the time. The asteroid was considered a planet when it was discovered', 'aw': 106.42, 'an': 46},
Elems['B_5_11']={'sym':'Ag', 'name':'Silver', 'der':'the Anglo-Saxon name siolfur (argentum in Latin)[2]', 'aw': 107.8682, 'an': 47},
Elems['B_5_12']={'sym':'Cd', 'name':'Cadmium', 'der':'the Latin name for the mineral calmine, cadmia', 'aw': 112.411, 'an': 48},
Elems['B_5_13']={'sym':'In', 'name':'Indium', 'der':'the Latin indicium, meaning violet or indigo', 'aw': 114.818, 'an': 49},
Elems['B_5_14']={'sym':'Sn', 'name':'Tin', 'der':'the Anglo-Saxon word tin (stannum in Latin, meaning hard)', 'aw': 118.710, 'an': 50},
Elems['B_5_15']={'sym':'Sb', 'name':'Antimony', 'der':'the Greek anti – monos, meaning not alone (stibium in Latin)', 'aw': 121.760, 'an': 51},
Elems['B_5_16']={'sym':'Te', 'name':'Tellurium', 'der':'Earth, the third planet on solar system (with the Latin word tellus)', 'aw': 127.60, 'an': 52},
Elems['B_5_17']={'sym':'I', 'name':'Iodine', 'der':'the Greek iodes meaning violet', 'aw': 126.90447, 'an': 53},
Elems['B_5_18']={'sym':'Xe', 'name':'Xenon', 'der':'the Greek xenos meaning stranger', 'aw': 131.293, 'an': 54},

Elems['B_6_1']={'sym':'Cs', 'name':'Caesium', 'der':'the Latin caesius, meaning sky blue', 'aw': 132.9054519, 'an': 55},
Elems['B_6_2']={'sym':'Ba', 'name':'Barium', 'der':'the Greek barys, meaning heavy', 'aw': 137.327, 'an': 56},
Elems['S_6_1']={'sym':'La', 'name':'Lanthanum', 'der':'the Greek lanthanein, meaning to lie hidden', 'aw': 138.90547, 'an': 57},
Elems['S_6_2']={'sym':'Ce', 'name':'Cerium', 'der':'Ceres, the Roman God of agriculture', 'aw': 140.116, 'an': 58},
Elems['S_6_3']={'sym':'Pr', 'name':'Praseodymium', 'der':'the Greek prasios didymos meaning green twin', 'aw': 140.90765, 'an': 59},
Elems['S_6_4']={'sym':'Nd', 'name':'Neodymium', 'der':'the Greek neos didymos meaning new twin', 'aw': 144.242, 'an': 60},
Elems['S_6_5']={'sym':'Eu', 'name':'Europium', 'der':'Europe', 'aw': 0, 'an': 61},
Elems['S_6_6']={'sym':'Sm', 'name':'Samarium', 'der':'Samarskite, the name of the mineral from which it was first isolated', 'aw': 150.36, 'an': 62},
Elems['S_6_7']={'sym':'Eu', 'name':'Europium', 'der':'Europe', 'aw': 151.964, 'an': 63},
Elems['S_6_8']={'sym':'Gd', 'name':'Gadolinium', 'der':'Johan Gadolin, chemist, physicist and mineralogist', 'aw': 157.25, 'an': 64},
Elems['S_6_9']={'sym':'Tb', 'name':'Terbium', 'der':'Ytterby, Sweden', 'aw': 158.92535, 'an': 65},
Elems['S_6_10']={'sym':'Dy', 'name':'Dysprosium', 'der':'the Greek dysprositos, meaning hard to get', 'aw': 162.500, 'an': 66},
Elems['S_6_11']={'sym':'Ho', 'name':'Holmium', 'der':'Stockholm, Sweden (with the Latin name Holmia)', 'aw': 164.93032, 'an': 67},
Elems['S_6_12']={'sym':'Er', 'name':'Erbium', 'der':'Ytterby, Sweden', 'aw': 167.259, 'an': 68},
Elems['S_6_13']={'sym':'Tm', 'name':'Thulium', 'der':'Thule, the ancient name for Scandinavia', 'aw': 168.93421, 'an': 69},
Elems['S_6_14']={'sym':'Yb', 'name':'Ytterbium', 'der':'Ytterby, Sweden', 'aw': 173.054, 'an': 70},
Elems['S_6_15']={'sym':'Lu', 'name':'Lutetium', 'der':'Paris, France (with the Roman name Lutetia)', 'aw': 174.9668, 'an': 71},
Elems['B_6_4']={'sym':'Hf', 'name':'Hafnium', 'der':'Copenhagen, Denmark (with the Latin name Hafnia)', 'aw': 178.49, 'an': 72},
Elems['B_6_5']={'sym':'Ta', 'name':'Tantalum', 'der':'King Tantalus, father of Niobe from Greek mythology', 'aw': 180.94788, 'an': 73},
Elems['B_6_6']={'sym':'W', 'name':'Tungsten', 'der':'the Swedish tung sten meaning heavy stone (W is wolfram, the old name of the tungsten mineral wolframite)[2]', 'aw': 183.84, 'an': 74},
Elems['B_6_7']={'sym':'Re', 'name':'Rhenium', 'der':'Rhine, a river that flows from Grisons in the eastern Swiss Alps to the North Sea coast in the Netherlands (with the Latin name Rhenia)', 'aw': 186.207, 'an': 75},
Elems['B_6_8']={'sym':'Os', 'name':'Osmium', 'der':'the Greek osme, meaning smell', 'aw': 190.23, 'an': 76},
Elems['B_6_9']={'sym':'Ir', 'name':'Iridium', 'der':'Iris, the Greek goddess of the rainbow', 'aw': 192.217, 'an': 77},
Elems['B_6_10']={'sym':'Pt', 'name':'Platinum', 'der':'the Spanish platina, meaning little silver', 'aw': 195.084, 'an': 78},
Elems['B_6_11']={'sym':'Au', 'name':'Gold', 'der':'the Anglo-Saxon word gold (aurum in Latin, meaning glow of sunrise)[2]', 'aw': 196.966569, 'an': 79},
Elems['B_6_12']={'sym':'Hg', 'name':'Mercury', 'der':'Mercury, the first planet in the Solar System (Hg from former name hydrargyrum, from Greek hydr- water and argyros silver)', 'aw': 200.59, 'an': 80},
Elems['B_6_13']={'sym':'Tl', 'name':'Thallium', 'der':'the Greek thallos, meaning a green twig', 'aw': 204.38, 'an': 81},
Elems['B_6_14']={'sym':'Pb', 'name':'Lead', 'der':'the Anglo-Saxon lead (plumbum in Latin)[2]', 'aw': 207.2, 'an': 82},
Elems['B_6_15']={'sym':'Bi', 'name':'Bismuth', 'der':'the German Bisemutum a corruption of Weisse Masse meaning white mass', 'aw': 208.98040, 'an': 83},
Elems['B_6_16']={'sym':'Po', 'name':'Polonium', 'der':'Poland, the native country of Marie Curie, who first isolated the element', 'aw': 0, 'an': 84},
Elems['B_6_17']={'sym':'At', 'name':'Astatine', 'der':'the Greek astatos, meaning unstable', 'aw': 0, 'an': 85},
Elems['B_6_18']={'sym':'Rn', 'name':'Radon', 'der':'From radium, as it was first detected as an emission from radium during radioactive decay', 'aw': 0, 'an': 86},

Elems['B_7_1']={'sym':'Fr', 'name':'Francium', 'der':'France', 'aw': 0, 'an': 87},
Elems['B_7_2']={'sym':'Ra', 'name':'Radium', 'der':'the Latin radius, meaning ray', 'aw': 0, 'an': 88},
Elems['S_7_1']={'sym':'Ac', 'name':'Actinium', 'der':'the Greek actinos, meaning a ray', 'aw': 0, 'an': 89},
Elems['S_7_2']={'sym':'Th', 'name':'Thorium', 'der':'Thor, the Scandinavian god of thunder', 'aw': 232.03806, 'an': 90},
Elems['S_7_3']={'sym':'Pa', 'name':'Protactinium', 'der':'the Greek protos, meaning first, as a prefix to the element actinium, which is produced through the radioactive decay of protactinium', 'aw': 231.03588, 'an': 91},
Elems['S_7_4']={'sym':'U', 'name':'Uranium', 'der':'Uranus, the seventh planet in the Solar System', 'aw': 238.02891, 'an': 92},
Elems['S_7_5']={'sym':'Np', 'name':'Neptunium', 'der':'Neptune, the eighth planet in the Solar System', 'aw': 0, 'an': 93},
Elems['S_7_6']={'sym':'Pu', 'name':'Plutonium', 'der':'Pluto, a dwarf planet in the Solar System', 'aw': 0, 'an': 94},
Elems['S_7_7']={'sym':'Am', 'name':'Americium', 'der':'Americas, the continent where the element was first synthesized', 'aw': 0, 'an': 95},
Elems['S_7_8']={'sym':'Cm', 'name':'Curium', 'der':'Pierre Curie, a physicist, and Marie Curie, a physicist and chemist', 'aw': 0, 'an': 96},
Elems['S_7_9']={'sym':'Bk', 'name':'Berkelium', 'der':'Berkeley, California, USA, where the element was first synthesized', 'aw': 0, 'an': 97},
Elems['S_7_10']={'sym':'Cf', 'name':'Californium', 'der':'State of California, USA, where the element was first synthesized', 'aw': 0, 'an': 98},
Elems['S_7_11']={'sym':'Es', 'name':'Einsteinium', 'der':'Albert Einstein, physicist', 'aw': 0, 'an': 99},
Elems['S_7_12']={'sym':'Fm', 'name':'Fermium', 'der':'Enrico Fermi, physicist', 'aw': 0, 'an': 100},
Elems['S_7_13']={'sym':'Md', 'name':'Mendelevium', 'der':'Dmitri Mendeleyev, chemist and inventor', 'aw': 0, 'an': 101},
Elems['S_7_14']={'sym':'No', 'name':'Nobelium', 'der':'Alfred Nobel, chemist, engineer, innovator, and armaments manufacturer', 'aw': 0, 'an': 102},
Elems['S_7_15']={'sym':'Lr', 'name':'Lawrencium', 'der':'Ernest O. Lawrence, physicist', 'aw': 0, 'an': 103},
Elems['B_7_4']={'sym':'Rf', 'name':'Rutherfordium', 'der':'Ernest Rutherford, chemist and physicist', 'aw': 0, 'an': 104},
Elems['B_7_5']={'sym':'Db', 'name':'Dubnium', 'der':'Dubna, Russia', 'aw': 0, 'an': 105},
Elems['B_7_6']={'sym':'Sg', 'name':'Seaborgium', 'der':'Glenn T. Seaborg, scientist', 'aw': 0, 'an': 106},
Elems['B_7_7']={'sym':'Bh', 'name':'Bohrium', 'der':'Niels Bohr, physicist', 'aw': 0, 'an': 107},
Elems['B_7_8']={'sym':'Hs', 'name':'Hassium', 'der':'Hesse, Germany, where the element was first synthesized', 'aw': 0, 'an': 108},
Elems['B_7_9']={'sym':'Mt', 'name':'Meitnerium', 'der':'Lise Meitner, physicist', 'aw': 0, 'an': 109},
Elems['B_7_10']={'sym':'Ds', 'name':'Darmstadtium', 'der':'Darmstadt, Germany, where the element was first synthesized', 'aw': 0, 'an': 110},
Elems['B_7_11']={'sym':'Rg', 'name':'Roentgenium', 'der':'Wilhelm Conrad Röntgen, physicist', 'aw': 0, 'an': 111},
Elems['B_7_12']={'sym':'Cn', 'name':'Copernicium', 'der':'Nicolaus Copernicus, astronomer', 'aw': 0, 'an': 112},
Elems['B_7_13']={'sym':'Uut', 'name':'Ununtrium', 'der':'IUPAC systematic element name', 'aw': 0, 'an': 113},
Elems['B_7_14']={'sym':'Fl', 'name':'Flerovium', 'der':'Georgy Flyorov, physicist', 'aw': 0, 'an': 114},
Elems['B_7_15']={'sym':'Uup', 'name':'Ununpentium', 'der':'IUPAC systematic element name', 'aw': 0, 'an': 115},
Elems['B_7_16']={'sym':'Lv', 'name':'Livermorium', 'der':'Lawrence Livermore National Laboratory, within the city of Livermore, California, USA, which collaborated with JINR on the discovery of the element', 'aw': 0, 'an': 116},
Elems['B_7_17']={'sym':'Uus', 'name':'Ununseptium', 'der':'IUPAC systematic element name', 'aw': 0, 'an': 117},
Elems['B_7_18']={'sym':'Uuo', 'name':'Ununoctium', 'der':'IUPAC systematic element name', 'aw': 0, 'an': 118}


createJSONfromCSV('/Users/administrator/Desktop/elemsNew.csv');

function createJSONfromCSV(filename) {
	fs.readFile(filename, 'UTF-8', function(err, csv) {
	  $.csv.toArrays(csv, {}, function(err, data) {
		for(var i=0, len=data.length; i<len; i++) {
		
			//console.log(data[i]);
			var ln = data[i];
			var obj = {};
			obj.sym = ln[1];
			obj.name = ln[2];
			obj.aw = ln[3];
			obj.an = ln[4];
			obj.der = ln[5];
			obj.typ = ln[6];
			obj.blk = ln[7];
	
			var str = JSON.stringify(obj);
	
			console.log('Elems["'+ln[0]+'"] = ' + str + ',');	      
	  
	  
		}
	  });
	});
}


function createCSVfromJSON(){

$.each(Elems, function(idx, elem){
	
	var c = [];
	c.push(idx);
	c.push(elem.sym);
	c.push(elem.name);
	c.push(elem.aw);
	c.push(elem.an);
	c.push('"' + elem.der + '"');
	
	console.log(c.join(','));

});

}
