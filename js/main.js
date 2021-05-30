// Bài 1
function bai1() {
    var content = "";
    var n = 1;
    for (var k = 1; k <= 10; k++) {
        for (var i = 1; i <= 10; i++) {
            if (i===10) {
                content += n + " ";
            }else{
                content += n + " - ";
            }
            n++;
        }
        content += "<br>";
    }
    document.getElementById("bai1").innerHTML = content;
}

// Bài 2
var numberList = [];
function addNumberbai2() {
    var txtNumber = document.getElementById("txtNumber").value;
    var convertedNumbers = txtNumber.split(",");
    for (var i = 0; i < convertedNumbers.length; i++) {
        numberList.push(+convertedNumbers[i]);
    }
}
var prime = [];
function checkPrime(j) {
    var count = 0;
    for (var i = 1; i <= numberList[j]; i++) {
        if (numberList[j] % i === 0) {
            count++;
        }
    }
    if (count === 2) {
         prime.push(numberList[j]);
         return;
    }
}
function bai2() {
    for (var j = 0; j < numberList.length; j++) {
        checkPrime(j)
    }
    document.getElementById("bai2").innerHTML = "Các Số Nguyên Tố : "+ prime;
}
// Bài 3
function bai3() {
    var n = +document.getElementById("txtNumber3").value;
    var sum = 0;
    for (var i = 2; i <= n; i++) {
        sum = sum + i;
    }
    sum = sum + (2 * n);
    document.getElementById("bai3").innerHTML = "S = " + sum;
}

// Bài 4
function bai4() {
    var n = +document.getElementById("txtNumber4").value;
    var divisors = "";
    if (n == 0) {
        document.getElementById("bai4").innerHTML = "Số 0 không phải là ước của bất kì số nguyên nào";
    } else {
        for (var i = n; i >= 0; i--) {
            if (n % i === 0) {
                divisors += i + " ";
            }
        }
        document.getElementById("bai4").innerHTML = "Ước số của " + n + " là : " + divisors;
    }


}

// Bài 5
function bai5() {
    var newNumber = "";
    var n = document.getElementById("txtNumber5").value;
    for (var i = n.length - 1; i >= 0; i--) {
        newNumber += n[i];
    }
    document.getElementById("bai5").innerHTML = newNumber;
}

// Bài 6
function bai6() {
    var i = 0;
    for (var n = 0; n <= ((Math.sqrt(8 * 100 + 1) - 1) / 2); n++) {
        if (n * (n + 1) / 2 <= 100) {
            document.getElementById("bai6").innerHTML = "X = " + n + " Là nguyên dương lớn nhất";
        }
    }

}

// Bài 7
function bai7() {
    var sum = 0;
    var table = "";
    var n = +document.getElementById("txtNumber7").value;

    for (var i = 0; i <= 10; i++) {
        sum = n * i;
        table += n + " X " + i + " = " + sum + "<br>";
    }
    document.getElementById("bai7").innerHTML = table;
    return;


}

// Bài 8
function bai8() {
    var players = [[], [], [], []];
    var cards = ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S",
        "AS", "7H", "9K", "10D"]
    for (var i = 0; i < players.length; i++) {
        for (var k = i; k < cards.length; k += 4) {
            players[i].push(cards[k])
        }
    }
    document.getElementById("bai8").innerHTML = "Người Chơi 1: " + players[0] + "<br>" +
        "Người Chơi 2: " + players[1] + "<br>" +
        "Người Chơi 3: " + players[2] + "<br>" +
        "Người Chơi 4: " + players[3];
}

// Bài 9
function bai9() {
    var n = +document.getElementById("txtNumber9N").value;
    var m = +document.getElementById("txtNumber9M").value;
    var cho, ga;
    cho = (n - 2 * m) / 2;
    ga = m - cho;
    if (ga < 0 || cho < 0) {
        return document.getElementById("bai9").innerHTML = "Lỗi";
    }
    document.getElementById("bai9").innerHTML = "Số Con Chó : " + cho + " Con" + "<br>" + "Số Con Gà : " + ga + " Con";
}


// Bài 10 
function bai10() {
    var h = +document.getElementById("txtNumber10H").value;
    var m = +document.getElementById("txtNumber10M").value;
    var angle = 0;

    if (0 <= h && h <= 24 && 0 <= m && m <= 60) {
        if (h >= 12) {
            h -= 12;
        }
        angle = Math.abs((m * 6) - 0.5 * ((h * 60) + m));
        document.getElementById("bai10").innerHTML =
            "Góc Lệch Giữa Kim Giờ Và Kim Phút Là : " + angle + " Độ";
    } else {
        document.getElementById("bai10").innerHTML = "Kiểm Tra Lại Số Giờ Và Số Phút";
    }
}