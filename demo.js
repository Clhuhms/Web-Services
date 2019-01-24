//inuts
const input_xml = document.querySelector('#input_xml');
const input_xpath = document.querySelector('#input_xpath');

//outputs
const out_root = document.querySelector('#out_root');
const out_count = document.querySelector('#out_count');
const out_children = document.querySelector('#out_children');

//parser
const parsre = new DOMParser();

let xmldoc

//handle input_xml events
input_xml.onkeyup = function()
{
	xmldoc = parser.parseFromString(this.value, 'text/xml');
	out_root.innerText = xmldoc.documentElement.tagName
};

input_xpath.onkeyup = function()
{
	console.log(this.value);
};