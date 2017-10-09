;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M173.0138 159.1531c57.5463-65.4416 141.5648-106.8386 228.5544-112.2539 81.4181-6.0939 164.835 18.8452 229.213 69.1301 78.1382 59.1929 128.0364 154.2514 131.3953 252.3189 4.656 84.9654-25.4258 170.7682-80.7975 235.1805 86.2121 86.2655 172.5211 172.4761 258.7132 258.7626-18.767 18.7093-37.4571 37.4956-56.2252 56.1839-87.0865-87.043-174.0941-174.1439-261.2206-261.1479-71.9662 52.6933-165.6295 74.3896-253.5105 59.1529-86.9496-13.9146-167.1265-64.2384-218.229-135.8719-32.2944-44.6377-53.334-97.406-60.3985-152.0589C77 332.4446 107.7624 231.0593 173.0138 159.1531zM392.387 87.4427c-13.8392 2.0766-27.7933 3.6875-41.2237 7.7038-85.8433 21.1157-160.159 83.5114-196.6847 163.9169-20.8447 44.7926-29.9279 94.9416-26.5311 144.2192 5.2007 95.2124 60.4575 185.6911 142.1664 234.5969 84.3103 52.6163 195.7723 57.8748 284.7596 13.7217 85.5715-40.5015 148.7652-124.5765 163.8077-218.0622 7.2774-42.737 5.2407-87.1599-6.4259-128.9456-24.0657-90.4197-93.9352-166.9448-181.6033-199.4907C486.8479 88.1802 439.0064 82.669 392.387 87.4427z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)