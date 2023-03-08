const text = "<bookstore>"
         + "<book><author>George R. R. Martin</author><title>A Game of Thrones</title><year>1996</year></book>"
         + "<book><author>George R. R. Martin</author><title>A Clash of Kings</title><year>1998</year></book>"
         + "<book><author>George R. R. Martin</author><title>A Storm of Swords</title><year>2000</year></book>"
         + "<book><author>George R. R. Martin</author><title>A Feast for Crows</title><year>2005</year></book>"
         + "<book><author>George R. R. Martin</author><title>A Dance with Dragons</title><year>2011</year></book>"
         + "</bookstore>";

let listItemArray = document.getElementsByTagName("li");
listItemArray[2].innerHTML += " " + displayBookTitle(0);

//Write your function declarations below this line
//example of a function getting and returning the book titles from the XML "text"
function displayBookTitle(n) {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(text, "text/xml");
    let x = xmlDoc.getElementsByTagName("title");
    return x[n].childNodes[0].nodeValue;
}

//MY CODE STARTS HERE

//Ex4
listItemArray[3].innerHTML += " " + displayBookTitle(2);

//Ex5
function displayBookAuthor(n)
{
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(text, "text/xml");
    let x = xmlDoc.getElementsByTagName("author")
    return x[n].childNodes[0].nodeValue;
}
let listItemAuthor = document.getElementById("authorName");
listItemAuthor.innerHTML = " " + displayBookAuthor(0);

//Ex6
let tableContent = "<tr class='got-table'><th class='got-table'>Author</th><th class='got-table'>Title</th><th class='got-table'>Year</th></tr>";
let parser = new DOMParser();
let xmlDoc = parser.parseFromString(text, "text/xml");
let books = xmlDoc.getElementsByTagName("book");
for (let i = 0; i < books.length; i++) {
    tableContent += "<tr class='got-table'>" +
        "<td class='got-table'>" + books[i].querySelector("author").childNodes[0].nodeValue + "</td>" +
        "<td class='got-table'>" + books[i].querySelector("title").childNodes[0].nodeValue + "</td>" +
        "<td class='got-table'>" + books[i].querySelector("year").childNodes[0].nodeValue + "</td>" +
        "</tr>";
}
document.getElementById("GOT").innerHTML = tableContent;

//Ex9
let hpTableContent = "<tr class='hp-table'><th class='hp-table'>Author</th><th class='hp-table'>Title</th><th class='hp-table'>Year</th></tr>";
function requestXML()
{
    let xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function ()
    {
        if (this.readyState == 4 && this.status == 200)
            showData(this);
    };
    xHttp.open("GET", "hp-books.xml");
    xHttp.send();
}
function showData(xml)
{
    let xmlDoc = xml.responseXML;
    let books = xmlDoc.getElementsByTagName("book");
    for (let i = 0; i < books.length; i++) {
        hpTableContent += "<tr class='hp-table'>" +
            "<td class='hp-table'>" + books[i].querySelector("author").childNodes[0].nodeValue + "</td>" +
            "<td class='hp-table'>" + books[i].querySelector("title").childNodes[0].nodeValue + "</td>" +
            "<td class='hp-table'>" + books[i].querySelector("year").childNodes[0].nodeValue + "</td>" +
            "</tr>";
    }
    document.getElementById("HP").innerHTML = hpTableContent;
}
requestXML();

//Ex11
function requestMyXML()
{
    let xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function ()
    {
        if (this.readyState == 4 && this.status == 200)
            showMyData(this);
    };
    xHttp.open("GET", "myList.xml");
    xHttp.send();
}
function showMyData(xml)
{
    let xmlDoc = xml.responseXML;
    let lists = xmlDoc.getElementsByTagName("list-of-things");
    let happyList = lists[0].getElementsByTagName("make-me-happy");
    let happyThings = happyList[0].getElementsByTagName("list-item");
    document.getElementById("happy").innerHTML += " " + happyThings.length;
    let goodList = lists[0].getElementsByTagName("i-am-good-at");
    let goodThings = goodList[0].getElementsByTagName("list-item");
    document.getElementById("good").innerHTML += " " + goodThings.length;
    let learnList = lists[0].getElementsByTagName("i-want-to-learn");
    let learnThings = learnList[0].getElementsByTagName("list-item");
    document.getElementById("learn").innerHTML += " " + learnThings.length;

}
requestMyXML();