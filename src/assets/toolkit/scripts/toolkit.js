/**
 * Toolkit JavaScript
 */

$(function() {
  'use strict';
  // Hide <br> from code output
  $('.token.tag:contains("br")').hide();

  // Checkbox
  var niceCheckbox = function niceCheckbox() {
    var $niceCheckbox = $('.checkbox-wrapper input[type="checkbox"]');
    var $checkboxText = $('.checkbox-text');
    var svgCheck = '<svg class="icon-check" width="13" height="10" viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg"><text transform="translate(-38 -898)" font-size="14" font-family="FontAwesome" fill="#36AADD" fill-rule="evenodd"><tspan x="37.5" y="908"></tspan></text></svg>';

    $checkboxText.append(svgCheck);
    $niceCheckbox.on('click', function() {
      $(this).parent().toggleClass('checkbox-active');
    });
  };

  var init = function init() {
    niceCheckbox();
  };

  init();

  return;
});
