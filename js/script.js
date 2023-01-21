window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
}


$(document).ready(function () {

  $(window).scroll(function (e) {

    // Detect how far are we from the top of the page
let windowTop = $(this).scrollTop();
// Loop through every navigation menu item
$('.nav_menu a').each(function (event) {

    // Check for the current navigation item associated section
    // Check how far the associated section is from the top
    // If the associated section is as far as the user have scrolled, add 'active' class to the item.
    if (windowTop >= $($(this).attr('href')).offset().top - 100) {
        // Remove 'active' from previously highlighted menu items
        $('.nav_menu .active').removeClass('active');

        // Highlight the current menu item by adding 'active' class
        $(this).addClass('active');
    }
});

  });

});



gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({

  // large
  "(min-width: 784px)": function() {
    // setup animations and ScrollTriggers for screens 960px wide or greater...
    // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.

    const firstElem = document.querySelector(".panel");

    function goToSection(i, anim) {
      gsap.to(window, {
        scrollTo: {y: i*innerHeight + firstElem.offsetTop, autoKill: false, ease: "power1.inOut"},
        duration: 1,
        delay:0.2

      });

      if(anim) {
        anim.restart();
      }
    }

    gsap.fromTo(".line-g", {x: -800}, {delay:0.5,x:0, duration: 0.6,ease: true,
      scrollTrigger: {
        trigger: ".line-g",
        start: "bottom bottom"
      }});

    gsap.fromTo(".bg-section6", {x: 200,scale:0.2,y:-200,opacity:0}, {delay:0.5,x: 0,scale:1,y:0,opacity:1, duration: 1,
        scrollTrigger: {
          trigger: ".bg-section6",
          start: "bottom bottom"
        }});

    gsap.fromTo(".bg-section7", {scale:2,opacity:0}, {delay:0.2,opacity:1,scale:1, duration: 1.2,
          scrollTrigger: {
            trigger: ".bg-section7",
            start: "top top"
          }});

          gsap.fromTo(".circle-location", {opacity:0}, {delay:2,opacity:1,duration: 1,
                scrollTrigger: {
                  trigger: ".circle-location",
                  start: "bottom bottom"
                }});
                gsap.fromTo(".logo-location", {opacity:0}, {delay:2,opacity:1,duration: 1,
                      scrollTrigger: {
                        trigger: ".logo-location",
                        start: "bottom bottom"
                      }});

    gsap.fromTo(".bg-section7", {scale:1}, {delay:0.2,scale:0.3, duration: 1,
                scrollTrigger: {
                  trigger: ".bg-section7",
                  start: "bottom 90%",
                  toggleActions: "restart pause reverse reverse"
                }});

    gsap.fromTo(".elipse", {x:-300,y:-200}, {x:0,y:0, duration: 1,
          scrollTrigger: {
            trigger: ".elipse",
            start: "bottom bottom"
          }});

    gsap.fromTo(".elipse-big", {x:-800,y:400}, {x:0,y:0, duration: 2,
          scrollTrigger: {
            trigger: ".elipse-big",
            start: "bottom bottom"
          }});

    gsap.from(".r-l1", {x:200,y:200,opacity:0,delay:0.5,duration:1.2,
          scrollTrigger: {
            trigger: ".r-l1",
            start: "bottom bottom"
          }});
    gsap.from(".r-l2", {x:200,y:-200,opacity:0,delay:0.5,duration:1.2,
          scrollTrigger: {
            trigger: ".r-l2",
            start: "bottom bottom"
          }});
    gsap.from(".r-l3", {x:-200,y:200,opacity:0,delay:0.5,duration:1.2,
      scrollTrigger: {
        trigger: ".r-l3",
        start: "bottom bottom"
      }});
    gsap.from(".r-l4", {x:-200,y:-200,opacity:0,delay:0.5,duration:1.2,
          scrollTrigger: {
            trigger: ".r-l4",
            start: "bottom bottom"
          }});
    gsap.from(".r-l5", {x:200,y:-200,opacity:0,delay:0.5,duration:1.2,
          scrollTrigger: {
            trigger: ".r-l5",
            start: "bottom bottom"
          }});

    gsap.from(".r-l6", {x:-200,y:-200,opacity:0,delay:0.5,duration:1.2,
          scrollTrigger: {
            trigger: ".r-l6",
            start: "bottom bottom"
          }});

    gsap.from(".r-l7", {x:200,y:-200,opacity:0,delay:0.5,duration:1.2,
          scrollTrigger: {
            trigger: ".r-l7",
            start: "bottom bottom"
          }});

    gsap.from(".r-l8", {x:-200,y:-200,opacity:0,delay:0.5,duration:1.2,
        scrollTrigger: {
            trigger: ".r-l8",
            start: "bottom bottom"
          }});
    gsap.from(".r-l9", {x:200,y:-200,opacity:0,delay:0.5,duration:1.2,
          scrollTrigger: {
            trigger: ".r-l9",
            start: "bottom bottom"
          }});




    gsap.to(".bg-section1", {
      scrollTrigger: {
        trigger: ".bg-section1",
        start: "bottom bottom",
        toggleActions: "restart pause reverse reverse"
      },
      duration: 0.5,
      scale: 1.5,
      x:-300,
      y: 100,
      opacity:0,
      ease: "none",
      overflow: "none"
    });

    gsap.to(".bg-section3", {
      scrollTrigger: {
        trigger: ".bg-section3",
        start: "bottom bottom",
        toggleActions: "restart pause reverse reverse"
      },
      duration: 1,
      scale: 0.5,
      x:-300,
      y: 100,
      opacity:0
    });

    gsap.to(".text-location", {
      scrollTrigger: {
        trigger: ".text-location",
        start: "bottom 50%",
        toggleActions: "restart pause reverse reverse"
      },
      duration: 1,
      scale: 0.5,
      x:-300,
      y: 100,
      opacity:0
    });

    gsap.to(".circle-location3", {
      scrollTrigger: {
        trigger: ".circle-location3",
        start: "bottom 50%",
        toggleActions: "restart pause reverse reverse"
      },
      duration: 1,
      scale: 0.5,
      x:-300,
      y: 100,
      opacity:0
    });

    gsap.to(".log1", {
      scrollTrigger: {
        trigger: ".log1",
        start: "bottom 50%",
        toggleActions: "restart pause reverse reverse"
      },
      duration: 1.2,
      x: 300,
      y: 1000,
    });

    gsap.to(".log2", {
      scrollTrigger: {
        trigger: ".log2",
        start: "bottom 40%",
        toggleActions: "restart pause reverse reverse"
      },
      duration: 1.2,
      x: 300,
      y: 1000,
    });

    gsap.to(".log3", {
      scrollTrigger: {
        trigger: ".log3",
        start: "bottom 40%",
        toggleActions: "restart pause reverse reverse"
      },
      duration: 1.2,
      x: 100,
      y: 1000,
    });

    gsap.to(".log4", {
      scrollTrigger: {
        trigger: ".log4",
        start: "bottom 40%",
        toggleActions: "restart pause reverse reverse"
      },
      duration: 1.2,
      y: 800,
    });

    gsap.to(".log5", {
      scrollTrigger: {
        trigger: ".log5",
        start: "bottom 40%",
        toggleActions: "restart pause reverse reverse"
      },
      duration: 1.2,
      x:-100,
      y: 800,
    });

    gsap.to(".log6", {
      scrollTrigger: {
        trigger: ".log6",
        start: "bottom 40%",
        toggleActions: "restart pause reverse reverse"
      },
      duration: 1.2,
      x: -200,
      y: 1000,
    });

    gsap.to(".log7", {
      scrollTrigger: {
        trigger: ".log7",
        start: "bottom 40%",
        toggleActions: "restart pause reverse reverse"
      },
      duration: 1.2,
      x: -200,
      y: 1000,
    });

    gsap.to(".log8", {
      scrollTrigger: {
        trigger: ".log8",
        start: "bottom 40%",
        toggleActions: "restart pause reverse reverse"
      },
      duration: 1.2,
      x: -200,
      y: 800,
    });

    gsap.to(".log9", {
      scrollTrigger: {
        trigger: ".log9",
        start: "bottom 40%",
        toggleActions: "restart pause reverse reverse"
      },
      duration: 1.2,
      x: -200,
      y: 800,
    });






    gsap.utils.toArray(".panel").forEach((panel, i) => {

      const activepanelEnter = panel.previousElementSibling;

      ScrollTrigger.create({
        trigger: panel,
        onEnter: () => {
          goToSection(i)
          gsap.fromTo(activepanelEnter, { opacity: 1 }, {delay:0.2, duration: 0.5, opacity: 0 })
          gsap.fromTo(panel, { opacity: 0 }, { duration: 0.5, delay: 0.75, opacity: 1 })

        }

      });

      const activepanelEnterBack = panel.nextElementSibling;

      ScrollTrigger.create({
        trigger: panel,
        start: "bottom bottom",
        onEnterBack: () => {
          goToSection(i)
          gsap.fromTo(activepanelEnterBack, { opacity: 1 }, { delay: 0.4, duration: 0.5, opacity: 0 })
          gsap.fromTo(panel, { opacity: 0 }, { duration: 0.5, delay: 0.75, opacity: 1 })
        }
      });
    });



  },


});
