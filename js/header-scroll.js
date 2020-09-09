window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 88 || document.documentElement.scrollTop > 88) {
        document.getElementById("header_nav").style.padding = "0px 0px";
        document.getElementById("header_nav").style.background="#281001";
      } else {
        document.getElementById("header_nav").style.padding = "108px 0px";
        document.getElementById("header_nav").style.background="transparent";
      }
    }