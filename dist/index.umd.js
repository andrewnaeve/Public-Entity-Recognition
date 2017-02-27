(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["starWarsNames"] = factory();
	else
		root["starWarsNames"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var stockList = __webpack_require__(1).stockList;
	var per = __webpack_require__(2).per;
	
	var mainExport = {
		all: stockList,
		per: per(string),
		longestPhrase: longestPhrase(string)
	};
	
	module.exports = mainExport;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports.stockList = [{
		"Symbol": "A",
		"Description": "Agilent Technologies, Inc."
	}, {
		"Symbol": "AA",
		"Description": "Alcoa Corporation"
	}, {
		"Symbol": "AAAP",
		"Description": "Advanced Accele. Ads"
	}, {
		"Symbol": "AAC",
		"Description": "AAC Holdings, Inc."
	}, {
		"Symbol": "AAL",
		"Description": "American Airlines Gp"
	}, {
		"Symbol": "AAMC",
		"Description": "Altisource Asset Management Corp"
	}, {
		"Symbol": "AAME",
		"Description": "Atlantic Amer Cp"
	}, {
		"Symbol": "AAN",
		"Description": "Aarons,  Inc."
	}, {
		"Symbol": "AAOI",
		"Description": "Applied Optoelect Cmn"
	}, {
		"Symbol": "AAON",
		"Description": "Aaon Inc"
	}, {
		"Symbol": "AAP",
		"Description": "Advance Auto Parts Inc"
	}, {
		"Symbol": "AAPC",
		"Description": "Atlantic Alliance Or"
	}, {
		"Symbol": "AAPL",
		"Description": "Apple Inc"
	}, {
		"Symbol": "AAT",
		"Description": "American Assets Trust, Inc."
	}, {
		"Symbol": "AAU",
		"Description": "Almaden Minerals, Ltd."
	}, {
		"Symbol": "AAV",
		"Description": "Advantage Oil & Gas Ltd"
	}, {
		"Symbol": "AAWW",
		"Description": "Atlas Air Ww"
	}, {
		"Symbol": "AAXJ",
		"Description": "Ishares MSCI Aca X-Japan"
	}, {
		"Symbol": "AB",
		"Description": "AllianceBernstein Holding L.P."
	}, {
		"Symbol": "ABAC",
		"Description": "Aoxin Tianli Grp"
	}, {
		"Symbol": "ABAX",
		"Description": "Abaxis Inc"
	}, {
		"Symbol": "ABB",
		"Description": "ABB Ltd"
	}, {
		"Symbol": "ABBV",
		"Description": "AbbVie Inc."
	}, {
		"Symbol": "ABC",
		"Description": "AmerisourceBergen Corporation Holding Co"
	}, {
		"Symbol": "ABCB",
		"Description": "Ameris Bancorp"
	}, {
		"Symbol": "ABCD",
		"Description": "Cambium Learning Grp"
	}, {
		"Symbol": "ABCO",
		"Description": "Advisory Board Co"
	}, {
		"Symbol": "ABDC",
		"Description": "Alcentra Capital Com"
	}, {
		"Symbol": "ABE",
		"Description": "Aberdeen Emerging Markets Smaller Company Opportunities Fund I"
	}, {
		"Symbol": "ABEO",
		"Description": "Abeona Therapeutics"
	}, {
		"Symbol": "ABEOW",
		"Description": "Abeona Thera Wts"
	}, {
		"Symbol": "ABEV",
		"Description": "Ambev S.A."
	}, {
		"Symbol": "ABG",
		"Description": "Asbury Automotive Group Inc"
	}, {
		"Symbol": "ABIL",
		"Description": "Ability Inc"
	}, {
		"Symbol": "ABIO",
		"Description": "Arca Biopharma Inc"
	}, {
		"Symbol": "ABM",
		"Description": "ABM Industries Incorporated"
	}, {
		"Symbol": "ABMD",
		"Description": "Abiomed Inc"
	}, {
		"Symbol": "ABR",
		"Description": "Arbor Realty Trust"
	}, {
		"Symbol": "ABR^A",
		"Description": "Arbor Realty Trust"
	}, {
		"Symbol": "ABR^B",
		"Description": "Arbor Realty Trust"
	}, {
		"Symbol": "ABR^C",
		"Description": "Arbor Realty Trust"
	}, {
		"Symbol": "ABRN",
		"Description": "Arbor Realty Trust"
	}, {
		"Symbol": "ABT",
		"Description": "Abbott Laboratories"
	}, {
		"Symbol": "ABTL",
		"Description": "Autobytel Inc"
	}, {
		"Symbol": "ABTX",
		"Description": "Allegiance Banc CS"
	}, {
		"Symbol": "ABUS",
		"Description": "Arbutus Biopharma Cp"
	}, {
		"Symbol": "ABX",
		"Description": "Barrick Gold Corporation"
	}, {
		"Symbol": "ABY",
		"Description": "Atlantica Yield Plc"
	}, {
		"Symbol": "AC",
		"Description": "Associated Capital Group, Inc."
	}, {
		"Symbol": "ACAD",
		"Description": "Acadia Pharmaceutica"
	}, {
		"Symbol": "ACAT",
		"Description": "Arctic Cat Inc"
	}, {
		"Symbol": "ACBI",
		"Description": "Atlantic Capital Cmn"
	}, {
		"Symbol": "ACC",
		"Description": "American Campus Communities Inc"
	}, {
		"Symbol": "ACCO",
		"Description": "Acco Brands Corporation"
	}, {
		"Symbol": "ACET",
		"Description": "Aceto Cp"
	}, {
		"Symbol": "ACFC",
		"Description": "Atlantic Coast Finl"
	}, {
		"Symbol": "ACGL",
		"Description": "Arch Capital Grp Ltd"
	}, {
		"Symbol": "ACGLP",
		"Description": "Arch Capital Group Ltd"
	}, {
		"Symbol": "ACH",
		"Description": "Aluminum Corporation of China Limited"
	}, {
		"Symbol": "ACHC",
		"Description": "Acadia Healthcr Co"
	}, {
		"Symbol": "ACHN",
		"Description": "Achillion Pharmaceut"
	}, {
		"Symbol": "ACIA",
		"Description": "Acacia Communica Cmn"
	}, {
		"Symbol": "ACIU",
		"Description": "AC Immune Sa"
	}, {
		"Symbol": "ACIW",
		"Description": "Aci Worldwide Inc"
	}, {
		"Symbol": "ACLS",
		"Description": "Axcelis Tech Inc"
	}, {
		"Symbol": "ACM",
		"Description": "AECOM"
	}, {
		"Symbol": "ACN",
		"Description": "Accenture plc"
	}, {
		"Symbol": "ACNB",
		"Description": "Acnb Corp"
	}, {
		"Symbol": "ACOR",
		"Description": "Acorda Therapeutics"
	}, {
		"Symbol": "ACP",
		"Description": "Avenue Income Credit Strategies Fund"
	}, {
		"Symbol": "ACRE",
		"Description": "Ares Commercial Real Estate Corporation"
	}, {
		"Symbol": "ACRS",
		"Description": "Aclaris Therapts Cmn"
	}, {
		"Symbol": "ACRX",
		"Description": "Acelrx Pharmaceutica"
	}, {
		"Symbol": "ACSF",
		"Description": "American Capital Sen"
	}, {
		"Symbol": "ACST",
		"Description": "Acasti Pharma Cmn A"
	}, {
		"Symbol": "ACTA",
		"Description": "Actua Corp Cmn"
	}, {
		"Symbol": "ACTG",
		"Description": "Acacia Res-Acacia"
	}, {
		"Symbol": "ACTX",
		"Description": "Glbl X Guru Actv ETF"
	}, {
		"Symbol": "ACU",
		"Description": "Acme United Corporation."
	}, {
		"Symbol": "ACUR",
		"Description": "Acura Pharma Cmn"
	}, {
		"Symbol": "ACV",
		"Description": "AllianzGI Diversified Income & Convertible Fund"
	}, {
		"Symbol": "ACWI",
		"Description": "Ishares MSCI ACWI"
	}, {
		"Symbol": "ACWX",
		"Description": "Ishares MSCI ACWI"
	}, {
		"Symbol": "ACXM",
		"Description": "Acxiom Cp"
	}, {
		"Symbol": "ACY",
		"Description": "AeroCentury Corp."
	}, {
		"Symbol": "ADAP",
		"Description": "Adaptimmune Ther Ads"
	}, {
		"Symbol": "ADBE",
		"Description": "Adobe Systems Inc"
	}, {
		"Symbol": "ADC",
		"Description": "Agree Realty Corporation"
	}, {
		"Symbol": "ADES",
		"Description": "Advanced Emissions Solutions Inc"
	}, {
		"Symbol": "ADGE",
		"Description": "American DG Energy Inc."
	}, {
		"Symbol": "ADHD",
		"Description": "Alcobra Ltd. Ord"
	}, {
		"Symbol": "ADI",
		"Description": "Analog Devices Cmn"
	}, {
		"Symbol": "ADK",
		"Description": "Adcare Health Systems Inc"
	}, {
		"Symbol": "ADK^A",
		"Description": "Adcare Health Systems Inc"
	}, {
		"Symbol": "ADM",
		"Description": "Archer-Daniels-Midland Company"
	}, {
		"Symbol": "ADMA",
		"Description": "Adma Biologics Cmn"
	}, {
		"Symbol": "ADMP",
		"Description": "Adamis Pharmaceuticl"
	}, {
		"Symbol": "ADMS",
		"Description": "Adamas Pharma Cmn"
	}, {
		"Symbol": "ADNT",
		"Description": "Adient plc"
	}, {
		"Symbol": "ADP",
		"Description": "Automatic Data Procs"
	}, {
		"Symbol": "ADPT",
		"Description": "Adeptus Health Inc."
	}, {
		"Symbol": "ADRA",
		"Description": "Bldrs Asia 50 Fd"
	}, {
		"Symbol": "ADRD",
		"Description": "Bldrs Dev Mkts 100"
	}, {
		"Symbol": "ADRE",
		"Description": "Bldrs EM Mkts 50"
	}, {
		"Symbol": "ADRO",
		"Description": "Aduro Biotech Cmn"
	}, {
		"Symbol": "ADRU",
		"Description": "Bldrs EUR 100 Fd"
	}, {
		"Symbol": "ADS",
		"Description": "Alliance Data Systems Corporation"
	}, {
		"Symbol": "ADSK",
		"Description": "Autodesk Inc"
	}, {
		"Symbol": "ADSW",
		"Description": "Advanced Disposal Services, Inc."
	}, {
		"Symbol": "ADTN",
		"Description": "Adtran Inc"
	}, {
		"Symbol": "ADUS",
		"Description": "Addus Homecare Corpo"
	}, {
		"Symbol": "ADVM",
		"Description": "Adverum Biotechnlgs"
	}, {
		"Symbol": "ADX",
		"Description": "Adams Diversified Equity Fund, Inc."
	}, {
		"Symbol": "ADXS",
		"Description": "Advaxis Inc Cmn Stk"
	}, {
		"Symbol": "ADXSW",
		"Description": "Advaxis Inc Wts"
	}, {
		"Symbol": "AE",
		"Description": "Adams Resources & Energy, Inc."
	}, {
		"Symbol": "AEB",
		"Description": "Aegon NV"
	}, {
		"Symbol": "AED",
		"Description": "Aegon NV"
	}, {
		"Symbol": "AEE",
		"Description": "Ameren Corporation"
	}, {
		"Symbol": "AEG",
		"Description": "Aegon NV"
	}, {
		"Symbol": "AEGN",
		"Description": "Aegion Corp Cmn Stk"
	}, {
		"Symbol": "AEH",
		"Description": "Aegon NV"
	}, {
		"Symbol": "AEHR",
		"Description": "Aehr Test Systems"
	}, {
		"Symbol": "AEIS",
		"Description": "Advanced Energy"
	}, {
		"Symbol": "AEK",
		"Description": "Aegon NV"
	}, {
		"Symbol": "AEL",
		"Description": "American Equity Investment Life Holding Company"
	}, {
		"Symbol": "AEM",
		"Description": "Agnico Eagle Mines Limited"
	}, {
		"Symbol": "AEMD",
		"Description": "Aethlon Medical Cmn"
	}, {
		"Symbol": "AEO",
		"Description": "American Eagle Outfitters, Inc."
	}, {
		"Symbol": "AEP",
		"Description": "American Electric Power Company, Inc."
	}, {
		"Symbol": "AEPI",
		"Description": "AEP Inds Inc"
	}, {
		"Symbol": "AER",
		"Description": "Aercap Holdings N.V."
	}, {
		"Symbol": "AERI",
		"Description": "Aerie Pharmaceutical"
	}, {
		"Symbol": "AES",
		"Description": " AES Corporation"
	}, {
		"Symbol": "AES^C",
		"Description": " AES Corporation"
	}, {
		"Symbol": "AET",
		"Description": "Aetna Inc."
	}, {
		"Symbol": "AETI",
		"Description": "American Electric Te"
	}, {
		"Symbol": "AEUA",
		"Description": "Anadarko Petroleum Corporation"
	}, {
		"Symbol": "AEY",
		"Description": "Addvantage Techs Grp"
	}, {
		"Symbol": "AEZS",
		"Description": "Aeterna Zentaris"
	}, {
		"Symbol": "AF",
		"Description": "Astoria Financial Corporation"
	}, {
		"Symbol": "AF^C",
		"Description": "Astoria Financial Corporation"
	}, {
		"Symbol": "AFA",
		"Description": "American Financial Group, Inc."
	}, {
		"Symbol": "AFAM",
		"Description": "Almost Family Inc"
	}, {
		"Symbol": "AFB",
		"Description": "Alliance National Municipal Income Fund Inc"
	}, {
		"Symbol": "AFC",
		"Description": "Ares Capital Corporation"
	}, {
		"Symbol": "AFG",
		"Description": "American Financial Group, Inc."
	}, {
		"Symbol": "AFGE",
		"Description": "American Financial Group, Inc."
	}, {
		"Symbol": "AFGH",
		"Description": "American Financial Group, Inc."
	}, {
		"Symbol": "AFH",
		"Description": "Atlas Fincl Hld Ord"
	}, {
		"Symbol": "AFI",
		"Description": "Armstrong Flooring, Inc."
	}, {
		"Symbol": "AFL",
		"Description": "Aflac Incorporated"
	}, {
		"Symbol": "AFMD",
		"Description": "Affimed N.V."
	}, {
		"Symbol": "AFSD",
		"Description": "Aflac Incorporated"
	}, {
		"Symbol": "AFSI",
		"Description": "Amtrust Financial"
	}, {
		"Symbol": "AFSI^A",
		"Description": "AmTrust Financial Services, Inc."
	}, {
		"Symbol": "AFSI^B",
		"Description": "AmTrust Financial Services, Inc."
	}, {
		"Symbol": "AFSI^C",
		"Description": "AmTrust Financial Services, Inc."
	}, {
		"Symbol": "AFSI^D",
		"Description": "AmTrust Financial Services, Inc."
	}, {
		"Symbol": "AFSI^E",
		"Description": "AmTrust Financial Services, Inc."
	}, {
		"Symbol": "AFSI^F",
		"Description": "AmTrust Financial Services, Inc."
	}, {
		"Symbol": "AFSS",
		"Description": "AmTrust Financial Services, Inc."
	}, {
		"Symbol": "AFST",
		"Description": "AmTrust Financial Services, Inc."
	}, {
		"Symbol": "AFT",
		"Description": "Apollo Senior Floating Rate Fund Inc."
	}, {
		"Symbol": "AFW",
		"Description": "American Financial Group, Inc."
	}, {
		"Symbol": "AG",
		"Description": "First Majestic Silver Corp."
	}, {
		"Symbol": "AGC",
		"Description": "Advent Claymore Convertible Securities and Income Fund II"
	}, {
		"Symbol": "AGCO",
		"Description": "AGCO Corporation"
	}, {
		"Symbol": "AGD",
		"Description": "Alpine Global Dynamic Dividend Fund"
	}, {
		"Symbol": "AGEN",
		"Description": "Agenus Inc"
	}, {
		"Symbol": "AGFS",
		"Description": "Agrofresh Solutions"
	}, {
		"Symbol": "AGFSW",
		"Description": "Agrofresh Sol Wrrnts"
	}, {
		"Symbol": "AGI",
		"Description": "Alamos Gold Inc."
	}, {
		"Symbol": "AGII",
		"Description": "Argo Group Intl Hlds"
	}, {
		"Symbol": "AGIIL",
		"Description": "Argo Grp Itl Snr NTS"
	}, {
		"Symbol": "AGIO",
		"Description": "Agios Pharmaceutical"
	}, {
		"Symbol": "AGLE",
		"Description": "Aeglea Biothera Cmn"
	}, {
		"Symbol": "AGM",
		"Description": "Federal Agricultural Mortgage Corporation"
	}, {
		"Symbol": "AGM.A",
		"Description": "Federal Agricultural Mortgage Corporation"
	}, {
		"Symbol": "AGM^A",
		"Description": "Federal Agricultural Mortgage Corporation"
	}, {
		"Symbol": "AGM^B",
		"Description": "Federal Agricultural Mortgage Corporation"
	}, {
		"Symbol": "AGM^C",
		"Description": "Federal Agricultural Mortgage Corporation"
	}, {
		"Symbol": "AGN",
		"Description": "Allergan plc."
	}, {
		"Symbol": "AGN^A",
		"Description": "Allergan plc."
	}, {
		"Symbol": "AGNC",
		"Description": "American Capital Age"
	}, {
		"Symbol": "AGNCB",
		"Description": "American Cap Agy Cor"
	}, {
		"Symbol": "AGNCP",
		"Description": "American Capital Pfd"
	}, {
		"Symbol": "AGND",
		"Description": "Wt Brclys Usagg Ndur"
	}, {
		"Symbol": "AGO",
		"Description": "Assured Guaranty Ltd."
	}, {
		"Symbol": "AGO^B",
		"Description": "Assured Guaranty Ltd."
	}, {
		"Symbol": "AGO^E",
		"Description": "Assured Guaranty Ltd."
	}, {
		"Symbol": "AGO^F",
		"Description": "Assured Guaranty Ltd."
	}, {
		"Symbol": "AGR",
		"Description": "Avangrid, Inc."
	}, {
		"Symbol": "AGRO",
		"Description": "Adecoagro S.A."
	}, {
		"Symbol": "AGRX",
		"Description": "Agile Therap Cmn Stk"
	}, {
		"Symbol": "AGTC",
		"Description": "Applied Genetic Tech"
	}, {
		"Symbol": "AGU",
		"Description": "Agrium Inc."
	}, {
		"Symbol": "AGX",
		"Description": "Argan, Inc."
	}, {
		"Symbol": "AGYS",
		"Description": "Agilysys Inc"
	}, {
		"Symbol": "AGZD",
		"Description": "Wt Barc Usagg Zro Dr"
	}, {
		"Symbol": "AHC",
		"Description": "A.H. Belo Corporation"
	}, {
		"Symbol": "AHGP",
		"Description": "Alliance Holdings Gp"
	}, {
		"Symbol": "AHH",
		"Description": "Armada Hoffler Properties, Inc."
	}, {
		"Symbol": "AHL",
		"Description": "Aspen Insurance Holdings Limited"
	}, {
		"Symbol": "AHL^B",
		"Description": "Aspen Insurance Holdings Limited"
	}, {
		"Symbol": "AHL^C",
		"Description": "Aspen Insurance Holdings Limited"
	}, {
		"Symbol": "AHL^D",
		"Description": "Aspen Insurance Holdings Limited"
	}, {
		"Symbol": "AHP",
		"Description": "Ashford Hospitality Prime, Inc."
	}, {
		"Symbol": "AHP^B",
		"Description": "Ashford Hospitality Prime, Inc."
	}, {
		"Symbol": "AHPA",
		"Description": "Avista Healthcare Public Acquisition Corp. Class"
	}, {
		"Symbol": "AHPAU",
		"Description": "Avista Healthcare Public Acquisition Corp"
	}, {
		"Symbol": "AHPAW",
		"Description": "Avista Healthcare Public Acquisition Corp. Warra"
	}, {
		"Symbol": "AHPI",
		"Description": "Allied Healthcare"
	}, {
		"Symbol": "AHT",
		"Description": "Ashford Hospitality Trust Inc"
	}, {
		"Symbol": "AHT^A",
		"Description": "Ashford Hospitality Trust Inc"
	}, {
		"Symbol": "AHT^D",
		"Description": "Ashford Hospitality Trust Inc"
	}, {
		"Symbol": "AHT^F",
		"Description": "Ashford Hospitality Trust Inc"
	}, {
		"Symbol": "AHT^G",
		"Description": "Ashford Hospitality Trust Inc"
	}, {
		"Symbol": "AI",
		"Description": "Arlington Asset Investment Corp"
	}, {
		"Symbol": "AIA",
		"Description": "Ishares Asia 50 ETF"
	}, {
		"Symbol": "AIB",
		"Description": "Apollo Investment Corporation"
	}, {
		"Symbol": "AIC",
		"Description": "Arlington Asset Investment Corp"
	}, {
		"Symbol": "AIF",
		"Description": "Apollo Tactical Income Fund Inc."
	}, {
		"Symbol": "AIG",
		"Description": "American International Group, Inc."
	}, {
		"Symbol": "AIG.WS",
		"Description": "American International Group, Inc."
	}, {
		"Symbol": "AIII",
		"Description": "ACRE Realty Investors, Inc."
	}, {
		"Symbol": "AIMC",
		"Description": "Altra Indtl Mtn Cmn"
	}, {
		"Symbol": "AIMT",
		"Description": "Aimmune Therap Cmn"
	}, {
		"Symbol": "AIN",
		"Description": "Albany International Corporation"
	}, {
		"Symbol": "AINC",
		"Description": "Ashford Inc."
	}, {
		"Symbol": "AINV",
		"Description": "Apollo Investment Co"
	}, {
		"Symbol": "AIQ",
		"Description": "Alliance Hlthcare Cmn"
	}, {
		"Symbol": "AIR",
		"Description": "AAR Corp."
	}, {
		"Symbol": "AIRG",
		"Description": "Airgain Inc"
	}, {
		"Symbol": "AIRI",
		"Description": "Air Industries Group"
	}, {
		"Symbol": "AIRM",
		"Description": "Air Methods Cp"
	}, {
		"Symbol": "AIRR",
		"Description": "First Trust Rba Am I"
	}, {
		"Symbol": "AIRT",
		"Description": "Air T Inc"
	}, {
		"Symbol": "AIT",
		"Description": "Applied Industrial Technologies, Inc."
	}, {
		"Symbol": "AIV",
		"Description": "Apartment Investment and Management Company"
	}, {
		"Symbol": "AIV^A",
		"Description": "Apartment Investment and Management Company"
	}, {
		"Symbol": "AIW",
		"Description": "Arlington Asset Investment Corp"
	}, {
		"Symbol": "AIY",
		"Description": "Apollo Investment Corporation"
	}, {
		"Symbol": "AIZ",
		"Description": "Assurant, Inc."
	}, {
		"Symbol": "AJG",
		"Description": "Arthur J. Gallagher & Co."
	}, {
		"Symbol": "AJRD",
		"Description": "Aerojet Rocketdyne Holdings, Inc."
	}, {
		"Symbol": "AJX",
		"Description": "Great Ajax Corp."
	}, {
		"Symbol": "AKAM",
		"Description": "Akamai Technologies"
	}, {
		"Symbol": "AKAO",
		"Description": "Achaogen Inc Cmn"
	}, {
		"Symbol": "AKBA",
		"Description": "Akebia Therapeutics"
	}, {
		"Symbol": "AKER",
		"Description": "Akers Biosciences Cmn"
	}, {
		"Symbol": "AKG",
		"Description": "Asanko Gold Inc."
	}, {
		"Symbol": "AKO.A",
		"Description": "Embotelladora Andina S.A."
	}, {
		"Symbol": "AKO.B",
		"Description": "Embotelladora Andina S.A."
	}, {
		"Symbol": "AKP",
		"Description": "Alliance California Municipal Income Fund Inc"
	}, {
		"Symbol": "AKR",
		"Description": "Acadia Realty Trust"
	}, {
		"Symbol": "AKRX",
		"Description": "Akorn Inc"
	}, {
		"Symbol": "AKS",
		"Description": "AK Steel Holding Corporation"
	}, {
		"Symbol": "AKTX",
		"Description": "Akari Therapeutics"
	}, {
		"Symbol": "AL",
		"Description": "Air Lease Corporation"
	}, {
		"Symbol": "ALB",
		"Description": "Albemarle Corporation"
	}, {
		"Symbol": "ALBO",
		"Description": "Albireo Pharma Inc"
	}, {
		"Symbol": "ALCO",
		"Description": "Alico Inc"
	}, {
		"Symbol": "ALDR",
		"Description": "Alder Biopharma Cmn"
	}, {
		"Symbol": "ALDW",
		"Description": "Alon USA Partners, LP"
	}, {
		"Symbol": "ALDX",
		"Description": "Aldeyra Therapeu Cmn"
	}, {
		"Symbol": "ALE",
		"Description": "Allete, Inc."
	}, {
		"Symbol": "ALEX",
		"Description": "Alexander & Baldwin Holdings, Inc."
	}, {
		"Symbol": "ALG",
		"Description": "Alamo Group, Inc."
	}, {
		"Symbol": "ALGN",
		"Description": "Align Technology I"
	}, {
		"Symbol": "ALGT",
		"Description": "Allegiant Travel Com"
	}, {
		"Symbol": "ALIM",
		"Description": "Alimera Sciences Inc"
	}, {
		"Symbol": "ALJ",
		"Description": "Alon USA Energy, Inc."
	}, {
		"Symbol": "ALJJ",
		"Description": "Alj Regional Hold Cmn"
	}, {
		"Symbol": "ALK",
		"Description": "Alaska Air Group, Inc."
	}, {
		"Symbol": "ALKS",
		"Description": "Alkermes Plc"
	}, {
		"Symbol": "ALL",
		"Description": "Allstate Corporation "
	}, {
		"Symbol": "ALL^A",
		"Description": "Allstate Corporation "
	}, {
		"Symbol": "ALL^B",
		"Description": "Allstate Corporation "
	}, {
		"Symbol": "ALL^C",
		"Description": "Allstate Corporation "
	}, {
		"Symbol": "ALL^D",
		"Description": "Allstate Corporation "
	}, {
		"Symbol": "ALL^E",
		"Description": "Allstate Corporation "
	}, {
		"Symbol": "ALL^F",
		"Description": "Allstate Corporation "
	}, {
		"Symbol": "ALLE",
		"Description": "Allegion plc"
	}, {
		"Symbol": "ALLT",
		"Description": "Allot Communications"
	}, {
		"Symbol": "ALLY",
		"Description": "Ally Financial Inc."
	}, {
		"Symbol": "ALLY^A",
		"Description": "Ally Financial Inc."
	}, {
		"Symbol": "ALN",
		"Description": "American Lorain Corporation"
	}, {
		"Symbol": "ALNY",
		"Description": "Alnylam Pharmaceut"
	}, {
		"Symbol": "ALOG",
		"Description": "Analogic Cp"
	}, {
		"Symbol": "ALOT",
		"Description": "Astronova Inc"
	}, {
		"Symbol": "ALP^O",
		"Description": "Alabama Power Company"
	}, {
		"Symbol": "ALQA",
		"Description": "Alliqua Biomedical"
	}, {
		"Symbol": "ALR",
		"Description": "Alere Inc."
	}, {
		"Symbol": "ALR^B",
		"Description": "Alere Inc."
	}, {
		"Symbol": "ALRM",
		"Description": "Alarm.Com Cmn"
	}, {
		"Symbol": "ALSK",
		"Description": "Alaska Commun Sys"
	}, {
		"Symbol": "ALSN",
		"Description": "Allison Transmission Holdings, Inc."
	}, {
		"Symbol": "ALTY",
		"Description": "Global X Sprdv ETF"
	}, {
		"Symbol": "ALV",
		"Description": "Autoliv, Inc."
	}, {
		"Symbol": "ALX",
		"Description": "Alexanders, Inc."
	}, {
		"Symbol": "ALXN",
		"Description": "Alexion Pharm Inc"
	}, {
		"Symbol": "AM",
		"Description": "Antero Midstream Partners LP"
	}, {
		"Symbol": "AMAG",
		"Description": "Amag Pharmaceuticals"
	}, {
		"Symbol": "AMAT",
		"Description": "Applied Materials"
	}, {
		"Symbol": "AMBA",
		"Description": "Ambarella Inc"
	}, {
		"Symbol": "AMBC",
		"Description": "Ambac Financial Grp"
	}, {
		"Symbol": "AMBCW",
		"Description": "Ambac Financial Grp"
	}, {
		"Symbol": "AMBR",
		"Description": "Amber Road, Inc."
	}, {
		"Symbol": "AMC",
		"Description": "AMC Entertainment Holdings, Inc."
	}, {
		"Symbol": "AMCC",
		"Description": "Applied Micro Crcts"
	}, {
		"Symbol": "AMCN",
		"Description": "Airmedia Group Inc"
	}, {
		"Symbol": "AMCX",
		"Description": "Amc Networks Cl A"
	}, {
		"Symbol": "AMD",
		"Description": "Adv Micro Devices"
	}, {
		"Symbol": "AMDA",
		"Description": "Amedica Corporation"
	}, {
		"Symbol": "AME",
		"Description": "AMTEK, Inc."
	}, {
		"Symbol": "AMED",
		"Description": "Amedisys Inc"
	}, {
		"Symbol": "AMFW",
		"Description": "Amec Plc Ord"
	}, {
		"Symbol": "AMG",
		"Description": "Affiliated Managers Group, Inc."
	}, {
		"Symbol": "AMGN",
		"Description": "Amgen"
	}, {
		"Symbol": "AMH",
		"Description": "American Homes 4 Rent"
	}, {
		"Symbol": "AMH^A",
		"Description": "American Homes 4 Rent"
	}, {
		"Symbol": "AMH^B",
		"Description": "American Homes 4 Rent"
	}, {
		"Symbol": "AMH^C",
		"Description": "American Homes 4 Rent"
	}, {
		"Symbol": "AMH^D",
		"Description": "American Homes 4 Rent"
	}, {
		"Symbol": "AMH^E",
		"Description": "American Homes 4 Rent"
	}, {
		"Symbol": "AMID",
		"Description": "American Midstream Partners, LP"
	}, {
		"Symbol": "AMKR",
		"Description": "Amkor Technology"
	}, {
		"Symbol": "AMMA",
		"Description": "Alliance Mma Inc"
	}, {
		"Symbol": "AMN",
		"Description": "AMN Healthcare Services Inc"
	}, {
		"Symbol": "AMNB",
		"Description": "American Natl Bksh"
	}, {
		"Symbol": "AMOT",
		"Description": "Allied Motion Tech"
	}, {
		"Symbol": "AMOV",
		"Description": "America Movil, S.A.B. de C.V."
	}, {
		"Symbol": "AMP",
		"Description": "AMERIPRISE FINANCIAL SERVICES, INC."
	}, {
		"Symbol": "AMPE",
		"Description": "Ampio Pharmaceuticals, Inc."
	}, {
		"Symbol": "AMPH",
		"Description": "Amphastar Pharma Cmn"
	}, {
		"Symbol": "AMRB",
		"Description": "American River Bkshs"
	}, {
		"Symbol": "AMRC",
		"Description": "Ameresco, Inc."
	}, {
		"Symbol": "AMRI",
		"Description": "Albany Molecular Res"
	}, {
		"Symbol": "AMRK",
		"Description": "A-Mark Precious Meta"
	}, {
		"Symbol": "AMRN",
		"Description": "Amarin Corp Ads"
	}, {
		"Symbol": "AMRS",
		"Description": "Amyris Inc"
	}, {
		"Symbol": "AMS",
		"Description": "American Shared Hospital Services"
	}, {
		"Symbol": "AMSC",
		"Description": "Amer Superconductor"
	}, {
		"Symbol": "AMSF",
		"Description": "Amerisafe Inc"
	}, {
		"Symbol": "AMSWA",
		"Description": "Amer Software Inc"
	}, {
		"Symbol": "AMT",
		"Description": "American Tower Corporation REIT"
	}, {
		"Symbol": "AMT^A",
		"Description": "American Tower Corporation REIT"
	}, {
		"Symbol": "AMT^B",
		"Description": "American Tower Corporation REIT"
	}, {
		"Symbol": "AMTD",
		"Description": "TD Ameritrade HD Cmn"
	}, {
		"Symbol": "AMTX",
		"Description": "Aemetis Inc Cmn Stk"
	}, {
		"Symbol": "AMWD",
		"Description": "Amer Woodmark Cp"
	}, {
		"Symbol": "AMX",
		"Description": "America Movil, S.A.B. de C.V."
	}, {
		"Symbol": "AMZN",
		"Description": "Amazon.Com Inc"
	}, {
		"Symbol": "AN",
		"Description": "AutoNation, Inc."
	}, {
		"Symbol": "ANAB",
		"Description": "Anaptysbio Inc."
	}, {
		"Symbol": "ANAT",
		"Description": "Amer Natl Insurance"
	}, {
		"Symbol": "ANCB",
		"Description": "Anchor Bancorp"
	}, {
		"Symbol": "ANCX",
		"Description": "Access National Corp"
	}, {
		"Symbol": "ANDA",
		"Description": "Andina Acq Cp Ord Sh"
	}, {
		"Symbol": "ANDAR",
		"Description": "Andina Acq Cp Rt"
	}, {
		"Symbol": "ANDAU",
		"Description": "Andina Acq Cp Unit"
	}, {
		"Symbol": "ANDAW",
		"Description": "Andina Acq Cp Wt"
	}, {
		"Symbol": "ANDE",
		"Description": "Andersons Inc"
	}, {
		"Symbol": "ANET",
		"Description": "Arista Networks, Inc."
	}, {
		"Symbol": "ANF",
		"Description": "Abercrombie & Fitch Company"
	}, {
		"Symbol": "ANFI",
		"Description": "Amira Nature Foods Ltd"
	}, {
		"Symbol": "ANGI",
		"Description": "Angie's List Inc"
	}, {
		"Symbol": "ANGO",
		"Description": "Angiodynamics Inc"
	}, {
		"Symbol": "ANH",
		"Description": "Anworth Mortgage Asset  Corporation"
	}, {
		"Symbol": "ANH^A",
		"Description": "Anworth Mortgage Asset  Corporation"
	}, {
		"Symbol": "ANH^B",
		"Description": "Anworth Mortgage Asset  Corporation"
	}, {
		"Symbol": "ANH^C",
		"Description": "Anworth Mortgage Asset  Corporation"
	}, {
		"Symbol": "ANIK",
		"Description": "Anika Therapeutics"
	}, {
		"Symbol": "ANIP",
		"Description": "ANI  Pharma Inc"
	}, {
		"Symbol": "ANSS",
		"Description": "Ansys Inc"
	}, {
		"Symbol": "ANTH",
		"Description": "Anthera Pharmaceutic"
	}, {
		"Symbol": "ANTM",
		"Description": "Anthem, Inc."
	}, {
		"Symbol": "ANTX",
		"Description": "Anthem, Inc."
	}, {
		"Symbol": "ANW",
		"Description": "Aegean Marine Petroleum Network Inc."
	}, {
		"Symbol": "ANY",
		"Description": "Sphere 3D Corp."
	}, {
		"Symbol": "AOBC",
		"Description": "American Outdoor Brands Corp."
	}, {
		"Symbol": "AOD",
		"Description": "Alpine Total Dynamic Dividend Fund"
	}, {
		"Symbol": "AOI",
		"Description": "Alliance One International, Inc."
	}, {
		"Symbol": "AON",
		"Description": "Aon plc"
	}, {
		"Symbol": "AOS",
		"Description": "Smith A.O. Corporation"
	}, {
		"Symbol": "AOSL",
		"Description": "Alpha and Omega Semi"
	}, {
		"Symbol": "AP",
		"Description": "Ampco-Pittsburgh Corporation"
	}, {
		"Symbol": "APA",
		"Description": "Apache Corporation"
	}, {
		"Symbol": "APAM",
		"Description": "Artisan Partners Asset Management Inc."
	}, {
		"Symbol": "APB",
		"Description": "Asia Pacific Fund, Inc. "
	}, {
		"Symbol": "APC",
		"Description": "Anadarko Petroleum Corporation"
	}, {
		"Symbol": "APD",
		"Description": "Air Products and Chemicals, Inc."
	}, {
		"Symbol": "APDN",
		"Description": "Applied Dna Scns Cmn"
	}, {
		"Symbol": "APDNW",
		"Description": "Applied Dna Sci Wrnt"
	}, {
		"Symbol": "APEI",
		"Description": "American Pub. Edu."
	}, {
		"Symbol": "APEN",
		"Description": "Apollo Endosurgery Inc"
	}, {
		"Symbol": "APF",
		"Description": "Morgan Stanley Asia-Pacific Fund, Inc."
	}, {
		"Symbol": "APFH",
		"Description": "AdvancePierre Foods Holdings, Inc."
	}, {
		"Symbol": "APH",
		"Description": "Amphenol Corporation"
	}, {
		"Symbol": "APHB",
		"Description": "AmpliPhi Biosciences Corporation"
	}, {
		"Symbol": "APLE",
		"Description": "Apple Hospitality REIT, Inc."
	}, {
		"Symbol": "APLP",
		"Description": "Archrock Partners LP"
	}, {
		"Symbol": "APO",
		"Description": "Apollo Global Management, LLC"
	}, {
		"Symbol": "APOG",
		"Description": "Apogee Entrpr Inc"
	}, {
		"Symbol": "APOL",
		"Description": "Apollo Ed Grp A"
	}, {
		"Symbol": "APOP",
		"Description": "Cellect Biotechnology Ltd"
	}, {
		"Symbol": "APOPW",
		"Description": "Cellect Biotechnology Ltd"
	}, {
		"Symbol": "APPF",
		"Description": "Appfolio Cl A Cmn"
	}, {
		"Symbol": "APPS",
		"Description": "Digital Turbine Cmn"
	}, {
		"Symbol": "APRI",
		"Description": "Apricus Biosc Inc"
	}, {
		"Symbol": "APT",
		"Description": "Alpha Pro Tech, Ltd."
	}, {
		"Symbol": "APTI",
		"Description": "Apptio Inc"
	}, {
		"Symbol": "APTO",
		"Description": "Aptose Bioscns Cmn"
	}, {
		"Symbol": "APTS",
		"Description": "Preferred Apartment Communities, Inc."
	}, {
		"Symbol": "APU",
		"Description": "AmeriGas Partners, L.P."
	}, {
		"Symbol": "APVO",
		"Description": "Aptevo Therapeutics Inc"
	}, {
		"Symbol": "APWC",
		"Description": "Asia Pac Wire &Cable"
	}, {
		"Symbol": "AQB",
		"Description": "Aquabounty Technologies Inc."
	}, {
		"Symbol": "AQBTV",
		"Description": "Aquabounty Technologies Inc."
	}, {
		"Symbol": "AQMS",
		"Description": "Aqua Metals Inc Cmn"
	}, {
		"Symbol": "AQN",
		"Description": "Algonquin Power & Utilities Corp."
	}, {
		"Symbol": "AQXP",
		"Description": "Aquinox Pharmaceutic"
	}, {
		"Symbol": "AR",
		"Description": "Antero Resources Corporation"
	}, {
		"Symbol": "ARA",
		"Description": "American Renal Associates Holdings, Inc"
	}, {
		"Symbol": "ARAY",
		"Description": "Accuray Incorporated"
	}, {
		"Symbol": "ARC",
		"Description": "ARC Document Solutions, Inc."
	}, {
		"Symbol": "ARCB",
		"Description": "Arcbest Corp"
	}, {
		"Symbol": "ARCC",
		"Description": "Ares Capital Corp"
	}, {
		"Symbol": "ARCH",
		"Description": "Arch Coal, Inc."
	}, {
		"Symbol": "ARCI",
		"Description": "Applnc Rcycl Ct Amer"
	}, {
		"Symbol": "ARCO",
		"Description": "Arcos Dorados Holdings Inc."
	}, {
		"Symbol": "ARCW",
		"Description": "Arc Group Worldwide"
	}, {
		"Symbol": "ARCX",
		"Description": "Arc Logistic Partners LP"
	}, {
		"Symbol": "ARDC",
		"Description": "Ares Dynamic Credit Allocation Fund, Inc."
	}, {
		"Symbol": "ARDM",
		"Description": "Aradigm Corp Cmn"
	}, {
		"Symbol": "ARDX",
		"Description": "Ardelyx Inc Cmn"
	}, {
		"Symbol": "ARE",
		"Description": "Alexandria Real Estate Equities, Inc."
	}, {
		"Symbol": "ARE^D",
		"Description": "Alexandria Real Estate Equities, Inc."
	}, {
		"Symbol": "ARE^E",
		"Description": "Alexandria Real Estate Equities, Inc."
	}, {
		"Symbol": "ARES",
		"Description": "Ares Management L.P."
	}, {
		"Symbol": "ARES^A",
		"Description": "Ares Management L.P."
	}, {
		"Symbol": "AREX",
		"Description": "Approach Res. Inc"
	}, {
		"Symbol": "ARGS",
		"Description": "Argos Therapeutics"
	}, {
		"Symbol": "ARH^C",
		"Description": "Arch Capital Group Ltd."
	}, {
		"Symbol": "ARI",
		"Description": "Apollo Commercial Real Estate Finance"
	}, {
		"Symbol": "ARI^A",
		"Description": "Apollo Commercial Real Estate Finance"
	}, {
		"Symbol": "ARI^C",
		"Description": "Apollo Commercial Real Estate Finance"
	}, {
		"Symbol": "ARIA",
		"Description": "Ariad Pharm Inc"
	}, {
		"Symbol": "ARII",
		"Description": "American Railcar Ind"
	}, {
		"Symbol": "ARIS",
		"Description": "Ari Network Svcs"
	}, {
		"Symbol": "ARKR",
		"Description": "Ark Restaurants Cp"
	}, {
		"Symbol": "ARL",
		"Description": "American Realty Investors, Inc."
	}, {
		"Symbol": "ARLP",
		"Description": "Alliance Resource Pt"
	}, {
		"Symbol": "ARLZ",
		"Description": "Aralez Pharm Inc"
	}, {
		"Symbol": "ARMK",
		"Description": "Aramark"
	}, {
		"Symbol": "ARNA",
		"Description": "Arena Pharmaceutical"
	}, {
		"Symbol": "ARNC",
		"Description": "Arconic Inc."
	}, {
		"Symbol": "ARNC^",
		"Description": "Arconic Inc."
	}, {
		"Symbol": "ARNC^B",
		"Description": "Arconic Inc."
	}, {
		"Symbol": "AROC",
		"Description": "Archrock, Inc."
	}, {
		"Symbol": "AROW",
		"Description": "Arrow Financial Corp"
	}, {
		"Symbol": "ARQL",
		"Description": "Arqule Inc"
	}, {
		"Symbol": "ARR",
		"Description": "ARMOUR Residential REIT, Inc."
	}, {
		"Symbol": "ARR^A",
		"Description": "ARMOUR Residential REIT, Inc."
	}, {
		"Symbol": "ARR^B",
		"Description": "ARMOUR Residential REIT, Inc."
	}, {
		"Symbol": "ARRS",
		"Description": "Arris Group Inc"
	}, {
		"Symbol": "ARRY",
		"Description": "Array Biopharma Inc"
	}, {
		"Symbol": "ARTNA",
		"Description": "Artesian Res Cp A"
	}, {
		"Symbol": "ARTW",
		"Description": "Art S Way MFG Co I"
	}, {
		"Symbol": "ARTX",
		"Description": "Arotech Corp"
	}, {
		"Symbol": "ARU",
		"Description": "Ares Capital Corporation"
	}, {
		"Symbol": "ARW",
		"Description": "Arrow Electronics, Inc."
	}, {
		"Symbol": "ARWR",
		"Description": "Arrowhead Pharma"
	}, {
		"Symbol": "ASA",
		"Description": "ASA Gold and Precious Metals Limited"
	}, {
		"Symbol": "ASB",
		"Description": "Associated Banc-Corp"
	}, {
		"Symbol": "ASB.WS",
		"Description": "Associated Banc-Corp"
	}, {
		"Symbol": "ASB^C",
		"Description": "Associated Banc-Corp"
	}, {
		"Symbol": "ASB^D",
		"Description": "Associated Banc-Corp"
	}, {
		"Symbol": "ASBB",
		"Description": "Asb Bancorp Inc"
	}, {
		"Symbol": "ASC",
		"Description": "Ardmore Shipping Corporation"
	}, {
		"Symbol": "ASCMA",
		"Description": "Ascent Capital Group"
	}, {
		"Symbol": "ASET",
		"Description": "Flxsh Rl As Al Ix Fd"
	}, {
		"Symbol": "ASFI",
		"Description": "Asta Funding Inc"
	}, {
		"Symbol": "ASG",
		"Description": "Liberty All-Star Growth Fund, Inc."
	}, {
		"Symbol": "ASGN",
		"Description": "On Assignment, Inc."
	}, {
		"Symbol": "ASH",
		"Description": "Ashland Global Holdings Inc."
	}, {
		"Symbol": "ASIX",
		"Description": "AdvanSix Inc."
	}, {
		"Symbol": "ASM",
		"Description": "Avino Silver"
	}, {
		"Symbol": "ASMB",
		"Description": "Assembly Biosciences"
	}, {
		"Symbol": "ASML",
		"Description": "Asml Hldg NY Reg"
	}, {
		"Symbol": "ASNA",
		"Description": "Ascena Retail Grp Cmn"
	}, {
		"Symbol": "ASND",
		"Description": "Ascendis Pharma Ads"
	}, {
		"Symbol": "ASPN",
		"Description": "Aspen Aerogels, Inc."
	}, {
		"Symbol": "ASPS",
		"Description": "Altisource Portfolio"
	}, {
		"Symbol": "ASR",
		"Description": "Grupo Aeroportuario del Sureste, S.A. de C.V."
	}, {
		"Symbol": "ASRV",
		"Description": "Ameriserv Financial"
	}, {
		"Symbol": "ASRVP",
		"Description": "Ameriserv Fin Cap"
	}, {
		"Symbol": "AST",
		"Description": "Asterias Biotherapeutics, Inc."
	}, {
		"Symbol": "AST.WS",
		"Description": "Asterias Biotherapeutics, Inc."
	}, {
		"Symbol": "ASTC",
		"Description": "Astrotech Corp"
	}, {
		"Symbol": "ASTE",
		"Description": "Astec Inds Inc"
	}, {
		"Symbol": "ASUR",
		"Description": "Asure Software"
	}, {
		"Symbol": "ASX",
		"Description": "Advanced Semiconductor Engineering, Inc."
	}, {
		"Symbol": "ASYS",
		"Description": "Amtech Systems Inc"
	}, {
		"Symbol": "AT",
		"Description": "Atlantic Power Corporation"
	}, {
		"Symbol": "ATAI",
		"Description": "Ata Inc ADR"
	}, {
		"Symbol": "ATAX",
		"Description": "Amer First Mf Inv"
	}, {
		"Symbol": "ATEC",
		"Description": "Alphatec Holdings"
	}, {
		"Symbol": "ATEN",
		"Description": "A10 Networks, Inc."
	}, {
		"Symbol": "ATEST",
		"Description": "NASDAQ TEST STOCK"
	}, {
		"Symbol": "ATEST.A",
		"Description": "NASDAQ TEST STOCK"
	}, {
		"Symbol": "ATEST.B",
		"Description": "NASDAQ TEST STOCK"
	}, {
		"Symbol": "ATEST.C",
		"Description": "NASDAQ TEST STOCK"
	}, {
		"Symbol": "ATH",
		"Description": "Athene Holding Ltd."
	}, {
		"Symbol": "ATHM",
		"Description": "Autohome Inc."
	}, {
		"Symbol": "ATHN",
		"Description": "Athenahealth Inc"
	}, {
		"Symbol": "ATHX",
		"Description": "Athersys Inc"
	}, {
		"Symbol": "ATI",
		"Description": "Allegheny Technologies Incorporated"
	}, {
		"Symbol": "ATKR",
		"Description": "Atkore International Group Inc."
	}, {
		"Symbol": "ATLC",
		"Description": "Atlanticus Hldg Cp"
	}, {
		"Symbol": "ATLO",
		"Description": "Ames Natl Corp"
	}, {
		"Symbol": "ATNI",
		"Description": "Atn International"
	}, {
		"Symbol": "ATNM",
		"Description": "Actinium Pharmaceuticals, Inc."
	}, {
		"Symbol": "ATO",
		"Description": "Atmos Energy Corporation"
	}, {
		"Symbol": "ATOM",
		"Description": "Atomera Inc"
	}, {
		"Symbol": "ATOS",
		"Description": "Atossa Genetics Inc"
	}, {
		"Symbol": "ATR",
		"Description": "AptarGroup, Inc."
	}, {
		"Symbol": "ATRA",
		"Description": "Atara Biotherap Cmn"
	}, {
		"Symbol": "ATRC",
		"Description": "Atricure Inc"
	}, {
		"Symbol": "ATRI",
		"Description": "Atrion Corp"
	}, {
		"Symbol": "ATRO",
		"Description": "Astronics Cp"
	}, {
		"Symbol": "ATRS",
		"Description": "Antares Pharma Cmn"
	}, {
		"Symbol": "ATSG",
		"Description": "Air Transport"
	}, {
		"Symbol": "ATTO",
		"Description": "Atento S.A."
	}, {
		"Symbol": "ATTU",
		"Description": "Attunity Ltd"
	}, {
		"Symbol": "ATU",
		"Description": "Actuant Corporation"
	}, {
		"Symbol": "ATV",
		"Description": "Acorn International, Inc."
	}, {
		"Symbol": "ATVI",
		"Description": "Activision Blizzard"
	}, {
		"Symbol": "ATW",
		"Description": "Atwood Oceanics, Inc."
	}, {
		"Symbol": "AU",
		"Description": "AngloGold Ashanti Limited"
	}, {
		"Symbol": "AUBN",
		"Description": "Auburn Natl Bncp I"
	}, {
		"Symbol": "AUDC",
		"Description": "Audiocodes Ltd"
	}, {
		"Symbol": "AUMN",
		"Description": "Golden Minerals Company"
	}, {
		"Symbol": "AUO",
		"Description": "AU Optronics Corp"
	}, {
		"Symbol": "AUPH",
		"Description": "Aurinia Pharm Ord"
	}, {
		"Symbol": "AUXO",
		"Description": "Auxilio, Inc."
	}, {
		"Symbol": "AUY",
		"Description": "Yamana Gold Inc."
	}, {
		"Symbol": "AVA",
		"Description": "Avista Corporation"
	}, {
		"Symbol": "AVAL",
		"Description": "Grupo Aval Acciones y Valores S.A."
	}, {
		"Symbol": "AVAV",
		"Description": "Aerovironment Inc"
	}, {
		"Symbol": "AVB",
		"Description": "AvalonBay Communities, Inc."
	}, {
		"Symbol": "AVD",
		"Description": "American Vanguard Corporation"
	}, {
		"Symbol": "AVDL",
		"Description": "Avadel Pharmaceuticals Plc"
	}, {
		"Symbol": "AVEO",
		"Description": "Aveo Pharmaceuticals"
	}, {
		"Symbol": "AVGO",
		"Description": "Broadcom Ltd"
	}, {
		"Symbol": "AVGR",
		"Description": "Avinger Inc Cmn"
	}, {
		"Symbol": "AVH",
		"Description": "Avianca Holdings S.A."
	}, {
		"Symbol": "AVHI",
		"Description": "A V Homes Inc"
	}, {
		"Symbol": "AVID",
		"Description": "Avid Tech Inc"
	}, {
		"Symbol": "AVIR",
		"Description": "Aviragen Therapeutic"
	}, {
		"Symbol": "AVK",
		"Description": "Advent Claymore Convertible Securities and Income Fund"
	}, {
		"Symbol": "AVNW",
		"Description": "Aviat Networks Inc"
	}, {
		"Symbol": "AVP",
		"Description": "Avon Products, Inc."
	}, {
		"Symbol": "AVT",
		"Description": "Avnet, Inc."
	}, {
		"Symbol": "AVX",
		"Description": "AVX Corporation"
	}, {
		"Symbol": "AVXL",
		"Description": "Anavex Lf SC Cmn"
	}, {
		"Symbol": "AVXS",
		"Description": "Avexis Inc Cmn Stk"
	}, {
		"Symbol": "AVY",
		"Description": "Avery Dennison Corporation"
	}, {
		"Symbol": "AWF",
		"Description": "Alliance World Dollar Government Fund II"
	}, {
		"Symbol": "AWH",
		"Description": "Allied World Assurance Company Holdings, AG"
	}, {
		"Symbol": "AWI",
		"Description": "Armstrong World Industries Inc"
	}, {
		"Symbol": "AWK",
		"Description": "American Water Works"
	}, {
		"Symbol": "AWP",
		"Description": "Alpine Global Premier Properties Fund"
	}, {
		"Symbol": "AWR",
		"Description": "American States Water Company"
	}, {
		"Symbol": "AWRE",
		"Description": "Aware Inc"
	}, {
		"Symbol": "AWX",
		"Description": "Avalon Holdings Corporation"
	}, {
		"Symbol": "AXAR",
		"Description": "Axar Acquisition Corp."
	}, {
		"Symbol": "AXARU",
		"Description": "Axar Acquisition Corp."
	}, {
		"Symbol": "AXARW",
		"Description": "Axar Acquisition Corp."
	}, {
		"Symbol": "AXAS",
		"Description": "Abraxas Petro Corp"
	}, {
		"Symbol": "AXDX",
		"Description": "Accelerate Diagnosti"
	}, {
		"Symbol": "AXE",
		"Description": "Anixter International Inc."
	}, {
		"Symbol": "AXGN",
		"Description": "Axogen Inc Cmn"
	}, {
		"Symbol": "AXL",
		"Description": "American Axle & Manufacturing Holdings, Inc."
	}, {
		"Symbol": "AXN",
		"Description": "Aoxing Pharmaceutical Company, Inc."
	}, {
		"Symbol": "AXON",
		"Description": "Axovant Sciences Ltd."
	}, {
		"Symbol": "AXP",
		"Description": "American Express Company"
	}, {
		"Symbol": "AXR",
		"Description": "AMREP Corporation"
	}, {
		"Symbol": "AXS",
		"Description": "Axis Capital Holdings Limited"
	}, {
		"Symbol": "AXS^C",
		"Description": "Axis Capital Holdings Limited"
	}, {
		"Symbol": "AXS^D",
		"Description": "Axis Capital Holdings Limited"
	}, {
		"Symbol": "AXS^E",
		"Description": "Axis Capital Holdings Limited"
	}, {
		"Symbol": "AXSM",
		"Description": "Axsome Thera Cmn Stk"
	}, {
		"Symbol": "AXTA",
		"Description": "Axalta Coating Systems Ltd."
	}, {
		"Symbol": "AXTI",
		"Description": "Axt Inc"
	}, {
		"Symbol": "AXU",
		"Description": "Alexco Resource Corp"
	}, {
		"Symbol": "AYA",
		"Description": "Amaya Inc Cmn Stk"
	}, {
		"Symbol": "AYI",
		"Description": "Acuity Brands Inc"
	}, {
		"Symbol": "AYR",
		"Description": "Aircastle Limited"
	}, {
		"Symbol": "AZN",
		"Description": "Astrazeneca PLC"
	}, {
		"Symbol": "AZO",
		"Description": "AutoZone, Inc."
	}, {
		"Symbol": "AZPN",
		"Description": "Aspen Technology Cmn"
	}, {
		"Symbol": "AZRE",
		"Description": "Azure Power Global Limited"
	}, {
		"Symbol": "AZRX",
		"Description": "Azurrx Biopharma Inc"
	}, {
		"Symbol": "AZZ",
		"Description": "AZZ Inc."
	}, {
		"Symbol": "B",
		"Description": "Barnes Group, Inc."
	}, {
		"Symbol": "BA",
		"Description": "Boeing Company"
	}, {
		"Symbol": "BAA",
		"Description": "BANRO CORPORATION"
	}, {
		"Symbol": "BABA",
		"Description": "Alibaba Group Holding Limited"
	}, {
		"Symbol": "BABY",
		"Description": "Natus Medical Inc"
	}, {
		"Symbol": "BAC",
		"Description": "Bank of America Corporation"
	}, {
		"Symbol": "BAC.WS.A",
		"Description": "Bank of America Corporation"
	}, {
		"Symbol": "BAC.WS.B",
		"Description": "Bank of America Corporation"
	}, {
		"Symbol": "BAC^A",
		"Description": "Bank of America Corporation"
	}, {
		"Symbol": "BAC^C",
		"Description": "Bank of America Corporation"
	}, {
		"Symbol": "BAC^D",
		"Description": "Bank of America Corporation"
	}, {
		"Symbol": "BAC^E",
		"Description": "Bank of America Corporation"
	}, {
		"Symbol": "BAC^I",
		"Description": "Bank of America Corporation"
	}, {
		"Symbol": "BAC^L",
		"Description": "Bank of America Corporation"
	}, {
		"Symbol": "BAC^W",
		"Description": "Bank of America Corporation"
	}, {
		"Symbol": "BAC^Y",
		"Description": "Bank of America Corporation"
	}, {
		"Symbol": "BAF",
		"Description": "BlackRock Income Investment Quality Trust"
	}, {
		"Symbol": "BAH",
		"Description": "Booz Allen Hamilton Holding Corporation"
	}, {
		"Symbol": "BAK",
		"Description": "Braskem S.A."
	}, {
		"Symbol": "BAM",
		"Description": "Brookfield Asset Management Inc"
	}, {
		"Symbol": "BANC",
		"Description": "Banc of California, Inc."
	}, {
		"Symbol": "BANC^C",
		"Description": "Banc of California, Inc."
	}, {
		"Symbol": "BANC^D",
		"Description": "Banc of California, Inc."
	}, {
		"Symbol": "BANC^E",
		"Description": "Banc of California, Inc."
	}, {
		"Symbol": "BANF",
		"Description": "Bancfirst Corp"
	}, {
		"Symbol": "BANFP",
		"Description": "Bfc Capital Trust II"
	}, {
		"Symbol": "BANR",
		"Description": "Banner Corporation"
	}, {
		"Symbol": "BANX",
		"Description": "Stonecastle Fncl Cp"
	}, {
		"Symbol": "BAP",
		"Description": "Credicorp Ltd."
	}, {
		"Symbol": "BAS",
		"Description": "Basic Energy Services, Inc."
	}, {
		"Symbol": "BASI",
		"Description": "Bioanalytical Syst"
	}, {
		"Symbol": "BATRA",
		"Description": "Liberty Braves CS A"
	}, {
		"Symbol": "BATRK",
		"Description": "Liberty Braves CS C"
	}, {
		"Symbol": "BAX",
		"Description": "Baxter International Inc."
	}, {
		"Symbol": "BBBY",
		"Description": "Bed Bath & Beyond"
	}, {
		"Symbol": "BBC",
		"Description": "Bioshrs Biotec Cl TR"
	}, {
		"Symbol": "BBD",
		"Description": "Banco Bradesco Sa"
	}, {
		"Symbol": "BBDO",
		"Description": "Banco Bradesco Sa"
	}, {
		"Symbol": "BBF",
		"Description": "BlackRock Municipal Income Investment Trust"
	}, {
		"Symbol": "BBG",
		"Description": "Bill Barrett Corporation"
	}, {
		"Symbol": "BBGI",
		"Description": "Beasley Brdcst Gr"
	}, {
		"Symbol": "BBH",
		"Description": "Vaneck Vectors Biote"
	}, {
		"Symbol": "BBK",
		"Description": "Blackrock Municipal Bond Trust"
	}, {
		"Symbol": "BBL",
		"Description": "BHP Billiton plc"
	}, {
		"Symbol": "BBN",
		"Description": "BalckRock Taxable Municipal Bond Trust"
	}, {
		"Symbol": "BBOX",
		"Description": "Black Box Cp"
	}, {
		"Symbol": "BBP",
		"Description": "Bioshrs Biotech Prod"
	}, {
		"Symbol": "BBRG",
		"Description": "Bravo Brio Restauran"
	}, {
		"Symbol": "BBRY",
		"Description": "Blackberry Limited"
	}, {
		"Symbol": "BBSI",
		"Description": "Barrett Business S"
	}, {
		"Symbol": "BBT",
		"Description": "BB&T Corporation"
	}, {
		"Symbol": "BBT^D",
		"Description": "BB&T Corporation"
	}, {
		"Symbol": "BBT^E",
		"Description": "BB&T Corporation"
	}, {
		"Symbol": "BBT^F",
		"Description": "BB&T Corporation"
	}, {
		"Symbol": "BBT^G",
		"Description": "BB&T Corporation"
	}, {
		"Symbol": "BBT^H",
		"Description": "BB&T Corporation"
	}, {
		"Symbol": "BBU",
		"Description": "Brookfield Business Partners L.P."
	}, {
		"Symbol": "BBVA",
		"Description": "Banco Bilbao Viscaya Argentaria S.A."
	}, {
		"Symbol": "BBW",
		"Description": "Build-A-Bear Workshop, Inc."
	}, {
		"Symbol": "BBY",
		"Description": "Best Buy Co., Inc."
	}, {
		"Symbol": "BC",
		"Description": "Brunswick Corporation"
	}, {
		"Symbol": "BCBP",
		"Description": "Bcb Bancorp Inc"
	}, {
		"Symbol": "BCC",
		"Description": "Boise Cascade, L.L.C."
	}, {
		"Symbol": "BCE",
		"Description": "BCE, Inc."
	}, {
		"Symbol": "BCEI",
		"Description": "Bonanza Creek Energy, Inc."
	}, {
		"Symbol": "BCH",
		"Description": "Banco De Chile"
	}, {
		"Symbol": "BCLI",
		"Description": "Brainstorm Cell Cmn"
	}, {
		"Symbol": "BCO",
		"Description": "Brinks Company "
	}, {
		"Symbol": "BCOM",
		"Description": "B Communications Ltd"
	}, {
		"Symbol": "BCOR",
		"Description": "Blucora Inc Cmn"
	}, {
		"Symbol": "BCOV",
		"Description": "Brightcove Inc"
	}, {
		"Symbol": "BCPC",
		"Description": "Balchem Cp"
	}, {
		"Symbol": "BCR",
		"Description": "C.R. Bard, Inc."
	}, {
		"Symbol": "BCRH",
		"Description": "Blue Capital Reinsurance Holdings Ltd."
	}, {
		"Symbol": "BCRX",
		"Description": "Biocryst Pharma Inc"
	}, {
		"Symbol": "BCS",
		"Description": "Barclays PLC"
	}, {
		"Symbol": "BCS^D",
		"Description": "Barclays PLC"
	}, {
		"Symbol": "BCTF",
		"Description": "Bancorp 34 Inc"
	}, {
		"Symbol": "BCV",
		"Description": "Bancroft Fund Limited"
	}, {
		"Symbol": "BCV^A",
		"Description": "Bancroft Fund Limited"
	}, {
		"Symbol": "BCX",
		"Description": "BlackRock Resources"
	}, {
		"Symbol": "BDC",
		"Description": "Belden Inc"
	}, {
		"Symbol": "BDC^B",
		"Description": "Belden Inc"
	}, {
		"Symbol": "BDE",
		"Description": "Black Diamond Inc"
	}, {
		"Symbol": "BDGE",
		"Description": "Bridge Bancorp Inc"
	}, {
		"Symbol": "BDJ",
		"Description": "Blackrock Enhanced Equity Dividend Trust"
	}, {
		"Symbol": "BDL",
		"Description": "Flanigans Enterprises, Inc."
	}, {
		"Symbol": "BDN",
		"Description": "Brandywine Realty Trust"
	}, {
		"Symbol": "BDN^E",
		"Description": "Brandywine Realty Tr"
	}, {
		"Symbol": "BDR",
		"Description": "Blonder Tongue Laboratories, Inc."
	}, {
		"Symbol": "BDSI",
		"Description": "Biodelivery Sci Intl"
	}, {
		"Symbol": "BDX",
		"Description": "Becton, Dickinson and Company"
	}, {
		"Symbol": "BEAT",
		"Description": "Biotelemetry Inc"
	}, {
		"Symbol": "BEAV",
		"Description": "BE Aerospace Inc"
	}, {
		"Symbol": "BEBE",
		"Description": "Bebe Stores Inc"
	}, {
		"Symbol": "BECN",
		"Description": "Beacon Roofing Suppl"
	}, {
		"Symbol": "BEL",
		"Description": "Belmond Ltd."
	}, {
		"Symbol": "BELFA",
		"Description": "Bel Fuse Cl A"
	}, {
		"Symbol": "BELFB",
		"Description": "Bel Fuse Inc Cl B"
	}, {
		"Symbol": "BEN",
		"Description": "Franklin Resources, Inc."
	}, {
		"Symbol": "BEP",
		"Description": "Brookfield Renewable Partners L.P."
	}, {
		"Symbol": "BERY",
		"Description": "BPC Acquisition Corp"
	}, {
		"Symbol": "BETR",
		"Description": "Amplify Snack Brands, inc."
	}, {
		"Symbol": "BF.A",
		"Description": "Brown Forman Corporation"
	}, {
		"Symbol": "BF.B",
		"Description": "Brown Forman Corporation"
	}, {
		"Symbol": "BFAM",
		"Description": "Bright Horizons Family Solutions Inc."
	}, {
		"Symbol": "BFIN",
		"Description": "Bankfinancial Corpor"
	}, {
		"Symbol": "BFIT",
		"Description": "Glbl X Hlth Well ETF"
	}, {
		"Symbol": "BFK",
		"Description": "BlackRock Municipal Income Trust"
	}, {
		"Symbol": "BFO",
		"Description": "Blackrock Florida Municipal 2020 Term Trust"
	}, {
		"Symbol": "BFR",
		"Description": "BBVA Banco Frances S.A."
	}, {
		"Symbol": "BFS",
		"Description": "Saul Centers, Inc."
	}, {
		"Symbol": "BFS^C",
		"Description": "Saul Centers, Inc."
	}, {
		"Symbol": "BFY",
		"Description": "BlackRock New York Municipal Income Trust II"
	}, {
		"Symbol": "BFZ",
		"Description": "BlackRock California Municipal Income Trust"
	}, {
		"Symbol": "BG",
		"Description": "Bunge Limited"
	}, {
		"Symbol": "BGB",
		"Description": "Blackstone / GSO Strategic Credit Fund"
	}, {
		"Symbol": "BGC",
		"Description": "General Cable Corporation"
	}, {
		"Symbol": "BGCA",
		"Description": "BGC Partners, Inc."
	}, {
		"Symbol": "BGCP",
		"Description": "Bgc Partners Cl A"
	}, {
		"Symbol": "BGE^B",
		"Description": "Baltimore Gas & Electric Company"
	}, {
		"Symbol": "BGFV",
		"Description": "Big 5 Sporting"
	}, {
		"Symbol": "BGG",
		"Description": "Briggs & Stratton Corporation"
	}, {
		"Symbol": "BGH",
		"Description": "Babson Global Short Duration High Yield Fund"
	}, {
		"Symbol": "BGI",
		"Description": "Birks Group Inc."
	}, {
		"Symbol": "BGNE",
		"Description": "Beigene Ltd. Ads"
	}, {
		"Symbol": "BGR",
		"Description": "BlackRock Energy and Resources Trust"
	}, {
		"Symbol": "BGS",
		"Description": "B&G Foods, Inc."
	}, {
		"Symbol": "BGSF",
		"Description": "BG Staffing Inc"
	}, {
		"Symbol": "BGT",
		"Description": "Blackrock Global"
	}, {
		"Symbol": "BGX",
		"Description": "Blackstone GSO Long Short Credit Income Fund"
	}, {
		"Symbol": "BGY",
		"Description": "BLACKROCK INTERNATIONAL, LTD."
	}, {
		"Symbol": "BH",
		"Description": "Biglari Holdings Inc."
	}, {
		"Symbol": "BHAC",
		"Description": "Barington/Hilco Acq"
	}, {
		"Symbol": "BHACR",
		"Description": "Barington/Hilco Rgts"
	}, {
		"Symbol": "BHACU",
		"Description": "Barington/Hilco Uts"
	}, {
		"Symbol": "BHACW",
		"Description": "Barington/Hilco Wts"
	}, {
		"Symbol": "BHB",
		"Description": "Bar Harbor Bankshares, Inc."
	}, {
		"Symbol": "BHBK",
		"Description": "Blue Hills Bancorp"
	}, {
		"Symbol": "BHE",
		"Description": "Benchmark Electronics, Inc."
	}, {
		"Symbol": "BHI",
		"Description": "Baker Hughes Incorporated"
	}, {
		"Symbol": "BHK",
		"Description": "Blackrock Core Bond Trust"
	}, {
		"Symbol": "BHL",
		"Description": "Blackrock Defined Opportunity Credit Trust"
	}, {
		"Symbol": "BHLB",
		"Description": "Berkshire Hills Bancorp, Inc."
	}, {
		"Symbol": "BHP",
		"Description": "BHP Billiton Limited"
	}, {
		"Symbol": "BHV",
		"Description": "BlackRock Virginia Municipal Bond Trust"
	}, {
		"Symbol": "BIB",
		"Description": "Proshares Ultra Nasdaq Biotech"
	}, {
		"Symbol": "BICK",
		"Description": "First Trust BICK Ind"
	}, {
		"Symbol": "BID",
		"Description": "Sothebys"
	}, {
		"Symbol": "BIDU",
		"Description": "Baidu Inc"
	}, {
		"Symbol": "BIF",
		"Description": "USLIFE Income Fund, Inc."
	}, {
		"Symbol": "BIG",
		"Description": "Big Lots, Inc."
	}, {
		"Symbol": "BIIB",
		"Description": "Biogen Inc Cmn"
	}, {
		"Symbol": "BIIBV",
		"Description": "Biogen Inc."
	}, {
		"Symbol": "BIO",
		"Description": "Bio-Rad Laboratories, Inc."
	}, {
		"Symbol": "BIO.B",
		"Description": "Bio-Rad Laboratories, Inc."
	}, {
		"Symbol": "BIOA",
		"Description": "BioAmber Inc."
	}, {
		"Symbol": "BIOA.WS",
		"Description": "BioAmber Inc."
	}, {
		"Symbol": "BIOC",
		"Description": "Biocept Inc"
	}, {
		"Symbol": "BIOL",
		"Description": "Biolase Inc Cmn"
	}, {
		"Symbol": "BIOP",
		"Description": "Bioptix Inc."
	}, {
		"Symbol": "BIOS",
		"Description": "Bioscrip Inc"
	}, {
		"Symbol": "BIP",
		"Description": "Brookfield Infrastructure Partners LP"
	}, {
		"Symbol": "BIS",
		"Description": "Proshrs Ulsht Nq Bio"
	}, {
		"Symbol": "BIT",
		"Description": "BlackRock Multi-Sector Income Trust"
	}, {
		"Symbol": "BITA",
		"Description": "Bitauto Holdings Limited"
	}, {
		"Symbol": "BIVV",
		"Description": "Bioverativ Inc"
	}, {
		"Symbol": "BIVVV",
		"Description": "Bioverativ Inc"
	}, {
		"Symbol": "BJRI",
		"Description": "Bj's Restaurants Inc"
	}, {
		"Symbol": "BJZ",
		"Description": "Blackrock California Municipal 2018 Term Trust"
	}, {
		"Symbol": "BK",
		"Description": "Bank Of New York Mellon Corporation "
	}, {
		"Symbol": "BK^C",
		"Description": "Bank Of New York Mellon Corporation "
	}, {
		"Symbol": "BKCC",
		"Description": "Blackrock Cptl Invt"
	}, {
		"Symbol": "BKD",
		"Description": "Brookdale Senior Living Inc."
	}, {
		"Symbol": "BKE",
		"Description": "Buckle, Inc. "
	}, {
		"Symbol": "BKEP",
		"Description": "Blueknight Energy LP"
	}, {
		"Symbol": "BKEPP",
		"Description": "Blueknight Srs A Uts"
	}, {
		"Symbol": "BKFS",
		"Description": "Black Knight Financial Services, Inc."
	}, {
		"Symbol": "BKH",
		"Description": "Black Hills Corporation"
	}, {
		"Symbol": "BKHU",
		"Description": "Black Hills Corporation"
	}, {
		"Symbol": "BKJ",
		"Description": "Bancorp of New Jersey, Inc"
	}, {
		"Symbol": "BKK",
		"Description": "Blackrock Municipal 2020 Term Trust"
	}, {
		"Symbol": "BKMU",
		"Description": "Bank Mutual Corp"
	}, {
		"Symbol": "BKN",
		"Description": "BlackRock Investment Quality Municipal Trust Inc. "
	}, {
		"Symbol": "BKS",
		"Description": "Barnes & Noble, Inc."
	}, {
		"Symbol": "BKSC",
		"Description": "Bank of So Car Cp"
	}, {
		"Symbol": "BKT",
		"Description": "BlackRock Income Trust Inc. "
	}, {
		"Symbol": "BKU",
		"Description": "BankUnited, Inc."
	}, {
		"Symbol": "BL",
		"Description": "Blackline Inc"
	}, {
		"Symbol": "BLBD",
		"Description": "Blue Bird Corp"
	}, {
		"Symbol": "BLCM",
		"Description": "Bellicum Pharma Comm"
	}, {
		"Symbol": "BLD",
		"Description": "TopBuild Corp."
	}, {
		"Symbol": "BLDP",
		"Description": "Ballard Power Sys"
	}, {
		"Symbol": "BLDR",
		"Description": "Builders Firstsource"
	}, {
		"Symbol": "BLE",
		"Description": "BlackRock Municipal Income Trust II"
	}, {
		"Symbol": "BLFS",
		"Description": "Biolife Solutions Cmn"
	}, {
		"Symbol": "BLH",
		"Description": "Blackrock New York Municipal 2018 Term Trust"
	}, {
		"Symbol": "BLIN",
		"Description": "Bridgeline Digital"
	}, {
		"Symbol": "BLJ",
		"Description": "Blackrock New Jersey Municipal Bond Trust"
	}, {
		"Symbol": "BLK",
		"Description": "BlackRock, Inc."
	}, {
		"Symbol": "BLKB",
		"Description": "Blackbaud Inc"
	}, {
		"Symbol": "BLL",
		"Description": "Ball Corporation"
	}, {
		"Symbol": "BLMN",
		"Description": "Bloomin' Brands Inc"
	}, {
		"Symbol": "BLMT",
		"Description": "Bsb Bancorp Inc"
	}, {
		"Symbol": "BLPH",
		"Description": "Bellerophon Ther Com"
	}, {
		"Symbol": "BLRX",
		"Description": "Biolinerx Ltd"
	}, {
		"Symbol": "BLUE",
		"Description": "Bluebird Bio Cmn"
	}, {
		"Symbol": "BLVD",
		"Description": "Boulevard AC Cm ST A"
	}, {
		"Symbol": "BLVDU",
		"Description": "Boulevard Acqu Unit"
	}, {
		"Symbol": "BLVDW",
		"Description": "Boulevard Acquisi Wt"
	}, {
		"Symbol": "BLW",
		"Description": "Citigroup Inc."
	}, {
		"Symbol": "BLX",
		"Description": "Banco Latinoamericano de Comercio Exterior, S.A."
	}, {
		"Symbol": "BMA",
		"Description": "Macro Bank Inc."
	}, {
		"Symbol": "BMCH",
		"Description": "Bmc Stock Holdings"
	}, {
		"Symbol": "BME",
		"Description": "Blackrock Health Sciences Trust"
	}, {
		"Symbol": "BMI",
		"Description": "Badger Meter, Inc."
	}, {
		"Symbol": "BML^G",
		"Description": "Bank of America Corporation"
	}, {
		"Symbol": "BML^H",
		"Description": "Bank of America Corporation"
	}, {
		"Symbol": "BML^I",
		"Description": "Bank of America Corporation"
	}, {
		"Symbol": "BML^J",
		"Description": "Bank of America Corporation"
	}, {
		"Symbol": "BML^L",
		"Description": "Bank of America Corporation"
	}, {
		"Symbol": "BMLA",
		"Description": "Recon Bullmark Latam"
	}, {
		"Symbol": "BMLP",
		"Description": "Bank of Montreal BMO Elkhorn DWA MLP Select Inde"
	}, {
		"Symbol": "BMO",
		"Description": "Bank Of Montreal"
	}, {
		"Symbol": "BMRA",
		"Description": "Biomerica Inc"
	}, {
		"Symbol": "BMRC",
		"Description": "Bank of Marin Bancrp"
	}, {
		"Symbol": "BMRN",
		"Description": "Biomarin Pharmaceut"
	}, {
		"Symbol": "BMS",
		"Description": "Bemis Company, Inc."
	}, {
		"Symbol": "BMTC",
		"Description": "Bryn Mawr Bank Corp"
	}, {
		"Symbol": "BMY",
		"Description": "Bristol-Myers Squibb Company"
	}, {
		"Symbol": "BNCL",
		"Description": "Beneficial Bancorp"
	}, {
		"Symbol": "BNCN",
		"Description": "BNC Bancorp Inc"
	}, {
		"Symbol": "BNDX",
		"Description": "Vanguard Tl Intl Bnd"
	}, {
		"Symbol": "BNED",
		"Description": "Barnes & Noble Education, Inc"
	}, {
		"Symbol": "BNFT",
		"Description": "Benefitfocus Cmn"
	}, {
		"Symbol": "BNJ",
		"Description": "BlackRock New Jersey Municipal Income Trust"
	}, {
		"Symbol": "BNS",
		"Description": "Bank of Nova Scotia "
	}, {
		"Symbol": "BNSO",
		"Description": "Bonso Elec Intl In"
	}, {
		"Symbol": "BNTC",
		"Description": "Benitec Biopharm Ads"
	}, {
		"Symbol": "BNTCW",
		"Description": "Benitec Biopharm Wrt"
	}, {
		"Symbol": "BNY",
		"Description": "BlackRock New York Investment Quality Municipal Trust Inc. Th"
	}, {
		"Symbol": "BOBE",
		"Description": "Bob Evans Farms"
	}, {
		"Symbol": "BOCH",
		"Description": "Bank of Commerce Hld"
	}, {
		"Symbol": "BOE",
		"Description": "Blackrock Global"
	}, {
		"Symbol": "BOFI",
		"Description": "Bofi Holding Inc"
	}, {
		"Symbol": "BOFIL",
		"Description": "Bofi Hld Sub Not"
	}, {
		"Symbol": "BOH",
		"Description": "Bank of Hawaii Corporation"
	}, {
		"Symbol": "BOJA",
		"Description": "Bojangles Inc CS"
	}, {
		"Symbol": "BOKF",
		"Description": "Bok Financial Corp"
	}, {
		"Symbol": "BOKFL",
		"Description": "Bok Financial Corporation"
	}, {
		"Symbol": "BOLD",
		"Description": "Audentes Therapeutics Inc Cmn"
	}, {
		"Symbol": "BONT",
		"Description": "Bon Ton Stores "
	}, {
		"Symbol": "BOOM",
		"Description": "Dynamic Materials"
	}, {
		"Symbol": "BOOT",
		"Description": "Boot Barn Holdings, Inc."
	}, {
		"Symbol": "BORN",
		"Description": "China New Borun Corporation"
	}, {
		"Symbol": "BOSC",
		"Description": "Bos Better Online"
	}, {
		"Symbol": "BOTJ",
		"Description": "Bank of  Jame Fnl"
	}, {
		"Symbol": "BOTZ",
		"Description": "Global X Robotics & Artificial Intel Thmtc ETF"
	}, {
		"Symbol": "BOX",
		"Description": "Box, Inc."
	}, {
		"Symbol": "BOXC",
		"Description": "Brookfield Canada Office Properties"
	}, {
		"Symbol": "BP",
		"Description": "BP p.l.c."
	}, {
		"Symbol": "BPFH",
		"Description": "Boston Pvt Finl Hldg"
	}, {
		"Symbol": "BPFHP",
		"Description": "Boston Private Dep S"
	}, {
		"Symbol": "BPFHW",
		"Description": "Boston Private Wts"
	}, {
		"Symbol": "BPI",
		"Description": "Bridgepoint Education, Inc."
	}, {
		"Symbol": "BPK",
		"Description": "Blackrock Municipal 2018 Term Trust"
	}, {
		"Symbol": "BPL",
		"Description": "Buckeye Partners L.P."
	}, {
		"Symbol": "BPMC",
		"Description": "Blueprint Medi Cm ST"
	}, {
		"Symbol": "BPMX",
		"Description": "BioPharmX Corporation"
	}, {
		"Symbol": "BPOP",
		"Description": "Popular Inc"
	}, {
		"Symbol": "BPOPM",
		"Description": "Popular Inc Trust II"
	}, {
		"Symbol": "BPOPN",
		"Description": "Popular Inc Trust I"
	}, {
		"Symbol": "BPT",
		"Description": "BP Prudhoe Bay Royalty Trust"
	}, {
		"Symbol": "BPTH",
		"Description": "Bio-Path Holdings"
	}, {
		"Symbol": "BPY",
		"Description": "Brookfield Property Partners L.P."
	}, {
		"Symbol": "BQH",
		"Description": "Blackrock New York Municipal Bond Trust"
	}, {
		"Symbol": "BR",
		"Description": "Broadridge Financial Solutions, Inc."
	}, {
		"Symbol": "BRC",
		"Description": "Brady Corporation"
	}, {
		"Symbol": "BRCD",
		"Description": "Brocade Comm Sys"
	}, {
		"Symbol": "BREW",
		"Description": "Craft Brew Alliance"
	}, {
		"Symbol": "BRFS",
		"Description": "BRF S.A."
	}, {
		"Symbol": "BRG",
		"Description": "Bluerock Residential Growth REIT, Inc."
	}, {
		"Symbol": "BRG^A",
		"Description": "Bluerock Residential Growth REIT, Inc."
	}, {
		"Symbol": "BRG^C",
		"Description": "Bluerock Residential Growth REIT, Inc."
	}, {
		"Symbol": "BRG^D",
		"Description": "Bluerock Residential Growth REIT, Inc."
	}, {
		"Symbol": "BRID",
		"Description": "Bridgford Foods Cp"
	}, {
		"Symbol": "BRK.A",
		"Description": "Berkshire Hathaway Inc."
	}, {
		"Symbol": "BRK.B",
		"Description": "Berkshire Hathaway Inc."
	}, {
		"Symbol": "BRKL",
		"Description": "Brookline Bancorp"
	}, {
		"Symbol": "BRKR",
		"Description": "Bruker Corporation"
	}, {
		"Symbol": "BRKS",
		"Description": "Brooks Automation"
	}, {
		"Symbol": "BRN",
		"Description": "Barnwell Industries, Inc."
	}, {
		"Symbol": "BRO",
		"Description": "Brown & Brown, Inc."
	}, {
		"Symbol": "BRS",
		"Description": "Bristow Group Inc"
	}, {
		"Symbol": "BRSS",
		"Description": "Global Brass and Copper Holdings, Inc."
	}, {
		"Symbol": "BRT",
		"Description": "BRT Realty Trust"
	}, {
		"Symbol": "BRX",
		"Description": "Brixmor Property Group Inc."
	}, {
		"Symbol": "BSAC",
		"Description": "Banco Santander Chile"
	}, {
		"Symbol": "BSBR",
		"Description": "Banco Santander Brasil SA"
	}, {
		"Symbol": "BSD",
		"Description": "BlackRock Strategic Municipal Trust Inc. "
	}, {
		"Symbol": "BSE",
		"Description": "Blackrock New York Municipal Income Quality Trust"
	}, {
		"Symbol": "BSET",
		"Description": "Bassett Furniture"
	}, {
		"Symbol": "BSF",
		"Description": "Bear State Fin Inc"
	}, {
		"Symbol": "BSFT",
		"Description": "Broadsoft Inc"
	}, {
		"Symbol": "BSL",
		"Description": "Blackstone GSO Senior Floating Rate Term Fund"
	}, {
		"Symbol": "BSM",
		"Description": "Black Stone Minerals, L.P."
	}, {
		"Symbol": "BSMX",
		"Description": "Grupo Financiero Santander Mexico S.A. B. de C.V."
	}, {
		"Symbol": "BSPM",
		"Description": "Biostar Pharmaceutic"
	}, {
		"Symbol": "BSQR",
		"Description": "Bsquare Corp"
	}, {
		"Symbol": "BSRR",
		"Description": "Sierra Bancorp"
	}, {
		"Symbol": "BST",
		"Description": "BlackRock Science and Technology Trust"
	}, {
		"Symbol": "BSTC",
		"Description": "Biospecifics Tech Cp"
	}, {
		"Symbol": "BSTG",
		"Description": "Biostage Cmn Stk"
	}, {
		"Symbol": "BSX",
		"Description": "Boston Scientific Corporation"
	}, {
		"Symbol": "BT",
		"Description": "BT Group plc"
	}, {
		"Symbol": "BTA",
		"Description": "BlackRock Long-Term Municipal Advantage Trust"
	}, {
		"Symbol": "BTE",
		"Description": "Baytex Energy Corp"
	}, {
		"Symbol": "BTEC",
		"Description": "Banctec Inc"
	}, {
		"Symbol": "BTG",
		"Description": "B2Gold Corp"
	}, {
		"Symbol": "BTI",
		"Description": "British American Tobacco p.l.c."
	}, {
		"Symbol": "BTN",
		"Description": "Ballantyne Strong, Inc"
	}, {
		"Symbol": "BTO",
		"Description": "John Hancock Financial Opportunities Fund"
	}, {
		"Symbol": "BTT",
		"Description": "BlackRock Municipal Target Term Trust Inc. "
	}, {
		"Symbol": "BTX",
		"Description": "BioTime, Inc."
	}, {
		"Symbol": "BTX.WS",
		"Description": "BioTime, Inc."
	}, {
		"Symbol": "BTZ",
		"Description": "BlackRock Credit Allocation Income Trust"
	}, {
		"Symbol": "BUD",
		"Description": "Anheuser-Busch Inbev SA"
	}, {
		"Symbol": "BUFF",
		"Description": "Blue Buffalo Pet Cmn"
	}, {
		"Symbol": "BUI",
		"Description": "BlackRock Utility and Infrastructure Trust"
	}, {
		"Symbol": "BUR",
		"Description": "Burcon Nutrascience"
	}, {
		"Symbol": "BURL",
		"Description": "Burlington Stores, Inc."
	}, {
		"Symbol": "BUSE",
		"Description": "First Busey Corp"
	}, {
		"Symbol": "BV",
		"Description": "Bazaarvoice Inc"
	}, {
		"Symbol": "BVN",
		"Description": "Buenaventura Mining Company Inc."
	}, {
		"Symbol": "BVSN",
		"Description": "Broadvision Inc"
	}, {
		"Symbol": "BVX",
		"Description": "Bovie Medical Corporation"
	}, {
		"Symbol": "BVXV",
		"Description": "Biondvax Pharma Ads"
	}, {
		"Symbol": "BVXVW",
		"Description": "Biondvax Pharma Wt"
	}, {
		"Symbol": "BW",
		"Description": "Babcock"
	}, {
		"Symbol": "BWA",
		"Description": "BorgWarner Inc."
	}, {
		"Symbol": "BWEN",
		"Description": "Broadwind Energy Inc"
	}, {
		"Symbol": "BWFG",
		"Description": "Bankwell Financial"
	}, {
		"Symbol": "BWG",
		"Description": "Legg Mason BW Global Income Opportunities Fund Inc."
	}, {
		"Symbol": "BWINA",
		"Description": "Baldwin Lyons Cl A"
	}, {
		"Symbol": "BWINB",
		"Description": "Baldwin Lyons Cl B"
	}, {
		"Symbol": "BWL.A",
		"Description": "Bowl America, Inc."
	}, {
		"Symbol": "BWLD",
		"Description": "Buffalo Wild Wings"
	}, {
		"Symbol": "BWP",
		"Description": "Boardwalk Pipeline Partners L.P."
	}, {
		"Symbol": "BWXT",
		"Description": "BWX Technologies, Inc."
	}, {
		"Symbol": "BX",
		"Description": " Blackstone Group L.P."
	}, {
		"Symbol": "BXC",
		"Description": "BlueLinx Holdings Inc."
	}, {
		"Symbol": "BXE",
		"Description": "Bellatrix Exploration Ltd"
	}, {
		"Symbol": "BXMT",
		"Description": "Capital Trust, Inc."
	}, {
		"Symbol": "BXMX",
		"Description": "Nuveen S&P 500 Buy-Write Income Fund"
	}, {
		"Symbol": "BXP",
		"Description": "Boston Properties, Inc."
	}, {
		"Symbol": "BXP^B",
		"Description": "Boston Properties, Inc."
	}, {
		"Symbol": "BXS",
		"Description": "BancorpSouth, Inc."
	}, {
		"Symbol": "BYBK",
		"Description": "Bay Bancorp Inc"
	}, {
		"Symbol": "BYD",
		"Description": "Boyd Gaming Corporation"
	}, {
		"Symbol": "BYFC",
		"Description": "Broadway Fin Cp"
	}, {
		"Symbol": "BYM",
		"Description": "Blackrock Municipal Income Quality Trust"
	}, {
		"Symbol": "BZH",
		"Description": "Beazer Homes USA, Inc."
	}, {
		"Symbol": "BZM",
		"Description": "BlackRock Maryland Municipal Bond Trust"
	}, {
		"Symbol": "BZUN",
		"Description": "Baozun Inc Ads"
	}, {
		"Symbol": "C",
		"Description": "Citigroup Inc."
	}, {
		"Symbol": "C.WS.A",
		"Description": "Citigroup Inc."
	}, {
		"Symbol": "C^C",
		"Description": "Citigroup Inc."
	}, {
		"Symbol": "C^J",
		"Description": "Citigroup Inc."
	}, {
		"Symbol": "C^K",
		"Description": "Citigroup Inc."
	}, {
		"Symbol": "C^L",
		"Description": "Citigroup Inc."
	}, {
		"Symbol": "C^N",
		"Description": "Citigroup Inc."
	}, {
		"Symbol": "C^P",
		"Description": "Citigroup Inc."
	}, {
		"Symbol": "C^S",
		"Description": "Citigroup Inc."
	}, {
		"Symbol": "CA",
		"Description": "CA Inc"
	}, {
		"Symbol": "CAA",
		"Description": "CalAtlantic Group, Inc."
	}, {
		"Symbol": "CAAS",
		"Description": "China Automotive Sys"
	}, {
		"Symbol": "CAB",
		"Description": "Cabelas Inc"
	}, {
		"Symbol": "CABO",
		"Description": "Cable One, Inc."
	}, {
		"Symbol": "CAC",
		"Description": "Camden Natl Cp"
	}, {
		"Symbol": "CACB",
		"Description": "Cascade Bancorp"
	}, {
		"Symbol": "CACC",
		"Description": "Credit Acceptance"
	}, {
		"Symbol": "CACI",
		"Description": "CACI International, Inc."
	}, {
		"Symbol": "CACQ",
		"Description": "Caesars Acquisition"
	}, {
		"Symbol": "CADC",
		"Description": "China Advanced Const"
	}, {
		"Symbol": "CAE",
		"Description": "CAE Inc"
	}, {
		"Symbol": "CAF",
		"Description": "Morgan Stanley China A Share Fund Inc."
	}, {
		"Symbol": "CAFD",
		"Description": "8Point3 Energy Cl A"
	}, {
		"Symbol": "CAG",
		"Description": "ConAgra Brands, Inc."
	}, {
		"Symbol": "CAH",
		"Description": "Cardinal Health, Inc."
	}, {
		"Symbol": "CAI",
		"Description": "CAI International, Inc."
	}, {
		"Symbol": "CAJ",
		"Description": "Canon, Inc."
	}, {
		"Symbol": "CAKE",
		"Description": "Cheesecake Fact"
	}, {
		"Symbol": "CAL",
		"Description": "Caleres, Inc."
	}, {
		"Symbol": "CALA",
		"Description": "Calithera Biosci Com"
	}, {
		"Symbol": "CALD",
		"Description": "Callidus Software"
	}, {
		"Symbol": "CALI",
		"Description": "China Auto Logistics"
	}, {
		"Symbol": "CALL",
		"Description": "Magicjack Vocaltec L"
	}, {
		"Symbol": "CALM",
		"Description": "Cal-Maine Foods In"
	}, {
		"Symbol": "CALX",
		"Description": "Calix, Inc"
	}, {
		"Symbol": "CAMP",
		"Description": "Calamp Corp"
	}, {
		"Symbol": "CAMT",
		"Description": "Camtek Ltd"
	}, {
		"Symbol": "CANF",
		"Description": "Can-Fite Biopharma Ltd"
	}, {
		"Symbol": "CAPL",
		"Description": "CrossAmerica Partners LP"
	}, {
		"Symbol": "CAPN",
		"Description": "Capnia Inc Cmn Stk"
	}, {
		"Symbol": "CAPNW",
		"Description": "Capnia Inc A Wrnt"
	}, {
		"Symbol": "CAPR",
		"Description": "Capricor Therap Cmn"
	}, {
		"Symbol": "CAPX",
		"Description": "Elkhorn S&P 500 Cap"
	}, {
		"Symbol": "CAR",
		"Description": "Avis Budget Group I"
	}, {
		"Symbol": "CARA",
		"Description": "Cara Therapeutics"
	}, {
		"Symbol": "CARB",
		"Description": "Carbonite Inc"
	}, {
		"Symbol": "CARO",
		"Description": "Carolina Finacl Cmn"
	}, {
		"Symbol": "CART",
		"Description": "Carolina Trust Bank"
	}, {
		"Symbol": "CARV",
		"Description": "Carver Bancorp"
	}, {
		"Symbol": "CARZ",
		"Description": "First Trust Nq Gbl Auto"
	}, {
		"Symbol": "CASC",
		"Description": "Cascadian Therapeutics Inc"
	}, {
		"Symbol": "CASH",
		"Description": "Meta Financial Grp"
	}, {
		"Symbol": "CASI",
		"Description": "Casi Phrmactcls Inc"
	}, {
		"Symbol": "CASM",
		"Description": "Cas Medical Sys Inc"
	}, {
		"Symbol": "CASS",
		"Description": "Cass Information Sys"
	}, {
		"Symbol": "CASY",
		"Description": "Casey's General Stor"
	}, {
		"Symbol": "CAT",
		"Description": "Caterpillar, Inc."
	}, {
		"Symbol": "CATB",
		"Description": "Catabasis Pharma Cmn"
	}, {
		"Symbol": "CATH",
		"Description": "Glbl X SP 500 Cth V"
	}, {
		"Symbol": "CATM",
		"Description": "Cardtronics Inc"
	}, {
		"Symbol": "CATO",
		"Description": "Cato Corporation "
	}, {
		"Symbol": "CATY",
		"Description": "Cathay Genl Bncp"
	}, {
		"Symbol": "CATYW",
		"Description": "Cathay General Banc"
	}, {
		"Symbol": "CAVM",
		"Description": "Cavium Inc"
	}, {
		"Symbol": "CAW",
		"Description": "CCA Industries, Inc."
	}, {
		"Symbol": "CB",
		"Description": "D/B/A Chubb Limited New"
	}, {
		"Symbol": "CBA",
		"Description": "ClearBridge American Energy MLP Fund Inc."
	}, {
		"Symbol": "CBAK",
		"Description": "China Bak Battery"
	}, {
		"Symbol": "CBAN",
		"Description": "Colony Bankcorp Inc"
	}, {
		"Symbol": "CBAY",
		"Description": "Cymabay Therapeutics"
	}, {
		"Symbol": "CBB",
		"Description": "Cincinnati Bell Inc"
	}, {
		"Symbol": "CBB^B",
		"Description": "Cincinnati Bell Inc"
	}, {
		"Symbol": "CBD",
		"Description": "Companhia Brasileira de Distribuicao"
	}, {
		"Symbol": "CBF",
		"Description": "Capital Bnk Fin Cl A"
	}, {
		"Symbol": "CBFV",
		"Description": "Cb Financial Svc Cmn"
	}, {
		"Symbol": "CBG",
		"Description": "CBRE Group, Inc."
	}, {
		"Symbol": "CBI",
		"Description": "Chicago Bridge & Iron Company N.V."
	}, {
		"Symbol": "CBIO",
		"Description": "Catalyst Bio Cmn"
	}, {
		"Symbol": "CBK",
		"Description": "Christopher & Banks Corporation"
	}, {
		"Symbol": "CBL",
		"Description": "CBL & Associates Properties, Inc."
	}, {
		"Symbol": "CBL^D",
		"Description": "CBL & Associates Properties, Inc."
	}, {
		"Symbol": "CBL^E",
		"Description": "CBL & Associates Properties, Inc."
	}, {
		"Symbol": "CBLI",
		"Description": "Cleveland Biolabs"
	}, {
		"Symbol": "CBM",
		"Description": "Cambrex Corporation"
	}, {
		"Symbol": "CBMG",
		"Description": "Cellular Biomedicine"
	}, {
		"Symbol": "CBMX",
		"Description": "Combimatrix Corp"
	}, {
		"Symbol": "CBMXW",
		"Description": "Combimatrix Corp Wt"
	}, {
		"Symbol": "CBO",
		"Description": "CBO Listing Market - NYSE - Networks A/E"
	}, {
		"Symbol": "CBOE",
		"Description": "CBOE Holdings Inc"
	}, {
		"Symbol": "CBPO",
		"Description": "China Biologic Produ"
	}, {
		"Symbol": "CBPX",
		"Description": "Continental Building Products, Inc."
	}, {
		"Symbol": "CBR",
		"Description": "Ciber, Inc."
	}, {
		"Symbol": "CBRL",
		"Description": "Cracker Barrel"
	}, {
		"Symbol": "CBS",
		"Description": "CBS Corporation"
	}, {
		"Symbol": "CBS.A",
		"Description": "CBS Corporation"
	}, {
		"Symbol": "CBSH",
		"Description": "Commerce Bancshares"
	}, {
		"Symbol": "CBSHP",
		"Description": "Commerce BNC B Dep"
	}, {
		"Symbol": "CBT",
		"Description": "Cabot Corporation"
	}, {
		"Symbol": "CBU",
		"Description": "Community Bank System, Inc."
	}, {
		"Symbol": "CBX",
		"Description": "CBX Listing Market NYSE Networks AE"
	}, {
		"Symbol": "CBZ",
		"Description": "CBIZ, Inc."
	}, {
		"Symbol": "CC",
		"Description": "Chemours Company "
	}, {
		"Symbol": "CCA",
		"Description": "MFS California Insured Municipal Trust"
	}, {
		"Symbol": "CCBG",
		"Description": "Capital City Bank Gr"
	}, {
		"Symbol": "CCC",
		"Description": "Calgon Carbon Corporation"
	}, {
		"Symbol": "CCCL",
		"Description": "China Ceramics Co"
	}, {
		"Symbol": "CCCR",
		"Description": "China Commercial Cre"
	}, {
		"Symbol": "CCD",
		"Description": "Calams Dy Cnv In Cmn"
	}, {
		"Symbol": "CCE",
		"Description": "Coca-Cola European Partners plc"
	}, {
		"Symbol": "CCF",
		"Description": "Chase Corporation"
	}, {
		"Symbol": "CCI",
		"Description": "Crown Castle International Corporation"
	}, {
		"Symbol": "CCIH",
		"Description": "Chinacache Hldgs ADR"
	}, {
		"Symbol": "CCJ",
		"Description": "Cameco Corporation"
	}, {
		"Symbol": "CCK",
		"Description": "Crown Holdings, Inc."
	}, {
		"Symbol": "CCL",
		"Description": "Carnival Corporation"
	}, {
		"Symbol": "CCLP",
		"Description": "Csi Compressco Cmn"
	}, {
		"Symbol": "CCM",
		"Description": "Concord Medical Services Holdings Limited"
	}, {
		"Symbol": "CCMP",
		"Description": "Cabot Microelectron"
	}, {
		"Symbol": "CCN",
		"Description": "Cardconnect Corp."
	}, {
		"Symbol": "CCNE",
		"Description": "Cnb Financial Corp"
	}, {
		"Symbol": "CCO",
		"Description": "Clear Channel Outdoor Holdings, Inc."
	}, {
		"Symbol": "CCOI",
		"Description": "Cogent Comm Hldgs"
	}, {
		"Symbol": "CCP",
		"Description": "Care Capital Properties, Inc."
	}, {
		"Symbol": "CCRC",
		"Description": "China Customer Ord"
	}, {
		"Symbol": "CCRN",
		"Description": "Cross Ctry Hlthcr"
	}, {
		"Symbol": "CCS",
		"Description": "Century Communities, Inc."
	}, {
		"Symbol": "CCU",
		"Description": "Compania Cervecerias Unidas, S.A."
	}, {
		"Symbol": "CCUR",
		"Description": "Concurrent Computer"
	}, {
		"Symbol": "CCV",
		"Description": "Comcast Corporation"
	}, {
		"Symbol": "CCXI",
		"Description": "Chemocentryx Inc"
	}, {
		"Symbol": "CCZ",
		"Description": "Comcast Corporation"
	}, {
		"Symbol": "CDC",
		"Description": "Victory Cemp US Eq I"
	}, {
		"Symbol": "CDE",
		"Description": "Coeur Mining, Inc."
	}, {
		"Symbol": "CDEV",
		"Description": "Centennial Resource Development Inc"
	}, {
		"Symbol": "CDEVW",
		"Description": "Centennial Resource Development Inc"
	}, {
		"Symbol": "CDI",
		"Description": "CDI Corporation"
	}, {
		"Symbol": "CDK",
		"Description": "Cdk Global Inc"
	}, {
		"Symbol": "CDL",
		"Description": "Victory Cemp US Larg"
	}, {
		"Symbol": "CDNA",
		"Description": "Caredx Inc Cmn"
	}, {
		"Symbol": "CDNS",
		"Description": "Cadence Design Sys"
	}, {
		"Symbol": "CDOR",
		"Description": "Condor Hospitality T"
	}, {
		"Symbol": "CDR",
		"Description": "Cedar Realty Trust, Inc."
	}, {
		"Symbol": "CDR^B",
		"Description": "Cedar Realty Trust, Inc."
	}, {
		"Symbol": "CDTI",
		"Description": "Clean Diesel Technol"
	}, {
		"Symbol": "CDTX",
		"Description": "Cidara Thera Cmn"
	}, {
		"Symbol": "CDW",
		"Description": "CDW Corporation"
	}, {
		"Symbol": "CDXC",
		"Description": "Chromadex Corp CS"
	}, {
		"Symbol": "CDXS",
		"Description": "Codexis Inc"
	}, {
		"Symbol": "CDZI",
		"Description": "Cadiz Inc"
	}, {
		"Symbol": "CE",
		"Description": "Celanese Corporation"
	}, {
		"Symbol": "CEA",
		"Description": "China Eastern Airlines Corporation Ltd."
	}, {
		"Symbol": "CEB",
		"Description": "CEB Inc."
	}, {
		"Symbol": "CECE",
		"Description": "C E C O Envir"
	}, {
		"Symbol": "CECO",
		"Description": "Career Education"
	}, {
		"Symbol": "CEE",
		"Description": "Central Europe, Russia and Turkey Fund, Inc. "
	}, {
		"Symbol": "CEF",
		"Description": "Central Fund of Canada Limited"
	}, {
		"Symbol": "CEI",
		"Description": "Camber Energy, Inc."
	}, {
		"Symbol": "CEL",
		"Description": "Cellcom Israel, Ltd."
	}, {
		"Symbol": "CELG",
		"Description": "Celgene Corp"
	}, {
		"Symbol": "CELGZ",
		"Description": "Celgene Cp Cvr"
	}, {
		"Symbol": "CELP",
		"Description": "Cypress Energy Partners, L.P."
	}, {
		"Symbol": "CEM",
		"Description": "ClearBridge Energy MLP Fund Inc."
	}, {
		"Symbol": "CEMI",
		"Description": "Chembio Diagnostics"
	}, {
		"Symbol": "CEMP",
		"Description": "Cempra Inc"
	}, {
		"Symbol": "CEN",
		"Description": "Center Coast MLP & Infrastructure Fund"
	}, {
		"Symbol": "CENT",
		"Description": "Central Garden"
	}, {
		"Symbol": "CENTA",
		"Description": "Central Garden & Pet"
	}, {
		"Symbol": "CENX",
		"Description": "Century Aluminum C"
	}, {
		"Symbol": "CEO",
		"Description": "CNOOC Limited"
	}, {
		"Symbol": "CEQP",
		"Description": "Crestwood Equity Partners LP"
	}, {
		"Symbol": "CERC",
		"Description": "Cerecor Inc Cmn Stk"
	}, {
		"Symbol": "CERCW",
		"Description": "Cerecor Inc Cl A Wt"
	}, {
		"Symbol": "CERCZ",
		"Description": "Cerecor Inc Cl B Wt"
	}, {
		"Symbol": "CERN",
		"Description": "Cerner Corp"
	}, {
		"Symbol": "CERS",
		"Description": "Cerus Corp"
	}, {
		"Symbol": "CERU",
		"Description": "Cerulean Pharma Cmn"
	}, {
		"Symbol": "CET",
		"Description": "Central Securities Corporation"
	}, {
		"Symbol": "CETC",
		"Description": "Hongli Clean Energy Technologies Corp."
	}, {
		"Symbol": "CETV",
		"Description": "Central EUR Med A"
	}, {
		"Symbol": "CETX",
		"Description": "Cemtrex Inc Cmn Stk"
	}, {
		"Symbol": "CEV",
		"Description": "Eaton Vance California Municipal Income Trust"
	}, {
		"Symbol": "CEVA",
		"Description": "Ceva Inc"
	}, {
		"Symbol": "CEZ",
		"Description": "Vctry Cemp EM Vlt Wt"
	}, {
		"Symbol": "CF",
		"Description": "CF Industries Holdings, Inc."
	}, {
		"Symbol": "CFA",
		"Description": "Victory Cemp US 500"
	}, {
		"Symbol": "CFBK",
		"Description": "Central Fed Cp"
	}, {
		"Symbol": "CFC^B",
		"Description": "Countrywide Financial Corporation"
	}, {
		"Symbol": "CFCB",
		"Description": "Centrue Financial Cmn"
	}, {
		"Symbol": "CFCO",
		"Description": "Cf Corp"
	}, {
		"Symbol": "CFCOU",
		"Description": "Cf Corporation Units"
	}, {
		"Symbol": "CFCOW",
		"Description": "Cf Corporation"
	}, {
		"Symbol": "CFFI",
		"Description": "C&F Financial Corp"
	}, {
		"Symbol": "CFFN",
		"Description": "Capitol Fed Finl Inc"
	}, {
		"Symbol": "CFG",
		"Description": "Citizens Financial Group, Inc."
	}, {
		"Symbol": "CFI",
		"Description": "Culp, Inc."
	}, {
		"Symbol": "CFMS",
		"Description": "Conformis Inc CS"
	}, {
		"Symbol": "CFNB",
		"Description": "Calif First National"
	}, {
		"Symbol": "CFNL",
		"Description": "Cardinal Fin Cp"
	}, {
		"Symbol": "CFO",
		"Description": "Victory Cemp Us500E"
	}, {
		"Symbol": "CFR",
		"Description": "Cullen/Frost Bankers, Inc."
	}, {
		"Symbol": "CFR^A",
		"Description": "Cullen/Frost Bankers, Inc."
	}, {
		"Symbol": "CFRX",
		"Description": "Contrafect Cmn"
	}, {
		"Symbol": "CFRXW",
		"Description": "Contrafect A Wrt"
	}, {
		"Symbol": "CFX",
		"Description": "Colfax Corporation"
	}, {
		"Symbol": "CG",
		"Description": " Carlyle Group"
	}, {
		"Symbol": "CGA",
		"Description": "China Green Agriculture, Inc."
	}, {
		"Symbol": "CGEN",
		"Description": "Compugen Ltd"
	}, {
		"Symbol": "CGG",
		"Description": "CGG"
	}, {
		"Symbol": "CGI",
		"Description": "Celadon Group, Inc."
	}, {
		"Symbol": "CGIX",
		"Description": "Cancer Genetics Inc"
	}, {
		"Symbol": "CGNT",
		"Description": "Cogentix Medical In"
	}, {
		"Symbol": "CGNX",
		"Description": "Cognex Cp"
	}, {
		"Symbol": "CGO",
		"Description": "Calamos Glb Ttl Rtn"
	}, {
		"Symbol": "CH",
		"Description": "Aberdeen Chile Fund, Inc."
	}, {
		"Symbol": "CHA",
		"Description": "China Telecom Corp Ltd"
	}, {
		"Symbol": "CHCI",
		"Description": "Comstock Hldgs Cos"
	}, {
		"Symbol": "CHCO",
		"Description": "City Holding Co"
	}, {
		"Symbol": "CHCT",
		"Description": "Community Healthcare Trust Incorporated"
	}, {
		"Symbol": "CHD",
		"Description": "Church & Dwight Company, Inc."
	}, {
		"Symbol": "CHDN",
		"Description": "Churchill Downs In"
	}, {
		"Symbol": "CHE",
		"Description": "Chemed Corp."
	}, {
		"Symbol": "CHEF",
		"Description": " Chefs Warehouse"
	}, {
		"Symbol": "CHEK",
		"Description": "Check-Cap Ltd. Ord"
	}, {
		"Symbol": "CHEKW",
		"Description": "Check-Cap Ltd A Wt"
	}, {
		"Symbol": "CHFC",
		"Description": "Chemical Financial"
	}, {
		"Symbol": "CHFN",
		"Description": "Charter Finl Corp"
	}, {
		"Symbol": "CHGG",
		"Description": "Chegg, Inc."
	}, {
		"Symbol": "CHH",
		"Description": "Choice Hotels International, Inc."
	}, {
		"Symbol": "CHI",
		"Description": "Calamos Cv Opp & Inc"
	}, {
		"Symbol": "CHK",
		"Description": "Chesapeake Energy Corporation"
	}, {
		"Symbol": "CHK^D",
		"Description": "Chesapeake Energy Corporation"
	}, {
		"Symbol": "CHKE",
		"Description": "Cherokee Inc"
	}, {
		"Symbol": "CHKP",
		"Description": "Check Point Software"
	}, {
		"Symbol": "CHKR",
		"Description": "Chesapeake Granite Wash Trust"
	}, {
		"Symbol": "CHL",
		"Description": "China Mobile Hong Kong Ltd."
	}, {
		"Symbol": "CHMA",
		"Description": "Chiasma Inc Cmn"
	}, {
		"Symbol": "CHMG",
		"Description": "Chemung Financial Cp"
	}, {
		"Symbol": "CHMI",
		"Description": "Cherry Hill Mortgage Investment Corporation"
	}, {
		"Symbol": "CHMT",
		"Description": "Chemtura Corp."
	}, {
		"Symbol": "CHN",
		"Description": "China Fund, Inc. "
	}, {
		"Symbol": "CHNR",
		"Description": "China Natural Res"
	}, {
		"Symbol": "CHRS",
		"Description": "Coherus Bio Cmn Stk"
	}, {
		"Symbol": "CHRW",
		"Description": "C.H. Robinson Ww"
	}, {
		"Symbol": "CHS",
		"Description": "Chicos FAS, Inc."
	}, {
		"Symbol": "CHSCL",
		"Description": "CHS B Cum Pfd Srs 4"
	}, {
		"Symbol": "CHSCM",
		"Description": "CHS Pfd Clb Ser3"
	}, {
		"Symbol": "CHSCN",
		"Description": "CHS Inc Pfd B Srs 2"
	}, {
		"Symbol": "CHSCO",
		"Description": "CHS Inc Cl B Pfd"
	}, {
		"Symbol": "CHSCP",
		"Description": "CHS Inc Cum Pfd"
	}, {
		"Symbol": "CHSP",
		"Description": "Chesapeake Lodging Trust"
	}, {
		"Symbol": "CHSP^A",
		"Description": "Chesapeake Lodging Trust"
	}, {
		"Symbol": "CHT",
		"Description": "Chunghwa Telecom Co., Ltd."
	}, {
		"Symbol": "CHTR",
		"Description": "Charter Communicatio"
	}, {
		"Symbol": "CHU",
		"Description": "China Unicom Hong Kong Ltd"
	}, {
		"Symbol": "CHUBA",
		"Description": "Commercehub Inc"
	}, {
		"Symbol": "CHUBK",
		"Description": "Commercehub Inc"
	}, {
		"Symbol": "CHUY",
		"Description": "Chuy's Holdings Inc"
	}, {
		"Symbol": "CHW",
		"Description": "Calamos Gbl Dyn Inc"
	}, {
		"Symbol": "CHY",
		"Description": "Calamos Cv & High In"
	}, {
		"Symbol": "CI",
		"Description": "Cigna Corporation"
	}, {
		"Symbol": "CIA",
		"Description": "Citizens, Inc."
	}, {
		"Symbol": "CIB",
		"Description": "BanColombia S.A."
	}, {
		"Symbol": "CIBR",
		"Description": "First TR Ndq Cybr ETF"
	}, {
		"Symbol": "CID",
		"Description": "Victory Cemp Interna"
	}, {
		"Symbol": "CIDM",
		"Description": "Cinedigm Corp"
	}, {
		"Symbol": "CIE",
		"Description": "Cobalt International Energy, Inc."
	}, {
		"Symbol": "CIEN",
		"Description": "Ciena Corporation"
	}, {
		"Symbol": "CIF",
		"Description": "Colonial Intermediate High Income Fund"
	}, {
		"Symbol": "CIG",
		"Description": "Comp En De Mn Cemig ADS"
	}, {
		"Symbol": "CIG.C",
		"Description": "Comp En De Mn Cemig ADS"
	}, {
		"Symbol": "CIGI",
		"Description": "Colliers Intl Grp In"
	}, {
		"Symbol": "CII",
		"Description": "Blackrock Capital and Income Strategies Fund Inc"
	}, {
		"Symbol": "CIK",
		"Description": "Credit Suisse Asset Management Income Fund, Inc."
	}, {
		"Symbol": "CIL",
		"Description": "Victory Cemp Intl Vo"
	}, {
		"Symbol": "CIM",
		"Description": "Chimera Investment Corporation"
	}, {
		"Symbol": "CIM^A",
		"Description": "Chimera Investment Corporation"
	}, {
		"Symbol": "CINF",
		"Description": "Cincinnati Financial"
	}, {
		"Symbol": "CINR",
		"Description": "Ciner Resources LP"
	}, {
		"Symbol": "CIO",
		"Description": "City Office REIT, Inc."
	}, {
		"Symbol": "CIO^A",
		"Description": "City Office REIT, Inc."
	}, {
		"Symbol": "CIR",
		"Description": "CIRCOR International, Inc."
	}, {
		"Symbol": "CIT",
		"Description": "CIT Group Inc DEL"
	}, {
		"Symbol": "CIVB",
		"Description": "Civista Bncshrs Cmn"
	}, {
		"Symbol": "CIVBP",
		"Description": "Civista Bancshrs Dep"
	}, {
		"Symbol": "CIVI",
		"Description": "Civitas Solutions, Inc."
	}, {
		"Symbol": "CIX",
		"Description": "CompX International Inc."
	}, {
		"Symbol": "CIZ",
		"Description": "Victory Cemp Dev Enh"
	}, {
		"Symbol": "CIZN",
		"Description": "Citizens Hldg Co"
	}, {
		"Symbol": "CJJD",
		"Description": "China Jojo Drugstore"
	}, {
		"Symbol": "CKH",
		"Description": "SEACOR Holdings, Inc."
	}, {
		"Symbol": "CKX",
		"Description": "CKX Lands, Inc."
	}, {
		"Symbol": "CL",
		"Description": "Colgate-Palmolive Company"
	}, {
		"Symbol": "CLA",
		"Description": "Capitala Finance Corp."
	}, {
		"Symbol": "CLAC",
		"Description": "Capitol Acq Corp III"
	}, {
		"Symbol": "CLACU",
		"Description": "Capitol Acq III Ut"
	}, {
		"Symbol": "CLACW",
		"Description": "Capitol Acq Cp 3 Wts"
	}, {
		"Symbol": "CLB",
		"Description": "Core Laboratories N.V."
	}, {
		"Symbol": "CLBH",
		"Description": "Carolina Bank Hldgs"
	}, {
		"Symbol": "CLBS",
		"Description": "Caladrius Bio Cmn"
	}, {
		"Symbol": "CLC",
		"Description": "CLARCOR Inc."
	}, {
		"Symbol": "CLCD",
		"Description": "Colucid Pharma Cmn"
	}, {
		"Symbol": "CLCT",
		"Description": "Collectors Universe"
	}, {
		"Symbol": "CLD",
		"Description": "Cloud Peak Energy Inc"
	}, {
		"Symbol": "CLDC",
		"Description": "China Lending Corp"
	}, {
		"Symbol": "CLDT",
		"Description": "Chatham Lodging Trust REIT"
	}, {
		"Symbol": "CLDX",
		"Description": "Celldex Therapeutics"
	}, {
		"Symbol": "CLF",
		"Description": "Cliffs Natural Resources Inc."
	}, {
		"Symbol": "CLFD",
		"Description": "Clearfield Inc"
	}, {
		"Symbol": "CLGX",
		"Description": "CoreLogic, Inc."
	}, {
		"Symbol": "CLH",
		"Description": "Clean Harbors, Inc."
	}, {
		"Symbol": "CLI",
		"Description": "Mack-Cali Realty Corporation"
	}, {
		"Symbol": "CLIR",
		"Description": "Clearsign Combustion"
	}, {
		"Symbol": "CLIRW",
		"Description": "Clearsign Combustion Corporation Warrant"
	}, {
		"Symbol": "CLLS",
		"Description": "Cellectis S.A. Ads"
	}, {
		"Symbol": "CLM",
		"Description": "Cornerstone Strategic Value Fund, Inc."
	}, {
		"Symbol": "CLMS",
		"Description": "Calamos Asset Manage"
	}, {
		"Symbol": "CLMT",
		"Description": "Calumet Specialty Pr"
	}, {
		"Symbol": "CLNE",
		"Description": "Clean Energy Fuels"
	}, {
		"Symbol": "CLNS",
		"Description": "Colony NorthStar, Inc."
	}, {
		"Symbol": "CLNS^A",
		"Description": "Colony NorthStar, Inc."
	}, {
		"Symbol": "CLNS^B",
		"Description": "Colony NorthStar, Inc."
	}, {
		"Symbol": "CLNS^C",
		"Description": "Colony NorthStar, Inc."
	}, {
		"Symbol": "CLNS^D",
		"Description": "Colony NorthStar, Inc."
	}, {
		"Symbol": "CLNS^E",
		"Description": "Colony NorthStar, Inc."
	}, {
		"Symbol": "CLNS^F",
		"Description": "Colony NorthStar, Inc."
	}, {
		"Symbol": "CLNS^G",
		"Description": "Colony NorthStar, Inc."
	}, {
		"Symbol": "CLNS^H",
		"Description": "Colony NorthStar, Inc."
	}, {
		"Symbol": "CLNT",
		"Description": "Cleantech Solutions"
	}, {
		"Symbol": "CLR",
		"Description": "Continental Resources, Inc."
	}, {
		"Symbol": "CLRB",
		"Description": "Cellectar Biosc Cmn"
	}, {
		"Symbol": "CLRBW",
		"Description": "Cellectar Biosc Wt"
	}, {
		"Symbol": "CLRBZ",
		"Description": "Cellectar Bio Sra Wt"
	}, {
		"Symbol": "CLRO",
		"Description": "Clearone Inc"
	}, {
		"Symbol": "CLS",
		"Description": "Celestica, Inc."
	}, {
		"Symbol": "CLSD",
		"Description": "Clearside Biomedi Cmn"
	}, {
		"Symbol": "CLSN",
		"Description": "Celsion Corp"
	}, {
		"Symbol": "CLUB",
		"Description": "Town Sports Internat"
	}, {
		"Symbol": "CLVS",
		"Description": "Clovis Oncology Inc"
	}, {
		"Symbol": "CLW",
		"Description": "Clearwater Paper Corporation"
	}, {
		"Symbol": "CLWT",
		"Description": "Euro Tech Hldg"
	}, {
		"Symbol": "CLX",
		"Description": "Clorox Company "
	}, {
		"Symbol": "CM",
		"Description": "Canadian Imperial Bank of Commerce"
	}, {
		"Symbol": "CMA",
		"Description": "Comerica Incorporated"
	}, {
		"Symbol": "CMA.WS",
		"Description": "Comerica Incorporated"
	}, {
		"Symbol": "CMC",
		"Description": "Commercial Metals Company"
	}, {
		"Symbol": "CMCM",
		"Description": "Cheetah Mobile Inc."
	}, {
		"Symbol": "CMCO",
		"Description": "Columbus Mckinnon"
	}, {
		"Symbol": "CMCSA",
		"Description": "Comcast Corp A"
	}, {
		"Symbol": "CMCT",
		"Description": "Cim Commercial TR Cp"
	}, {
		"Symbol": "CMD",
		"Description": "Cantel Medical Corp."
	}, {
		"Symbol": "CME",
		"Description": "CME Group Inc"
	}, {
		"Symbol": "CMFN",
		"Description": "Cm Finance Cmn"
	}, {
		"Symbol": "CMG",
		"Description": "Chipotle Mexican Grill, Inc."
	}, {
		"Symbol": "CMI",
		"Description": "Cummins Inc."
	}, {
		"Symbol": "CMLS",
		"Description": "Cumulus Media Inc"
	}, {
		"Symbol": "CMO",
		"Description": "Capstead Mortgage Corporation"
	}, {
		"Symbol": "CMO^E",
		"Description": "Capstead Mortgage Corporation"
	}, {
		"Symbol": "CMP",
		"Description": "Compass Minerals International, Inc."
	}, {
		"Symbol": "CMPR",
		"Description": "Cimpress N.V. Ord"
	}, {
		"Symbol": "CMRE",
		"Description": "Costamare Inc."
	}, {
		"Symbol": "CMRE^B",
		"Description": "Costamare Inc."
	}, {
		"Symbol": "CMRE^C",
		"Description": "Costamare Inc."
	}, {
		"Symbol": "CMRE^D",
		"Description": "Costamare Inc."
	}, {
		"Symbol": "CMRX",
		"Description": "Chimerix Inc"
	}, {
		"Symbol": "CMS",
		"Description": "CMS Energy Corporation"
	}, {
		"Symbol": "CMS^B",
		"Description": "CMS Energy Corporation"
	}, {
		"Symbol": "CMT",
		"Description": "Core Molding Technologies Inc"
	}, {
		"Symbol": "CMTL",
		"Description": "Comtech Telecom Co"
	}, {
		"Symbol": "CMU",
		"Description": "Colonial Municipal Income Trust"
	}, {
		"Symbol": "CNA",
		"Description": "CNA Financial Corporation"
	}, {
		"Symbol": "CNAT",
		"Description": "Conatus Pharmaceutic"
	}, {
		"Symbol": "CNBKA",
		"Description": "Century Bancorp Inc"
	}, {
		"Symbol": "CNC",
		"Description": "Centene Corporation"
	}, {
		"Symbol": "CNCE",
		"Description": "Concert Pharmaceutic"
	}, {
		"Symbol": "CNCO",
		"Description": "Cencosud S.A."
	}, {
		"Symbol": "CNCR",
		"Description": "Loncar Cancer Immuno"
	}, {
		"Symbol": "CNDT",
		"Description": "Conduent Incorporated"
	}, {
		"Symbol": "CNET",
		"Description": "Chinanet Online Hldg"
	}, {
		"Symbol": "CNFR",
		"Description": "Conifer Holdings Cmn"
	}, {
		"Symbol": "CNHI",
		"Description": "CNH Industrial N.V."
	}, {
		"Symbol": "CNI",
		"Description": "Canadian National Railway Company"
	}, {
		"Symbol": "CNIT",
		"Description": "China Info Tech"
	}, {
		"Symbol": "CNK",
		"Description": "Cinemark Holdings Inc"
	}, {
		"Symbol": "CNMD",
		"Description": "C O N M E D Cp"
	}, {
		"Symbol": "CNNX",
		"Description": "Cone Midstream Partners LP"
	}, {
		"Symbol": "CNO",
		"Description": "CNO Financial Group, Inc."
	}, {
		"Symbol": "CNOB",
		"Description": "Connectone Bancorp"
	}, {
		"Symbol": "CNP",
		"Description": "CenterPoint Energy, Inc."
	}, {
		"Symbol": "CNQ",
		"Description": "Canadian Natural Resources Limited"
	}, {
		"Symbol": "CNS",
		"Description": "Cohen & Steers Inc"
	}, {
		"Symbol": "CNSL",
		"Description": "Consolidated Communi"
	}, {
		"Symbol": "CNTF",
		"Description": "China Techfaith Wire"
	}, {
		"Symbol": "CNTY",
		"Description": "Century Casinos In"
	}, {
		"Symbol": "CNV",
		"Description": "Cnova N.V. Ord"
	}, {
		"Symbol": "CNX",
		"Description": "CONSOL Energy Inc."
	}, {
		"Symbol": "CNXC",
		"Description": "CNX Coal Resources LP"
	}, {
		"Symbol": "CNXN",
		"Description": "PC Connection Inc"
	}, {
		"Symbol": "CNXR",
		"Description": "Connecture Inc Cmn"
	}, {
		"Symbol": "CO",
		"Description": "China Cord Blood Corporation"
	}, {
		"Symbol": "COBZ",
		"Description": "Cobiz Financial Inc"
	}, {
		"Symbol": "CODI",
		"Description": "Compass Diversified Holdings"
	}, {
		"Symbol": "COE",
		"Description": "China Online Education Group"
	}, {
		"Symbol": "COF",
		"Description": "Capital One Financial Corporation"
	}, {
		"Symbol": "COF.WS",
		"Description": "Capital One Financial Corporation"
	}, {
		"Symbol": "COF^C",
		"Description": "Capital One Financial Corporation"
	}, {
		"Symbol": "COF^D",
		"Description": "Capital One Financial Corporation"
	}, {
		"Symbol": "COF^F",
		"Description": "Capital One Financial Corporation"
	}, {
		"Symbol": "COF^G",
		"Description": "Capital One Financial Corporation"
	}, {
		"Symbol": "COF^H",
		"Description": "Capital One Financial Corporation"
	}, {
		"Symbol": "COF^P",
		"Description": "Capital One Financial Corporation"
	}, {
		"Symbol": "COG",
		"Description": "Cabot Oil & Gas Corporation"
	}, {
		"Symbol": "COGT",
		"Description": "Cogint Inc"
	}, {
		"Symbol": "COH",
		"Description": "Coach, Inc."
	}, {
		"Symbol": "COHR",
		"Description": "Coherent Inc"
	}, {
		"Symbol": "COHU",
		"Description": "Cohu Inc"
	}, {
		"Symbol": "COKE",
		"Description": "Coca Cola Bot Cons"
	}, {
		"Symbol": "COL",
		"Description": "Rockwell Collins, Inc."
	}, {
		"Symbol": "COLB",
		"Description": "Columbia Banking Sys"
	}, {
		"Symbol": "COLL",
		"Description": "Collegium Pharma Cmn"
	}, {
		"Symbol": "COLM",
		"Description": "Columbia Sprtswr"
	}, {
		"Symbol": "COMM",
		"Description": "Commscope Holding Co"
	}, {
		"Symbol": "COMT",
		"Description": "Ishrs Cmdty Sel Stra"
	}, {
		"Symbol": "CONE",
		"Description": "Cyrusone Inc Cmn"
	}, {
		"Symbol": "CONN",
		"Description": "Conn's Inc"
	}, {
		"Symbol": "COO",
		"Description": "Cooper Companies, Inc. "
	}, {
		"Symbol": "COOL",
		"Description": "Majesco Entertainmnt"
	}, {
		"Symbol": "COP",
		"Description": "ConocoPhillips"
	}, {
		"Symbol": "COR",
		"Description": "CoreSite Realty Corporation"
	}, {
		"Symbol": "COR^A",
		"Description": "CoreSite Realty Corporation"
	}, {
		"Symbol": "CORE",
		"Description": "Core Mark Holding"
	}, {
		"Symbol": "CORI",
		"Description": "Corium Intl Cmn"
	}, {
		"Symbol": "CORR",
		"Description": "CorEnergy Infrastructure Trust, Inc."
	}, {
		"Symbol": "CORR^A",
		"Description": "CorEnergy Infrastructure Trust, Inc."
	}, {
		"Symbol": "CORT",
		"Description": "Corcept Therapeutics"
	}, {
		"Symbol": "COST",
		"Description": "Costco Wholesale"
	}, {
		"Symbol": "COT",
		"Description": "Cott Corporation"
	}, {
		"Symbol": "COTV",
		"Description": "Cotiviti Holdings, Inc."
	}, {
		"Symbol": "COTY",
		"Description": "Coty Inc."
	}, {
		"Symbol": "COUP",
		"Description": "Coupa Software Inc"
	}, {
		"Symbol": "COVS",
		"Description": "Covisint Corp Cmn"
	}, {
		"Symbol": "COWN",
		"Description": "Cowen Group Inc"
	}, {
		"Symbol": "COWNL",
		"Description": "Cowen Grp 8.25 Sr Nt"
	}, {
		"Symbol": "COYN",
		"Description": "Copsync Inc Cmn"
	}, {
		"Symbol": "COYNW",
		"Description": "Copsync Inc Warrnt"
	}, {
		"Symbol": "CP",
		"Description": "Canadian Pacific Railway Limited"
	}, {
		"Symbol": "CPA",
		"Description": "Copa Holdings, S.A."
	}, {
		"Symbol": "CPAA",
		"Description": "Conyers Park Acquisition Corp"
	}, {
		"Symbol": "CPAAU",
		"Description": "Conyers Park Acquisition Corp"
	}, {
		"Symbol": "CPAAW",
		"Description": "Conyers Park Acquisition Corp. Wt"
	}, {
		"Symbol": "CPAC",
		"Description": "Cementos Pacasmayo S.A.A."
	}, {
		"Symbol": "CPAH",
		"Description": "Counterpath Corp"
	}, {
		"Symbol": "CPB",
		"Description": "Campbell Soup Company"
	}, {
		"Symbol": "CPE",
		"Description": "Callon Petroleum Company"
	}, {
		"Symbol": "CPE^A",
		"Description": "Callon Petroleum Company"
	}, {
		"Symbol": "CPF",
		"Description": "CPB Inc."
	}, {
		"Symbol": "CPG",
		"Description": "Crescent Point Energy Corporation"
	}, {
		"Symbol": "CPHC",
		"Description": "Canterbury Park Hl"
	}, {
		"Symbol": "CPHI",
		"Description": "China Pharma Holdings, Inc."
	}, {
		"Symbol": "CPIX",
		"Description": "Cumberland Pharmaceu"
	}, {
		"Symbol": "CPK",
		"Description": "Chesapeake Utilities Corporation"
	}, {
		"Symbol": "CPL",
		"Description": "CPFL Energia S.A."
	}, {
		"Symbol": "CPLA",
		"Description": "Capella Education Co"
	}, {
		"Symbol": "CPLP",
		"Description": "Capital Product Part"
	}, {
		"Symbol": "CPN",
		"Description": "Calpine Corporation"
	}, {
		"Symbol": "CPPL",
		"Description": "Columbia Pipeline Partners LP"
	}, {
		"Symbol": "CPRT",
		"Description": "Copart Inc"
	}, {
		"Symbol": "CPRX",
		"Description": "Catalyst Pharm Inc"
	}, {
		"Symbol": "CPS",
		"Description": "Cooper-Standard Holdings Inc."
	}, {
		"Symbol": "CPSH",
		"Description": "Cps Technologies Cmn"
	}, {
		"Symbol": "CPSI",
		"Description": "Computer Programs"
	}, {
		"Symbol": "CPSS",
		"Description": "Consumer Portfol"
	}, {
		"Symbol": "CPST",
		"Description": "Capstone Turbine Cp"
	}, {
		"Symbol": "CPT",
		"Description": "Camden Property Trust"
	}, {
		"Symbol": "CPTA",
		"Description": "Capitala Finance Crp"
	}, {
		"Symbol": "CQH",
		"Description": "Cheniere Energy Partners LP Holdings, LLC"
	}, {
		"Symbol": "CQP",
		"Description": "Cheniere Energy Partners, LP"
	}, {
		"Symbol": "CR",
		"Description": "Crane Company"
	}, {
		"Symbol": "CRAI",
		"Description": "Cra International"
	}, {
		"Symbol": "CRAY",
		"Description": "Cray Inc"
	}, {
		"Symbol": "CRBP",
		"Description": "Corbus Pharma Cmn"
	}, {
		"Symbol": "CRC",
		"Description": "California Resources Corporation"
	}, {
		"Symbol": "CRCM",
		"Description": "Care.com, Inc."
	}, {
		"Symbol": "CRD.A",
		"Description": "Crawford & Company"
	}, {
		"Symbol": "CRD.B",
		"Description": "Crawford & Company"
	}, {
		"Symbol": "CRDS",
		"Description": "Crossroads Systems"
	}, {
		"Symbol": "CRDT",
		"Description": "Wisdmtree Strg Cp Bo"
	}, {
		"Symbol": "CREE",
		"Description": "Cree Inc"
	}, {
		"Symbol": "CREG",
		"Description": "China Recycling Ener"
	}, {
		"Symbol": "CRESY",
		"Description": "Cresud Sacif ADR"
	}, {
		"Symbol": "CRF",
		"Description": "Cornerstone Strategic Return Fund, Inc. "
	}, {
		"Symbol": "CRH",
		"Description": "CRH PLC"
	}, {
		"Symbol": "CRHM",
		"Description": "CRH Medical Corporation"
	}, {
		"Symbol": "CRI",
		"Description": "Carters, Inc."
	}, {
		"Symbol": "CRIS",
		"Description": "Curis Inc"
	}, {
		"Symbol": "CRK",
		"Description": "Comstock Resources, Inc."
	}, {
		"Symbol": "CRL",
		"Description": "Charles River Laboratories International, Inc."
	}, {
		"Symbol": "CRM",
		"Description": "Salesforce.com Inc"
	}, {
		"Symbol": "CRMD",
		"Description": "CorMedix Inc"
	}, {
		"Symbol": "CRME",
		"Description": "Cardiome Pharma Corp"
	}, {
		"Symbol": "CRMT",
		"Description": "America's Car-Mart"
	}, {
		"Symbol": "CRNT",
		"Description": "Ceragon Networks Ltd"
	}, {
		"Symbol": "CROX",
		"Description": "Crocs Inc"
	}, {
		"Symbol": "CRR",
		"Description": "Carbo Ceramics, Inc."
	}, {
		"Symbol": "CRS",
		"Description": "Carpenter Technology Corporation"
	}, {
		"Symbol": "CRSP",
		"Description": "Crispr Therapeutics Ag"
	}, {
		"Symbol": "CRT",
		"Description": "Cross Timbers Royalty Trust"
	}, {
		"Symbol": "CRTN",
		"Description": "Cartesian Inc Cmn"
	}, {
		"Symbol": "CRTO",
		"Description": "Criteo S.A. Ads"
	}, {
		"Symbol": "CRUS",
		"Description": "Cirrus Logic Inc"
	}, {
		"Symbol": "CRVL",
		"Description": "Corvel Cp"
	}, {
		"Symbol": "CRVP",
		"Description": "Crystal Rock Holdings, Inc."
	}, {
		"Symbol": "CRVS",
		"Description": "Corvus Pharma Com"
	}, {
		"Symbol": "CRWS",
		"Description": "Crown Crafts Inc"
	}, {
		"Symbol": "CRY",
		"Description": "CryoLife, Inc."
	}, {
		"Symbol": "CRZO",
		"Description": "Carrizo Oil & Gas"
	}, {
		"Symbol": "CS",
		"Description": "Credit Suisse Group"
	}, {
		"Symbol": "CSA",
		"Description": "Victory Cemp US Smal"
	}, {
		"Symbol": "CSAL",
		"Description": "Com Sls Lease Cn"
	}, {
		"Symbol": "CSB",
		"Description": "Victory Cemp US SC H"
	}, {
		"Symbol": "CSBK",
		"Description": "Clifton Bancorp Inc"
	}, {
		"Symbol": "CSBR",
		"Description": "Champions Oncolog Cmn"
	}, {
		"Symbol": "CSC",
		"Description": "Computer Sciences Corporation"
	}, {
		"Symbol": "CSCO",
		"Description": "Cisco Systems Inc"
	}, {
		"Symbol": "CSF",
		"Description": "Victory Cemp US Disc"
	}, {
		"Symbol": "CSFL",
		"Description": "Centerstate Bks Inc"
	}, {
		"Symbol": "CSGP",
		"Description": "Costar Group Inc"
	}, {
		"Symbol": "CSGS",
		"Description": "C S G Sys Intl"
	}, {
		"Symbol": "CSII",
		"Description": "Cardiovascular Syst"
	}, {
		"Symbol": "CSIQ",
		"Description": "Canadian Solar Inc"
	}, {
		"Symbol": "CSL",
		"Description": "Carlisle Companies Incorporated"
	}, {
		"Symbol": "CSLT",
		"Description": "Castlight Health, inc."
	}, {
		"Symbol": "CSOD",
		"Description": "Cornerstone Ondemand"
	}, {
		"Symbol": "CSPI",
		"Description": "C S P Inc"
	}, {
		"Symbol": "CSQ",
		"Description": "Calamos Strgc Ttl Rt"
	}, {
		"Symbol": "CSRA",
		"Description": "CSRA Inc."
	}, {
		"Symbol": "CSS",
		"Description": "CSS Industries, Inc."
	}, {
		"Symbol": "CST",
		"Description": "CST Brands, Inc."
	}, {
		"Symbol": "CSTE",
		"Description": "Caesarstone Sdot-Yam"
	}, {
		"Symbol": "CSTM",
		"Description": "Constellium N.V."
	}, {
		"Symbol": "CSTR",
		"Description": "Capstar Financial Holdings Inc"
	}, {
		"Symbol": "CSU",
		"Description": "Capital Senior Living Corporation"
	}, {
		"Symbol": "CSV",
		"Description": "Carriage Services, Inc."
	}, {
		"Symbol": "CSWC",
		"Description": "Capital Southwest"
	}, {
		"Symbol": "CSWI",
		"Description": "Csw Industrials Inc"
	}, {
		"Symbol": "CSX",
		"Description": "CSX Corporation"
	}, {
		"Symbol": "CTAA",
		"Description": "Qwest Corporation"
	}, {
		"Symbol": "CTAS",
		"Description": "Cintas Corp"
	}, {
		"Symbol": "CTB",
		"Description": "Cooper Tire & Rubber Company"
	}, {
		"Symbol": "CTBB",
		"Description": "Qwest Corporation"
	}, {
		"Symbol": "CTBI",
		"Description": "Community TR Bancp"
	}, {
		"Symbol": "CTG",
		"Description": "Computer Task Gp Inc"
	}, {
		"Symbol": "CTHR",
		"Description": "Charles & Colvard"
	}, {
		"Symbol": "CTIB",
		"Description": "Cti Inds Corp"
	}, {
		"Symbol": "CTIC",
		"Description": "Cti Biopharm Corp."
	}, {
		"Symbol": "CTL",
		"Description": "CenturyLink, Inc."
	}, {
		"Symbol": "CTLT",
		"Description": "Catalent, Inc."
	}, {
		"Symbol": "CTMX",
		"Description": "Cytomx Thera Cmn Stk"
	}, {
		"Symbol": "CTO",
		"Description": "Consolidated-Tomoka Land Co."
	}, {
		"Symbol": "CTR",
		"Description": "ClearBridge Energy MLP Total Return Fund Inc."
	}, {
		"Symbol": "CTRE",
		"Description": "Caretrust REIT Inc"
	}, {
		"Symbol": "CTRL",
		"Description": "Control4 Corporation"
	}, {
		"Symbol": "CTRN",
		"Description": "Citi Trends Inc"
	}, {
		"Symbol": "CTRP",
		"Description": "Ctrip.Com Intl Ltd"
	}, {
		"Symbol": "CTRV",
		"Description": "Contravir Pharmaceut"
	}, {
		"Symbol": "CTS",
		"Description": "CTS Corporation"
	}, {
		"Symbol": "CTSH",
		"Description": "Cognizant Tech Sol"
	}, {
		"Symbol": "CTSO",
		"Description": "Cytosorbents Cor"
	}, {
		"Symbol": "CTT",
		"Description": "CatchMark Timber Trust, Inc."
	}, {
		"Symbol": "CTU",
		"Description": "Qwest Corporation"
	}, {
		"Symbol": "CTV",
		"Description": "Qwest Corporation"
	}, {
		"Symbol": "CTW",
		"Description": "Qwest Corporation"
	}, {
		"Symbol": "CTWS",
		"Description": "Conn Water Svcs In"
	}, {
		"Symbol": "CTX",
		"Description": "Qwest Corporation"
	}, {
		"Symbol": "CTXS",
		"Description": "Citrix Systems Inc"
	}, {
		"Symbol": "CTY",
		"Description": "Qwest Corporation"
	}, {
		"Symbol": "CTZ",
		"Description": "Qwest Corporation"
	}, {
		"Symbol": "CUB",
		"Description": "Cubic Corporation"
	}, {
		"Symbol": "CUBA",
		"Description": "Herzfeld Caribbean"
	}, {
		"Symbol": "CUBE",
		"Description": "CubeSmart"
	}, {
		"Symbol": "CUBI",
		"Description": "Customers Bancorp, Inc"
	}, {
		"Symbol": "CUBI^C",
		"Description": "Customers Bancorp, Inc"
	}, {
		"Symbol": "CUBI^D",
		"Description": "Customers Bancorp, Inc"
	}, {
		"Symbol": "CUBI^E",
		"Description": "Customers Bancorp, Inc"
	}, {
		"Symbol": "CUBI^F",
		"Description": "Customers Bancorp, Inc"
	}, {
		"Symbol": "CUBN",
		"Description": "Commerce Un Bcsh Cmn"
	}, {
		"Symbol": "CUBS",
		"Description": "Customers Bancorp, Inc"
	}, {
		"Symbol": "CUDA",
		"Description": "Barracuda Networks, Inc."
	}, {
		"Symbol": "CUI",
		"Description": "Cui Global Inc"
	}, {
		"Symbol": "CUK",
		"Description": "Carnival Corporation"
	}, {
		"Symbol": "CUNB",
		"Description": "Cu Bancorp Cmn Stk"
	}, {
		"Symbol": "CUO",
		"Description": "Continental Materials Corporation"
	}, {
		"Symbol": "CUR",
		"Description": "Neuralstem Inc"
	}, {
		"Symbol": "CUTR",
		"Description": "Cutera Inc"
	}, {
		"Symbol": "CUZ",
		"Description": "Cousins Properties Incorporated"
	}, {
		"Symbol": "CVA",
		"Description": "Covanta Holding Corporation"
	}, {
		"Symbol": "CVBF",
		"Description": "Cvb Financial Corp"
	}, {
		"Symbol": "CVCO",
		"Description": "Cavco Inds Inc"
	}, {
		"Symbol": "CVCY",
		"Description": "Central Vly Cmty Bcp"
	}, {
		"Symbol": "CVE",
		"Description": "Cenovus Energy Inc"
	}, {
		"Symbol": "CVEO",
		"Description": "Civeo Corporation"
	}, {
		"Symbol": "CVG",
		"Description": "Convergys Corporation"
	}, {
		"Symbol": "CVGI",
		"Description": "Commercial Vehicle G"
	}, {
		"Symbol": "CVGW",
		"Description": "Calavo Growers Inc"
	}, {
		"Symbol": "CVI",
		"Description": "CVR Energy Inc."
	}, {
		"Symbol": "CVLT",
		"Description": "Commvault Systems"
	}, {
		"Symbol": "CVLY",
		"Description": "Codorus Valley Bncp"
	}, {
		"Symbol": "CVM",
		"Description": "Cel-Sci Corporation"
	}, {
		"Symbol": "CVM.WS",
		"Description": "Cel-Sci Corporation"
	}, {
		"Symbol": "CVO",
		"Description": "Cenveo Inc"
	}, {
		"Symbol": "CVR",
		"Description": "Chicago Rivet & Machine Co."
	}, {
		"Symbol": "CVRR",
		"Description": "CVR Refining, LP"
	}, {
		"Symbol": "CVRS",
		"Description": "Corindus Vascular Robotics, Inc."
	}, {
		"Symbol": "CVS",
		"Description": "CVS Health Corporation"
	}, {
		"Symbol": "CVTI",
		"Description": "Covenant Transportn"
	}, {
		"Symbol": "CVU",
		"Description": "CPI Aerostructures, Inc."
	}, {
		"Symbol": "CVV",
		"Description": "CVD Equipment Corp"
	}, {
		"Symbol": "CVX",
		"Description": "Chevron Corporation"
	}, {
		"Symbol": "CW",
		"Description": "Curtiss-Wright Corporation"
	}, {
		"Symbol": "CWAY",
		"Description": "Coastway Bancorp Inc"
	}, {
		"Symbol": "CWBC",
		"Description": "Community West Bncsh"
	}, {
		"Symbol": "CWCO",
		"Description": "Cons Water Co Inc"
	}, {
		"Symbol": "CWEI",
		"Description": "Clayton Williams Energy, Inc."
	}, {
		"Symbol": "CWH",
		"Description": "Camping World Holdings, Inc."
	}, {
		"Symbol": "CWST",
		"Description": "Casella Waste Sys"
	}, {
		"Symbol": "CWT",
		"Description": "California Water  Service Group Holding"
	}, {
		"Symbol": "CX",
		"Description": "Cemex S.A.B. de C.V."
	}, {
		"Symbol": "CXDC",
		"Description": "China Xd Plastics Co"
	}, {
		"Symbol": "CXE",
		"Description": "Colonial High Income Municipal Trust"
	}, {
		"Symbol": "CXH",
		"Description": "Colonial Investment Grade Municipal Trust"
	}, {
		"Symbol": "CXO",
		"Description": "Concho Resources Inc."
	}, {
		"Symbol": "CXP",
		"Description": "Columbia Property Trust, Inc."
	}, {
		"Symbol": "CXRX",
		"Description": "Concordia International"
	}, {
		"Symbol": "CXSE",
		"Description": "Wisdomtree China Ex-"
	}, {
		"Symbol": "CXW",
		"Description": "CoreCivic, Inc."
	}, {
		"Symbol": "CY",
		"Description": "Cypress Semiconductr"
	}, {
		"Symbol": "CYAD",
		"Description": "Celyad Sa Ads"
	}, {
		"Symbol": "CYAN",
		"Description": "Cyanotech Corp"
	}, {
		"Symbol": "CYBE",
		"Description": "Cyberoptics Cp"
	}, {
		"Symbol": "CYBR",
		"Description": "Cyberark Soft Ord"
	}, {
		"Symbol": "CYCC",
		"Description": "Cyclacel Pharmaceuti"
	}, {
		"Symbol": "CYCCP",
		"Description": "Cyclacel Pharmaceuti"
	}, {
		"Symbol": "CYD",
		"Description": "China Yuchai International Limited"
	}, {
		"Symbol": "CYH",
		"Description": "Community Health Systems, Inc."
	}, {
		"Symbol": "CYHHZ",
		"Description": "Community Health Sys"
	}, {
		"Symbol": "CYNO",
		"Description": "Cynosure Inc"
	}, {
		"Symbol": "CYOU",
		"Description": "Changyou.Com Limited"
	}, {
		"Symbol": "CYRN",
		"Description": "Cyren Ltd"
	}, {
		"Symbol": "CYRX",
		"Description": "Cryoport Inc"
	}, {
		"Symbol": "CYRXW",
		"Description": "Cryoport Inc Wts"
	}, {
		"Symbol": "CYS",
		"Description": "CYS Investments, Inc."
	}, {
		"Symbol": "CYS^A",
		"Description": "CYS Investments, Inc."
	}, {
		"Symbol": "CYS^B",
		"Description": "CYS Investments, Inc."
	}, {
		"Symbol": "CYTK",
		"Description": "Cytokinetics"
	}, {
		"Symbol": "CYTR",
		"Description": "Cytrx Cp"
	}, {
		"Symbol": "CYTX",
		"Description": "Cytori Therapeutics"
	}, {
		"Symbol": "CYTXW",
		"Description": "Cytori Therapeutics Inc"
	}, {
		"Symbol": "CZFC",
		"Description": "Citizens First Corp"
	}, {
		"Symbol": "CZNC",
		"Description": "Citizens Nrthn Cp"
	}, {
		"Symbol": "CZR",
		"Description": "Caesars Entertnmt"
	}, {
		"Symbol": "CZWI",
		"Description": "Citizens Community"
	}, {
		"Symbol": "CZZ",
		"Description": "Cosan Limited"
	}, {
		"Symbol": "D",
		"Description": "Dominion Resources, Inc."
	}, {
		"Symbol": "DAC",
		"Description": "Danaos Corporation"
	}, {
		"Symbol": "DAIO",
		"Description": "Data I O Cp"
	}, {
		"Symbol": "DAKT",
		"Description": "Daktronics Inc"
	}, {
		"Symbol": "DAL",
		"Description": "Delta Air Lines, Inc."
	}, {
		"Symbol": "DAN",
		"Description": "Dana Incorporated"
	}, {
		"Symbol": "DAR",
		"Description": "Darling Ingredients Inc."
	}, {
		"Symbol": "DATA",
		"Description": "Tableau Software, Inc."
	}, {
		"Symbol": "DAVE",
		"Description": "Famous Daves of Am"
	}, {
		"Symbol": "DAX",
		"Description": "Recon Cp DAX ETF"
	}, {
		"Symbol": "DB",
		"Description": "Deutsche Bank AG"
	}, {
		"Symbol": "DBD",
		"Description": "Diebold, Incorporated"
	}, {
		"Symbol": "DBL",
		"Description": "DoubleLine Opportunistic Credit Fund"
	}, {
		"Symbol": "DBVT",
		"Description": "Dbv Technologies Ads"
	}, {
		"Symbol": "DCA",
		"Description": "Virtus Total Return Fund"
	}, {
		"Symbol": "DCI",
		"Description": "Donaldson Company, Inc."
	}, {
		"Symbol": "DCIX",
		"Description": "Diana Containrshp"
	}, {
		"Symbol": "DCM",
		"Description": "NTT DOCOMO, Inc"
	}, {
		"Symbol": "DCO",
		"Description": "Ducommun Incorporated"
	}, {
		"Symbol": "DCOM",
		"Description": "Dime Community Bncsh"
	}, {
		"Symbol": "DCP",
		"Description": "DCP Midstream LP"
	}, {
		"Symbol": "DCT",
		"Description": "DCT Industrial Trust Inc"
	}, {
		"Symbol": "DCTH",
		"Description": "Delcath Systems Inc"
	}, {
		"Symbol": "DCUC",
		"Description": "Dominion Resources, Inc."
	}, {
		"Symbol": "DCUD",
		"Description": "Dominion Resources, Inc."
	}, {
		"Symbol": "DD",
		"Description": "E.I. du Pont de Nemours and Company"
	}, {
		"Symbol": "DD^A",
		"Description": "E.I. du Pont de Nemours and Company"
	}, {
		"Symbol": "DD^B",
		"Description": "E.I. du Pont de Nemours and Company"
	}, {
		"Symbol": "DDBI",
		"Description": "Legg Mason Dev Exus"
	}, {
		"Symbol": "DDC",
		"Description": "Dominion Diamond Corporation"
	}, {
		"Symbol": "DDD",
		"Description": "3D Systems Corporation"
	}, {
		"Symbol": "DDE",
		"Description": "Dover Downs Gaming & Entertainment Inc"
	}, {
		"Symbol": "DDF",
		"Description": "Delaware Investments Dividend & Income Fund, Inc."
	}, {
		"Symbol": "DDR",
		"Description": "DDR Corp."
	}, {
		"Symbol": "DDR^J",
		"Description": "DDR Corp."
	}, {
		"Symbol": "DDR^K",
		"Description": "DDR Corp."
	}, {
		"Symbol": "DDS",
		"Description": "Dillards, Inc."
	}, {
		"Symbol": "DDT",
		"Description": "Dillards, Inc."
	}, {
		"Symbol": "DE",
		"Description": "Deere & Company"
	}, {
		"Symbol": "DEA",
		"Description": "Easterly Government Properties, Inc."
	}, {
		"Symbol": "DECK",
		"Description": "Deckers Outdoor Corporation"
	}, {
		"Symbol": "DEI",
		"Description": "Douglas Emmett, Inc."
	}, {
		"Symbol": "DEL",
		"Description": "Deltic Timber Corporation"
	}, {
		"Symbol": "DELT",
		"Description": "Delta Tech HD Ltd Or"
	}, {
		"Symbol": "DELTW",
		"Description": "Delta Tech Hld Wt"
	}, {
		"Symbol": "DENN",
		"Description": "Dennys Corp"
	}, {
		"Symbol": "DEO",
		"Description": "Diageo plc"
	}, {
		"Symbol": "DEPO",
		"Description": "Depomed Inc"
	}, {
		"Symbol": "DERM",
		"Description": "Dermira Inc Cm ST"
	}, {
		"Symbol": "DEST",
		"Description": "Destination Maternty"
	}, {
		"Symbol": "DEX",
		"Description": "Delaware Enhanced Global Dividend"
	}, {
		"Symbol": "DF",
		"Description": "Dean Foods Company"
	}, {
		"Symbol": "DFBG",
		"Description": "Differntl Brands Cmn"
	}, {
		"Symbol": "DFFN",
		"Description": "Diffusion Pharmaceuticals Inc"
	}, {
		"Symbol": "DFIN",
		"Description": "Donnelley Financial Solutions, Inc."
	}, {
		"Symbol": "DFNL",
		"Description": "Davis Fundamental ETF Trust Davis Select Financi"
	}, {
		"Symbol": "DFP",
		"Description": "Flaherty & Crumrine Dynamic Preferred and Income Fund Inc."
	}, {
		"Symbol": "DFRG",
		"Description": "Del Frisco's Restrnt"
	}, {
		"Symbol": "DFS",
		"Description": "Discover Financial Services"
	}, {
		"Symbol": "DFS^B",
		"Description": "Discover Financial Services"
	}, {
		"Symbol": "DFT",
		"Description": "Dupont Fabros Technology, Inc."
	}, {
		"Symbol": "DFT^C",
		"Description": "Dupont Fabros Technology, Inc."
	}, {
		"Symbol": "DFVL",
		"Description": "Ipath 5 Year Bull"
	}, {
		"Symbol": "DFVS",
		"Description": "Ipath 5 Year Bear Et"
	}, {
		"Symbol": "DG",
		"Description": "Dollar General Corporation"
	}, {
		"Symbol": "DGAS",
		"Description": "Delta Natural Gas"
	}, {
		"Symbol": "DGI",
		"Description": "DigitalGlobe, Inc"
	}, {
		"Symbol": "DGICA",
		"Description": "Donegal Group Cl A"
	}, {
		"Symbol": "DGICB",
		"Description": "Donegal Group Cl B"
	}, {
		"Symbol": "DGII",
		"Description": "Digi Intl Inc"
	}, {
		"Symbol": "DGLD",
		"Description": "VS 3X Inv Gold"
	}, {
		"Symbol": "DGLY",
		"Description": "Digital Ally Inc"
	}, {
		"Symbol": "DGRE",
		"Description": "Wisdomtree Emg Mkts"
	}, {
		"Symbol": "DGRS",
		"Description": "Wisdomtree US SC Qly"
	}, {
		"Symbol": "DGRW",
		"Description": "Wisdomtree US Qlty D"
	}, {
		"Symbol": "DGSE",
		"Description": "DGSE Companies, Inc."
	}, {
		"Symbol": "DGX",
		"Description": "Quest Diagnostics Incorporated"
	}, {
		"Symbol": "DHF",
		"Description": "Dreyfus High Yield Strategies Fund"
	}, {
		"Symbol": "DHG",
		"Description": "DWS High Income Opportunities Fund, Inc."
	}, {
		"Symbol": "DHI",
		"Description": "D.R. Horton, Inc."
	}, {
		"Symbol": "DHIL",
		"Description": "Diamond Hill Inv"
	}, {
		"Symbol": "DHR",
		"Description": "Danaher Corporation"
	}, {
		"Symbol": "DHT",
		"Description": "DHT Holdings, Inc."
	}, {
		"Symbol": "DHX",
		"Description": "DHI Group, Inc."
	}, {
		"Symbol": "DHXM",
		"Description": "Dhx Media Varbl Vtg"
	}, {
		"Symbol": "DHY",
		"Description": "Credit Suisse High Yield Bond Fund"
	}, {
		"Symbol": "DIAX",
		"Description": "Nuveen Dow 30SM Dynamic Overwrite Fund"
	}, {
		"Symbol": "DIN",
		"Description": "DineEquity, Inc"
	}, {
		"Symbol": "DIOD",
		"Description": "Diodes Inc"
	}, {
		"Symbol": "DIS",
		"Description": "Walt Disney Company "
	}, {
		"Symbol": "DISCA",
		"Description": "Discovery Comm A"
	}, {
		"Symbol": "DISCB",
		"Description": "Discovery Comm B"
	}, {
		"Symbol": "DISCK",
		"Description": "Discovery Comm Inc"
	}, {
		"Symbol": "DISH",
		"Description": "Dish Network Corp"
	}, {
		"Symbol": "DIT",
		"Description": "AMCON Distributing Company"
	}, {
		"Symbol": "DJCO",
		"Description": "Daily Journal Cp"
	}, {
		"Symbol": "DK",
		"Description": "Delek US Holdings, Inc."
	}, {
		"Symbol": "DKL",
		"Description": "Delek Logistics Partners, L.P."
	}, {
		"Symbol": "DKS",
		"Description": "Dicks Sporting Goods Inc"
	}, {
		"Symbol": "DKT",
		"Description": "Deutsch Bk Contingent Cap Tr V"
	}, {
		"Symbol": "DL",
		"Description": "China Distance Education Holdings Limited"
	}, {
		"Symbol": "DLA",
		"Description": "Delta Apparel, Inc."
	}, {
		"Symbol": "DLB",
		"Description": "Dolby Laboratories"
	}, {
		"Symbol": "DLBS",
		"Description": "Ipath Long Bond Bear"
	}, {
		"Symbol": "DLHC",
		"Description": "Dlh Holdings Corp."
	}, {
		"Symbol": "DLNG",
		"Description": "Dynagas LNG Partners LP"
	}, {
		"Symbol": "DLNG^A",
		"Description": "Dynagas LNG Partners LP"
	}, {
		"Symbol": "DLPH",
		"Description": "Delphi Automotive plc"
	}, {
		"Symbol": "DLR",
		"Description": "Digital Realty Trust, Inc."
	}, {
		"Symbol": "DLR^F",
		"Description": "Digital Realty Trust, Inc."
	}, {
		"Symbol": "DLR^G",
		"Description": "Digital Realty Trust, Inc."
	}, {
		"Symbol": "DLR^H",
		"Description": "Digital Realty Trust, Inc."
	}, {
		"Symbol": "DLR^I",
		"Description": "Digital Realty Trust, Inc."
	}, {
		"Symbol": "DLTH",
		"Description": "Duluth Hldg Cl B Cmn"
	}, {
		"Symbol": "DLTR",
		"Description": "Dollar Tree Inc"
	}, {
		"Symbol": "DLX",
		"Description": "Deluxe Corporation"
	}, {
		"Symbol": "DM",
		"Description": "Dominion Midstream Partners, LP"
	}, {
		"Symbol": "DMB",
		"Description": "Dreyfus Municipal Bond Infrastructure Fund, Inc."
	}, {
		"Symbol": "DMF",
		"Description": "Dreyfus Municipal Income, Inc."
	}, {
		"Symbol": "DMLP",
		"Description": "Dorchester Minls"
	}, {
		"Symbol": "DMO",
		"Description": "Western Asset Mortgage Defined Opportunity Fund Inc"
	}, {
		"Symbol": "DMPI",
		"Description": "Delmar Pharmaceuticals Inc"
	}, {
		"Symbol": "DMRC",
		"Description": "Digimarc Corporation"
	}, {
		"Symbol": "DMTX",
		"Description": "Dimension Thera Cmn"
	}, {
		"Symbol": "DNB",
		"Description": "Dun & Bradstreet Corporation "
	}, {
		"Symbol": "DNBF",
		"Description": "Dnb Finl Corp"
	}, {
		"Symbol": "DNI",
		"Description": "Dividend and Income Fund"
	}, {
		"Symbol": "DNKN",
		"Description": "Dunkin' Brands Group"
	}, {
		"Symbol": "DNN",
		"Description": "Denison Mine Corp"
	}, {
		"Symbol": "DNOW",
		"Description": "NOW Inc."
	}, {
		"Symbol": "DNP",
		"Description": "Duff & Phelps Utilities Income, Inc."
	}, {
		"Symbol": "DNR",
		"Description": "Denbury Resources Inc."
	}, {
		"Symbol": "DO",
		"Description": "Diamond Offshore Drilling, Inc."
	}, {
		"Symbol": "DOC",
		"Description": "Physicians Realty Trust"
	}, {
		"Symbol": "DOOR",
		"Description": "Masonite International Corporation"
	}, {
		"Symbol": "DORM",
		"Description": "Dorman Products Inc"
	}, {
		"Symbol": "DOV",
		"Description": "Dover Corporation"
	}, {
		"Symbol": "DOW",
		"Description": "Dow Chemical Company "
	}, {
		"Symbol": "DOX",
		"Description": "Amdocs Ltd Ord"
	}, {
		"Symbol": "DPG",
		"Description": "Duff & Phelps Global Utility Income Fund Inc."
	}, {
		"Symbol": "DPLO",
		"Description": "Diplomat Pharmacy, Inc."
	}, {
		"Symbol": "DPRX",
		"Description": "Dipexium Pharmaceuti"
	}, {
		"Symbol": "DPS",
		"Description": "Dr Pepper Snapple Group, Inc"
	}, {
		"Symbol": "DPW",
		"Description": "Digital Power Corporation"
	}, {
		"Symbol": "DPZ",
		"Description": "Dominos Pizza Inc"
	}, {
		"Symbol": "DQ",
		"Description": "DAQO New Energy Corp."
	}, {
		"Symbol": "DRA",
		"Description": "Diversified Real Asset Income Fund"
	}, {
		"Symbol": "DRAD",
		"Description": "Digirad Corporation"
	}, {
		"Symbol": "DRAM",
		"Description": "Dataram Corp"
	}, {
		"Symbol": "DRD",
		"Description": "DRDGOLD Limited"
	}, {
		"Symbol": "DRE",
		"Description": "Duke Realty Corporation"
	}, {
		"Symbol": "DRH",
		"Description": "Diamondrock Hospitality Company"
	}, {
		"Symbol": "DRI",
		"Description": "Darden Restaurants, Inc."
	}, {
		"Symbol": "DRIO",
		"Description": "Labstyle Innovat Cmn"
	}, {
		"Symbol": "DRIOW",
		"Description": "Labstyle Innovati Wt"
	}, {
		"Symbol": "DRNA",
		"Description": "Dicerna Pharmaceutic"
	}, {
		"Symbol": "DRQ",
		"Description": "Dril-Quip, Inc."
	}, {
		"Symbol": "DRRX",
		"Description": "Durect Corporation"
	}, {
		"Symbol": "DRUA",
		"Description": "Dominion Resources, Inc."
	}, {
		"Symbol": "DRWI",
		"Description": "Dragonwave Cmn"
	}, {
		"Symbol": "DRYS",
		"Description": "Dryships Inc"
	}, {
		"Symbol": "DS",
		"Description": "Drive Shack Inc."
	}, {
		"Symbol": "DS^B",
		"Description": "Drive Shack Inc."
	}, {
		"Symbol": "DS^C",
		"Description": "Drive Shack Inc."
	}, {
		"Symbol": "DS^D",
		"Description": "Drive Shack Inc."
	}, {
		"Symbol": "DSCI",
		"Description": "Derma Sciences Cmn"
	}, {
		"Symbol": "DSE",
		"Description": "Duff & Phelps Select Energy MLP Fund Inc."
	}, {
		"Symbol": "DSGX",
		"Description": "Descartes Sys Grp"
	}, {
		"Symbol": "DSL",
		"Description": "DoubleLine Income Solutions Fund"
	}, {
		"Symbol": "DSLV",
		"Description": "VS 3X Inv Silver"
	}, {
		"Symbol": "DSM",
		"Description": "Dreyfus Strategic Municipal Bond Fund, Inc."
	}, {
		"Symbol": "DSPG",
		"Description": "D S P Group Inc"
	}, {
		"Symbol": "DSS",
		"Description": "Document Security Systems, Inc."
	}, {
		"Symbol": "DST",
		"Description": "DST Systems, Inc."
	}, {
		"Symbol": "DSU",
		"Description": "Blackrock Debt Strategies Fund, Inc."
	}, {
		"Symbol": "DSW",
		"Description": "DSW Inc."
	}, {
		"Symbol": "DSWL",
		"Description": "Deswell Inds Inc"
	}, {
		"Symbol": "DSX",
		"Description": "Diana Shipping inc."
	}, {
		"Symbol": "DSX^B",
		"Description": "Diana Shipping inc."
	}, {
		"Symbol": "DSXN",
		"Description": "Diana Shipping inc."
	}, {
		"Symbol": "DTE",
		"Description": "DTE Energy Company"
	}, {
		"Symbol": "DTEA",
		"Description": "Davidstea Inc Cm Stk"
	}, {
		"Symbol": "DTF",
		"Description": "Duff & Phelps Utilities Tax-Free Income, Inc."
	}, {
		"Symbol": "DTJ",
		"Description": "DTE Energy Company"
	}, {
		"Symbol": "DTK",
		"Description": "Deutsche Bank AG"
	}, {
		"Symbol": "DTLA^",
		"Description": "Brookfield DTLA Inc."
	}, {
		"Symbol": "DTQ",
		"Description": "DTE Energy Company"
	}, {
		"Symbol": "DTRM",
		"Description": "Determine Inc"
	}, {
		"Symbol": "DTUS",
		"Description": "Ipath 2 Year Bear"
	}, {
		"Symbol": "DTV",
		"Description": "DTE Energy Company"
	}, {
		"Symbol": "DTY",
		"Description": "DTE Energy Company"
	}, {
		"Symbol": "DTYL",
		"Description": "Ipath 10 Year Bull"
	}, {
		"Symbol": "DTYS",
		"Description": "Ipath 10 Year Bear"
	}, {
		"Symbol": "DUC",
		"Description": "Duff & Phelps Utility & Corporate Bond Trust, Inc."
	}, {
		"Symbol": "DUK",
		"Description": "Duke Energy Corporation"
	}, {
		"Symbol": "DUKH",
		"Description": "Duke Energy Corporation"
	}, {
		"Symbol": "DUSA",
		"Description": "Davis Fundamental ETF Trust Davis Select U.S. Eq"
	}, {
		"Symbol": "DV",
		"Description": "DeVry Education Group Inc."
	}, {
		"Symbol": "DVA",
		"Description": "DaVita Inc."
	}, {
		"Symbol": "DVAX",
		"Description": "Dynavax Technologies"
	}, {
		"Symbol": "DVCR",
		"Description": "Diversicare Healthca"
	}, {
		"Symbol": "DVD",
		"Description": "Dover Motorsports, Inc."
	}, {
		"Symbol": "DVMT",
		"Description": "Dell Technologies Inc."
	}, {
		"Symbol": "DVN",
		"Description": "Devon Energy Corporation"
	}, {
		"Symbol": "DWAC",
		"Description": "Elkhorn Commodity Rotation Strategy ETF"
	}, {
		"Symbol": "DWAQ",
		"Description": "Dynamic OTC Powershares"
	}, {
		"Symbol": "DWAS",
		"Description": "Powershares DWA Smallcap Momentum Portfolio"
	}, {
		"Symbol": "DWAT",
		"Description": "Arrow DWA Tactic ETF"
	}, {
		"Symbol": "DWCH",
		"Description": "Datawatch Cp"
	}, {
		"Symbol": "DWFI",
		"Description": "SPDR DWA Fi Allo ETF"
	}, {
		"Symbol": "DWIN",
		"Description": "PS DWA Tactical Multi-Asset Income"
	}, {
		"Symbol": "DWLD",
		"Description": "Davis Fundamental ETF Trust Davis Select Worldwi"
	}, {
		"Symbol": "DWLV",
		"Description": "Powershares DWA Momentum & Low Volatility Rotati"
	}, {
		"Symbol": "DWSN",
		"Description": "Dawson Geophscl Cmn"
	}, {
		"Symbol": "DWTR",
		"Description": "PS DWA Tactical Sector Rotation"
	}, {
		"Symbol": "DX",
		"Description": "Dynex Capital, Inc."
	}, {
		"Symbol": "DX^A",
		"Description": "Dynex Capital, Inc."
	}, {
		"Symbol": "DX^B",
		"Description": "Dynex Capital, Inc."
	}, {
		"Symbol": "DXB",
		"Description": "Deutsche Bank AG"
	}, {
		"Symbol": "DXCM",
		"Description": "Dexcom"
	}, {
		"Symbol": "DXGE",
		"Description": "Wisdomtree Gr Hdg Eq"
	}, {
		"Symbol": "DXJS",
		"Description": "Wisdomtree JP Hdg Fd"
	}, {
		"Symbol": "DXKW",
		"Description": "Wisdomtree Kor Hdg E"
	}, {
		"Symbol": "DXLG",
		"Description": "Destination XL Grp"
	}, {
		"Symbol": "DXPE",
		"Description": "Dxp Enterprise"
	}, {
		"Symbol": "DXPS",
		"Description": "Wisdomtree UK Hdg Fd"
	}, {
		"Symbol": "DXR",
		"Description": "Daxor Corporation"
	}, {
		"Symbol": "DXTR",
		"Description": "Dextera Surgical Inc"
	}, {
		"Symbol": "DXYN",
		"Description": " Dixie Group"
	}, {
		"Symbol": "DY",
		"Description": "Dycom Industries, Inc."
	}, {
		"Symbol": "DYN",
		"Description": "Dynegy Inc."
	}, {
		"Symbol": "DYN.WS",
		"Description": "Dynegy Inc."
	}, {
		"Symbol": "DYN^A",
		"Description": "Dynegy Inc."
	}, {
		"Symbol": "DYNC",
		"Description": "Dynegy Inc."
	}, {
		"Symbol": "DYNT",
		"Description": "Dynatronics Cp"
	}, {
		"Symbol": "DYSL",
		"Description": "Dynasil Cp America"
	}, {
		"Symbol": "DZSI",
		"Description": "Dasan Zhone Solutions Inc"
	}, {
		"Symbol": "E",
		"Description": "ENI S.p.A."
	}, {
		"Symbol": "EA",
		"Description": "Electronic Arts Inc"
	}, {
		"Symbol": "EAB",
		"Description": "Entergy Arkansas, Inc."
	}, {
		"Symbol": "EACQ",
		"Description": "Easterly Acq Cmn Stk"
	}, {
		"Symbol": "EACQU",
		"Description": "Easterly Acq Units"
	}, {
		"Symbol": "EACQW",
		"Description": "Easterly Acq Warrant"
	}, {
		"Symbol": "EAD",
		"Description": "Wells Fargo Income Opportunities Fund"
	}, {
		"Symbol": "EAE",
		"Description": "Entergy Arkansas, Inc."
	}, {
		"Symbol": "EAGL",
		"Description": "Double Eagle A Ords"
	}, {
		"Symbol": "EAGLU",
		"Description": "Double Eagle Units"
	}, {
		"Symbol": "EAGLW",
		"Description": "Double Eagle Warrant"
	}, {
		"Symbol": "EAI",
		"Description": "Entergy Arkansas, Inc."
	}, {
		"Symbol": "EARN",
		"Description": "Ellington Residential Mortgage REIT"
	}, {
		"Symbol": "EARS",
		"Description": "Auris Medical Cmn"
	}, {
		"Symbol": "EAT",
		"Description": "Brinker International, Inc."
	}, {
		"Symbol": "EBAY",
		"Description": "Ebay Inc"
	}, {
		"Symbol": "EBAYL",
		"Description": "Ebay Inc 6.0% NTS"
	}, {
		"Symbol": "EBF",
		"Description": "Ennis, Inc."
	}, {
		"Symbol": "EBIO",
		"Description": "Eleven Bio Inc"
	}, {
		"Symbol": "EBIX",
		"Description": "Ebix Inc"
	}, {
		"Symbol": "EBMT",
		"Description": "Eagle Bancorp [Mt]"
	}, {
		"Symbol": "EBR",
		"Description": "Centrais Electricas Brasileiras S.A.- Eletrobras"
	}, {
		"Symbol": "EBR.B",
		"Description": "Centrais Electricas Brasileiras S.A.- Eletrobras"
	}, {
		"Symbol": "EBS",
		"Description": "Emergent Biosolutions, Inc."
	}, {
		"Symbol": "EBSB",
		"Description": "Meridian Bncp Cmn"
	}, {
		"Symbol": "EBTC",
		"Description": "Enterprise Bancorp I"
	}, {
		"Symbol": "EC",
		"Description": "Ecopetrol S.A."
	}, {
		"Symbol": "ECA",
		"Description": "Encana Corporation"
	}, {
		"Symbol": "ECAC",
		"Description": "E-Compass Acquisition Corp"
	}, {
		"Symbol": "ECACR",
		"Description": "E-Compass Acq Cmn"
	}, {
		"Symbol": "ECC",
		"Description": "Eagle Point Credit Company Inc."
	}, {
		"Symbol": "ECCA",
		"Description": "Eagle Point Credit Company Inc."
	}, {
		"Symbol": "ECCB",
		"Description": "Eagle Point Credit Company Inc."
	}, {
		"Symbol": "ECCZ",
		"Description": "Eagle Point Credit Company Inc."
	}, {
		"Symbol": "ECF",
		"Description": "Ellsworth Growth and Income Fund Ltd."
	}, {
		"Symbol": "ECHO",
		"Description": "Echo Global Logistic"
	}, {
		"Symbol": "ECL",
		"Description": "Ecolab Inc."
	}, {
		"Symbol": "ECOL",
		"Description": "US Ecology Inc"
	}, {
		"Symbol": "ECOM",
		"Description": "ChannelAdvisor Corporation"
	}, {
		"Symbol": "ECPG",
		"Description": "Encore Capital Grp"
	}, {
		"Symbol": "ECR",
		"Description": "Eclipse Resources Corporation"
	}, {
		"Symbol": "ECT",
		"Description": "ECA Marcellus Trust I"
	}, {
		"Symbol": "ECYT",
		"Description": "Endocyte Inc"
	}, {
		"Symbol": "ED",
		"Description": "Consolidated Edison Inc"
	}, {
		"Symbol": "EDAP",
		"Description": "Edap Tms Sa ADR"
	}, {
		"Symbol": "EDBI",
		"Description": "Legg Mason EM Div Cr"
	}, {
		"Symbol": "EDD",
		"Description": "Morgan Stanley Emerging Markets Domestic Debt Fund, Inc."
	}, {
		"Symbol": "EDF",
		"Description": "Stone Harbor Emerging Markets Income Fund"
	}, {
		"Symbol": "EDGE",
		"Description": "Edge Therapeut Cm S"
	}, {
		"Symbol": "EDGW",
		"Description": "Edgewater Tech Inc"
	}, {
		"Symbol": "EDI",
		"Description": "Stone Harbor Emerging Markets Total Income Fund"
	}, {
		"Symbol": "EDIT",
		"Description": "Editas Medicine Cmn"
	}, {
		"Symbol": "EDN",
		"Description": "Empresa Distribuidora Y Comercializadora Norte S.A. Edenor"
	}, {
		"Symbol": "EDR",
		"Description": "Education Realty Trust Inc."
	}, {
		"Symbol": "EDU",
		"Description": "New Oriental Education & Technology Group, Inc."
	}, {
		"Symbol": "EDUC",
		"Description": "Educational Dev Cp"
	}, {
		"Symbol": "EE",
		"Description": "El Paso Electric Company"
	}, {
		"Symbol": "EEA",
		"Description": "European Equity Fund, Inc. "
	}, {
		"Symbol": "EEFT",
		"Description": "Euronet Worldwide"
	}, {
		"Symbol": "EEI",
		"Description": "Ecology Environment"
	}, {
		"Symbol": "EEMA",
		"Description": "Ishares MSCI EM Asia"
	}, {
		"Symbol": "EEP",
		"Description": "Enbridge Energy, L.P."
	}, {
		"Symbol": "EEQ",
		"Description": "Enbridge Energy Management LLC"
	}, {
		"Symbol": "EFAS",
		"Description": "Global X MSCI Superdividend EAFE ETF"
	}, {
		"Symbol": "EFC",
		"Description": "Ellington Financial LLC"
	}, {
		"Symbol": "EFF",
		"Description": "Eaton vance Floating-Rate Income Plus Fund"
	}, {
		"Symbol": "EFII",
		"Description": "Elec Imaging Inc"
	}, {
		"Symbol": "EFOI",
		"Description": "Energy Focus Cmn"
	}, {
		"Symbol": "EFR",
		"Description": "Eaton Vance Senior Floating-Rate Fund"
	}, {
		"Symbol": "EFSC",
		"Description": "Enterprises Finl Svc"
	}, {
		"Symbol": "EFT",
		"Description": "Eaton Vance Floating Rate Income Trust"
	}, {
		"Symbol": "EFX",
		"Description": "Equifax, Inc."
	}, {
		"Symbol": "EGAN",
		"Description": "Egain Corporation"
	}, {
		"Symbol": "EGAS",
		"Description": "Gas Natural Inc."
	}, {
		"Symbol": "EGBN",
		"Description": "Eagle Bancorp Inc"
	}, {
		"Symbol": "EGF",
		"Description": "Blackrock Enhanced Government Fund, Inc"
	}, {
		"Symbol": "EGHT",
		"Description": "8X8 Inc"
	}, {
		"Symbol": "EGI",
		"Description": "Entree Gold Inc"
	}, {
		"Symbol": "EGIF",
		"Description": "Eagle Growth and Income Opportunities Fund"
	}, {
		"Symbol": "EGL",
		"Description": "Engility Holdings, Inc."
	}, {
		"Symbol": "EGLE",
		"Description": "Eagle Bulk Ship New"
	}, {
		"Symbol": "EGLT",
		"Description": "Egalet Corporation"
	}, {
		"Symbol": "EGN",
		"Description": "Energen Corporation"
	}, {
		"Symbol": "EGO",
		"Description": "Eldorado Gold Corporation"
	}, {
		"Symbol": "EGOV",
		"Description": "Nic Inc"
	}, {
		"Symbol": "EGP",
		"Description": "EastGroup Properties, Inc."
	}, {
		"Symbol": "EGRX",
		"Description": "Eagle Pharmaceutical"
	}, {
		"Symbol": "EGT",
		"Description": "Entertainment Gmg Cmn"
	}, {
		"Symbol": "EGY",
		"Description": "Vaalco Energy Inc"
	}, {
		"Symbol": "EHI",
		"Description": "Western Asset Global High Income Fund Inc"
	}, {
		"Symbol": "EHIC",
		"Description": "eHi Car Services Limited"
	}, {
		"Symbol": "EHT",
		"Description": "Eaton Vance High Income 2021 Target Term Trust"
	}, {
		"Symbol": "EHTH",
		"Description": "Ehealth Inc"
	}, {
		"Symbol": "EIA",
		"Description": "Eaton Vance California Municipal Bond Fund II"
	}, {
		"Symbol": "EIG",
		"Description": "Employers Holdings Inc"
	}, {
		"Symbol": "EIGI",
		"Description": "Endurance Int Grp"
	}, {
		"Symbol": "EIGR",
		"Description": "Eiger Biopharma"
	}, {
		"Symbol": "EIM",
		"Description": "Eaton Vance Municipal Bond Fund"
	}, {
		"Symbol": "EIO",
		"Description": "Eaton Vance Ohio Municipal Bond Fund"
	}, {
		"Symbol": "EIP",
		"Description": "Eaton Vance Pennsylvania Municipal Bond Fund"
	}, {
		"Symbol": "EIV",
		"Description": "Eaton Vance Municipal Bond Fund II"
	}, {
		"Symbol": "EIX",
		"Description": "Edison International"
	}, {
		"Symbol": "EKSO",
		"Description": "Ekso Bionics Holdings Inc"
	}, {
		"Symbol": "EL",
		"Description": "Estee Lauder Companies, Inc. "
	}, {
		"Symbol": "ELC",
		"Description": "Entergy Louisiana, Inc."
	}, {
		"Symbol": "ELEC",
		"Description": "Electrum Special Or"
	}, {
		"Symbol": "ELECU",
		"Description": "Electrum Special Uts"
	}, {
		"Symbol": "ELECW",
		"Description": "Electrum Special Wt"
	}, {
		"Symbol": "ELF",
		"Description": "e.l.f. Beauty, Inc."
	}, {
		"Symbol": "ELGX",
		"Description": "Endologix Inc"
	}, {
		"Symbol": "ELJ",
		"Description": "Entergy Louisiana, Inc."
	}, {
		"Symbol": "ELLI",
		"Description": "Ellie Mae, Inc."
	}, {
		"Symbol": "ELLO",
		"Description": "Ellomay Capital Ltd."
	}, {
		"Symbol": "ELMD",
		"Description": "Electromed, Inc."
	}, {
		"Symbol": "ELNK",
		"Description": "Earthlink Hlds Cmn"
	}, {
		"Symbol": "ELON",
		"Description": "Echelon Corporation"
	}, {
		"Symbol": "ELOS",
		"Description": "Syneron Medical Ltd"
	}, {
		"Symbol": "ELP",
		"Description": "Companhia Paranaense de Energia COPEL"
	}, {
		"Symbol": "ELS",
		"Description": "Equity Lifestyle Properties, Inc."
	}, {
		"Symbol": "ELS^C",
		"Description": "Equity Lifestyle Properties, Inc."
	}, {
		"Symbol": "ELSE",
		"Description": "Electro Sensors In"
	}, {
		"Symbol": "ELTK",
		"Description": "E L T E K Ltd"
	}, {
		"Symbol": "ELU",
		"Description": "Entergy Louisiana, Inc."
	}, {
		"Symbol": "ELY",
		"Description": "Callaway Golf Company"
	}, {
		"Symbol": "EMAN",
		"Description": "eMagin Corporation"
	}, {
		"Symbol": "EMCB",
		"Description": "Wisdomtree Emcb Fund"
	}, {
		"Symbol": "EMCF",
		"Description": "Emclaire Finl Cor"
	}, {
		"Symbol": "EMCG",
		"Description": "Wisdomtree EM Cnr Gr"
	}, {
		"Symbol": "EMCI",
		"Description": "E M C Insurance Gp"
	}, {
		"Symbol": "EMD",
		"Description": "Western Asset Emerging Markets Debt Fund Inc"
	}, {
		"Symbol": "EME",
		"Description": "EMCOR Group, Inc."
	}, {
		"Symbol": "EMES",
		"Description": "Emerge Energy Services LP"
	}, {
		"Symbol": "EMF",
		"Description": "Templeton Emerging Markets Fund"
	}, {
		"Symbol": "EMI",
		"Description": "Eaton Vance Michigan Municipal Income Trust"
	}, {
		"Symbol": "EMIF",
		"Description": "Ishares SP Emg Mk In"
	}, {
		"Symbol": "EMITF",
		"Description": "Elbit Imaging Ord"
	}, {
		"Symbol": "EMJ",
		"Description": "Eaton Vance New Jersey Municipal Bond Fund"
	}, {
		"Symbol": "EMKR",
		"Description": "Emcore Corp"
	}, {
		"Symbol": "EML",
		"Description": "Eastern Co Cmn Stk"
	}, {
		"Symbol": "EMMS",
		"Description": "Emmis Commun Cl A"
	}, {
		"Symbol": "EMN",
		"Description": "Eastman Chemical Company"
	}, {
		"Symbol": "EMO",
		"Description": "ClearBridge Energy MLP Opportunity Fund Inc."
	}, {
		"Symbol": "EMP",
		"Description": "Entergy Mississippi, Inc."
	}, {
		"Symbol": "EMR",
		"Description": "Emerson Electric Company"
	}, {
		"Symbol": "EMX",
		"Description": "Eurasian Minerals Inc."
	}, {
		"Symbol": "ENB",
		"Description": "Enbridge Inc"
	}, {
		"Symbol": "ENBL",
		"Description": "Enable Midstream Partners, LP"
	}, {
		"Symbol": "ENDP",
		"Description": "Endo Int'l Plc"
	}, {
		"Symbol": "ENFC",
		"Description": "Entegra Financ Cm ST"
	}, {
		"Symbol": "ENG",
		"Description": "Englobal Corp"
	}, {
		"Symbol": "ENH",
		"Description": "Endurance Specialty Holdings Ltd"
	}, {
		"Symbol": "ENH^C",
		"Description": "Endurance Specialty Holdings Ltd"
	}, {
		"Symbol": "ENIA",
		"Description": "Enel Americas S.A."
	}, {
		"Symbol": "ENIC",
		"Description": "Enel Chile S.A."
	}, {
		"Symbol": "ENJ",
		"Description": "Entergy New Orleans, Inc."
	}, {
		"Symbol": "ENLC",
		"Description": "EnLink Midstream, LLC"
	}, {
		"Symbol": "ENLK",
		"Description": "EnLink Midstream Partners, LP"
	}, {
		"Symbol": "ENO",
		"Description": "Entergy New Orleans, Inc."
	}, {
		"Symbol": "ENOC",
		"Description": "Enernoc Inc"
	}, {
		"Symbol": "ENPH",
		"Description": "Enphase Energy Inc"
	}, {
		"Symbol": "ENR",
		"Description": "Energizer Holdings, Inc."
	}, {
		"Symbol": "ENRJ",
		"Description": "EnerJex Resources, Inc."
	}, {
		"Symbol": "ENS",
		"Description": "Enersys"
	}, {
		"Symbol": "ENSG",
		"Description": " Ensign Group In"
	}, {
		"Symbol": "ENSV",
		"Description": "ENSERVCO Corporation"
	}, {
		"Symbol": "ENT",
		"Description": "Global Eagle Entrtn"
	}, {
		"Symbol": "ENTA",
		"Description": "Enanta Pharmaceutica"
	}, {
		"Symbol": "ENTG",
		"Description": "Entegris Inc"
	}, {
		"Symbol": "ENTL",
		"Description": "Entellus Medical Cmn"
	}, {
		"Symbol": "ENV",
		"Description": "Envestnet, Inc"
	}, {
		"Symbol": "ENVA",
		"Description": "Enova International, Inc."
	}, {
		"Symbol": "ENX",
		"Description": "Eaton Vance New York Municipal Bond Fund"
	}, {
		"Symbol": "ENZ",
		"Description": "Enzo Biochem, Inc."
	}, {
		"Symbol": "ENZL",
		"Description": "Ishares MSCI New Zea"
	}, {
		"Symbol": "ENZY",
		"Description": "Enzymotec Ltd"
	}, {
		"Symbol": "EOCC",
		"Description": "Enel Generacion Chile S.A."
	}, {
		"Symbol": "EOD",
		"Description": "Wells Fargo Global Dividend Opportunity Fund"
	}, {
		"Symbol": "EOG",
		"Description": "EOG Resources, Inc."
	}, {
		"Symbol": "EOI",
		"Description": "Eaton Vance Enhance Equity Income Fund"
	}, {
		"Symbol": "EOS",
		"Description": "Eaton Vance Enhanced Equity Income Fund II"
	}, {
		"Symbol": "EOT",
		"Description": "Eaton Vance Municipal Income Trust"
	}, {
		"Symbol": "EP^C",
		"Description": "El Paso Corporation"
	}, {
		"Symbol": "EPAM",
		"Description": "EPAM Systems, Inc."
	}, {
		"Symbol": "EPAY",
		"Description": "Bottomline Tech In"
	}, {
		"Symbol": "EPC",
		"Description": "Energizer Holdings, Inc."
	}, {
		"Symbol": "EPD",
		"Description": "Enterprise Products Partners L.P."
	}, {
		"Symbol": "EPE",
		"Description": "EP Energy Corporation"
	}, {
		"Symbol": "EPIX",
		"Description": "Essa Pharma Cmn"
	}, {
		"Symbol": "EPM",
		"Description": "Evolution Petroleum Corporation, Inc."
	}, {
		"Symbol": "EPR",
		"Description": "EPR Properties"
	}, {
		"Symbol": "EPR^C",
		"Description": "EPR Properties"
	}, {
		"Symbol": "EPR^E",
		"Description": "EPR Properties"
	}, {
		"Symbol": "EPR^F",
		"Description": "EPR Properties"
	}, {
		"Symbol": "EPZM",
		"Description": "Epizyme Inc Cmn Stk"
	}, {
		"Symbol": "EQBK",
		"Description": "Equity Bncsrs Cm A"
	}, {
		"Symbol": "EQC",
		"Description": "Equity Commonwealth"
	}, {
		"Symbol": "EQC^D",
		"Description": "Equity Commonwealth"
	}, {
		"Symbol": "EQCO",
		"Description": "Equity Commonwealth"
	}, {
		"Symbol": "EQFN",
		"Description": "Equitable Fincl Cmn"
	}, {
		"Symbol": "EQGP",
		"Description": "EQT GP Holdings, LP"
	}, {
		"Symbol": "EQIX",
		"Description": "Equinix Inc"
	}, {
		"Symbol": "EQM",
		"Description": "EQT Midstream Partners, LP"
	}, {
		"Symbol": "EQR",
		"Description": "Equity Residential"
	}, {
		"Symbol": "EQS",
		"Description": "Equus Total Return, Inc."
	}, {
		"Symbol": "EQT",
		"Description": "EQT Corporation"
	}, {
		"Symbol": "EQY",
		"Description": "Equity One, Inc."
	}, {
		"Symbol": "ERA",
		"Description": "Era Group, Inc."
	}, {
		"Symbol": "ERC",
		"Description": "Wells Fargo Multi-Sector Income Fund"
	}, {
		"Symbol": "ERF",
		"Description": "Enerplus Corporation"
	}, {
		"Symbol": "ERH",
		"Description": "Wells Fargo Utilities and High Income Fund"
	}, {
		"Symbol": "ERI",
		"Description": "Eldorado Resorts Cmn"
	}, {
		"Symbol": "ERIC",
		"Description": "Ericsson ADR"
	}, {
		"Symbol": "ERIE",
		"Description": "Erie Indemnity Co"
	}, {
		"Symbol": "ERII",
		"Description": "Energy Recovery Inc"
	}, {
		"Symbol": "ERJ",
		"Description": "Embraer-Empresa Brasileira de Aeronautica"
	}, {
		"Symbol": "ERN",
		"Description": "Erin Energy Corp."
	}, {
		"Symbol": "EROS",
		"Description": "Eros International PLC"
	}, {
		"Symbol": "ERS",
		"Description": "Empire Res Inc"
	}, {
		"Symbol": "ES",
		"Description": "Eversource Energy"
	}, {
		"Symbol": "ESBK",
		"Description": "Elmira Sav Bk"
	}, {
		"Symbol": "ESCA",
		"Description": "Escalade Inc"
	}, {
		"Symbol": "ESE",
		"Description": "ESCO Technologies Inc."
	}, {
		"Symbol": "ESEA",
		"Description": "Euroseas Ltd"
	}, {
		"Symbol": "ESES",
		"Description": "Eco-Stim Energy Cmn"
	}, {
		"Symbol": "ESG",
		"Description": "Flexshares Stoxx US ESG Impact Index"
	}, {
		"Symbol": "ESGD",
		"Description": "Ishares MSCI EAFE ESG Select Et"
	}, {
		"Symbol": "ESGE",
		"Description": "Ishares MSCI EM ESG Select ETF"
	}, {
		"Symbol": "ESGG",
		"Description": "Flexshares Stoxx Global ESG Impact Index"
	}, {
		"Symbol": "ESGR",
		"Description": "Enstar Group Limited"
	}, {
		"Symbol": "ESGU",
		"Description": "Ishares MSCI USA ESG Optimized ETF"
	}, {
		"Symbol": "ESIO",
		"Description": "Electro Sci Inds"
	}, {
		"Symbol": "ESL",
		"Description": "Esterline Technologies Corporation"
	}, {
		"Symbol": "ESLT",
		"Description": "Elbit Systems Ltd"
	}, {
		"Symbol": "ESNC",
		"Description": "EnSync, Inc."
	}, {
		"Symbol": "ESND",
		"Description": "Essendant Inc"
	}, {
		"Symbol": "ESNT",
		"Description": "Essent Group Ltd."
	}, {
		"Symbol": "ESP",
		"Description": "Espey Mfg. & Electronics Corp."
	}, {
		"Symbol": "ESPR",
		"Description": "Esperion Theraptc Cmn"
	}, {
		"Symbol": "ESRT",
		"Description": "Empire State Realty Trust, Inc."
	}, {
		"Symbol": "ESRX",
		"Description": "Express Scripts"
	}, {
		"Symbol": "ESS",
		"Description": "Essex Property Trust, Inc."
	}, {
		"Symbol": "ESSA",
		"Description": "Essa Bancorp Inc"
	}, {
		"Symbol": "ESTE",
		"Description": "Earthstone Energy, Inc."
	}, {
		"Symbol": "ESV",
		"Description": "ENSCO plc"
	}, {
		"Symbol": "ESXB",
		"Description": "Community Bankers Cmn"
	}, {
		"Symbol": "ETB",
		"Description": "Eaton Vance Tax-Managed Buy-Write Income Fund"
	}, {
		"Symbol": "ETE",
		"Description": "Energy Transfer Equity, L.P."
	}, {
		"Symbol": "ETFC",
		"Description": "E*Trade Finl Corp"
	}, {
		"Symbol": "ETG",
		"Description": "Eaton Vance Tax-Advantaged Global Dividend Income Fund"
	}, {
		"Symbol": "ETH",
		"Description": "Ethan Allen Interiors Inc."
	}, {
		"Symbol": "ETJ",
		"Description": "Eaton Vance Risk-Managed Diversified Equity Income Fund"
	}, {
		"Symbol": "ETM",
		"Description": "Entercom Communications Corporation"
	}, {
		"Symbol": "ETN",
		"Description": "Eaton Corporation, PLC"
	}, {
		"Symbol": "ETO",
		"Description": "Eaton Vance Tax-Advantage Global Dividend Opp"
	}, {
		"Symbol": "ETP",
		"Description": "ENERGY TRANSFER PARTNERS"
	}, {
		"Symbol": "ETR",
		"Description": "Entergy Corporation"
	}, {
		"Symbol": "ETRM",
		"Description": "Enteromedics Inc"
	}, {
		"Symbol": "ETSY",
		"Description": "Etsy Inc Common Stk"
	}, {
		"Symbol": "ETV",
		"Description": "Eaton Vance Corporation"
	}, {
		"Symbol": "ETW",
		"Description": "Eaton Vance Corporation"
	}, {
		"Symbol": "ETX",
		"Description": "Eaton Vance Municipal Income 2028 Term Trust"
	}, {
		"Symbol": "ETY",
		"Description": "Eaton Vance Tax-Managed Diversified Equity Income Fund"
	}, {
		"Symbol": "EUFN",
		"Description": "Ishares MSCI EUR Fin"
	}, {
		"Symbol": "EURN",
		"Description": "Euronav NV"
	}, {
		"Symbol": "EV",
		"Description": "Eaton Vance Corporation"
	}, {
		"Symbol": "EVA",
		"Description": "Enviva Partners, LP"
	}, {
		"Symbol": "EVAR",
		"Description": "Lombard Medical Ord"
	}, {
		"Symbol": "EVBG",
		"Description": "Everbridge Inc"
	}, {
		"Symbol": "EVBN",
		"Description": "Evans Bancorp, Inc."
	}, {
		"Symbol": "EVBS",
		"Description": "Eastern Va Bkshs"
	}, {
		"Symbol": "EVC",
		"Description": "Entravision Communications Corporation"
	}, {
		"Symbol": "EVEP",
		"Description": "Ev Energy Partners"
	}, {
		"Symbol": "EVER",
		"Description": "EverBank Financial Corp."
	}, {
		"Symbol": "EVER^A",
		"Description": "EverBank Financial Corp."
	}, {
		"Symbol": "EVF",
		"Description": "Eaton Vance Senior Income Trust"
	}, {
		"Symbol": "EVG",
		"Description": "Eaton Vance Short Diversified Income Fund"
	}, {
		"Symbol": "EVGBC",
		"Description": "Eaton Vnce Gbl Inc"
	}, {
		"Symbol": "EVGN",
		"Description": "Evogene Ltd Ord"
	}, {
		"Symbol": "EVH",
		"Description": "Evolent Health, Inc"
	}, {
		"Symbol": "EVHC",
		"Description": "Envision Healthcare Corporation"
	}, {
		"Symbol": "EVHC^",
		"Description": "Envision Healthcare Corporation"
	}, {
		"Symbol": "EVI",
		"Description": "EnviroStarm, Inc."
	}, {
		"Symbol": "EVJ",
		"Description": "Eaton Vance New Jersey Municipal Income Trust"
	}, {
		"Symbol": "EVK",
		"Description": "Ever Glory Intl Grp"
	}, {
		"Symbol": "EVLMC",
		"Description": "Eaton Vnce Tabs 5-15"
	}, {
		"Symbol": "EVLV",
		"Description": "Evine Live Cl A"
	}, {
		"Symbol": "EVM",
		"Description": "Eaton Vance California Municipal Bond Fund"
	}, {
		"Symbol": "EVN",
		"Description": "Eaton Vance Municipal Income Trust"
	}, {
		"Symbol": "EVO",
		"Description": "Eaton Vance Ohio Municipal Income Trust"
	}, {
		"Symbol": "EVOK",
		"Description": "Evoke Pharma Cmn"
	}, {
		"Symbol": "EVOL",
		"Description": "Evolving Systems Inc"
	}, {
		"Symbol": "EVP",
		"Description": "Eaton Vance Pennsylvania Municipal Income Trust"
	}, {
		"Symbol": "EVR",
		"Description": "Evercore Partners Inc"
	}, {
		"Symbol": "EVRI",
		"Description": "Everi Holdings Inc."
	}, {
		"Symbol": "EVSTC",
		"Description": "Eton Vnce Stck Nxtsh"
	}, {
		"Symbol": "EVT",
		"Description": "Eaton Vance Tax Advantaged Dividend Income Fund"
	}, {
		"Symbol": "EVTC",
		"Description": "Evertec, Inc."
	}, {
		"Symbol": "EVV",
		"Description": "Eaton Vance Limited Duration Income Fund"
	}, {
		"Symbol": "EVY",
		"Description": "Eaton Vance New York Municipal Income Trust"
	}, {
		"Symbol": "EW",
		"Description": "Edwards Lifesciences Corporation"
	}, {
		"Symbol": "EWBC",
		"Description": "East West Bancorp"
	}, {
		"Symbol": "EWZS",
		"Description": "Ishares MSCI Brazil"
	}, {
		"Symbol": "EXA",
		"Description": "Exa Corporation"
	}, {
		"Symbol": "EXAC",
		"Description": "Exactech Inc"
	}, {
		"Symbol": "EXAR",
		"Description": "Exar Corporation"
	}, {
		"Symbol": "EXAS",
		"Description": "Exact Sciences Cor"
	}, {
		"Symbol": "EXC",
		"Description": "Exelon Corporation"
	}, {
		"Symbol": "EXCU",
		"Description": "Exelon Corporation"
	}, {
		"Symbol": "EXD",
		"Description": "Eaton Vance Tax-Advantaged Bond"
	}, {
		"Symbol": "EXEL",
		"Description": "Exelixis Inc"
	}, {
		"Symbol": "EXFO",
		"Description": "Exfo Inc"
	}, {
		"Symbol": "EXG",
		"Description": "Eaton Vance Tax-Managed Global Diversified Equity Income Fund"
	}, {
		"Symbol": "EXK",
		"Description": "Endeavour Silver Corporation"
	}, {
		"Symbol": "EXLS",
		"Description": "Exlservice Holdings"
	}, {
		"Symbol": "EXP",
		"Description": "Eagle Materials Inc"
	}, {
		"Symbol": "EXPD",
		"Description": "Expeditors Intl"
	}, {
		"Symbol": "EXPE",
		"Description": "Expedia Inc"
	}, {
		"Symbol": "EXPO",
		"Description": "Exponent Inc"
	}, {
		"Symbol": "EXPR",
		"Description": "Express, Inc."
	}, {
		"Symbol": "EXR",
		"Description": "Extra Space Storage Inc"
	}, {
		"Symbol": "EXTN",
		"Description": "Exterran Corporation"
	}, {
		"Symbol": "EXTR",
		"Description": "Extreme Networks"
	}, {
		"Symbol": "EYEG",
		"Description": "Eyegate Pharma Cmn"
	}, {
		"Symbol": "EYEGW",
		"Description": "Eyegate Pharm Wts"
	}, {
		"Symbol": "EYES",
		"Description": "Second Sight Cmn"
	}, {
		"Symbol": "EZPW",
		"Description": "Ezcorp Inc"
	}, {
		"Symbol": "EZT",
		"Description": "Entergy Texas Inc"
	}, {
		"Symbol": "F",
		"Description": "Ford Motor Company"
	}, {
		"Symbol": "FAAR",
		"Description": "FT Alt Ab Ret ST ETF"
	}, {
		"Symbol": "FAB",
		"Description": "First TR ML CA Alpha"
	}, {
		"Symbol": "FAC",
		"Description": "First Acceptance Corporation"
	}, {
		"Symbol": "FAD",
		"Description": "First TR ML Cp Gr Al"
	}, {
		"Symbol": "FAF",
		"Description": "First American Corporation "
	}, {
		"Symbol": "FALC",
		"Description": "Falconstor Sftwr"
	}, {
		"Symbol": "FALN",
		"Description": "Ishares Fallen Angels USD Bond"
	}, {
		"Symbol": "FAM",
		"Description": "First Trust/Aberdeen Global Opportunity Income Fund"
	}, {
		"Symbol": "FANG",
		"Description": "Diamondback Energy"
	}, {
		"Symbol": "FANH",
		"Description": "Fanhua Inc."
	}, {
		"Symbol": "FARM",
		"Description": "Farmer Brothers"
	}, {
		"Symbol": "FARO",
		"Description": "Faro Tech Inc"
	}, {
		"Symbol": "FAST",
		"Description": "Fastenal Co"
	}, {
		"Symbol": "FATE",
		"Description": "Fate Therapeutics Cmn"
	}, {
		"Symbol": "FAX",
		"Description": "Aberdeen Asia-Pacific Income Fund Inc"
	}, {
		"Symbol": "FB",
		"Description": "Facebook Inc"
	}, {
		"Symbol": "FBC",
		"Description": "Flagstar Bancorp, Inc."
	}, {
		"Symbol": "FBHS",
		"Description": "Fortune Brands Home & Security, Inc."
	}, {
		"Symbol": "FBIO",
		"Description": "Fortress Biotech Inc"
	}, {
		"Symbol": "FBIZ",
		"Description": "First Business Finan"
	}, {
		"Symbol": "FBK",
		"Description": "FB Financial Corporation"
	}, {
		"Symbol": "FBMS",
		"Description": "First Bancshs [Ms]"
	}, {
		"Symbol": "FBNC",
		"Description": "First Bancorp [Nc]"
	}, {
		"Symbol": "FBNK",
		"Description": "First Connecticut BA"
	}, {
		"Symbol": "FBP",
		"Description": "First BanCorp."
	}, {
		"Symbol": "FBR",
		"Description": "Fibria Celulose S.A."
	}, {
		"Symbol": "FBRC",
		"Description": "Fbr & Co. Common Stk"
	}, {
		"Symbol": "FBSS",
		"Description": "Fauquier Bankshares"
	}, {
		"Symbol": "FBZ",
		"Description": "FT Brazil Alphadex"
	}, {
		"Symbol": "FC",
		"Description": "Franklin Covey Company"
	}, {
		"Symbol": "FCA",
		"Description": "FT China Alphadex"
	}, {
		"Symbol": "FCAN",
		"Description": "FT Canada Alphadex"
	}, {
		"Symbol": "FCAP",
		"Description": "First Capital Inc"
	}, {
		"Symbol": "FCAU",
		"Description": "Fiat Chrysler Automobiles N.V."
	}, {
		"Symbol": "FCB",
		"Description": "FCB Financial Holdings, Inc."
	}, {
		"Symbol": "FCBC",
		"Description": "First Community Bksh"
	}, {
		"Symbol": "FCCO",
		"Description": "First Community Corp"
	}, {
		"Symbol": "FCCY",
		"Description": "1St Constitution Bcp"
	}, {
		"Symbol": "FCE.A",
		"Description": "Forest City Realty Trust, Inc."
	}, {
		"Symbol": "FCE.B",
		"Description": "Forest City Realty Trust, Inc."
	}, {
		"Symbol": "FCEF",
		"Description": "First Trust CEF Income Opportunity ETF"
	}, {
		"Symbol": "FCEL",
		"Description": "Fuelcell Energy Inc"
	}, {
		"Symbol": "FCF",
		"Description": "First Commonwealth Financial Corporation"
	}, {
		"Symbol": "FCFP",
		"Description": "First Comty Fncl Cmn"
	}, {
		"Symbol": "FCFS",
		"Description": "First Cash, Inc."
	}, {
		"Symbol": "FCH",
		"Description": "FelCor Lodging Trust Incorporated"
	}, {
		"Symbol": "FCH^A",
		"Description": "FelCor Lodging Trust Incorporated"
	}, {
		"Symbol": "FCN",
		"Description": "FTI Consulting, Inc."
	}, {
		"Symbol": "FCNCA",
		"Description": "First Citizens Bancs"
	}, {
		"Symbol": "FCO",
		"Description": "Aberdeen Global Income Fund, Inc."
	}, {
		"Symbol": "FCPT",
		"Description": "Four Corners Property Trust, Inc."
	}, {
		"Symbol": "FCSC",
		"Description": "Fibrocell Science Cmn"
	}, {
		"Symbol": "FCT",
		"Description": "First Trust Senior Floating Rate Income Fund II"
	}, {
		"Symbol": "FCVT",
		"Description": "First TR Strategic C"
	}, {
		"Symbol": "FCX",
		"Description": "Freeport-McMoran, Inc."
	}, {
		"Symbol": "FDC",
		"Description": "First Data Corporation"
	}, {
		"Symbol": "FDEF",
		"Description": "First Defiance Finl"
	}, {
		"Symbol": "FDEU",
		"Description": "First Trust Dynamic Europe Equity Income Fund"
	}, {
		"Symbol": "FDIV",
		"Description": "First Trust ETF IV"
	}, {
		"Symbol": "FDML",
		"Description": "Federal-Mogul HD Cmn"
	}, {
		"Symbol": "FDP",
		"Description": "Fresh Del Monte Produce, Inc."
	}, {
		"Symbol": "FDS",
		"Description": "FactSet Research Systems Inc."
	}, {
		"Symbol": "FDT",
		"Description": "FT Dev Mkts Exus A D"
	}, {
		"Symbol": "FDTS",
		"Description": "FT Dv Mkts Exus Smcp"
	}, {
		"Symbol": "FDUS",
		"Description": "Fidus Investment Cor"
	}, {
		"Symbol": "FDX",
		"Description": "FedEx Corporation"
	}, {
		"Symbol": "FE",
		"Description": "FirstEnergy Corporation"
	}, {
		"Symbol": "FEI",
		"Description": "First Trust MLP and Energy Income Fund"
	}, {
		"Symbol": "FEIM",
		"Description": "Frequency Elcts Inc"
	}, {
		"Symbol": "FELE",
		"Description": "Franklin Electric Co"
	}, {
		"Symbol": "FELP",
		"Description": "Foresight Energy LP"
	}, {
		"Symbol": "FEM",
		"Description": "FT EM Mkts Alphadex"
	}, {
		"Symbol": "FEMB",
		"Description": "First TR Emrg Bd ETF"
	}, {
		"Symbol": "FEMS",
		"Description": "FT Dv Mkt Sm Cap A D"
	}, {
		"Symbol": "FEN",
		"Description": "First Trust Energy Income and Growth Fund"
	}, {
		"Symbol": "FENG",
		"Description": "Phoenix New Media Limited"
	}, {
		"Symbol": "FENX",
		"Description": "Fenix Parts Inc Cmn"
	}, {
		"Symbol": "FEO",
		"Description": "First Trust/Aberdeen Emerging Opportunity Fund"
	}, {
		"Symbol": "FEP",
		"Description": "FT Europe Alphadex"
	}, {
		"Symbol": "FET",
		"Description": "Forum Energy Technologies, Inc."
	}, {
		"Symbol": "FEUZ",
		"Description": "First TR Erzne Alphdx"
	}, {
		"Symbol": "FEX",
		"Description": "First TR Lg Cp Alpha"
	}, {
		"Symbol": "FEYE",
		"Description": "Fireeye Inc"
	}, {
		"Symbol": "FF",
		"Description": "FutureFuel Corp."
	}, {
		"Symbol": "FFA",
		"Description": "First Trust"
	}, {
		"Symbol": "FFBC",
		"Description": "First Finl Bncp [Oh]"
	}, {
		"Symbol": "FFC",
		"Description": "Flaherty & Crumrine Preferred Securities Income Fund Inc"
	}, {
		"Symbol": "FFG",
		"Description": "FBL Financial Group, Inc."
	}, {
		"Symbol": "FFHL",
		"Description": "Fuwei Films [Holding"
	}, {
		"Symbol": "FFIC",
		"Description": "Flushing Finl Corp"
	}, {
		"Symbol": "FFIN",
		"Description": "First Finl Bkshs Inc"
	}, {
		"Symbol": "FFIV",
		"Description": "F5 Networks Inc"
	}, {
		"Symbol": "FFKT",
		"Description": "Farmers Capital BA"
	}, {
		"Symbol": "FFNW",
		"Description": "First Financial Nort"
	}, {
		"Symbol": "FFWM",
		"Description": "First Foundation Cmn"
	}, {
		"Symbol": "FGB",
		"Description": "First Trust Specialty Finance and Financial Opportunities Fund"
	}, {
		"Symbol": "FGBI",
		"Description": "First Gurty Banc Cmn"
	}, {
		"Symbol": "FGEN",
		"Description": "Fibrogen Inc CS"
	}, {
		"Symbol": "FGL",
		"Description": "Fidelity and Guaranty Life"
	}, {
		"Symbol": "FGM",
		"Description": "FT Germany Alphadex"
	}, {
		"Symbol": "FGP",
		"Description": "Ferrellgas Partners, L.P."
	}, {
		"Symbol": "FH",
		"Description": "Form Holdings Cp"
	}, {
		"Symbol": "FHB",
		"Description": "First Hawaiian Inc Cmn"
	}, {
		"Symbol": "FHCO",
		"Description": "Female Health Co"
	}, {
		"Symbol": "FHK",
		"Description": "FT Hong Hong Alphadex"
	}, {
		"Symbol": "FHN",
		"Description": "First Horizon National Corporation"
	}, {
		"Symbol": "FHN^A",
		"Description": "First Horizon National Corporation"
	}, {
		"Symbol": "FHY",
		"Description": "First Trust Strategic High Income Fund II"
	}, {
		"Symbol": "FI",
		"Description": "Franks International N.V."
	}, {
		"Symbol": "FIBK",
		"Description": "First Interstate Ban"
	}, {
		"Symbol": "FICO",
		"Description": "Fair Isaac Corporation"
	}, {
		"Symbol": "FIF",
		"Description": "First Trust Energy Infrastructure Fund"
	}, {
		"Symbol": "FIG",
		"Description": "Fortress Investment Group LLC"
	}, {
		"Symbol": "FII",
		"Description": "Federated Investors, Inc."
	}, {
		"Symbol": "FINL",
		"Description": "Finish Line Cl A"
	}, {
		"Symbol": "FINQ",
		"Description": "Purefunds Solactive Fintech ETF"
	}, {
		"Symbol": "FINX",
		"Description": "Global X Fintech Thematic ETF"
	}, {
		"Symbol": "FIS",
		"Description": "Fidelity National Information Services, Inc."
	}, {
		"Symbol": "FISI",
		"Description": "Financial Institut"
	}, {
		"Symbol": "FISV",
		"Description": "Fiserv Inc"
	}, {
		"Symbol": "FIT",
		"Description": "Fitbit, Inc."
	}, {
		"Symbol": "FITB",
		"Description": "Fifth Third Bncp"
	}, {
		"Symbol": "FITBI",
		"Description": "Fifth Third Bancorp"
	}, {
		"Symbol": "FITS",
		"Description": " Health and Fitness ETF"
	}, {
		"Symbol": "FIV",
		"Description": "First Trust Senior Floating Rate 2022 Target Term Fund"
	}, {
		"Symbol": "FIVE",
		"Description": "Five Below Inc"
	}, {
		"Symbol": "FIVN",
		"Description": "Five9 Inc Cmn"
	}, {
		"Symbol": "FIX",
		"Description": "Comfort Systems USA, Inc."
	}, {
		"Symbol": "FIZZ",
		"Description": "Natl Beverage Cp"
	}, {
		"Symbol": "FJP",
		"Description": "First TR Japan Alpdx"
	}, {
		"Symbol": "FKO",
		"Description": "FT South Korea Alphadex"
	}, {
		"Symbol": "FKU",
		"Description": "FT UK Alphadex"
	}, {
		"Symbol": "FL",
		"Description": "Foot Locker, Inc."
	}, {
		"Symbol": "FLAG",
		"Description": "Weatherstorm Forensi"
	}, {
		"Symbol": "FLAT",
		"Description": "Ipath Flattener"
	}, {
		"Symbol": "FLC",
		"Description": "Flaherty & Crumrine Total Return Fund Inc"
	}, {
		"Symbol": "FLDM",
		"Description": "Fluidigm Corporation"
	}, {
		"Symbol": "FLEX",
		"Description": "Flextronics Intl Ltd"
	}, {
		"Symbol": "FLGT",
		"Description": "Fulgent Genetics Inc"
	}, {
		"Symbol": "FLIC",
		"Description": "First of Long Isla"
	}, {
		"Symbol": "FLIR",
		"Description": "Flir Systems Inc"
	}, {
		"Symbol": "FLKS",
		"Description": "Flex Pharma Inc Cmn"
	}, {
		"Symbol": "FLL",
		"Description": "Full House Rsts Cmn"
	}, {
		"Symbol": "FLN",
		"Description": "FT Latin Am Alphadex"
	}, {
		"Symbol": "FLO",
		"Description": "Flowers Foods, Inc."
	}, {
		"Symbol": "FLOW",
		"Description": "SPX FLOW, Inc."
	}, {
		"Symbol": "FLR",
		"Description": "Fluor Corporation"
	}, {
		"Symbol": "FLS",
		"Description": "Flowserve Corporation"
	}, {
		"Symbol": "FLT",
		"Description": "FleetCor Technologies, Inc."
	}, {
		"Symbol": "FLWS",
		"Description": "1-800-Flowers.Com"
	}, {
		"Symbol": "FLXN",
		"Description": "Flexion Therapeutics"
	}, {
		"Symbol": "FLXS",
		"Description": "Flexsteel Inds"
	}, {
		"Symbol": "FLY",
		"Description": "Fly Leasing Limited"
	}, {
		"Symbol": "FMB",
		"Description": "First Trust ETF III"
	}, {
		"Symbol": "FMBH",
		"Description": "First Mid Ill Bncshr"
	}, {
		"Symbol": "FMBI",
		"Description": "First Midwest Bncp"
	}, {
		"Symbol": "FMC",
		"Description": "FMC Corporation"
	}, {
		"Symbol": "FMI",
		"Description": "Foundation Medicine"
	}, {
		"Symbol": "FMK",
		"Description": "First TR Mega Cp Alp"
	}, {
		"Symbol": "FMN",
		"Description": "Federated Premier Municipal Income Fund"
	}, {
		"Symbol": "FMNB",
		"Description": "Farmers Natl Banc Cp"
	}, {
		"Symbol": "FMO",
		"Description": "Fiduciary/Claymore MLP Opportunity Fund"
	}, {
		"Symbol": "FMS",
		"Description": "Fresenius Medical Care Corporation"
	}, {
		"Symbol": "FMSA",
		"Description": "Fairmount Santrol Holdings Inc."
	}, {
		"Symbol": "FMX",
		"Description": "Fomento Economico Mexicano S.A.B. de C.V."
	}, {
		"Symbol": "FMY",
		"Description": "First Trust"
	}, {
		"Symbol": "FN",
		"Description": "Fabrinet"
	}, {
		"Symbol": "FNB",
		"Description": "F.N.B. Corporation"
	}, {
		"Symbol": "FNB^E",
		"Description": "F.N.B. Corporation"
	}, {
		"Symbol": "FNBC",
		"Description": "First Nbc Bank Holdi"
	}, {
		"Symbol": "FNCX",
		"Description": "Function[X] Inc"
	}, {
		"Symbol": "FNF",
		"Description": "Fidelity National Financial, Inc."
	}, {
		"Symbol": "FNFV",
		"Description": "Fidelity National Financial, Inc."
	}, {
		"Symbol": "FNGN",
		"Description": "Financial Engines Cmn"
	}, {
		"Symbol": "FNHC",
		"Description": "Federated Natl Hldg"
	}, {
		"Symbol": "FNJN",
		"Description": "Finjan Holdings Cmn"
	}, {
		"Symbol": "FNK",
		"Description": "First TR MD Cp Vl Al"
	}, {
		"Symbol": "FNLC",
		"Description": "First Bancorp Inc"
	}, {
		"Symbol": "FNSR",
		"Description": "Finisar Corp"
	}, {
		"Symbol": "FNTEU",
		"Description": "Fintech Acquisition Corp. II Unit"
	}, {
		"Symbol": "FNV",
		"Description": "Franco-Nevada Corporation"
	}, {
		"Symbol": "FNWB",
		"Description": "First Nw Banc Cmn"
	}, {
		"Symbol": "FNX",
		"Description": "First Trust Mid Cap"
	}, {
		"Symbol": "FNY",
		"Description": "First TR Mid Cp Alph"
	}, {
		"Symbol": "FOE",
		"Description": "Ferro Corporation"
	}, {
		"Symbol": "FOF",
		"Description": "Cohen & Steers Closed-End Opportunity Fund, Inc."
	}, {
		"Symbol": "FOGO",
		"Description": "Fogo De Chao Cm ST"
	}, {
		"Symbol": "FOLD",
		"Description": "Amicus Therapeutics"
	}, {
		"Symbol": "FOMX",
		"Description": "Foamix Pharma Ord"
	}, {
		"Symbol": "FONE",
		"Description": "First Trust Ndq Smtph"
	}, {
		"Symbol": "FONR",
		"Description": "Fonar Corp"
	}, {
		"Symbol": "FOR",
		"Description": "Forestar Group Inc"
	}, {
		"Symbol": "FORD",
		"Description": "Forward Inds Inc"
	}, {
		"Symbol": "FORK",
		"Description": "Fuling Global Ord Sh"
	}, {
		"Symbol": "FORM",
		"Description": "Formfactor Inc"
	}, {
		"Symbol": "FORR",
		"Description": "Forrester Resrch"
	}, {
		"Symbol": "FORTY",
		"Description": "Formula Sys [1985]"
	}, {
		"Symbol": "FOSL",
		"Description": "Fossil Group Cmn Stk"
	}, {
		"Symbol": "FOX",
		"Description": "21St Centry Fox Class B"
	}, {
		"Symbol": "FOXA",
		"Description": "21St Centry Fox Class A"
	}, {
		"Symbol": "FOXF",
		"Description": "Fox Factory Cp Cmn"
	}, {
		"Symbol": "FPA",
		"Description": "FT Asia Pac Ex Japan"
	}, {
		"Symbol": "FPAY",
		"Description": "Flexshopper Inc."
	}, {
		"Symbol": "FPF",
		"Description": "First Trust Intermediate Duration Preferred & Income Fund"
	}, {
		"Symbol": "FPI",
		"Description": "Farmland Partners Inc."
	}, {
		"Symbol": "FPL",
		"Description": "First Trust New Opportunities MLP & Energy Fund"
	}, {
		"Symbol": "FPO",
		"Description": "First Potomac Realty Trust"
	}, {
		"Symbol": "FPP",
		"Description": "FieldPoint Petroleum Corporation"
	}, {
		"Symbol": "FPP.WS",
		"Description": "FieldPoint Petroleum Corporation"
	}, {
		"Symbol": "FPRX",
		"Description": "Five Prime Thera Cmn"
	}, {
		"Symbol": "FPT",
		"Description": "Federated Premier Intermediate Municipal Income Fund"
	}, {
		"Symbol": "FPXI",
		"Description": "First TR Itl Ipo ETF"
	}, {
		"Symbol": "FR",
		"Description": "First Industrial Realty Trust, Inc."
	}, {
		"Symbol": "FRA",
		"Description": "Blackrock Floating Rate Income Strategies Fund Inc"
	}, {
		"Symbol": "FRAC",
		"Description": "Keane Group, Inc."
	}, {
		"Symbol": "FRAN",
		"Description": "Francesca's Holdings"
	}, {
		"Symbol": "FRBA",
		"Description": "First Bank Cmn"
	}, {
		"Symbol": "FRBK",
		"Description": "Republic First Bcp"
	}, {
		"Symbol": "FRC",
		"Description": "FIRST REPUBLIC BANK"
	}, {
		"Symbol": "FRC^B",
		"Description": "FIRST REPUBLIC BANK"
	}, {
		"Symbol": "FRC^C",
		"Description": "FIRST REPUBLIC BANK"
	}, {
		"Symbol": "FRC^D",
		"Description": "FIRST REPUBLIC BANK"
	}, {
		"Symbol": "FRC^E",
		"Description": "FIRST REPUBLIC BANK"
	}, {
		"Symbol": "FRC^F",
		"Description": "FIRST REPUBLIC BANK"
	}, {
		"Symbol": "FRC^G",
		"Description": "FIRST REPUBLIC BANK"
	}, {
		"Symbol": "FRD",
		"Description": "Friedman Industries Inc."
	}, {
		"Symbol": "FRED",
		"Description": "Fred's Inc"
	}, {
		"Symbol": "FRGI",
		"Description": "Fiesta Restaurant Gp"
	}, {
		"Symbol": "FRME",
		"Description": "First Merchants Corp"
	}, {
		"Symbol": "FRO",
		"Description": "Frontline Ltd."
	}, {
		"Symbol": "FRP",
		"Description": "Fairpoint Communicat"
	}, {
		"Symbol": "FRPH",
		"Description": "Frp Holdings Inc"
	}, {
		"Symbol": "FRPT",
		"Description": "Freshpet Inc CS"
	}, {
		"Symbol": "FRSH",
		"Description": "Papa Murphys Hld Com"
	}, {
		"Symbol": "FRT",
		"Description": "Federal Realty Investment Trust"
	}, {
		"Symbol": "FRTA",
		"Description": "Forterra Inc"
	}, {
		"Symbol": "FSAM",
		"Description": "Fifth Street Cmn"
	}, {
		"Symbol": "FSB",
		"Description": "Franklin Financial Network, Inc."
	}, {
		"Symbol": "FSBC",
		"Description": "Fsb Community Bnksh"
	}, {
		"Symbol": "FSBK",
		"Description": "First South Bncp Inc"
	}, {
		"Symbol": "FSBW",
		"Description": "FS Bancorp Inc"
	}, {
		"Symbol": "FSC",
		"Description": "Fifth Street Finance"
	}, {
		"Symbol": "FSCE",
		"Description": "Fifth Street Finance Corp."
	}, {
		"Symbol": "FSCFL",
		"Description": "Fth ST Fin 6.125 Sn"
	}, {
		"Symbol": "FSD",
		"Description": "First Trust High Income Long Short Fund"
	}, {
		"Symbol": "FSFG",
		"Description": "First Savings Financ"
	}, {
		"Symbol": "FSFR",
		"Description": "Fifth Strt Snr Flt"
	}, {
		"Symbol": "FSI",
		"Description": "Flexible Solutions International Inc."
	}, {
		"Symbol": "FSIC",
		"Description": "FS Investment Corporation"
	}, {
		"Symbol": "FSLR",
		"Description": "First Solar Inc"
	}, {
		"Symbol": "FSM",
		"Description": "Fortuna Silver Mines Inc."
	}, {
		"Symbol": "FSNN",
		"Description": "Fusion Telecom Intl"
	}, {
		"Symbol": "FSP",
		"Description": "Franklin Street Properties Corp."
	}, {
		"Symbol": "FSS",
		"Description": "Federal Signal Corporation"
	}, {
		"Symbol": "FSTR",
		"Description": "Foster L B Co"
	}, {
		"Symbol": "FSV",
		"Description": "Firstsrvce Sub Vt Sh"
	}, {
		"Symbol": "FSZ",
		"Description": "FT Switzerland Alphadex"
	}, {
		"Symbol": "FT",
		"Description": "Franklin Universal Trust"
	}, {
		"Symbol": "FTA",
		"Description": "First TR Lr CA Alpha"
	}, {
		"Symbol": "FTAG",
		"Description": "First TR Indxx Gl Ag"
	}, {
		"Symbol": "FTAI",
		"Description": "Fortress Transportation and Infrastructure Investors LLC"
	}, {
		"Symbol": "FTC",
		"Description": "First Trust Large CA"
	}, {
		"Symbol": "FTCS",
		"Description": "First Trust Capital"
	}, {
		"Symbol": "FTD",
		"Description": "Ftd Companies"
	}, {
		"Symbol": "FTEK",
		"Description": "Fuel Tech Inc"
	}, {
		"Symbol": "FTEO",
		"Description": "Fronteo Inc"
	}, {
		"Symbol": "FTF",
		"Description": "Franklin Limited Duration Income Trust"
	}, {
		"Symbol": "FTGC",
		"Description": "First Trust Glb Tc Cmn"
	}, {
		"Symbol": "FTHI",
		"Description": "First Trust Exchange"
	}, {
		"Symbol": "FTI",
		"Description": "TechnipFMC plc"
	}, {
		"Symbol": "FTK",
		"Description": "Flotek Industries, Inc."
	}, {
		"Symbol": "FTLB",
		"Description": "First Trust ETF Vi"
	}, {
		"Symbol": "FTNT",
		"Description": "Fortinet Inc"
	}, {
		"Symbol": "FTR",
		"Description": "Frontier Commun Cp"
	}, {
		"Symbol": "FTRI",
		"Description": "First TR Indxx Glb N"
	}, {
		"Symbol": "FTRPR",
		"Description": "Frontier A Mn Cnv Pd"
	}, {
		"Symbol": "FTS",
		"Description": "Fortis Inc."
	}, {
		"Symbol": "FTSL",
		"Description": "First TR Snr Ln ETF"
	}, {
		"Symbol": "FTSM",
		"Description": "First Trust ETF IV"
	}, {
		"Symbol": "FTV",
		"Description": "Fortive Corporation"
	}, {
		"Symbol": "FTW",
		"Description": "FT Hk Alphadex"
	}, {
		"Symbol": "FTXD",
		"Description": "First Trust Nasdaq Retail ETF"
	}, {
		"Symbol": "FTXG",
		"Description": "First Trust Nasdaq Food & Beverage ETF"
	}, {
		"Symbol": "FTXH",
		"Description": "First Trust Nasdaq Pharmaceuticals ETF"
	}, {
		"Symbol": "FTXL",
		"Description": "First Trust Nasdaq Semiconductor ETF"
	}, {
		"Symbol": "FTXN",
		"Description": "First Trust Nasdaq Oil & Gas ETF"
	}, {
		"Symbol": "FTXO",
		"Description": "First Trust Nasdaq Bank ETF"
	}, {
		"Symbol": "FTXR",
		"Description": "First Trust Nasdaq Transportation ETF"
	}, {
		"Symbol": "FUEL",
		"Description": "Rocket Fuel Inc"
	}, {
		"Symbol": "FUL",
		"Description": "H. B. Fuller Company"
	}, {
		"Symbol": "FULLL",
		"Description": "Full Circle Cp Sr Nt"
	}, {
		"Symbol": "FULT",
		"Description": "Fulton Financial Cor"
	}, {
		"Symbol": "FUN",
		"Description": "Cedar Fair, L.P."
	}, {
		"Symbol": "FUNC",
		"Description": "First United Corp"
	}, {
		"Symbol": "FUND",
		"Description": "Sprott Focus Trust"
	}, {
		"Symbol": "FUSB",
		"Description": "First US Bancshares Inc"
	}, {
		"Symbol": "FV",
		"Description": "First Trust ETF Vi"
	}, {
		"Symbol": "FVC",
		"Description": "FT DWA Dyn Foc 5 ETF"
	}, {
		"Symbol": "FVE",
		"Description": "Five Star Quality Care"
	}, {
		"Symbol": "FWONA",
		"Description": "Liberty Media F1 Series A"
	}, {
		"Symbol": "FWONK",
		"Description": "Liberty Media F1 Series K"
	}, {
		"Symbol": "FWP",
		"Description": "Forward Pharma Ads"
	}, {
		"Symbol": "FWRD",
		"Description": "Foward Air Corp"
	}, {
		"Symbol": "FXCM",
		"Description": "FXCM Inc"
	}, {
		"Symbol": "FYC",
		"Description": "First Trust Small CA"
	}, {
		"Symbol": "FYT",
		"Description": "First TR Sm Cp Alpha"
	}, {
		"Symbol": "FYX",
		"Description": "First TR Sm Cr Alpha"
	}, {
		"Symbol": "G",
		"Description": "Genpact Limited"
	}, {
		"Symbol": "GAB",
		"Description": "Gabelli Equity Trust, Inc. "
	}, {
		"Symbol": "GAB^D",
		"Description": "Gabelli Equity Trust, Inc. "
	}, {
		"Symbol": "GAB^G",
		"Description": "Gabelli Equity Trust, Inc. "
	}, {
		"Symbol": "GAB^H",
		"Description": "Gabelli Equity Trust, Inc. "
	}, {
		"Symbol": "GAB^J",
		"Description": "Gabelli Equity Trust, Inc. "
	}, {
		"Symbol": "GABC",
		"Description": "German Amer Bncp Inc"
	}, {
		"Symbol": "GAIA",
		"Description": "Gaiam Inc"
	}, {
		"Symbol": "GAIN",
		"Description": "Gladstone Investment"
	}, {
		"Symbol": "GAINM",
		"Description": "Gladstone Investment Corp."
	}, {
		"Symbol": "GAINN",
		"Description": "Gladstone Inv 6.5 C"
	}, {
		"Symbol": "GAINO",
		"Description": "Gladstone Invt Corp"
	}, {
		"Symbol": "GALE",
		"Description": "Galena Biopharma In"
	}, {
		"Symbol": "GALT",
		"Description": "Galectin Therapeutic"
	}, {
		"Symbol": "GALTU",
		"Description": "Galectin Therapeutics Inc"
	}, {
		"Symbol": "GALTW",
		"Description": "Galectin Therap Wts"
	}, {
		"Symbol": "GAM",
		"Description": "General American Investors, Inc."
	}, {
		"Symbol": "GAM^B",
		"Description": "General American Investors, Inc."
	}, {
		"Symbol": "GARS",
		"Description": "Garrison Capital Inc"
	}, {
		"Symbol": "GASS",
		"Description": "Stealthgas Inc"
	}, {
		"Symbol": "GATX",
		"Description": "GATX Corporation"
	}, {
		"Symbol": "GBAB",
		"Description": "Guggenheim Taxable Municipal Managed Duration Trst"
	}, {
		"Symbol": "GBCI",
		"Description": "Glacier Bancorp Inc"
	}, {
		"Symbol": "GBDC",
		"Description": "Golub Capital Bdc I"
	}, {
		"Symbol": "GBL",
		"Description": "Gamco Investors, Inc."
	}, {
		"Symbol": "GBLI",
		"Description": "Global Indemnity Plc"
	}, {
		"Symbol": "GBLIZ",
		"Description": "Global Indmnty 7.75"
	}, {
		"Symbol": "GBNK",
		"Description": "Guaranty Bancorp"
	}, {
		"Symbol": "GBR",
		"Description": "New Concept Energy, Inc"
	}, {
		"Symbol": "GBT",
		"Description": "Global Blood Ther Cmn"
	}, {
		"Symbol": "GBX",
		"Description": "Greenbrier Companies, Inc. "
	}, {
		"Symbol": "GCAP",
		"Description": "GAIN Capital Holdings, Inc."
	}, {
		"Symbol": "GCBC",
		"Description": "Greene County Bncp"
	}, {
		"Symbol": "GCH",
		"Description": "Aberdeen Greater China Fund, Inc."
	}, {
		"Symbol": "GCI",
		"Description": "TEGNA Inc."
	}, {
		"Symbol": "GCO",
		"Description": "Genesco Inc."
	}, {
		"Symbol": "GCP",
		"Description": "GCP Applied Technologies Inc."
	}, {
		"Symbol": "GCV",
		"Description": "Gabelli Convertible and Income Securities Fund, Inc. "
	}, {
		"Symbol": "GCV^B",
		"Description": "Gabelli Convertible and Income Securities Fund, Inc. "
	}, {
		"Symbol": "GCVRZ",
		"Description": "Sanofi Cvr"
	}, {
		"Symbol": "GD",
		"Description": "General Dynamics Corporation"
	}, {
		"Symbol": "GDDY",
		"Description": "GoDaddy Inc."
	}, {
		"Symbol": "GDEN",
		"Description": "Golden Entmt Cmn"
	}, {
		"Symbol": "GDL",
		"Description": " GDL Fund"
	}, {
		"Symbol": "GDL^B",
		"Description": " GDL Fund"
	}, {
		"Symbol": "GDO",
		"Description": "Western Asset Global Corporate Defined Opportunity Fund Inc."
	}, {
		"Symbol": "GDOT",
		"Description": "Green Dot Corporation"
	}, {
		"Symbol": "GDS",
		"Description": "Gds Holdings Ltd"
	}, {
		"Symbol": "GDV",
		"Description": "Gabelli Dividend"
	}, {
		"Symbol": "GDV^A",
		"Description": "Gabelli Dividend"
	}, {
		"Symbol": "GDV^D",
		"Description": "Gabelli Dividend"
	}, {
		"Symbol": "GDV^G",
		"Description": "Gabelli Dividend"
	}, {
		"Symbol": "GE",
		"Description": "General Electric Company"
	}, {
		"Symbol": "GEB",
		"Description": "General Electric Company"
	}, {
		"Symbol": "GEC",
		"Description": "Great Elm Capital Group Inc"
	}, {
		"Symbol": "GECC",
		"Description": "Great Elm Capital Corp"
	}, {
		"Symbol": "GEF",
		"Description": "Greif Bros. Corporation"
	}, {
		"Symbol": "GEF.B",
		"Description": "Greif Bros. Corporation"
	}, {
		"Symbol": "GEH",
		"Description": "General Electric Capital Corporation"
	}, {
		"Symbol": "GEK",
		"Description": "General Electric Capital Corporation"
	}, {
		"Symbol": "GEL",
		"Description": "Genesis Energy, L.P."
	}, {
		"Symbol": "GEMP",
		"Description": "Gemphire Therapeutics Inc"
	}, {
		"Symbol": "GEN",
		"Description": "Genesis Healthcare, Inc."
	}, {
		"Symbol": "GENC",
		"Description": "Gencor Industries In"
	}, {
		"Symbol": "GENE",
		"Description": "Genetic Tech Spn Ads"
	}, {
		"Symbol": "GENY",
		"Description": "Principal Millennials Index ETF"
	}, {
		"Symbol": "GEO",
		"Description": "Geo Group Inc "
	}, {
		"Symbol": "GEOS",
		"Description": "Geospace Technologie"
	}, {
		"Symbol": "GEQ",
		"Description": "Guggenheim Equal Weight Enhanced Equity Income Fund"
	}, {
		"Symbol": "GER",
		"Description": "Goldman Sachs MLP Energy Renaissance Fund"
	}, {
		"Symbol": "GERN",
		"Description": "Geron Corporation"
	}, {
		"Symbol": "GES",
		"Description": "Guess?, Inc."
	}, {
		"Symbol": "GEVO",
		"Description": "Gevo Inc Cmn Stk"
	}, {
		"Symbol": "GF",
		"Description": "New Germany Fund, Inc. "
	}, {
		"Symbol": "GFA",
		"Description": "Gafisa SA"
	}, {
		"Symbol": "GFED",
		"Description": "Guaranty Fedl Bcshs"
	}, {
		"Symbol": "GFF",
		"Description": "Griffon Corporation"
	}, {
		"Symbol": "GFI",
		"Description": "Gold Fields Limited"
	}, {
		"Symbol": "GFN",
		"Description": "General Finance Corp"
	}, {
		"Symbol": "GFNCP",
		"Description": "General Fn Cum Pfd C"
	}, {
		"Symbol": "GFNSL",
		"Description": "Genrl Fin Sr Nt 2021"
	}, {
		"Symbol": "GFY",
		"Description": "Western Asset Variable Rate Strategic Fund Inc."
	}, {
		"Symbol": "GG",
		"Description": "Goldcorp Inc."
	}, {
		"Symbol": "GGAL",
		"Description": "Grupo Fin Galicia"
	}, {
		"Symbol": "GGB",
		"Description": "Gerdau S.A."
	}, {
		"Symbol": "GGE",
		"Description": "Guggenheim Enhanced Equity Strategy Fund"
	}, {
		"Symbol": "GGG",
		"Description": "Graco Inc."
	}, {
		"Symbol": "GGM",
		"Description": "Guggenheim Credit Allocation Fund"
	}, {
		"Symbol": "GGN",
		"Description": "GAMCO Global Gold, Natural Reources & Income Trust"
	}, {
		"Symbol": "GGN^B",
		"Description": "GAMCO Global Gold, Natural Reources & Income Trust"
	}, {
		"Symbol": "GGO",
		"Description": " Gabelli Go Anywhere Trust"
	}, {
		"Symbol": "GGO^A",
		"Description": " Gabelli Go Anywhere Trust"
	}, {
		"Symbol": "GGP",
		"Description": "GGP Inc."
	}, {
		"Symbol": "GGP^A",
		"Description": "GGP Inc."
	}, {
		"Symbol": "GGT",
		"Description": "Gabelli Multi-Media Trust Inc. "
	}, {
		"Symbol": "GGT^B",
		"Description": "Gabelli Multi-Media Trust Inc. "
	}, {
		"Symbol": "GGZ",
		"Description": "Gabelli Global Small and Mid Cap Value Trust "
	}, {
		"Symbol": "GGZ^A",
		"Description": "Gabelli Global Small and Mid Cap Value Trust "
	}, {
		"Symbol": "GHC",
		"Description": "Graham Holdings Company"
	}, {
		"Symbol": "GHDX",
		"Description": "Genomic Health Inc"
	}, {
		"Symbol": "GHL",
		"Description": "Greenhill & Co., Inc."
	}, {
		"Symbol": "GHM",
		"Description": "Graham Corporation"
	}, {
		"Symbol": "GHY",
		"Description": "Prudential Global Short Duration High Yield Fund, Inc."
	}, {
		"Symbol": "GIB",
		"Description": "CGI Group, Inc."
	}, {
		"Symbol": "GIFI",
		"Description": "Gulf Island Fab"
	}, {
		"Symbol": "GIG",
		"Description": "GigPeak, Inc."
	}, {
		"Symbol": "GIGA",
		"Description": "Giga Tronics Inc"
	}, {
		"Symbol": "GIGM",
		"Description": "Gigamedia Limited"
	}, {
		"Symbol": "GIII",
		"Description": "G-III Apparel Gp I"
	}, {
		"Symbol": "GIL",
		"Description": "Gildan Activewear, Inc."
	}, {
		"Symbol": "GILD",
		"Description": "Gilead Sciences Inc"
	}, {
		"Symbol": "GILT",
		"Description": "Gilat Satellite Ntwk"
	}, {
		"Symbol": "GIM",
		"Description": "Templeton Global Income Fund, Inc."
	}, {
		"Symbol": "GIMO",
		"Description": "Gigamon Inc."
	}, {
		"Symbol": "GIS",
		"Description": "General Mills, Inc."
	}, {
		"Symbol": "GJH",
		"Description": "STRATS Trust"
	}, {
		"Symbol": "GJO",
		"Description": "STRATS Trust"
	}, {
		"Symbol": "GJP",
		"Description": "Synthetic Fixed-Income Securities, Inc."
	}, {
		"Symbol": "GJR",
		"Description": "Synthetic Fixed-Income Securities, Inc."
	}, {
		"Symbol": "GJS",
		"Description": "STRATS Trust"
	}, {
		"Symbol": "GJT",
		"Description": "Synthetic Fixed-Income Securities, Inc."
	}, {
		"Symbol": "GJV",
		"Description": "Synthetic Fixed-Income Securities, Inc."
	}, {
		"Symbol": "GK",
		"Description": "G K Svcs Inc Cl A"
	}, {
		"Symbol": "GKOS",
		"Description": "Glaukos Corporation"
	}, {
		"Symbol": "GLAD",
		"Description": "Gladstone Cap Corp"
	}, {
		"Symbol": "GLADO",
		"Description": "Gladstone 6.75 Srs"
	}, {
		"Symbol": "GLBL",
		"Description": "Terraform Glbl Cla"
	}, {
		"Symbol": "GLBS",
		"Description": "Globus Maritime Limi"
	}, {
		"Symbol": "GLBZ",
		"Description": "Glen Burnie Bancorp"
	}, {
		"Symbol": "GLDD",
		"Description": "Great Lakes Drg Dock"
	}, {
		"Symbol": "GLDI",
		"Description": "CS X-Links Gld Share"
	}, {
		"Symbol": "GLF",
		"Description": "GulfMark Offshore, Inc."
	}, {
		"Symbol": "GLMD",
		"Description": "Galmed Pharmaceutica"
	}, {
		"Symbol": "GLNG",
		"Description": "Golar Lng Ltd"
	}, {
		"Symbol": "GLO",
		"Description": "Clough Global Opportunities Fund"
	}, {
		"Symbol": "GLOB",
		"Description": "Globant S.A."
	}, {
		"Symbol": "GLOG",
		"Description": "GasLog LP."
	}, {
		"Symbol": "GLOG^A",
		"Description": "GasLog LP."
	}, {
		"Symbol": "GLOP",
		"Description": "GasLog Partners LP"
	}, {
		"Symbol": "GLOW",
		"Description": "Glowpoint, Inc."
	}, {
		"Symbol": "GLP",
		"Description": "Global Partners LP"
	}, {
		"Symbol": "GLPG",
		"Description": "Galapagos Nv"
	}, {
		"Symbol": "GLPI",
		"Description": "Gaming & Leisure"
	}, {
		"Symbol": "GLQ",
		"Description": "Clough Global Equity Fund"
	}, {
		"Symbol": "GLRE",
		"Description": "Greenlight Cap. Re."
	}, {
		"Symbol": "GLT",
		"Description": "Glatfelter"
	}, {
		"Symbol": "GLU",
		"Description": " Gabelli Global Utility and Income Trust"
	}, {
		"Symbol": "GLU^A",
		"Description": " Gabelli Global Utility and Income Trust"
	}, {
		"Symbol": "GLUU",
		"Description": "Glu Mobile Inc"
	}, {
		"Symbol": "GLV",
		"Description": "Clough Global Dividend and Income Fund"
	}, {
		"Symbol": "GLW",
		"Description": "Corning Incorporated"
	}, {
		"Symbol": "GLYC",
		"Description": "Glycomimetics Inc"
	}, {
		"Symbol": "GM",
		"Description": "General Motors Company"
	}, {
		"Symbol": "GM.WS.B",
		"Description": "General Motors Company"
	}, {
		"Symbol": "GMAN",
		"Description": "Gordmans Stores Inc"
	}, {
		"Symbol": "GME",
		"Description": "Gamestop Corporation"
	}, {
		"Symbol": "GMED",
		"Description": "Globus Medical, Inc."
	}, {
		"Symbol": "GMLP",
		"Description": "Golar Lng Partners"
	}, {
		"Symbol": "GMO",
		"Description": "General Moly, Inc"
	}, {
		"Symbol": "GMRE",
		"Description": "Global Medical REIT Inc."
	}, {
		"Symbol": "GMS",
		"Description": "GMS Inc."
	}, {
		"Symbol": "GMTA",
		"Description": "GATX Corporation"
	}, {
		"Symbol": "GMZ",
		"Description": "Goldman Sachs MLP Income Opportunities Fund"
	}, {
		"Symbol": "GNBC",
		"Description": "Green Bancorp Cmn"
	}, {
		"Symbol": "GNC",
		"Description": "GNC Holdings, Inc."
	}, {
		"Symbol": "GNCA",
		"Description": "Genocea Biosciences"
	}, {
		"Symbol": "GNCMA",
		"Description": "Gen Communication"
	}, {
		"Symbol": "GNE",
		"Description": "Genie Energy Ltd."
	}, {
		"Symbol": "GNE^A",
		"Description": "Genie Energy Ltd."
	}, {
		"Symbol": "GNK",
		"Description": "Genco Shipping & Trading Limited Warrants Expiring 12/31/2021"
	}, {
		"Symbol": "GNL",
		"Description": "Global Net Lease, Inc."
	}, {
		"Symbol": "GNMA",
		"Description": "Ishares GNMA Bd ETF"
	}, {
		"Symbol": "GNMK",
		"Description": "Genmark Diagnostics"
	}, {
		"Symbol": "GNMX",
		"Description": "Aevi Genomic Medicine"
	}, {
		"Symbol": "GNRC",
		"Description": "Generac Holdlings Inc."
	}, {
		"Symbol": "GNRT",
		"Description": "Gener8 Maritime, Inc."
	}, {
		"Symbol": "GNRX",
		"Description": "Vaneck Vectors Gener"
	}, {
		"Symbol": "GNT",
		"Description": "GAMCO Natural Resources, Gold & Income Tust"
	}, {
		"Symbol": "GNTX",
		"Description": "Gentex Corp"
	}, {
		"Symbol": "GNUS",
		"Description": "Genius Brands International Inc"
	}, {
		"Symbol": "GNVC",
		"Description": "Genvec Inc"
	}, {
		"Symbol": "GNW",
		"Description": "Genworth Financial Inc"
	}, {
		"Symbol": "GOF",
		"Description": "Guggenheim Strategic Opportunities Fund"
	}, {
		"Symbol": "GOGL",
		"Description": "Golden Ocean Gp Cmn"
	}, {
		"Symbol": "GOGO",
		"Description": "Gogo Inc Cmn Stk"
	}, {
		"Symbol": "GOL",
		"Description": "Gol Linhas Aereas Inteligentes S.A."
	}, {
		"Symbol": "GOLD",
		"Description": "Randgold Res Ltd"
	}, {
		"Symbol": "GOLF",
		"Description": "Acushnet Holdings Corp."
	}, {
		"Symbol": "GOOD",
		"Description": "Gladstone Comml"
	}, {
		"Symbol": "GOODM",
		"Description": "Gladstone Commercial Corporatio"
	}, {
		"Symbol": "GOODO",
		"Description": "Gladstone Commercial"
	}, {
		"Symbol": "GOODP",
		"Description": "Gladstone Commercia"
	}, {
		"Symbol": "GOOG",
		"Description": "Alphabet Class C"
	}, {
		"Symbol": "GOOGL",
		"Description": "Alphabet Class A"
	}, {
		"Symbol": "GORO",
		"Description": "Gold Resource Corporation"
	}, {
		"Symbol": "GOV",
		"Description": "Government Properties Income Trust"
	}, {
		"Symbol": "GOVNI",
		"Description": "Government Properties Income TR"
	}, {
		"Symbol": "GPAC",
		"Description": "Global Ptnr Acq Com"
	}, {
		"Symbol": "GPACW",
		"Description": "Global Ptnr Acq Wrt"
	}, {
		"Symbol": "GPC",
		"Description": "Genuine Parts Company"
	}, {
		"Symbol": "GPE^A",
		"Description": "Georgia Power Company"
	}, {
		"Symbol": "GPI",
		"Description": "Group 1 Automotive, Inc."
	}, {
		"Symbol": "GPIA",
		"Description": "Gp Invstmts Aq Ord"
	}, {
		"Symbol": "GPIAW",
		"Description": "Gp Investments Aq Wt"
	}, {
		"Symbol": "GPIC",
		"Description": "Gaming Partners Intl"
	}, {
		"Symbol": "GPK",
		"Description": "Graphic Packaging Holding Company"
	}, {
		"Symbol": "GPL",
		"Description": "Great Panther Silver Limited"
	}, {
		"Symbol": "GPM",
		"Description": "Guggenheim Enhanced Equity Income Fund"
	}, {
		"Symbol": "GPN",
		"Description": "Global Payments Inc."
	}, {
		"Symbol": "GPOR",
		"Description": "Gulfport Energy Corp"
	}, {
		"Symbol": "GPP",
		"Description": "Green Plains Partners LP"
	}, {
		"Symbol": "GPRE",
		"Description": "Green Plains Inc Cmn"
	}, {
		"Symbol": "GPRK",
		"Description": "Geopark Ltd"
	}, {
		"Symbol": "GPRO",
		"Description": "Gopro Inc Cl A Cmn"
	}, {
		"Symbol": "GPS",
		"Description": "Gap, Inc. "
	}, {
		"Symbol": "GPT",
		"Description": "Gramercy Property Trust"
	}, {
		"Symbol": "GPT^A",
		"Description": "Gramercy Property Trust Inc."
	}, {
		"Symbol": "GPX",
		"Description": "GP Strategies Corporation"
	}, {
		"Symbol": "GRA",
		"Description": "W.R. Grace & Co."
	}, {
		"Symbol": "GRAM",
		"Description": "Grana y Montero S.A.A."
	}, {
		"Symbol": "GRBK",
		"Description": "Green Brick Partners"
	}, {
		"Symbol": "GRC",
		"Description": "Gorman-Rupp Company "
	}, {
		"Symbol": "GRF",
		"Description": "Eagle Capital Growth Fund, Inc."
	}, {
		"Symbol": "GRFS",
		"Description": "Grifols S.A."
	}, {
		"Symbol": "GRID",
		"Description": "First Trust Nq Ce Smgrid"
	}, {
		"Symbol": "GRIF",
		"Description": "Griffin Industrial"
	}, {
		"Symbol": "GRMN",
		"Description": "Garmin Ltd"
	}, {
		"Symbol": "GROW",
		"Description": "U S Global Inv Inc"
	}, {
		"Symbol": "GRP.U",
		"Description": "Granite Real Estate Inc."
	}, {
		"Symbol": "GRPN",
		"Description": "Groupon Cl A Cmn"
	}, {
		"Symbol": "GRR",
		"Description": "Asia Tigers Fund, Inc. "
	}, {
		"Symbol": "GRUB",
		"Description": "GrubHub Inc."
	}, {
		"Symbol": "GRVY",
		"Description": "Gravity Co. Ltd"
	}, {
		"Symbol": "GRX",
		"Description": " Gabelli Healthcare & Wellness Trust"
	}, {
		"Symbol": "GRX^A",
		"Description": " Gabelli Healthcare & Wellness Trust"
	}, {
		"Symbol": "GRX^B",
		"Description": " Gabelli Healthcare & Wellness Trust"
	}, {
		"Symbol": "GS",
		"Description": "Goldman Sachs Group, Inc. "
	}, {
		"Symbol": "GS^A",
		"Description": "Goldman Sachs Group, Inc. "
	}, {
		"Symbol": "GS^B",
		"Description": "Goldman Sachs Group, Inc. "
	}, {
		"Symbol": "GS^C",
		"Description": "Goldman Sachs Group, Inc. "
	}, {
		"Symbol": "GS^D",
		"Description": "Goldman Sachs Group, Inc. "
	}, {
		"Symbol": "GS^I",
		"Description": "Goldman Sachs Group, Inc. "
	}, {
		"Symbol": "GS^J",
		"Description": "Goldman Sachs Group, Inc. "
	}, {
		"Symbol": "GS^K",
		"Description": "Goldman Sachs Group, Inc. "
	}, {
		"Symbol": "GS^N",
		"Description": "Goldman Sachs Group, Inc. "
	}, {
		"Symbol": "GSAT",
		"Description": "Globalstar, Inc."
	}, {
		"Symbol": "GSB",
		"Description": "GlobalSCAPE, Inc."
	}, {
		"Symbol": "GSBC",
		"Description": "Great Southern Bncp"
	}, {
		"Symbol": "GSBD",
		"Description": "Goldman Sachs BDC, Inc."
	}, {
		"Symbol": "GSH",
		"Description": "Guangshen Railway Company Limited"
	}, {
		"Symbol": "GSHTU",
		"Description": "Gores Holdings II Inc. Units"
	}, {
		"Symbol": "GSIT",
		"Description": "Gsi Technology Inc"
	}, {
		"Symbol": "GSK",
		"Description": "GlaxoSmithKline PLC"
	}, {
		"Symbol": "GSL",
		"Description": "Global Ship Lease, Inc."
	}, {
		"Symbol": "GSL^B",
		"Description": "Global Ship Lease, Inc."
	}, {
		"Symbol": "GSM",
		"Description": "Ferroglobe Plc Os"
	}, {
		"Symbol": "GSOL",
		"Description": "Global Sources Ltd"
	}, {
		"Symbol": "GSS",
		"Description": "Golden Star Resources, Ltd"
	}, {
		"Symbol": "GST",
		"Description": "Gastar Exploration Inc."
	}, {
		"Symbol": "GST^A",
		"Description": "Gastar Exploration Inc."
	}, {
		"Symbol": "GST^B",
		"Description": "Gastar Exploration Inc."
	}, {
		"Symbol": "GSUM",
		"Description": "Gridsum Holding Inc"
	}, {
		"Symbol": "GSV",
		"Description": "Gold Standard Ventures Corporation"
	}, {
		"Symbol": "GSVC",
		"Description": "Gsv Capital Cp Cmn"
	}, {
		"Symbol": "GT",
		"Description": "Goodyear Tire Rubber"
	}, {
		"Symbol": "GTE",
		"Description": "Gran Tierra Energy Inc."
	}, {
		"Symbol": "GTIM",
		"Description": "Good Times Rest"
	}, {
		"Symbol": "GTLS",
		"Description": "Chart Industries In"
	}, {
		"Symbol": "GTN",
		"Description": "Gray Television, Inc."
	}, {
		"Symbol": "GTN.A",
		"Description": "Gray Television, Inc."
	}, {
		"Symbol": "GTS",
		"Description": "Triple-S Management Corporation"
	}, {
		"Symbol": "GTT",
		"Description": "GTT Communications, Inc."
	}, {
		"Symbol": "GTWN",
		"Description": "Georgetown Bancp Cmn"
	}, {
		"Symbol": "GTXI",
		"Description": "GTX Inc"
	}, {
		"Symbol": "GTY",
		"Description": "Getty Realty Corporation"
	}, {
		"Symbol": "GTYH",
		"Description": "Gty Technology Holdings Inc"
	}, {
		"Symbol": "GTYHU",
		"Description": "Gty Technology Holdings Inc"
	}, {
		"Symbol": "GTYHW",
		"Description": "Gty Technology Holdings Inc. Warrants"
	}, {
		"Symbol": "GUID",
		"Description": "Guidance Software"
	}, {
		"Symbol": "GULF",
		"Description": "Wisdomtree"
	}, {
		"Symbol": "GURE",
		"Description": "Gulf Resources Inc"
	}, {
		"Symbol": "GUT",
		"Description": "Gabelli Utility Trust "
	}, {
		"Symbol": "GUT^A",
		"Description": "Gabelli Utility Trust "
	}, {
		"Symbol": "GUT^C",
		"Description": "Gabelli Utility Trust "
	}, {
		"Symbol": "GV",
		"Description": "Goldfield Corporation "
	}, {
		"Symbol": "GVA",
		"Description": "Granite Construction Incorporated"
	}, {
		"Symbol": "GVP",
		"Description": "GSE Systems, Inc."
	}, {
		"Symbol": "GWB",
		"Description": "Great Western Bancorp, Inc."
	}, {
		"Symbol": "GWGH",
		"Description": "Gwg Holdings Com Stk"
	}, {
		"Symbol": "GWPH",
		"Description": "Gw Pharma ADR"
	}, {
		"Symbol": "GWR",
		"Description": "Genesee & Wyoming, Inc."
	}, {
		"Symbol": "GWRE",
		"Description": "Guidewire Software, Inc."
	}, {
		"Symbol": "GWRS",
		"Description": "Global Water Reso Cmn"
	}, {
		"Symbol": "GWW",
		"Description": "W.W. Grainger, Inc."
	}, {
		"Symbol": "GXP",
		"Description": "Great Plains Energy Inc"
	}, {
		"Symbol": "GXP^B",
		"Description": "Great Plains Energy Inc"
	}, {
		"Symbol": "GYB",
		"Description": "CABCO Series 2004-101 Trust"
	}, {
		"Symbol": "GYC",
		"Description": "Corporate Asset Backed Corp CABCO"
	}, {
		"Symbol": "GYRO",
		"Description": "Gyrodyne Llc Cmn"
	}, {
		"Symbol": "GZT",
		"Description": "Gazit-Globe Ltd."
	}, {
		"Symbol": "H",
		"Description": "Hyatt Hotels Corporation"
	}, {
		"Symbol": "HA",
		"Description": "Hawaiian Hldgs Inc"
	}, {
		"Symbol": "HABT",
		"Description": "Habit Rest Cmn A"
	}, {
		"Symbol": "HAE",
		"Description": "Haemonetics Corporation"
	}, {
		"Symbol": "HAFC",
		"Description": "Hanmi Financial Cp"
	}, {
		"Symbol": "HAIN",
		"Description": "Hain Celestial Grp"
	}, {
		"Symbol": "HAL",
		"Description": "Halliburton Company"
	}, {
		"Symbol": "HALL",
		"Description": "Hallmark Fin Svc"
	}, {
		"Symbol": "HALO",
		"Description": "Halozyme Therapeutic"
	}, {
		"Symbol": "HAR",
		"Description": "Harman International Industries, Incorporated"
	}, {
		"Symbol": "HAS",
		"Description": "Hasbro Inc"
	}, {
		"Symbol": "HASI",
		"Description": "Hannon Armstrong Sustainable Infrastructure Capital, Inc."
	}, {
		"Symbol": "HAWK",
		"Description": "Blackhawk Network Ho"
	}, {
		"Symbol": "HAYN",
		"Description": "Haynes Intl Inc"
	}, {
		"Symbol": "HBAN",
		"Description": "Huntington Bcshs"
	}, {
		"Symbol": "HBANN",
		"Description": "Huntington Bancshares Incorporated Depositary Sh"
	}, {
		"Symbol": "HBANO",
		"Description": "Huntington Banc. Dep"
	}, {
		"Symbol": "HBANP",
		"Description": "Huntington BNC Pfd A"
	}, {
		"Symbol": "HBCP",
		"Description": "Home Bancorp Inc"
	}, {
		"Symbol": "HBHC",
		"Description": "Hancock Holding Co"
	}, {
		"Symbol": "HBHCL",
		"Description": "Hancock Hld 5.95 Nt"
	}, {
		"Symbol": "HBI",
		"Description": "Hanesbrands Inc."
	}, {
		"Symbol": "HBIO",
		"Description": "Harvard Bioscience"
	}, {
		"Symbol": "HBK",
		"Description": "Hamilton Bancorp"
	}, {
		"Symbol": "HBM",
		"Description": "Hudbay Minerals Inc."
	}, {
		"Symbol": "HBM.WS",
		"Description": "Hudbay Minerals Inc."
	}, {
		"Symbol": "HBMD",
		"Description": "Howard Bancorp MD"
	}, {
		"Symbol": "HBNC",
		"Description": "Horizon Bancorp"
	}, {
		"Symbol": "HBP",
		"Description": "Huttig Bldg Products"
	}, {
		"Symbol": "HCA",
		"Description": "HCA Holdings, Inc."
	}, {
		"Symbol": "HCAC",
		"Description": "Hennssy Cp Aq II Cmn"
	}, {
		"Symbol": "HCACU",
		"Description": "Hennessy Ctl Ut II"
	}, {
		"Symbol": "HCACW",
		"Description": "Hennssy Cp Aq II Wrt"
	}, {
		"Symbol": "HCAP",
		"Description": "Harvest Capital Cred"
	}, {
		"Symbol": "HCAPL",
		"Description": "Hrvst Cap 7% Nt 2020"
	}, {
		"Symbol": "HCCI",
		"Description": "Heritage-Crystal"
	}, {
		"Symbol": "HCHC",
		"Description": "HC2 Holdings, Inc."
	}, {
		"Symbol": "HCI",
		"Description": "HCI Group, Inc."
	}, {
		"Symbol": "HCJ",
		"Description": "HCI Group, Inc."
	}, {
		"Symbol": "HCKT",
		"Description": "Hackett Grp Inc"
	}, {
		"Symbol": "HCLP",
		"Description": "Hi-Crush Partners LP"
	}, {
		"Symbol": "HCM",
		"Description": "Hutchison China Ads"
	}, {
		"Symbol": "HCN",
		"Description": "Welltower Inc."
	}, {
		"Symbol": "HCN^I",
		"Description": "Welltower Inc."
	}, {
		"Symbol": "HCN^J.CL",
		"Description": "Welltower Inc."
	}, {
		"Symbol": "HCOM",
		"Description": "Hawaiian Telcom Hold"
	}, {
		"Symbol": "HCP",
		"Description": "HCP, Inc."
	}, {
		"Symbol": "HCSG",
		"Description": "Healthcare Svcs Gp"
	}, {
		"Symbol": "HD",
		"Description": "Home Depot, Inc. "
	}, {
		"Symbol": "HDB",
		"Description": "HDFC Bank Limited"
	}, {
		"Symbol": "HDNG",
		"Description": "Hardinge Inc"
	}, {
		"Symbol": "HDP",
		"Description": "Hortonworks Cmn"
	}, {
		"Symbol": "HDS",
		"Description": "HD Supply Hlds Cmm"
	}, {
		"Symbol": "HDSN",
		"Description": "Hudson Tech Inc"
	}, {
		"Symbol": "HE",
		"Description": "Hawaiian Electric Industries, Inc."
	}, {
		"Symbol": "HE^U",
		"Description": "Hawaiian Electric Industries, Inc."
	}, {
		"Symbol": "HEAR",
		"Description": "Turtle Beach Corp Cmn"
	}, {
		"Symbol": "HEB",
		"Description": "Hemispherx BioPharma, Inc."
	}, {
		"Symbol": "HEBT",
		"Description": "Hebron Technology Co. Ltd. Common Shares"
	}, {
		"Symbol": "HEES",
		"Description": "H&E Equip Services"
	}, {
		"Symbol": "HEI",
		"Description": "Heico Corporation"
	}, {
		"Symbol": "HEI.A",
		"Description": "Heico Corporation"
	}, {
		"Symbol": "HELE",
		"Description": "Helen of Troy Ltd"
	}, {
		"Symbol": "HEOP",
		"Description": "Heritage Oaks Bancp"
	}, {
		"Symbol": "HEP",
		"Description": "Holly Energy Partners, L.P."
	}, {
		"Symbol": "HEQ",
		"Description": "John Hancock Hedged Equity & Income Fund"
	}, {
		"Symbol": "HES",
		"Description": "Hess Corporation"
	}, {
		"Symbol": "HES^A",
		"Description": "Hess Corporation"
	}, {
		"Symbol": "HF",
		"Description": "HFF, Inc."
	}, {
		"Symbol": "HFBC",
		"Description": "Hopfed Bancorp Inc"
	}, {
		"Symbol": "HFBL",
		"Description": "Home Federal"
	}, {
		"Symbol": "HFC",
		"Description": "HollyFrontier Corporation"
	}, {
		"Symbol": "HFWA",
		"Description": "Heritage Financial"
	}, {
		"Symbol": "HGG",
		"Description": "HHGregg, Inc."
	}, {
		"Symbol": "HGH",
		"Description": "Hartford Financial Services Group, Inc. "
	}, {
		"Symbol": "HGSH",
		"Description": "China Hgs Real Est"
	}, {
		"Symbol": "HGT",
		"Description": "Hugoton Royalty Trust"
	}, {
		"Symbol": "HGV",
		"Description": "Hilton Grand Vacations Inc."
	}, {
		"Symbol": "HH",
		"Description": "Hooper Holmes, Inc."
	}, {
		"Symbol": "HHC",
		"Description": "Howard Hughes Corporation "
	}, {
		"Symbol": "HHS",
		"Description": "Harte-Hanks, Inc."
	}, {
		"Symbol": "HI",
		"Description": "Hillenbrand Inc"
	}, {
		"Symbol": "HIBB",
		"Description": "Hibbett Sports Inc"
	}, {
		"Symbol": "HIE",
		"Description": "Miller/Howard High Income Equity Fund"
	}, {
		"Symbol": "HIFR",
		"Description": "InfraREIT, Inc."
	}, {
		"Symbol": "HIFS",
		"Description": "Hingham Inst For Svg"
	}, {
		"Symbol": "HIG",
		"Description": "Hartford Financial Services Group, Inc. "
	}, {
		"Symbol": "HIG.WS",
		"Description": "Hartford Financial Services Group, Inc. "
	}, {
		"Symbol": "HIHO",
		"Description": "Highway Hldgs Ltd"
	}, {
		"Symbol": "HII",
		"Description": "Huntington Ingalls Industries, Inc."
	}, {
		"Symbol": "HIIQ",
		"Description": "Health Insurance Inn"
	}, {
		"Symbol": "HIL",
		"Description": "Hill International, Inc."
	}, {
		"Symbol": "HIMX",
		"Description": "Himax Technologies"
	}, {
		"Symbol": "HIO",
		"Description": "Western Asset High Income Opportunity Fund, Inc."
	}, {
		"Symbol": "HIVE",
		"Description": "Aerohive Networks, Inc."
	}, {
		"Symbol": "HIW",
		"Description": "Highwoods Properties, Inc."
	}, {
		"Symbol": "HIX",
		"Description": "Western Asset High Income Fund II Inc."
	}, {
		"Symbol": "HJV",
		"Description": "MS Structured Asset Corp Saturns GE Cap Corp Series 2002-14"
	}, {
		"Symbol": "HK",
		"Description": "Halcon Resources Corporation"
	}, {
		"Symbol": "HK.WS",
		"Description": "Halcon Resources Corporation"
	}, {
		"Symbol": "HL",
		"Description": "Hecla Mining Company"
	}, {
		"Symbol": "HL^B",
		"Description": "Hecla Mining Company"
	}, {
		"Symbol": "HLF",
		"Description": "Herbalife LTD."
	}, {
		"Symbol": "HLG",
		"Description": "Hailiang Edu Grp Ads"
	}, {
		"Symbol": "HLI",
		"Description": "Houlihan Lokey, Inc."
	}, {
		"Symbol": "HLIT",
		"Description": "Harmonic Inc"
	}, {
		"Symbol": "HLM^",
		"Description": "Hillman Group Capital Trust"
	}, {
		"Symbol": "HLS",
		"Description": "HealthSouth Corporation"
	}, {
		"Symbol": "HLT",
		"Description": "Hilton Worldwide Holdings Inc."
	}, {
		"Symbol": "HLTH",
		"Description": "Nobilis Health Corp."
	}, {
		"Symbol": "HLX",
		"Description": "Helix Energy Solutions Group, Inc."
	}, {
		"Symbol": "HMC",
		"Description": "Honda Motor Company, Ltd."
	}, {
		"Symbol": "HMG",
		"Description": "HMG/Courtland Properties, Inc."
	}, {
		"Symbol": "HMHC",
		"Description": "Houghton Mifflin Har"
	}, {
		"Symbol": "HMLP",
		"Description": "Hoegh LNG Partners LP"
	}, {
		"Symbol": "HMN",
		"Description": "Horace Mann Educators Corporation"
	}, {
		"Symbol": "HMNF",
		"Description": "Hmn Financial Inc"
	}, {
		"Symbol": "HMNY",
		"Description": "Helios and Matsn Ana"
	}, {
		"Symbol": "HMST",
		"Description": "Homestreet Inc"
	}, {
		"Symbol": "HMSY",
		"Description": "Hms Hldgs Cp"
	}, {
		"Symbol": "HMTA",
		"Description": "Hometown Bankshares"
	}, {
		"Symbol": "HMTV",
		"Description": "Hemisphere Media A"
	}, {
		"Symbol": "HMY",
		"Description": "Harmony Gold Mining Company Limited"
	}, {
		"Symbol": "HNH",
		"Description": "Handy & Harman Ltd"
	}, {
		"Symbol": "HNI",
		"Description": "HNI Corporation"
	}, {
		"Symbol": "HNNA",
		"Description": "Hennessy Advisors Cmn"
	}, {
		"Symbol": "HNP",
		"Description": "Huaneng Power International, Inc."
	}, {
		"Symbol": "HNR",
		"Description": "Harvest Natural Resources Inc"
	}, {
		"Symbol": "HNRG",
		"Description": "Hallador Energy Co"
	}, {
		"Symbol": "HNW",
		"Description": "Pioneer Diversified High Income Trust"
	}, {
		"Symbol": "HOFT",
		"Description": "Hooker Furniture"
	}, {
		"Symbol": "HOG",
		"Description": "Harley-Davidson, Inc."
	}, {
		"Symbol": "HOLI",
		"Description": "Hollysys Automation"
	}, {
		"Symbol": "HOLX",
		"Description": "Hologic Inc"
	}, {
		"Symbol": "HOMB",
		"Description": "Home Bancshares Inc"
	}, {
		"Symbol": "HOME",
		"Description": "At Home Group Inc."
	}, {
		"Symbol": "HON",
		"Description": "Honeywell International Inc."
	}, {
		"Symbol": "HONE",
		"Description": "Harborone Bancorp Inc"
	}, {
		"Symbol": "HOPE",
		"Description": "Hope Bancorp Inc"
	}, {
		"Symbol": "HOS",
		"Description": "Hornbeck Offshore Services"
	}, {
		"Symbol": "HOTR",
		"Description": "Chanticleer Hldgs"
	}, {
		"Symbol": "HOTRW",
		"Description": "Chanticleer Warrants"
	}, {
		"Symbol": "HOV",
		"Description": "Hovnanian Enterprises Inc"
	}, {
		"Symbol": "HOVNP",
		"Description": "Hovnanian Entr Dep A"
	}, {
		"Symbol": "HP",
		"Description": "Helmerich & Payne, Inc."
	}, {
		"Symbol": "HPE",
		"Description": "Hewlett Packard Enterprise Company"
	}, {
		"Symbol": "HPF",
		"Description": "John Hancock Pfd Income Fund II"
	}, {
		"Symbol": "HPI",
		"Description": "John Hancock Preferred Income Fund"
	}, {
		"Symbol": "HPJ",
		"Description": "Highpower Intl Inc"
	}, {
		"Symbol": "HPP",
		"Description": "Hudson Pacific Properties, Inc."
	}, {
		"Symbol": "HPQ",
		"Description": "HP Inc."
	}, {
		"Symbol": "HPS",
		"Description": "John Hancock Preferred Income Fund III"
	}, {
		"Symbol": "HPT",
		"Description": "Hospitality Properites Trust"
	}, {
		"Symbol": "HPTRP",
		"Description": "Hospitality Properties Trust"
	}, {
		"Symbol": "HQCL",
		"Description": "Hanwha Q Cells Ads"
	}, {
		"Symbol": "HQH",
		"Description": "Tekla Healthcare Investors"
	}, {
		"Symbol": "HQL",
		"Description": "Tekla Life Sciences Investors"
	}, {
		"Symbol": "HQY",
		"Description": "Healthequity Cmn Stk"
	}, {
		"Symbol": "HR",
		"Description": "Healthcare Realty Trust Incorporated"
	}, {
		"Symbol": "HRB",
		"Description": "H&R Block, Inc."
	}, {
		"Symbol": "HRC",
		"Description": "Hill-Rom Holdings Inc"
	}, {
		"Symbol": "HRG",
		"Description": "HRG Group, Inc."
	}, {
		"Symbol": "HRI",
		"Description": "Herc Holdings Inc."
	}, {
		"Symbol": "HRL",
		"Description": "Hormel Foods Corporation"
	}, {
		"Symbol": "HRMN",
		"Description": "Harmony Merger Cmn"
	}, {
		"Symbol": "HRMNU",
		"Description": "Harmony Merger Unit"
	}, {
		"Symbol": "HRMNW",
		"Description": "Harmony Merger Wrnt"
	}, {
		"Symbol": "HRS",
		"Description": "Harris Corporation"
	}, {
		"Symbol": "HRT",
		"Description": "Arrhythmia Research Technology Inc."
	}, {
		"Symbol": "HRTG",
		"Description": "Heritage Insurance Holdings, Inc."
	}, {
		"Symbol": "HRTX",
		"Description": "Heron Therapeutics"
	}, {
		"Symbol": "HRZN",
		"Description": "Horizon Technology F"
	}, {
		"Symbol": "HSBC",
		"Description": "HSBC Holdings plc"
	}, {
		"Symbol": "HSBC^A",
		"Description": "HSBC Holdings plc"
	}, {
		"Symbol": "HSC",
		"Description": "Harsco Corporation"
	}, {
		"Symbol": "HSEA",
		"Description": "HSBC Holdings plc"
	}, {
		"Symbol": "HSEB",
		"Description": "HSBC Holdings plc"
	}, {
		"Symbol": "HSGX",
		"Description": "Histogenics Cp Cmn"
	}, {
		"Symbol": "HSIC",
		"Description": "Henry Schein Inc"
	}, {
		"Symbol": "HSII",
		"Description": "Heidrick & Struggl"
	}, {
		"Symbol": "HSKA",
		"Description": "Heska Corp"
	}, {
		"Symbol": "HSNI",
		"Description": "HSN Inc Cmn Stk"
	}, {
		"Symbol": "HSON",
		"Description": "Hudson Global Cmn"
	}, {
		"Symbol": "HST",
		"Description": "Host Hotels & Resorts, Inc."
	}, {
		"Symbol": "HSTM",
		"Description": "Healthstream Inc"
	}, {
		"Symbol": "HSY",
		"Description": "Hershey Company "
	}, {
		"Symbol": "HT",
		"Description": "Hersha Hospitality Trust"
	}, {
		"Symbol": "HT^C",
		"Description": "Hersha Hospitality Trust"
	}, {
		"Symbol": "HT^D",
		"Description": "Hersha Hospitality Trust"
	}, {
		"Symbol": "HT^E",
		"Description": "Hersha Hospitality Trust"
	}, {
		"Symbol": "HTA",
		"Description": "Healthcare Trust of America, Inc."
	}, {
		"Symbol": "HTBI",
		"Description": "Hometrust Bancshares"
	}, {
		"Symbol": "HTBK",
		"Description": "Heritage Commerce"
	}, {
		"Symbol": "HTBX",
		"Description": "Heat Biologics Inc"
	}, {
		"Symbol": "HTD",
		"Description": "John Hancock Tax Advantaged Dividend Income Fund"
	}, {
		"Symbol": "HTF",
		"Description": "Horizon Technology Finance Corporation"
	}, {
		"Symbol": "HTGC",
		"Description": "Hercules Capital, Inc."
	}, {
		"Symbol": "HTGM",
		"Description": "Htg Molecular Dia Cmn"
	}, {
		"Symbol": "HTGX",
		"Description": "Hercules Capital, Inc."
	}, {
		"Symbol": "HTGY.CL",
		"Description": "Hercules Capital, Inc."
	}, {
		"Symbol": "HTGZ.CL",
		"Description": "Hercules Capital, Inc."
	}, {
		"Symbol": "HTH",
		"Description": "Hilltop Holdings Inc."
	}, {
		"Symbol": "HTHT",
		"Description": "China Lodg Grp Ads"
	}, {
		"Symbol": "HTLD",
		"Description": "Heartland Express"
	}, {
		"Symbol": "HTLF",
		"Description": "Heartland Finl USA"
	}, {
		"Symbol": "HTM",
		"Description": "U.S. Geothermal Inc."
	}, {
		"Symbol": "HTY",
		"Description": "John Hancock Tax-Advantaged Global Shareholder Yield Fund"
	}, {
		"Symbol": "HTZ",
		"Description": "Hertz Global Holdings, Inc"
	}, {
		"Symbol": "HUBB",
		"Description": "Hubbell Inc"
	}, {
		"Symbol": "HUBG",
		"Description": "Hub Group Inc A"
	}, {
		"Symbol": "HUBS",
		"Description": "HubSpot, Inc."
	}, {
		"Symbol": "HUM",
		"Description": "Humana Inc."
	}, {
		"Symbol": "HUN",
		"Description": "Huntsman Corporation"
	}, {
		"Symbol": "HUNTU",
		"Description": "Hunter Maritime Acquisition Corp"
	}, {
		"Symbol": "HUNTW",
		"Description": "Hunter Maritime Acquisition Corp. Warrant"
	}, {
		"Symbol": "HURC",
		"Description": "Hurco Cos Inc"
	}, {
		"Symbol": "HURN",
		"Description": "Huron Consulting"
	}, {
		"Symbol": "HUSA",
		"Description": "Houston American Energy Corporation"
	}, {
		"Symbol": "HVBC",
		"Description": "Hv Bancorp Inc"
	}, {
		"Symbol": "HVT",
		"Description": "Haverty Furniture Companies, Inc."
	}, {
		"Symbol": "HVT.A",
		"Description": "Haverty Furniture Companies, Inc."
	}, {
		"Symbol": "HW",
		"Description": "Headwaters Incorporated"
	}, {
		"Symbol": "HWBK",
		"Description": "Hawthorn Bancshares"
	}, {
		"Symbol": "HWCC",
		"Description": "Houston Wire Cable"
	}, {
		"Symbol": "HWKN",
		"Description": "Hawkins Inc"
	}, {
		"Symbol": "HXL",
		"Description": "Hexcel Corporation"
	}, {
		"Symbol": "HY",
		"Description": "Hyster-Yale Materials Handling, Inc."
	}, {
		"Symbol": "HYB",
		"Description": "New America High Income Fund, Inc. "
	}, {
		"Symbol": "HYGS",
		"Description": "Hydrogenics Corp"
	}, {
		"Symbol": "HYH",
		"Description": "Halyard Health, Inc."
	}, {
		"Symbol": "HYI",
		"Description": "Western Asset High Yield Defined Opportunity Fund Inc."
	}, {
		"Symbol": "HYLS",
		"Description": "First Trust Tactical"
	}, {
		"Symbol": "HYND",
		"Description": "Wt Bofa ML HY Ngdr F"
	}, {
		"Symbol": "HYT",
		"Description": "Blackrock Corporate High Yield Fund, Inc."
	}, {
		"Symbol": "HYXE",
		"Description": "Ishares Iboxx $ High Yield Ex O"
	}, {
		"Symbol": "HYZD",
		"Description": "Wt Bofa ML HY Zero D"
	}, {
		"Symbol": "HZN",
		"Description": "Horizon Global Corporation"
	}, {
		"Symbol": "HZNP",
		"Description": "Horizon Pharma Ord"
	}, {
		"Symbol": "HZO",
		"Description": "MarineMax, Inc."
	}, {
		"Symbol": "I",
		"Description": "Intelsat S.A."
	}, {
		"Symbol": "IAC",
		"Description": "Iac/Interactive"
	}, {
		"Symbol": "IAE",
		"Description": "Voya Asia Pacific High Dividend Equity Income Fund"
	}, {
		"Symbol": "IAF",
		"Description": "Aberdeen Australia Equity Fund Inc"
	}, {
		"Symbol": "IAG",
		"Description": "Iamgold Corporation"
	}, {
		"Symbol": "IART",
		"Description": "Integra Lifesciences"
	}, {
		"Symbol": "IBA",
		"Description": "Industrias Bachoco, S.A. de C.V."
	}, {
		"Symbol": "IBB",
		"Description": "Ishare Nasdaq Biotech ETF"
	}, {
		"Symbol": "IBCP",
		"Description": "Independent Bk Cp"
	}, {
		"Symbol": "IBIO",
		"Description": "iBio, Inc."
	}, {
		"Symbol": "IBKC",
		"Description": "Iberiabank Corp"
	}, {
		"Symbol": "IBKCO",
		"Description": "Iberiabank Ds Rep C"
	}, {
		"Symbol": "IBKCP",
		"Description": "Iberiabank Dp Sh B"
	}, {
		"Symbol": "IBKR",
		"Description": "Interactive Brokers"
	}, {
		"Symbol": "IBM",
		"Description": "International Business Machines Corporation"
	}, {
		"Symbol": "IBN",
		"Description": "ICICI Bank Limited"
	}, {
		"Symbol": "IBO",
		"Description": "IBO Listing Market - NYSE Amex Network B F"
	}, {
		"Symbol": "IBOC",
		"Description": "Intl Bancshares"
	}, {
		"Symbol": "IBP",
		"Description": "Installed Building Products, Inc."
	}, {
		"Symbol": "IBTX",
		"Description": "Independent Bank Grp"
	}, {
		"Symbol": "IBUY",
		"Description": "Amplify Onln Rtl ETF"
	}, {
		"Symbol": "ICAD",
		"Description": "Icad Inc Cmn Stk"
	}, {
		"Symbol": "ICB",
		"Description": "MS Income Securities, Inc."
	}, {
		"Symbol": "ICBK",
		"Description": "County Bancorp Cmn"
	}, {
		"Symbol": "ICCC",
		"Description": "Immucell Cp"
	}, {
		"Symbol": "ICD",
		"Description": "Independence Contract Drilling, Inc."
	}, {
		"Symbol": "ICE",
		"Description": "Intercontinental Exchange Inc."
	}, {
		"Symbol": "ICFI",
		"Description": "Icf International"
	}, {
		"Symbol": "ICHR",
		"Description": "Ichor"
	}, {
		"Symbol": "ICL",
		"Description": "Israel Chemicals Shs"
	}, {
		"Symbol": "ICLN",
		"Description": "Ishres Gbl Cln Ergy"
	}, {
		"Symbol": "ICLR",
		"Description": "Icon Plc"
	}, {
		"Symbol": "ICON",
		"Description": "Iconix Brand Group"
	}, {
		"Symbol": "ICP",
		"Description": "IC Power Ltd."
	}, {
		"Symbol": "ICPT",
		"Description": "Intercept Pharmaceut"
	}, {
		"Symbol": "ICUI",
		"Description": "I C U Medical Inc"
	}, {
		"Symbol": "IDA",
		"Description": "IDACORP, Inc."
	}, {
		"Symbol": "IDCC",
		"Description": "Interdigital Inc"
	}, {
		"Symbol": "IDE",
		"Description": "Voya Infrastructure, Industrials and Materials Fund"
	}, {
		"Symbol": "IDLB",
		"Description": "PS FTSE International Low Beta Equal Weight"
	}, {
		"Symbol": "IDN",
		"Description": "Intellicheck Mobilisa, Inc."
	}, {
		"Symbol": "IDRA",
		"Description": "Idera Pharmaceutical"
	}, {
		"Symbol": "IDSA",
		"Description": "Industrial Svcs Am"
	}, {
		"Symbol": "IDSY",
		"Description": "Id Systems Inc"
	}, {
		"Symbol": "IDT",
		"Description": "IDT Corporation"
	}, {
		"Symbol": "IDTI",
		"Description": "Integrated Devices"
	}, {
		"Symbol": "IDXG",
		"Description": "Interpace Diag Grp"
	}, {
		"Symbol": "IDXX",
		"Description": "Idexx Laboratories"
	}, {
		"Symbol": "IEC",
		"Description": "IEC Electronics Corp."
	}, {
		"Symbol": "IEP",
		"Description": "Icahn Enterprises"
	}, {
		"Symbol": "IESC",
		"Description": "Ies Holdings Cmn"
	}, {
		"Symbol": "IEUS",
		"Description": "Ishares MSCI Europe"
	}, {
		"Symbol": "IEX",
		"Description": "IDEX Corporation"
	}, {
		"Symbol": "IF",
		"Description": "Aberdeen Indonesia Fund, Inc."
	}, {
		"Symbol": "IFEU",
		"Description": "Ishares Europe Dvlpd"
	}, {
		"Symbol": "IFF",
		"Description": "Internationa Flavors & Fragrances, Inc."
	}, {
		"Symbol": "IFGL",
		"Description": "Ishares Intl Devlp"
	}, {
		"Symbol": "IFMI",
		"Description": "Institutional Financial Markets, Inc."
	}, {
		"Symbol": "IFN",
		"Description": "India Fund, Inc. "
	}, {
		"Symbol": "IFON",
		"Description": "Infosonic Corp"
	}, {
		"Symbol": "IFV",
		"Description": "First Trt Dorsey Wri"
	}, {
		"Symbol": "IGA",
		"Description": "Voya Global Advantage and Premium Opportunity Fund"
	}, {
		"Symbol": "IGC",
		"Description": "India Globalization Capital Inc."
	}, {
		"Symbol": "IGD",
		"Description": "Voya Global Equity Dividend and Premium Opportunity Fund"
	}, {
		"Symbol": "IGF",
		"Description": "Ishares Global Infra"
	}, {
		"Symbol": "IGI",
		"Description": "Western Asset Investment Grade Defined Opportunity Trust Inc."
	}, {
		"Symbol": "IGLD",
		"Description": "Internet Gold-Golden"
	}, {
		"Symbol": "IGOV",
		"Description": "Ishares Intl Trsy Bd"
	}, {
		"Symbol": "IGR",
		"Description": "CBRE Clarion Global Real Estate Income Fund"
	}, {
		"Symbol": "IGT",
		"Description": "International Game Technology"
	}, {
		"Symbol": "IHC",
		"Description": "Independence Holding Company"
	}, {
		"Symbol": "IHD",
		"Description": "Voya Emerging Markets High Income Dividend Equity Fund"
	}, {
		"Symbol": "IHG",
		"Description": "Intercontinental Hotels Group"
	}, {
		"Symbol": "IHIT",
		"Description": "Invesco High Income 2023 Target Term Fund"
	}, {
		"Symbol": "IHT",
		"Description": "InnSuites Hospitality Trust"
	}, {
		"Symbol": "IID",
		"Description": "Voya International High Dividend Equity Income Fund"
	}, {
		"Symbol": "IIF",
		"Description": "Morgan Stanley India Investment Fund, Inc."
	}, {
		"Symbol": "III",
		"Description": "Information Svcs Grp"
	}, {
		"Symbol": "IIIN",
		"Description": "Insteel Industries"
	}, {
		"Symbol": "IIJI",
		"Description": "Internet Init Jap"
	}, {
		"Symbol": "IIM",
		"Description": "Invesco Value Municipal Income Trust"
	}, {
		"Symbol": "IIN",
		"Description": "Intricon Corp"
	}, {
		"Symbol": "IIPR",
		"Description": "Innovative Industrial Properties, Inc."
	}, {
		"Symbol": "IIVI",
		"Description": "I I V I Inc"
	}, {
		"Symbol": "IKGH",
		"Description": "Iao Kun Grp Holdings"
	}, {
		"Symbol": "IKNX",
		"Description": "Ikonics Corp"
	}, {
		"Symbol": "ILG",
		"Description": "Ilg Inc"
	}, {
		"Symbol": "ILMN",
		"Description": "Illumina Inc"
	}, {
		"Symbol": "IMAX",
		"Description": "Imax Corporation"
	}, {
		"Symbol": "IMDZ",
		"Description": "Immune Design CS"
	}, {
		"Symbol": "IMED",
		"Description": "Purefunds Etfx Healthtech ETF"
	}, {
		"Symbol": "IMGN",
		"Description": "Immunogen Inc"
	}, {
		"Symbol": "IMH",
		"Description": "Impac Mortgage Holdings, Inc."
	}, {
		"Symbol": "IMI",
		"Description": "Intermolecular Inc"
	}, {
		"Symbol": "IMKTA",
		"Description": "Ingles Markets Inc"
	}, {
		"Symbol": "IMMR",
		"Description": "Immersion Corp"
	}, {
		"Symbol": "IMMU",
		"Description": "Immunomedics Inc"
	}, {
		"Symbol": "IMMY",
		"Description": "Imprimis Phar Cmn"
	}, {
		"Symbol": "IMN",
		"Description": "Imation Corporation"
	}, {
		"Symbol": "IMNP",
		"Description": "Immune Pharma Cmn"
	}, {
		"Symbol": "IMO",
		"Description": "Imperial Oil Limited"
	}, {
		"Symbol": "IMOS",
		"Description": "Chipmos Tech New"
	}, {
		"Symbol": "IMPV",
		"Description": "Imperva Inc"
	}, {
		"Symbol": "IMUC",
		"Description": "ImmunoCellular Therapeutics, Ltd."
	}, {
		"Symbol": "IMUC.WS",
		"Description": "ImmunoCellular Therapeutics, Ltd."
	}, {
		"Symbol": "INAP",
		"Description": "Internap Corp Cmn"
	}, {
		"Symbol": "INB",
		"Description": "Cohen & Steers Global Income Builder, Inc."
	}, {
		"Symbol": "INBK",
		"Description": "First Internet Bcp"
	}, {
		"Symbol": "INBKL",
		"Description": "First Internet Bancorp"
	}, {
		"Symbol": "INCR",
		"Description": "Inc Research A Cmn"
	}, {
		"Symbol": "INCY",
		"Description": "Incyte Corporation"
	}, {
		"Symbol": "INDB",
		"Description": "Independent Bk Corp"
	}, {
		"Symbol": "INDY",
		"Description": "Ishares India 50 ETF"
	}, {
		"Symbol": "INF",
		"Description": "Brookfield Global Listed Infrastructure Income Fund"
	}, {
		"Symbol": "INFI",
		"Description": "Infinity Pharmaceuti"
	}, {
		"Symbol": "INFN",
		"Description": "Infinera Corporation"
	}, {
		"Symbol": "INFO",
		"Description": "IHS Markit Ltd"
	}, {
		"Symbol": "INFR",
		"Description": "Legg Mason ETF Equity Trust Legg Mason Global In"
	}, {
		"Symbol": "INFU",
		"Description": "InfuSystems Holdings, Inc."
	}, {
		"Symbol": "INFY",
		"Description": "Infosys Limited"
	}, {
		"Symbol": "ING",
		"Description": "ING Group, N.V."
	}, {
		"Symbol": "INGN",
		"Description": "Inogen Inc"
	}, {
		"Symbol": "INGR",
		"Description": "Ingredion Incorporated"
	}, {
		"Symbol": "INN",
		"Description": "Summit Hotel Properties, Inc."
	}, {
		"Symbol": "INN^B",
		"Description": "Summit Hotel Properties, Inc."
	}, {
		"Symbol": "INN^C",
		"Description": "Summit Hotel Properties, Inc."
	}, {
		"Symbol": "INN^D",
		"Description": "Summit Hotel Properties, Inc."
	}, {
		"Symbol": "INNL",
		"Description": "Innocoll Hld Ord Shr"
	}, {
		"Symbol": "INO",
		"Description": "Inovio Pharma Cmn"
	}, {
		"Symbol": "INOD",
		"Description": "Innodata Inc"
	}, {
		"Symbol": "INOV",
		"Description": "Inovalon Hldgs Cm A"
	}, {
		"Symbol": "INS",
		"Description": "Intelligent Systems Corporation"
	}, {
		"Symbol": "INSE",
		"Description": "Inspired Entertainment Inc. Common Stock"
	}, {
		"Symbol": "INSEW",
		"Description": "Inspired Entertainment Inc. Warrants"
	}, {
		"Symbol": "INSG",
		"Description": "Novatel Wireless Cmn"
	}, {
		"Symbol": "INSI",
		"Description": "Insight Select Income Fund"
	}, {
		"Symbol": "INSM",
		"Description": "Insmed Inc"
	}, {
		"Symbol": "INST",
		"Description": "Instructure, Inc."
	}, {
		"Symbol": "INSW",
		"Description": "International Seaways, Inc."
	}, {
		"Symbol": "INSY",
		"Description": "Insys Theraptcs Cmn"
	}, {
		"Symbol": "INT",
		"Description": "World Fuel Services Corporation"
	}, {
		"Symbol": "INTC",
		"Description": "Intel Corp"
	}, {
		"Symbol": "INTG",
		"Description": "Intergroup Cp "
	}, {
		"Symbol": "INTL",
		"Description": "Intl Fcstone Inc Cmn"
	}, {
		"Symbol": "INTT",
		"Description": "inTest Corporation"
	}, {
		"Symbol": "INTU",
		"Description": "Intuit Inc"
	}, {
		"Symbol": "INTX",
		"Description": "Intersections Inc"
	}, {
		"Symbol": "INUV",
		"Description": "Inuvo, Inc"
	}, {
		"Symbol": "INVA",
		"Description": "Innoviva Inc"
	}, {
		"Symbol": "INVE",
		"Description": "Identiv Inc"
	}, {
		"Symbol": "INVH",
		"Description": "Invitation Homes Inc."
	}, {
		"Symbol": "INVN",
		"Description": "InvenSense, Inc."
	}, {
		"Symbol": "INVT",
		"Description": "Inventergy Glbl Inc"
	}, {
		"Symbol": "INWK",
		"Description": "Innerworkings Inc"
	}, {
		"Symbol": "INXN",
		"Description": "InterXion Holding N.V."
	}, {
		"Symbol": "INZ",
		"Description": "ING Group, N.V."
	}, {
		"Symbol": "IO",
		"Description": "Ion Geophysical Corporation"
	}, {
		"Symbol": "IOC",
		"Description": "InterOil Corporation"
	}, {
		"Symbol": "IONS",
		"Description": "Ionis Pharmaceutical"
	}, {
		"Symbol": "IOSP",
		"Description": "Innospec Inc"
	}, {
		"Symbol": "IOT",
		"Description": "Income Opportunity Realty Investors, Inc."
	}, {
		"Symbol": "IOTS",
		"Description": "Adesto Tech Cmn"
	}, {
		"Symbol": "IP",
		"Description": "International Paper Company"
	}, {
		"Symbol": "IPAR",
		"Description": "Inter Parfums Inc"
	}, {
		"Symbol": "IPAS",
		"Description": "Ipass Inc"
	}, {
		"Symbol": "IPB",
		"Description": "Merrill Lynch & Co., Inc."
	}, {
		"Symbol": "IPCC",
		"Description": "Infinity Property"
	}, {
		"Symbol": "IPCI",
		"Description": "Intellipharmaceutics"
	}, {
		"Symbol": "IPDN",
		"Description": "Professional Diversi"
	}, {
		"Symbol": "IPG",
		"Description": "Interpublic Group of Companies, Inc. "
	}, {
		"Symbol": "IPGP",
		"Description": "Ipg Photonics Corp"
	}, {
		"Symbol": "IPHI",
		"Description": "Inphi Corporation"
	}, {
		"Symbol": "IPHS",
		"Description": "Innophos Hldngs Inc"
	}, {
		"Symbol": "IPI",
		"Description": "Intrepid Potash, Inc"
	}, {
		"Symbol": "IPKW",
		"Description": "PS International Buyback Achievers"
	}, {
		"Symbol": "IPL^D",
		"Description": "Interstate Power and Light Company"
	}, {
		"Symbol": "IPWR",
		"Description": "Ideal Power Inc"
	}, {
		"Symbol": "IPXL",
		"Description": "Impax Labs Inc"
	}, {
		"Symbol": "IQI",
		"Description": "Invesco Quality Municipal Income Trust"
	}, {
		"Symbol": "IQNT",
		"Description": "Inteliquent Inc Cmn"
	}, {
		"Symbol": "IR",
		"Description": "Ingersoll-Rand plc Ireland"
	}, {
		"Symbol": "IRBT",
		"Description": "Irobot Corporation"
	}, {
		"Symbol": "IRCP",
		"Description": "Irsa Propiedades Ads"
	}, {
		"Symbol": "IRDM",
		"Description": "Iridium Comm Inc"
	}, {
		"Symbol": "IRDMB",
		"Description": "Iridium 6.75 Sr B Pf"
	}, {
		"Symbol": "IRET",
		"Description": "Investors Real Estate Trust"
	}, {
		"Symbol": "IRET^B",
		"Description": "Investors Real Estate Trust"
	}, {
		"Symbol": "IRG",
		"Description": "Ignite Restaurant Gp"
	}, {
		"Symbol": "IRIX",
		"Description": "Iridex Cp"
	}, {
		"Symbol": "IRL",
		"Description": "New Ireland Fund, Inc. "
	}, {
		"Symbol": "IRM",
		"Description": "Iron Mountain Incorporated"
	}, {
		"Symbol": "IRMD",
		"Description": "Iradimed Cp Cm Stk"
	}, {
		"Symbol": "IROQ",
		"Description": "If Bancorp Inc"
	}, {
		"Symbol": "IRR",
		"Description": "Voya Natural Resources Equity Income Fund"
	}, {
		"Symbol": "IRS",
		"Description": "IRSA Inversiones Y Representaciones S.A."
	}, {
		"Symbol": "IRT",
		"Description": "Independence Realty Trust, Inc."
	}, {
		"Symbol": "IRTC",
		"Description": "Irhythm Technologies Inc"
	}, {
		"Symbol": "IRWD",
		"Description": "Ironwood Pharmaceuti"
	}, {
		"Symbol": "ISBC",
		"Description": "Investors Bancorp"
	}, {
		"Symbol": "ISCA",
		"Description": "Intl Speedway Cl A"
	}, {
		"Symbol": "ISD",
		"Description": "Prudential Short Duration High Yield Fund, Inc."
	}, {
		"Symbol": "ISDR",
		"Description": "Issuer Direct Corporation"
	}, {
		"Symbol": "ISF",
		"Description": "ING Group, N.V."
	}, {
		"Symbol": "ISG",
		"Description": "ING Group, N.V."
	}, {
		"Symbol": "ISHG",
		"Description": "Ishares 1-3 Yr Intl"
	}, {
		"Symbol": "ISIG",
		"Description": "Insignia Systems"
	}, {
		"Symbol": "ISIL",
		"Description": "Intersil Corp Cla"
	}, {
		"Symbol": "ISL",
		"Description": "Aberdeen Israel Fund, Inc."
	}, {
		"Symbol": "ISLE",
		"Description": "Isle of Capri Cas"
	}, {
		"Symbol": "ISM",
		"Description": "SLM Corp Med Nt A"
	}, {
		"Symbol": "ISNS",
		"Description": "Image Sensing Syst"
	}, {
		"Symbol": "ISP",
		"Description": "ING Group, N.V."
	}, {
		"Symbol": "ISR",
		"Description": "IsoRay, Inc."
	}, {
		"Symbol": "ISRG",
		"Description": "Intuitive Surg Inc"
	}, {
		"Symbol": "ISRL",
		"Description": "Isramco Inc"
	}, {
		"Symbol": "ISSC",
		"Description": "Innovative Sol&Sup"
	}, {
		"Symbol": "ISTR",
		"Description": "Investar Holding Cmn"
	}, {
		"Symbol": "IT",
		"Description": "Gartner, Inc."
	}, {
		"Symbol": "ITCB",
		"Description": "Ita? CorpBanca"
	}, {
		"Symbol": "ITCI",
		"Description": "Intra-Cellular Ther"
	}, {
		"Symbol": "ITEK",
		"Description": "Inotek Pharma Cmn"
	}, {
		"Symbol": "ITEQ",
		"Description": "Blstar Ta-Bgtch Isrl"
	}, {
		"Symbol": "ITG",
		"Description": "Investment Technology Group, Inc."
	}, {
		"Symbol": "ITGR",
		"Description": "Integer Holdings Corporation"
	}, {
		"Symbol": "ITI",
		"Description": "Iteris Inc Cmn Stk"
	}, {
		"Symbol": "ITIC",
		"Description": "Investors Title Co"
	}, {
		"Symbol": "ITRI",
		"Description": "Itron Inc"
	}, {
		"Symbol": "ITRN",
		"Description": "Ituran Location"
	}, {
		"Symbol": "ITT",
		"Description": "ITT Inc."
	}, {
		"Symbol": "ITUB",
		"Description": "Itau Unibanco Banco Holding SA"
	}, {
		"Symbol": "ITUS",
		"Description": "Itus Corp Cmn"
	}, {
		"Symbol": "ITW",
		"Description": "Illinois Tool Works Inc."
	}, {
		"Symbol": "IVAC",
		"Description": "Intevac Inc"
	}, {
		"Symbol": "IVC",
		"Description": "Invacare Corporation"
	}, {
		"Symbol": "IVENC",
		"Description": "Ivy Energy Nextshares"
	}, {
		"Symbol": "IVFGC",
		"Description": "Ivy Focused Growth Nextshares"
	}, {
		"Symbol": "IVFVC",
		"Description": "Ivy Focused Value Nextshares"
	}, {
		"Symbol": "IVH",
		"Description": "Ivy High Income Opportunities Fund"
	}, {
		"Symbol": "IVR",
		"Description": "INVESCO MORTGAGE CAPITAL INC"
	}, {
		"Symbol": "IVR^A",
		"Description": "Invesco Mortgage Capital Inc."
	}, {
		"Symbol": "IVR^B",
		"Description": "INVESCO MORTGAGE CAPITAL INC"
	}, {
		"Symbol": "IVTY",
		"Description": "Invuity Inc Cmn Stk"
	}, {
		"Symbol": "IVZ",
		"Description": "Invesco Plc"
	}, {
		"Symbol": "IX",
		"Description": "Orix Corp Ads"
	}, {
		"Symbol": "IXUS",
		"Description": "Ishs Core ACWI IMI"
	}, {
		"Symbol": "IXYS",
		"Description": "Ixys Corporation"
	}, {
		"Symbol": "IZEA",
		"Description": "Izea Inc Common Stk"
	}, {
		"Symbol": "JACK",
		"Description": "Jack In  Box Inc"
	}, {
		"Symbol": "JAG",
		"Description": "Jagged Peak Energy Inc."
	}, {
		"Symbol": "JAGX",
		"Description": "Jaguar Animal Cmn"
	}, {
		"Symbol": "JAKK",
		"Description": "Jakks Pacific Inc"
	}, {
		"Symbol": "JASN",
		"Description": "Jason Indst Cmn"
	}, {
		"Symbol": "JASNW",
		"Description": "Jason Industries Wt"
	}, {
		"Symbol": "JASO",
		"Description": "JA Solar Holdings"
	}, {
		"Symbol": "JAX",
		"Description": "J. Alexanders Holdings, Inc."
	}, {
		"Symbol": "JAZZ",
		"Description": "Jazz Pharma Plc"
	}, {
		"Symbol": "JBHT",
		"Description": "J B Hunt Transport"
	}, {
		"Symbol": "JBK",
		"Description": "Lehman ABS Corporation"
	}, {
		"Symbol": "JBL",
		"Description": "Jabil Circuit, Inc."
	}, {
		"Symbol": "JBLU",
		"Description": "Jetblue Airways Cp"
	}, {
		"Symbol": "JBN",
		"Description": "Select Asset Inc."
	}, {
		"Symbol": "JBR",
		"Description": "Select Asset Inc."
	}, {
		"Symbol": "JBSS",
		"Description": "John B Sanfilippo"
	}, {
		"Symbol": "JBT",
		"Description": "John Bean Technologies Corporation"
	}, {
		"Symbol": "JCAP",
		"Description": "Jernigan Capital, Inc."
	}, {
		"Symbol": "JCE",
		"Description": "Nuveen Core Equity Alpha Fund"
	}, {
		"Symbol": "JCI",
		"Description": "Johnson Controls International plc"
	}, {
		"Symbol": "JCOM",
		"Description": "J2 Global Inc Cmn"
	}, {
		"Symbol": "JCP",
		"Description": "J.C. Penney Company, Inc. Holding Company"
	}, {
		"Symbol": "JCS",
		"Description": "Commun Systems Inc"
	}, {
		"Symbol": "JCTCF",
		"Description": "Jewett-Cameron Trd"
	}, {
		"Symbol": "JD",
		"Description": "Jd.Com Inc Ads"
	}, {
		"Symbol": "JDD",
		"Description": "Nuveen Diversified Dividend and Income Fund"
	}, {
		"Symbol": "JE",
		"Description": "Just Energy Group, Inc."
	}, {
		"Symbol": "JEC",
		"Description": "Jacobs Engineering Group Inc."
	}, {
		"Symbol": "JELD",
		"Description": "JELD-WEN Holding, Inc."
	}, {
		"Symbol": "JEQ",
		"Description": "Aberdeen Japan Equity Fund, Inc."
	}, {
		"Symbol": "JFC",
		"Description": "JPMorgan China Region Fund, Inc."
	}, {
		"Symbol": "JFR",
		"Description": "Nuveen Floating Rate Income Fund"
	}, {
		"Symbol": "JGH",
		"Description": "Nuveen Global High Income Fund"
	}, {
		"Symbol": "JHA",
		"Description": "Nuveen High Income 2020 Target Term Fund"
	}, {
		"Symbol": "JHB",
		"Description": "Nuveen High Income November 2021 Target Term Fund"
	}, {
		"Symbol": "JHD",
		"Description": "Nuveen High Income December 2019 Target Term Fund"
	}, {
		"Symbol": "JHI",
		"Description": "John Hancock Investors Trust"
	}, {
		"Symbol": "JHS",
		"Description": "John Hancock Income Securities Trust"
	}, {
		"Symbol": "JHX",
		"Description": "James Hardie Industries plc."
	}, {
		"Symbol": "JHY",
		"Description": "Nuveen High Income 2020 Target Term Fund"
	}, {
		"Symbol": "JIVE",
		"Description": "Jive Software Inc"
	}, {
		"Symbol": "JJSF",
		"Description": "J J Snack Foods"
	}, {
		"Symbol": "JKHY",
		"Description": "Jack Henry & Assoc"
	}, {
		"Symbol": "JKI",
		"Description": "Ishares Mrgng Mid Va"
	}, {
		"Symbol": "JKS",
		"Description": "JinkoSolar Holding Company Limited"
	}, {
		"Symbol": "JLL",
		"Description": "Jones Lang LaSalle Incorporated"
	}, {
		"Symbol": "JLS",
		"Description": "Nuveen Mortgage Opportunity Term Fund"
	}, {
		"Symbol": "JMBA",
		"Description": "Jamba Inc Cmn Stk"
	}, {
		"Symbol": "JMEI",
		"Description": "Jumei International Holding Limited"
	}, {
		"Symbol": "JMF",
		"Description": "Nuveen Energy MLP Total Return Fund"
	}, {
		"Symbol": "JMLP",
		"Description": "Nuveen All Cap Energy MLP Opportunities Fund"
	}, {
		"Symbol": "JMM",
		"Description": "Nuveen Multi-Market Income Fund"
	}, {
		"Symbol": "JMP",
		"Description": "JMP Group LLC"
	}, {
		"Symbol": "JMPB",
		"Description": "JMP Group LLC"
	}, {
		"Symbol": "JMPC",
		"Description": "JMP Group LLC"
	}, {
		"Symbol": "JMT",
		"Description": "Nuven Mortgage Opportunity Term Fund 2"
	}, {
		"Symbol": "JMU",
		"Description": "Wowo Ltd Ads"
	}, {
		"Symbol": "JNCE",
		"Description": "Jounce Therapeutics Inc."
	}, {
		"Symbol": "JNJ",
		"Description": "Johnson & Johnson"
	}, {
		"Symbol": "JNP",
		"Description": "Juniper Pharm Inc"
	}, {
		"Symbol": "JNPR",
		"Description": "Juniper Networks, Inc."
	}, {
		"Symbol": "JNS",
		"Description": "Janus Capital Group, Inc"
	}, {
		"Symbol": "JOB",
		"Description": "GEE Group Inc."
	}, {
		"Symbol": "JOBS",
		"Description": "51Job Inc"
	}, {
		"Symbol": "JOE",
		"Description": "St. Joe Company "
	}, {
		"Symbol": "JOF",
		"Description": "Japan Smaller Capitalization Fund Inc"
	}, {
		"Symbol": "JONE",
		"Description": "Jones Energy, Inc."
	}, {
		"Symbol": "JOUT",
		"Description": "Johnson Outdoors I"
	}, {
		"Symbol": "JOY",
		"Description": "Joy Global Inc."
	}, {
		"Symbol": "JP",
		"Description": "Jupai Holdings Limited"
	}, {
		"Symbol": "JPC",
		"Description": "Nuveen Preferred Income Opportunites Fund"
	}, {
		"Symbol": "JPEP",
		"Description": "JP Energy Partners LP"
	}, {
		"Symbol": "JPI",
		"Description": "Nuveen Preferred and Income Term Fund"
	}, {
		"Symbol": "JPM",
		"Description": "J P Morgan Chase & Co"
	}, {
		"Symbol": "JPM.WS",
		"Description": "J P Morgan Chase & Co"
	}, {
		"Symbol": "JPM^A",
		"Description": "J P Morgan Chase & Co"
	}, {
		"Symbol": "JPM^B",
		"Description": "J P Morgan Chase & Co"
	}, {
		"Symbol": "JPM^D",
		"Description": "J P Morgan Chase & Co"
	}, {
		"Symbol": "JPM^E",
		"Description": "J P Morgan Chase & Co"
	}, {
		"Symbol": "JPM^F",
		"Description": "J P Morgan Chase & Co"
	}, {
		"Symbol": "JPM^G",
		"Description": "J P Morgan Chase & Co"
	}, {
		"Symbol": "JPM^H",
		"Description": "J P Morgan Chase & Co"
	}, {
		"Symbol": "JPS",
		"Description": "Nuveen Quality Preferred Income Fund 2"
	}, {
		"Symbol": "JPT",
		"Description": "Nuveen Preferred and Income 2022 Term Fund"
	}, {
		"Symbol": "JPW",
		"Description": "Nuveen Flexible Investment Income Fund"
	}, {
		"Symbol": "JQC",
		"Description": "Nuveen Credit Strategies Income Fund"
	}, {
		"Symbol": "JRI",
		"Description": "Nuveen Real Asset Income and Growth Fund"
	}, {
		"Symbol": "JRJC",
		"Description": "China Finance Online"
	}, {
		"Symbol": "JRJR",
		"Description": "JRjr33, Inc."
	}, {
		"Symbol": "JRO",
		"Description": "Nuveen Floating Rate Income Opportuntiy Fund"
	}, {
		"Symbol": "JRS",
		"Description": "Nuveen Real Estate Fund"
	}, {
		"Symbol": "JRVR",
		"Description": "James River Gp HD Cmn"
	}, {
		"Symbol": "JSD",
		"Description": "Nuveen Short Duration Credit Opportunities Fund"
	}, {
		"Symbol": "JSM",
		"Description": "SLM Cp 6% Sr Nt"
	}, {
		"Symbol": "JSMD",
		"Description": "Jns Sml Mid Cap ETF"
	}, {
		"Symbol": "JSML",
		"Description": "Janus Sm Cap Gr ETF"
	}, {
		"Symbol": "JSYN",
		"Description": "Jensyn Acq Cp CS"
	}, {
		"Symbol": "JSYNR",
		"Description": "Jensyn Acq Cp Rt"
	}, {
		"Symbol": "JSYNU",
		"Description": "Jensyn Acq Cp Ut"
	}, {
		"Symbol": "JSYNW",
		"Description": "Jensyn Acq Cp Wt"
	}, {
		"Symbol": "JTA",
		"Description": "Nuveen Tax-Advantaged Total Return Strategy Fund"
	}, {
		"Symbol": "JTD",
		"Description": "Nuveen Tax-Advantaged Dividend Growth Fund"
	}, {
		"Symbol": "JTPY",
		"Description": "Jetpay Corporation"
	}, {
		"Symbol": "JUNO",
		"Description": "Juno Therapeutics Cmn"
	}, {
		"Symbol": "JVA",
		"Description": "Coffee Holding Co."
	}, {
		"Symbol": "JW.A",
		"Description": "John Wiley & Sons, Inc."
	}, {
		"Symbol": "JW.B",
		"Description": "John Wiley & Sons, Inc."
	}, {
		"Symbol": "JWN",
		"Description": "Nordstrom, Inc."
	}, {
		"Symbol": "JXSB",
		"Description": "Jacksonville Bncp"
	}, {
		"Symbol": "JYNT",
		"Description": " Joint Corp Cmn"
	}, {
		"Symbol": "K",
		"Description": "Kellogg Company"
	}, {
		"Symbol": "KAI",
		"Description": "Kadant Inc"
	}, {
		"Symbol": "KALU",
		"Description": "Kaiser Aluminum"
	}, {
		"Symbol": "KALV",
		"Description": "Kalvista Pharmaceuticals Inc."
	}, {
		"Symbol": "KAMN",
		"Description": "Kaman Corporation"
	}, {
		"Symbol": "KANG",
		"Description": "Ikang Healthcare ADR"
	}, {
		"Symbol": "KAP",
		"Description": "KCAP Financial, Inc."
	}, {
		"Symbol": "KAR",
		"Description": "KAR Auction Services, Inc"
	}, {
		"Symbol": "KATE",
		"Description": "Kate Spade & Company"
	}, {
		"Symbol": "KB",
		"Description": "KB Financial Group Inc"
	}, {
		"Symbol": "KBAL",
		"Description": "Kimball Intl Cl B"
	}, {
		"Symbol": "KBH",
		"Description": "KB Home"
	}, {
		"Symbol": "KBR",
		"Description": "KBR, Inc."
	}, {
		"Symbol": "KBSF",
		"Description": "Kbs Fashion Gp Ltd"
	}, {
		"Symbol": "KBWB",
		"Description": "KBW Bank Powershares"
	}, {
		"Symbol": "KBWD",
		"Description": "KBW High Div Yield Financial Powershares"
	}, {
		"Symbol": "KBWP",
		"Description": "KBW Prop & Casuality Insur Powershares"
	}, {
		"Symbol": "KBWR",
		"Description": "KBW Regional Banking Powershares"
	}, {
		"Symbol": "KBWY",
		"Description": "KBW Prem Yield Equity REIT Powershares"
	}, {
		"Symbol": "KCAP",
		"Description": "Kcap Financial Cmn"
	}, {
		"Symbol": "KCC.CL",
		"Description": "Lehman ABS Corporation"
	}, {
		"Symbol": "KCG",
		"Description": "KCG Holdings, Inc."
	}, {
		"Symbol": "KDMN",
		"Description": "Kadmon Holdings, Inc."
	}, {
		"Symbol": "KE",
		"Description": "Kimball Electrnc Cmn"
	}, {
		"Symbol": "KED",
		"Description": "Kayne Anderson Energy Development Company"
	}, {
		"Symbol": "KEF",
		"Description": "Korea Equity Fund, Inc."
	}, {
		"Symbol": "KEG",
		"Description": "Key Energy Services, Inc."
	}, {
		"Symbol": "KELYA",
		"Description": "Kelly Svcs Cl A"
	}, {
		"Symbol": "KEM",
		"Description": "Kemet Corporation"
	}, {
		"Symbol": "KEN",
		"Description": "Kenon Holdings Ltd."
	}, {
		"Symbol": "KEP",
		"Description": "Korea Electric Power Corporation"
	}, {
		"Symbol": "KEQU",
		"Description": "Kewaunee Scientifi"
	}, {
		"Symbol": "KERX",
		"Description": "Keryx Biopharm Inc"
	}, {
		"Symbol": "KEX",
		"Description": "Kirby Corporation"
	}, {
		"Symbol": "KEY",
		"Description": "KeyCorp"
	}, {
		"Symbol": "KEY^G",
		"Description": "KeyCorp"
	}, {
		"Symbol": "KEY^H.CL",
		"Description": "KeyCorp"
	}, {
		"Symbol": "KEY^I",
		"Description": "KeyCorp"
	}, {
		"Symbol": "KEYS",
		"Description": "Keysight Technologies Inc."
	}, {
		"Symbol": "KEYW",
		"Description": "Keyw Holding Corp"
	}, {
		"Symbol": "KF",
		"Description": "Korea Fund, Inc. "
	}, {
		"Symbol": "KFFB",
		"Description": "Kentucky First Fed"
	}, {
		"Symbol": "KFI",
		"Description": "KKR Financial Holdings LLC"
	}, {
		"Symbol": "KFN^",
		"Description": "KKR Financial Holdings LLC"
	}, {
		"Symbol": "KFRC",
		"Description": "Kforce Inc"
	}, {
		"Symbol": "KFS",
		"Description": "Kingsway Financial Services, Inc."
	}, {
		"Symbol": "KFY",
		"Description": "Korn/Ferry International"
	}, {
		"Symbol": "KGC",
		"Description": "Kinross Gold Corporation"
	}, {
		"Symbol": "KGJI",
		"Description": "Kingold Jewelry Inc"
	}, {
		"Symbol": "KHC",
		"Description": "Kraft Heinz Co Cmn"
	}, {
		"Symbol": "KIM",
		"Description": "Kimco Realty Corporation"
	}, {
		"Symbol": "KIM^I",
		"Description": "Kimco Realty Corporation"
	}, {
		"Symbol": "KIM^J",
		"Description": "Kimco Realty Corporation"
	}, {
		"Symbol": "KIM^K",
		"Description": "Kimco Realty Corporation"
	}, {
		"Symbol": "KIN",
		"Description": "Kindred Biosciences"
	}, {
		"Symbol": "KINS",
		"Description": "Kingstone Cos Inc"
	}, {
		"Symbol": "KIO",
		"Description": "KKR Income Opportunities Fund"
	}, {
		"Symbol": "KIQ",
		"Description": "Kelso Technologies Inc"
	}, {
		"Symbol": "KIRK",
		"Description": "Kirkland's Inc"
	}, {
		"Symbol": "KITE",
		"Description": "Kite Pharma Inc Cmn"
	}, {
		"Symbol": "KKR",
		"Description": "KKR & Co. L.P."
	}, {
		"Symbol": "KKR^A",
		"Description": "KKR & Co. L.P."
	}, {
		"Symbol": "KKR^B",
		"Description": "KKR & Co. L.P."
	}, {
		"Symbol": "KLAC",
		"Description": "K L A-Tencor Corp"
	}, {
		"Symbol": "KLDX",
		"Description": "Klondex Mines Ltd."
	}, {
		"Symbol": "KLIC",
		"Description": "Kulicke and Soffa"
	}, {
		"Symbol": "KLRE",
		"Description": "Klr Energy Acq Cm A"
	}, {
		"Symbol": "KLREU",
		"Description": "Klr Energy Acq Ut"
	}, {
		"Symbol": "KLREW",
		"Description": "Klr Energy Acq Wt"
	}, {
		"Symbol": "KLXI",
		"Description": "Klx Inc"
	}, {
		"Symbol": "KMB",
		"Description": "Kimberly-Clark Corporation"
	}, {
		"Symbol": "KMDA",
		"Description": "Kamada Ltd"
	}, {
		"Symbol": "KMF",
		"Description": "Kayne Anderson Midstream Energy Fund, Inc"
	}, {
		"Symbol": "KMG",
		"Description": "KMG Chemicals, Inc."
	}, {
		"Symbol": "KMI",
		"Description": "Kinder Morgan, Inc."
	}, {
		"Symbol": "KMI.WS",
		"Description": "Kinder Morgan, Inc."
	}, {
		"Symbol": "KMI^A",
		"Description": "Kinder Morgan, Inc."
	}, {
		"Symbol": "KMM",
		"Description": "Scudder Multi-Market Income Trust"
	}, {
		"Symbol": "KMPA",
		"Description": "Kemper Corporation"
	}, {
		"Symbol": "KMPH",
		"Description": "Kempharm Inc Cmn"
	}, {
		"Symbol": "KMPR",
		"Description": "Kemper Corporation"
	}, {
		"Symbol": "KMT",
		"Description": "Kennametal Inc."
	}, {
		"Symbol": "KMX",
		"Description": "CarMax Inc"
	}, {
		"Symbol": "KN",
		"Description": "Knowles Corporation"
	}, {
		"Symbol": "KND",
		"Description": "Kindred Healthcare, Inc."
	}, {
		"Symbol": "KNDI",
		"Description": "Kandi Techs Grp Cmn"
	}, {
		"Symbol": "KNL",
		"Description": "Knoll, Inc."
	}, {
		"Symbol": "KNOP",
		"Description": "KNOT Offshore Partners LP"
	}, {
		"Symbol": "KNSL",
		"Description": "Kinsale Capital Group Inc Cmn"
	}, {
		"Symbol": "KNX",
		"Description": "Knight Transportation, Inc."
	}, {
		"Symbol": "KO",
		"Description": "Coca-Cola Company "
	}, {
		"Symbol": "KODK",
		"Description": "Eastman Kodak Company"
	}, {
		"Symbol": "KODK.WS",
		"Description": "Eastman Kodak Company"
	}, {
		"Symbol": "KODK.WS.A",
		"Description": "Eastman Kodak Company"
	}, {
		"Symbol": "KOF",
		"Description": "Coca Cola Femsa S.A.B. de C.V."
	}, {
		"Symbol": "KONA",
		"Description": "Kona Grill Inc"
	}, {
		"Symbol": "KONE",
		"Description": "Kingtone Wirelessinf"
	}, {
		"Symbol": "KOOL",
		"Description": "Cesca Therapeutics I"
	}, {
		"Symbol": "KOP",
		"Description": "Koppers Holdings Inc."
	}, {
		"Symbol": "KOPN",
		"Description": "Kopin Cp"
	}, {
		"Symbol": "KORS",
		"Description": "Michael Kors Holdings Limited"
	}, {
		"Symbol": "KOS",
		"Description": "Kosmos Energy Ltd."
	}, {
		"Symbol": "KOSS",
		"Description": "Koss Cp"
	}, {
		"Symbol": "KPTI",
		"Description": "Karyopharm Therapeut"
	}, {
		"Symbol": "KR",
		"Description": "Kroger Company "
	}, {
		"Symbol": "KRA",
		"Description": "Kraton Corporation"
	}, {
		"Symbol": "KRC",
		"Description": "Kilroy Realty Corporation"
	}, {
		"Symbol": "KRC^G",
		"Description": "Kilroy Realty Corporation"
	}, {
		"Symbol": "KRC^H",
		"Description": "Kilroy Realty Corporation"
	}, {
		"Symbol": "KRG",
		"Description": "Kite Realty Group Trust"
	}, {
		"Symbol": "KRMA",
		"Description": "Global X Conscious Companies ETF"
	}, {
		"Symbol": "KRNT",
		"Description": "Kornit Digital Ord"
	}, {
		"Symbol": "KRNY",
		"Description": "Kearny Financial Cmn"
	}, {
		"Symbol": "KRO",
		"Description": "Kronos Worldwide Inc"
	}, {
		"Symbol": "KRP",
		"Description": "Kimbell Royalty Partners"
	}, {
		"Symbol": "KS",
		"Description": "KapStone Paper and Packaging Corporation"
	}, {
		"Symbol": "KSM",
		"Description": "Scudder Strategic Municiple Income Trust"
	}, {
		"Symbol": "KSS",
		"Description": "Kohls Corporation"
	}, {
		"Symbol": "KST",
		"Description": "Scudder Strategic Income Trust"
	}, {
		"Symbol": "KSU",
		"Description": "Kansas City Southern"
	}, {
		"Symbol": "KSU^",
		"Description": "Kansas City Southern"
	}, {
		"Symbol": "KT",
		"Description": "KT Corporation"
	}, {
		"Symbol": "KTCC",
		"Description": "Key Tronic Cp"
	}, {
		"Symbol": "KTEC",
		"Description": "Key Technology Inc"
	}, {
		"Symbol": "KTF",
		"Description": "Scudder Municiple Income Trust"
	}, {
		"Symbol": "KTH",
		"Description": "Lehman ABS Corporation"
	}, {
		"Symbol": "KTN",
		"Description": "Lehman ABS Corporation"
	}, {
		"Symbol": "KTOS",
		"Description": "Kratos Defns"
	}, {
		"Symbol": "KTOV",
		"Description": "Kitov Pharamceut Ads"
	}, {
		"Symbol": "KTOVW",
		"Description": "Kitov Pharamceuti Wt"
	}, {
		"Symbol": "KTP",
		"Description": "Lehman ABS Corporation"
	}, {
		"Symbol": "KTWO",
		"Description": "K2M Group Hldngs Cmn"
	}, {
		"Symbol": "KURA",
		"Description": "Kura Oncology Cmn"
	}, {
		"Symbol": "KVHI",
		"Description": "K V H Inds Inc"
	}, {
		"Symbol": "KW",
		"Description": "Kennedy-Wilson Holdings Inc."
	}, {
		"Symbol": "KWEB",
		"Description": "Kraneshs Csi Chn ETF"
	}, {
		"Symbol": "KWN",
		"Description": "Kennedy-Wilson Holdings Inc."
	}, {
		"Symbol": "KWR",
		"Description": "Quaker Chemical Corporation"
	}, {
		"Symbol": "KYE",
		"Description": "Kayne Anderson Energy Total Return Fund, Inc."
	}, {
		"Symbol": "KYN",
		"Description": "Kayne Anderson MLP Investment Company"
	}, {
		"Symbol": "KYN^F",
		"Description": "Kayne Anderson MLP Investment Company"
	}, {
		"Symbol": "KYO",
		"Description": "Kyocera Corporation"
	}, {
		"Symbol": "KZ",
		"Description": "Kongzhong Corp"
	}, {
		"Symbol": "L",
		"Description": "Loews Corporation"
	}, {
		"Symbol": "LABL",
		"Description": "Multi Color Cp"
	}, {
		"Symbol": "LAD",
		"Description": "Lithia Motors, Inc."
	}, {
		"Symbol": "LADR",
		"Description": "Ladder Capital Corp"
	}, {
		"Symbol": "LAKE",
		"Description": "Lakeland Inds Inc"
	}, {
		"Symbol": "LALT",
		"Description": "PS Multi-Strategy Alternative"
	}, {
		"Symbol": "LAMR",
		"Description": "Lamar Advertis A"
	}, {
		"Symbol": "LANC",
		"Description": "Lancaster Colony Cor"
	}, {
		"Symbol": "LAND",
		"Description": "Gladstone Land Corp"
	}, {
		"Symbol": "LANDP",
		"Description": "Gladstone Land Corp."
	}, {
		"Symbol": "LAQ",
		"Description": "Latin America Equity Fund, Inc. "
	}, {
		"Symbol": "LARK",
		"Description": "Landmark Bancorp Inc"
	}, {
		"Symbol": "LAUR",
		"Description": "Laureate Education Inc."
	}, {
		"Symbol": "LAWS",
		"Description": "Lawson Products In"
	}, {
		"Symbol": "LAYN",
		"Description": "Layne Christensen"
	}, {
		"Symbol": "LAZ",
		"Description": "Lazard Ltd."
	}, {
		"Symbol": "LB",
		"Description": "L Brands, Inc."
	}, {
		"Symbol": "LBAI",
		"Description": "Lakeland Bancorp Inc"
	}, {
		"Symbol": "LBF",
		"Description": "Scudder Global High Income Fund, Inc."
	}, {
		"Symbol": "LBIO",
		"Description": "Lion Biotechnologies"
	}, {
		"Symbol": "LBIX",
		"Description": "Leading Brands"
	}, {
		"Symbol": "LBRDA",
		"Description": "Liberty Broadbd A Cmn"
	}, {
		"Symbol": "LBRDK",
		"Description": "Liberty Broadbd C Cmn"
	}, {
		"Symbol": "LBTYA",
		"Description": "Liberty Global Ord A"
	}, {
		"Symbol": "LBTYB",
		"Description": "Liberty Global Ord B"
	}, {
		"Symbol": "LBTYK",
		"Description": "Liberty Global Ord C"
	}, {
		"Symbol": "LBY",
		"Description": "Libbey, Inc."
	}, {
		"Symbol": "LC",
		"Description": "LendingClub Corporation"
	}, {
		"Symbol": "LCA",
		"Description": "Landcadia Holdings Inc"
	}, {
		"Symbol": "LCAHU",
		"Description": "Landcadia Holding Un"
	}, {
		"Symbol": "LCAHW",
		"Description": "Landcadia Holdings Inc. Warrant"
	}, {
		"Symbol": "LCI",
		"Description": "Lannett Co Inc"
	}, {
		"Symbol": "LCII",
		"Description": "LCI Industries"
	}, {
		"Symbol": "LCM",
		"Description": "Advent/Claymore Enhanced Growth & Income Fund"
	}, {
		"Symbol": "LCNB",
		"Description": "Lcnb Corporation"
	}, {
		"Symbol": "LCUT",
		"Description": "Lifetime Brands Inc"
	}, {
		"Symbol": "LDF",
		"Description": "Latin American Discovery Fund, Inc. "
	}, {
		"Symbol": "LDL",
		"Description": "Lydall, Inc."
	}, {
		"Symbol": "LDOS",
		"Description": "Leidos Holdings, Inc."
	}, {
		"Symbol": "LDP",
		"Description": "Cohen & Steers Limited Duration Preferred and Income Fund, Inc"
	}, {
		"Symbol": "LDR",
		"Description": "Landauer, Inc."
	}, {
		"Symbol": "LDRI",
		"Description": "PS Ladderrite 0-5 Year Corporate Bond"
	}, {
		"Symbol": "LE",
		"Description": "Lands' End Inc Cmn"
	}, {
		"Symbol": "LEA",
		"Description": "Lear Corporation"
	}, {
		"Symbol": "LECO",
		"Description": "Lincoln Elec Hldg"
	}, {
		"Symbol": "LEDS",
		"Description": "Semileds Corporation"
	}, {
		"Symbol": "LEE",
		"Description": "Lee Enterprises, Incorporated"
	}, {
		"Symbol": "LEG",
		"Description": "Leggett & Platt, Incorporated"
	}, {
		"Symbol": "LEJU",
		"Description": "Leju Holdings Limited"
	}, {
		"Symbol": "LEN",
		"Description": "Lennar Corporation"
	}, {
		"Symbol": "LEN.B",
		"Description": "Lennar Corporation"
	}, {
		"Symbol": "LENS",
		"Description": "Presbia Plc Ord Shs"
	}, {
		"Symbol": "LEO",
		"Description": "Dreyfus Strategic Municipals, Inc."
	}, {
		"Symbol": "LEU",
		"Description": "Centrus Energy Corp."
	}, {
		"Symbol": "LEXEA",
		"Description": "Liberty Expedia Holdings Inc"
	}, {
		"Symbol": "LFC",
		"Description": "China Life Insurance Company Limited"
	}, {
		"Symbol": "LFGR",
		"Description": "Leaf Group Ltd."
	}, {
		"Symbol": "LFL",
		"Description": "LATAM Airlines Group S.A."
	}, {
		"Symbol": "LFUS",
		"Description": "Littelfuse Inc"
	}, {
		"Symbol": "LFVN",
		"Description": "Lifevantage Cp Cmn"
	}, {
		"Symbol": "LGCY",
		"Description": "Legacy Reserves LP"
	}, {
		"Symbol": "LGCYO",
		"Description": "Legacy Resrvs Sr B"
	}, {
		"Symbol": "LGCYP",
		"Description": "Legacy Resrvs Sr A"
	}, {
		"Symbol": "LGF.A",
		"Description": "Lions Gate Entertainment Corporation"
	}, {
		"Symbol": "LGF.B",
		"Description": "Lions Gate Entertainment Corporation"
	}, {
		"Symbol": "LGI",
		"Description": "Lazard Global Total Return and Income Fund"
	}, {
		"Symbol": "LGIH",
		"Description": "LGI Homes Inc"
	}, {
		"Symbol": "LGL",
		"Description": "LGL Group, Inc. "
	}, {
		"Symbol": "LGND",
		"Description": "Ligand Pharm Cmn"
	}, {
		"Symbol": "LH",
		"Description": "Laboratory Corporation of America Holdings"
	}, {
		"Symbol": "LHCG",
		"Description": "LHC Group Inc"
	}, {
		"Symbol": "LHO",
		"Description": "LaSalle Hotel Properties"
	}, {
		"Symbol": "LHO^H",
		"Description": "LaSalle Hotel Properties"
	}, {
		"Symbol": "LHO^I",
		"Description": "LaSalle Hotel Properties"
	}, {
		"Symbol": "LHO^J",
		"Description": "LaSalle Hotel Properties"
	}, {
		"Symbol": "LIFE",
		"Description": "Atyr Pharma Inc Cmn"
	}, {
		"Symbol": "LII",
		"Description": "Lennox International, Inc."
	}, {
		"Symbol": "LILA",
		"Description": "Liberty Lilac Cl A"
	}, {
		"Symbol": "LILAK",
		"Description": "Liberty Lilac Cl C"
	}, {
		"Symbol": "LINC",
		"Description": "Lincoln Educational"
	}, {
		"Symbol": "LIND",
		"Description": "Lindblad Expd Hld Cmn"
	}, {
		"Symbol": "LINDW",
		"Description": "Lindblad Expd Wt"
	}, {
		"Symbol": "LINK",
		"Description": "Interlink Elctrnc Cmn"
	}, {
		"Symbol": "LION",
		"Description": "Fidelity Southern Cp"
	}, {
		"Symbol": "LIOX",
		"Description": "Lionbridge Tech"
	}, {
		"Symbol": "LIQT",
		"Description": "LiqTech International, Inc."
	}, {
		"Symbol": "LITB",
		"Description": "LightInTheBox Holding Co., Ltd."
	}, {
		"Symbol": "LITE",
		"Description": "Lumentum Hld Cmn"
	}, {
		"Symbol": "LIVE",
		"Description": "Live Ventures Cmn"
	}, {
		"Symbol": "LIVN",
		"Description": "Livanova Plc Or Sh"
	}, {
		"Symbol": "LJPC",
		"Description": "La Jolla Pharma"
	}, {
		"Symbol": "LKFN",
		"Description": "Lakeland Finl Corp"
	}, {
		"Symbol": "LKOR",
		"Description": "Flxshrs Crsc Lg Corp"
	}, {
		"Symbol": "LKQ",
		"Description": "LKQ Corp"
	}, {
		"Symbol": "LKSD",
		"Description": "LSC Communications, Inc."
	}, {
		"Symbol": "LL",
		"Description": "Lumber Liquidators Holdings, Inc"
	}, {
		"Symbol": "LLIT",
		"Description": "Lianluo Smart Ltd"
	}, {
		"Symbol": "LLL",
		"Description": "L3 Technologies, Inc."
	}, {
		"Symbol": "LLNW",
		"Description": "Limelight Networks"
	}, {
		"Symbol": "LLTC",
		"Description": "Linear Technology"
	}, {
		"Symbol": "LLY",
		"Description": "Eli Lilly and Company"
	}, {
		"Symbol": "LM",
		"Description": "Legg Mason, Inc."
	}, {
		"Symbol": "LMAT",
		"Description": "Lemaitre Vascular"
	}, {
		"Symbol": "LMB",
		"Description": "Limbach Holdings Inc."
	}, {
		"Symbol": "LMBS",
		"Description": "First TR Low Opp ETF"
	}, {
		"Symbol": "LMCA",
		"Description": "Liberty Media CS A"
	}, {
		"Symbol": "LMCK",
		"Description": "Liberty Media CS C"
	}, {
		"Symbol": "LMFA",
		"Description": "Lm Funding Cmn"
	}, {
		"Symbol": "LMFAW",
		"Description": "Lm Funding Wt"
	}, {
		"Symbol": "LMHA",
		"Description": "Legg Mason, Inc."
	}, {
		"Symbol": "LMHB",
		"Description": "Legg Mason, Inc."
	}, {
		"Symbol": "LMIA",
		"Description": "LMI Aerospace Inc"
	}, {
		"Symbol": "LMNR",
		"Description": "Limoneira Co"
	}, {
		"Symbol": "LMNX",
		"Description": "Luminex Corporation"
	}, {
		"Symbol": "LMOS",
		"Description": "Lumos Networks Corp"
	}, {
		"Symbol": "LMRK",
		"Description": "Landmark Cmn Units"
	}, {
		"Symbol": "LMRKO",
		"Description": "Landmark Infrastructure Partners LP"
	}, {
		"Symbol": "LMRKP",
		"Description": "Landmark Inf Prf"
	}, {
		"Symbol": "LMT",
		"Description": "Lockheed Martin Corporation"
	}, {
		"Symbol": "LN",
		"Description": "LINE Corporation"
	}, {
		"Symbol": "LNC",
		"Description": "Lincoln National Corporation"
	}, {
		"Symbol": "LNC.WS",
		"Description": "Lincoln National Corporation"
	}, {
		"Symbol": "LNCE",
		"Description": "Snyders-Lance Inc"
	}, {
		"Symbol": "LND",
		"Description": "Brasilagro Cia Brasileira De Propriedades Agricolas"
	}, {
		"Symbol": "LNDC",
		"Description": "Landec Cp"
	}, {
		"Symbol": "LNG",
		"Description": "Cheniere Energy, Inc."
	}, {
		"Symbol": "LNGR",
		"Description": "Glbl X Lngvty Th Ett"
	}, {
		"Symbol": "LNN",
		"Description": "Lindsay Corporation"
	}, {
		"Symbol": "LNT",
		"Description": "Alliant Energy Corporation"
	}, {
		"Symbol": "LNTH",
		"Description": "Lantheus Holdings Cmn"
	}, {
		"Symbol": "LOAN",
		"Description": "Manhattan Bridge"
	}, {
		"Symbol": "LOB",
		"Description": "Live Oak Bancsh Cmn"
	}, {
		"Symbol": "LOCO",
		"Description": "El Pollo Loco Cmn"
	}, {
		"Symbol": "LODE",
		"Description": "Comstock Mining, Inc."
	}, {
		"Symbol": "LOGI",
		"Description": "Logitech Int Sa"
	}, {
		"Symbol": "LOGM",
		"Description": "Logmein Inc"
	}, {
		"Symbol": "LONE",
		"Description": "Lonestar Resources US Inc"
	}, {
		"Symbol": "LOPE",
		"Description": "Grand Canyon Educati"
	}, {
		"Symbol": "LOR",
		"Description": "Lazard World Dividend & Income Fund, Inc."
	}, {
		"Symbol": "LORL",
		"Description": "Loral Space Comm"
	}, {
		"Symbol": "LOV",
		"Description": "Spark Networks, Inc."
	}, {
		"Symbol": "LOW",
		"Description": "Lowes Companies, Inc."
	}, {
		"Symbol": "LOXO",
		"Description": "Loxo Oncology CS"
	}, {
		"Symbol": "LPCN",
		"Description": "Lipocine Inc Cmn"
	}, {
		"Symbol": "LPG",
		"Description": "Dorian LPG Ltd."
	}, {
		"Symbol": "LPI",
		"Description": "Laredo Petroleum, Inc."
	}, {
		"Symbol": "LPL",
		"Description": "LG Display Co., Ltd."
	}, {
		"Symbol": "LPLA",
		"Description": "Lpl Financial Hld Cmn"
	}, {
		"Symbol": "LPNT",
		"Description": "Lifepoint Health Cmn"
	}, {
		"Symbol": "LPSN",
		"Description": "Liveperson Inc"
	}, {
		"Symbol": "LPT",
		"Description": "Liberty Property Trust"
	}, {
		"Symbol": "LPTH",
		"Description": "Lightpath Tech Inc"
	}, {
		"Symbol": "LPTX",
		"Description": "Leap Therapeutics Inc."
	}, {
		"Symbol": "LPX",
		"Description": "Louisiana-Pacific Corporation"
	}, {
		"Symbol": "LQ",
		"Description": "La Quinta Holdings Inc."
	}, {
		"Symbol": "LQDT",
		"Description": "Liquidity Services"
	}, {
		"Symbol": "LRAD",
		"Description": "Lrad Corporation"
	}, {
		"Symbol": "LRCX",
		"Description": "Lam Research Corp"
	}, {
		"Symbol": "LRN",
		"Description": "K12 Inc"
	}, {
		"Symbol": "LSBG",
		"Description": "Lake Sunapee Bk Cmn"
	}, {
		"Symbol": "LSBK",
		"Description": "Lake Shore Bancorp"
	}, {
		"Symbol": "LSCC",
		"Description": "Lattice Semicond"
	}, {
		"Symbol": "LSI",
		"Description": "Life Storage, Inc."
	}, {
		"Symbol": "LSTR",
		"Description": "Landstar System"
	}, {
		"Symbol": "LSXMA",
		"Description": "Liberty Srs XM CS A"
	}, {
		"Symbol": "LSXMB",
		"Description": "Liberty Srs XM CS B"
	}, {
		"Symbol": "LSXMK",
		"Description": "Liberty Srs XM CS C"
	}, {
		"Symbol": "LTBR",
		"Description": "Lightbridge Corp"
	}, {
		"Symbol": "LTC",
		"Description": "LTC Properties, Inc."
	}, {
		"Symbol": "LTEA",
		"Description": "Long Island Iced Tea Corp"
	}, {
		"Symbol": "LTRPA",
		"Description": "Liberty Tripadv A Cmn"
	}, {
		"Symbol": "LTRX",
		"Description": "Lantronix Inc"
	}, {
		"Symbol": "LTS",
		"Description": "Ladenburg Thalmann Financial Services Inc"
	}, {
		"Symbol": "LTS^A",
		"Description": "Ladenburg Thalmann Financial Services Inc"
	}, {
		"Symbol": "LTXB",
		"Description": "Legacytexas Fnl Cmn"
	}, {
		"Symbol": "LUB",
		"Description": "Lubys, Inc."
	}, {
		"Symbol": "LUK",
		"Description": "Leucadia National Corporation"
	}, {
		"Symbol": "LULU",
		"Description": "Lululemon Athletica"
	}, {
		"Symbol": "LUNA",
		"Description": "Luna Innovations Inc"
	}, {
		"Symbol": "LUV",
		"Description": "Southwest Airlines Company"
	}, {
		"Symbol": "LUX",
		"Description": "Luxottica Group, S.p.A."
	}, {
		"Symbol": "LVHD",
		"Description": "Legg Mason Lv HD ETF"
	}, {
		"Symbol": "LVLT",
		"Description": "Level 3 Communications, Inc."
	}, {
		"Symbol": "LVNTA",
		"Description": "Liberty Vntrs Srs A"
	}, {
		"Symbol": "LVNTB",
		"Description": "Liberty Vntrs Srs B"
	}, {
		"Symbol": "LVS",
		"Description": "Las Vegas Sands Corp."
	}, {
		"Symbol": "LW",
		"Description": "Lamb Weston Holdings, Inc."
	}, {
		"Symbol": "LWAY",
		"Description": "Lifeway Foods Inc"
	}, {
		"Symbol": "LXFR",
		"Description": "Luxfer Holdings PLC"
	}, {
		"Symbol": "LXFT",
		"Description": "Luxoft Holding, Inc."
	}, {
		"Symbol": "LXP",
		"Description": "Lexington Realty Trust"
	}, {
		"Symbol": "LXP^C",
		"Description": "Lexington Realty Trust"
	}, {
		"Symbol": "LXRX",
		"Description": "Lexicon Pharmaceutcl"
	}, {
		"Symbol": "LXU",
		"Description": "Lsb Industries Inc."
	}, {
		"Symbol": "LYB",
		"Description": "LyondellBasell Industries NV"
	}, {
		"Symbol": "LYG",
		"Description": "Lloyds Banking Group Plc"
	}, {
		"Symbol": "LYTS",
		"Description": "L S I Industries I"
	}, {
		"Symbol": "LYV",
		"Description": "Live Nation Entertainment, Inc."
	}, {
		"Symbol": "LZB",
		"Description": "La-Z-Boy Incorporated"
	}, {
		"Symbol": "M",
		"Description": "Macys Inc"
	}, {
		"Symbol": "MA",
		"Description": "Mastercard Incorporated"
	}, {
		"Symbol": "MAA",
		"Description": "Mid-America Apartment Communities, Inc."
	}, {
		"Symbol": "MAA^I",
		"Description": "Mid-America Apartment Communities, Inc."
	}, {
		"Symbol": "MAB",
		"Description": "Eaton Vance Massachusetts Municipal Bond Fund"
	}, {
		"Symbol": "MAC",
		"Description": "Macerich Company "
	}, {
		"Symbol": "MACK",
		"Description": "Merrimack Pharmaceut"
	}, {
		"Symbol": "MACQ",
		"Description": "M I Acquisitions Inc"
	}, {
		"Symbol": "MACQU",
		"Description": "M I Acquisitions Inc. Un"
	}, {
		"Symbol": "MACQW",
		"Description": "M I Acquisitions Inc. Warrant"
	}, {
		"Symbol": "MAG",
		"Description": "MAG Silver Corporation"
	}, {
		"Symbol": "MAGS",
		"Description": "Magal Security Syst"
	}, {
		"Symbol": "MAIN",
		"Description": "Main Street Capital Corporation"
	}, {
		"Symbol": "MAMS",
		"Description": "Mam Software Gp Cmn"
	}, {
		"Symbol": "MAN",
		"Description": "ManpowerGroup"
	}, {
		"Symbol": "MANH",
		"Description": "Manhattan Assoc"
	}, {
		"Symbol": "MANT",
		"Description": "Mantech Intl Cp A"
	}, {
		"Symbol": "MANU",
		"Description": "Manchester United Ltd."
	}, {
		"Symbol": "MAR",
		"Description": "Marriot Int Class A"
	}, {
		"Symbol": "MARA",
		"Description": "Marathon Patent Grou"
	}, {
		"Symbol": "MARK",
		"Description": "Remark Media Cmn"
	}, {
		"Symbol": "MARPS",
		"Description": "Marine Petroleum U"
	}, {
		"Symbol": "MAS",
		"Description": "Masco Corporation"
	}, {
		"Symbol": "MASI",
		"Description": "Masimo Corporation"
	}, {
		"Symbol": "MAT",
		"Description": "Mattel Inc"
	}, {
		"Symbol": "MATR",
		"Description": "Mattersight Corp"
	}, {
		"Symbol": "MATW",
		"Description": "Matthews Intl Corp"
	}, {
		"Symbol": "MATX",
		"Description": "Matson, Inc."
	}, {
		"Symbol": "MAUI",
		"Description": "Advisrshs Mkt Adptve"
	}, {
		"Symbol": "MAV",
		"Description": "Pioneer Municipal High Income Advantage Trust"
	}, {
		"Symbol": "MAYS",
		"Description": "J W Mays Inc"
	}, {
		"Symbol": "MB",
		"Description": "Mindbody Cls A Cmn"
	}, {
		"Symbol": "MBCN",
		"Description": "Middlefield Banc Cmn"
	}, {
		"Symbol": "MBFI",
		"Description": "MB Financial Inc"
	}, {
		"Symbol": "MBFIP",
		"Description": "MB Financial Pd Sr A"
	}, {
		"Symbol": "MBI",
		"Description": "MBIA, Inc."
	}, {
		"Symbol": "MBII",
		"Description": "Marrone Bio Innov"
	}, {
		"Symbol": "MBLY",
		"Description": "Mobileye N.V."
	}, {
		"Symbol": "MBOT",
		"Description": "Microbot Medical Inc."
	}, {
		"Symbol": "MBRG",
		"Description": "Middleburg Finl Corp"
	}, {
		"Symbol": "MBRX",
		"Description": "Moleculin Biotech CS"
	}, {
		"Symbol": "MBSD",
		"Description": "Flexshares Dspln MBS"
	}, {
		"Symbol": "MBT",
		"Description": "Mobile TeleSystems OJSC"
	}, {
		"Symbol": "MBTF",
		"Description": "Mbt Financial Corp"
	}, {
		"Symbol": "MBUU",
		"Description": "Malibu Boats Cmn A"
	}, {
		"Symbol": "MBVT",
		"Description": "Merchants Bancshares"
	}, {
		"Symbol": "MBVX",
		"Description": "Mabvax Therapeutics Holdings Inc"
	}, {
		"Symbol": "MBWM",
		"Description": "Mercantile Bank Corp"
	}, {
		"Symbol": "MC",
		"Description": "Moelis & Company"
	}, {
		"Symbol": "MCA",
		"Description": "Blackrock MuniYield California Insured Fund, Inc."
	}, {
		"Symbol": "MCBC",
		"Description": "Macatawa Bank Corp"
	}, {
		"Symbol": "MCC",
		"Description": "Medley Capital Corporation"
	}, {
		"Symbol": "MCD",
		"Description": "McDonalds Corporation"
	}, {
		"Symbol": "MCEF",
		"Description": "First Trust Municipal CEF Income Opportunity ETF"
	}, {
		"Symbol": "MCEP",
		"Description": "Mid-Con Energy Partn"
	}, {
		"Symbol": "MCF",
		"Description": "Contango Oil & Gas Company"
	}, {
		"Symbol": "MCFT",
		"Description": "Mcbc Holdings Cmn"
	}, {
		"Symbol": "MCHI",
		"Description": "Ishares MSCI China ETF"
	}, {
		"Symbol": "MCHP",
		"Description": "Microchip Technology"
	}, {
		"Symbol": "MCHX",
		"Description": "Marchex Inc"
	}, {
		"Symbol": "MCI",
		"Description": "Barings Corporate Investors"
	}, {
		"Symbol": "MCK",
		"Description": "McKesson Corporation"
	}, {
		"Symbol": "MCN",
		"Description": "Madison Covered Call & Equity Strategy Fund"
	}, {
		"Symbol": "MCO",
		"Description": "Moodys Corporation"
	}, {
		"Symbol": "MCQ.CL",
		"Description": "Medley Capital Corporation"
	}, {
		"Symbol": "MCR",
		"Description": "MFS Charter Income Trust"
	}, {
		"Symbol": "MCRB",
		"Description": "Seres Theraptc Cmn"
	}, {
		"Symbol": "MCRI",
		"Description": "Monarch Casino"
	}, {
		"Symbol": "MCRN",
		"Description": "Milacron Holdings Corp."
	}, {
		"Symbol": "MCS",
		"Description": "Marcus Corporation "
	}, {
		"Symbol": "MCUR",
		"Description": "Macrocure Ltd. Or Sh"
	}, {
		"Symbol": "MCV",
		"Description": "Medley Capital Corporation"
	}, {
		"Symbol": "MCX",
		"Description": "Medley Capital Corporation"
	}, {
		"Symbol": "MCY",
		"Description": "Mercury General Corporation"
	}, {
		"Symbol": "MCZ",
		"Description": "Mad Catz Interactive Inc"
	}, {
		"Symbol": "MD",
		"Description": "Mednax, Inc"
	}, {
		"Symbol": "MDC",
		"Description": "M.D.C. Holdings, Inc."
	}, {
		"Symbol": "MDCA",
		"Description": "Mdc Partners Cl A"
	}, {
		"Symbol": "MDCO",
		"Description": "Medicines Co"
	}, {
		"Symbol": "MDGL",
		"Description": "Madrigal Pharmaceuticals Inc"
	}, {
		"Symbol": "MDGS",
		"Description": "Medigus Ltd Ads"
	}, {
		"Symbol": "MDIV",
		"Description": "First Trust Vi Mlti"
	}, {
		"Symbol": "MDLQ",
		"Description": "Medley LLC"
	}, {
		"Symbol": "MDLX",
		"Description": "Medley LLC"
	}, {
		"Symbol": "MDLY",
		"Description": "Medley Management Inc."
	}, {
		"Symbol": "MDLZ",
		"Description": "Mondelez Intl Cmn A"
	}, {
		"Symbol": "MDP",
		"Description": "Meredith Corporation"
	}, {
		"Symbol": "MDR",
		"Description": "McDermott International, Inc."
	}, {
		"Symbol": "MDRX",
		"Description": "Allscripts Hlthcare"
	}, {
		"Symbol": "MDSO",
		"Description": "Medidata Solutions"
	}, {
		"Symbol": "MDSY",
		"Description": "Modsys Int'l Ltd"
	}, {
		"Symbol": "MDT",
		"Description": "Medtronic plc"
	}, {
		"Symbol": "MDU",
		"Description": "MDU Resources Group, Inc."
	}, {
		"Symbol": "MDVX",
		"Description": "Medovex Corp. Cmn"
	}, {
		"Symbol": "MDVXW",
		"Description": "Medovex Cp Cl A Wt"
	}, {
		"Symbol": "MDWD",
		"Description": "Mediwound Ltd Ord Sh"
	}, {
		"Symbol": "MDXG",
		"Description": "Mimedx Group Inc"
	}, {
		"Symbol": "MED",
		"Description": "MEDIFAST INC"
	}, {
		"Symbol": "MEDP",
		"Description": "Medpace Holdings Inc. Common"
	}, {
		"Symbol": "MEET",
		"Description": "Meetme Inc"
	}, {
		"Symbol": "MEI",
		"Description": "Methode Electronics, Inc."
	}, {
		"Symbol": "MEIP",
		"Description": "Mei Pharma Inc Cmn"
	}, {
		"Symbol": "MELI",
		"Description": "Mercadolibre Inc"
	}, {
		"Symbol": "MELR",
		"Description": "Melrose Bancorp Cmn"
	}, {
		"Symbol": "MEMP",
		"Description": "Memorial Production"
	}, {
		"Symbol": "MEN",
		"Description": "Blackrock MuniEnhanced Fund, Inc."
	}, {
		"Symbol": "MENT",
		"Description": "Mentor Graphics"
	}, {
		"Symbol": "MEOH",
		"Description": "Methanex Cp"
	}, {
		"Symbol": "MEP",
		"Description": "Midcoast Energy Partners, L.P."
	}, {
		"Symbol": "MER^K",
		"Description": "Merrill Lynch & Co., Inc."
	}, {
		"Symbol": "MER^P",
		"Description": "Merrill Lynch & Co., Inc."
	}, {
		"Symbol": "MERC",
		"Description": "Mercer Intl Inc"
	}, {
		"Symbol": "MESO",
		"Description": "Mesoblast Ltd Ads"
	}, {
		"Symbol": "MET",
		"Description": "MetLife, Inc."
	}, {
		"Symbol": "MET^A",
		"Description": "MetLife, Inc."
	}, {
		"Symbol": "METC",
		"Description": "Ramaco Resources Inc."
	}, {
		"Symbol": "MFA",
		"Description": "MFA Financial, Inc."
	}, {
		"Symbol": "MFA^B",
		"Description": "MFA Financial, Inc."
	}, {
		"Symbol": "MFC",
		"Description": "Manulife Financial Corp"
	}, {
		"Symbol": "MFCB",
		"Description": "MFC Bancorp Ltd."
	}, {
		"Symbol": "MFD",
		"Description": "Macquarie/First Trust Global"
	}, {
		"Symbol": "MFG",
		"Description": "Mizuho Financial Group, Inc."
	}, {
		"Symbol": "MFIN",
		"Description": "Medallion Fin Cp"
	}, {
		"Symbol": "MFINL",
		"Description": "Medallion Fin Notes"
	}, {
		"Symbol": "MFL",
		"Description": "Blackrock MuniHoldings Investment Quality Fund"
	}, {
		"Symbol": "MFM",
		"Description": "MFS Municipal Income Trust"
	}, {
		"Symbol": "MFNC",
		"Description": "Mackinac Financial"
	}, {
		"Symbol": "MFO",
		"Description": "MFA Financial, Inc."
	}, {
		"Symbol": "MFRI",
		"Description": "M F R I Inc"
	}, {
		"Symbol": "MFS",
		"Description": "Manitowoc Food Service, Inc."
	}, {
		"Symbol": "MFSF",
		"Description": "Mutualfirst Finl Inc"
	}, {
		"Symbol": "MFT",
		"Description": "Blackrock MuniYield Investment QualityFund"
	}, {
		"Symbol": "MFV",
		"Description": "MFS Special Value Trust"
	}, {
		"Symbol": "MG",
		"Description": "Mistras Group Inc"
	}, {
		"Symbol": "MGA",
		"Description": "Magna International, Inc."
	}, {
		"Symbol": "MGCD",
		"Description": "Mgc Diagnostics Corp"
	}, {
		"Symbol": "MGEE",
		"Description": "Mge Energy Inc"
	}, {
		"Symbol": "MGF",
		"Description": "MFS Government Markets Income Trust"
	}, {
		"Symbol": "MGI",
		"Description": "Moneygram Intl Cmn"
	}, {
		"Symbol": "MGIC",
		"Description": "Magic Software Entpr"
	}, {
		"Symbol": "MGLN",
		"Description": "Magellan Health Cmn"
	}, {
		"Symbol": "MGM",
		"Description": "MGM Resorts International"
	}, {
		"Symbol": "MGNX",
		"Description": "Macrogenics Cmn"
	}, {
		"Symbol": "MGP",
		"Description": "MGM Growth Properties LLC"
	}, {
		"Symbol": "MGPI",
		"Description": "MGP Ingredients Inc"
	}, {
		"Symbol": "MGR",
		"Description": "Affiliated Managers Group, Inc."
	}, {
		"Symbol": "MGRC",
		"Description": "Mcgrath Rentcorp"
	}, {
		"Symbol": "MGU",
		"Description": "Macquarie Global Infrastructure Total Return Fund Inc."
	}, {
		"Symbol": "MGYR",
		"Description": "Magyar Bancorp Inc"
	}, {
		"Symbol": "MH^A",
		"Description": "Maiden Holdings, Ltd."
	}, {
		"Symbol": "MH^C",
		"Description": "Maiden Holdings, Ltd."
	}, {
		"Symbol": "MHD",
		"Description": "Blackrock MuniHoldings Fund, Inc."
	}, {
		"Symbol": "MHE",
		"Description": "BlackRock Massachusetts Tax-Exempt Trust"
	}, {
		"Symbol": "MHF",
		"Description": "Western Asset Municipal High Income Fund, Inc."
	}, {
		"Symbol": "MHG",
		"Description": "Marine Harvest ASA"
	}, {
		"Symbol": "MHH",
		"Description": "Mastech Digital, Inc"
	}, {
		"Symbol": "MHI",
		"Description": "Pioneer Municipal High Income Trust"
	}, {
		"Symbol": "MHK",
		"Description": "Mohawk Industries, Inc."
	}, {
		"Symbol": "MHLA",
		"Description": "Maiden Holdings, Ltd."
	}, {
		"Symbol": "MHLD",
		"Description": "Maiden Holdings Ltd"
	}, {
		"Symbol": "MHN",
		"Description": "Blackrock MuniHoldings New York Quality Fund, Inc."
	}, {
		"Symbol": "MHNB",
		"Description": "Maiden Holdings, Ltd."
	}, {
		"Symbol": "MHNC",
		"Description": "Maiden Holdings, Ltd."
	}, {
		"Symbol": "MHO",
		"Description": "M/I Homes, Inc."
	}, {
		"Symbol": "MHO^A",
		"Description": "M/I Homes, Inc."
	}, {
		"Symbol": "MIC",
		"Description": "Macquarie Infrastructure Company"
	}, {
		"Symbol": "MICT",
		"Description": "Micronet Enertec Tec"
	}, {
		"Symbol": "MICTW",
		"Description": "Micronet Enertec Wrt"
	}, {
		"Symbol": "MIDD",
		"Description": "Middleby Corp"
	}, {
		"Symbol": "MIE",
		"Description": "Cohen & Steers MLP Income and Energy Opportunity Fund, Inc."
	}, {
		"Symbol": "MIII",
		"Description": "M III Acquisition Corp"
	}, {
		"Symbol": "MIIIU",
		"Description": "M III Acquisition"
	}, {
		"Symbol": "MIIIW",
		"Description": "M III Acquisition Corp. Wt"
	}, {
		"Symbol": "MIK",
		"Description": " Michaels Comp Cmn"
	}, {
		"Symbol": "MILN",
		"Description": "Glbl X Mlnls Thm ETF"
	}, {
		"Symbol": "MIME",
		"Description": "Mimecast Limited Ord"
	}, {
		"Symbol": "MIN",
		"Description": "MFS Intermediate Income Trust"
	}, {
		"Symbol": "MIND",
		"Description": "Mitcham Inds Inc"
	}, {
		"Symbol": "MINDP",
		"Description": "Mitcham Industries Inc"
	}, {
		"Symbol": "MINI",
		"Description": "Mobile Mini Inc"
	}, {
		"Symbol": "MIRN",
		"Description": "Mirna Therap Cmn Stk"
	}, {
		"Symbol": "MITK",
		"Description": "Mitek Systems Inc"
	}, {
		"Symbol": "MITL",
		"Description": "Mitel Networks Corp"
	}, {
		"Symbol": "MITT",
		"Description": "AG Mortgage Investment Trust, Inc."
	}, {
		"Symbol": "MITT^A",
		"Description": "AG Mortgage Investment Trust, Inc."
	}, {
		"Symbol": "MITT^B",
		"Description": "AG Mortgage Investment Trust, Inc."
	}, {
		"Symbol": "MIW",
		"Description": "Eaton Vance Michigan Municipal Bond Fund"
	}, {
		"Symbol": "MIXT",
		"Description": "MiX Telematics Limited"
	}, {
		"Symbol": "MIY",
		"Description": "Blackrock MuniYield Michigan Quality Fund, Inc."
	}, {
		"Symbol": "MJCO",
		"Description": "Majesco"
	}, {
		"Symbol": "MJN",
		"Description": "Mead Johnson Nutrition Company"
	}, {
		"Symbol": "MKC",
		"Description": "McCormick & Company, Incorporated"
	}, {
		"Symbol": "MKC.V",
		"Description": "McCormick & Company, Incorporated"
	}, {
		"Symbol": "MKL",
		"Description": "Markel Corporation"
	}, {
		"Symbol": "MKSI",
		"Description": "Mks Instruments Inc"
	}, {
		"Symbol": "MKTX",
		"Description": "Marketaxess Holdings"
	}, {
		"Symbol": "MLAB",
		"Description": "Mesa Labs Inc"
	}, {
		"Symbol": "MLHR",
		"Description": "Miller Herman Inc"
	}, {
		"Symbol": "MLI",
		"Description": "Mueller Industries, Inc."
	}, {
		"Symbol": "MLM",
		"Description": "Martin Marietta Materials, Inc."
	}, {
		"Symbol": "MLNK",
		"Description": "Moduslink Global Cmn"
	}, {
		"Symbol": "MLNX",
		"Description": "Mellanox Technologie"
	}, {
		"Symbol": "MLP",
		"Description": "Maui Land & Pineapple Company, Inc."
	}, {
		"Symbol": "MLR",
		"Description": "Miller Industries, Inc."
	}, {
		"Symbol": "MLSS",
		"Description": "Milestone Scientific, Inc."
	}, {
		"Symbol": "MLVF",
		"Description": "Malvern Bncp Cmn Stk"
	}, {
		"Symbol": "MMAC",
		"Description": "Mma Capital Mngt Cmn"
	}, {
		"Symbol": "MMC",
		"Description": "Marsh & McLennan Companies, Inc."
	}, {
		"Symbol": "MMD",
		"Description": "MainStay DefinedTerm Municipal Opportunities Fund"
	}, {
		"Symbol": "MMI",
		"Description": "Marcus & Millichap, Inc."
	}, {
		"Symbol": "MMLP",
		"Description": "Martin Midstrm LP"
	}, {
		"Symbol": "MMM",
		"Description": "3M Company"
	}, {
		"Symbol": "MMP",
		"Description": "Magellan Midstream Partners L.P."
	}, {
		"Symbol": "MMS",
		"Description": "Maximus, Inc."
	}, {
		"Symbol": "MMSI",
		"Description": "Merit Medical Sys"
	}, {
		"Symbol": "MMT",
		"Description": "MFS Multimarket Income Trust"
	}, {
		"Symbol": "MMU",
		"Description": "Western Asset Managed Municipals Fund, Inc."
	}, {
		"Symbol": "MMV",
		"Description": "Eaton Vance Massachusetts Municipal Income Trust"
	}, {
		"Symbol": "MMYT",
		"Description": "Makemytrip Limited"
	}, {
		"Symbol": "MN",
		"Description": "Manning & Napier, Inc."
	}, {
		"Symbol": "MNDO",
		"Description": "Mind C.T.I. Ltd"
	}, {
		"Symbol": "MNE",
		"Description": "Blackrock Muni New York Intermediate Duration Fund Inc"
	}, {
		"Symbol": "MNGA",
		"Description": "Magnegas Corporation"
	}, {
		"Symbol": "MNI",
		"Description": "McClatchy Company "
	}, {
		"Symbol": "MNK",
		"Description": "Mallinckrodt plc"
	}, {
		"Symbol": "MNKD",
		"Description": "Mannkind Corporation"
	}, {
		"Symbol": "MNOV",
		"Description": "Medicinova Inc"
	}, {
		"Symbol": "MNP",
		"Description": "Western Asset Municipal Partners Fund, Inc."
	}, {
		"Symbol": "MNR",
		"Description": "Monmouth Real Estate Investment Corporation"
	}, {
		"Symbol": "MNR^B",
		"Description": "Monmouth Real Estate Investment Corporation"
	}, {
		"Symbol": "MNR^C",
		"Description": "Monmouth Real Estate Investment Corporation"
	}, {
		"Symbol": "MNRO",
		"Description": "Monro Muffler Brak"
	}, {
		"Symbol": "MNST",
		"Description": "Monster Beverage Cp"
	}, {
		"Symbol": "MNTA",
		"Description": "Momenta Pharma"
	}, {
		"Symbol": "MNTX",
		"Description": "Manitex Intl Inc"
	}, {
		"Symbol": "MO",
		"Description": "Altria Group"
	}, {
		"Symbol": "MOBL",
		"Description": "Mobileiron Inc Cmn"
	}, {
		"Symbol": "MOC",
		"Description": "Command Security Corporation"
	}, {
		"Symbol": "MOCO",
		"Description": "Mocon Inc"
	}, {
		"Symbol": "MOD",
		"Description": "Modine Manufacturing Company"
	}, {
		"Symbol": "MODN",
		"Description": "Model N, Inc."
	}, {
		"Symbol": "MOFG",
		"Description": "Midwestone Fnl Gp"
	}, {
		"Symbol": "MOG.A",
		"Description": "Moog Inc."
	}, {
		"Symbol": "MOG.B",
		"Description": "Moog Inc."
	}, {
		"Symbol": "MOGLC",
		"Description": "Gabelli Media Mogul Nextshares"
	}, {
		"Symbol": "MOH",
		"Description": "Molina Healthcare Inc"
	}, {
		"Symbol": "MOMO",
		"Description": "Momo Inc Ads"
	}, {
		"Symbol": "MON",
		"Description": "Monsanto Company"
	}, {
		"Symbol": "MORE",
		"Description": "Monogram Residential Trust, Inc."
	}, {
		"Symbol": "MORN",
		"Description": "Morningstar Inc"
	}, {
		"Symbol": "MOS",
		"Description": "Mosaic Company "
	}, {
		"Symbol": "MOSY",
		"Description": "Mosys Inc"
	}, {
		"Symbol": "MOV",
		"Description": "Movado Group Inc."
	}, {
		"Symbol": "MOXC",
		"Description": "Moxian Inc."
	}, {
		"Symbol": "MP^D",
		"Description": "Mississippi Power Company"
	}, {
		"Symbol": "MPA",
		"Description": "Blackrock MuniYield Pennsylvania Quality Fund"
	}, {
		"Symbol": "MPAA",
		"Description": "Motorcar Parts Amer"
	}, {
		"Symbol": "MPB",
		"Description": "Mid Penn Bancorp Inc"
	}, {
		"Symbol": "MPC",
		"Description": "Marathon Petroleum Corporation"
	}, {
		"Symbol": "MPCT",
		"Description": "Ishrs Su MSCI Glb Im"
	}, {
		"Symbol": "MPEL",
		"Description": "Melco Crown Entm Ads"
	}, {
		"Symbol": "MPET",
		"Description": "Magellan Petroleum"
	}, {
		"Symbol": "MPG",
		"Description": "Metaldyne Performance Group Inc."
	}, {
		"Symbol": "MPLX",
		"Description": "MPLX LP"
	}, {
		"Symbol": "MPO",
		"Description": "MIDSTATES PETROLEUM COMPANY, INC."
	}, {
		"Symbol": "MPSX",
		"Description": "Multi Packaging Solutions International Limited"
	}, {
		"Symbol": "MPV",
		"Description": "Barings Participation Investors"
	}, {
		"Symbol": "MPVD",
		"Description": "Mountain Prv Dmds"
	}, {
		"Symbol": "MPW",
		"Description": "Medical Properties Trust, Inc."
	}, {
		"Symbol": "MPWR",
		"Description": "Monolithic Power Sys"
	}, {
		"Symbol": "MPX",
		"Description": "Marine Products Corporation"
	}, {
		"Symbol": "MQT",
		"Description": "Blackrock MuniYield Quality Fund II, Inc."
	}, {
		"Symbol": "MQY",
		"Description": "Blackrock MuniYield Quality Fund, Inc."
	}, {
		"Symbol": "MRAM",
		"Description": "Everspin Technologies Inc"
	}, {
		"Symbol": "MRC",
		"Description": "MRC Global Inc."
	}, {
		"Symbol": "MRCC",
		"Description": "Monroe Capital Corpo"
	}, {
		"Symbol": "MRCY",
		"Description": "Mercury Sys Inc"
	}, {
		"Symbol": "MRDN",
		"Description": "Meridian Waste Solutions Inc"
	}, {
		"Symbol": "MRDNW",
		"Description": "Meridian Waste Solutions Inc Warrants"
	}, {
		"Symbol": "MRIN",
		"Description": "Marin Software Incorporated"
	}, {
		"Symbol": "MRK",
		"Description": "Merck & Company, Inc."
	}, {
		"Symbol": "MRLN",
		"Description": "Marlin Business Serv"
	}, {
		"Symbol": "MRNS",
		"Description": "Marinus Pharma CS"
	}, {
		"Symbol": "MRO",
		"Description": "Marathon Oil Corporation"
	}, {
		"Symbol": "MRT",
		"Description": "MedEquities Realty Trust, Inc."
	}, {
		"Symbol": "MRTN",
		"Description": "Marten Transport L"
	}, {
		"Symbol": "MRTX",
		"Description": "Mirati Therapeutics"
	}, {
		"Symbol": "MRUS",
		"Description": "Merus N.V. CS"
	}, {
		"Symbol": "MRVC",
		"Description": "Mrv Communictns Cmn"
	}, {
		"Symbol": "MRVL",
		"Description": "Marvell Tech Group"
	}, {
		"Symbol": "MS",
		"Description": "Morgan Stanley"
	}, {
		"Symbol": "MS^A",
		"Description": "Morgan Stanley"
	}, {
		"Symbol": "MS^E",
		"Description": "Morgan Stanley"
	}, {
		"Symbol": "MS^F",
		"Description": "Morgan Stanley"
	}, {
		"Symbol": "MS^G",
		"Description": "Morgan Stanley"
	}, {
		"Symbol": "MS^I",
		"Description": "Morgan Stanley"
	}, {
		"Symbol": "MS^K",
		"Description": "Morgan Stanley"
	}, {
		"Symbol": "MSA",
		"Description": "MSA Safety Incorporporated"
	}, {
		"Symbol": "MSB",
		"Description": "Mesabi Trust"
	}, {
		"Symbol": "MSBF",
		"Description": "MSB Financial Cmn"
	}, {
		"Symbol": "MSBI",
		"Description": "Midland Sts BNC Cmn"
	}, {
		"Symbol": "MSCA",
		"Description": "Main Street Capital Corporation"
	}, {
		"Symbol": "MSCC",
		"Description": "Microsemi Corp"
	}, {
		"Symbol": "MSCI",
		"Description": "MSCI Inc"
	}, {
		"Symbol": "MSD",
		"Description": "Morgan Stanley Emerging Markets Debt Fund, Inc."
	}, {
		"Symbol": "MSDI",
		"Description": "Monster Digital Inc"
	}, {
		"Symbol": "MSDIW",
		"Description": "Monster Digital [Warrants]"
	}, {
		"Symbol": "MSEX",
		"Description": "Middlesex Water Co"
	}, {
		"Symbol": "MSF",
		"Description": "Morgan Stanley Emerging Markets Fund, Inc."
	}, {
		"Symbol": "MSFG",
		"Description": "Mainsource Finl Grp"
	}, {
		"Symbol": "MSFT",
		"Description": "Microsoft Corp"
	}, {
		"Symbol": "MSG",
		"Description": "MSG Networks Inc."
	}, {
		"Symbol": "MSGN",
		"Description": "MSG Networks Inc."
	}, {
		"Symbol": "MSI",
		"Description": "Motorola Solutions, Inc."
	}, {
		"Symbol": "MSL",
		"Description": "MidSouth Bancorp"
	}, {
		"Symbol": "MSLI",
		"Description": "Merus Labs Intl Inc"
	}, {
		"Symbol": "MSM",
		"Description": "MSC Industrial Direct Company, Inc."
	}, {
		"Symbol": "MSN",
		"Description": "Emerson Radio Corporation"
	}, {
		"Symbol": "MSON",
		"Description": "Misonix Inc"
	}, {
		"Symbol": "MSP",
		"Description": "Madison Strategic Sector Premium Fund"
	}, {
		"Symbol": "MSTR",
		"Description": "Microstrategy Cl A"
	}, {
		"Symbol": "MSTX",
		"Description": "Mast Therapeutics, Inc."
	}, {
		"Symbol": "MT",
		"Description": "ArcelorMittal"
	}, {
		"Symbol": "MTB",
		"Description": "M&T Bank Corporation"
	}, {
		"Symbol": "MTB.WS",
		"Description": "M&T Bank Corporation"
	}, {
		"Symbol": "MTB^",
		"Description": "M&T Bank Corporation"
	}, {
		"Symbol": "MTB^C",
		"Description": "M&T Bank Corporation"
	}, {
		"Symbol": "MTBC",
		"Description": "Medical Transc Bl Cmn"
	}, {
		"Symbol": "MTBCP",
		"Description": "Mtbc 11% Sr A Prf ST"
	}, {
		"Symbol": "MTCH",
		"Description": "Match Group Inc CS"
	}, {
		"Symbol": "MTD",
		"Description": "Mettler-Toledo International, Inc."
	}, {
		"Symbol": "MTDR",
		"Description": "Matador Resources Company"
	}, {
		"Symbol": "MTEX",
		"Description": "Mannatech Inc"
	}, {
		"Symbol": "MTFB",
		"Description": "Motif Bio Plc"
	}, {
		"Symbol": "MTFBW",
		"Description": "Motif Bio Plc Warrants To Purchase Adrs"
	}, {
		"Symbol": "MTG",
		"Description": "MGIC Investment Corporation"
	}, {
		"Symbol": "MTGE",
		"Description": "American Cap Mtg Inv"
	}, {
		"Symbol": "MTGEP",
		"Description": "Amrcn Cap Mt Sr A PS"
	}, {
		"Symbol": "MTH",
		"Description": "Meritage Corporation"
	}, {
		"Symbol": "MTL",
		"Description": "Mechel PAO"
	}, {
		"Symbol": "MTL^",
		"Description": "Mechel PAO"
	}, {
		"Symbol": "MTLS",
		"Description": "Materialise Nv Ads"
	}, {
		"Symbol": "MTN",
		"Description": "Vail Resorts, Inc."
	}, {
		"Symbol": "MTOR",
		"Description": "Meritor, Inc."
	}, {
		"Symbol": "MTP",
		"Description": "Midatech Pharma Ads"
	}, {
		"Symbol": "MTR",
		"Description": "Mesa Royalty Trust"
	}, {
		"Symbol": "MTRN",
		"Description": "Materion Corporation"
	}, {
		"Symbol": "MTRX",
		"Description": "Matrix Service Co"
	}, {
		"Symbol": "MTSC",
		"Description": "M T S Systems Cp"
	}, {
		"Symbol": "MTSI",
		"Description": "Macom Technology S"
	}, {
		"Symbol": "MTSL",
		"Description": "M E R Tlmgt Sol"
	}, {
		"Symbol": "MTT",
		"Description": "Western Asset Municipal Defined Opportunity Trust Inc"
	}, {
		"Symbol": "MTU",
		"Description": "Mitsubishi UFJ Financial Group Inc"
	}, {
		"Symbol": "MTW",
		"Description": "Manitowoc Company, Inc. "
	}, {
		"Symbol": "MTX",
		"Description": "Minerals Technologies Inc."
	}, {
		"Symbol": "MTZ",
		"Description": "MasTec, Inc."
	}, {
		"Symbol": "MU",
		"Description": "Micron Technology"
	}, {
		"Symbol": "MUA",
		"Description": "Blackrock MuniAssets Fund, Inc."
	}, {
		"Symbol": "MUC",
		"Description": "Blackrock MuniHoldings California Quality Fund,  Inc."
	}, {
		"Symbol": "MUE",
		"Description": "Blackrock MuniHoldings Quality Fund II, Inc."
	}, {
		"Symbol": "MUH",
		"Description": "Blackrock MuniHoldings Fund II, Inc."
	}, {
		"Symbol": "MUI",
		"Description": "Blackrock Muni Intermediate Duration Fund Inc"
	}, {
		"Symbol": "MUJ",
		"Description": "Blackrock MuniHoldings New Jersey Insured Fund, Inc."
	}, {
		"Symbol": "MUR",
		"Description": "Murphy Oil Corporation"
	}, {
		"Symbol": "MUS",
		"Description": "Blackrock MuniHoldings Quality Fund, Inc."
	}, {
		"Symbol": "MUSA",
		"Description": "Murphy USA Inc."
	}, {
		"Symbol": "MUX",
		"Description": "McEwen Mining Inc."
	}, {
		"Symbol": "MVC",
		"Description": "MVC Capital, Inc."
	}, {
		"Symbol": "MVCB",
		"Description": "MVC Capital, Inc."
	}, {
		"Symbol": "MVF",
		"Description": "MuniVest Fund, Inc."
	}, {
		"Symbol": "MVIS",
		"Description": "Microvision"
	}, {
		"Symbol": "MVO",
		"Description": "MV Oil Trust"
	}, {
		"Symbol": "MVT",
		"Description": "Blackrock MuniVest Fund II, Inc."
	}, {
		"Symbol": "MWA",
		"Description": "MUELLER WATER PRODUCTS"
	}, {
		"Symbol": "MX",
		"Description": "MagnaChip Semiconductor Corporation"
	}, {
		"Symbol": "MXC",
		"Description": "Mexco Energy Corporation"
	}, {
		"Symbol": "MXE",
		"Description": "Mexico Equity and Income Fund, Inc. "
	}, {
		"Symbol": "MXF",
		"Description": "Mexico Fund, Inc. "
	}, {
		"Symbol": "MXIM",
		"Description": "Maxim Integrated"
	}, {
		"Symbol": "MXL",
		"Description": "MaxLinear, Inc"
	}, {
		"Symbol": "MXPT",
		"Description": "Maxpoint Intrctv Cmn"
	}, {
		"Symbol": "MXWL",
		"Description": "Maxwell Technologies"
	}, {
		"Symbol": "MYC",
		"Description": "Blackrock MuniYield California Fund, Inc."
	}, {
		"Symbol": "MYCC",
		"Description": "ClubCorp Holdings, Inc."
	}, {
		"Symbol": "MYD",
		"Description": "Blackrock MuniYield Fund, Inc."
	}, {
		"Symbol": "MYE",
		"Description": "Myers Industries, Inc."
	}, {
		"Symbol": "MYF",
		"Description": "Blackrock MuniYield Investment Fund"
	}, {
		"Symbol": "MYGN",
		"Description": "Myriad Genetics Inc"
	}, {
		"Symbol": "MYI",
		"Description": "Blackrock MuniYield Quality Fund III, Inc."
	}, {
		"Symbol": "MYJ",
		"Description": "Blackrock MuniYield New Jersey Fund, Inc."
	}, {
		"Symbol": "MYL",
		"Description": "Mylan Nv Ord Shs"
	}, {
		"Symbol": "MYN",
		"Description": "Blackrock MuniYield New York Quality Fund, Inc."
	}, {
		"Symbol": "MYOK",
		"Description": "Myokardia Inc Cm ST"
	}, {
		"Symbol": "MYOS",
		"Description": "Myos Rens Tech Cmn"
	}, {
		"Symbol": "MYOV",
		"Description": "Myovant Sciences Ltd."
	}, {
		"Symbol": "MYRG",
		"Description": "Myr Group Inc"
	}, {
		"Symbol": "MYSZ",
		"Description": "My Size Inc Cmn"
	}, {
		"Symbol": "MZA",
		"Description": "MuniYield Arizona Fund, Inc."
	}, {
		"Symbol": "MZF",
		"Description": "Managed Duration Investment Grade Municipal Fund"
	}, {
		"Symbol": "MZOR",
		"Description": "Mazor Robotics Ads"
	}, {
		"Symbol": "NAC",
		"Description": "Nuveen California Quality Municipal Income Fund"
	}, {
		"Symbol": "NAD",
		"Description": "Nuveen Quality Municipal Income Fund"
	}, {
		"Symbol": "NADL",
		"Description": "North Atlantic Drilling Ltd."
	}, {
		"Symbol": "NAII",
		"Description": "Natural Alternativ"
	}, {
		"Symbol": "NAK",
		"Description": "Northern Dynasty Minerals, Ltd."
	}, {
		"Symbol": "NAKD",
		"Description": "Naked Brand Group CS"
	}, {
		"Symbol": "NAME",
		"Description": "Rightside Group Cmn"
	}, {
		"Symbol": "NAN",
		"Description": "Nuveen New York Quality Municipal Income Fund"
	}, {
		"Symbol": "NANO",
		"Description": "Nanometrics Inc"
	}, {
		"Symbol": "NAO",
		"Description": "Nordic American Offshore Ltd"
	}, {
		"Symbol": "NAP",
		"Description": "Navios Maritime Midstream Partners LP"
	}, {
		"Symbol": "NAT",
		"Description": "Nordic American Tankers Limited"
	}, {
		"Symbol": "NATH",
		"Description": "Nathan's Famous In"
	}, {
		"Symbol": "NATI",
		"Description": "Natl Instruments Cor"
	}, {
		"Symbol": "NATR",
		"Description": "Nature S Sunshine"
	}, {
		"Symbol": "NAUH",
		"Description": "National American Un"
	}, {
		"Symbol": "NAV",
		"Description": "Navistar International Corporation"
	}, {
		"Symbol": "NAV^D",
		"Description": "Navistar International Corporation"
	}, {
		"Symbol": "NAVB",
		"Description": "Navidea Biopharmaceuticals, Inc."
	}, {
		"Symbol": "NAVG",
		"Description": "Navigators Grp Inc"
	}, {
		"Symbol": "NAVI",
		"Description": "Navient Cp Cmn"
	}, {
		"Symbol": "NAZ",
		"Description": "Nuveen Arizona Quality Municipal Income Fund"
	}, {
		"Symbol": "NBB",
		"Description": "Nuveen Build America Bond Fund"
	}, {
		"Symbol": "NBD",
		"Description": "Nuveen Build America Bond Opportunity Fund"
	}, {
		"Symbol": "NBH",
		"Description": "Neuberger Berman Intermediate Municipal Fund Inc."
	}, {
		"Symbol": "NBHC",
		"Description": "National Bank Holdings Corporation"
	}, {
		"Symbol": "NBIX",
		"Description": "Neurocrine Bioscienc"
	}, {
		"Symbol": "NBL",
		"Description": "Noble Energy Inc."
	}, {
		"Symbol": "NBLX",
		"Description": "Noble Midstream Partners LP"
	}, {
		"Symbol": "NBN",
		"Description": "Northeast Bncp"
	}, {
		"Symbol": "NBO",
		"Description": "Neuberger Berman New York Intermediate Municipal Fund Inc."
	}, {
		"Symbol": "NBR",
		"Description": "Nabors Industries Ltd."
	}, {
		"Symbol": "NBRV",
		"Description": "Nabriva Therape Ads"
	}, {
		"Symbol": "NBTB",
		"Description": "NBT Bancorp Inc"
	}, {
		"Symbol": "NBW",
		"Description": "Neuberger Berman California Intermediate Municipal Fund Inc."
	}, {
		"Symbol": "NBY",
		"Description": "NovaBay Pharmaceuticals, Inc."
	}, {
		"Symbol": "NC",
		"Description": "NACCO Industries, Inc."
	}, {
		"Symbol": "NCA",
		"Description": "Nuveen California Municipal Value Fund, Inc."
	}, {
		"Symbol": "NCB",
		"Description": "Nuveen California Municipal Value Fund 2"
	}, {
		"Symbol": "NCBS",
		"Description": "Nicolet Bnkshr Cmn"
	}, {
		"Symbol": "NCI",
		"Description": "Navigant Consulting, Inc."
	}, {
		"Symbol": "NCIT",
		"Description": "NCI Inc"
	}, {
		"Symbol": "NCLH",
		"Description": "Norwegian Cruise Ord"
	}, {
		"Symbol": "NCMI",
		"Description": "National Cinemedia"
	}, {
		"Symbol": "NCOM",
		"Description": "National Commerce Cmn"
	}, {
		"Symbol": "NCR",
		"Description": "NCR Corporation"
	}, {
		"Symbol": "NCS",
		"Description": "NCI Building Systems, Inc."
	}, {
		"Symbol": "NCTY",
		"Description": "The9 Limited"
	}, {
		"Symbol": "NCV",
		"Description": "AllianzGI Convertible & Income Fund"
	}, {
		"Symbol": "NCZ",
		"Description": "AllianzGI Convertible & Income Fund II"
	}, {
		"Symbol": "NDAQ",
		"Description": "Nasdaq Inc Cmn Stk"
	}, {
		"Symbol": "NDLS",
		"Description": "Noodles & Co Cla Cmn"
	}, {
		"Symbol": "NDP",
		"Description": "Tortoise Energy Independence Fund, Inc."
	}, {
		"Symbol": "NDRM",
		"Description": "Neuroderm Ltd Ord Sh"
	}, {
		"Symbol": "NDRO",
		"Description": "Enduro Royalty Trust"
	}, {
		"Symbol": "NDSN",
		"Description": "Nordson Corporation"
	}, {
		"Symbol": "NE",
		"Description": "Noble Corporation"
	}, {
		"Symbol": "NEA",
		"Description": "Nuveen AMT-Free Quality Municipal Income Fund"
	}, {
		"Symbol": "NEE",
		"Description": "NextEra Energy, Inc."
	}, {
		"Symbol": "NEE^C",
		"Description": "NextEra Energy, Inc."
	}, {
		"Symbol": "NEE^G",
		"Description": "NextEra Energy, Inc."
	}, {
		"Symbol": "NEE^H",
		"Description": "NextEra Energy, Inc."
	}, {
		"Symbol": "NEE^I",
		"Description": "NextEra Energy, Inc."
	}, {
		"Symbol": "NEE^J",
		"Description": "NextEra Energy, Inc."
	}, {
		"Symbol": "NEE^K",
		"Description": "NextEra Energy, Inc."
	}, {
		"Symbol": "NEE^Q",
		"Description": "NextEra Energy, Inc."
	}, {
		"Symbol": "NEE^R",
		"Description": "NextEra Energy, Inc."
	}, {
		"Symbol": "NEFF",
		"Description": "Neff Corporation"
	}, {
		"Symbol": "NEM",
		"Description": "Newmont Mining Corporation"
	}, {
		"Symbol": "NEN",
		"Description": "New England Realty Associates Limited Partnership"
	}, {
		"Symbol": "NEO",
		"Description": "Neogenomics Inc"
	}, {
		"Symbol": "NEOG",
		"Description": "Neogen Cp"
	}, {
		"Symbol": "NEON",
		"Description": "Neonode Inc"
	}, {
		"Symbol": "NEOS",
		"Description": "Neos Therapeutics Cmn"
	}, {
		"Symbol": "NEOT",
		"Description": "Neothetics Cmn"
	}, {
		"Symbol": "NEP",
		"Description": "NextEra Energy Partners, LP"
	}, {
		"Symbol": "NEPT",
		"Description": "Neptune Tech"
	}, {
		"Symbol": "NERV",
		"Description": "Minerva Neuroscie Cmn"
	}, {
		"Symbol": "NETE",
		"Description": "Net Element Inc"
	}, {
		"Symbol": "NEU",
		"Description": "NewMarket Corporation"
	}, {
		"Symbol": "NEV",
		"Description": "Nuveen Enhanced Municipal Value Fund"
	}, {
		"Symbol": "NEWM",
		"Description": "New Media Investment Group Inc."
	}, {
		"Symbol": "NEWR",
		"Description": "New Relic, Inc."
	}, {
		"Symbol": "NEWS",
		"Description": "Newstar Financial"
	}, {
		"Symbol": "NEWT",
		"Description": "Newtek Bus Svcs Cmn"
	}, {
		"Symbol": "NEWTL",
		"Description": "Newtek Business 7%Nt"
	}, {
		"Symbol": "NEWTZ",
		"Description": "Newtek 7.5% NTS 2022"
	}, {
		"Symbol": "NFBK",
		"Description": "Northfield Bncrp Del"
	}, {
		"Symbol": "NFEC",
		"Description": "NF Energy Saving Cor"
	}, {
		"Symbol": "NFG",
		"Description": "National Fuel Gas Company"
	}, {
		"Symbol": "NFJ",
		"Description": "AllianzGI NFJ Dividend, Interest & Premium Strategy Fund"
	}, {
		"Symbol": "NFLX",
		"Description": "Netflix Inc"
	}, {
		"Symbol": "NFX",
		"Description": "Newfield Exploration Company"
	}, {
		"Symbol": "NG",
		"Description": "Novagold Resources Inc."
	}, {
		"Symbol": "NGD",
		"Description": "New Gold Inc."
	}, {
		"Symbol": "NGG",
		"Description": "National Grid Transco, PLC"
	}, {
		"Symbol": "NGHC",
		"Description": "National General Hld"
	}, {
		"Symbol": "NGHCN",
		"Description": "National General Holdings Corp."
	}, {
		"Symbol": "NGHCO",
		"Description": "National Gnl Hld Ds"
	}, {
		"Symbol": "NGHCP",
		"Description": "National Gen Srs A"
	}, {
		"Symbol": "NGHCZ",
		"Description": "National Gen Sub NTS"
	}, {
		"Symbol": "NGL",
		"Description": "NGL ENERGY PARTNERS LP"
	}, {
		"Symbol": "NGLS^A",
		"Description": "Targa Resources Partners LP"
	}, {
		"Symbol": "NGS",
		"Description": "Natural Gas Services Group, Inc."
	}, {
		"Symbol": "NGVC",
		"Description": "Natural Grocers by Vitamin Cottage, Inc."
	}, {
		"Symbol": "NGVT",
		"Description": "Ingevity Corporation"
	}, {
		"Symbol": "NH",
		"Description": "Nanthealth Inc Cmn"
	}, {
		"Symbol": "NHA",
		"Description": "Nuveen Municipal 2021 Target Term Fund"
	}, {
		"Symbol": "NHC",
		"Description": "National HealthCare Corporation"
	}, {
		"Symbol": "NHF",
		"Description": "Highland Funds I"
	}, {
		"Symbol": "NHI",
		"Description": "National Health Investors, Inc."
	}, {
		"Symbol": "NHLD",
		"Description": "National Holdings"
	}, {
		"Symbol": "NHLDW",
		"Description": "National Holdings Corporation Warrants"
	}, {
		"Symbol": "NHS",
		"Description": "Neuberger Berman High Yield Strategies Fund"
	}, {
		"Symbol": "NHTC",
		"Description": "Natural Hlth Trd Cmn"
	}, {
		"Symbol": "NI",
		"Description": "NiSource, Inc"
	}, {
		"Symbol": "NICE",
		"Description": "Nice Ltd"
	}, {
		"Symbol": "NICK",
		"Description": "Nicholas Fincl Inc"
	}, {
		"Symbol": "NID",
		"Description": "Nuveen Intermediate Duration Municipal Term Fund"
	}, {
		"Symbol": "NIE",
		"Description": "AllianzGI Equity & Convertible Income Fund"
	}, {
		"Symbol": "NIHD",
		"Description": "NII Holdings Cmn"
	}, {
		"Symbol": "NILE",
		"Description": "Blue Nile Inc"
	}, {
		"Symbol": "NIM",
		"Description": "Nuveen Select Maturities Municipal Fund"
	}, {
		"Symbol": "NIQ",
		"Description": "Nuveenn Intermediate Duration Quality Municipal Term Fund"
	}, {
		"Symbol": "NJR",
		"Description": "NewJersey Resources Corporation"
	}, {
		"Symbol": "NJV",
		"Description": "Nuveen New Jersey Municipal Value Fund"
	}, {
		"Symbol": "NK",
		"Description": "Nantkwest Inc CS"
	}, {
		"Symbol": "NKE",
		"Description": "Nike, Inc."
	}, {
		"Symbol": "NKG",
		"Description": "Nuveen Georgia Quality Municipal Income Fund"
	}, {
		"Symbol": "NKSH",
		"Description": "Natl Bankshares Inc"
	}, {
		"Symbol": "NKTR",
		"Description": "Nektar Therapeutics"
	}, {
		"Symbol": "NKX",
		"Description": "Nuveen California AMT-Free Quality Municipal Income Fund"
	}, {
		"Symbol": "NL",
		"Description": "NL Industries, Inc."
	}, {
		"Symbol": "NLNK",
		"Description": "Newlink Genetics Cor"
	}, {
		"Symbol": "NLS",
		"Description": "Nautilus Group, Inc. "
	}, {
		"Symbol": "NLSN",
		"Description": "Nielsen N.V."
	}, {
		"Symbol": "NLST",
		"Description": "Netlist Inc"
	}, {
		"Symbol": "NLY",
		"Description": "Annaly Capital Management Inc"
	}, {
		"Symbol": "NLY^A",
		"Description": "Annaly Capital Management Inc"
	}, {
		"Symbol": "NLY^C",
		"Description": "Annaly Capital Management Inc"
	}, {
		"Symbol": "NLY^D",
		"Description": "Annaly Capital Management Inc"
	}, {
		"Symbol": "NLY^E",
		"Description": "Annaly Capital Management Inc"
	}, {
		"Symbol": "NM",
		"Description": "Navios Maritime Holdings Inc."
	}, {
		"Symbol": "NM^G",
		"Description": "Navios Maritime Holdings Inc."
	}, {
		"Symbol": "NM^H",
		"Description": "Navios Maritime Holdings Inc."
	}, {
		"Symbol": "NMBL",
		"Description": "Nimble Storage, Inc."
	}, {
		"Symbol": "NMFC",
		"Description": "New Mountain Finance Corporation"
	}, {
		"Symbol": "NMI",
		"Description": "Nuveen Municipal Income Fund, Inc."
	}, {
		"Symbol": "NMIH",
		"Description": "Nmi Holdings Cmn A"
	}, {
		"Symbol": "NMK^B",
		"Description": "Niagara Mohawk Holdings, Inc."
	}, {
		"Symbol": "NMK^C",
		"Description": "Niagara Mohawk Holdings, Inc."
	}, {
		"Symbol": "NML",
		"Description": "Neuberger Berman MLP Income Fund Inc."
	}, {
		"Symbol": "NMM",
		"Description": "Navios Maritime Partners LP"
	}, {
		"Symbol": "NMR",
		"Description": "Nomura Holdings Inc ADR"
	}, {
		"Symbol": "NMRX",
		"Description": "Numerex Cp Cl A [P"
	}, {
		"Symbol": "NMS",
		"Description": "Nuveen Minnesota Quality Municipal Income Fund"
	}, {
		"Symbol": "NMT",
		"Description": "Nuveen Massachusetts Municipal Income Fund"
	}, {
		"Symbol": "NMY",
		"Description": "Nuveen Maryland Quality Municipal Income Fund"
	}, {
		"Symbol": "NMZ",
		"Description": "Nuveen Municipal High Income Opportunity Fund"
	}, {
		"Symbol": "NNA",
		"Description": "Navios Maritime Acquisition Corporation"
	}, {
		"Symbol": "NNBR",
		"Description": "NN Inc"
	}, {
		"Symbol": "NNC",
		"Description": "Nuveen North Carolina Quality Municipal Income Fd"
	}, {
		"Symbol": "NNDM",
		"Description": "Nano Dimension Ads"
	}, {
		"Symbol": "NNI",
		"Description": "Nelnet, Inc."
	}, {
		"Symbol": "NNN",
		"Description": "National Retail Properties"
	}, {
		"Symbol": "NNN^D.CL",
		"Description": "National Retail Properties"
	}, {
		"Symbol": "NNN^E",
		"Description": "National Retail Properties"
	}, {
		"Symbol": "NNN^F",
		"Description": "National Retail Properties"
	}, {
		"Symbol": "NNVC",
		"Description": "NanoViricides, Inc."
	}, {
		"Symbol": "NNY",
		"Description": "Nuveen New York Municipal Value Fund, Inc."
	}, {
		"Symbol": "NOA",
		"Description": "North American Energy Partners, Inc."
	}, {
		"Symbol": "NOAH",
		"Description": "Noah Holdings Ltd."
	}, {
		"Symbol": "NOC",
		"Description": "Northrop Grumman Corporation"
	}, {
		"Symbol": "NOG",
		"Description": "Northern Oil and Gas, Inc."
	}, {
		"Symbol": "NOK",
		"Description": "Nokia Corporation"
	}, {
		"Symbol": "NOM",
		"Description": "Nuveen Missouri Quality Municipal Income Fund"
	}, {
		"Symbol": "NOMD",
		"Description": "Nomad Foods Limited"
	}, {
		"Symbol": "NORD",
		"Description": "Nord Anglia Education, Inc."
	}, {
		"Symbol": "NOV",
		"Description": "National Oilwell Varco, Inc."
	}, {
		"Symbol": "NOVN",
		"Description": "Novan Inc"
	}, {
		"Symbol": "NOVT",
		"Description": "Novanta Inc"
	}, {
		"Symbol": "NOW",
		"Description": "ServiceNow, Inc."
	}, {
		"Symbol": "NP",
		"Description": "Neenah Paper, Inc."
	}, {
		"Symbol": "NPK",
		"Description": "National Presto Industries, Inc."
	}, {
		"Symbol": "NPN",
		"Description": "Nuveen Pennsylvania Municipal Value Fund"
	}, {
		"Symbol": "NPO",
		"Description": "EnPro Industries"
	}, {
		"Symbol": "NPTN",
		"Description": "NeoPhotonics Corporation"
	}, {
		"Symbol": "NPV",
		"Description": "Nuveen Virginia Quality Municipal Income Fund"
	}, {
		"Symbol": "NQ",
		"Description": "NQ Mobile Inc."
	}, {
		"Symbol": "NQP",
		"Description": "Nuveen Pennsylvania Quality Municipal Income Fund"
	}, {
		"Symbol": "NR",
		"Description": "Newpark Resources, Inc."
	}, {
		"Symbol": "NRCIA",
		"Description": "National Resh Cla Cmn"
	}, {
		"Symbol": "NRCIB",
		"Description": "Natl Research Cl B"
	}, {
		"Symbol": "NRE",
		"Description": "NorthStar Realty Europe Corp."
	}, {
		"Symbol": "NRG",
		"Description": "NRG Energy, Inc."
	}, {
		"Symbol": "NRIM",
		"Description": "Northrim Bancorp Inc"
	}, {
		"Symbol": "NRK",
		"Description": "Nuveen New York AMT-Free Quality Municipal"
	}, {
		"Symbol": "NRO",
		"Description": "Neuberger Berman Real Estate Securities Income Fund, Inc."
	}, {
		"Symbol": "NRP",
		"Description": "Natural Resource Partners LP"
	}, {
		"Symbol": "NRT",
		"Description": "North European Oil Royality Trust"
	}, {
		"Symbol": "NRZ",
		"Description": "New Residential Investment Corp."
	}, {
		"Symbol": "NS",
		"Description": "Nustar Energy L.P."
	}, {
		"Symbol": "NS^A",
		"Description": "Nustar Energy L.P."
	}, {
		"Symbol": "NSA",
		"Description": "National Storage Affiliates Trust"
	}, {
		"Symbol": "NSAT",
		"Description": "Norsat International Inc."
	}, {
		"Symbol": "NSC",
		"Description": "Norfolk Souther Corporation"
	}, {
		"Symbol": "NSEC",
		"Description": "Natl Security Gp I"
	}, {
		"Symbol": "NSH",
		"Description": "Nustar GP Holdings, LLC"
	}, {
		"Symbol": "NSIT",
		"Description": "Insight Enterpr"
	}, {
		"Symbol": "NSL",
		"Description": "Nuveen Senior Income Fund"
	}, {
		"Symbol": "NSM",
		"Description": "Nationstar Mortgage Holdings Inc."
	}, {
		"Symbol": "NSP",
		"Description": "Insperity, Inc."
	}, {
		"Symbol": "NSPR",
		"Description": "InspireMD, Inc."
	}, {
		"Symbol": "NSPR.WS",
		"Description": "InspireMD, Inc."
	}, {
		"Symbol": "NSR",
		"Description": "Neustar, Inc."
	}, {
		"Symbol": "NSS",
		"Description": "NuStar Logistics, L.P."
	}, {
		"Symbol": "NSSC",
		"Description": "Napco Sec Tech Inc"
	}, {
		"Symbol": "NSTG",
		"Description": "Nanostring Tech Cmn"
	}, {
		"Symbol": "NSU",
		"Description": "Nevsun Resources Ltd"
	}, {
		"Symbol": "NSYS",
		"Description": "Nortech Systems In"
	}, {
		"Symbol": "NTAP",
		"Description": "Netapp Inc"
	}, {
		"Symbol": "NTB",
		"Description": "Bank of N.T. Butterfield & Son Limited "
	}, {
		"Symbol": "NTC",
		"Description": "Nuveen Connecticut Quality Municipal Income Fund"
	}, {
		"Symbol": "NTCT",
		"Description": "Netscout Systems I"
	}, {
		"Symbol": "NTEC",
		"Description": "Intec Pharma Ord Shr"
	}, {
		"Symbol": "NTES",
		"Description": "Netease Inc Ads"
	}, {
		"Symbol": "NTEST",
		"Description": "NASDAQ TEST STOCK"
	}, {
		"Symbol": "NTEST.A",
		"Description": "NASDAQ TEST STOCK"
	}, {
		"Symbol": "NTEST.B",
		"Description": "NASDAQ TEST STOCK"
	}, {
		"Symbol": "NTEST.C",
		"Description": "NASDAQ TEST STOCK"
	}, {
		"Symbol": "NTG",
		"Description": "Tortoise MLP Fund, Inc."
	}, {
		"Symbol": "NTGR",
		"Description": "Netgear Inc"
	}, {
		"Symbol": "NTIC",
		"Description": "Northern Tech Inc"
	}, {
		"Symbol": "NTIP",
		"Description": "Network-1 Technologies, Inc."
	}, {
		"Symbol": "NTL",
		"Description": "Nortel Inversora SA"
	}, {
		"Symbol": "NTLA",
		"Description": "Intellia Thera CS"
	}, {
		"Symbol": "NTN",
		"Description": "NTN Buzztime, Inc."
	}, {
		"Symbol": "NTNX",
		"Description": "Nutanix Inc"
	}, {
		"Symbol": "NTP",
		"Description": "Nam Tai Property Inc."
	}, {
		"Symbol": "NTRA",
		"Description": "Natera Inc Common ST"
	}, {
		"Symbol": "NTRI",
		"Description": "Nutrisystem Inc"
	}, {
		"Symbol": "NTRS",
		"Description": "Northern Trust Corp"
	}, {
		"Symbol": "NTRSP",
		"Description": "Northern TR Dep Shs"
	}, {
		"Symbol": "NTT",
		"Description": "Nippon Telegraph and Telephone Corporation"
	}, {
		"Symbol": "NTWK",
		"Description": "Netsol Tech Inc"
	}, {
		"Symbol": "NTX",
		"Description": "Nuveen Texas Quality Municipal Income Fund"
	}, {
		"Symbol": "NTZ",
		"Description": "Natuzzi, S.p.A."
	}, {
		"Symbol": "NUAN",
		"Description": "Nuance Communicatns"
	}, {
		"Symbol": "NUE",
		"Description": "Nucor Corporation"
	}, {
		"Symbol": "NUM",
		"Description": "Nuveen Michigan Quality Municipal Income Fund"
	}, {
		"Symbol": "NUO",
		"Description": "Nuveen Ohio Quality Municipal Income Fund"
	}, {
		"Symbol": "NURO",
		"Description": "Neurometrix Inc"
	}, {
		"Symbol": "NUROW",
		"Description": "Neurometrix Inc Wt"
	}, {
		"Symbol": "NUS",
		"Description": "Nu Skin Enterprises, Inc."
	}, {
		"Symbol": "NUTR",
		"Description": "Nutraceutical Intl"
	}, {
		"Symbol": "NUV",
		"Description": "Nuveen AMT-Free Municipal Value Fund"
	}, {
		"Symbol": "NUVA",
		"Description": "Nuvasive Inc"
	}, {
		"Symbol": "NUW",
		"Description": "Nuveen AMT-Free Municipal Value Fund"
	}, {
		"Symbol": "NVAX",
		"Description": "Novavax Inc"
	}, {
		"Symbol": "NVCN",
		"Description": "Neovasc Inc"
	}, {
		"Symbol": "NVCR",
		"Description": "Novocure Ltd Ord Sh"
	}, {
		"Symbol": "NVDA",
		"Description": "Nvidia Corporation"
	}, {
		"Symbol": "NVDQ",
		"Description": "Novadaq Technologies"
	}, {
		"Symbol": "NVEC",
		"Description": "Nve Corp"
	}, {
		"Symbol": "NVEE",
		"Description": "Nv5 Global Cmn"
	}, {
		"Symbol": "NVET",
		"Description": "Nexvet Biopharma Ord"
	}, {
		"Symbol": "NVFY",
		"Description": "Nova Lifestyle Inc"
	}, {
		"Symbol": "NVG",
		"Description": "Nuveen AMT-Free Municipal Credit Income Fund"
	}, {
		"Symbol": "NVGN",
		"Description": "Novogen Ltd Ads"
	}, {
		"Symbol": "NVGS",
		"Description": "Navigator Holdings Ltd."
	}, {
		"Symbol": "NVIV",
		"Description": "Invivo Theraptc Cmn"
	}, {
		"Symbol": "NVLN",
		"Description": "Novelion Therapeutics Inc."
	}, {
		"Symbol": "NVLS",
		"Description": "Nivalis Thera Cmn ST"
	}, {
		"Symbol": "NVMI",
		"Description": "Nova Measuring Instr"
	}, {
		"Symbol": "NVO",
		"Description": "Novo Nordisk A/S"
	}, {
		"Symbol": "NVR",
		"Description": "NVR, Inc."
	}, {
		"Symbol": "NVRO",
		"Description": "Nevro Corp."
	}, {
		"Symbol": "NVS",
		"Description": "Novartis AG"
	}, {
		"Symbol": "NVTA",
		"Description": "Invitae Corporation"
	}, {
		"Symbol": "NVTR",
		"Description": "Nuvectra Corp Cmn ST"
	}, {
		"Symbol": "NW^C",
		"Description": "Natl Westminster Pfd"
	}, {
		"Symbol": "NWBI",
		"Description": "Northwest Bancshares"
	}, {
		"Symbol": "NWE",
		"Description": "NorthWestern Corporation"
	}, {
		"Symbol": "NWFL",
		"Description": "Norwood Financial Cp"
	}, {
		"Symbol": "NWHM",
		"Description": "New Home Company Inc. "
	}, {
		"Symbol": "NWL",
		"Description": "Newell Brands Inc."
	}, {
		"Symbol": "NWLI",
		"Description": "Natl Wstrn Life Gp A"
	}, {
		"Symbol": "NWN",
		"Description": "Northwest Natural Gas Company"
	}, {
		"Symbol": "NWPX",
		"Description": "Northwest Pipe Co"
	}, {
		"Symbol": "NWS",
		"Description": "News Cp Cl B Cmn ST"
	}, {
		"Symbol": "NWSA",
		"Description": "News Cp Cl A Cmn ST"
	}, {
		"Symbol": "NWY",
		"Description": "New York & Company, Inc."
	}, {
		"Symbol": "NX",
		"Description": "Quanex Building Products Corporation"
	}, {
		"Symbol": "NXC",
		"Description": "Nuveen Insured California Select Tax-Free Income Portfolio"
	}, {
		"Symbol": "NXEO",
		"Description": "Nexeo Solutions Inc"
	}, {
		"Symbol": "NXEOU",
		"Description": "Nexeo Solutions Inc"
	}, {
		"Symbol": "NXEOW",
		"Description": "Nexeo Solutions Inc"
	}, {
		"Symbol": "NXJ",
		"Description": "Nuveen New Jersey Quality Municipal Income Fund"
	}, {
		"Symbol": "NXN",
		"Description": "Nuveen Insured New York Select Tax-Free Income Portfolio"
	}, {
		"Symbol": "NXP",
		"Description": "Nuveen Select Tax Free Income Portfolio"
	}, {
		"Symbol": "NXPI",
		"Description": "Nxp Semiconductors"
	}, {
		"Symbol": "NXQ",
		"Description": "Nuveen Select Tax Free Income Portfolio II"
	}, {
		"Symbol": "NXR",
		"Description": "Nuveen Select Tax Free Income Portfolio III"
	}, {
		"Symbol": "NXRT",
		"Description": "NexPoint Residential Trust, Inc."
	}, {
		"Symbol": "NXST",
		"Description": "Nexstar Broadcasting"
	}, {
		"Symbol": "NXTD",
		"Description": "Nxt-Id Inc Cmn Stk"
	}, {
		"Symbol": "NXTDW",
		"Description": "Nxt-Id Inc Warrant"
	}, {
		"Symbol": "NXTM",
		"Description": "Nxstage Medical Inc"
	}, {
		"Symbol": "NYCB",
		"Description": "New York Community Bancorp, Inc."
	}, {
		"Symbol": "NYCB^U",
		"Description": "New York Community Bancorp, Inc."
	}, {
		"Symbol": "NYH",
		"Description": "Eaton Vance New York Municipal Bond Fund II"
	}, {
		"Symbol": "NYLD",
		"Description": "NRG Yield, Inc."
	}, {
		"Symbol": "NYLD.A",
		"Description": "NRG Yield, Inc."
	}, {
		"Symbol": "NYMT",
		"Description": "New York Mtge Trust"
	}, {
		"Symbol": "NYMTO",
		"Description": "New York Mort 7.875"
	}, {
		"Symbol": "NYMTP",
		"Description": "New York Mrtg 7.75 B"
	}, {
		"Symbol": "NYMX",
		"Description": "Nymox Pharm Corp"
	}, {
		"Symbol": "NYNY",
		"Description": "Empire Resorts Inc"
	}, {
		"Symbol": "NYRT",
		"Description": "New York REIT, Inc."
	}, {
		"Symbol": "NYT",
		"Description": "New York Times Company "
	}, {
		"Symbol": "NYV",
		"Description": "Nuveen New York Municipal Value Fund 2"
	}, {
		"Symbol": "NZF",
		"Description": "Nuveen Municipal Credit Income Fund"
	}, {
		"Symbol": "O",
		"Description": "Realty Income Corporation"
	}, {
		"Symbol": "O^F",
		"Description": "Realty Income Corporation"
	}, {
		"Symbol": "OA",
		"Description": "Orbital ATK, Inc."
	}, {
		"Symbol": "OACQR",
		"Description": "Origo Acquisition Corp."
	}, {
		"Symbol": "OACQW",
		"Description": "Origo Acquisition Corp."
	}, {
		"Symbol": "OAK",
		"Description": "Oaktree Capital Group, LLC"
	}, {
		"Symbol": "OAKS",
		"Description": "Five Oaks Investment Corp."
	}, {
		"Symbol": "OAKS^A",
		"Description": "Five Oaks Investment Corp."
	}, {
		"Symbol": "OAS",
		"Description": "Oasis Petroleum Inc."
	}, {
		"Symbol": "OASM",
		"Description": "Oasmia Pharmaceu Ads"
	}, {
		"Symbol": "OB",
		"Description": "OneBeacon Insurance Group, Ltd."
	}, {
		"Symbol": "OBAS",
		"Description": "Optibase Ltd"
	}, {
		"Symbol": "OBCI",
		"Description": "Ocean Bio Chem Inc"
	}, {
		"Symbol": "OBLN",
		"Description": "Obalon Therapeutics Inc"
	}, {
		"Symbol": "OBSV",
		"Description": "Obseva Sa Ordinary Shares"
	}, {
		"Symbol": "OC",
		"Description": "Owens Corning Inc"
	}, {
		"Symbol": "OCC",
		"Description": "Optical Cable Corp"
	}, {
		"Symbol": "OCFC",
		"Description": "Oceanfirst Finl Corp"
	}, {
		"Symbol": "OCIP",
		"Description": "OCI Partners LP"
	}, {
		"Symbol": "OCLR",
		"Description": "Oclaro Inc"
	}, {
		"Symbol": "OCN",
		"Description": "Ocwen Financial Corporation"
	}, {
		"Symbol": "OCRX",
		"Description": "Ocera Therapeutics"
	}, {
		"Symbol": "OCUL",
		"Description": "Ocular Therapeut Cmn"
	}, {
		"Symbol": "OCX",
		"Description": "OncoCyte Corporation"
	}, {
		"Symbol": "ODC",
		"Description": "Oil-Dri Corporation Of America"
	}, {
		"Symbol": "ODFL",
		"Description": "Old Dominion Freig"
	}, {
		"Symbol": "ODP",
		"Description": "Office Depot Cmn"
	}, {
		"Symbol": "OEC",
		"Description": "Orion Engineered Carbons S.A"
	}, {
		"Symbol": "OESX",
		"Description": "Orion Energy Syst Cmn"
	}, {
		"Symbol": "OFC",
		"Description": "Corporate Office Properties Trust"
	}, {
		"Symbol": "OFC^L",
		"Description": "Corporate Office Properties Trust"
	}, {
		"Symbol": "OFED",
		"Description": "Oconee Fed Fin Corp"
	}, {
		"Symbol": "OFG",
		"Description": "OFG Bancorp"
	}, {
		"Symbol": "OFG^A",
		"Description": "OFG Bancorp"
	}, {
		"Symbol": "OFG^B",
		"Description": "OFG Bancorp"
	}, {
		"Symbol": "OFG^D",
		"Description": "OFG Bancorp"
	}, {
		"Symbol": "OFIX",
		"Description": "Orthofix Intl Nv"
	}, {
		"Symbol": "OFLX",
		"Description": "Omega Flex Inc"
	}, {
		"Symbol": "OFS",
		"Description": "Ofs Capital Corporat"
	}, {
		"Symbol": "OGE",
		"Description": "OGE Energy Corporation"
	}, {
		"Symbol": "OGEN",
		"Description": "Oragenics, Inc."
	}, {
		"Symbol": "OGS",
		"Description": "ONE Gas, Inc."
	}, {
		"Symbol": "OGXI",
		"Description": "Oncogenex Pharma"
	}, {
		"Symbol": "OHAI",
		"Description": "Oha Investmnt Cp Cmn"
	}, {
		"Symbol": "OHGI",
		"Description": "One Horizon Grp Cmn"
	}, {
		"Symbol": "OHI",
		"Description": "Omega Healthcare Investors, Inc."
	}, {
		"Symbol": "OHRP",
		"Description": "Ohr Pharmceutial Cmn"
	}, {
		"Symbol": "OI",
		"Description": "Owens-Illinois, Inc."
	}, {
		"Symbol": "OIA",
		"Description": "Invesco Municipal Income Opportunities Trust"
	}, {
		"Symbol": "OIBR.C",
		"Description": "Oi S.A."
	}, {
		"Symbol": "OII",
		"Description": "Oceaneering International, Inc."
	}, {
		"Symbol": "OIIM",
		"Description": "O2Micro Intl Ltd"
	}, {
		"Symbol": "OIS",
		"Description": "Oil States International, Inc."
	}, {
		"Symbol": "OKE",
		"Description": "ONEOK, Inc."
	}, {
		"Symbol": "OKS",
		"Description": "ONEOK Partners, L.P."
	}, {
		"Symbol": "OKSB",
		"Description": "Southwest Bncp Inc"
	}, {
		"Symbol": "OLBK",
		"Description": "Old Line Bancshs MD"
	}, {
		"Symbol": "OLD",
		"Description": " Long-Term Care ETF"
	}, {
		"Symbol": "OLED",
		"Description": "Universal Display"
	}, {
		"Symbol": "OLLI",
		"Description": "Ollies Bargain CS"
	}, {
		"Symbol": "OLN",
		"Description": "Olin Corporation"
	}, {
		"Symbol": "OLP",
		"Description": "One Liberty Properties, Inc."
	}, {
		"Symbol": "OMAA",
		"Description": "OM Asset Management plc"
	}, {
		"Symbol": "OMAB",
		"Description": "Grupo Aeroportuario"
	}, {
		"Symbol": "OMAM",
		"Description": "OM Asset Management plc"
	}, {
		"Symbol": "OMC",
		"Description": "Omnicom Group Inc."
	}, {
		"Symbol": "OMCL",
		"Description": "Omnicell Inc"
	}, {
		"Symbol": "OME",
		"Description": "Omega Protein Corporation"
	}, {
		"Symbol": "OMED",
		"Description": "Oncomed Pharma"
	}, {
		"Symbol": "OMER",
		"Description": "Omeros Corporation"
	}, {
		"Symbol": "OMEX",
		"Description": "Odyssey Marine Expl"
	}, {
		"Symbol": "OMF",
		"Description": "OneMain Holdings, Inc."
	}, {
		"Symbol": "OMI",
		"Description": "Owens & Minor, Inc."
	}, {
		"Symbol": "OMN",
		"Description": "OMNOVA Solutions Inc."
	}, {
		"Symbol": "ON",
		"Description": "On Semiconductor"
	}, {
		"Symbol": "ONB",
		"Description": "Old National Bncp Cmn"
	}, {
		"Symbol": "ONCE",
		"Description": "Spark Therap Cmn"
	}, {
		"Symbol": "ONCS",
		"Description": "Oncosec Medical Cmn"
	}, {
		"Symbol": "ONDK",
		"Description": "On Deck Capital, Inc."
	}, {
		"Symbol": "ONEQ",
		"Description": "Nasdaq Comp Ndx Fund"
	}, {
		"Symbol": "ONP",
		"Description": "Orient Paper, Inc."
	}, {
		"Symbol": "ONS",
		"Description": "Oncobiologics Inc"
	}, {
		"Symbol": "ONSIW",
		"Description": "Oncobiologics Inc"
	}, {
		"Symbol": "ONSIZ",
		"Description": "Oncobiologics Inc"
	}, {
		"Symbol": "ONTX",
		"Description": "Onconova Therapeutic"
	}, {
		"Symbol": "ONTXW",
		"Description": "Onconova Therapeutics Inc"
	}, {
		"Symbol": "ONVI",
		"Description": "Onvia Inc"
	}, {
		"Symbol": "ONVO",
		"Description": "Organovo Holdings"
	}, {
		"Symbol": "OOMA",
		"Description": "Ooma, Inc."
	}, {
		"Symbol": "OPB",
		"Description": "Opus Bank Cmn Stk"
	}, {
		"Symbol": "OPGN",
		"Description": "Opgen Inc Cmn Stk"
	}, {
		"Symbol": "OPGNW",
		"Description": "Opgen Inc Warrant"
	}, {
		"Symbol": "OPHC",
		"Description": "Optimumbank Hldgs"
	}, {
		"Symbol": "OPHT",
		"Description": "Ophthotech Corp Cmn"
	}, {
		"Symbol": "OPK",
		"Description": "Opko Health Inc"
	}, {
		"Symbol": "OPOF",
		"Description": "Old Point Finl Cp"
	}, {
		"Symbol": "OPP",
		"Description": "RiverNorth/DoubleLine Strategic Opportunity Fund, Inc."
	}, {
		"Symbol": "OPTT",
		"Description": "Ocean Power Tech Inc"
	}, {
		"Symbol": "OPXA",
		"Description": "Opexa Therapeutics"
	}, {
		"Symbol": "OPXAW",
		"Description": "Opexa Therap Warrant"
	}, {
		"Symbol": "OPY",
		"Description": "Oppenheimer Holdings, Inc."
	}, {
		"Symbol": "OR",
		"Description": "Osisko Gold Royalties Ltd"
	}, {
		"Symbol": "ORA",
		"Description": "Ormat Technologies, Inc."
	}, {
		"Symbol": "ORAN",
		"Description": "Orange"
	}, {
		"Symbol": "ORBC",
		"Description": "Orbcomm Inc"
	}, {
		"Symbol": "ORBK",
		"Description": "Orbotech Ltd"
	}, {
		"Symbol": "ORC",
		"Description": "Orchid Island Capital, Inc."
	}, {
		"Symbol": "ORCL",
		"Description": "Oracle Corporation"
	}, {
		"Symbol": "OREX",
		"Description": "Orexigen Therapeutic"
	}, {
		"Symbol": "ORG",
		"Description": " Organics ETF"
	}, {
		"Symbol": "ORI",
		"Description": "Old Republic International Corporation"
	}, {
		"Symbol": "ORIG",
		"Description": "Ocean Rig Udw Inc"
	}, {
		"Symbol": "ORIT",
		"Description": "Oritani Financial"
	}, {
		"Symbol": "ORLY",
		"Description": "O'Reilly Automotive"
	}, {
		"Symbol": "ORM",
		"Description": "Owens Realty Mortgage, Inc."
	}, {
		"Symbol": "ORMP",
		"Description": "Oramed Pharma Cmn"
	}, {
		"Symbol": "ORN",
		"Description": "Orion Group Holdings, Inc."
	}, {
		"Symbol": "ORPN",
		"Description": "Bio Blast Pharma Ltd"
	}, {
		"Symbol": "ORRF",
		"Description": "Orrstown Finl Svcs"
	}, {
		"Symbol": "OSB",
		"Description": "Norbord Inc."
	}, {
		"Symbol": "OSBC",
		"Description": "Old Second Bancorp"
	}, {
		"Symbol": "OSBCP",
		"Description": "Old Second Bncp"
	}, {
		"Symbol": "OSG",
		"Description": "Overseas Shipholding Group, Inc."
	}, {
		"Symbol": "OSIR",
		"Description": "Osiris Therapeutics"
	}, {
		"Symbol": "OSIS",
		"Description": "O S I Systems Inc"
	}, {
		"Symbol": "OSK",
		"Description": "Oshkosh Corporation"
	}, {
		"Symbol": "OSM",
		"Description": "SLM Cp NTS Srs A"
	}, {
		"Symbol": "OSN",
		"Description": "Ossen Innovation Co"
	}, {
		"Symbol": "OSTK",
		"Description": "Overstock.Com Inc"
	}, {
		"Symbol": "OSUR",
		"Description": "Orasure Tech Inc"
	}, {
		"Symbol": "OTEL",
		"Description": "Otelco Cl A Cmn"
	}, {
		"Symbol": "OTEX",
		"Description": "Open Text Cp"
	}, {
		"Symbol": "OTIC",
		"Description": "Otonomy Inc"
	}, {
		"Symbol": "OTIV",
		"Description": "On Track Innovations"
	}, {
		"Symbol": "OTTR",
		"Description": "Otter Tail Corp"
	}, {
		"Symbol": "OTTW",
		"Description": "Ottawa Saving Bcp Il"
	}, {
		"Symbol": "OUT",
		"Description": "OUTFRONT Media Inc."
	}, {
		"Symbol": "OVAS",
		"Description": "Ovascience Cmn Stk"
	}, {
		"Symbol": "OVBC",
		"Description": "Ohio Valley Banc Cp"
	}, {
		"Symbol": "OVLY",
		"Description": "Oak Valley Bancp CA"
	}, {
		"Symbol": "OXBR",
		"Description": "Oxbridge Ord Shrs"
	}, {
		"Symbol": "OXBRW",
		"Description": "Oxbridge Warrants"
	}, {
		"Symbol": "OXFD",
		"Description": "Oxford Immunotec"
	}, {
		"Symbol": "OXLC",
		"Description": "Oxford Lane Capital"
	}, {
		"Symbol": "OXLCN",
		"Description": "Oxford Lane 8.125 Pf"
	}, {
		"Symbol": "OXLCO",
		"Description": "Oxford Lane Cap 7.5"
	}, {
		"Symbol": "OXM",
		"Description": "Oxford Industries, Inc."
	}, {
		"Symbol": "OXY",
		"Description": "Occidental Petroleum Corporation"
	}, {
		"Symbol": "OZM",
		"Description": "Och-Ziff Capital Management Group LLC"
	}, {
		"Symbol": "OZRK",
		"Description": "Bank of  Ozarks"
	}, {
		"Symbol": "P",
		"Description": "Pandora Media, Inc."
	}, {
		"Symbol": "PAA",
		"Description": "Plains All American Pipeline, L.P."
	}, {
		"Symbol": "PAAC",
		"Description": "Pacific Spec Acq Ord"
	}, {
		"Symbol": "PAACR",
		"Description": "Pacific Spc Aq Right"
	}, {
		"Symbol": "PAACU",
		"Description": "Pacific Spc Acq Unit"
	}, {
		"Symbol": "PAACW",
		"Description": "Pacific Spc Acq Wrnt"
	}, {
		"Symbol": "PAAS",
		"Description": "Pan Amer Silver Corp"
	}, {
		"Symbol": "PAC",
		"Description": "Grupo Aeroportuario Del Pacifico, S.A. de C.V."
	}, {
		"Symbol": "PACB",
		"Description": "Pacific Biosciences"
	}, {
		"Symbol": "PACD",
		"Description": "Pacific Drilling S.A."
	}, {
		"Symbol": "PACE",
		"Description": "Pace Hlds Cl A Ord"
	}, {
		"Symbol": "PACEU",
		"Description": "Pace Holdings Co Un"
	}, {
		"Symbol": "PACEW",
		"Description": "Pace Holdings Cor Wt"
	}, {
		"Symbol": "PACW",
		"Description": "Pacwest Bancorp"
	}, {
		"Symbol": "PAG",
		"Description": "Penske Automotive Group, Inc."
	}, {
		"Symbol": "PAGG",
		"Description": "Powershares Global A"
	}, {
		"Symbol": "PAGP",
		"Description": "Plains Group Holdings, L.P."
	}, {
		"Symbol": "PAH",
		"Description": "Platform Specialty Products Corporation"
	}, {
		"Symbol": "PAHC",
		"Description": "Phibro Anl Htlh A Cmn"
	}, {
		"Symbol": "PAI",
		"Description": "Pacific American Income Shares, Inc."
	}, {
		"Symbol": "PAM",
		"Description": "Pampa Energia S.A."
	}, {
		"Symbol": "PANL",
		"Description": "Pangaea Logistics So"
	}, {
		"Symbol": "PANW",
		"Description": "Palo Alto Networks, Inc."
	}, {
		"Symbol": "PAR",
		"Description": "PAR Technology Corporation"
	}, {
		"Symbol": "PARR",
		"Description": "Par Pacific Holdings, Inc."
	}, {
		"Symbol": "PATI",
		"Description": "Patriot TR HD Cmn"
	}, {
		"Symbol": "PATK",
		"Description": "Patrick Inds Inc"
	}, {
		"Symbol": "PAVM",
		"Description": "Pavmed Inc Cmn"
	}, {
		"Symbol": "PAVMW",
		"Description": "Pavmed Inc Wt"
	}, {
		"Symbol": "PAY",
		"Description": "Verifone Systems, Inc."
	}, {
		"Symbol": "PAYC",
		"Description": "Paycom Software, Inc."
	}, {
		"Symbol": "PAYX",
		"Description": "Paychex Inc"
	}, {
		"Symbol": "PB",
		"Description": "Prosperity Bancshares, Inc."
	}, {
		"Symbol": "PBA",
		"Description": "Pembina Pipeline Corp."
	}, {
		"Symbol": "PBB",
		"Description": "Prospect Capital Corporation"
	}, {
		"Symbol": "PBBI",
		"Description": "Pb Bancorp Inc"
	}, {
		"Symbol": "PBCT",
		"Description": "People's United Finl"
	}, {
		"Symbol": "PBCTP",
		"Description": "Peoples Utd Finl Inc."
	}, {
		"Symbol": "PBF",
		"Description": "PBF Energy Inc."
	}, {
		"Symbol": "PBFX",
		"Description": "PBF Logistics LP"
	}, {
		"Symbol": "PBH",
		"Description": "Prestige Brand Holdings, Inc."
	}, {
		"Symbol": "PBHC",
		"Description": "Pathfinder Bcp MD"
	}, {
		"Symbol": "PBI",
		"Description": "Pitney Bowes Inc."
	}, {
		"Symbol": "PBI^B",
		"Description": "Pitney Bowes Inc."
	}, {
		"Symbol": "PBIB",
		"Description": "Porter Bancorp Inc"
	}, {
		"Symbol": "PBIP",
		"Description": "Prudential Bancorp"
	}, {
		"Symbol": "PBMD",
		"Description": "Prima Biomed Ltd"
	}, {
		"Symbol": "PBNC",
		"Description": "Paragon Commercial Corporation"
	}, {
		"Symbol": "PBPB",
		"Description": "Potbelly Corp Cmn"
	}, {
		"Symbol": "PBR",
		"Description": "Petroleo Brasileiro S.A.- Petrobras"
	}, {
		"Symbol": "PBR.A",
		"Description": "Petroleo Brasileiro S.A.- Petrobras"
	}, {
		"Symbol": "PBSK",
		"Description": "Poage Bankshares Inc"
	}, {
		"Symbol": "PBT",
		"Description": "Permian Basin Royalty Trust"
	}, {
		"Symbol": "PBYI",
		"Description": "Puma Biotechnology"
	}, {
		"Symbol": "PCAR",
		"Description": "Paccar Inc"
	}, {
		"Symbol": "PCBK",
		"Description": "Pacific Continental"
	}, {
		"Symbol": "PCF",
		"Description": "Putnam High Income Bond Fund"
	}, {
		"Symbol": "PCG",
		"Description": "Pacific Gas & Electric Co."
	}, {
		"Symbol": "PCG^A",
		"Description": "Pacific Gas & Electric Co."
	}, {
		"Symbol": "PCG^B",
		"Description": "Pacific Gas & Electric Co."
	}, {
		"Symbol": "PCG^C",
		"Description": "Pacific Gas & Electric Co."
	}, {
		"Symbol": "PCG^D",
		"Description": "Pacific Gas & Electric Co."
	}, {
		"Symbol": "PCG^E",
		"Description": "Pacific Gas & Electric Co."
	}, {
		"Symbol": "PCG^G",
		"Description": "Pacific Gas & Electric Co."
	}, {
		"Symbol": "PCG^H",
		"Description": "Pacific Gas & Electric Co."
	}, {
		"Symbol": "PCG^I",
		"Description": "Pacific Gas & Electric Co."
	}, {
		"Symbol": "PCH",
		"Description": "Potlatch Cp"
	}, {
		"Symbol": "PCI",
		"Description": "PIMCO Dynamic Credit and Mortgage Income Fund"
	}, {
		"Symbol": "PCK",
		"Description": "Pimco California Municipal Income Fund II"
	}, {
		"Symbol": "PCLN",
		"Description": "Priceline Group"
	}, {
		"Symbol": "PCM",
		"Description": "PIMCO Commercial Mortgage Securities Trust, Inc."
	}, {
		"Symbol": "PCMI",
		"Description": "PCM Inc"
	}, {
		"Symbol": "PCN",
		"Description": "Pimco Corporate & Income Stategy Fund"
	}, {
		"Symbol": "PCO",
		"Description": "Pendrell Corporation"
	}, {
		"Symbol": "PCOM",
		"Description": "Points Intl Ltd"
	}, {
		"Symbol": "PCQ",
		"Description": "PIMCO California Municipal Income Fund"
	}, {
		"Symbol": "PCRX",
		"Description": "Pacira Pharm Inc"
	}, {
		"Symbol": "PCTI",
		"Description": "Pc-Tel Inc"
	}, {
		"Symbol": "PCTY",
		"Description": "Paylocity Hldng Corp"
	}, {
		"Symbol": "PCYG",
		"Description": "Park City Group Cmn"
	}, {
		"Symbol": "PCYO",
		"Description": "Pure Cycle Corp"
	}, {
		"Symbol": "PDBC",
		"Description": "PS DB Optimum Yield Diversified Commodity Strate"
	}, {
		"Symbol": "PDCE",
		"Description": "Pdc Energy Inc"
	}, {
		"Symbol": "PDCO",
		"Description": "Patterson Companies"
	}, {
		"Symbol": "PDEX",
		"Description": "Pro-Dex Inc New"
	}, {
		"Symbol": "PDFS",
		"Description": "Pdf Solutions Inc"
	}, {
		"Symbol": "PDI",
		"Description": "PIMCO Dynamic Income Fund"
	}, {
		"Symbol": "PDLI",
		"Description": "Pdl Biopharma Inc"
	}, {
		"Symbol": "PDM",
		"Description": "Piedmont Office Realty Trust, Inc."
	}, {
		"Symbol": "PDP",
		"Description": "Powershares DWA Momentum Portfolio"
	}, {
		"Symbol": "PDS",
		"Description": "Precision Drilling Corporation"
	}, {
		"Symbol": "PDT",
		"Description": "John Hancock Premium Dividend Fund"
	}, {
		"Symbol": "PDVW",
		"Description": "Pdvwireless Cmn Stk"
	}, {
		"Symbol": "PE",
		"Description": "Parsley Energy, Inc."
	}, {
		"Symbol": "PEB",
		"Description": "Pebblebrook Hotel Trust"
	}, {
		"Symbol": "PEB^C",
		"Description": "Pebblebrook Hotel Trust"
	}, {
		"Symbol": "PEB^D",
		"Description": "Pebblebrook Hotel Trust"
	}, {
		"Symbol": "PEBK",
		"Description": "Peoples Bancorp Nc"
	}, {
		"Symbol": "PEBO",
		"Description": "Peoples Bancorp Inc"
	}, {
		"Symbol": "PED",
		"Description": "Pedevco Corp."
	}, {
		"Symbol": "PEG",
		"Description": "Public Service Enterprise Group Incorporated"
	}, {
		"Symbol": "PEGA",
		"Description": "Pegasystems Inc"
	}, {
		"Symbol": "PEGI",
		"Description": "Pattern Energy Cl A"
	}, {
		"Symbol": "PEI",
		"Description": "Pennsylvania Real Estate Investment Trust"
	}, {
		"Symbol": "PEI^A",
		"Description": "Pennsylvania Real Estate Investment Trust"
	}, {
		"Symbol": "PEI^B",
		"Description": "Pennsylvania Real Estate Investment Trust"
	}, {
		"Symbol": "PEI^C",
		"Description": "Pennsylvania Real Estate Investment Trust"
	}, {
		"Symbol": "PEIX",
		"Description": "Pacific Ethanol Inc"
	}, {
		"Symbol": "PEN",
		"Description": "Penumbra, Inc."
	}, {
		"Symbol": "PENN",
		"Description": "Penn Natl Gaming Inc"
	}, {
		"Symbol": "PEO",
		"Description": "Adams Natural Resources Fund, Inc."
	}, {
		"Symbol": "PEP",
		"Description": "Pepsico, Inc."
	}, {
		"Symbol": "PER",
		"Description": "SandRidge Permian Trust"
	}, {
		"Symbol": "PERF",
		"Description": "Perfumania Hld Inc"
	}, {
		"Symbol": "PERI",
		"Description": "Perion Network Ltd"
	}, {
		"Symbol": "PERY",
		"Description": "Perry Ellis Int"
	}, {
		"Symbol": "PES",
		"Description": "Pioneer Energy Services Corp."
	}, {
		"Symbol": "PESI",
		"Description": "Perma-Fix Envir"
	}, {
		"Symbol": "PETS",
		"Description": "Petmed Express Inc"
	}, {
		"Symbol": "PETX",
		"Description": "Aratana Theraptcs Cmn"
	}, {
		"Symbol": "PEY",
		"Description": "High-Yield Eq Div Achievers Powershares"
	}, {
		"Symbol": "PEZ",
		"Description": "Dynamic Consumer Disc Powershares"
	}, {
		"Symbol": "PF",
		"Description": "Pinnacle Foods, Inc."
	}, {
		"Symbol": "PFBC",
		"Description": "Preferred Bank La"
	}, {
		"Symbol": "PFBI",
		"Description": "Premier Finl Bncp"
	}, {
		"Symbol": "PFBX",
		"Description": "Peoples Finl Corp"
	}, {
		"Symbol": "PFD",
		"Description": "Flaherty & Crumrine Preferred Income Fund Incorporated"
	}, {
		"Symbol": "PFE",
		"Description": "Pfizer, Inc."
	}, {
		"Symbol": "PFG",
		"Description": "Principal Financial Group Inc"
	}, {
		"Symbol": "PFGC",
		"Description": "Performance Food Group Company"
	}, {
		"Symbol": "PFH",
		"Description": "CABCO Series 2004-101 Trust"
	}, {
		"Symbol": "PFI",
		"Description": "Dynamic Financials Powershares"
	}, {
		"Symbol": "PFIE",
		"Description": "Profire Energy Cmn"
	}, {
		"Symbol": "PFIN",
		"Description": "P F Inds Inc A"
	}, {
		"Symbol": "PFIS",
		"Description": "Peoples Finl Svcs Co"
	}, {
		"Symbol": "PFK",
		"Description": "Prudential Financial, Inc."
	}, {
		"Symbol": "PFL",
		"Description": "PIMCO Income Strategy Fund"
	}, {
		"Symbol": "PFLT",
		"Description": "Pennantpark Fltng Rt"
	}, {
		"Symbol": "PFM",
		"Description": "Dividend Achievers Powershares"
	}, {
		"Symbol": "PFMT",
		"Description": "Performant Financial"
	}, {
		"Symbol": "PFN",
		"Description": "PIMCO Income Strategy Fund II"
	}, {
		"Symbol": "PFNX",
		"Description": "Pfenex Inc."
	}, {
		"Symbol": "PFO",
		"Description": "Flaherty & Crumrine Preferred Income Opportunity Fund Inc"
	}, {
		"Symbol": "PFPT",
		"Description": "Proofpoint Inc"
	}, {
		"Symbol": "PFS",
		"Description": "Provident Financial Services, Inc"
	}, {
		"Symbol": "PFSI",
		"Description": "PennyMac Financial Services, Inc."
	}, {
		"Symbol": "PFSW",
		"Description": "Pfsweb Inc"
	}, {
		"Symbol": "PG",
		"Description": "Procter & Gamble Company "
	}, {
		"Symbol": "PGC",
		"Description": "Peapack Gladstone Fi"
	}, {
		"Symbol": "PGEM",
		"Description": "Ply Gem Holdings, Inc."
	}, {
		"Symbol": "PGH",
		"Description": "Pengrowth Energy Corporation"
	}, {
		"Symbol": "PGJ",
		"Description": "Golden Dragon China Powershares"
	}, {
		"Symbol": "PGLC",
		"Description": "Pershing Gold Cmn"
	}, {
		"Symbol": "PGNX",
		"Description": "Progenics Pharmaceut"
	}, {
		"Symbol": "PGP",
		"Description": "Pimco Global Stocksplus & Income Fund"
	}, {
		"Symbol": "PGR",
		"Description": "Progressive Corporation "
	}, {
		"Symbol": "PGRE",
		"Description": "Paramount Group, Inc."
	}, {
		"Symbol": "PGTI",
		"Description": "PGT Innovations, Inc."
	}, {
		"Symbol": "PGZ",
		"Description": "Principal Real Estate Income Fund"
	}, {
		"Symbol": "PH",
		"Description": "Parker-Hannifin Corporation"
	}, {
		"Symbol": "PHD",
		"Description": "Pioneer Floating Rate Trust"
	}, {
		"Symbol": "PHF",
		"Description": "Pacholder High Yield Fund, Inc."
	}, {
		"Symbol": "PHG",
		"Description": "Koninklijke Philips N.V."
	}, {
		"Symbol": "PHH",
		"Description": "PHH Corp"
	}, {
		"Symbol": "PHI",
		"Description": "PLDT Inc."
	}, {
		"Symbol": "PHII",
		"Description": "PHI Inc"
	}, {
		"Symbol": "PHIIK",
		"Description": "PHI Inc Non-Voting"
	}, {
		"Symbol": "PHK",
		"Description": "Pimco High Income Fund"
	}, {
		"Symbol": "PHM",
		"Description": "PulteGroup, Inc."
	}, {
		"Symbol": "PHMD",
		"Description": "Photomedex Inc"
	}, {
		"Symbol": "PHO",
		"Description": "Water Resources Powershares"
	}, {
		"Symbol": "PHT",
		"Description": "Pioneer High Income Trust"
	}, {
		"Symbol": "PHX",
		"Description": "Panhandle Royalty Company"
	}, {
		"Symbol": "PI",
		"Description": "Impinj Inc Cmn"
	}, {
		"Symbol": "PICO",
		"Description": "Pico Holdings Inc"
	}, {
		"Symbol": "PID",
		"Description": "Intl Dividend Achievers Powershares"
	}, {
		"Symbol": "PIE",
		"Description": "Powershares DWA Emerging Markets Momentum Portfo"
	}, {
		"Symbol": "PIH",
		"Description": "1347 Property Ins Cmn"
	}, {
		"Symbol": "PII",
		"Description": "Polaris Industries Inc."
	}, {
		"Symbol": "PIM",
		"Description": "Putnam Master Intermediate Income Trust"
	}, {
		"Symbol": "PINC",
		"Description": "Premier Inc Cl A Cmn"
	}, {
		"Symbol": "PIO",
		"Description": "Global Water Powershares"
	}, {
		"Symbol": "PIP",
		"Description": "PharmAthene, Inc"
	}, {
		"Symbol": "PIR",
		"Description": "Pier 1 Imports, Inc."
	}, {
		"Symbol": "PIRS",
		"Description": "Pieris Pharma Cmn"
	}, {
		"Symbol": "PIY",
		"Description": "Merrill Lynch Depositor, Inc."
	}, {
		"Symbol": "PIZ",
		"Description": "Powershares DWA Developed Markets Momentum Portf"
	}, {
		"Symbol": "PJC",
		"Description": "Piper Jaffray Companies"
	}, {
		"Symbol": "PJH",
		"Description": "Prudential Financial, Inc."
	}, {
		"Symbol": "PJT",
		"Description": "PJT Partners Inc."
	}, {
		"Symbol": "PK",
		"Description": "Park Hotels & Resorts Inc."
	}, {
		"Symbol": "PKBK",
		"Description": "Parke Bancorp Inc"
	}, {
		"Symbol": "PKD",
		"Description": "Parker Drilling Company"
	}, {
		"Symbol": "PKE",
		"Description": "Park Electrochemical Corporation"
	}, {
		"Symbol": "PKG",
		"Description": "Packaging Corporation of America"
	}, {
		"Symbol": "PKI",
		"Description": "PerkinElmer, Inc."
	}, {
		"Symbol": "PKO",
		"Description": "Pimco Income Opportunity Fund"
	}, {
		"Symbol": "PKOH",
		"Description": "Park Ohio Hldg Cp"
	}, {
		"Symbol": "PKW",
		"Description": "Buyback Achievers Powershares"
	}, {
		"Symbol": "PKX",
		"Description": "POSCO"
	}, {
		"Symbol": "PKY",
		"Description": "Parkway, Inc."
	}, {
		"Symbol": "PL^C",
		"Description": "Protective Life Corporation"
	}, {
		"Symbol": "PL^E",
		"Description": "Protective Life Corporation"
	}, {
		"Symbol": "PLAB",
		"Description": "Photronics Inc"
	}, {
		"Symbol": "PLAY",
		"Description": "Dave & Buster's Ente"
	}, {
		"Symbol": "PLBC",
		"Description": "Plumas Bancorp"
	}, {
		"Symbol": "PLCE",
		"Description": "Children's Place Inc"
	}, {
		"Symbol": "PLD",
		"Description": "Prologis, Inc."
	}, {
		"Symbol": "PLG",
		"Description": "Platinum Group Metals Ltd."
	}, {
		"Symbol": "PLKI",
		"Description": "Popeyes Louisiana"
	}, {
		"Symbol": "PLM",
		"Description": "Polymet Mining Corp."
	}, {
		"Symbol": "PLNT",
		"Description": "Planet Fitness, Inc."
	}, {
		"Symbol": "PLOW",
		"Description": "Douglas Dynamics, Inc."
	}, {
		"Symbol": "PLPC",
		"Description": "Preformed Line Prd"
	}, {
		"Symbol": "PLPM",
		"Description": "Planet Payment"
	}, {
		"Symbol": "PLSE",
		"Description": "Pulse Biosciences CS"
	}, {
		"Symbol": "PLT",
		"Description": "Plantronics, Inc."
	}, {
		"Symbol": "PLUG",
		"Description": "Plug Power Inc"
	}, {
		"Symbol": "PLUS",
		"Description": "Eplus Inc"
	}, {
		"Symbol": "PLW",
		"Description": "1-30 Laddered Treasury Powershares"
	}, {
		"Symbol": "PLX",
		"Description": "Protalix BioTherapeutics, Inc."
	}, {
		"Symbol": "PLXS",
		"Description": "Plexus Cp"
	}, {
		"Symbol": "PM",
		"Description": "Philip Morris International Inc"
	}, {
		"Symbol": "PMBC",
		"Description": "Pacific Mercantile"
	}, {
		"Symbol": "PMC",
		"Description": "Pharmerica Corporation"
	}, {
		"Symbol": "PMD",
		"Description": "Psychemedics"
	}, {
		"Symbol": "PME",
		"Description": "Pingtan Marine"
	}, {
		"Symbol": "PMF",
		"Description": "PIMCO Municipal Income Fund"
	}, {
		"Symbol": "PML",
		"Description": "Pimco Municipal Income Fund II"
	}, {
		"Symbol": "PMM",
		"Description": "Putnam Managed Municipal Income Trust"
	}, {
		"Symbol": "PMO",
		"Description": "Putnam Municipal Opportunities Trust"
	}, {
		"Symbol": "PMPT",
		"Description": "Etfis Isectors Post-Mpt Growth ETF"
	}, {
		"Symbol": "PMT",
		"Description": "PennyMac Mortgage Investment Trust"
	}, {
		"Symbol": "PMTS",
		"Description": "CPI Card Group Cmn"
	}, {
		"Symbol": "PMX",
		"Description": "PIMCO Municipal Income Fund III"
	}, {
		"Symbol": "PN",
		"Description": "Patriot National, Inc."
	}, {
		"Symbol": "PNBK",
		"Description": "Patriot Natl Bncp"
	}, {
		"Symbol": "PNC",
		"Description": "PNC Financial Services Group, Inc. "
	}, {
		"Symbol": "PNC.WS",
		"Description": "PNC Financial Services Group, Inc. "
	}, {
		"Symbol": "PNC^P",
		"Description": "PNC Financial Services Group, Inc. "
	}, {
		"Symbol": "PNC^Q",
		"Description": "PNC Financial Services Group, Inc. "
	}, {
		"Symbol": "PNF",
		"Description": "PIMCO New York Municipal Income Fund"
	}, {
		"Symbol": "PNFP",
		"Description": "Pinnacle Finl Ptnrs"
	}, {
		"Symbol": "PNI",
		"Description": "Pimco New York Municipal Income Fund II"
	}, {
		"Symbol": "PNK",
		"Description": "Pinnacle Entmt Cmn"
	}, {
		"Symbol": "PNM",
		"Description": "PNM Resources, Inc. Holding Co."
	}, {
		"Symbol": "PNNT",
		"Description": "Pennantpark Investme"
	}, {
		"Symbol": "PNQI",
		"Description": "PS Nasdaq Internet"
	}, {
		"Symbol": "PNR",
		"Description": "Pentair plc."
	}, {
		"Symbol": "PNRA",
		"Description": "Panera Bread A"
	}, {
		"Symbol": "PNRG",
		"Description": "Primeenergy Cp"
	}, {
		"Symbol": "PNTA",
		"Description": "PennantPark Investment Corporation"
	}, {
		"Symbol": "PNTR",
		"Description": "Pointer Telocation"
	}, {
		"Symbol": "PNW",
		"Description": "Pinnacle West Capital Corporation"
	}, {
		"Symbol": "PODD",
		"Description": "Insulet Corporation"
	}, {
		"Symbol": "POL",
		"Description": "PolyOne Corporation"
	}, {
		"Symbol": "POLA",
		"Description": "Polar Power Inc. Common Stock"
	}, {
		"Symbol": "POOL",
		"Description": "Pool Corporation"
	}, {
		"Symbol": "POPE",
		"Description": "Pope Resource Uts"
	}, {
		"Symbol": "POR",
		"Description": "Portland General Electric Company"
	}, {
		"Symbol": "POST",
		"Description": "Post Holdings, Inc."
	}, {
		"Symbol": "POT",
		"Description": "Potash Corporation of Saskatchewan Inc."
	}, {
		"Symbol": "POWI",
		"Description": "Power Integratn"
	}, {
		"Symbol": "POWL",
		"Description": "Powell Inds Inc"
	}, {
		"Symbol": "PPBI",
		"Description": "Pacific Premier Bncp"
	}, {
		"Symbol": "PPC",
		"Description": "Pilgrim's Pride Cmn"
	}, {
		"Symbol": "PPG",
		"Description": "PPG Industries, Inc."
	}, {
		"Symbol": "PPH",
		"Description": "Vaneck Vectors Pharm"
	}, {
		"Symbol": "PPHM",
		"Description": "Peregrine Pharma New"
	}, {
		"Symbol": "PPHMP",
		"Description": "Peregrine Pharmaceut"
	}, {
		"Symbol": "PPL",
		"Description": "PPL Corporation"
	}, {
		"Symbol": "PPP",
		"Description": "Primero Mining Corp"
	}, {
		"Symbol": "PPR",
		"Description": "Voya Prime Rate Trust"
	}, {
		"Symbol": "PPSI",
		"Description": "Pioneer Pwr Sol Cmn"
	}, {
		"Symbol": "PPT",
		"Description": "Putnam Premier Income Trust"
	}, {
		"Symbol": "PPX",
		"Description": "PPL Capital Funding, Inc."
	}, {
		"Symbol": "PQ",
		"Description": "Petroquest Energy Inc"
	}, {
		"Symbol": "PRA",
		"Description": "ProAssurance Corporation"
	}, {
		"Symbol": "PRAA",
		"Description": "Pra Group Inc Cmn"
	}, {
		"Symbol": "PRAH",
		"Description": "Pra Health Cmn Stk"
	}, {
		"Symbol": "PRAN",
		"Description": "Prana Bio Ltd Ads S1"
	}, {
		"Symbol": "PRCP",
		"Description": "Perceptron Inc"
	}, {
		"Symbol": "PRE^F",
		"Description": "PartnerRe Ltd."
	}, {
		"Symbol": "PRE^G",
		"Description": "PartnerRe Ltd."
	}, {
		"Symbol": "PRE^H",
		"Description": "PartnerRe Ltd."
	}, {
		"Symbol": "PRE^I",
		"Description": "PartnerRe Ltd."
	}, {
		"Symbol": "PRFT",
		"Description": "Perficient Inc"
	}, {
		"Symbol": "PRFZ",
		"Description": "US 1500 Powershares"
	}, {
		"Symbol": "PRGO",
		"Description": "Perrigo Company"
	}, {
		"Symbol": "PRGS",
		"Description": "Progress Software"
	}, {
		"Symbol": "PRGX",
		"Description": "Prgx Global Inc"
	}, {
		"Symbol": "PRH",
		"Description": "Prudential Financial, Inc."
	}, {
		"Symbol": "PRI",
		"Description": "Primerica, Inc."
	}, {
		"Symbol": "PRIM",
		"Description": "Primoris Services Cp"
	}, {
		"Symbol": "PRK",
		"Description": "Park National Corporation"
	}, {
		"Symbol": "PRKR",
		"Description": "Parkervision Inc"
	}, {
		"Symbol": "PRLB",
		"Description": "Proto Labs, Inc."
	}, {
		"Symbol": "PRMW",
		"Description": "Primo Water Corporat"
	}, {
		"Symbol": "PRN",
		"Description": "Powershares Dynamic Industrials"
	}, {
		"Symbol": "PRO",
		"Description": "PROS Holdings, Inc."
	}, {
		"Symbol": "PROV",
		"Description": "Provident Financial"
	}, {
		"Symbol": "PRPH",
		"Description": "Prophase Labs Inc"
	}, {
		"Symbol": "PRQR",
		"Description": "Proqr Therapeutics"
	}, {
		"Symbol": "PRSC",
		"Description": "Providence Svc Cp"
	}, {
		"Symbol": "PRSS",
		"Description": "Cafepress Inc"
	}, {
		"Symbol": "PRTA",
		"Description": "Prothena Corp"
	}, {
		"Symbol": "PRTK",
		"Description": "Paratek Pharma Inc"
	}, {
		"Symbol": "PRTO",
		"Description": "Proteon Thera Com ST"
	}, {
		"Symbol": "PRTS",
		"Description": "U.S. Auto Parts Netw"
	}, {
		"Symbol": "PRTY",
		"Description": "Party City Holdco Inc."
	}, {
		"Symbol": "PRU",
		"Description": "Prudential Financial, Inc."
	}, {
		"Symbol": "PRXL",
		"Description": "Parexel Intl Cp"
	}, {
		"Symbol": "PRZM",
		"Description": "Prism Tech Grp Cmn"
	}, {
		"Symbol": "PSA",
		"Description": "Public Storage"
	}, {
		"Symbol": "PSA^A",
		"Description": "Public Storage"
	}, {
		"Symbol": "PSA^B",
		"Description": "Public Storage"
	}, {
		"Symbol": "PSA^C",
		"Description": "Public Storage"
	}, {
		"Symbol": "PSA^D",
		"Description": "Public Storage"
	}, {
		"Symbol": "PSA^E",
		"Description": "Public Storage"
	}, {
		"Symbol": "PSA^S",
		"Description": "Public Storage"
	}, {
		"Symbol": "PSA^T",
		"Description": "Public Storage"
	}, {
		"Symbol": "PSA^U",
		"Description": "Public Storage"
	}, {
		"Symbol": "PSA^V",
		"Description": "Public Storage"
	}, {
		"Symbol": "PSA^W",
		"Description": "Public Storage"
	}, {
		"Symbol": "PSA^X",
		"Description": "Public Storage"
	}, {
		"Symbol": "PSA^Y",
		"Description": "Public Storage"
	}, {
		"Symbol": "PSA^Z",
		"Description": "Public Storage"
	}, {
		"Symbol": "PSAU",
		"Description": "Pshs Gbl Gld & Prc M"
	}, {
		"Symbol": "PSB",
		"Description": "PS Business Parks, Inc."
	}, {
		"Symbol": "PSB^T",
		"Description": "PS Business Parks, Inc."
	}, {
		"Symbol": "PSB^U",
		"Description": "PS Business Parks, Inc."
	}, {
		"Symbol": "PSB^V",
		"Description": "PS Business Parks, Inc."
	}, {
		"Symbol": "PSB^W",
		"Description": "PS Business Parks, Inc."
	}, {
		"Symbol": "PSC",
		"Description": "Prospect Resources Ltd"
	}, {
		"Symbol": "PSCC",
		"Description": "PS S&P Smallcap Consumer Staples"
	}, {
		"Symbol": "PSCD",
		"Description": "PS S&P Smallcap Consumer Discretionary"
	}, {
		"Symbol": "PSCE",
		"Description": "PS S&P Smallcap Energy"
	}, {
		"Symbol": "PSCF",
		"Description": "PS S&P Smallcap Financials"
	}, {
		"Symbol": "PSCH",
		"Description": "PS S&P Smallcap Health Care"
	}, {
		"Symbol": "PSCI",
		"Description": "PS S&P Smallcap Industrials"
	}, {
		"Symbol": "PSCM",
		"Description": "PS S&P Smallcap Materials"
	}, {
		"Symbol": "PSCT",
		"Description": "PS S&P Smallcap Information Technology"
	}, {
		"Symbol": "PSCU",
		"Description": "PS S&P Smallcap Utilities"
	}, {
		"Symbol": "PSDV",
		"Description": "Psivida Corp Com"
	}, {
		"Symbol": "PSEC",
		"Description": "Prospect Capital Cp"
	}, {
		"Symbol": "PSET",
		"Description": "Prncpl Prce Sttr ETF"
	}, {
		"Symbol": "PSF",
		"Description": "Cohen & Steers Select Preferred and Income Fund, Inc."
	}, {
		"Symbol": "PSIX",
		"Description": "Power Solutns Itl Cmn"
	}, {
		"Symbol": "PSL",
		"Description": "Dynamic Consumer Staples Powershares"
	}, {
		"Symbol": "PSMT",
		"Description": "Pricesmart Inc"
	}, {
		"Symbol": "PSO",
		"Description": "Pearson, Plc"
	}, {
		"Symbol": "PSTB",
		"Description": "Park Sterling Corpor"
	}, {
		"Symbol": "PSTG",
		"Description": "Pure Storage, Inc."
	}, {
		"Symbol": "PSTI",
		"Description": "Pluristem Therapeutc"
	}, {
		"Symbol": "PSX",
		"Description": "Phillips 66"
	}, {
		"Symbol": "PSXP",
		"Description": "Phillips 66 Partners LP"
	}, {
		"Symbol": "PTC",
		"Description": "Ptc Inc"
	}, {
		"Symbol": "PTCT",
		"Description": "Ptc Therapeutics Cmn"
	}, {
		"Symbol": "PTEN",
		"Description": "Patterson-Uti Energy"
	}, {
		"Symbol": "PTF",
		"Description": "Dynamic Technology Powershares"
	}, {
		"Symbol": "PTGX",
		"Description": "Protagonist Therapeutics Inc"
	}, {
		"Symbol": "PTH",
		"Description": "Dynamic Healthcare Powershares"
	}, {
		"Symbol": "PTHN",
		"Description": "Patheon N.V."
	}, {
		"Symbol": "PTI",
		"Description": "Proteostasis Ther Cmn"
	}, {
		"Symbol": "PTIE",
		"Description": "Pain Therapeutics"
	}, {
		"Symbol": "PTLA",
		"Description": "Portola Pharma Cmn"
	}, {
		"Symbol": "PTN",
		"Description": "Palatin Technologies, Inc."
	}, {
		"Symbol": "PTNR",
		"Description": "Partner Comm Co Ltd"
	}, {
		"Symbol": "PTR",
		"Description": "PetroChina Company Limited"
	}, {
		"Symbol": "PTSI",
		"Description": "P A M Transport Sv"
	}, {
		"Symbol": "PTX",
		"Description": "Pernix Theraptcs Cmn"
	}, {
		"Symbol": "PTXP",
		"Description": "Penntex Midstream"
	}, {
		"Symbol": "PTY",
		"Description": "Pimco Corporate & Income Opportunity Fund"
	}, {
		"Symbol": "PUB",
		"Description": "Peoples Utah Cmn Stk"
	}, {
		"Symbol": "PUI",
		"Description": "Dynamic Utilities Powershares"
	}, {
		"Symbol": "PUK",
		"Description": "Prudential Public Limited Company"
	}, {
		"Symbol": "PUK^",
		"Description": "Prudential Public Limited Company"
	}, {
		"Symbol": "PUK^A",
		"Description": "Prudential Public Limited Company"
	}, {
		"Symbol": "PULM",
		"Description": "Pulmatrix Inc"
	}, {
		"Symbol": "PVAC",
		"Description": "Penn Va Corp"
	}, {
		"Symbol": "PVBC",
		"Description": "Provident Bancorp CS"
	}, {
		"Symbol": "PVG",
		"Description": "Pretium Resources, Inc."
	}, {
		"Symbol": "PVH",
		"Description": "PVH Corp."
	}, {
		"Symbol": "PVTB",
		"Description": "Privatebancorp Inc"
	}, {
		"Symbol": "PVTBP",
		"Description": "Privatebncrp Trst IV"
	}, {
		"Symbol": "PVTD",
		"Description": "PrivateBancorp, Inc."
	}, {
		"Symbol": "PW",
		"Description": "Power REIT"
	}, {
		"Symbol": "PW^A",
		"Description": "Power REIT"
	}, {
		"Symbol": "PWE",
		"Description": "Penn West Petroleum Ltd"
	}, {
		"Symbol": "PWOD",
		"Description": "Penns Woods Bancorp"
	}, {
		"Symbol": "PWR",
		"Description": "Quanta Services, Inc."
	}, {
		"Symbol": "PX",
		"Description": "Praxair, Inc."
	}, {
		"Symbol": "PXD",
		"Description": "Pioneer Natural Resources Company"
	}, {
		"Symbol": "PXI",
		"Description": "Dynamic Energy Powershares"
	}, {
		"Symbol": "PXLW",
		"Description": "Pixelworks Inc"
	}, {
		"Symbol": "PXS",
		"Description": "Pyxis Tankers Cmn"
	}, {
		"Symbol": "PY",
		"Description": "Prncpl Shrhl Yld ETF"
	}, {
		"Symbol": "PYDS",
		"Description": "Payment Data Syst Cmn"
	}, {
		"Symbol": "PYN",
		"Description": "PIMCO New York Municipal Income Fund III"
	}, {
		"Symbol": "PYPL",
		"Description": "Paypal Holdings"
	}, {
		"Symbol": "PYS",
		"Description": "PPlus Trust"
	}, {
		"Symbol": "PYT",
		"Description": "PPlus Trust"
	}, {
		"Symbol": "PYZ",
		"Description": "Dynamic Basic Materials Powershares"
	}, {
		"Symbol": "PZC",
		"Description": "PIMCO California Municipal Income Fund III"
	}, {
		"Symbol": "PZE",
		"Description": "Petrobras Argentina S.A."
	}, {
		"Symbol": "PZG",
		"Description": "Paramount Gold Nevada Corp."
	}, {
		"Symbol": "PZN",
		"Description": "Pzena Investment Management Inc"
	}, {
		"Symbol": "PZRX",
		"Description": "Phaserx Inc Cmn"
	}, {
		"Symbol": "PZZA",
		"Description": "Papa John's Intl"
	}, {
		"Symbol": "Q",
		"Description": "Quintiles IMS Holdings, Inc."
	}, {
		"Symbol": "QABA",
		"Description": "Qtec First Trust ETF"
	}, {
		"Symbol": "QADA",
		"Description": "Qad Inc"
	}, {
		"Symbol": "QADB",
		"Description": "Q A D Inc Cl B"
	}, {
		"Symbol": "QAT",
		"Description": "Ishrs MSCI Qatar Cp"
	}, {
		"Symbol": "QBAK",
		"Description": "Qualstar Corp"
	}, {
		"Symbol": "QCLN",
		"Description": "First Trust Cl Edg Grn"
	}, {
		"Symbol": "QCOM",
		"Description": "Qualcomm Inc"
	}, {
		"Symbol": "QCP",
		"Description": "Quality Care Properties, Inc."
	}, {
		"Symbol": "QCRH",
		"Description": "Qcr Holdings Inc"
	}, {
		"Symbol": "QDEL",
		"Description": "Quidel Cp"
	}, {
		"Symbol": "QEP",
		"Description": "QEP Resources, Inc."
	}, {
		"Symbol": "QGEN",
		"Description": "Qiagen N.V."
	}, {
		"Symbol": "QHC",
		"Description": "Quorum Health Corporation"
	}, {
		"Symbol": "QINC",
		"Description": "First TR Rba Ql ETF"
	}, {
		"Symbol": "QIWI",
		"Description": "Qiwi Plc ADR"
	}, {
		"Symbol": "QLC",
		"Description": "Flxshrs US Ql Lg Cap"
	}, {
		"Symbol": "QLYS",
		"Description": "Qualys Inc"
	}, {
		"Symbol": "QNST",
		"Description": "Quinstreet Inc"
	}, {
		"Symbol": "QPAC",
		"Description": "Quinpario Acq2 Com"
	}, {
		"Symbol": "QPACU",
		"Description": "Quinpario Acq 2 Unit"
	}, {
		"Symbol": "QPACW",
		"Description": "Quinpario Acq2 Wrnt"
	}, {
		"Symbol": "QQEW",
		"Description": "First Trust Nasdaq-1"
	}, {
		"Symbol": "QQQ",
		"Description": "Powershares QQQ"
	}, {
		"Symbol": "QQQC",
		"Description": "Global X Nasdaq Chin"
	}, {
		"Symbol": "QQQX",
		"Description": "Nuveen Nasdaq 100"
	}, {
		"Symbol": "QQXT",
		"Description": "First Trust Ex Tech"
	}, {
		"Symbol": "QRHC",
		"Description": "Quest Resource Cmn"
	}, {
		"Symbol": "QRVO",
		"Description": "Qorvo Inc Cmn"
	}, {
		"Symbol": "QSII",
		"Description": "Quality Systems Inc"
	}, {
		"Symbol": "QSR",
		"Description": "Restaurant Brands International Inc."
	}, {
		"Symbol": "QTEC",
		"Description": "First Trust Nasdaq-1"
	}, {
		"Symbol": "QTM",
		"Description": "Quantum Corporation"
	}, {
		"Symbol": "QTNA",
		"Description": "Quantenna Communications Inc"
	}, {
		"Symbol": "QTNT",
		"Description": "Quotient Limited Ord"
	}, {
		"Symbol": "QTS",
		"Description": "QTS Realty Trust, Inc."
	}, {
		"Symbol": "QTWO",
		"Description": "Q2 Holdings, Inc."
	}, {
		"Symbol": "QUAD",
		"Description": "Quad Graphics, Inc"
	}, {
		"Symbol": "QUIK",
		"Description": "Quicklogic Corp"
	}, {
		"Symbol": "QUMU",
		"Description": "Qumu Corporation"
	}, {
		"Symbol": "QUNR",
		"Description": "Qunar Cayman Isl Ads"
	}, {
		"Symbol": "QUOT",
		"Description": "Quotient Technology Inc."
	}, {
		"Symbol": "QURE",
		"Description": "Uniqure N.V."
	}, {
		"Symbol": "QVCA",
		"Description": "Liberty Int Qvc Sr A"
	}, {
		"Symbol": "QVCB",
		"Description": "Liberty Int Qvc Sr B"
	}, {
		"Symbol": "QYLD",
		"Description": "Recon Nq100 Cv Call"
	}, {
		"Symbol": "R",
		"Description": "Ryder System, Inc."
	}, {
		"Symbol": "RA",
		"Description": "Brookfield Real Assets Income Fund Inc."
	}, {
		"Symbol": "RACE",
		"Description": "Ferrari N.V."
	}, {
		"Symbol": "RAD",
		"Description": "Rite Aid Corporation"
	}, {
		"Symbol": "RADA",
		"Description": "Rada Electr Inds Ltd"
	}, {
		"Symbol": "RAI",
		"Description": "Reynolds American Inc"
	}, {
		"Symbol": "RAIL",
		"Description": "Freightcar America"
	}, {
		"Symbol": "RAND",
		"Description": "Rand Capital Cp"
	}, {
		"Symbol": "RARE",
		"Description": "Ultragenyx Pharmaceu"
	}, {
		"Symbol": "RARX",
		"Description": "Ra Pharmaceuticals Inc"
	}, {
		"Symbol": "RAS",
		"Description": "RAIT Financial Trust"
	}, {
		"Symbol": "RAS^A",
		"Description": "RAIT Financial Trust"
	}, {
		"Symbol": "RAS^B",
		"Description": "RAIT Financial Trust"
	}, {
		"Symbol": "RAS^C",
		"Description": "RAIT Financial Trust"
	}, {
		"Symbol": "RATE",
		"Description": "Bankrate, Inc."
	}, {
		"Symbol": "RAVE",
		"Description": "Rave Restaurant Grp"
	}, {
		"Symbol": "RAVN",
		"Description": "Raven Industries Inc"
	}, {
		"Symbol": "RBA",
		"Description": "Ritchie Bros. Auctioneers Incorporated"
	}, {
		"Symbol": "RBC",
		"Description": "Regal Beloit Corporation"
	}, {
		"Symbol": "RBCAA",
		"Description": "Republic Bancorp Inc"
	}, {
		"Symbol": "RBCN",
		"Description": "Rubicon Technology"
	}, {
		"Symbol": "RBPAA",
		"Description": "Royal Bncsh of Pa"
	}, {
		"Symbol": "RBS",
		"Description": "Royal Bank Scotland plc "
	}, {
		"Symbol": "RBS^F",
		"Description": "Royal Bank Scotland plc "
	}, {
		"Symbol": "RBS^H",
		"Description": "Royal Bank Scotland plc "
	}, {
		"Symbol": "RBS^L",
		"Description": "Royal Bank Scotland plc "
	}, {
		"Symbol": "RBS^S",
		"Description": "Royal Bank Scotland plc "
	}, {
		"Symbol": "RCG",
		"Description": "RENN Fund, Inc."
	}, {
		"Symbol": "RCI",
		"Description": "Rogers Communication, Inc."
	}, {
		"Symbol": "RCII",
		"Description": "Rent-A-Center Inc"
	}, {
		"Symbol": "RCKY",
		"Description": "Rocky Brands Inc"
	}, {
		"Symbol": "RCL",
		"Description": "Royal Caribbean Cruises Ltd."
	}, {
		"Symbol": "RCMT",
		"Description": "R C M Tech Inc"
	}, {
		"Symbol": "RCON",
		"Description": "Recon Technology Lt"
	}, {
		"Symbol": "RCS",
		"Description": "PIMCO Strategic Income Fund, Inc."
	}, {
		"Symbol": "RDC",
		"Description": "Rowan Companies plc"
	}, {
		"Symbol": "RDCM",
		"Description": "Radcom Ltd"
	}, {
		"Symbol": "RDHL",
		"Description": "Redhill Biophrma ADR"
	}, {
		"Symbol": "RDI",
		"Description": "Reading Intl Cl A"
	}, {
		"Symbol": "RDIB",
		"Description": "Reading Intl Cl B"
	}, {
		"Symbol": "RDN",
		"Description": "Radian Group Inc."
	}, {
		"Symbol": "RDNT",
		"Description": "Radnet Inc"
	}, {
		"Symbol": "RDS.A",
		"Description": "Royal Dutch Shell PLC"
	}, {
		"Symbol": "RDS.B",
		"Description": "Royal Dutch Shell PLC"
	}, {
		"Symbol": "RDUS",
		"Description": "Radius Health Cmn"
	}, {
		"Symbol": "RDVY",
		"Description": "First Trust ETF Vi"
	}, {
		"Symbol": "RDWR",
		"Description": "Radware Ltd"
	}, {
		"Symbol": "RDY",
		"Description": "Dr. Reddys Laboratories Ltd"
	}, {
		"Symbol": "RE",
		"Description": "Everest Re Group, Ltd."
	}, {
		"Symbol": "RECN",
		"Description": "Resources Connect"
	}, {
		"Symbol": "REED",
		"Description": "Reeds, Inc."
	}, {
		"Symbol": "REFR",
		"Description": "Research Frontiers"
	}, {
		"Symbol": "REG",
		"Description": "Regency Centers Corporation"
	}, {
		"Symbol": "REG^F.CL",
		"Description": "Regency Centers Corporation"
	}, {
		"Symbol": "REG^G",
		"Description": "Regency Centers Corporation"
	}, {
		"Symbol": "REGI",
		"Description": "Renewable Energy"
	}, {
		"Symbol": "REGN",
		"Description": "Regeneron Pharmaceutical"
	}, {
		"Symbol": "REI",
		"Description": "Ring Energy, Inc."
	}, {
		"Symbol": "REIS",
		"Description": "Reis Inc"
	}, {
		"Symbol": "RELL",
		"Description": "Richardson Electrncs"
	}, {
		"Symbol": "RELV",
		"Description": "Reliv Intl Inc"
	}, {
		"Symbol": "RELX",
		"Description": "RELX PLC"
	}, {
		"Symbol": "RELY",
		"Description": "Real Industry Cmn"
	}, {
		"Symbol": "REN",
		"Description": "Resolute Energy Corporation"
	}, {
		"Symbol": "RENN",
		"Description": "Renren Inc."
	}, {
		"Symbol": "RENX",
		"Description": "RELX N.V."
	}, {
		"Symbol": "REPH",
		"Description": "Recro Pharma Inc"
	}, {
		"Symbol": "RES",
		"Description": "RPC, Inc."
	}, {
		"Symbol": "RESI",
		"Description": "Altisource Residential Corporation"
	}, {
		"Symbol": "RESN",
		"Description": "Resonant Inc Cmn Stk"
	}, {
		"Symbol": "RETA",
		"Description": "Reata Pharma Cla  Cmn"
	}, {
		"Symbol": "REV",
		"Description": "Revlon, Inc."
	}, {
		"Symbol": "REVG",
		"Description": "REV Group, Inc."
	}, {
		"Symbol": "REX",
		"Description": "REX American Resources Corporation"
	}, {
		"Symbol": "REXR",
		"Description": "Rexford Industrial Realty, Inc."
	}, {
		"Symbol": "REXR^A",
		"Description": "Rexford Industrial Realty, Inc."
	}, {
		"Symbol": "REXX",
		"Description": "Rex Energy Corporati"
	}, {
		"Symbol": "RF",
		"Description": "Regions Financial Corporation"
	}, {
		"Symbol": "RF^A",
		"Description": "Regions Financial Corporation"
	}, {
		"Symbol": "RF^B",
		"Description": "Regions Financial Corporation"
	}, {
		"Symbol": "RFAP",
		"Description": "Fst Tst Rvrfrt Dy Ap"
	}, {
		"Symbol": "RFDI",
		"Description": "First Trust Rvfrnt Ddi"
	}, {
		"Symbol": "RFEM",
		"Description": "First Trust Riverfront Dynamic"
	}, {
		"Symbol": "RFEU",
		"Description": "First Trust Rvrfr Dy EU"
	}, {
		"Symbol": "RFI",
		"Description": "Cohen & Steers Total Return Realty Fund, Inc."
	}, {
		"Symbol": "RFIL",
		"Description": "RF Industries Ltd"
	}, {
		"Symbol": "RFP",
		"Description": "Resolute Forest Products Inc."
	}, {
		"Symbol": "RFT",
		"Description": "RAIT Financial Trust"
	}, {
		"Symbol": "RFTA",
		"Description": "RAIT Financial Trust"
	}, {
		"Symbol": "RGA",
		"Description": "Reinsurance Group of America, Incorporated"
	}, {
		"Symbol": "RGC",
		"Description": "Regal Entertainment Group"
	}, {
		"Symbol": "RGCO",
		"Description": "Rgc Resources Inc"
	}, {
		"Symbol": "RGEN",
		"Description": "Repligen Cp"
	}, {
		"Symbol": "RGLD",
		"Description": "Royal Gold Inc"
	}, {
		"Symbol": "RGLS",
		"Description": "Regulus Therapeutics"
	}, {
		"Symbol": "RGNX",
		"Description": "Regenxbio Inc Cmn"
	}, {
		"Symbol": "RGR",
		"Description": "Sturm, Ruger & Company, Inc."
	}, {
		"Symbol": "RGS",
		"Description": "Regis Corporation"
	}, {
		"Symbol": "RGSE",
		"Description": "Real Goods Solar Inc"
	}, {
		"Symbol": "RGT",
		"Description": "Royce Global Value Trust, Inc."
	}, {
		"Symbol": "RH",
		"Description": "RH"
	}, {
		"Symbol": "RHI",
		"Description": "Robert Half International Inc."
	}, {
		"Symbol": "RHP",
		"Description": "Ryman Hospitality Properties, Inc."
	}, {
		"Symbol": "RHT",
		"Description": "Red Hat, Inc."
	}, {
		"Symbol": "RIBT",
		"Description": "Ricebran Technologie"
	}, {
		"Symbol": "RIBTW",
		"Description": "Ricebrantech Warrant"
	}, {
		"Symbol": "RIC",
		"Description": "Richmont Mines, Inc."
	}, {
		"Symbol": "RICE",
		"Description": "Rice Energy Inc."
	}, {
		"Symbol": "RICK",
		"Description": "RCI Hospitality Hold"
	}, {
		"Symbol": "RIF",
		"Description": "RMR Real Estate Income Fund"
	}, {
		"Symbol": "RIG",
		"Description": "Transocean Ltd."
	}, {
		"Symbol": "RIGL",
		"Description": "Rigel Pharmaceutical"
	}, {
		"Symbol": "RILY",
		"Description": "B. Riley Financl Cmn"
	}, {
		"Symbol": "RILYL",
		"Description": "B. Riley Financial Inc"
	}, {
		"Symbol": "RIO",
		"Description": "Rio Tinto Plc"
	}, {
		"Symbol": "RIV",
		"Description": "RiverNorth Opportunities Fund, Inc."
	}, {
		"Symbol": "RJD.CL",
		"Description": "Raymond James Financial, Inc."
	}, {
		"Symbol": "RJF",
		"Description": "Raymond James Financial, Inc."
	}, {
		"Symbol": "RKDA",
		"Description": "Arcadia Bio Cmn Stk"
	}, {
		"Symbol": "RL",
		"Description": "Ralph Lauren Corporation"
	}, {
		"Symbol": "RLGT",
		"Description": "Radiant Logistics, Inc."
	}, {
		"Symbol": "RLGT^A",
		"Description": "Radiant Logistics, Inc."
	}, {
		"Symbol": "RLGY",
		"Description": "Realogy Holdings Corp."
	}, {
		"Symbol": "RLH",
		"Description": "Red Lion Hotels Corporation"
	}, {
		"Symbol": "RLI",
		"Description": "RLI Corp."
	}, {
		"Symbol": "RLJ",
		"Description": "RLJ Lodging Trust"
	}, {
		"Symbol": "RLJE",
		"Description": "Rlj Entertainment"
	}, {
		"Symbol": "RLOG",
		"Description": "Rand Logistics Inc"
	}, {
		"Symbol": "RM",
		"Description": "Regional Management Corp."
	}, {
		"Symbol": "RMAX",
		"Description": "RE/MAX Holdings, Inc."
	}, {
		"Symbol": "RMBS",
		"Description": "Rambus Inc"
	}, {
		"Symbol": "RMCF",
		"Description": "Rocky Mt Chocolate"
	}, {
		"Symbol": "RMD",
		"Description": "ResMed Inc."
	}, {
		"Symbol": "RMGN",
		"Description": "Rmg Networks Holding"
	}, {
		"Symbol": "RMP",
		"Description": "Rice Midstream Partners LP"
	}, {
		"Symbol": "RMR",
		"Description": " Rmr Grp A Cmn"
	}, {
		"Symbol": "RMT",
		"Description": "Royce Micro-Cap Trust, Inc."
	}, {
		"Symbol": "RMTI",
		"Description": "Rockwell Medical In"
	}, {
		"Symbol": "RNDB",
		"Description": "Randolph Bancorp Inc"
	}, {
		"Symbol": "RNET",
		"Description": "Rignet Inc"
	}, {
		"Symbol": "RNG",
		"Description": "Ringcentral, Inc."
	}, {
		"Symbol": "RNN",
		"Description": "Rexahn Pharmaceuticals, Inc."
	}, {
		"Symbol": "RNP",
		"Description": "Cohen & Steers Reit and Preferred Income Fund Inc"
	}, {
		"Symbol": "RNR",
		"Description": "RenaissanceRe Holdings Ltd."
	}, {
		"Symbol": "RNR^C",
		"Description": "RenaissanceRe Holdings Ltd."
	}, {
		"Symbol": "RNR^E",
		"Description": "RenaissanceRe Holdings Ltd."
	}, {
		"Symbol": "RNST",
		"Description": "Renasant Corporation"
	}, {
		"Symbol": "RNVA",
		"Description": "Rennova Health Inc"
	}, {
		"Symbol": "RNVAZ",
		"Description": "Rennova Health Inc Wt"
	}, {
		"Symbol": "RNWK",
		"Description": "Realnetworks Inc"
	}, {
		"Symbol": "ROBO",
		"Description": "Robo Glb Rob"
	}, {
		"Symbol": "ROCK",
		"Description": "Gibraltar Ind Inc"
	}, {
		"Symbol": "ROG",
		"Description": "Rogers Corporation"
	}, {
		"Symbol": "ROIA",
		"Description": "Radio One Inc"
	}, {
		"Symbol": "ROIAK",
		"Description": "Radio One Inc Cl D"
	}, {
		"Symbol": "ROIC",
		"Description": "Retail Opp Invts Cp"
	}, {
		"Symbol": "ROK",
		"Description": "Rockwell Automation, Inc."
	}, {
		"Symbol": "ROKA",
		"Description": "Roka Bioscience Inc"
	}, {
		"Symbol": "ROL",
		"Description": "Rollins, Inc."
	}, {
		"Symbol": "ROLL",
		"Description": "RBC Bearings Incorp"
	}, {
		"Symbol": "ROP",
		"Description": "Roper Technologies, Inc."
	}, {
		"Symbol": "ROSG",
		"Description": "Rosetta Genomics Ltd"
	}, {
		"Symbol": "ROST",
		"Description": "Ross Stores Inc"
	}, {
		"Symbol": "ROX",
		"Description": "Castle Brands, Inc."
	}, {
		"Symbol": "ROYT",
		"Description": "Pacific Coast Oil Trust"
	}, {
		"Symbol": "RP",
		"Description": "Realpage Inc"
	}, {
		"Symbol": "RPAI",
		"Description": "Retail Properties of America, Inc."
	}, {
		"Symbol": "RPAI^A",
		"Description": "Retail Properties of America, Inc."
	}, {
		"Symbol": "RPD",
		"Description": "Rapid7 Inc Cmn Stk"
	}, {
		"Symbol": "RPM",
		"Description": "RPM International Inc."
	}, {
		"Symbol": "RPRX",
		"Description": "Repros Therapeutics"
	}, {
		"Symbol": "RPT",
		"Description": "Ramco-Gershenson Properties Trust"
	}, {
		"Symbol": "RPT^D",
		"Description": "Ramco-Gershenson Properties Trust"
	}, {
		"Symbol": "RPXC",
		"Description": "Rpx Corporation"
	}, {
		"Symbol": "RQI",
		"Description": "Cohen & Steers Quality Income Realty Fund Inc"
	}, {
		"Symbol": "RRC",
		"Description": "Range Resources Corporation"
	}, {
		"Symbol": "RRD",
		"Description": "R.R. Donnelley & Sons Company"
	}, {
		"Symbol": "RRGB",
		"Description": "Red Robin Gourm"
	}, {
		"Symbol": "RRR",
		"Description": "Rd Rock Rsrts Cla Cmn"
	}, {
		"Symbol": "RRTS",
		"Description": "Roadrunner Transportation Systems, Inc"
	}, {
		"Symbol": "RS",
		"Description": "Reliance Steel & Aluminum Co."
	}, {
		"Symbol": "RSG",
		"Description": "Republic Services, Inc."
	}, {
		"Symbol": "RSO",
		"Description": "Resource Capital Corp."
	}, {
		"Symbol": "RSO^A",
		"Description": "Resource Capital Corp."
	}, {
		"Symbol": "RSO^B",
		"Description": "Resource Capital Corp."
	}, {
		"Symbol": "RSO^C",
		"Description": "Resource Capital Corp."
	}, {
		"Symbol": "RSPP",
		"Description": "RSP Permian, Inc."
	}, {
		"Symbol": "RST",
		"Description": "Rosetta Stone"
	}, {
		"Symbol": "RSYS",
		"Description": "Radisys Cp"
	}, {
		"Symbol": "RT",
		"Description": "Ruby Tuesday, Inc."
	}, {
		"Symbol": "RTEC",
		"Description": "Rudolph Technologies, Inc."
	}, {
		"Symbol": "RTIX",
		"Description": "Rti Surgical Inc"
	}, {
		"Symbol": "RTK",
		"Description": "Rentech Cmn Stk"
	}, {
		"Symbol": "RTN",
		"Description": "Raytheon Company"
	}, {
		"Symbol": "RTNB",
		"Description": "Root9B Technologies Inc"
	}, {
		"Symbol": "RTRX",
		"Description": "Retrophin Inc Cmn"
	}, {
		"Symbol": "RTTR",
		"Description": "Ritter Pharmac. Com"
	}, {
		"Symbol": "RUBI",
		"Description": " Rubicon Project, Inc."
	}, {
		"Symbol": "RUN",
		"Description": "Sunrun Inc Cmn Stk"
	}, {
		"Symbol": "RUSHA",
		"Description": "Rush Entpr Cl A"
	}, {
		"Symbol": "RUSHB",
		"Description": "Rush Entpr Cl B"
	}, {
		"Symbol": "RUTH",
		"Description": "Ruth's Hospitality"
	}, {
		"Symbol": "RVEN",
		"Description": "Reven Housing REIT"
	}, {
		"Symbol": "RVLT",
		"Description": "Revolution Lgt Tc"
	}, {
		"Symbol": "RVNC",
		"Description": "Revance Therapeutics"
	}, {
		"Symbol": "RVP",
		"Description": "Retractable Technologies, Inc."
	}, {
		"Symbol": "RVSB",
		"Description": "Riverview Bancorp"
	}, {
		"Symbol": "RVT",
		"Description": "Royce Value Trust, Inc."
	}, {
		"Symbol": "RWC",
		"Description": "RELM Wireless Corporation"
	}, {
		"Symbol": "RWLK",
		"Description": "Rewalk Roboti Ord Sh"
	}, {
		"Symbol": "RWT",
		"Description": "Redwood Trust, Inc."
	}, {
		"Symbol": "RXDX",
		"Description": "Ignyta Inc Cmn"
	}, {
		"Symbol": "RXII",
		"Description": "Rxi Pharmaceuticals"
	}, {
		"Symbol": "RXIIW",
		"Description": "Rxi Pharmaceuticals Corporation Warrants Expirin"
	}, {
		"Symbol": "RXN",
		"Description": "Rexnord Corporation"
	}, {
		"Symbol": "RXN^A",
		"Description": "Rexnord Corporation"
	}, {
		"Symbol": "RY",
		"Description": "Royal Bank Of Canada"
	}, {
		"Symbol": "RY^S",
		"Description": "Royal Bank Of Canada"
	}, {
		"Symbol": "RY^T",
		"Description": "Royal Bank Of Canada"
	}, {
		"Symbol": "RYAAY",
		"Description": "Ryanair Hldgs Plc"
	}, {
		"Symbol": "RYAM",
		"Description": "Rayonier Advanced Materials Inc."
	}, {
		"Symbol": "RYAM^A",
		"Description": "Rayonier Advanced Materials Inc."
	}, {
		"Symbol": "RYI",
		"Description": "Ryerson Holding Corporation"
	}, {
		"Symbol": "RYN",
		"Description": "Rayonier Inc."
	}, {
		"Symbol": "RZA",
		"Description": "Reinsurance Group of America, Incorporated"
	}, {
		"Symbol": "RZB",
		"Description": "Reinsurance Group of America, Incorporated"
	}, {
		"Symbol": "S",
		"Description": "Sprint Corporation"
	}, {
		"Symbol": "SA",
		"Description": "Seabridge Gold, Inc."
	}, {
		"Symbol": "SAB",
		"Description": "Saratoga Investment Corp"
	}, {
		"Symbol": "SABR",
		"Description": "Sabre Corporation Cmn"
	}, {
		"Symbol": "SACH",
		"Description": "Sachem Capital Corp."
	}, {
		"Symbol": "SAEX",
		"Description": "Saexploration Hldgs"
	}, {
		"Symbol": "SAFM",
		"Description": "Sanderson Farms In"
	}, {
		"Symbol": "SAFT",
		"Description": "Safety Ins Group Inc"
	}, {
		"Symbol": "SAGE",
		"Description": "Sage Therapeutic Com"
	}, {
		"Symbol": "SAH",
		"Description": "Sonic Automotive, Inc."
	}, {
		"Symbol": "SAIA",
		"Description": "Saia Inc"
	}, {
		"Symbol": "SAIC",
		"Description": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION"
	}, {
		"Symbol": "SAJA",
		"Description": "Sajan Cmn Stk"
	}, {
		"Symbol": "SAL",
		"Description": "Salisbury Bancorp"
	}, {
		"Symbol": "SALE",
		"Description": "Retailmenot Inc"
	}, {
		"Symbol": "SALM",
		"Description": "Salem Media Grp Inc"
	}, {
		"Symbol": "SALT",
		"Description": "Scorpio Bulkers Inc."
	}, {
		"Symbol": "SAM",
		"Description": "Boston Beer Company, Inc. "
	}, {
		"Symbol": "SAMG",
		"Description": "Silvercrest Ast Cm A"
	}, {
		"Symbol": "SAN",
		"Description": "Banco Santander, S.A."
	}, {
		"Symbol": "SAN^A",
		"Description": "Banco Santander, S.A."
	}, {
		"Symbol": "SAN^B",
		"Description": "Banco Santander, S.A."
	}, {
		"Symbol": "SAN^C",
		"Description": "Banco Santander, S.A."
	}, {
		"Symbol": "SAN^I",
		"Description": "Banco Santander, S.A."
	}, {
		"Symbol": "SAND",
		"Description": "Sandstorm Gold Ltd"
	}, {
		"Symbol": "SANM",
		"Description": "Sanmina Corp"
	}, {
		"Symbol": "SANW",
		"Description": "S&W Seed Company"
	}, {
		"Symbol": "SAP",
		"Description": "SAP SE"
	}, {
		"Symbol": "SAR",
		"Description": "Saratoga Investment Corp"
	}, {
		"Symbol": "SASR",
		"Description": "Sandy Spring Bancorp"
	}, {
		"Symbol": "SATS",
		"Description": "Echostar Corp"
	}, {
		"Symbol": "SAUC",
		"Description": "Diversified Rstrt HD"
	}, {
		"Symbol": "SAVE",
		"Description": "Spirit Airlines Inc"
	}, {
		"Symbol": "SB",
		"Description": "Safe Bulkers, Inc"
	}, {
		"Symbol": "SB^B",
		"Description": "Safe Bulkers, Inc"
	}, {
		"Symbol": "SB^C",
		"Description": "Safe Bulkers, Inc"
	}, {
		"Symbol": "SB^D",
		"Description": "Safe Bulkers, Inc"
	}, {
		"Symbol": "SBAC",
		"Description": "SBA Communications"
	}, {
		"Symbol": "SBBP",
		"Description": "Strongbridge Bio Ord"
	}, {
		"Symbol": "SBBX",
		"Description": "Sussex Bancorp"
	}, {
		"Symbol": "SBCF",
		"Description": "Seacoast Banking Cp"
	}, {
		"Symbol": "SBCP",
		"Description": "Sunshine Bancorp Cmn"
	}, {
		"Symbol": "SBFG",
		"Description": "Sb Financial Group"
	}, {
		"Symbol": "SBFGP",
		"Description": "Sb Fin Grp Dep Shs"
	}, {
		"Symbol": "SBGI",
		"Description": "Sinclair Brdcst A"
	}, {
		"Symbol": "SBGL",
		"Description": "Sibanye Gold Limited"
	}, {
		"Symbol": "SBH",
		"Description": "Sally Beauty Holdings, Inc."
	}, {
		"Symbol": "SBI",
		"Description": "Western Asset Intermediate Muni Fund Inc"
	}, {
		"Symbol": "SBLK",
		"Description": "Star Bulk Carriers"
	}, {
		"Symbol": "SBLKL",
		"Description": "Strblk 8% Sr Nt 2019"
	}, {
		"Symbol": "SBNA",
		"Description": "Scorpio Tankers Inc."
	}, {
		"Symbol": "SBNB",
		"Description": "Scorpio Tankers Inc."
	}, {
		"Symbol": "SBNY",
		"Description": "Signature Bank"
	}, {
		"Symbol": "SBOT",
		"Description": "Stellar Biotch Cm ST"
	}, {
		"Symbol": "SBPH",
		"Description": "Spring Bank Ph CS"
	}, {
		"Symbol": "SBR",
		"Description": "Sabine Royalty Trust"
	}, {
		"Symbol": "SBRA",
		"Description": "Sabra REIT"
	}, {
		"Symbol": "SBRAP",
		"Description": "Sabra Hlthcare REIT"
	}, {
		"Symbol": "SBS",
		"Description": "Companhia de saneamento Basico Do Estado De Sao Paulo - Sabesp"
	}, {
		"Symbol": "SBSA",
		"Description": "Spanish Brdcstng"
	}, {
		"Symbol": "SBSI",
		"Description": "Southside Bancshares"
	}, {
		"Symbol": "SBUX",
		"Description": "Starbucks Corp"
	}, {
		"Symbol": "SBY",
		"Description": "Silver Bay Realty Trust Corp."
	}, {
		"Symbol": "SC",
		"Description": "Santander Consumer USA Holdings Inc."
	}, {
		"Symbol": "SCAC",
		"Description": "Saban Capital Acquisition Corp"
	}, {
		"Symbol": "SCACU",
		"Description": "Saban Capital Acquisition Corp. Un"
	}, {
		"Symbol": "SCACW",
		"Description": "Saban Capital Acquisition Corp. Warrants"
	}, {
		"Symbol": "SCAI",
		"Description": "Surgical Care Affili"
	}, {
		"Symbol": "SCCO",
		"Description": "Southern Copper Corporation"
	}, {
		"Symbol": "SCD",
		"Description": "LMP Capital and Income Fund Inc."
	}, {
		"Symbol": "SCE^B",
		"Description": "Southern California Edison Company"
	}, {
		"Symbol": "SCE^C",
		"Description": "Southern California Edison Company"
	}, {
		"Symbol": "SCE^D",
		"Description": "Southern California Edison Company"
	}, {
		"Symbol": "SCE^E",
		"Description": "Southern California Edison Company"
	}, {
		"Symbol": "SCE^F",
		"Description": "Southern California Edison Company"
	}, {
		"Symbol": "SCE^G",
		"Description": "Southern California Edison Company"
	}, {
		"Symbol": "SCE^H",
		"Description": "Southern California Edison Company"
	}, {
		"Symbol": "SCE^J",
		"Description": "Southern California Edison Company"
	}, {
		"Symbol": "SCE^K",
		"Description": "Southern California Edison Company"
	}, {
		"Symbol": "SCG",
		"Description": "Scana Corporation"
	}, {
		"Symbol": "SCHL",
		"Description": "Scholastic Cp"
	}, {
		"Symbol": "SCHN",
		"Description": "Schnitzer Steel A"
	}, {
		"Symbol": "SCHW",
		"Description": " Charles Schwab Corporation"
	}, {
		"Symbol": "SCHW^B",
		"Description": " Charles Schwab Corporation"
	}, {
		"Symbol": "SCHW^C",
		"Description": " Charles Schwab Corporation"
	}, {
		"Symbol": "SCHW^D",
		"Description": " Charles Schwab Corporation"
	}, {
		"Symbol": "SCI",
		"Description": "Service Corporation International"
	}, {
		"Symbol": "SCKT",
		"Description": "Socket Mobile"
	}, {
		"Symbol": "SCL",
		"Description": "Stepan Company"
	}, {
		"Symbol": "SCLN",
		"Description": "Sciclone Pharmaceut"
	}, {
		"Symbol": "SCM",
		"Description": "Stellus Capital Investment Corporation"
	}, {
		"Symbol": "SCMP",
		"Description": "Sucampo Pharma Inc"
	}, {
		"Symbol": "SCNB",
		"Description": "Suffolk Bancorp"
	}, {
		"Symbol": "SCON",
		"Description": "Superconductor Tech"
	}, {
		"Symbol": "SCOR",
		"Description": "Comscore Inc"
	}, {
		"Symbol": "SCQ",
		"Description": "Stellus Capital Investment Corporation"
	}, {
		"Symbol": "SCS",
		"Description": "Steelcase Inc."
	}, {
		"Symbol": "SCSC",
		"Description": "Scansource Inc"
	}, {
		"Symbol": "SCSS",
		"Description": "Select Comfort Cp"
	}, {
		"Symbol": "SCVL",
		"Description": "Shoe Carnival Inc"
	}, {
		"Symbol": "SCWX",
		"Description": "Secureworks Corp CS"
	}, {
		"Symbol": "SCX",
		"Description": "L.S. Starrett Company "
	}, {
		"Symbol": "SCYX",
		"Description": "Scynexis Inc Cmn"
	}, {
		"Symbol": "SCZ",
		"Description": "Ishares MSCI EAFE Sm"
	}, {
		"Symbol": "SD",
		"Description": "SandRidge Energy, Inc."
	}, {
		"Symbol": "SDLP",
		"Description": "Seadrill Partners LLC"
	}, {
		"Symbol": "SDPI",
		"Description": "Superior Drilling Products, Inc."
	}, {
		"Symbol": "SDR",
		"Description": "SandRidge Mississippian Trust II"
	}, {
		"Symbol": "SDRL",
		"Description": "Seadrill Limited"
	}, {
		"Symbol": "SDT",
		"Description": "SandRidge Mississippian Trust I"
	}, {
		"Symbol": "SE",
		"Description": "Spectra Energy Corp"
	}, {
		"Symbol": "SEAC",
		"Description": "Sea Change Intl In"
	}, {
		"Symbol": "SEAS",
		"Description": "SeaWorld Entertainment, Inc."
	}, {
		"Symbol": "SEB",
		"Description": "Seaboard Corporation"
	}, {
		"Symbol": "SEDG",
		"Description": "Solaredge Tech Cmn"
	}, {
		"Symbol": "SEE",
		"Description": "Sealed Air Corporation"
	}, {
		"Symbol": "SEED",
		"Description": "Origin Agritech Limi"
	}, {
		"Symbol": "SEIC",
		"Description": "Sei Investments Co"
	}, {
		"Symbol": "SELB",
		"Description": "Selecta Biosciences"
	}, {
		"Symbol": "SELF",
		"Description": "Global Self Storage"
	}, {
		"Symbol": "SEM",
		"Description": "Select Medical Holdings Corporation"
	}, {
		"Symbol": "SEMG",
		"Description": "Semgroup Corporation"
	}, {
		"Symbol": "SENEA",
		"Description": "Seneca Foods Cp A"
	}, {
		"Symbol": "SENEB",
		"Description": "Seneca Foods Cp B"
	}, {
		"Symbol": "SENS",
		"Description": "Senseonics Holdings, Inc."
	}, {
		"Symbol": "SEP",
		"Description": "Spectra Energy Partners, LP"
	}, {
		"Symbol": "SERV",
		"Description": "ServiceMaster Global Holdings, Inc."
	}, {
		"Symbol": "SEV",
		"Description": "Sevcon Inc"
	}, {
		"Symbol": "SF",
		"Description": "Stifel Financial Corporation"
	}, {
		"Symbol": "SF^A",
		"Description": "Stifel Financial Corporation"
	}, {
		"Symbol": "SFBC",
		"Description": "Sound Financial Cmn"
	}, {
		"Symbol": "SFBS",
		"Description": "Servisfirst Bancs Cmn"
	}, {
		"Symbol": "SFE",
		"Description": "Safeguard Scientifics, Inc."
	}, {
		"Symbol": "SFL",
		"Description": "Ship Finance International Limited"
	}, {
		"Symbol": "SFLY",
		"Description": "Shutterfly Inc"
	}, {
		"Symbol": "SFM",
		"Description": "Sprouts Farmers Mark"
	}, {
		"Symbol": "SFNC",
		"Description": "Simmons First Natl"
	}, {
		"Symbol": "SFR",
		"Description": "Colony Starwood Homes"
	}, {
		"Symbol": "SFS",
		"Description": "Smart"
	}, {
		"Symbol": "SFST",
		"Description": "Southern First Bancs"
	}, {
		"Symbol": "SFUN",
		"Description": "Fanf Holdings Limited"
	}, {
		"Symbol": "SGA",
		"Description": "Saga Communications, Inc."
	}, {
		"Symbol": "SGB",
		"Description": "Southwest Georgia Financial Corporation"
	}, {
		"Symbol": "SGBK",
		"Description": "Stonegate Bk Cmn Stk"
	}, {
		"Symbol": "SGC",
		"Description": "Superior Uniform Grp"
	}, {
		"Symbol": "SGEN",
		"Description": "Seattle Genetics Inc"
	}, {
		"Symbol": "SGF",
		"Description": "Aberdeen Singapore Fund, Inc."
	}, {
		"Symbol": "SGM",
		"Description": "Stonegate Mortgage Corporation"
	}, {
		"Symbol": "SGMA",
		"Description": "Sigmatron Intl Inc"
	}, {
		"Symbol": "SGMO",
		"Description": "Sangamo Therapeutics"
	}, {
		"Symbol": "SGMS",
		"Description": "Scientific Games"
	}, {
		"Symbol": "SGNL",
		"Description": "Signal Genetics Cmn"
	}, {
		"Symbol": "SGOC",
		"Description": "Sgoco Group Ltd"
	}, {
		"Symbol": "SGQI",
		"Description": "Janus Detroit Street Trust Janus Sg Global Quali"
	}, {
		"Symbol": "SGRP",
		"Description": "Spar Group Inc"
	}, {
		"Symbol": "SGRY",
		"Description": "Surgery Partners CS"
	}, {
		"Symbol": "SGU",
		"Description": "Star Gas Partners, L.P."
	}, {
		"Symbol": "SGY",
		"Description": "Stone Energy Corporation"
	}, {
		"Symbol": "SGYP",
		"Description": "Synergy Pharma Cmn"
	}, {
		"Symbol": "SGZA",
		"Description": "Selective Insurance Group, Inc."
	}, {
		"Symbol": "SHAK",
		"Description": "Shake Shack, Inc."
	}, {
		"Symbol": "SHBI",
		"Description": "Shore Bancshares Inc"
	}, {
		"Symbol": "SHEN",
		"Description": "Shenandoah Telecom"
	}, {
		"Symbol": "SHG",
		"Description": "Shinhan Financial Group Co Ltd"
	}, {
		"Symbol": "SHI",
		"Description": "SINOPEC Shangai Petrochemical Company, Ltd."
	}, {
		"Symbol": "SHIP",
		"Description": "Seanergy Maritime Hl"
	}, {
		"Symbol": "SHIPW",
		"Description": "Seanergy Maritime Holdings Corp Class A Warrants"
	}, {
		"Symbol": "SHLD",
		"Description": "Sears Hldgs Corp"
	}, {
		"Symbol": "SHLDW",
		"Description": "Sears Holdings C Wt"
	}, {
		"Symbol": "SHLM",
		"Description": "Schulman A Inc"
	}, {
		"Symbol": "SHLO",
		"Description": "Shiloh Inds Inc"
	}, {
		"Symbol": "SHLX",
		"Description": "Shell Midstream Partners, L.P."
	}, {
		"Symbol": "SHO",
		"Description": "Sunstone Hotel Investors, Inc."
	}, {
		"Symbol": "SHO^E",
		"Description": "Sunstone Hotel Investors, Inc."
	}, {
		"Symbol": "SHO^F",
		"Description": "Sunstone Hotel Investors, Inc."
	}, {
		"Symbol": "SHOO",
		"Description": "Steven Maddens Ltd"
	}, {
		"Symbol": "SHOP",
		"Description": "Shopify Inc."
	}, {
		"Symbol": "SHOR",
		"Description": "Shoretel Inc"
	}, {
		"Symbol": "SHOS",
		"Description": "Sears Hometown"
	}, {
		"Symbol": "SHPG",
		"Description": "Shire Plc Ads"
	}, {
		"Symbol": "SHSP",
		"Description": "Sharpspring Inc"
	}, {
		"Symbol": "SHW",
		"Description": "Sherwin-Williams Company "
	}, {
		"Symbol": "SID",
		"Description": "National Steel Company"
	}, {
		"Symbol": "SIEB",
		"Description": "Siebert Fin Cp"
	}, {
		"Symbol": "SIEN",
		"Description": "Sientra Inc Cmn"
	}, {
		"Symbol": "SIF",
		"Description": "SIFCO Industries, Inc."
	}, {
		"Symbol": "SIFI",
		"Description": "Si Financial Grp MD"
	}, {
		"Symbol": "SIFY",
		"Description": "Sify Techs Ltd Ads"
	}, {
		"Symbol": "SIG",
		"Description": "Signet Jewelers Limited"
	}, {
		"Symbol": "SIGI",
		"Description": "Selective Ins Group"
	}, {
		"Symbol": "SIGM",
		"Description": "Sigma Designs Inc"
	}, {
		"Symbol": "SILC",
		"Description": "Silicom Limited"
	}, {
		"Symbol": "SIM",
		"Description": "Grupo Simec, S.A. de C.V."
	}, {
		"Symbol": "SIMO",
		"Description": "Silicon Motion Techn"
	}, {
		"Symbol": "SINA",
		"Description": "Sina Corporation"
	}, {
		"Symbol": "SINO",
		"Description": "Sino-Global Shipping"
	}, {
		"Symbol": "SIR",
		"Description": "Select Income REIT Common Share"
	}, {
		"Symbol": "SIRI",
		"Description": "Sirius XM Holdings I"
	}, {
		"Symbol": "SITE",
		"Description": "SiteOne Landscape Supply, Inc."
	}, {
		"Symbol": "SITO",
		"Description": "Sito Mobile Cmn"
	}, {
		"Symbol": "SIVB",
		"Description": "Svb Financial Grp"
	}, {
		"Symbol": "SIVBO",
		"Description": "Svb Capital II"
	}, {
		"Symbol": "SIX",
		"Description": "Six Flags Entertainment Corporation New"
	}, {
		"Symbol": "SJI",
		"Description": "South Jersey Industries, Inc."
	}, {
		"Symbol": "SJM",
		"Description": "J.M. Smucker Company "
	}, {
		"Symbol": "SJR",
		"Description": "Shaw Communications Inc."
	}, {
		"Symbol": "SJT",
		"Description": "San Juan Basin Royalty Trust"
	}, {
		"Symbol": "SJW",
		"Description": "SJW Group"
	}, {
		"Symbol": "SKIS",
		"Description": "Peak Resorts Cmn"
	}, {
		"Symbol": "SKLN",
		"Description": "Skyline Medical Cmn"
	}, {
		"Symbol": "SKM",
		"Description": "SK Telecom Co., Ltd."
	}, {
		"Symbol": "SKOR",
		"Description": "Flxshrs Crscr US Cor"
	}, {
		"Symbol": "SKT",
		"Description": "Tanger Factory Outlet Centers, Inc."
	}, {
		"Symbol": "SKX",
		"Description": "Skechers U.S.A., Inc."
	}, {
		"Symbol": "SKY",
		"Description": "Skyline Corporation"
	}, {
		"Symbol": "SKYS",
		"Description": "Sky Solar Hold Ads"
	}, {
		"Symbol": "SKYW",
		"Description": "Skywest Inc"
	}, {
		"Symbol": "SKYY",
		"Description": "First Trust ISE Clou"
	}, {
		"Symbol": "SLAB",
		"Description": "Silicon Labs Inc"
	}, {
		"Symbol": "SLB",
		"Description": "Schlumberger N.V."
	}, {
		"Symbol": "SLCA",
		"Description": "U.S. Silica Holdings, Inc."
	}, {
		"Symbol": "SLCT",
		"Description": "Select Bancorp Inc"
	}, {
		"Symbol": "SLD",
		"Description": "Sutherland Asset Management Corporation"
	}, {
		"Symbol": "SLF",
		"Description": "Sun Life Financial Inc."
	}, {
		"Symbol": "SLG",
		"Description": "SL Green Realty Corporation"
	}, {
		"Symbol": "SLG^I",
		"Description": "SL Green Realty Corporation"
	}, {
		"Symbol": "SLGN",
		"Description": "Silgan Holdings"
	}, {
		"Symbol": "SLIM",
		"Description": " Obesity ETF"
	}, {
		"Symbol": "SLM",
		"Description": "SLM Corporation"
	}, {
		"Symbol": "SLMAP",
		"Description": "SLM Cp Srs A Pfd"
	}, {
		"Symbol": "SLMBP",
		"Description": "SLM Cp Srs B Pfd"
	}, {
		"Symbol": "SLP",
		"Description": "Simulations Plus Inc"
	}, {
		"Symbol": "SLQD",
		"Description": "Ishares 0-5 Ig Corp"
	}, {
		"Symbol": "SLRA",
		"Description": "Solar Capital Ltd."
	}, {
		"Symbol": "SLRC",
		"Description": "Solar Capital Cmn"
	}, {
		"Symbol": "SLTB",
		"Description": "Scorpio Bulkers Inc."
	}, {
		"Symbol": "SLVO",
		"Description": "CS X-Links Silver Sh"
	}, {
		"Symbol": "SLW",
		"Description": "Silver Wheaton Corp"
	}, {
		"Symbol": "SM",
		"Description": "SM Energy Company"
	}, {
		"Symbol": "SMBC",
		"Description": "Southern Mo Bancorp"
	}, {
		"Symbol": "SMBK",
		"Description": "Smartfinancial Cm ST"
	}, {
		"Symbol": "SMCI",
		"Description": "Super Micro Computer"
	}, {
		"Symbol": "SMCP",
		"Description": "Alphamark Actmg Smcp"
	}, {
		"Symbol": "SMED",
		"Description": "Sharps Compliance"
	}, {
		"Symbol": "SMFG",
		"Description": "Sumitomo Mitsui Financial Group Inc"
	}, {
		"Symbol": "SMG",
		"Description": "Scotts Miracle-Gro Company "
	}, {
		"Symbol": "SMI",
		"Description": "Semiconductor  Manufacturing International Corporation"
	}, {
		"Symbol": "SMIT",
		"Description": "Schmitt Inds Inc"
	}, {
		"Symbol": "SMLP",
		"Description": "Summit Midstream Partners, LP"
	}, {
		"Symbol": "SMM",
		"Description": "Salient Midstream & MLP Fund"
	}, {
		"Symbol": "SMMF",
		"Description": "Summit Financial Gp"
	}, {
		"Symbol": "SMMT",
		"Description": "Summit Therapeu ADR"
	}, {
		"Symbol": "SMP",
		"Description": "Standard Motor Products, Inc."
	}, {
		"Symbol": "SMRT",
		"Description": "Stein Mart Inc"
	}, {
		"Symbol": "SMSI",
		"Description": "Smith Micro Software"
	}, {
		"Symbol": "SMTC",
		"Description": "Semtech Corp"
	}, {
		"Symbol": "SMTX",
		"Description": "Smtc Corp"
	}, {
		"Symbol": "SN",
		"Description": "Sanchez Energy Corporation"
	}, {
		"Symbol": "SNA",
		"Description": "Snap-On Incorporated"
	}, {
		"Symbol": "SNAK",
		"Description": "Inventure Foods Inc"
	}, {
		"Symbol": "SNBC",
		"Description": "Sun Bancorp Inc"
	}, {
		"Symbol": "SNC",
		"Description": "State Natl Co Cmn"
	}, {
		"Symbol": "SNCR",
		"Description": "Synchronoss Technolo"
	}, {
		"Symbol": "SND",
		"Description": "Smart Sand Inc"
	}, {
		"Symbol": "SNDE",
		"Description": "Sundance Energy Australia Ltd."
	}, {
		"Symbol": "SNDX",
		"Description": "Syndax Pharma Cmn"
	}, {
		"Symbol": "SNE",
		"Description": "Sony Corp Ord"
	}, {
		"Symbol": "SNES",
		"Description": "Senestech Inc."
	}, {
		"Symbol": "SNFCA",
		"Description": "Security Natl Finl"
	}, {
		"Symbol": "SNGX",
		"Description": "Soligenix Inc"
	}, {
		"Symbol": "SNGXW",
		"Description": "Soligenix Inc. Warrant"
	}, {
		"Symbol": "SNH",
		"Description": "Senior Housing Properties Trust"
	}, {
		"Symbol": "SNHNI",
		"Description": "Senior Housing Properties Trust"
	}, {
		"Symbol": "SNHNL",
		"Description": "Senior Housing Properties Trust"
	}, {
		"Symbol": "SNHY",
		"Description": "Sun Hydraulics Cor"
	}, {
		"Symbol": "SNI",
		"Description": "Scripps Ntwrks Int A"
	}, {
		"Symbol": "SNLN",
		"Description": "Pyxis/Iboxx Senior Loan ETF"
	}, {
		"Symbol": "SNMX",
		"Description": "Senomyx Inc"
	}, {
		"Symbol": "SNN",
		"Description": "Smith & Nephew SNATS, Inc."
	}, {
		"Symbol": "SNOA",
		"Description": "Sonoma Pharmaceuticals Inc."
	}, {
		"Symbol": "SNOAW",
		"Description": "Sonoma Pharmaceuticals Inc."
	}, {
		"Symbol": "SNOW",
		"Description": "Intrawest Resorts Holdings, Inc."
	}, {
		"Symbol": "SNP",
		"Description": "China Petroleum & Chemical Corporation"
	}, {
		"Symbol": "SNPS",
		"Description": "Synopsys Inc"
	}, {
		"Symbol": "SNR",
		"Description": "New Senior Investment Group Inc."
	}, {
		"Symbol": "SNSR",
		"Description": "Global X Internet of Things Thematic ETF"
	}, {
		"Symbol": "SNSS",
		"Description": "Sunesis Pharmaceutic"
	}, {
		"Symbol": "SNV",
		"Description": "Synovus Financial Corp."
	}, {
		"Symbol": "SNV^C",
		"Description": "Synovus Financial Corp."
	}, {
		"Symbol": "SNX",
		"Description": "Synnex Corporation"
	}, {
		"Symbol": "SNY",
		"Description": "Sanofi"
	}, {
		"Symbol": "SO",
		"Description": "Southern Company "
	}, {
		"Symbol": "SOCL",
		"Description": "Glbl X Social Med ETF"
	}, {
		"Symbol": "SODA",
		"Description": "Sodastream Int Ltd"
	}, {
		"Symbol": "SOFO",
		"Description": "Sonic Foundry Inc"
	}, {
		"Symbol": "SOHO",
		"Description": "Sotherly Hotels Cmn"
	}, {
		"Symbol": "SOHOB",
		"Description": "Sotherly Hotels Inc. 8.0% Series B Cumulative Re"
	}, {
		"Symbol": "SOHOM",
		"Description": "Sotherly Htl 7 Sr Nt"
	}, {
		"Symbol": "SOHU",
		"Description": "Sohu.Com Inc"
	}, {
		"Symbol": "SOJA",
		"Description": "Southern Company "
	}, {
		"Symbol": "SOJB",
		"Description": "Southern Company "
	}, {
		"Symbol": "SOL",
		"Description": "Renesola Ltd."
	}, {
		"Symbol": "SON",
		"Description": "Sonoco Products Company"
	}, {
		"Symbol": "SONA",
		"Description": "Southern National Bk"
	}, {
		"Symbol": "SONC",
		"Description": "Sonic Cp"
	}, {
		"Symbol": "SONS",
		"Description": "Sonus Networks Inc"
	}, {
		"Symbol": "SOR",
		"Description": "Source Capital, Inc."
	}, {
		"Symbol": "SORL",
		"Description": "Sorl Auto Parts Inc"
	}, {
		"Symbol": "SOV^C",
		"Description": "Santander Holdings USA, Inc."
	}, {
		"Symbol": "SOXX",
		"Description": "Ishares PHLX SC ETF"
	}, {
		"Symbol": "SP",
		"Description": "SP Plus Corporation"
	}, {
		"Symbol": "SPA",
		"Description": "Sparton Corporation"
	}, {
		"Symbol": "SPAN",
		"Description": "Span America Med S"
	}, {
		"Symbol": "SPAR",
		"Description": "Spartan Motors Inc"
	}, {
		"Symbol": "SPB",
		"Description": "Spectrum Brands Holdings, Inc."
	}, {
		"Symbol": "SPCB",
		"Description": "Supercom Ltd"
	}, {
		"Symbol": "SPE",
		"Description": "Special Opportunities Fund Inc."
	}, {
		"Symbol": "SPE^B",
		"Description": "Special Opportunities Fund Inc."
	}, {
		"Symbol": "SPEX",
		"Description": "Spherix Inc"
	}, {
		"Symbol": "SPG",
		"Description": "Simon Property Group, Inc."
	}, {
		"Symbol": "SPG^J",
		"Description": "Simon Property Group, Inc."
	}, {
		"Symbol": "SPGI",
		"Description": "S&P Global Inc."
	}, {
		"Symbol": "SPH",
		"Description": "Suburban Propane Partners, L.P."
	}, {
		"Symbol": "SPHS",
		"Description": "Sophiris Bio Cmn"
	}, {
		"Symbol": "SPI",
		"Description": "Spi Energy Co Ads"
	}, {
		"Symbol": "SPIL",
		"Description": "Siliconware Pr Ads"
	}, {
		"Symbol": "SPKE",
		"Description": "Spark Energy Cmn"
	}, {
		"Symbol": "SPLK",
		"Description": "Splunk Inc"
	}, {
		"Symbol": "SPLP",
		"Description": "Steel Partners Holdings LP"
	}, {
		"Symbol": "SPLS",
		"Description": "Staples Inc"
	}, {
		"Symbol": "SPN",
		"Description": "Superior Energy Services, Inc."
	}, {
		"Symbol": "SPNC",
		"Description": "Spectranetics Cp T"
	}, {
		"Symbol": "SPNE",
		"Description": "Seaspine Holdings Cmn"
	}, {
		"Symbol": "SPNS",
		"Description": "Sapiens Intl Cp Nv"
	}, {
		"Symbol": "SPOK",
		"Description": "Spok Holdings Inc"
	}, {
		"Symbol": "SPP",
		"Description": "Sanchez Production Partners LP"
	}, {
		"Symbol": "SPPI",
		"Description": "Spectrum Pharma Inc"
	}, {
		"Symbol": "SPR",
		"Description": "Spirit Aerosystems Holdings, Inc."
	}, {
		"Symbol": "SPRT",
		"Description": "Support.Com Inc"
	}, {
		"Symbol": "SPSC",
		"Description": "Sps Commerce Inc"
	}, {
		"Symbol": "SPTN",
		"Description": "Spartannash Company"
	}, {
		"Symbol": "SPU",
		"Description": "Skypeople Fruit Juic"
	}, {
		"Symbol": "SPWH",
		"Description": "Sportsman's Wareh Cmn"
	}, {
		"Symbol": "SPWR",
		"Description": "Sunpower Corporation"
	}, {
		"Symbol": "SPXC",
		"Description": "SPX Corporation"
	}, {
		"Symbol": "SPXX",
		"Description": "Nuveen S&P 500 Dynamic Overwrite Fund"
	}, {
		"Symbol": "SQ",
		"Description": "Square, Inc."
	}, {
		"Symbol": "SQBG",
		"Description": "Sequential Brands Cmn"
	}, {
		"Symbol": "SQM",
		"Description": "Sociedad Quimica y Minera S.A."
	}, {
		"Symbol": "SQNS",
		"Description": "Sequans Communications S.A."
	}, {
		"Symbol": "SQQQ",
		"Description": "Ultrapro Short QQQ Proshares"
	}, {
		"Symbol": "SR",
		"Description": "Spire Inc."
	}, {
		"Symbol": "SRAX",
		"Description": "Social Reality Inc"
	}, {
		"Symbol": "SRC",
		"Description": "Spirit Realty Capital, Inc."
	}, {
		"Symbol": "SRCE",
		"Description": "1St Source Corp"
	}, {
		"Symbol": "SRCL",
		"Description": "Stericycle Inc"
	}, {
		"Symbol": "SRCLP",
		"Description": "Stericycle Inc Deps"
	}, {
		"Symbol": "SRDX",
		"Description": "Surmodics Inc"
	}, {
		"Symbol": "SRE",
		"Description": "Sempra Energy"
	}, {
		"Symbol": "SRET",
		"Description": "Global X Superdivide"
	}, {
		"Symbol": "SREV",
		"Description": "Servicesrce Intl Inc"
	}, {
		"Symbol": "SRF",
		"Description": "Cushing Energy Income Fund "
	}, {
		"Symbol": "SRG",
		"Description": "Seritage Growth Properties"
	}, {
		"Symbol": "SRI",
		"Description": "Stoneridge, Inc."
	}, {
		"Symbol": "SRLP",
		"Description": "Sprague Resources LP"
	}, {
		"Symbol": "SRNE",
		"Description": "Sorrento Therpt Cmn"
	}, {
		"Symbol": "SRPT",
		"Description": "Sarepta Therapeutics"
	}, {
		"Symbol": "SRRA",
		"Description": "Sierra Oncology Inc."
	}, {
		"Symbol": "SRSC",
		"Description": "Sears Canada Inc"
	}, {
		"Symbol": "SRT",
		"Description": "StarTek, Inc."
	}, {
		"Symbol": "SRTS",
		"Description": "Sensus Healthcare Inc Cmn"
	}, {
		"Symbol": "SRTSW",
		"Description": "Sensus Healthcare Inc Wt"
	}, {
		"Symbol": "SRV",
		"Description": " Cushing MLP Total Return Fund"
	}, {
		"Symbol": "SSB",
		"Description": "South State Cp Cmn"
	}, {
		"Symbol": "SSBI",
		"Description": "Summit State Bank"
	}, {
		"Symbol": "SSD",
		"Description": "Simpson Manufacturing Company, Inc."
	}, {
		"Symbol": "SSFN",
		"Description": "Stewardship"
	}, {
		"Symbol": "SSH",
		"Description": "Sunshine Heart Inc"
	}, {
		"Symbol": "SSI",
		"Description": "Stage Stores, Inc."
	}, {
		"Symbol": "SSKN",
		"Description": "Strata Skin Scien Cmn"
	}, {
		"Symbol": "SSL",
		"Description": "Sasol Ltd."
	}, {
		"Symbol": "SSN",
		"Description": "Samson Oil & Gas Limited"
	}, {
		"Symbol": "SSNC",
		"Description": "SS&C Technologies"
	}, {
		"Symbol": "SSNI",
		"Description": "Silver Spring Networks, Inc."
	}, {
		"Symbol": "SSP",
		"Description": "E.W. Scripps Company "
	}, {
		"Symbol": "SSRI",
		"Description": "Silver Stand Res"
	}, {
		"Symbol": "SSTK",
		"Description": "Shutterstock, Inc."
	}, {
		"Symbol": "SSW",
		"Description": "Seaspan Corporation"
	}, {
		"Symbol": "SSW^D",
		"Description": "Seaspan Corporation"
	}, {
		"Symbol": "SSW^E",
		"Description": "Seaspan Corporation"
	}, {
		"Symbol": "SSW^G",
		"Description": "Seaspan Corporation"
	}, {
		"Symbol": "SSW^H",
		"Description": "Seaspan Corporation"
	}, {
		"Symbol": "SSWN",
		"Description": "Seaspan Corporation"
	}, {
		"Symbol": "SSY",
		"Description": "SunLink Health Systems, Inc."
	}, {
		"Symbol": "SSYS",
		"Description": "Stratasys Ltd"
	}, {
		"Symbol": "ST",
		"Description": "Sensata Technologies Holding N.V."
	}, {
		"Symbol": "STAA",
		"Description": "Staar Surgical Co"
	}, {
		"Symbol": "STAF",
		"Description": "Staffing 360"
	}, {
		"Symbol": "STAG",
		"Description": "Stag Industrial, Inc."
	}, {
		"Symbol": "STAG^B",
		"Description": "Stag Industrial, Inc."
	}, {
		"Symbol": "STAG^C",
		"Description": "Stag Industrial, Inc."
	}, {
		"Symbol": "STAR",
		"Description": "iStar Financial Inc."
	}, {
		"Symbol": "STAR^D",
		"Description": "iStar Financial Inc."
	}, {
		"Symbol": "STAR^E",
		"Description": "iStar Financial Inc."
	}, {
		"Symbol": "STAR^F",
		"Description": "iStar Financial Inc."
	}, {
		"Symbol": "STAR^G",
		"Description": "iStar Financial Inc."
	}, {
		"Symbol": "STAR^I",
		"Description": "iStar Financial Inc."
	}, {
		"Symbol": "STAY",
		"Description": "Extended Stay America, Inc."
	}, {
		"Symbol": "STB",
		"Description": "Student Trnspt Inc"
	}, {
		"Symbol": "STBA",
		"Description": "S&T Bancorp Inc"
	}, {
		"Symbol": "STBZ",
		"Description": "State Bank Finl Corp"
	}, {
		"Symbol": "STC",
		"Description": "Stewart Information Services Corporation"
	}, {
		"Symbol": "STDY",
		"Description": "Steadymed Ltd Ord Sh"
	}, {
		"Symbol": "STE",
		"Description": "STERIS plc"
	}, {
		"Symbol": "STFC",
		"Description": "State Auto Finl Corp"
	}, {
		"Symbol": "STI",
		"Description": "SunTrust Banks, Inc."
	}, {
		"Symbol": "STI.WS.A",
		"Description": "SunTrust Banks, Inc."
	}, {
		"Symbol": "STI.WS.B",
		"Description": "SunTrust Banks, Inc."
	}, {
		"Symbol": "STI^A",
		"Description": "SunTrust Banks, Inc."
	}, {
		"Symbol": "STI^E",
		"Description": "SunTrust Banks, Inc."
	}, {
		"Symbol": "STK",
		"Description": "Columbia Seligman Premium Technology Growth Fund, Inc"
	}, {
		"Symbol": "STKL",
		"Description": "Sunopta Inc"
	}, {
		"Symbol": "STKS",
		"Description": " One Group Cmn"
	}, {
		"Symbol": "STL",
		"Description": "Sterling Bancorp"
	}, {
		"Symbol": "STLD",
		"Description": "Steel Dynamics Inc"
	}, {
		"Symbol": "STLR",
		"Description": "Stellar Acquisition III Inc"
	}, {
		"Symbol": "STLRU",
		"Description": "Stellar Acquisition III Inc"
	}, {
		"Symbol": "STLRW",
		"Description": "Stellar Acquisition III Inc. Warrants"
	}, {
		"Symbol": "STLY",
		"Description": "Stanley Furniture"
	}, {
		"Symbol": "STM",
		"Description": "STMicroelectronics N.V."
	}, {
		"Symbol": "STML",
		"Description": "Stemline Therapeutic"
	}, {
		"Symbol": "STMP",
		"Description": "Stamps.Com Inc"
	}, {
		"Symbol": "STN",
		"Description": "SPDR MSCI Europe Energy UCITS ETF"
	}, {
		"Symbol": "STNG",
		"Description": "Scorpio Tankers Inc."
	}, {
		"Symbol": "STO",
		"Description": "Statoil ASA"
	}, {
		"Symbol": "STON",
		"Description": "StoneMor Partners L.P."
	}, {
		"Symbol": "STOR",
		"Description": "STORE Capital Corporation"
	}, {
		"Symbol": "STPP",
		"Description": "Ipath Steepener"
	}, {
		"Symbol": "STRA",
		"Description": "Strayer Education"
	}, {
		"Symbol": "STRL",
		"Description": "Sterling Constructio"
	}, {
		"Symbol": "STRM",
		"Description": "Streamline Health So"
	}, {
		"Symbol": "STRP",
		"Description": "Straight Path Communications Inc."
	}, {
		"Symbol": "STRS",
		"Description": "Stratus Pptys Inc"
	}, {
		"Symbol": "STRT",
		"Description": "Strattec Security"
	}, {
		"Symbol": "STS",
		"Description": "Supreme Industries, Inc."
	}, {
		"Symbol": "STT",
		"Description": "State Street Corporation"
	}, {
		"Symbol": "STT^C",
		"Description": "State Street Corporation"
	}, {
		"Symbol": "STT^D",
		"Description": "State Street Corporation"
	}, {
		"Symbol": "STT^E",
		"Description": "State Street Corporation"
	}, {
		"Symbol": "STT^G",
		"Description": "State Street Corporation"
	}, {
		"Symbol": "STV",
		"Description": "China Digital TV Holding Co., Ltd."
	}, {
		"Symbol": "STWD",
		"Description": "STARWOOD PROPERTY TRUST, INC."
	}, {
		"Symbol": "STX",
		"Description": "Seagate Tech Ord Shs"
	}, {
		"Symbol": "STZ",
		"Description": "Constellation Brands Inc"
	}, {
		"Symbol": "STZ.B",
		"Description": "Constellation Brands Inc"
	}, {
		"Symbol": "SU",
		"Description": "Suncor Energy  Inc."
	}, {
		"Symbol": "SUI",
		"Description": "Sun Communities, Inc."
	}, {
		"Symbol": "SUI^A",
		"Description": "Sun Communities, Inc."
	}, {
		"Symbol": "SUM",
		"Description": "Summit Materials, Inc."
	}, {
		"Symbol": "SUMR",
		"Description": "Summer Infant Inc"
	}, {
		"Symbol": "SUN",
		"Description": "Sunoco LP"
	}, {
		"Symbol": "SUNS",
		"Description": "Solar Senior Capital"
	}, {
		"Symbol": "SUNW",
		"Description": "Sunworks Inc Cmn"
	}, {
		"Symbol": "SUP",
		"Description": "Superior Industries International, Inc."
	}, {
		"Symbol": "SUPN",
		"Description": "Supernus Pharm"
	}, {
		"Symbol": "SUPV",
		"Description": "Grupo Supervielle S.A."
	}, {
		"Symbol": "SVA",
		"Description": "Sinovac Biotech Ltd"
	}, {
		"Symbol": "SVBI",
		"Description": "Severn Bancorp Inc"
	}, {
		"Symbol": "SVT",
		"Description": "Servotronics, Inc."
	}, {
		"Symbol": "SVU",
		"Description": "SuperValu Inc."
	}, {
		"Symbol": "SVVC",
		"Description": "Firsthand Technology"
	}, {
		"Symbol": "SWC",
		"Description": "Stillwater Mining Company"
	}, {
		"Symbol": "SWFT",
		"Description": "Swift Transportation Company"
	}, {
		"Symbol": "SWIN",
		"Description": "Alps ETF Trust Alps/Dorsey Wright Sector Momentu"
	}, {
		"Symbol": "SWIR",
		"Description": "Sierra Wireless In"
	}, {
		"Symbol": "SWJ",
		"Description": "Stanley Black & Decker, Inc."
	}, {
		"Symbol": "SWK",
		"Description": "Stanley Black & Decker, Inc."
	}, {
		"Symbol": "SWKS",
		"Description": "Skyworks Solutions"
	}, {
		"Symbol": "SWM",
		"Description": "Schweitzer-Mauduit International, Inc."
	}, {
		"Symbol": "SWN",
		"Description": "Southwestern Energy Company"
	}, {
		"Symbol": "SWNC",
		"Description": "Southwestern Energy Company"
	}, {
		"Symbol": "SWX",
		"Description": "Southwest Gas Holdings, Inc."
	}, {
		"Symbol": "SWZ",
		"Description": "Swiss Helvetia Fund, Inc. "
	}, {
		"Symbol": "SXC",
		"Description": "SunCoke Energy, Inc."
	}, {
		"Symbol": "SXCP",
		"Description": "SunCoke Energy Partners, L.P."
	}, {
		"Symbol": "SXE",
		"Description": "Southcross Energy Partners, L.P."
	}, {
		"Symbol": "SXI",
		"Description": "Standex International Corporation"
	}, {
		"Symbol": "SXL",
		"Description": "Sunoco Logistics Partners LP"
	}, {
		"Symbol": "SXT",
		"Description": "Sensient Technologies Corporation"
	}, {
		"Symbol": "SYBT",
		"Description": "Stock Yards Bancorp"
	}, {
		"Symbol": "SYF",
		"Description": "Synchrony Financial"
	}, {
		"Symbol": "SYK",
		"Description": "Stryker Corporation"
	}, {
		"Symbol": "SYKE",
		"Description": "Sykes Enterprises"
	}, {
		"Symbol": "SYMC",
		"Description": "Symantec Corporation"
	}, {
		"Symbol": "SYMX",
		"Description": "Synthesis Energy Sys"
	}, {
		"Symbol": "SYN",
		"Description": "Synthetic Biologics, Inc"
	}, {
		"Symbol": "SYNA",
		"Description": "Synaptics Inc"
	}, {
		"Symbol": "SYNC",
		"Description": "Synacor Inc"
	}, {
		"Symbol": "SYNL",
		"Description": "Synalloy Cp"
	}, {
		"Symbol": "SYNT",
		"Description": "Syntel Inc"
	}, {
		"Symbol": "SYPR",
		"Description": "Sypris Solutions"
	}, {
		"Symbol": "SYRG",
		"Description": "Synergy Resources Corporation"
	}, {
		"Symbol": "SYRS",
		"Description": "Syros Pharmaceuticals"
	}, {
		"Symbol": "SYRX",
		"Description": "Sysorex Global Cmn"
	}, {
		"Symbol": "SYT",
		"Description": "Syngenta AG"
	}, {
		"Symbol": "SYUT",
		"Description": "Synutra Internationa"
	}, {
		"Symbol": "SYX",
		"Description": "Systemax Inc."
	}, {
		"Symbol": "SYY",
		"Description": "Sysco Corporation"
	}, {
		"Symbol": "SZC",
		"Description": "Cushing Renaissance Fund "
	}, {
		"Symbol": "T",
		"Description": "AT&T Inc."
	}, {
		"Symbol": "TA",
		"Description": "Travelcenters of America Llc"
	}, {
		"Symbol": "TAC",
		"Description": "TransAlta Corporation"
	}, {
		"Symbol": "TACO",
		"Description": "Del Taco Rest Cmn"
	}, {
		"Symbol": "TACOW",
		"Description": "Del Taco Rest Wts"
	}, {
		"Symbol": "TACT",
		"Description": "Transact Tech Inc"
	}, {
		"Symbol": "TAHO",
		"Description": "Tahoe Resources, Inc."
	}, {
		"Symbol": "TAIT",
		"Description": "Taitron Components"
	}, {
		"Symbol": "TAL",
		"Description": "TAL Education Group"
	}, {
		"Symbol": "TALL",
		"Description": "Royal Bank of Canada ETN Linked S&P 500 Trend Al"
	}, {
		"Symbol": "TANH",
		"Description": "Tantech Holdings Cmn"
	}, {
		"Symbol": "TANNI",
		"Description": "Travelcenters of America Llc"
	}, {
		"Symbol": "TANNL",
		"Description": "Travelcenters of America Llc"
	}, {
		"Symbol": "TANNZ",
		"Description": "Travelcenters of America Llc"
	}, {
		"Symbol": "TAP",
		"Description": "Molson Coors Brewing  Company"
	}, {
		"Symbol": "TAP.A",
		"Description": "Molson Coors Brewing  Company"
	}, {
		"Symbol": "TAPR",
		"Description": "Barclays Plc ETN"
	}, {
		"Symbol": "TARO",
		"Description": "Taro Pharmaceutical Industries Ltd."
	}, {
		"Symbol": "TASR",
		"Description": "Taser Intl Inc"
	}, {
		"Symbol": "TAST",
		"Description": "Carrols Rstrnt Group"
	}, {
		"Symbol": "TAT",
		"Description": "Transatlantic Petroleum Ltd"
	}, {
		"Symbol": "TATT",
		"Description": "T A T Tech Ltd"
	}, {
		"Symbol": "TAX",
		"Description": "Liberty Tax Cl A Cmn"
	}, {
		"Symbol": "TAYD",
		"Description": "Taylor Devices Inc"
	}, {
		"Symbol": "TBBK",
		"Description": " Bancorp Inc"
	}, {
		"Symbol": "TBI",
		"Description": "TrueBlue, Inc."
	}, {
		"Symbol": "TBIO",
		"Description": "Transgenomic Cmn"
	}, {
		"Symbol": "TBK",
		"Description": "Triumph Bancorp Cmn"
	}, {
		"Symbol": "TBNK",
		"Description": "Territorial Bancorp"
	}, {
		"Symbol": "TBPH",
		"Description": "Theravance Bio Ord"
	}, {
		"Symbol": "TCAP",
		"Description": "Triangle Capital Corporation"
	}, {
		"Symbol": "TCB",
		"Description": "TCF Financial Corporation"
	}, {
		"Symbol": "TCB.WS",
		"Description": "TCF Financial Corporation"
	}, {
		"Symbol": "TCB^B",
		"Description": "TCF Financial Corporation"
	}, {
		"Symbol": "TCB^C",
		"Description": "TCF Financial Corporation"
	}, {
		"Symbol": "TCBI",
		"Description": "Texas Capital Bncsh"
	}, {
		"Symbol": "TCBIL",
		"Description": "Texas Cap 6.5 Sr NTS"
	}, {
		"Symbol": "TCBIP",
		"Description": "Texas Capital"
	}, {
		"Symbol": "TCBK",
		"Description": "Trico Bancshares"
	}, {
		"Symbol": "TCCA",
		"Description": "Triangle Capital Corporation"
	}, {
		"Symbol": "TCCB",
		"Description": "Triangle Capital Corporation"
	}, {
		"Symbol": "TCCO",
		"Description": "Technical Commctn Cp"
	}, {
		"Symbol": "TCFC",
		"Description": " Community Fin Cp"
	}, {
		"Symbol": "TCI",
		"Description": "Transcontinental Realty Investors, Inc."
	}, {
		"Symbol": "TCMD",
		"Description": "Tactile Systems Technology Inc Cmn"
	}, {
		"Symbol": "TCO",
		"Description": "Taubman Centers, Inc."
	}, {
		"Symbol": "TCO^J",
		"Description": "Taubman Centers, Inc."
	}, {
		"Symbol": "TCO^K",
		"Description": "Taubman Centers, Inc."
	}, {
		"Symbol": "TCON",
		"Description": "Tracon Pharma Cmn"
	}, {
		"Symbol": "TCP",
		"Description": "TC PipeLines, LP"
	}, {
		"Symbol": "TCPC",
		"Description": "TCP Capital Corp"
	}, {
		"Symbol": "TCRD",
		"Description": "THL Credit Inc"
	}, {
		"Symbol": "TCRX",
		"Description": "THL Credit, Inc."
	}, {
		"Symbol": "TCRZ",
		"Description": "THL Credit, Inc."
	}, {
		"Symbol": "TCS",
		"Description": "Container Store "
	}, {
		"Symbol": "TCX",
		"Description": "Tucows Inc Cl A Cmn"
	}, {
		"Symbol": "TD",
		"Description": "Toronto Dominion Bank "
	}, {
		"Symbol": "TDA",
		"Description": "Telephone and Data Systems, Inc."
	}, {
		"Symbol": "TDC",
		"Description": "Teradata Corporation"
	}, {
		"Symbol": "TDE",
		"Description": "Telephone and Data Systems, Inc."
	}, {
		"Symbol": "TDF",
		"Description": "Templeton Dragon Fund, Inc."
	}, {
		"Symbol": "TDG",
		"Description": "Transdigm Group Incorporated"
	}, {
		"Symbol": "TDI",
		"Description": "Telephone and Data Systems, Inc."
	}, {
		"Symbol": "TDIV",
		"Description": "First Trs Vi Nasdaq"
	}, {
		"Symbol": "TDJ",
		"Description": "Telephone and Data Systems, Inc."
	}, {
		"Symbol": "TDOC",
		"Description": "Teladoc, Inc."
	}, {
		"Symbol": "TDS",
		"Description": "Telephone and Data Systems, Inc."
	}, {
		"Symbol": "TDW",
		"Description": "Tidewater Inc."
	}, {
		"Symbol": "TDY",
		"Description": "Teledyne Technologies Incorporated"
	}, {
		"Symbol": "TEAM",
		"Description": "Atlassian Cls A Ord"
	}, {
		"Symbol": "TEAR",
		"Description": "Tearlab Corporation"
	}, {
		"Symbol": "TECD",
		"Description": "Tech Data Cp"
	}, {
		"Symbol": "TECH",
		"Description": "Bio-Techne Cp Cmn"
	}, {
		"Symbol": "TECK",
		"Description": "Teck Resources Ltd"
	}, {
		"Symbol": "TEDU",
		"Description": "Tarena Intl ADR"
	}, {
		"Symbol": "TEF",
		"Description": "Telefonica SA"
	}, {
		"Symbol": "TEGP",
		"Description": "Tallgrass Energy GP, LP"
	}, {
		"Symbol": "TEI",
		"Description": "Templeton Emerging Markets Income Fund, Inc."
	}, {
		"Symbol": "TEL",
		"Description": "TE Connectivity Ltd."
	}, {
		"Symbol": "TEN",
		"Description": "Tenneco Inc."
	}, {
		"Symbol": "TENX",
		"Description": "Tenax Therapeutics"
	}, {
		"Symbol": "TEO",
		"Description": "Telecom Argentina Stet - France Telecom S.A."
	}, {
		"Symbol": "TEP",
		"Description": "Tallgrass Energy Partners, LP"
	}, {
		"Symbol": "TER",
		"Description": "Teradyne, Inc."
	}, {
		"Symbol": "TERP",
		"Description": "Terraform Pwr Cla Cmn"
	}, {
		"Symbol": "TESO",
		"Description": "Tesco Corp"
	}, {
		"Symbol": "TESS",
		"Description": "Tessco Tech Inc"
	}, {
		"Symbol": "TEUM",
		"Description": "Pareteum Corporation"
	}, {
		"Symbol": "TEVA",
		"Description": "Teva Pharmaceutical Industries Limited"
	}, {
		"Symbol": "TEX",
		"Description": "Terex Corporation"
	}, {
		"Symbol": "TFSL",
		"Description": "Tfs Financial Corp."
	}, {
		"Symbol": "TFX",
		"Description": "Teleflex Incorporated"
	}, {
		"Symbol": "TG",
		"Description": "Tredegar Corporation"
	}, {
		"Symbol": "TGA",
		"Description": "Transglobe Energy Cp"
	}, {
		"Symbol": "TGB",
		"Description": "Taseko Mines Limited"
	}, {
		"Symbol": "TGC",
		"Description": "Tengasco, Inc."
	}, {
		"Symbol": "TGD",
		"Description": "Timmons Gold Corp"
	}, {
		"Symbol": "TGEN",
		"Description": "Tecogen Inc Cmn"
	}, {
		"Symbol": "TGH",
		"Description": "Textainer Group Holdings Limited"
	}, {
		"Symbol": "TGI",
		"Description": "Triumph Group, Inc."
	}, {
		"Symbol": "TGLS",
		"Description": "Tecnoglass Inc"
	}, {
		"Symbol": "TGNA",
		"Description": "TEGNA Inc."
	}, {
		"Symbol": "TGP",
		"Description": "Teekay LNG Partners L.P."
	}, {
		"Symbol": "TGP^A",
		"Description": "Teekay LNG Partners L.P."
	}, {
		"Symbol": "TGS",
		"Description": "Transportadora De Gas Sa Ord B"
	}, {
		"Symbol": "TGT",
		"Description": "Target Corporation"
	}, {
		"Symbol": "TGTX",
		"Description": "Tg Therapeuticscmn"
	}, {
		"Symbol": "THC",
		"Description": "Tenet Healthcare Corporation"
	}, {
		"Symbol": "THFF",
		"Description": "First Finl Corp [In]"
	}, {
		"Symbol": "THG",
		"Description": " Hanover Insurance Group, Inc."
	}, {
		"Symbol": "THGA",
		"Description": " Hanover Insurance Group, Inc."
	}, {
		"Symbol": "THLD",
		"Description": "Threshold Pharmactl"
	}, {
		"Symbol": "THM",
		"Description": "International Tower Hill Mines Ltd"
	}, {
		"Symbol": "THO",
		"Description": "Thor Industries, Inc."
	}, {
		"Symbol": "THQ",
		"Description": "Tekla Healthcare Opportunies Fund"
	}, {
		"Symbol": "THR",
		"Description": "Thermon Group Holdings, Inc."
	}, {
		"Symbol": "THRM",
		"Description": "Gentherm Inc Cmn"
	}, {
		"Symbol": "THS",
		"Description": "Treehouse Foods, Inc."
	}, {
		"Symbol": "THST",
		"Description": "Truett Hurst Cl A Co"
	}, {
		"Symbol": "THW",
		"Description": "Tekla World Healthcare Fund"
	}, {
		"Symbol": "TI",
		"Description": "Telecom Italia S.P.A."
	}, {
		"Symbol": "TI.A",
		"Description": "Telecom Italia S.P.A."
	}, {
		"Symbol": "TICC",
		"Description": "Ticc Capital Corp"
	}, {
		"Symbol": "TIER",
		"Description": "TIER REIT, Inc."
	}, {
		"Symbol": "TIF",
		"Description": "Tiffany & Co."
	}, {
		"Symbol": "TIG",
		"Description": "Tigenix Nv"
	}, {
		"Symbol": "TIK",
		"Description": "Tel-Instrument Electronics Corp."
	}, {
		"Symbol": "TIL",
		"Description": "Till Cap Res Vt Shrs"
	}, {
		"Symbol": "TILE",
		"Description": "Interface Inc Cmn"
	}, {
		"Symbol": "TIME",
		"Description": "Time Inc."
	}, {
		"Symbol": "TINY",
		"Description": "Harris & Harris"
	}, {
		"Symbol": "TIPT",
		"Description": "Tiptree Fncl Cl A Cmn"
	}, {
		"Symbol": "TIS",
		"Description": "Orchids Paper Products Company"
	}, {
		"Symbol": "TISA",
		"Description": "Top Image Systems"
	}, {
		"Symbol": "TISI",
		"Description": "Team, Inc."
	}, {
		"Symbol": "TITN",
		"Description": "Titan Machinery Inc"
	}, {
		"Symbol": "TIVO",
		"Description": "Tivo Corp."
	}, {
		"Symbol": "TJX",
		"Description": "TJX Companies, Inc. "
	}, {
		"Symbol": "TK",
		"Description": "Teekay Corporation"
	}, {
		"Symbol": "TKAI",
		"Description": "Tokai Pharma Cmn"
	}, {
		"Symbol": "TKC",
		"Description": "Turkcell Iletisim Hizmetleri AS"
	}, {
		"Symbol": "TKF",
		"Description": "Turkish Investment Fund, Inc. "
	}, {
		"Symbol": "TKR",
		"Description": "Timken Company "
	}, {
		"Symbol": "TLF",
		"Description": "Tandy  Leather Fctry"
	}, {
		"Symbol": "TLGT",
		"Description": "Teligent Cmn Stk"
	}, {
		"Symbol": "TLI",
		"Description": "Western Asset Corporate Loan Fund Inc"
	}, {
		"Symbol": "TLK",
		"Description": "PT Telekomunikasi Indonesia, Tbk"
	}, {
		"Symbol": "TLLP",
		"Description": "Tesoro Logistics LP"
	}, {
		"Symbol": "TLND",
		"Description": "Talend Sa"
	}, {
		"Symbol": "TLP",
		"Description": "TransMontaigne Partners L.P."
	}, {
		"Symbol": "TLRD",
		"Description": "Tailored Brands, Inc."
	}, {
		"Symbol": "TLT",
		"Description": "Ishares  20-Year Bond"
	}, {
		"Symbol": "TLYS",
		"Description": "Tillys, Inc."
	}, {
		"Symbol": "TM",
		"Description": "Toyota Motor Corp Ltd Ord"
	}, {
		"Symbol": "TMHC",
		"Description": "Taylor Morrison Home Corporation"
	}, {
		"Symbol": "TMK",
		"Description": "Torchmark Corporation"
	}, {
		"Symbol": "TMK^B",
		"Description": "Torchmark Corporation"
	}, {
		"Symbol": "TMK^C",
		"Description": "Torchmark Corporation"
	}, {
		"Symbol": "TMO",
		"Description": "Thermo Fisher Scientific Inc"
	}, {
		"Symbol": "TMP",
		"Description": "Tompkins Financial Corporation"
	}, {
		"Symbol": "TMQ",
		"Description": "Trilogy Metals Inc."
	}, {
		"Symbol": "TMST",
		"Description": "Timken Steel Corporation"
	}, {
		"Symbol": "TMUS",
		"Description": "T-Mobile US Cmn"
	}, {
		"Symbol": "TMUSP",
		"Description": "T-Mobile 5.5 Pfd A"
	}, {
		"Symbol": "TNAV",
		"Description": "Telenav Inc"
	}, {
		"Symbol": "TNC",
		"Description": "Tennant Company"
	}, {
		"Symbol": "TNDM",
		"Description": "Tandem Diabetes Care"
	}, {
		"Symbol": "TNET",
		"Description": "TriNet Group, Inc."
	}, {
		"Symbol": "TNGO",
		"Description": "Tangoe Inc"
	}, {
		"Symbol": "TNH",
		"Description": "Terra Nitrogen Company, L.P."
	}, {
		"Symbol": "TNK",
		"Description": "Teekay Tankers Ltd."
	}, {
		"Symbol": "TNP",
		"Description": "Tsakos Energy Navigation Ltd"
	}, {
		"Symbol": "TNP^B",
		"Description": "Tsakos Energy Navigation Ltd"
	}, {
		"Symbol": "TNP^C",
		"Description": "Tsakos Energy Navigation Ltd"
	}, {
		"Symbol": "TNP^D",
		"Description": "Tsakos Energy Navigation Ltd"
	}, {
		"Symbol": "TNXP",
		"Description": "Tonix Pharm Hldg Cmn"
	}, {
		"Symbol": "TOL",
		"Description": "Toll Brothers Inc."
	}, {
		"Symbol": "TOO",
		"Description": "Teekay Offshore Partners L.P."
	}, {
		"Symbol": "TOO^A",
		"Description": "Teekay Offshore Partners L.P."
	}, {
		"Symbol": "TOO^B",
		"Description": "Teekay Offshore Partners L.P."
	}, {
		"Symbol": "TOPS",
		"Description": "Top Ships Inc"
	}, {
		"Symbol": "TORM",
		"Description": "Tor Minerals Intl"
	}, {
		"Symbol": "TOT",
		"Description": "Total S.A."
	}, {
		"Symbol": "TOUR",
		"Description": "Tuniu Corporatio Ads"
	}, {
		"Symbol": "TOWN",
		"Description": "Towne Bank"
	}, {
		"Symbol": "TOWR",
		"Description": "Tower International, Inc."
	}, {
		"Symbol": "TPB",
		"Description": "Turning Point Brands, Inc."
	}, {
		"Symbol": "TPC",
		"Description": "Tutor Perini Corporation"
	}, {
		"Symbol": "TPH",
		"Description": "TRI Pointe Group, Inc."
	}, {
		"Symbol": "TPHS",
		"Description": "Trinity Place Holdings Inc."
	}, {
		"Symbol": "TPIC",
		"Description": "Tpi Composites Inc Cmn"
	}, {
		"Symbol": "TPIV",
		"Description": "Tapimmune Inc"
	}, {
		"Symbol": "TPL",
		"Description": "Texas Pacific Land Trust"
	}, {
		"Symbol": "TPLM",
		"Description": "Triangle Petroleum Corporation"
	}, {
		"Symbol": "TPRE",
		"Description": "Third Point Reinsurance Ltd."
	}, {
		"Symbol": "TPVG",
		"Description": "TriplePoint Venture Growth BDC Corp."
	}, {
		"Symbol": "TPVZ",
		"Description": "TriplePoint Venture Growth BDC Corp."
	}, {
		"Symbol": "TPX",
		"Description": "Tempur Sealy International, Inc."
	}, {
		"Symbol": "TPZ",
		"Description": "Tortoise Power and Energy Infrastructure Fund, Inc"
	}, {
		"Symbol": "TQQQ",
		"Description": "Proshres Ultrpro QQQ"
	}, {
		"Symbol": "TR",
		"Description": "Tootsie Roll Industries, Inc."
	}, {
		"Symbol": "TRC",
		"Description": "Tejon Ranch Co"
	}, {
		"Symbol": "TRCB",
		"Description": "Two River Bncrp"
	}, {
		"Symbol": "TRCH",
		"Description": "Torchlight Energy"
	}, {
		"Symbol": "TRCO",
		"Description": "Tribune Media Company"
	}, {
		"Symbol": "TREC",
		"Description": "Trecora Resources"
	}, {
		"Symbol": "TREE",
		"Description": "Lendingtree Inc"
	}, {
		"Symbol": "TREX",
		"Description": "Trex Company, Inc."
	}, {
		"Symbol": "TRGP",
		"Description": "Targa Resources, Inc."
	}, {
		"Symbol": "TRHC",
		"Description": "Tabula Rasa Healthcare Inc"
	}, {
		"Symbol": "TRI",
		"Description": "Thomson Reuters Corp"
	}, {
		"Symbol": "TRIB",
		"Description": "Trinity Bio ADR"
	}, {
		"Symbol": "TRIL",
		"Description": "Trillium Therapeutic"
	}, {
		"Symbol": "TRIP",
		"Description": "Tripadvisor Inc"
	}, {
		"Symbol": "TRK",
		"Description": "Speedway Motorsports, Inc."
	}, {
		"Symbol": "TRMB",
		"Description": "Trimble Navigation"
	}, {
		"Symbol": "TRMK",
		"Description": "Trustmark Corp"
	}, {
		"Symbol": "TRMR",
		"Description": "Tremor Video, Inc."
	}, {
		"Symbol": "TRN",
		"Description": "Trinity Industries, Inc."
	}, {
		"Symbol": "TRNC",
		"Description": "Tronc Inc"
	}, {
		"Symbol": "TRNO",
		"Description": "Terreno Realty Corporation"
	}, {
		"Symbol": "TRNO^A",
		"Description": "Terreno Realty Corporation"
	}, {
		"Symbol": "TRNS",
		"Description": "Transcat Inc"
	}, {
		"Symbol": "TROV",
		"Description": "Trovagene Inc"
	}, {
		"Symbol": "TROVU",
		"Description": "Trovagene Inc. Unit"
	}, {
		"Symbol": "TROVW",
		"Description": "Trovagene In Warrant"
	}, {
		"Symbol": "TROW",
		"Description": "T Rowe Price Group"
	}, {
		"Symbol": "TROX",
		"Description": "Tronox Limited"
	}, {
		"Symbol": "TRP",
		"Description": "TransCanada Corporation"
	}, {
		"Symbol": "TRQ",
		"Description": "Turquoise Hill Resources Ltd."
	}, {
		"Symbol": "TRR",
		"Description": "TRC Companies, Inc."
	}, {
		"Symbol": "TRS",
		"Description": "Trimas Corporation"
	}, {
		"Symbol": "TRST",
		"Description": "Trustco Bank Corp NY"
	}, {
		"Symbol": "TRT",
		"Description": "Trio-Tech International"
	}, {
		"Symbol": "TRTN",
		"Description": "Triton International Limited"
	}, {
		"Symbol": "TRU",
		"Description": "TransUnion"
	}, {
		"Symbol": "TRUE",
		"Description": "Truecar Inc Cmn"
	}, {
		"Symbol": "TRUP",
		"Description": "Trupanion Inc"
	}, {
		"Symbol": "TRV",
		"Description": " Travelers Companies, Inc."
	}, {
		"Symbol": "TRVG",
		"Description": "Trivago Nv"
	}, {
		"Symbol": "TRVN",
		"Description": "Trevena Inc"
	}, {
		"Symbol": "TRX",
		"Description": "Tanzanian Royalty Exploration Corporation"
	}, {
		"Symbol": "TRXC",
		"Description": "TransEnterix, Inc."
	}, {
		"Symbol": "TS",
		"Description": "Tenaris S.A."
	}, {
		"Symbol": "TSBK",
		"Description": "Timberland Bancorp"
	}, {
		"Symbol": "TSC",
		"Description": "Tristate Capital Hld"
	}, {
		"Symbol": "TSCO",
		"Description": "Tractor Supply Co"
	}, {
		"Symbol": "TSE",
		"Description": "Trinseo S.A."
	}, {
		"Symbol": "TSEM",
		"Description": "Tower Semiconductor"
	}, {
		"Symbol": "TSI",
		"Description": "TCW Strategic Income Fund, Inc."
	}, {
		"Symbol": "TSL",
		"Description": "Trina Solar Limited"
	}, {
		"Symbol": "TSLA",
		"Description": "Tesla Inc."
	}, {
		"Symbol": "TSLF",
		"Description": "THL Credit Senior Loan Fund"
	}, {
		"Symbol": "TSLX",
		"Description": "TPG Specialty Lending, Inc."
	}, {
		"Symbol": "TSM",
		"Description": "Taiwan Semiconductor Manufacturing Company Ltd."
	}, {
		"Symbol": "TSN",
		"Description": "Tyson Foods, Inc."
	}, {
		"Symbol": "TSNU",
		"Description": "Tyson Foods, Inc."
	}, {
		"Symbol": "TSO",
		"Description": "Tesoro Corporation"
	}, {
		"Symbol": "TSQ",
		"Description": "Townsquare Media, Inc."
	}, {
		"Symbol": "TSRA",
		"Description": "Tessera Technologies"
	}, {
		"Symbol": "TSRI",
		"Description": "T S R Inc"
	}, {
		"Symbol": "TSRO",
		"Description": "Tesaro Inc"
	}, {
		"Symbol": "TSS",
		"Description": "Total System Services, Inc."
	}, {
		"Symbol": "TST",
		"Description": "Thestreet Inc"
	}, {
		"Symbol": "TSU",
		"Description": "TIM Participacoes S.A."
	}, {
		"Symbol": "TTC",
		"Description": "Toro Company "
	}, {
		"Symbol": "TTD",
		"Description": "Trade Desk Inc"
	}, {
		"Symbol": "TTEC",
		"Description": "Teletech Hldgs"
	}, {
		"Symbol": "TTEK",
		"Description": "Tetra Tech Inc"
	}, {
		"Symbol": "TTF",
		"Description": "Thai Fund, Inc. "
	}, {
		"Symbol": "TTGT",
		"Description": "Techtarget Inc"
	}, {
		"Symbol": "TTI",
		"Description": "Tetra Technologies, Inc."
	}, {
		"Symbol": "TTM",
		"Description": "Tata Motors Ltd"
	}, {
		"Symbol": "TTMI",
		"Description": "TTM Technologies I"
	}, {
		"Symbol": "TTNP",
		"Description": "Titan Pharma Cmn"
	}, {
		"Symbol": "TTOO",
		"Description": "T2 Biosystems CS"
	}, {
		"Symbol": "TTP",
		"Description": "Tortoise Pipeline & Energy Fund, Inc."
	}, {
		"Symbol": "TTPH",
		"Description": "Tetraphase Pharmaceu"
	}, {
		"Symbol": "TTS",
		"Description": "Tile Shop Hldgs Cmn"
	}, {
		"Symbol": "TTWO",
		"Description": "Take-Two Interacti"
	}, {
		"Symbol": "TU",
		"Description": "TELUS Corporation"
	}, {
		"Symbol": "TUES",
		"Description": "Tuesday Morning Co"
	}, {
		"Symbol": "TUP",
		"Description": "Tupperware Brands Corporation"
	}, {
		"Symbol": "TUSA",
		"Description": "First TR Alpdex ETF"
	}, {
		"Symbol": "TUSK",
		"Description": "Mammoth Energy Services Inc"
	}, {
		"Symbol": "TUTI",
		"Description": "Tuttle Tct Mg Mlt"
	}, {
		"Symbol": "TUTT",
		"Description": "Tuttle Tct MGT US Cr"
	}, {
		"Symbol": "TV",
		"Description": "Grupo Televisa S.A."
	}, {
		"Symbol": "TVC",
		"Description": "Tennessee Valley Authority"
	}, {
		"Symbol": "TVE",
		"Description": "Tennessee Valley Authority"
	}, {
		"Symbol": "TVIA",
		"Description": "Terravia Hldgs Inc"
	}, {
		"Symbol": "TVIX",
		"Description": "VS 2X VIX Short Term"
	}, {
		"Symbol": "TVIZ",
		"Description": "VS 2X VIX Mid Term"
	}, {
		"Symbol": "TVPT",
		"Description": "Travelport Worldwide Limited"
	}, {
		"Symbol": "TVTY",
		"Description": "Tivity Health"
	}, {
		"Symbol": "TWI",
		"Description": "Titan International, Inc."
	}, {
		"Symbol": "TWIN",
		"Description": "Twin Disc Inc"
	}, {
		"Symbol": "TWLO",
		"Description": "Twilio Inc."
	}, {
		"Symbol": "TWMC",
		"Description": "Trans World Entert"
	}, {
		"Symbol": "TWN",
		"Description": "Taiwan Fund, Inc. "
	}, {
		"Symbol": "TWNK",
		"Description": "Hostess Brands Inc"
	}, {
		"Symbol": "TWNKW",
		"Description": "Gores Holdings Warr"
	}, {
		"Symbol": "TWO",
		"Description": "Two Harbors Investments Corp"
	}, {
		"Symbol": "TWOU",
		"Description": "2U Inc Cmn Stk"
	}, {
		"Symbol": "TWTR",
		"Description": "Twitter, Inc."
	}, {
		"Symbol": "TWX",
		"Description": "Time Warner Inc."
	}, {
		"Symbol": "TX",
		"Description": "Ternium S.A."
	}, {
		"Symbol": "TXMD",
		"Description": "TherapeuticsMD, Inc."
	}, {
		"Symbol": "TXN",
		"Description": "Texas Instruments"
	}, {
		"Symbol": "TXRH",
		"Description": "Texas Roadhouse Inc"
	}, {
		"Symbol": "TXT",
		"Description": "Textron Inc."
	}, {
		"Symbol": "TY",
		"Description": "Tri Continental Corporation"
	}, {
		"Symbol": "TY^",
		"Description": "Tri Continental Corporation"
	}, {
		"Symbol": "TYG",
		"Description": "Tortoise Energy Infrastructure Corporation"
	}, {
		"Symbol": "TYHT",
		"Description": "Shineco Inc"
	}, {
		"Symbol": "TYL",
		"Description": "Tyler Technologies, Inc."
	}, {
		"Symbol": "TYPE",
		"Description": "Monotype Imag. Hold."
	}, {
		"Symbol": "TZOO",
		"Description": "Travelzoo Inc"
	}, {
		"Symbol": "UA",
		"Description": "Under Armour, Inc."
	}, {
		"Symbol": "UAA",
		"Description": "Under Armour, Inc."
	}, {
		"Symbol": "UAE",
		"Description": "Ishares MSCI UAE Cap"
	}, {
		"Symbol": "UAL",
		"Description": "United Continental Holdings, Inc."
	}, {
		"Symbol": "UAM",
		"Description": "Universal American Corp."
	}, {
		"Symbol": "UAMY",
		"Description": "United States Antimony Corporation"
	}, {
		"Symbol": "UAN",
		"Description": "CVR Partners, LP"
	}, {
		"Symbol": "UBA",
		"Description": "Urstadt Biddle Properties Inc."
	}, {
		"Symbol": "UBCP",
		"Description": "United Bncp Inc"
	}, {
		"Symbol": "UBFO",
		"Description": "United Security Bcsh"
	}, {
		"Symbol": "UBIO",
		"Description": "Proshr Ult Nq Bio"
	}, {
		"Symbol": "UBND",
		"Description": "Wisdmtree W Un Bnd"
	}, {
		"Symbol": "UBNK",
		"Description": "United Fin Bncp New"
	}, {
		"Symbol": "UBNT",
		"Description": "Ubiquiti Networks I"
	}, {
		"Symbol": "UBOH",
		"Description": "United Bancshares"
	}, {
		"Symbol": "UBP",
		"Description": "Urstadt Biddle Properties Inc."
	}, {
		"Symbol": "UBP^F",
		"Description": "Urstadt Biddle Properties Inc."
	}, {
		"Symbol": "UBP^G",
		"Description": "Urstadt Biddle Properties Inc."
	}, {
		"Symbol": "UBS",
		"Description": "UBS AG"
	}, {
		"Symbol": "UBSH",
		"Description": "Union Bankshares Cp"
	}, {
		"Symbol": "UBSI",
		"Description": "United Bkshs Inc"
	}, {
		"Symbol": "UCBA",
		"Description": "United Community Ban"
	}, {
		"Symbol": "UCBI",
		"Description": "United Comm Banks"
	}, {
		"Symbol": "UCFC",
		"Description": "United Community Fnl"
	}, {
		"Symbol": "UCP",
		"Description": "UCP, Inc."
	}, {
		"Symbol": "UCTT",
		"Description": "Ultra Clean Holdings"
	}, {
		"Symbol": "UDBI",
		"Description": "Legg Mason US Div Cr"
	}, {
		"Symbol": "UDR",
		"Description": "United Dominion Realty Trust, Inc."
	}, {
		"Symbol": "UE",
		"Description": "Urban Edge Properties"
	}, {
		"Symbol": "UEC",
		"Description": "Uranium Energy Corp."
	}, {
		"Symbol": "UEIC",
		"Description": "Universal Elect In"
	}, {
		"Symbol": "UEPS",
		"Description": "Net 1 Ueps Techs Inc"
	}, {
		"Symbol": "UFAB",
		"Description": "Unique Fabricating, Inc."
	}, {
		"Symbol": "UFCS",
		"Description": "United Fire Group I"
	}, {
		"Symbol": "UFI",
		"Description": "Unifi, Inc."
	}, {
		"Symbol": "UFPI",
		"Description": "Universal Forest Prd"
	}, {
		"Symbol": "UFPT",
		"Description": "U F P Tech Inc"
	}, {
		"Symbol": "UFS",
		"Description": "Domtar Corporation"
	}, {
		"Symbol": "UG",
		"Description": "United Guardian Inc"
	}, {
		"Symbol": "UGI",
		"Description": "UGI Corporation"
	}, {
		"Symbol": "UGLD",
		"Description": "VS 3X Gold"
	}, {
		"Symbol": "UGP",
		"Description": "Ultrapar Participacoes S.A."
	}, {
		"Symbol": "UHAL",
		"Description": "A M E R C  O"
	}, {
		"Symbol": "UHS",
		"Description": "Universal Health Services, Inc."
	}, {
		"Symbol": "UHT",
		"Description": "Universal Health Realty Income Trust"
	}, {
		"Symbol": "UIHC",
		"Description": "United Insurance Hld"
	}, {
		"Symbol": "UIS",
		"Description": "Unisys Corporation"
	}, {
		"Symbol": "UL",
		"Description": "Unilever PLC"
	}, {
		"Symbol": "ULBI",
		"Description": "Ultralife Corp"
	}, {
		"Symbol": "ULH",
		"Description": "Universal Logis Hldg"
	}, {
		"Symbol": "ULTA",
		"Description": "Ulta Salon Cosmetic"
	}, {
		"Symbol": "ULTI",
		"Description": "Ultimate Software"
	}, {
		"Symbol": "UMBF",
		"Description": "Ump Financial Corp"
	}, {
		"Symbol": "UMC",
		"Description": "United Microelectronics Corporation"
	}, {
		"Symbol": "UMH",
		"Description": "UMH Properties, Inc."
	}, {
		"Symbol": "UMH^A",
		"Description": "UMH Properties, Inc."
	}, {
		"Symbol": "UMH^B",
		"Description": "UMH Properties, Inc."
	}, {
		"Symbol": "UMPQ",
		"Description": "Umpqua Holdings Corp"
	}, {
		"Symbol": "UN",
		"Description": "Unilever NV"
	}, {
		"Symbol": "UNAM",
		"Description": "Unico American Cp"
	}, {
		"Symbol": "UNB",
		"Description": "Union Bankshares Inc"
	}, {
		"Symbol": "UNF",
		"Description": "Unifirst Corporation"
	}, {
		"Symbol": "UNFI",
		"Description": "United Nat Foods I"
	}, {
		"Symbol": "UNH",
		"Description": "UnitedHealth Group Incorporated"
	}, {
		"Symbol": "UNIS",
		"Description": "Unilife Corporation"
	}, {
		"Symbol": "UNM",
		"Description": "Unum Group"
	}, {
		"Symbol": "UNP",
		"Description": "Union Pacific Corporation"
	}, {
		"Symbol": "UNT",
		"Description": "Unit Corporation"
	}, {
		"Symbol": "UNTY",
		"Description": "Unity Bancorp Inc"
	}, {
		"Symbol": "UNVR",
		"Description": "Univar Inc."
	}, {
		"Symbol": "UNXL",
		"Description": "Uni-Pixel Inc"
	}, {
		"Symbol": "UPLD",
		"Description": "Upland Software Inc"
	}, {
		"Symbol": "UPS",
		"Description": "United Parcel Service, Inc."
	}, {
		"Symbol": "UQM",
		"Description": "UQM TECHNOLOGIES INC"
	}, {
		"Symbol": "URBN",
		"Description": "Urban Outfitters Inc"
	}, {
		"Symbol": "URG",
		"Description": "Ur Energy Inc"
	}, {
		"Symbol": "URI",
		"Description": "United Rentals, Inc."
	}, {
		"Symbol": "URRE",
		"Description": "Uranium Resources"
	}, {
		"Symbol": "USA",
		"Description": "Liberty All-Star Equity Fund"
	}, {
		"Symbol": "USAC",
		"Description": "USA Compression Partners, LP"
	}, {
		"Symbol": "USAK",
		"Description": "U S A Truck Inc"
	}, {
		"Symbol": "USAP",
		"Description": "Universal Stainles"
	}, {
		"Symbol": "USAS",
		"Description": "Americas Silver Corporation"
	}, {
		"Symbol": "USAT",
		"Description": "USA Technologies Inc"
	}, {
		"Symbol": "USATP",
		"Description": "USA Technologies Pfd"
	}, {
		"Symbol": "USB",
		"Description": "U.S. Bancorp"
	}, {
		"Symbol": "USB^A",
		"Description": "U.S. Bancorp"
	}, {
		"Symbol": "USB^H",
		"Description": "U.S. Bancorp"
	}, {
		"Symbol": "USB^M",
		"Description": "U.S. Bancorp"
	}, {
		"Symbol": "USB^N",
		"Description": "U.S. Bancorp"
	}, {
		"Symbol": "USB^O",
		"Description": "U.S. Bancorp"
	}, {
		"Symbol": "USCR",
		"Description": "U S Concrete Inc"
	}, {
		"Symbol": "USDP",
		"Description": "USD Partners LP"
	}, {
		"Symbol": "USEG",
		"Description": "U S Energy Corp"
	}, {
		"Symbol": "USFD",
		"Description": "US Foods Holding Corp."
	}, {
		"Symbol": "USG",
		"Description": "USG Corporation"
	}, {
		"Symbol": "USLB",
		"Description": "PS Russell 1000 Low Beta Equal Weight"
	}, {
		"Symbol": "USLM",
		"Description": "U S Lime & Mineral"
	}, {
		"Symbol": "USLV",
		"Description": "VS 3X Silver"
	}, {
		"Symbol": "USM",
		"Description": "United States Cellular Corporation"
	}, {
		"Symbol": "USNA",
		"Description": "USANA Health Sciences, Inc."
	}, {
		"Symbol": "USPH",
		"Description": "U.S. Physical Therapy, Inc."
	}, {
		"Symbol": "UTEK",
		"Description": "Ultratech Inc"
	}, {
		"Symbol": "UTF",
		"Description": "Cohen & Steers Infrastructure Fund, Inc"
	}, {
		"Symbol": "UTG",
		"Description": "Reaves Utility Income Fund"
	}, {
		"Symbol": "UTHR",
		"Description": "United Therapeutic"
	}, {
		"Symbol": "UTI",
		"Description": "Universal Technical Institute Inc"
	}, {
		"Symbol": "UTL",
		"Description": "UNITIL Corporation"
	}, {
		"Symbol": "UTMD",
		"Description": "Utah Medical Prod"
	}, {
		"Symbol": "UTSI",
		"Description": "Utstarcom Holdings C"
	}, {
		"Symbol": "UTX",
		"Description": "United Technologies Corporation"
	}, {
		"Symbol": "UUU",
		"Description": "Universal Security Instruments, Inc."
	}, {
		"Symbol": "UUUU",
		"Description": "Energy Fuels Inc"
	}, {
		"Symbol": "UUUU.WS",
		"Description": "Energy Fuels Inc"
	}, {
		"Symbol": "UVE",
		"Description": "UNIVERSAL INSURANCE HOLDINGS INC"
	}, {
		"Symbol": "UVSP",
		"Description": "Univest Corp of Penn"
	}, {
		"Symbol": "UVV",
		"Description": "Universal Corporation"
	}, {
		"Symbol": "UWN",
		"Description": "Nevada Gold & Casinos, Inc."
	}, {
		"Symbol": "UZA",
		"Description": "United States Cellular Corporation"
	}, {
		"Symbol": "UZB",
		"Description": "United States Cellular Corporation"
	}, {
		"Symbol": "UZC",
		"Description": "United States Cellular Corporation"
	}, {
		"Symbol": "V",
		"Description": "Visa Inc."
	}, {
		"Symbol": "VAC",
		"Description": "Marriot Vacations Worldwide Corporation"
	}, {
		"Symbol": "VAL",
		"Description": "Valspar Corporation "
	}, {
		"Symbol": "VALE",
		"Description": "VALE S.A."
	}, {
		"Symbol": "VALE.P",
		"Description": "VALE S.A."
	}, {
		"Symbol": "VALU",
		"Description": "Value Line Inc"
	}, {
		"Symbol": "VALX",
		"Description": "Validea Market Legen"
	}, {
		"Symbol": "VAR",
		"Description": "Varian Medical Systems, Inc."
	}, {
		"Symbol": "VASC",
		"Description": "Vascular Solutions"
	}, {
		"Symbol": "VBF",
		"Description": "Invesco Bond Fund"
	}, {
		"Symbol": "VBFC",
		"Description": "Village Bank & Trust"
	}, {
		"Symbol": "VBIV",
		"Description": "Vbi Vaccines Inc CS"
	}, {
		"Symbol": "VBLT",
		"Description": "Vascular Biogen. Ord"
	}, {
		"Symbol": "VBND",
		"Description": "ETF Sr Slt Vd Cr Bd"
	}, {
		"Symbol": "VBTX",
		"Description": "Veritex Holdings Cmn"
	}, {
		"Symbol": "VC",
		"Description": "Visteon Corporation"
	}, {
		"Symbol": "VCEL",
		"Description": "Vericel Corproation"
	}, {
		"Symbol": "VCF",
		"Description": "Delaware Investments Colorado Municipal Income Fund, Inc"
	}, {
		"Symbol": "VCIT",
		"Description": "Vanguard Interm Corp"
	}, {
		"Symbol": "VCLT",
		"Description": "Vanguard Lng Tm Corp"
	}, {
		"Symbol": "VCO",
		"Description": "Vina Concha Y Toro"
	}, {
		"Symbol": "VCRA",
		"Description": "Vocera Communications, Inc."
	}, {
		"Symbol": "VCSH",
		"Description": "Vanguard Sht Tm Cor"
	}, {
		"Symbol": "VCV",
		"Description": "Invesco California Value Municipal Income Trust"
	}, {
		"Symbol": "VCYT",
		"Description": "Veracyte Inc"
	}, {
		"Symbol": "VDSI",
		"Description": "Vasco Data Security"
	}, {
		"Symbol": "VDTH",
		"Description": "Videocon D2H Ltd Ads"
	}, {
		"Symbol": "VEC",
		"Description": "Vectrus, Inc."
	}, {
		"Symbol": "VECO",
		"Description": "Veeco Instrument"
	}, {
		"Symbol": "VEDL",
		"Description": "Vedanta  Limited"
	}, {
		"Symbol": "VEEV",
		"Description": "Veeva Systems Inc."
	}, {
		"Symbol": "VER",
		"Description": "VEREIT Inc."
	}, {
		"Symbol": "VER^F",
		"Description": "VEREIT Inc."
	}, {
		"Symbol": "VET",
		"Description": "Vermilion Energy Inc."
	}, {
		"Symbol": "VFC",
		"Description": "V.F. Corporation"
	}, {
		"Symbol": "VFL",
		"Description": "Delaware Investments Florida Insured Municipal Income Fund"
	}, {
		"Symbol": "VG",
		"Description": "Vonage Holdings Corp."
	}, {
		"Symbol": "VGI",
		"Description": "Virtus Global Multi-Sector Income Fund"
	}, {
		"Symbol": "VGIT",
		"Description": "Vanguard Int Gov"
	}, {
		"Symbol": "VGLT",
		"Description": "Vanguard Long Gov"
	}, {
		"Symbol": "VGM",
		"Description": "Invesco Trust for Investment Grade Municipals"
	}, {
		"Symbol": "VGR",
		"Description": "Vector Group Ltd."
	}, {
		"Symbol": "VGSH",
		"Description": "Vanguard Sh Term Gov"
	}, {
		"Symbol": "VGZ",
		"Description": "Vista Gold Corporation"
	}, {
		"Symbol": "VHC",
		"Description": "VirnetX Holding Corp"
	}, {
		"Symbol": "VHI",
		"Description": "Valhi, Inc."
	}, {
		"Symbol": "VIA",
		"Description": "Viacom Inc Cl A"
	}, {
		"Symbol": "VIAB",
		"Description": "Viacom Inc Cl B"
	}, {
		"Symbol": "VIAV",
		"Description": "Viavi Solutions Cmn"
	}, {
		"Symbol": "VICL",
		"Description": "Vical Incorporated"
	}, {
		"Symbol": "VICR",
		"Description": "Vicor Cp"
	}, {
		"Symbol": "VIDI",
		"Description": "Vident Intl Eqty Fnd"
	}, {
		"Symbol": "VIGI",
		"Description": "Van Int Div App ETF"
	}, {
		"Symbol": "VII",
		"Description": "Vicon Industries, Inc."
	}, {
		"Symbol": "VIIX",
		"Description": "VS VIX Short Term"
	}, {
		"Symbol": "VIIZ",
		"Description": "VS VIX Mid Term"
	}, {
		"Symbol": "VIP",
		"Description": "Vimpelcom Ltd Ads"
	}, {
		"Symbol": "VIPS",
		"Description": "Vipshop Holdings Limited"
	}, {
		"Symbol": "VIRC",
		"Description": "Virco MFG Cp"
	}, {
		"Symbol": "VIRT",
		"Description": "Virtu Financial Cm A"
	}, {
		"Symbol": "VISI",
		"Description": "Volt Information Sciences, Inc."
	}, {
		"Symbol": "VISN",
		"Description": "Visionchina Media I"
	}, {
		"Symbol": "VIV",
		"Description": "Telefonica Brasil S.A."
	}, {
		"Symbol": "VIVE",
		"Description": "Viveve Medical"
	}, {
		"Symbol": "VIVO",
		"Description": "Meridian Bioscience"
	}, {
		"Symbol": "VJET",
		"Description": "voxeljet AG"
	}, {
		"Symbol": "VKI",
		"Description": "Invesco Advantage Municipal Income Trust II"
	}, {
		"Symbol": "VKQ",
		"Description": "Invesco Municipal Trust"
	}, {
		"Symbol": "VKTX",
		"Description": "Viking Thera Cmn"
	}, {
		"Symbol": "VKTXW",
		"Description": "Viking Theraptcs Wts"
	}, {
		"Symbol": "VLGEA",
		"Description": "Village Super Mkt"
	}, {
		"Symbol": "VLO",
		"Description": "Valero Energy Corporation"
	}, {
		"Symbol": "VLP",
		"Description": "Valero Energy Partners LP"
	}, {
		"Symbol": "VLRS",
		"Description": "Controladora Vuela Compania de Aviacion, S.A.B. de C.V."
	}, {
		"Symbol": "VLT",
		"Description": "Invesco High Income Trust II"
	}, {
		"Symbol": "VLY",
		"Description": "Valley National Bancorp"
	}, {
		"Symbol": "VLY.WS",
		"Description": "Valley National Bancorp"
	}, {
		"Symbol": "VLY^A",
		"Description": "Valley National Bancorp"
	}, {
		"Symbol": "VMBS",
		"Description": "Vanguard Mortg Bckd"
	}, {
		"Symbol": "VMC",
		"Description": "Vulcan Materials Company"
	}, {
		"Symbol": "VMI",
		"Description": "Valmont Industries, Inc."
	}, {
		"Symbol": "VMM",
		"Description": "Delaware Investments Minnesota Municipal Income Fund II, Inc."
	}, {
		"Symbol": "VMO",
		"Description": "Invesco Municipal Opportunity Trust"
	}, {
		"Symbol": "VMW",
		"Description": "Vmware, Inc."
	}, {
		"Symbol": "VNCE",
		"Description": "Vince Holding Corp."
	}, {
		"Symbol": "VNDA",
		"Description": "Vanda Pharmaceutical"
	}, {
		"Symbol": "VNET",
		"Description": "21Vianet Group Inc"
	}, {
		"Symbol": "VNO",
		"Description": "Vornado Realty Trust"
	}, {
		"Symbol": "VNO^G",
		"Description": "Vornado Realty Trust"
	}, {
		"Symbol": "VNO^I",
		"Description": "Vornado Realty Trust"
	}, {
		"Symbol": "VNO^K",
		"Description": "Vornado Realty Trust"
	}, {
		"Symbol": "VNO^L",
		"Description": "Vornado Realty Trust"
	}, {
		"Symbol": "VNOM",
		"Description": "Viper Energy LP Cmn"
	}, {
		"Symbol": "VNQI",
		"Description": "Vanguard Glb Exus Re"
	}, {
		"Symbol": "VNR",
		"Description": "Vanguard Natural Res"
	}, {
		"Symbol": "VNRAP",
		"Description": "Vanguard Nt Rs Pfd A"
	}, {
		"Symbol": "VNRBP",
		"Description": "Vanguard Nt Rs 7.625"
	}, {
		"Symbol": "VNRCP",
		"Description": "Vanguard Nt Rs Pfd C"
	}, {
		"Symbol": "VNRX",
		"Description": "VolitionRX Limited"
	}, {
		"Symbol": "VNTV",
		"Description": "Vantiv, Inc."
	}, {
		"Symbol": "VOC",
		"Description": "VOC Energy Trust"
	}, {
		"Symbol": "VOD",
		"Description": "Vodafone Grp Plc Ads"
	}, {
		"Symbol": "VONE",
		"Description": "Vanguard Russell1000"
	}, {
		"Symbol": "VONG",
		"Description": "Vangrd Russl 1000 Gr"
	}, {
		"Symbol": "VONV",
		"Description": "Vangrd Russl 1000Val"
	}, {
		"Symbol": "VOXX",
		"Description": "Voxx Intl Corp"
	}, {
		"Symbol": "VOYA",
		"Description": "Voya Financial, Inc."
	}, {
		"Symbol": "VPG",
		"Description": "Vishay Precision Group, Inc."
	}, {
		"Symbol": "VPV",
		"Description": "Invesco Pennsylvania Value Municipal Income Trust"
	}, {
		"Symbol": "VR",
		"Description": "Validus Holdings, Ltd."
	}, {
		"Symbol": "VR^A",
		"Description": "Validus Holdings, Ltd."
	}, {
		"Symbol": "VRA",
		"Description": "Vera Bradley"
	}, {
		"Symbol": "VRAY",
		"Description": "Viewray Inc Cm ST"
	}, {
		"Symbol": "VREX",
		"Description": "Varex Imaging Corp"
	}, {
		"Symbol": "VREXV",
		"Description": "Varex Imaging Corporation"
	}, {
		"Symbol": "VRIG",
		"Description": "Powershares Variable Rate Investment Grade Port"
	}, {
		"Symbol": "VRML",
		"Description": "Vermillion Inc"
	}, {
		"Symbol": "VRNS",
		"Description": "Varonis Systems Inc"
	}, {
		"Symbol": "VRNT",
		"Description": "Verint Systems Inc"
	}, {
		"Symbol": "VRS",
		"Description": "Verso Corporation"
	}, {
		"Symbol": "VRSK",
		"Description": "Verisk Analytics Inc"
	}, {
		"Symbol": "VRSN",
		"Description": "Verisign Inc"
	}, {
		"Symbol": "VRTB",
		"Description": "Vestin Realty Mtge"
	}, {
		"Symbol": "VRTS",
		"Description": "Virtus Inv Prts"
	}, {
		"Symbol": "VRTU",
		"Description": "Virtusa Corporation"
	}, {
		"Symbol": "VRTV",
		"Description": "Veritiv Corporation"
	}, {
		"Symbol": "VRTX",
		"Description": "Vertex Pharmaceutic"
	}, {
		"Symbol": "VRX",
		"Description": "Valeant Pharmaceuticals International, Inc."
	}, {
		"Symbol": "VSAR",
		"Description": "Versartis Inc Cmn"
	}, {
		"Symbol": "VSAT",
		"Description": "Viasat Inc"
	}, {
		"Symbol": "VSEC",
		"Description": "V S E Cp"
	}, {
		"Symbol": "VSH",
		"Description": "Vishay Intertechnology, Inc."
	}, {
		"Symbol": "VSI",
		"Description": "Vitamin Shoppe, Inc"
	}, {
		"Symbol": "VSLR",
		"Description": "Vivint Solar, Inc."
	}, {
		"Symbol": "VSM",
		"Description": "Versum Materials, Inc."
	}, {
		"Symbol": "VSR",
		"Description": "Versar, Inc."
	}, {
		"Symbol": "VSTM",
		"Description": "Verastem Inc"
	}, {
		"Symbol": "VSTO",
		"Description": "Vista Outdoor Inc."
	}, {
		"Symbol": "VTA",
		"Description": "Invesco Credit Opportunities Fund"
	}, {
		"Symbol": "VTGN",
		"Description": "Vistagen Therap. Com"
	}, {
		"Symbol": "VTHR",
		"Description": "Vanguard Russell3000"
	}, {
		"Symbol": "VTIP",
		"Description": "Vanguard Shtm Infpro"
	}, {
		"Symbol": "VTL",
		"Description": "Vital Therapies Inc"
	}, {
		"Symbol": "VTN",
		"Description": "Invesco Trust  for Investment Grade New York Municipal"
	}, {
		"Symbol": "VTNR",
		"Description": "Vertex Energy Cmn"
	}, {
		"Symbol": "VTR",
		"Description": "Ventas, Inc."
	}, {
		"Symbol": "VTRB",
		"Description": "Ventas Realty, Limited Partnership // Ventas Capital Corporati"
	}, {
		"Symbol": "VTTI",
		"Description": "VTTI Energy Partners LP"
	}, {
		"Symbol": "VTVT",
		"Description": "Vtv Theraptcs Cl A"
	}, {
		"Symbol": "VTWG",
		"Description": "Vangrd Rusll 2000 Gr"
	}, {
		"Symbol": "VTWO",
		"Description": "Vanguard Russell2000"
	}, {
		"Symbol": "VTWV",
		"Description": "Vangrd Rusll 2000 Va"
	}, {
		"Symbol": "VUSE",
		"Description": "Vident Core US Eqty"
	}, {
		"Symbol": "VUZI",
		"Description": "Vuzix Corp Cmn Stk"
	}, {
		"Symbol": "VVC",
		"Description": "Vectren Corporation"
	}, {
		"Symbol": "VVI",
		"Description": "Viad Corp"
	}, {
		"Symbol": "VVPR",
		"Description": "Vivopower International Plc Ordinary Shares"
	}, {
		"Symbol": "VVR",
		"Description": "Invesco Senior Income Trust"
	}, {
		"Symbol": "VVUS",
		"Description": "Vivus Inc"
	}, {
		"Symbol": "VVV",
		"Description": "Valvoline Inc."
	}, {
		"Symbol": "VWOB",
		"Description": "Vanguard EM Gov Bnd"
	}, {
		"Symbol": "VWR",
		"Description": "Vwr Corporation Cmn"
	}, {
		"Symbol": "VXUS",
		"Description": "Vngrd Tl Intl ST ETF"
	}, {
		"Symbol": "VYGR",
		"Description": "Voyager Therapeut Cmn"
	}, {
		"Symbol": "VYMI",
		"Description": "Van Int Hi Div Yld"
	}, {
		"Symbol": "VZ",
		"Description": "Verizon Communications Inc."
	}, {
		"Symbol": "VZA",
		"Description": "Verizon Communications Inc."
	}, {
		"Symbol": "W",
		"Description": "Wayfair Inc."
	}, {
		"Symbol": "WAAS",
		"Description": "AquaVenture Holdings Limited"
	}, {
		"Symbol": "WAB",
		"Description": "Westinghouse Air Brake Technologies Corporation"
	}, {
		"Symbol": "WABC",
		"Description": "Westamerica Bancorp"
	}, {
		"Symbol": "WAC",
		"Description": "Walter Investment Management Corp."
	}, {
		"Symbol": "WAFD",
		"Description": "Washington Federal"
	}, {
		"Symbol": "WAFDW",
		"Description": "Wash Federal Warrant"
	}, {
		"Symbol": "WAGE",
		"Description": "WageWorks, Inc."
	}, {
		"Symbol": "WAIR",
		"Description": "Wesco Aircraft Holdings, Inc."
	}, {
		"Symbol": "WAL",
		"Description": "Western Alliance Bancorporation"
	}, {
		"Symbol": "WALA",
		"Description": "Western Alliance Bancorporation"
	}, {
		"Symbol": "WASH",
		"Description": "Washington TR Bncorp"
	}, {
		"Symbol": "WAT",
		"Description": "Waters Corporation"
	}, {
		"Symbol": "WATT",
		"Description": "Energous Corp Cmn"
	}, {
		"Symbol": "WAYN",
		"Description": "Wayne Savings Bcsh"
	}, {
		"Symbol": "WB",
		"Description": "Weibo Corp. Ads"
	}, {
		"Symbol": "WBA",
		"Description": "Walgreens Boots Alliance"
	}, {
		"Symbol": "WBAI",
		"Description": "500.com Limited"
	}, {
		"Symbol": "WBB",
		"Description": "Westbury Bancorp"
	}, {
		"Symbol": "WBC",
		"Description": "Wabco Holdings Inc."
	}, {
		"Symbol": "WBK",
		"Description": "Westpac Banking Corporation"
	}, {
		"Symbol": "WBKC",
		"Description": "Wolverine Bancorp"
	}, {
		"Symbol": "WBMD",
		"Description": "Webmd Health Corp"
	}, {
		"Symbol": "WBS",
		"Description": "Webster Financial Corporation"
	}, {
		"Symbol": "WBS^E",
		"Description": "Webster Financial Corporation"
	}, {
		"Symbol": "WCC",
		"Description": "WESCO International, Inc."
	}, {
		"Symbol": "WCFB",
		"Description": "Webster City Fed Bcp"
	}, {
		"Symbol": "WCG",
		"Description": "WellCare Health Plans, Inc."
	}, {
		"Symbol": "WCIC",
		"Description": "WCI Communities, Inc."
	}, {
		"Symbol": "WCN",
		"Description": "Waste Connections, Inc."
	}, {
		"Symbol": "WCST",
		"Description": "Wecast Network Inc"
	}, {
		"Symbol": "WD",
		"Description": "Walker & Dunlop, Inc."
	}, {
		"Symbol": "WDAY",
		"Description": "Workday, Inc."
	}, {
		"Symbol": "WDC",
		"Description": "Western Digital Cp"
	}, {
		"Symbol": "WDFC",
		"Description": "W D 40 Co"
	}, {
		"Symbol": "WDR",
		"Description": "Waddell & Reed Financial, Inc."
	}, {
		"Symbol": "WEA",
		"Description": "Western Asset Bond Fund"
	}, {
		"Symbol": "WEB",
		"Description": "Web.Com Group Inc"
	}, {
		"Symbol": "WEBK",
		"Description": "Wellesley Bncp Inc"
	}, {
		"Symbol": "WEC",
		"Description": "WEC Energy Group, Inc."
	}, {
		"Symbol": "WEN",
		"Description": "Wendys Company"
	}, {
		"Symbol": "WERN",
		"Description": "Werner Enterprise"
	}, {
		"Symbol": "WES",
		"Description": "Western Gas Partners, LP"
	}, {
		"Symbol": "WETF",
		"Description": "Wisdomtree Invstmnts"
	}, {
		"Symbol": "WEX",
		"Description": "WEX Inc."
	}, {
		"Symbol": "WEYS",
		"Description": "Weyco Gp Inc"
	}, {
		"Symbol": "WF",
		"Description": "Woori Bank"
	}, {
		"Symbol": "WFBI",
		"Description": "Washingtonfirst Bk"
	}, {
		"Symbol": "WFC",
		"Description": "Wells Fargo & Company"
	}, {
		"Symbol": "WFC.WS",
		"Description": "Wells Fargo & Company"
	}, {
		"Symbol": "WFC^J",
		"Description": "Wells Fargo & Company"
	}, {
		"Symbol": "WFC^L",
		"Description": "Wells Fargo & Company"
	}, {
		"Symbol": "WFC^N",
		"Description": "Wells Fargo & Company"
	}, {
		"Symbol": "WFC^O",
		"Description": "Wells Fargo & Company"
	}, {
		"Symbol": "WFC^P",
		"Description": "Wells Fargo & Company"
	}, {
		"Symbol": "WFC^Q",
		"Description": "Wells Fargo & Company"
	}, {
		"Symbol": "WFC^R",
		"Description": "Wells Fargo & Company"
	}, {
		"Symbol": "WFC^T",
		"Description": "Wells Fargo & Company"
	}, {
		"Symbol": "WFC^V",
		"Description": "Wells Fargo & Company"
	}, {
		"Symbol": "WFC^W",
		"Description": "Wells Fargo & Company"
	}, {
		"Symbol": "WFC^X",
		"Description": "Wells Fargo & Company"
	}, {
		"Symbol": "WFE^A",
		"Description": "Wells Fargo & Company"
	}, {
		"Symbol": "WFM",
		"Description": "Whole Foods Market"
	}, {
		"Symbol": "WFT",
		"Description": "Weatherford International plc"
	}, {
		"Symbol": "WG",
		"Description": "Willbros Group, Inc."
	}, {
		"Symbol": "WGBS",
		"Description": "Wafergen Bio-Sys Cmn"
	}, {
		"Symbol": "WGL",
		"Description": "WGL Holdings Inc"
	}, {
		"Symbol": "WGO",
		"Description": "Winnebago Industries, Inc."
	}, {
		"Symbol": "WGP",
		"Description": "Western Gas Equity Partners, LP"
	}, {
		"Symbol": "WHF",
		"Description": "Whitehorse Finance"
	}, {
		"Symbol": "WHFBL",
		"Description": "Whitehorse Fin Sr Nt"
	}, {
		"Symbol": "WHG",
		"Description": "Westwood Holdings Group Inc"
	}, {
		"Symbol": "WHLM",
		"Description": "Wilhelmina Intl Cmn"
	}, {
		"Symbol": "WHLR",
		"Description": "Wheeler Real Estate"
	}, {
		"Symbol": "WHLRD",
		"Description": "Wheeler Real Estate Investment Trust Inc"
	}, {
		"Symbol": "WHLRP",
		"Description": "Wheeler REIT B Pfd"
	}, {
		"Symbol": "WHLRW",
		"Description": "Wheeler REIT Wts"
	}, {
		"Symbol": "WHR",
		"Description": "Whirlpool Corporation"
	}, {
		"Symbol": "WIA",
		"Description": "Western Asset/Claymore U.S. Treasury Inflation Prot Secs Fd"
	}, {
		"Symbol": "WIFI",
		"Description": "Boingo Wireless Inc"
	}, {
		"Symbol": "WILC",
		"Description": "G Willi-Food Intl"
	}, {
		"Symbol": "WILN",
		"Description": "Wi-Lan Inc Cmn Stk"
	}, {
		"Symbol": "WIN",
		"Description": "Windstream Hldgs Inc"
	}, {
		"Symbol": "WINA",
		"Description": "Winmark Corp"
	}, {
		"Symbol": "WING",
		"Description": "Wingstop Inc Cmn"
	}, {
		"Symbol": "WINS",
		"Description": "Wins Fin Hldgs Ord"
	}, {
		"Symbol": "WINT",
		"Description": "Windtree Therapeutic"
	}, {
		"Symbol": "WIRE",
		"Description": "Encore Wire Cp"
	}, {
		"Symbol": "WIT",
		"Description": "Wipro Limited"
	}, {
		"Symbol": "WIW",
		"Description": "Western Asset/Claymore U.S Treasury Inflation Prot Secs Fd 2"
	}, {
		"Symbol": "WIX",
		"Description": "Wix.Com Ltd"
	}, {
		"Symbol": "WK",
		"Description": "Workiva Inc."
	}, {
		"Symbol": "WKHS",
		"Description": "Workhorse Grp Cmn ST"
	}, {
		"Symbol": "WLB",
		"Description": "Westmoreland Coal"
	}, {
		"Symbol": "WLDN",
		"Description": "Willdan Group Inc"
	}, {
		"Symbol": "WLFC",
		"Description": "Willis Lease Fin C"
	}, {
		"Symbol": "WLH",
		"Description": "Lyon William Homes"
	}, {
		"Symbol": "WLK",
		"Description": "Westlake Chemical Corporation"
	}, {
		"Symbol": "WLKP",
		"Description": "Westlake Chemical Partners LP"
	}, {
		"Symbol": "WLL",
		"Description": "Whiting Petroleum Corporation"
	}, {
		"Symbol": "WLTW",
		"Description": "Willis Towers Wts Cmn"
	}, {
		"Symbol": "WM",
		"Description": "Waste Management, Inc."
	}, {
		"Symbol": "WMAR",
		"Description": "West Marine Inc"
	}, {
		"Symbol": "WMB",
		"Description": "Williams Companies, Inc. "
	}, {
		"Symbol": "WMC",
		"Description": "Western Asset Mortgage Capital Corporation"
	}, {
		"Symbol": "WMGI",
		"Description": "Wright Med Grp Nv"
	}, {
		"Symbol": "WMGIZ",
		"Description": "Wright Medic. N.V Cv"
	}, {
		"Symbol": "WMIH",
		"Description": "Wmih Corp. Cmn"
	}, {
		"Symbol": "WMK",
		"Description": "Weis Markets, Inc."
	}, {
		"Symbol": "WMLP",
		"Description": "Westmoreland Resource Partners, LP"
	}, {
		"Symbol": "WMS",
		"Description": "Advanced Drainage Systems, Inc."
	}, {
		"Symbol": "WMT",
		"Description": "Wal-Mart Stores, Inc."
	}, {
		"Symbol": "WNC",
		"Description": "Wabash National Corporation"
	}, {
		"Symbol": "WNEB",
		"Description": "Western New England Bancorp Inc"
	}, {
		"Symbol": "WNR",
		"Description": "Western Refining, Inc."
	}, {
		"Symbol": "WNRL",
		"Description": "Western Refining Logistics, LP"
	}, {
		"Symbol": "WNS",
		"Description": "WNS Holdings Limited"
	}, {
		"Symbol": "WOOD",
		"Description": "Ishres Gbl Tbr Forst"
	}, {
		"Symbol": "WOOF",
		"Description": "Vca Inc"
	}, {
		"Symbol": "WOR",
		"Description": "Worthington Industries, Inc."
	}, {
		"Symbol": "WPC",
		"Description": "W.P. Carey Inc."
	}, {
		"Symbol": "WPCS",
		"Description": "Wpcs Intl Inc"
	}, {
		"Symbol": "WPG",
		"Description": "Washington Prime Group Inc."
	}, {
		"Symbol": "WPG^H",
		"Description": "Washington Prime Group Inc."
	}, {
		"Symbol": "WPG^I",
		"Description": "Washington Prime Group Inc."
	}, {
		"Symbol": "WPPGY",
		"Description": "Wpp Plc ADR"
	}, {
		"Symbol": "WPRT",
		"Description": "Westport Fuel Systems Inc"
	}, {
		"Symbol": "WPT",
		"Description": "World Point Terminals, LP"
	}, {
		"Symbol": "WPX",
		"Description": "WPX Energy, Inc."
	}, {
		"Symbol": "WPXP",
		"Description": "WPX Energy, Inc."
	}, {
		"Symbol": "WPZ",
		"Description": "Williams Partners LP"
	}, {
		"Symbol": "WR",
		"Description": "Westar Energy, Inc."
	}, {
		"Symbol": "WRB",
		"Description": "W.R. Berkley Corporation"
	}, {
		"Symbol": "WRB^B",
		"Description": "W.R. Berkley Corporation"
	}, {
		"Symbol": "WRB^C",
		"Description": "W.R. Berkley Corporation"
	}, {
		"Symbol": "WRB^D",
		"Description": "W.R. Berkley Corporation"
	}, {
		"Symbol": "WRD",
		"Description": "WildHorse Resource Development Corporation"
	}, {
		"Symbol": "WRE",
		"Description": "Washington Real Estate Investment Trust"
	}, {
		"Symbol": "WRI",
		"Description": "Weingarten Realty Investors"
	}, {
		"Symbol": "WRK",
		"Description": "Westrock Company"
	}, {
		"Symbol": "WRLD",
		"Description": "World Acceptance Cp"
	}, {
		"Symbol": "WRN",
		"Description": "Western Copper and Gold Corporation"
	}, {
		"Symbol": "WSBC",
		"Description": "Wesbanco Inc"
	}, {
		"Symbol": "WSBF",
		"Description": "Waterstone Financial"
	}, {
		"Symbol": "WSCI",
		"Description": "Wsi Industries Inc"
	}, {
		"Symbol": "WSFS",
		"Description": "WSFS Financial Corp"
	}, {
		"Symbol": "WSFSL",
		"Description": "WSFS Fnl 6.25 Sr Nt"
	}, {
		"Symbol": "WSM",
		"Description": "Williams-Sonoma, Inc."
	}, {
		"Symbol": "WSO",
		"Description": "Watsco, Inc."
	}, {
		"Symbol": "WSO.B",
		"Description": "Watsco, Inc."
	}, {
		"Symbol": "WSR",
		"Description": "Whitestone REIT"
	}, {
		"Symbol": "WST",
		"Description": "West Pharmaceutical Services, Inc."
	}, {
		"Symbol": "WSTC",
		"Description": "West Corporation"
	}, {
		"Symbol": "WSTG",
		"Description": "Wayside Technology"
	}, {
		"Symbol": "WSTL",
		"Description": "Westell Technologies"
	}, {
		"Symbol": "WTBA",
		"Description": "West Bancorporation"
	}, {
		"Symbol": "WTFC",
		"Description": "Wintrust Finl Corp"
	}, {
		"Symbol": "WTFCM",
		"Description": "Wintrust Fin Pref D"
	}, {
		"Symbol": "WTFCW",
		"Description": "Wintrust Tarp Wrnts"
	}, {
		"Symbol": "WTI",
		"Description": "W&T Offshore, Inc."
	}, {
		"Symbol": "WTM",
		"Description": "White Mountains Insurance Group, Ltd."
	}, {
		"Symbol": "WTR",
		"Description": "Aqua America, Inc."
	}, {
		"Symbol": "WTS",
		"Description": "Watts Water Technologies, Inc."
	}, {
		"Symbol": "WTT",
		"Description": "Wireless Telecom Group,  Inc."
	}, {
		"Symbol": "WTW",
		"Description": "Weight Watchers International Inc"
	}, {
		"Symbol": "WU",
		"Description": "Western Union Company "
	}, {
		"Symbol": "WUBA",
		"Description": "58.com Inc."
	}, {
		"Symbol": "WVE",
		"Description": "Wave Life Sci Ord Sh"
	}, {
		"Symbol": "WVFC",
		"Description": "Wvs Financial Corp"
	}, {
		"Symbol": "WVVI",
		"Description": "Willamette Valley"
	}, {
		"Symbol": "WVVIP",
		"Description": "Willamette Valley Vineyards In"
	}, {
		"Symbol": "WWAV",
		"Description": "Whitewave Foods Company "
	}, {
		"Symbol": "WWD",
		"Description": "Woodward Inc"
	}, {
		"Symbol": "WWE",
		"Description": "World Wrestling Entertainment, Inc."
	}, {
		"Symbol": "WWW",
		"Description": "Wolverine World Wide, Inc."
	}, {
		"Symbol": "WY",
		"Description": "Weyerhaeuser Company"
	}, {
		"Symbol": "WYIG",
		"Description": "Jm Global Holding Cmn"
	}, {
		"Symbol": "WYIGU",
		"Description": "Jm Global Hold Unit"
	}, {
		"Symbol": "WYIGW",
		"Description": "Jm Global Holdin Wt"
	}, {
		"Symbol": "WYN",
		"Description": "Wyndham Worldwide Corp"
	}, {
		"Symbol": "WYNN",
		"Description": "Wynn Resorts Limited"
	}, {
		"Symbol": "WYY",
		"Description": "WidePoint Corporation"
	}, {
		"Symbol": "X",
		"Description": "United States Steel Corporation"
	}, {
		"Symbol": "XBIO",
		"Description": "Xenetic Biosciences Inc"
	}, {
		"Symbol": "XBIT",
		"Description": "Xbiotech Inc Cmn"
	}, {
		"Symbol": "XBKS",
		"Description": "Xenith Bankshares Inc New"
	}, {
		"Symbol": "XCO",
		"Description": "EXCO Resources NL"
	}, {
		"Symbol": "XCRA",
		"Description": "Xcerra Corp Cmn Stk"
	}, {
		"Symbol": "XEC",
		"Description": "Cimarex Energy Co"
	}, {
		"Symbol": "XEL",
		"Description": "Xcel Energy Inc."
	}, {
		"Symbol": "XELB",
		"Description": "XCEL Brands Cmn"
	}, {
		"Symbol": "XENE",
		"Description": "Xenon Pharmace Cm Sh"
	}, {
		"Symbol": "XENT",
		"Description": "Intersect Ent Cmn"
	}, {
		"Symbol": "XGTI",
		"Description": "XG Technology Icmn"
	}, {
		"Symbol": "XGTIW",
		"Description": "XG Technology Inc"
	}, {
		"Symbol": "XHR",
		"Description": "Xenia Hotels & Resorts, Inc."
	}, {
		"Symbol": "XIN",
		"Description": "Xinyuan Real Estate Co Ltd"
	}, {
		"Symbol": "XIV",
		"Description": "VS Inverse VIX Short Term"
	}, {
		"Symbol": "XKE",
		"Description": "Lehman ABS Corporation"
	}, {
		"Symbol": "XL",
		"Description": "XL Group Ltd."
	}, {
		"Symbol": "XLNX",
		"Description": "Xilinx Inc"
	}, {
		"Symbol": "XLRN",
		"Description": "Acceleron Pharma Cmn"
	}, {
		"Symbol": "XNCR",
		"Description": "Xencor Inc"
	}, {
		"Symbol": "XNET",
		"Description": "Xunlei Limited ADR"
	}, {
		"Symbol": "XNY",
		"Description": "China Xiniya Fashion Limited"
	}, {
		"Symbol": "XOG",
		"Description": "Extraction Oil & Gas Inc"
	}, {
		"Symbol": "XOM",
		"Description": "Exxon Mobil Corporation"
	}, {
		"Symbol": "XOMA",
		"Description": "Xoma Corporation"
	}, {
		"Symbol": "XON",
		"Description": "Intrexon Corporation"
	}, {
		"Symbol": "XONE",
		"Description": " Exone Company"
	}, {
		"Symbol": "XOXO",
		"Description": "XO Group, Inc."
	}, {
		"Symbol": "XPL",
		"Description": "Solitario Exploration & Royalty Corp"
	}, {
		"Symbol": "XPLR",
		"Description": "Xplore Tech Corp De"
	}, {
		"Symbol": "XPO",
		"Description": "XPO Logistics, Inc."
	}, {
		"Symbol": "XRA",
		"Description": "Exeter Resource Corporation"
	}, {
		"Symbol": "XRAY",
		"Description": "Dentsply Sirona Inc"
	}, {
		"Symbol": "XRDC",
		"Description": "Crossroads Cap Inc"
	}, {
		"Symbol": "XRM",
		"Description": "Xerium Technologies, Inc."
	}, {
		"Symbol": "XRX",
		"Description": "Xerox Corporation"
	}, {
		"Symbol": "XTLB",
		"Description": "Xtl Biopharma Ads"
	}, {
		"Symbol": "XTLY",
		"Description": "Xactly Corporation"
	}, {
		"Symbol": "XTNT",
		"Description": "Xtant Medical Holdings, Inc."
	}, {
		"Symbol": "XXIA",
		"Description": "IXIA"
	}, {
		"Symbol": "XXII",
		"Description": "22nd Century Group, Inc"
	}, {
		"Symbol": "XYL",
		"Description": "Xylem Inc."
	}, {
		"Symbol": "Y",
		"Description": "Alleghany Corporation"
	}, {
		"Symbol": "YDIV",
		"Description": "First Trust ETF Vi"
	}, {
		"Symbol": "YDKN",
		"Description": "Yadkin Financial Corporation"
	}, {
		"Symbol": "YECO",
		"Description": "Yulong Eco-Mtls Ord"
	}, {
		"Symbol": "YELP",
		"Description": "Yelp Inc."
	}, {
		"Symbol": "YGE",
		"Description": "Yingli Green Energy Holding Company Limited"
	}, {
		"Symbol": "YHOO",
		"Description": "Yahoo! Inc"
	}, {
		"Symbol": "YIN",
		"Description": "Yintech Investm Ads"
	}, {
		"Symbol": "YLCO",
		"Description": "Global X Yieldco ETF"
	}, {
		"Symbol": "YNDX",
		"Description": "Yandex N.V."
	}, {
		"Symbol": "YORW",
		"Description": "York Water Co"
	}, {
		"Symbol": "YPF",
		"Description": "YPF Sociedad Anonima"
	}, {
		"Symbol": "YRCW",
		"Description": "YRC Worldwide"
	}, {
		"Symbol": "YRD",
		"Description": "Yirendai Ltd."
	}, {
		"Symbol": "YTEN",
		"Description": "Yield10 Bioscience Inc."
	}, {
		"Symbol": "YTRA",
		"Description": "Yatra Online Inc. Ordinary Shares"
	}, {
		"Symbol": "YUM",
		"Description": "Yum! Brands, Inc."
	}, {
		"Symbol": "YUMA",
		"Description": "Yuma Energy, Inc."
	}, {
		"Symbol": "YUMC",
		"Description": "Yum China Holdings, Inc."
	}, {
		"Symbol": "YUME",
		"Description": "YuMe, Inc."
	}, {
		"Symbol": "YY",
		"Description": "YY Inc"
	}, {
		"Symbol": "YZC",
		"Description": "Yanzhou Coal Mining Company Limited"
	}, {
		"Symbol": "Z",
		"Description": "Zillow Group Cl C"
	}, {
		"Symbol": "ZAGG",
		"Description": "Zagg Inc"
	}, {
		"Symbol": "ZAIS",
		"Description": "Zais Group Hld A Cmn"
	}, {
		"Symbol": "ZAYO",
		"Description": "Zayo Group Holdings, Inc."
	}, {
		"Symbol": "ZB^A",
		"Description": "Zions Bancorporation"
	}, {
		"Symbol": "ZB^F",
		"Description": "Zions Bancorporation"
	}, {
		"Symbol": "ZB^G",
		"Description": "Zions Bancorporation"
	}, {
		"Symbol": "ZB^H",
		"Description": "Zions Bancorporation"
	}, {
		"Symbol": "ZBH",
		"Description": "Zimmer Biomet Holdings, Inc."
	}, {
		"Symbol": "ZBIO",
		"Description": "Proshr Ul ST Nq Bio"
	}, {
		"Symbol": "ZBK",
		"Description": "Zions Bancorporation"
	}, {
		"Symbol": "ZBRA",
		"Description": "Zebra Technologies"
	}, {
		"Symbol": "ZDGE",
		"Description": "Zedge, Inc."
	}, {
		"Symbol": "ZEN",
		"Description": "Zendesk, Inc."
	}, {
		"Symbol": "ZEUS",
		"Description": "Olympic Steel Inc"
	}, {
		"Symbol": "ZF",
		"Description": "Zweig Fund, Inc. "
	}, {
		"Symbol": "ZFGN",
		"Description": "Zafgen Inc Cmn"
	}, {
		"Symbol": "ZG",
		"Description": "Zillow Grp Inc Cl A"
	}, {
		"Symbol": "ZGNX",
		"Description": "Zogenix Inc"
	}, {
		"Symbol": "ZION",
		"Description": "Zions Bancorporation"
	}, {
		"Symbol": "ZIONW",
		"Description": "Zions Bncrp Wts"
	}, {
		"Symbol": "ZIOP",
		"Description": "Ziopharm Oncology In"
	}, {
		"Symbol": "ZIV",
		"Description": "VS Inverse VIX Mterm"
	}, {
		"Symbol": "ZIXI",
		"Description": "Zix Corp"
	}, {
		"Symbol": "ZLTQ",
		"Description": "Zeltiq Aesthetics"
	}, {
		"Symbol": "ZN",
		"Description": "Zion Oil & Gas Inc"
	}, {
		"Symbol": "ZNGA",
		"Description": "Zynga Inc Cl A Cmn"
	}, {
		"Symbol": "ZNH",
		"Description": "China Southern Airlines Company Limited"
	}, {
		"Symbol": "ZOES",
		"Description": "Zoes Kitchen, Inc."
	}, {
		"Symbol": "ZPIN",
		"Description": "Zhaopin Limited"
	}, {
		"Symbol": "ZSAN",
		"Description": "Zosano Pharma Cmn"
	}, {
		"Symbol": "ZTO",
		"Description": "ZTO Express Cayman Inc."
	}, {
		"Symbol": "ZTR",
		"Description": "Virtus Global Dividend & Income Fund Inc."
	}, {
		"Symbol": "ZTS",
		"Description": "Zoetis Inc."
	}, {
		"Symbol": "ZUMZ",
		"Description": "Zumiez Inc"
	}, {
		"Symbol": "ZX",
		"Description": "China Zenix Auto International Limited"
	}, {
		"Symbol": "ZYNE",
		"Description": "Zynerba Pharma CS"
	}];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var longestPhrase = __webpack_require__(3).longestPhrase;
	
	exports.per = function (string) {
	
		var _Symbol = longestPhrase(string.trim().replace(/[.,\/#!@$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " "));
		return _Symbol[0].Symbol;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var stockList = __webpack_require__(1).stockList;
	var minRelevance = .3;
	// set relevance to return matching phrases that are a certain percentage of  company description
	// possible overal character length more relevant than word chunks
	module.exports.longestPhrase = function (string) {
	
		// this block finds  longest resultsutive phrase from a phrase that is contained by a company description 
		var results = [{ Longest: "", Symbol: "", Description: "", Relevance: 0 }];
		var phrase = string.split(" ");
	
		for (var k = 0; k < stockList.length; k++) {
			var companyString = stockList[k].Description;
			for (var i = 0; i < phrase.length; i++) {
				var pat1 = new RegExp("\\b(" + phrase[i] + ")\\b");
				if (pat1.test(companyString) && phrase[i][0] === phrase[i][0].toUpperCase()) {
					var t = phrase[i];
					for (var j = i + 1; j < phrase.length - 1; j++) {
						var pat2 = new RegExp("\\b(" + phrase[i] + " " + phrase[j] + ")\\b");
						if (pat2.test(companyString)) {
							t += " " + phrase[j];
						} else {
							break;
						}
					}
	
					var relevance = t.split(" ").length / stockList[k].Description.split(" ").length;
					var matchObject = { Longest: t, Symbol: stockList[k].Symbol, Description: stockList[k].Description, Relevance: relevance };
	
					if (results[0].Longest.length < t.length && matchObject.Longest.length / companyString.length > minRelevance) {
						results[0] = matchObject;
					} else if (results[0].Longest.length === t.length) {
						if (results[0].Longest.split(" ").length / results[0].Description.split(" ").length < matchObject.Longest.split(" ").length / matchObject.Description.split(" ").length) {
							results[0] = matchObject;
						}
					}
				}
			}
		}
		return results;
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.umd.js.map