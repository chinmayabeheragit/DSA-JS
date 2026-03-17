

var fruits = ["Apple", "Banana"];
var tempString = "Pie,Dumpling,Cider";
var tempArray = new Array();
tempArray.push(tempString);
tempString = "Bread,Republic";
tempArray.push(tempString);
var output = {};
for (var i = 0; i < fruits.length; i++)
{
    var members = tempArray[i].split(",");
    var temp = {};
    for(var k = 0; k < members.length; k++)
    {
        temp[("" + k)] = members[k];
    }
    output[("" + fruits[i])] = temp;
}
console.log(output);
//Different ways to access the objects
console.log(output.Apple);
console.log(output["Apple"]);
console.log(output.Banana[0]);
console.log(output["Banana"]["0"]);