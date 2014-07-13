var app = angular.module("worldModule",[]);

app.controller("worldController",function($scope, $http) {
	$scope.countries = {"$id":"1","$values":[{"$id":"2","Name":"ALGERIA","Capital":"Algiers","Continent":"Africa"},{"$id":"3","Name":"ANGOLA","Capital":"Luanda","Continent":"Africa"},{"$id":"4","Name":"BENIN","Capital":"Porto-Novo","Continent":"Africa"},{"$id":"5","Name":"BURKINA FASO","Capital":"Ouagadougou","Continent":"Africa"},{"$id":"6","Name":"BOTSWANA","Capital":"Gaborone","Continent":"Africa"},{"$id":"7","Name":"BOSNIA AND HERZEGOWINA","Capital":"Sarajevo","Continent":"Europe"},{"$id":"8","Name":"BULGARIA","Capital":"Sofia","Continent":"Europe"},{"$id":"9","Name":"BELGIUM","Capital":"Brussels","Continent":"Europe"},{"$id":"10","Name":"DENMARK","Capital":"Copenhagen","Continent":"Europe"},{"$id":"11","Name":"SWEDEN","Capital":"Stockholm","Continent":"Europe"},{"$id":"12","Name":"ANDORRA","Capital":"Andorra la Vella","Continent":"Europe"},{"$id":"13","Name":"ALBANIA","Capital":"Tirana","Continent":"Europe"},{"$id":"14","Name":"AUSTRIA","Capital":"Vienna","Continent":"Europe"},{"$id":"15","Name":"BELARUS","Capital":"Minsk","Continent":"Europe"},{"$id":"16","Name":"GREECE","Capital":"Athens","Continent":"Europe"},{"$id":"17","Name":"AZERBAIJAN","Capital":"Baku","Continent":"Asia"},{"$id":"18","Name":"BAHRAIN","Capital":"Manama","Continent":"Asia"},{"$id":"19","Name":"BANGLADESH","Capital":"Dhaka","Continent":"Asia"},{"$id":"20","Name":"ARMENIA","Capital":"Yerevan","Continent":"Asia"},{"$id":"21","Name":"AFGHANISTAN","Capital":"Kabul","Continent":"Asia"},{"$id":"22","Name":"BHUTAN","Capital":"Thimphu","Continent":"Asia"},{"$id":"23","Name":"BRUNEI DARUSSALAM","Capital":"Bandar Seri Begawan","Continent":"Asia"},{"$id":"24","Name":"BERMUDA","Capital":"Hamilton","Continent":"North America"},{"$id":"25","Name":"BARBADOS","Capital":"Bridgetown","Continent":"North America"},{"$id":"26","Name":"BAHAMAS","Capital":"Nassau","Continent":"North America"},{"$id":"27","Name":"ARUBA","Capital":"Oranjestad","Continent":"North America"},{"$id":"28","Name":"ARGENTINA","Capital":"Buenos Aires","Continent":"South America"},{"$id":"29","Name":"BOLIVIA","Capital":"Sucre","Continent":"South America"},{"$id":"30","Name":"BRAZIL","Capital":"Brasília","Continent":"South America"},{"$id":"31","Name":"BELIZE","Capital":"Belmopan","Continent":"South America"},{"$id":"32","Name":"AUSTRALIA","Capital":"Canberra","Continent":"Australia"},{"$id":"33","Name":"ANTARCTICA","Capital":null,"Continent":"Antartica"},{"$id":"34","Name":"AMERICAN SAMOA","Capital":"Pago Pago","Continent":"Ocenania"},{"$id":"35","Name":"ANTIGUA AND BARBUDA","Capital":"St. John's","Continent":"Ocenania"},{"$id":"36","Name":"CAMBODIA","Capital":"Phnom Penh","Continent":"Ocenania"},{"$id":"37","Name":"CAMEROON","Capital":"Yaoundé","Continent":"Ocenania"},{"$id":"38","Name":"CANADA","Capital":"Ottawa","Continent":"Ocenania"},{"$id":"39","Name":"CAPE VERDE","Capital":"Praia","Continent":"Ocenania"},{"$id":"40","Name":"CAYMAN ISLANDS","Capital":"George Town, Cayman Islands","Continent":"Ocenania"},{"$id":"41","Name":"CENTRAL AFRICAN REPUBLIC","Capital":"Bangui","Continent":"Ocenania"},{"$id":"42","Name":"SRI LANKA","Capital":"Sri Jayawardenepura Kotte","Continent":"Ocenania"},{"$id":"43","Name":"CHAD","Capital":"N'Djamena","Continent":"Ocenania"},{"$id":"44","Name":"CHILE","Capital":"Santiago","Continent":"Ocenania"},{"$id":"45","Name":"CHINA","Capital":"Beijing","Continent":"Ocenania"},{"$id":"46","Name":"TAIWAN","Capital":"Taipei","Continent":"Ocenania"},{"$id":"47","Name":"CHRISTMAS ISLAND","Capital":"Flying Fish Cove","Continent":"Ocenania"},{"$id":"48","Name":"COCOS (KEELING) ISLANDS","Capital":"West Island, Cocos (Keeling) Islands","Continent":"Ocenania"},{"$id":"49","Name":"COLOMBIA","Capital":"Bogotá","Continent":"Ocenania"},{"$id":"50","Name":"COMOROS","Capital":"Moroni","Continent":"Ocenania"},{"$id":"51","Name":"MAYOTTE","Capital":"Mamoudzou","Continent":"Ocenania"},{"$id":"52","Name":"CONGO, Republic of","Capital":"Brazzaville","Continent":"Ocenania"},{"$id":"53","Name":"CONGO, Democratic Republic of (was Zaire)","Capital":"Kinshasa","Continent":"Ocenania"},{"$id":"54","Name":"COOK ISLANDS","Capital":"Avarua","Continent":"Ocenania"},{"$id":"55","Name":"COSTA RICA","Capital":"San José","Continent":"Ocenania"},{"$id":"56","Name":"CROATIA (local name: Hrvatska)","Capital":"Zagreb","Continent":"Ocenania"},{"$id":"57","Name":"CUBA","Capital":"Havana","Continent":"Ocenania"},{"$id":"58","Name":"CYPRUS","Capital":"Nicosia","Continent":"Ocenania"},{"$id":"59","Name":"CZECH REPUBLIC","Capital":"Prague","Continent":"Ocenania"},{"$id":"60","Name":"NEW CALEDONIA","Capital":"Nouméa","Continent":"Ocenania"},{"$id":"61","Name":"VANUATU","Capital":"Port Vila","Continent":"Ocenania"},{"$id":"62","Name":"NEW ZEALAND","Capital":"Wellington","Continent":"Ocenania"},{"$id":"63","Name":"NICARAGUA","Capital":"Managua","Continent":"Ocenania"},{"$id":"64","Name":"NIGER","Capital":"Niamey","Continent":"Ocenania"},{"$id":"65","Name":"NIGERIA","Capital":"Abuja","Continent":"Ocenania"},{"$id":"66","Name":"NIUE","Capital":"Alofi","Continent":"Ocenania"},{"$id":"67","Name":"NORFOLK ISLAND","Capital":"Kingston","Continent":"Ocenania"},{"$id":"68","Name":"NORWAY","Capital":"Oslo","Continent":"Ocenania"},{"$id":"69","Name":"NORTHERN MARIANA ISLANDS","Capital":"Saipan","Continent":"Ocenania"},{"$id":"70","Name":"UNITED STATES MINOR OUTLYING ISLANDS","Capital":null,"Continent":"Ocenania"},{"$id":"71","Name":"MICRONESIA, FEDERATED STATES OF","Capital":"Palikir","Continent":"Ocenania"},{"$id":"72","Name":"MARSHALL ISLANDS","Capital":"Majuro","Continent":"Ocenania"},{"$id":"73","Name":"PALAU","Capital":"Melekeok","Continent":"Ocenania"},{"$id":"74","Name":"PAKISTAN","Capital":"Islamabad","Continent":"Ocenania"},{"$id":"75","Name":"PANAMA","Capital":"Panama City","Continent":"Ocenania"},{"$id":"76","Name":"PAPUA NEW GUINEA","Capital":"Port Moresby","Continent":"Ocenania"},{"$id":"77","Name":"PARAGUAY","Capital":"Asunción","Continent":"Ocenania"},{"$id":"78","Name":"PERU","Capital":"Lima","Continent":"Ocenania"},{"$id":"79","Name":"PHILIPPINES","Capital":"Manila","Continent":"Ocenania"},{"$id":"80","Name":"PITCAIRN","Capital":"Adamstown","Continent":"Ocenania"},{"$id":"81","Name":"POLAND","Capital":"Warsaw","Continent":"Ocenania"},{"$id":"82","Name":"PORTUGAL","Capital":"Lisbon","Continent":"Ocenania"},{"$id":"83","Name":"GUINEA-BISSAU","Capital":null,"Continent":"Ocenania"},{"$id":"84","Name":"TIMOR-LESTE","Capital":"Dili","Continent":"Ocenania"},{"$id":"85","Name":"PUERTO RICO","Capital":"San Juan","Continent":"Ocenania"},{"$id":"86","Name":"QATAR","Capital":"Doha","Continent":"Ocenania"},{"$id":"87","Name":"REUNION","Capital":"Saint-Denis","Continent":"Ocenania"},{"$id":"88","Name":"ROMANIA","Capital":"Bucharest","Continent":"Ocenania"},{"$id":"89","Name":"RUSSIAN FEDERATION","Capital":"Moscow","Continent":"Ocenania"},{"$id":"90","Name":"RWANDA","Capital":"Kigali","Continent":"Ocenania"},{"$id":"91","Name":"SAINT HELENA","Capital":"Jamestown","Continent":"Ocenania"},{"$id":"92","Name":"SAINT KITTS AND NEVIS","Capital":"Basseterre","Continent":"Ocenania"},{"$id":"93","Name":"ANGUILLA","Capital":"The Valley","Continent":"Ocenania"},{"$id":"94","Name":"SAINT LUCIA","Capital":"Castries","Continent":"Ocenania"},{"$id":"95","Name":"SAINT PIERRE AND MIQUELON","Capital":"Saint-Pierre","Continent":"Ocenania"},{"$id":"96","Name":"SAINT VINCENT AND THE GRENADINES","Capital":"Kingstown","Continent":"Ocenania"},{"$id":"97","Name":"SAN MARINO","Capital":null,"Continent":"Ocenania"},{"$id":"98","Name":"SAO TOME AND PRINCIPE","Capital":"São Tomé","Continent":"Ocenania"},{"$id":"99","Name":"SAUDI ARABIA","Capital":"Riyadh","Continent":"Ocenania"},{"$id":"100","Name":"SENEGAL","Capital":"Dakar","Continent":"Ocenania"},{"$id":"101","Name":"SEYCHELLES","Capital":"Victoria","Continent":"Ocenania"},{"$id":"102","Name":"SIERRA LEONE","Capital":"Freetown","Continent":"Ocenania"},{"$id":"103","Name":"SINGAPORE","Capital":null,"Continent":"Ocenania"},{"$id":"104","Name":"SLOVAKIA","Capital":"Bratislava","Continent":"Ocenania"},{"$id":"105","Name":"VIET NAM","Capital":"Hanoi","Continent":"Ocenania"},{"$id":"106","Name":"SLOVENIA","Capital":"Ljubljana","Continent":"Ocenania"},{"$id":"107","Name":"SOMALIA","Capital":"Mogadishu","Continent":"Ocenania"},{"$id":"108","Name":"SOUTH AFRICA","Capital":"Pretoria","Continent":"Ocenania"},{"$id":"109","Name":"ZIMBABWE","Capital":"Harare","Continent":"Ocenania"},{"$id":"110","Name":"SPAIN","Capital":"Madrid","Continent":"Ocenania"},{"$id":"111","Name":"WESTERN SAHARA","Capital":"El Aaiún","Continent":"Ocenania"},{"$id":"112","Name":"SUDAN","Capital":"Khartoum","Continent":"Ocenania"},{"$id":"113","Name":"SURINAME","Capital":"Paramaribo","Continent":"Ocenania"},{"$id":"114","Name":"SVALBARD AND JAN MAYEN ISLANDS","Capital":null,"Continent":"Ocenania"},{"$id":"115","Name":"SWAZILAND","Capital":"Lobamba","Continent":"Ocenania"},{"$id":"116","Name":"GREENLAND","Capital":"Nuuk","Continent":"Ocenania"},{"$id":"117","Name":"GRENADA","Capital":"St. George's","Continent":"Ocenania"},{"$id":"118","Name":"GUADELOUPE","Capital":"Basse-Terre","Continent":"Ocenania"},{"$id":"119","Name":"GUAM","Capital":"Hagåtña","Continent":"Ocenania"},{"$id":"120","Name":"GUATEMALA","Capital":"Guatemala City","Continent":"Ocenania"},{"$id":"121","Name":"GUINEA","Capital":"Conakry","Continent":"Ocenania"},{"$id":"122","Name":"GUYANA","Capital":"Georgetown","Continent":"Ocenania"},{"$id":"123","Name":"HAITI","Capital":"Port-au-Prince","Continent":"Ocenania"},{"$id":"124","Name":"HEARD AND MC DONALD ISLANDS","Capital":null,"Continent":"Ocenania"},{"$id":"125","Name":"VATICAN CITY STATE (HOLY SEE)","Capital":null,"Continent":"Ocenania"},{"$id":"126","Name":"HONDURAS","Capital":"Tegucigalpa","Continent":"Ocenania"},{"$id":"127","Name":"HONG KONG","Capital":null,"Continent":"Ocenania"},{"$id":"128","Name":"HUNGARY","Capital":"Budapest","Continent":"Ocenania"},{"$id":"129","Name":"ICELAND","Capital":"Reykjavik","Continent":"Ocenania"},{"$id":"130","Name":"INDIA","Capital":"New Delhi","Continent":"Ocenania"},{"$id":"131","Name":"INDONESIA","Capital":"Jakarta","Continent":"Ocenania"},{"$id":"132","Name":"IRAN (ISLAMIC REPUBLIC OF)","Capital":"Tehran","Continent":"Ocenania"},{"$id":"133","Name":"IRAQ","Capital":"Baghdad","Continent":"Ocenania"},{"$id":"134","Name":"IRELAND","Capital":"Dublin","Continent":"Ocenania"},{"$id":"135","Name":"ISRAEL","Capital":"Jerusalem","Continent":"Ocenania"},{"$id":"136","Name":"ITALY","Capital":"Rome","Continent":"Ocenania"},{"$id":"137","Name":"COTE D'IVOIRE","Capital":"Yamoussoukro","Continent":"Ocenania"},{"$id":"138","Name":"JAMAICA","Capital":"Kingston","Continent":"Ocenania"},{"$id":"139","Name":"JAPAN","Capital":"Tokyo","Continent":"Ocenania"},{"$id":"140","Name":"KAZAKHSTAN","Capital":"Astana","Continent":"Ocenania"},{"$id":"141","Name":"JORDAN","Capital":"Amman","Continent":"Ocenania"},{"$id":"142","Name":"KENYA","Capital":"Nairobi","Continent":"Ocenania"},{"$id":"143","Name":"KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF","Capital":"Pyongyang","Continent":"Ocenania"},{"$id":"144","Name":"KOREA, REPUBLIC OF","Capital":"Seoul","Continent":"Ocenania"},{"$id":"145","Name":"KUWAIT","Capital":"Kuwait City","Continent":"Ocenania"},{"$id":"146","Name":"KYRGYZSTAN","Capital":"Bishkek","Continent":"Ocenania"},{"$id":"147","Name":"LAO PEOPLE'S DEMOCRATIC REPUBLIC","Capital":"Vientiane","Continent":"Ocenania"},{"$id":"148","Name":"LEBANON","Capital":"Beirut","Continent":"Ocenania"},{"$id":"149","Name":"LESOTHO","Capital":"Maseru","Continent":"Ocenania"},{"$id":"150","Name":"LATVIA","Capital":"Riga","Continent":"Ocenania"},{"$id":"151","Name":"LIBERIA","Capital":"Monrovia","Continent":"Ocenania"},{"$id":"152","Name":"LIBYAN ARAB JAMAHIRIYA","Capital":"Tripoli","Continent":"Ocenania"},{"$id":"153","Name":"LIECHTENSTEIN","Capital":"Vaduz","Continent":"Ocenania"},{"$id":"154","Name":"LITHUANIA","Capital":"Vilnius","Continent":"Ocenania"},{"$id":"155","Name":"LUXEMBOURG","Capital":null,"Continent":"Ocenania"},{"$id":"156","Name":"MACAU","Capital":null,"Continent":"Ocenania"},{"$id":"157","Name":"MADAGASCAR","Capital":"Antananarivo","Continent":"Ocenania"},{"$id":"158","Name":"MALAWI","Capital":"Lilongwe","Continent":"Ocenania"},{"$id":"159","Name":"MALAYSIA","Capital":"Kuala Lumpur","Continent":"Ocenania"},{"$id":"160","Name":"MALDIVES","Capital":"Malé","Continent":"Ocenania"},{"$id":"161","Name":"MALI","Capital":"Bamako","Continent":"Ocenania"},{"$id":"162","Name":"MALTA","Capital":"Valletta","Continent":"Ocenania"},{"$id":"163","Name":"MARTINIQUE","Capital":"Fort-de-France","Continent":"Ocenania"},{"$id":"164","Name":"MAURITANIA","Capital":"Nouakchott","Continent":"Ocenania"},{"$id":"165","Name":"MAURITIUS","Capital":"Port Louis","Continent":"Ocenania"},{"$id":"166","Name":"MEXICO","Capital":"Mexico City","Continent":"Ocenania"},{"$id":"167","Name":"MONACO","Capital":null,"Continent":"Ocenania"},{"$id":"168","Name":"MONGOLIA","Capital":"Ulan Bator","Continent":"Ocenania"},{"$id":"169","Name":"MOLDOVA, REPUBLIC OF","Capital":"Chi&#537;in&#259;u","Continent":"Ocenania"},{"$id":"170","Name":"MONTSERRAT","Capital":"Brades, Montserrat","Continent":"Ocenania"},{"$id":"171","Name":"MOROCCO","Capital":"Rabat","Continent":"Ocenania"},{"$id":"172","Name":"MOZAMBIQUE","Capital":"Maputo","Continent":"Ocenania"},{"$id":"173","Name":"OMAN","Capital":"Muscat","Continent":"Ocenania"},{"$id":"174","Name":"NAMIBIA","Capital":"Windhoek","Continent":"Ocenania"},{"$id":"175","Name":"NAURU","Capital":"Yaren District","Continent":"Ocenania"},{"$id":"176","Name":"NEPAL","Capital":"Kathmandu","Continent":"Ocenania"},{"$id":"177","Name":"NETHERLANDS","Capital":"Amsterdam","Continent":"Ocenania"},{"$id":"178","Name":"NETHERLANDS ANTILLES","Capital":"Willemstad","Continent":"Ocenania"},{"$id":"179","Name":"BRITISH INDIAN OCEAN TERRITORY","Capital":null,"Continent":"Ocenania"},{"$id":"180","Name":"SOLOMON ISLANDS","Capital":"Honiara","Continent":"Ocenania"},{"$id":"181","Name":"VIRGIN ISLANDS (BRITISH)","Capital":"Charlotte Amalie","Continent":"Ocenania"},{"$id":"182","Name":"URUGUAY","Capital":"Montevideo","Continent":"Ocenania"},{"$id":"183","Name":"UZBEKISTAN","Capital":"Tashkent","Continent":"Ocenania"},{"$id":"184","Name":"VENEZUELA","Capital":"Caracas","Continent":"Ocenania"},{"$id":"185","Name":"WALLIS AND FUTUNA ISLANDS","Capital":"Mata-Utu","Continent":"Ocenania"},{"$id":"186","Name":"SAMOA","Capital":"Apia","Continent":"Ocenania"},{"$id":"187","Name":"YEMEN","Capital":"Sana'a","Continent":"Ocenania"},{"$id":"188","Name":"SERBIA AND MONTENEGRO","Capital":"Belgrade","Continent":"Ocenania"},{"$id":"189","Name":"ZAMBIA","Capital":"Lusaka","Continent":"Ocenania"},{"$id":"190","Name":"BOUVET ISLAND","Capital":null,"Continent":"Ocenania"},{"$id":"191","Name":"MYANMAR","Capital":"Naypyidaw","Continent":"Ocenania"},{"$id":"192","Name":"BURUNDI","Capital":"Bujumbura","Continent":"Ocenania"},{"$id":"193","Name":"SWITZERLAND","Capital":"Bern","Continent":"Ocenania"},{"$id":"194","Name":"SYRIAN ARAB REPUBLIC","Capital":"Damascus","Continent":"Ocenania"},{"$id":"195","Name":"TAJIKISTAN","Capital":"Dushanbe","Continent":"Ocenania"},{"$id":"196","Name":"THAILAND","Capital":"Bangkok","Continent":"Ocenania"},{"$id":"197","Name":"TOGO","Capital":"Lomé","Continent":"Ocenania"},{"$id":"198","Name":"TOKELAU","Capital":"Nukunonu","Continent":"Ocenania"},{"$id":"199","Name":"TONGA","Capital":"Nuku&#699;alofa","Continent":"Ocenania"},{"$id":"200","Name":"TRINIDAD AND TOBAGO","Capital":"Port of Spain","Continent":"Ocenania"},{"$id":"201","Name":"UNITED ARAB EMIRATES","Capital":"Abu Dhabi","Continent":"Ocenania"},{"$id":"202","Name":"TUNISIA","Capital":null,"Continent":"Ocenania"},{"$id":"203","Name":"TURKEY","Capital":"Ankara","Continent":"Ocenania"},{"$id":"204","Name":"TURKMENISTAN","Capital":"Ashgabat","Continent":"Ocenania"},{"$id":"205","Name":"TURKS AND CAICOS ISLANDS","Capital":"Cockburn Town","Continent":"Ocenania"},{"$id":"206","Name":"TUVALU","Capital":"Funafuti","Continent":"Ocenania"},{"$id":"207","Name":"UGANDA","Capital":"Kampala","Continent":"Ocenania"},{"$id":"208","Name":"UKRAINE","Capital":"Kiev","Continent":"Ocenania"},{"$id":"209","Name":"MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF","Capital":null,"Continent":"Ocenania"},{"$id":"210","Name":"EGYPT","Capital":"Cairo","Continent":"Ocenania"},{"$id":"211","Name":"UNITED KINGDOM","Capital":"London","Continent":"Ocenania"},{"$id":"212","Name":"TANZANIA, UNITED REPUBLIC OF","Capital":"Dodoma","Continent":"Ocenania"},{"$id":"213","Name":"UNITED STATES","Capital":"Washington, D.C.","Continent":"Ocenania"},{"$id":"214","Name":"VIRGIN ISLANDS (U.S.)","Capital":"Charlotte Amalie","Continent":"Ocenania"},{"$id":"215","Name":"DOMINICA","Capital":"Roseau","Continent":"Ocenania"},{"$id":"216","Name":"DOMINICAN REPUBLIC","Capital":"Santo Domingo","Continent":"Ocenania"},{"$id":"217","Name":"ECUADOR","Capital":"Quito","Continent":"Ocenania"},{"$id":"218","Name":"EL SALVADOR","Capital":"San Salvador","Continent":"Ocenania"},{"$id":"219","Name":"EQUATORIAL GUINEA","Capital":"Malabo","Continent":"Ocenania"},{"$id":"220","Name":"ETHIOPIA","Capital":"Addis Ababa","Continent":"Ocenania"},{"$id":"221","Name":"ERITREA","Capital":"Asmara","Continent":"Ocenania"},{"$id":"222","Name":"ESTONIA","Capital":"Tallinn","Continent":"Ocenania"},{"$id":"223","Name":"FAROE ISLANDS","Capital":"Tórshavn","Continent":"Ocenania"},{"$id":"224","Name":"FALKLAND ISLANDS (MALVINAS)","Capital":"Stanley","Continent":"Ocenania"},{"$id":"225","Name":"SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS","Capital":"King Edward Point","Continent":"Ocenania"},{"$id":"226","Name":"FIJI","Capital":"Suva","Continent":"Ocenania"},{"$id":"227","Name":"FINLAND","Capital":"Helsinki","Continent":"Ocenania"},{"$id":"228","Name":"AALAND ISLANDS","Capital":null,"Continent":"Ocenania"},{"$id":"229","Name":"FRANCE","Capital":"Paris","Continent":"Ocenania"},{"$id":"230","Name":"FRENCH GUIANA","Capital":"Cayenne","Continent":"Ocenania"},{"$id":"231","Name":"FRENCH POLYNESIA","Capital":"Pape'ete","Continent":"Ocenania"},{"$id":"232","Name":"FRENCH SOUTHERN TERRITORIES","Capital":"Saint-Pierre, Réunion","Continent":"Ocenania"},{"$id":"233","Name":"DJIBOUTI","Capital":null,"Continent":"Ocenania"},{"$id":"234","Name":"GABON","Capital":"Libreville","Continent":"Ocenania"},{"$id":"235","Name":"GEORGIA","Capital":"Tbilisi","Continent":"Ocenania"},{"$id":"236","Name":"GAMBIA","Capital":"Banjul","Continent":"Ocenania"},{"$id":"237","Name":"PALESTINIAN TERRITORY, Occupied","Capital":null,"Continent":"Ocenania"},{"$id":"238","Name":"GERMANY","Capital":"Berlin","Continent":"Ocenania"},{"$id":"239","Name":"GHANA","Capital":"Accra","Continent":"Ocenania"},{"$id":"240","Name":"GIBRALTAR","Capital":null,"Continent":"Ocenania"},{"$id":"241","Name":"KIRIBATI","Capital":"South Tarawa","Continent":"Ocenania"}]};
	//$scope.countries = {"$id":"1"};
	//console.log($scope.countries);
	
});