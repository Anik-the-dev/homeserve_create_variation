import "./styles/styles.scss";
/* DO NOT IMPORT ANYTHING */

window.waitForElem =
  window.waitForElem ||
  ((waitFor, callback, minElements = 1, variable = false) => {
    function checkElements() {
      if (variable) {
        return waitFor;
      } else {
        return window.document.querySelectorAll(waitFor);
      }
    }

    var thisElem = checkElements(),
      timeOut;
    if ((!variable && thisElem.length >= minElements) || (variable && typeof thisElem !== "undefined")) {
      return callback(thisElem);
    } else {
      var interval = setInterval(function() {
        thisElem = checkElements();
        if ((!variable && thisElem.length >= minElements) || (variable && typeof thisElem !== "undefined")) {
          clearInterval(interval);
          clearTimeout(timeOut);
          return callback(thisElem);
        }
      }, 20);
      timeOut = setTimeout(function() {
        // Fallback
        clearInterval(interval);
        return callback(false);
      }, 10000);
    }
  });

console.log(`Test Name - Variant Name -- running on ${new Date().toLocaleDateString()}`);

waitForElem("body", (body) => {
  if (body) {
    let echoVariation = {
      init: function() {
        this.mainCss();
        this.mainJs();
      },
      mainCss: function() {
        var styles = document.createElement("style");
        styles.setAttribute("type", "text/css");
        document.head.appendChild(styles).textContent =
          "" +
          /* CSS will be imported here */
          "";
      },
      mainJs: function() {
        // count down html
        function countdownTimer() {
          return `
            <div class="col-xs-12 col-sm-12 col-md-12 padding-top-30">
              <p class="home_headline_el">Expert plumbing cover for just 50p a month*</p>
              <div class="cd_container">
              <div class="cd_wrapper">
                <p class="cd_text">Limited offer ends in</p>
                <div class="cd_box_wrapper">
                  <div class="cd_box_handle">
                    <p class="cd_box">0</p>
                    <p class="cd_box">0</p>
                    <p class="cd_box_text">Days</p>
                  </div>
                  <p class="cd_colon">:</p>
                  <div class="cd_box_handle">
                    <p class="cd_box">0</p>
                    <p class="cd_box">0</p>
                    <p class="cd_box_text">Hours</p>
                  </div>
                  <p class="cd_colon">:</p>
                  <div class="cd_box_handle">
                    <p class="cd_box">0</p>
                    <p class="cd_box">0</p>
                    <p class="cd_box_text">Minutes</p>
                  </div>
                </div>
              </div>
            </div>
  
            <p class="cd-bottom-text">
              * Offer ends 7th December 2022. New customer offer. Homeowners only. T&Cs
              apply.
            </p>
              </div>
            </div>
      `;
        }

        function footerCountDownTimer(){
          return `
          <div class="timer_fcontainer">
          <div class="timer_content">
            <div class="timer_flex_3">
              <div class="timer_child_el" id="timer_ftext">
                <p>Expert plumbing and drainage cover from 50p a month*</p>
              </div>
              <div class="timer_child_el" id="timer_fclock">
                <div class="timer_fclock_flex" id="clock_title">
                    <p>Limited offer ends in</p>
                </div>
                <div class="timer_fclock_flex" id="clock_digit">
                  <p class="cd_fbox">0</p>
                  <p class="cd_fbox">7</p>
                  <p class="cd_fcolon">:</p>
                  <p class="cd_fbox">1</p>
                  <p class="cd_fbox">2</p>
                  <p class="cd_fcolon">:</p>
                  <p class="cd_fbox">3</p>
                  <p class="cd_fbox">9</p>
                </div>
                <div class="timer_fclock_flex" id="clock_label">
                    <p class="clk_label_item">Days</p>
                    <p class="clk_label_item">Hours</p>
                    <p class="clk_label_item">Minutes</p>
    
                </div>
              </div>
              <button class="timer_child_el" id="timer_fBtn">
                 View offer
              </button>
            </div>
          </div>
          <div class="timer_footer">
            <p> * Offer ends 7th December 2022. New customer offer. Homeowners only. T&Cs
                apply.</p>
          </div>
        </div>
          `
        }

        
        // home page query
        if (window.location.href === "https://www.homeserve.com/uk") {
          let targetSection = document.querySelector("#heroBannerCopy");
          let addSection = targetSection.querySelector(".col-xs-11.col-sm-12");
          targetSection.querySelector(".col-xs-12.col-sm-12.col-md-12.padding-top-30.padding-bottom-30").remove();
          let heroBannerCTA = targetSection.querySelector("#heroBannerCta");
          let tpDesktop = targetSection.querySelector("#tpDesktop");
          let timerHTML = countdownTimer();
          addSection.insertAdjacentHTML("afterbegin", timerHTML);
          heroBannerCTA.querySelector("a").innerText = "View plumbing cover";
          tpDesktop.insertAdjacentElement("beforebegin", heroBannerCTA);
        }

        // plumbing and drainage plus query
        else if(window.location.href ==="https://www.homeserve.com/uk/insurance/plumbing-drainage-cover"){
          let targetSec =document.querySelectorAll(".hero-banner__content.with-sticky  .intro")[1]
          let timerInPlumbing = countdownTimer();
          targetSec.insertAdjacentHTML("afterend",timerInPlumbing)
          document.querySelector('.home_headline_el').remove()

        }
        // comparison page query
        else if (window.location.href==='https://www.homeserve.com/uk/insurance-cover/plumbing-and-drainage-comparison'){
          let targetDiv = document.querySelector(".category-items .h3")
          let timerInComp = footerCountDownTimer();
          targetDiv.insertAdjacentHTML("afterend",timerInComp)
          document.querySelector(".highxs.bubble.bubble--blue.bubble--overlay").remove()



        }

      },
    };

    echoVariation.init();
  }
});
