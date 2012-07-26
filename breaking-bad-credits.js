"use strict";
var Montage = require("montage").Montage;

exports.BreakingBadCredits = Montage.create(Montage, {
    name: {value: null},

    elementsJson: {
        value: '{"h":{"name":"Hydrogen","symbol":"H"},"he":{"name":"Helium","symbol":"He"},"li":{"name":"Lithium","symbol":"Li"},"be":{"name":"Beryllium","symbol":"Be"},"b":{"name":"Boron","symbol":"B"},"c":{"name":"Carbon","symbol":"C"},"n":{"name":"Nitrogen","symbol":"N"},"o":{"name":"Oxygen","symbol":"O"},"f":{"name":"Fluorine","symbol":"F"},"ne":{"name":"Neon","symbol":"Ne"},"na":{"name":"Sodium","symbol":"Na"},"mg":{"name":"Magnesium","symbol":"Mg"},"al":{"name":"Aluminum","symbol":"Al"},"si":{"name":"Silicon","symbol":"Si"},"p":{"name":"Phosphorus","symbol":"P"},"s":{"name":"Sulfur","symbol":"S"},"cl":{"name":"Chlorine","symbol":"Cl"},"ar":{"name":"Argon","symbol":"Ar"},"k":{"name":"Potassium","symbol":"K"},"ca":{"name":"Calcium","symbol":"Ca"},"sc":{"name":"Scandium","symbol":"Sc"},"ti":{"name":"Titanium","symbol":"Ti"},"v":{"name":"Vanadium","symbol":"V"},"cr":{"name":"Chromium","symbol":"Cr"},"mn":{"name":"Manganese","symbol":"Mn"},"fe":{"name":"Iron","symbol":"Fe"},"co":{"name":"Cobalt","symbol":"Co"},"ni":{"name":"Nickel","symbol":"Ni"},"cu":{"name":"Copper","symbol":"Cu"},"zn":{"name":"Zinc","symbol":"Zn"},"ga":{"name":"Gallium","symbol":"Ga"},"ge":{"name":"Germanium","symbol":"Ge"},"as":{"name":"Arsenic","symbol":"As"},"se":{"name":"Selenium","symbol":"Se"},"br":{"name":"Bromine","symbol":"Br"},"kr":{"name":"Krypton","symbol":"Kr"},"rb":{"name":"Rubidium","symbol":"Rb"},"sr":{"name":"Strontium","symbol":"Sr"},"y":{"name":"Yttrium","symbol":"Y"},"zr":{"name":"Zirconium","symbol":"Zr"},"nb":{"name":"Niobium","symbol":"Nb"},"mo":{"name":"Molybdenum","symbol":"Mo"},"tc":{"name":"Technetium","symbol":"Tc"},"ru":{"name":"Ruthenium","symbol":"Ru"},"rh":{"name":"Rhodium","symbol":"Rh"},"pd":{"name":"Palladium","symbol":"Pd"},"ag":{"name":"Silver","symbol":"Ag"},"cd":{"name":"Cadmium","symbol":"Cd"},"in":{"name":"Indium","symbol":"In"},"sn":{"name":"Tin","symbol":"Sn"},"sb":{"name":"Antimony","symbol":"Sb"},"te":{"name":"Tellurium","symbol":"Te"},"i":{"name":"Iodine","symbol":"I"},"xe":{"name":"Xenon","symbol":"Xe"},"cs":{"name":"Cesium","symbol":"Cs"},"ba":{"name":"Barium","symbol":"Ba"},"la":{"name":"Lanthanum","symbol":"La"},"ce":{"name":"Cerium","symbol":"Ce"},"pr":{"name":"Praseodymium","symbol":"Pr"},"nd":{"name":"Neodymium","symbol":"Nd"},"pm":{"name":"Promethium","symbol":"Pm"},"sm":{"name":"Samarium","symbol":"Sm"},"eu":{"name":"Europium","symbol":"Eu"},"gd":{"name":"Gadolinium","symbol":"Gd"},"tb":{"name":"Terbium","symbol":"Tb"},"dy":{"name":"Dysprosium","symbol":"Dy"},"ho":{"name":"Holmium","symbol":"Ho"},"er":{"name":"Erbium","symbol":"Er"},"tm":{"name":"Thulium","symbol":"Tm"},"yb":{"name":"Ytterbium","symbol":"Yb"},"lu":{"name":"Lutetium","symbol":"Lu"},"hf":{"name":"Hafnium","symbol":"Hf"},"ta":{"name":"Tantalum","symbol":"Ta"},"w":{"name":"Tungsten","symbol":"W"},"re":{"name":"Rhenium","symbol":"Re"},"os":{"name":"Osmium","symbol":"Os"},"ir":{"name":"Iridium","symbol":"Ir"},"pt":{"name":"Platinum","symbol":"Pt"},"au":{"name":"Gold","symbol":"Au"},"hg":{"name":"Mercury","symbol":"Hg"},"tl":{"name":"Thallium","symbol":"Tl"},"pb":{"name":"Lead","symbol":"Pb"},"bi":{"name":"Bismuth","symbol":"Bi"},"po":{"name":"Polonium","symbol":"Po"},"at":{"name":"Astatine","symbol":"At"},"rn":{"name":"Radon","symbol":"Rn"},"fr":{"name":"Francium","symbol":"Fr"},"ra":{"name":"Radium","symbol":"Ra"},"ac":{"name":"Actinium","symbol":"Ac"},"th":{"name":"Thorium","symbol":"Th"},"pa":{"name":"Protactinium","symbol":"Pa"},"u":{"name":"Uranium","symbol":"U"},"np":{"name":"Neptunium","symbol":"Np"},"pu":{"name":"Plutonium","symbol":"Pu"},"am":{"name":"Americium","symbol":"Am"},"cm":{"name":"Curium","symbol":"Cm"},"bk":{"name":"Berkelium","symbol":"Bk"},"cf":{"name":"Californium","symbol":"Cf"},"es":{"name":"Einsteinium","symbol":"Es"},"fm":{"name":"Fermium","symbol":"Fm"},"md":{"name":"Mendelevium","symbol":"Md"},"no":{"name":"Nobelium","symbol":"No"},"lr":{"name":"Lawrencium","symbol":"Lr"},"rf":{"name":"Rutherfordium","symbol":"Rf"},"db":{"name":"Dubnium","symbol":"Db"},"sg":{"name":"Seaborgium","symbol":"Sg"},"bh":{"name":"Bohrium","symbol":"Bh"},"hs":{"name":"Hassium","symbol":"Hs"},"mt":{"name":"Meitnerium","symbol":"Mt"},"uun":{"name":"Ununnilium","symbol":"Uun"},"uuu":{"name":"Unununium","symbol":"Uuu"},"uub":{"name":"Ununbium","symbol":"Uub"},"uut":{"name":"Ununtrium","symbol":"Uut"},"uuq":{"name":"Ununquadium","symbol":"Uuq"},"uup":{"name":"Ununpentium","symbol":"Uup"},"uuh":{"name":"Ununhexium","symbol":"Uuh"},"uus":{"name":"Ununseptium","symbol":"Uus"},"uuo":{"name":"Ununoctium","symbol":"Uuo"}}'
    },

    elements: {value: null},

    generatedNames: {value: []},

    templateDidLoad: {
        value: function() {
            this.elements = JSON.parse(this.elementsJson);
        }
    },

    handleAction: {
        value: function(event) {

            this.generatedNames = this.generateNames(this.name);
        }
    },

    generateNames: {
        value: function(str) {
            var len = str.length;
            var charX, charY;
            var bbName = "";
            var currentIndex = 0;
            var nextIndex;
            var firstLetterChecked = false;
            var bbNames = [];
            var elementToLookup;

            while(currentIndex < len) {
                bbName = str.substring(0, currentIndex);
                charX = str.charAt(currentIndex);
                charY = str.charAt(currentIndex + 1);

                if(!firstLetterChecked) {
                    elementToLookup = charX;
                    firstLetterChecked = true;
                    nextIndex = currentIndex;
                } else {
                    if(!charY) break; // We reached the last letter
                    elementToLookup = charX + charY;
                    firstLetterChecked = false;
                    nextIndex = currentIndex + 1;
                }
                elementToLookup = elementToLookup.toLowerCase();

                if (this.elements.hasOwnProperty(elementToLookup)) {
                    bbName = bbName + '[' + this.elements[elementToLookup].symbol + ']' + str.substring(currentIndex + (elementToLookup.length));
                    bbNames.push(bbName);
                }

                currentIndex = nextIndex;
            }

            return bbNames;
        }
    }
});