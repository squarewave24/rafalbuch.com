//Tag By Rss 0.1
//Leo Adhemar Tan
//me@leoadhemartan.com
//Indexes all posts in your ghost blog and prints them out according to tags
var itemName = new Array();
var itemData = new Array();
function loadXMLDoc(filename) //This loads the RSS Feed
    {
        if (window.XMLHttpRequest)
            {
            xhttp=new XMLHttpRequest();
           }
        else // code for IE5 and IE6
            {
            xhttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
        xhttp.open("GET",filename,false);
        xhttp.send();
        return xhttp.responseXML;
    }    

function listTags(tag)
    {
        var xmlDoc=loadXMLDoc("/rss"); //url of rss "/rss" for Ghost Themes
        var x=xmlDoc.getElementsByTagName("item");
            for (i=0;i<x.length;i++) 
                {
                    for (hload=0; hload<x[i].childElementCount;hload++)
                        {            
                            y=x[i].childNodes[hload];
                            itemName[hload] = y.nodeName;
                            itemData[hload] = y.childNodes[0].nodeValue;                  
                        }
                    for (hcheck=0; hcheck<x[i].childElementCount;hcheck++)
                        {  
                            if (itemData[hcheck] == tag)
                                {  
                                    document.write('<h3><a href="' + itemData[2] + '">' + itemData[0] + '</a></h3><br>');  //Title with link
                                    document.write(itemData[1].substr(0, 128)); //Body post
                                    document.write('... ' + '<a href="' + itemData[2] + '">' + "Read Post" +  '</a></h1><br>');
                                    document.write('<br><b>Categories: '); //List Categories
                                         for (hcat=0; hcat<x[i].childElementCount;hcat++) //List all categories
                                            {
                                                if (itemName[hcat] == "category")
                                                    {
                                                        document.write('[ ' + itemData[hcat] + ' ]  ')
                                                    }
                                            
                                            }
                                    document.write('</b>');
                                }
                            
         
                        }
                }
    
    }

