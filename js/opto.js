$(document).ready(function () {
    var fundoimg = 1;
    var carrossel = function () {
        if(fundoimg === 1) {
            $(".menu_jumb").css("background-image","url('img/Background2.png')");
            fundoimg = 2;
        } else if (fundoimg === 2) {
            $(".menu_jumb").css("background-image","url('img/Background.png')");
            fundoimg = 3;
        } else {
        		$(".menu_jumb").css("background-image","url('img/Background3.png')");
            fundoimg=1;
        }
    }

    setInterval(carrossel,2000);
		});