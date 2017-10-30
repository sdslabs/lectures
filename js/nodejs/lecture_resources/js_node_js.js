var a = "Awesome string";
var showAwesome = true;

function printMySpecialNo(no) {
    console.log(no);
}

if (showAwesome == true)
    console.log("Super awesome string is : ", a);
else
    console.log("Hello World ");
for (var q = 0; q < 5; q++)
    printMySpecialNo(q)
