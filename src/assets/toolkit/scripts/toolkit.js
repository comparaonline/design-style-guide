/**
 * Toolkit JavaScript
 */

require('script!./rangeslider');


$(function() {
  'use strict';
  // Hide <br> from code output
  $('.token.tag:contains("br")').hide();
  var calendarSvg = '<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M192 1664h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"/></svg>';

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

  var niceRadio = function niceRadio() {
    var $niceRadio = $('.nice-radio');

    $niceRadio.parents('.a-question').css('max-width', '350px');
    $niceRadio.on('change', function() {
      $(this).parents('.a-question').find('.nice-radio-container').removeClass('nice-radio-active');
      $('.tooltip-wrapper').removeClass('has-nice-radio-active');
      $(this).parent().addClass('nice-radio-active').parent().addClass('has-nice-radio-active');
    });
  };

  // Floated Labels
  var setFloatedLabels = function setFloatedLabels() {
    var $floatedPlaceholders = $('.a-field');

    $floatedPlaceholders.each(function() {
      if ($.trim($(this).val()) !== '') {
        $(this).parents('.field-container').addClass('js-keep-focus').removeClass('js-focus');
        $(this).parents('.field-container').addClass('js-focus');
      }
    });
    $floatedPlaceholders.each(function() {
      $(this).on('focus', function() {
        $(this).parents('.field-container').addClass('js-focus');
      });
      $(this).on('blur', function() {
        if ($.trim($(this).val()) === '') {
          $(this).parents('.field-container').removeClass('js-focus');
        }
      });
      $(this).on('change', function() {
        $(this).parents('.field-container').addClass('js-keep-focus');
        if ($(this).val() === '') {
          $(this).parents('.field-container').removeClass('js-focus js-keep-focus');
        }
      });
    });
  };

  var setupFieldLabels = function setupFieldLabels() {
    $('.field-label').on('click', function() {
      $(this).parents('.field-container')
        .addClass('js-focus')
        .find('.a-field').focus();
    });
  };

  // Calendar fields
  var calendarFields = function calendarFields() {
    $('.date-field').after(calendarSvg);
    $('.date-field+svg').on('click', function() {
      $(this).prev('.date-field').trigger('click');
    });
  };

  var rangeSlider = function rangeSlider() {
    var $rangeslider = $('.rangeslider');
    var $amount = $('.input-range-amount');

    $rangeslider
      .rangeslider({
        polyfill: false
      })
      .on('input', function() {
        $amount[0].value = this.value;
      });

    $amount.on('input', function() {
      $rangeslider.val(this.value).change();
    });
  };

  var init = function init() {
    niceCheckbox();
    niceRadio();
    setFloatedLabels();
    setupFieldLabels();
    calendarFields();
    rangeSlider();
  };

  init();

});
