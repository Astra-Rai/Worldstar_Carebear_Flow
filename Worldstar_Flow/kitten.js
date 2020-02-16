console.log("kittens of the world unit");

//store cat images in an array
let filenames = [

	"carebear_1.jpg",
	"carebear_2.jpg",
	"carebear_3.jpg"
]

/*
The Element.getElementsByTagName() method returns a live HTMLCollection of elements with the given tag name. 
All descendants of the specified element are searched, but not the element itself. 
The returned list is live, which means it updates itself with the DOM tree automatically. 
Therefore, there is no need to call Element.getElementsByTagName() with the same element 
and arguments repeatedly if the DOM changes in between calls.
a live HTMLCollection of elements with the given tag name. 
All descendants of the specified element are searched, but not the element itself. The returned list is live, which means it updates itself with the DOM tree automatically. Therefore, there is no need to call Element.getElementsByTagName() with the same element and arguments repeatedly if the DOM changes in between calls.

*/

let imgs = document.getElementsByTagName('img');


for(imgElt of imgs){

//select a random index number of the array filenames
//remember that the array filenames contains three element in indicies 0 -2
	let r = Math.floor(Math.random() * filenames.length);
//the variable file contains the string path used in: chrome.extension.get URL(string path)
	let file = 'kittens/' + filenames[r];
//getURL: - string chrome.extension/getURL(string path)
//the path url is the file name that house the pictures, kittens..
//then the file name
//and this case the file randomly selected from the array filenames, assigned to r variable
	let url = chrome.extension.getURL(file);
//the source attribute, src, of an image on a webpage needs an actual pat
	imgElt.src = url;
//console.log change of photos
//console.log , will allow browser to run the value of the variable, url
	console.log(url);

}