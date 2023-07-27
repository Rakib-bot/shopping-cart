var product_1 = "product-1 minus";//- 1
var product_2 = "product-2 minus";


var pd_1_quantity = "product-1 quantity old";
var pd_2_quantity = "product-2 quantity old";

function subtraction(mark, total_amount, pd_price, pd_quantity, total_bar) {

    var res = document.getElementsByClassName(total_bar)
    var price = parseFloat(pd_price)
    var quantity = parseFloat(pd_quantity)
    var total_old= parseFloat(document.getElementById(total_amount).innerText);
   // console.log(total_old);



    if (quantity > 0) {

        for (let i = 0; i < res.length; i++) {
            var tmp = res[i].innerHTML;
            // console.log(tmp);
            var intNumber = parseFloat(tmp.replace(/,/g, ""), 10);
            // console.log(intNumber);
            intNumber -= pd_price;
            res[i].innerHTML = intNumber.toLocaleString();

        }
       total_old-=pd_price;
       // console.log(price);
        --quantity;
        document.getElementById(mark).value = quantity;
        document.getElementById(total_amount).innerText = total_old;

    }
    else
        alert("You can't buy less than 0");




}

document.getElementById(product_1).addEventListener('click', function () {

    var pd_quantity = document.getElementById(pd_1_quantity).value;

    subtraction("product-1 quantity old", "pd_1_price_old", "1219", pd_quantity, "total_bar");

    //console.log("i am in main",result);

})
document.getElementById(product_2).addEventListener('click', function () {

    var pd_quantity = document.getElementById(pd_2_quantity).value;

    subtraction("product-2 quantity old", "pd_2_price_old", "59", pd_quantity,"total_bar");

    //console.log("i am in main",result);

})