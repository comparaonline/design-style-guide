!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";$(function(){$('.token.tag:contains("br")').hide();var e=function(){var e=$('.checkbox-wrapper input[type="checkbox"]'),t=$(".checkbox-text"),n='<svg class="icon-check" width="13" height="10" viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg"><text transform="translate(-38 -898)" font-size="14" font-family="FontAwesome" fill="#36AADD" fill-rule="evenodd"><tspan x="37.5" y="908"></tspan></text></svg>';t.append(n),e.on("click",function(){$(this).parent().toggleClass("checkbox-active")})},t=function(){var e=$(".nice-radio");e.parents(".a-question").css("max-width","350px"),e.on("change",function(){$(this).parents(".a-question").find(".nice-radio-container").removeClass("nice-radio-active"),$(".tooltip-wrapper").removeClass("has-nice-radio-active"),$(this).parent().addClass("nice-radio-active").parent().addClass("has-nice-radio-active")})},n=function(){e(),t()};n()})}]);