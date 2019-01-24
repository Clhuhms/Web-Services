//inputs
const input_xml = document.querySelector('#input_xml');
const input_xpath = document.querySelector('#input_xpath');
//const xpath_test = document.querySelector('#xpath_test');

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
	out_count.innerText = xmldoc.documentElement.childElementCount
	out_children.innerText = xmldoc.documentElement.children[0].tagName
	
	
};

input_xpath.onkeyup = function()
{	
	const nodes = xmldoc.evaluate(input_xpath, xmldoc, null, XPathResult.ANY_TYPE, null);
	
	let result = nodes.iterateNext();
	let concat = '';
	
	while (result) 
	{
		const str = new XMLSerializer.serializeToString(result);
		concat += str;
		result = nodes.iterateNext();
	}
	out_xpath.innerText = concat;
};



input_xpath.onkeyup = function()
{
	console.log(this.value);
};
