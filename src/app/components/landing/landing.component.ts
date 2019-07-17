import {Component, OnInit} from '@angular/core';
import {WOW} from 'src/assets/js/plugins/wow/wow.min.js';

declare var $: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() {
    // Activate WOW.js plugin for animation on scrol
    new WOW({live: false}).init();
  }

  ngOnInit() {
    $(document).ready(() => {


      $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
      });

      // Page scrolling feature
      $('a.page-scroll').bind('click', function(event) {
        let link = $(this);
        $('html, body').stop().animate({
          scrollTop: $(link.attr('href')).offset().top - 50
        }, 500);
        event.preventDefault();
        $('#navbar').collapse('hide');
      });
    });

    const cbpAnimatedHeader = (() => {
      const docElem = document.documentElement;
      let didScroll = false;
      const  changeHeaderOn = 200;

      function init() {
        window.addEventListener('scroll', (event) => {
          if (!didScroll) {
            didScroll = true;
            setTimeout(scrollPage, 250);
          }
        }, false);
      }

      function scrollPage() {
        const sy = scrollY();
        if (sy >= changeHeaderOn) {
          $('.navbar-default').addClass('navbar-scroll');
        } else {
          $('.navbar-default').removeClass('navbar-scroll');
        }
        didScroll = false;
      }

      function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
      }

      init();

    })();
  }

}
