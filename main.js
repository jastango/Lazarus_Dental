// Mobile Nav Menu

$(function () {
    menu = $('nav ul');

    $('#openup').on('click', function (e) {
        e.preventDefault(); menu.slideToggle();
    });

    $(window).resize(function () {
        var w = $(this).width(); if (w > 480 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $('nav li').on('click', function (e) {
        var w = $(window).width(); if (w < 480) {
            menu.slideToggle();
        }
    });
    $('.open-menu').height($(window).height());
});


// Get modal element
var modal = document.getElementById('modal-General-Dentistry');
var modal1 = document.getElementById('modal-Cosmetic-Dentistry');
var modal2 = document.getElementById('modal-Extractions');
var modal3 = document.getElementById('modal-Dentures-Partials');
var modal4 = document.getElementById('modal-Crowns-Bridges');
var modal5 = document.getElementById('modal-Ozone-Trays');
var modal6 = document.getElementById('modal-Mercury-Filling-Removal');

// Get open modal button

var modalBtn = document.getElementById('modalBtn');
var modalBtn1 = document.getElementById('modalBtn1');
var modalBtn2 = document.getElementById('modalBtn2');
var modalBtn3 = document.getElementById('modalBtn3');
var modalBtn4 = document.getElementById('modalBtn4');
var modalBtn5 = document.getElementById('modalBtn5');
var modalBtn6 = document.getElementById('modalBtn6');

// Get close button

var closeBtn = document.getElementsByClassName('closeBtn')[0];
var closeBtn1 = document.getElementsByClassName('closeBtn1')[0];
var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];
var closeBtn3 = document.getElementsByClassName('closeBtn3')[0];
var closeBtn4 = document.getElementsByClassName('closeBtn4')[0];
var closeBtn5 = document.getElementsByClassName('closeBtn5')[0];
var closeBtn6 = document.getElementsByClassName('closeBtn6')[0];



// Listen for open click on button

modalBtn.addEventListener('click', openModal);
modalBtn1.addEventListener('click', openModal1);
modalBtn2.addEventListener('click', openModal2);
modalBtn3.addEventListener('click', openModal3);
modalBtn4.addEventListener('click', openModal4);
modalBtn5.addEventListener('click', openModal5);
modalBtn6.addEventListener('click', openModal6);

// Listen for close click

closeBtn.addEventListener('click', closeModal);
closeBtn1.addEventListener('click', closeModal1);
closeBtn2.addEventListener('click', closeModal2);
closeBtn3.addEventListener('click', closeModal3);
closeBtn4.addEventListener('click', closeModal4);
closeBtn5.addEventListener('click', closeModal5);
closeBtn6.addEventListener('click', closeModal6);

// Listen for outside click

window.addEventListener('click', clickOutside);
window.addEventListener('click', clickOutside1);
window.addEventListener('click', clickOutside2);
window.addEventListener('click', clickOutside3);
window.addEventListener('click', clickOutside4);
window.addEventListener('click', clickOutside5);
window.addEventListener('click', clickOutside6);

// Function to open modal

function openModal() {
    modal.style.display = 'block';

}

function openModal1() {
    modal1.style.display = 'block';

}

function openModal2() {
    modal2.style.display = 'block';

}

function openModal3() {
    modal3.style.display = 'block';

}

function openModal4() {
    modal4.style.display = 'block';

}

function openModal5() {
    modal5.style.display = 'block';

}

function openModal6() {
    modal6.style.display = 'block';

}

// Function to close modal

function closeModal() {
    modal.style.display = 'none';
}

function closeModal1() {
    modal1.style.display = 'none';
}

function closeModal2() {
    modal2.style.display = 'none';
}

function closeModal3() {
    modal3.style.display = 'none';
}

function closeModal4() {
    modal4.style.display = 'none';
}

function closeModal5() {
    modal5.style.display = 'none';

}
function closeModal6() {
    modal6.style.display = 'none';
}

// Function to close modal if outside click

function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
function clickOutside1(e) {
    if (e.target == modal1) {
        modal1.style.display = 'none';
    }
}

function clickOutside2(e) {
    if (e.target == modal2) {
        modal2.style.display = 'none';
    }
}

function clickOutside3(e) {
    if (e.target == modal3) {
        modal3.style.display = 'none';
    }
}

function clickOutside4(e) {
    if (e.target == modal4) {
        modal4.style.display = 'none';
    }
}

function clickOutside5(e) {
    if (e.target == modal5) {
        modal5.style.display = 'none';
    }
}

function clickOutside6(e) {
    if (e.target == modal6) {
        modal6.style.display = 'none';
    }
}

