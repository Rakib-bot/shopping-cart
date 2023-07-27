var product_1 = "product-1 plus";//+ 1
var product_2 = "product-2 plus";


var pd_1_quantity = "product-1 quantity old";
var pd_2_quantity = "product-2 quantity old";

function addition(mark, total_amount, pd_price, pd_quantity, total_bar) {

    var res = document.getElementsByClassName(total_bar)
    var price = parseFloat(pd_price)
    var quantity = parseFloat(pd_quantity)
    console.log(price," ",quantity);


    for (let i = 0; i < res.length; i++) {

        var tmp = res[i].innerHTML;
        // console.log(tmp);
        var intNumber = parseFloat(tmp.replace(/,/g, ""), 10);
        // console.log(intNumber);
        intNumber += price;
        res[i].innerHTML = intNumber.toLocaleString();


    }


    ++quantity;
    var total = price * quantity;


    document.getElementById(mark).value = quantity;
    document.getElementById(total_amount).innerText = total;

    // console.log(total);

}


document.getElementById(product_1).addEventListener('click', function () {

    var pd_quantity = document.getElementById(pd_1_quantity).value;

    addition("product-1 quantity old", "pd_1_price_old", "1219", pd_quantity, "total_bar");

    //console.log("i am in main",result);

})
document.getElementById(product_2).addEventListener('click', function () {

    var pd_quantity = document.getElementById(pd_2_quantity).value;

    addition("product-2 quantity old", "pd_2_price_old", "59", pd_quantity, "total_bar");

})

