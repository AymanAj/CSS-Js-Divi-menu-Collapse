/**** This hides the sub menu items on mobile ****/
#page-container .mobile_nav li ul.hide {
    display: none !important;
}
/**** This adjusts the positioning and the background transparency of the parent menu item on mobile ****/
#page-container .mobile_nav .menu-item-has-children {
    position: relative;
}
#page-container .mobile_nav .menu-item-has-children > a {
    background: transparent;
}
/**** This styles the icon and moves it to the right ****/
#page-container .mobile_nav .menu-item-has-children > a + span {
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    z-index: 3;
}
/**** Here you can swap out the actual icons ****/
#page-container span.menu-closed:before {
    content: "\4c";
    display: block;
    color: #000;
    font-size: 16px;
    font-family: ETmodules;
}
#page-container span.menu-closed.menu-open:before {
    content: "\4d";
}


/**** integration > body > insert & have fun ;)  ****/

<script>
(function($) { 
    function setup_collapsible_submenus() {
        // mobile menu
        $('.mobile_nav .menu-item-has-children > a').after('<span class="menu-closed"></span>');
        $('.mobile_nav .menu-item-has-children > a').each(function() {
            $(this).next().next('.sub-menu').toggleClass('hide',1000);
        });
        $('.mobile_nav .menu-item-has-children > a + span').on('click', function(event) {
            event.preventDefault();
            $(this).toggleClass('menu-open');
            $(this).next('.sub-menu').toggleClass('hide',1000);
        });
    }
    $(window).load(function() {
        setTimeout(function() {
            setup_collapsible_submenus();
        }, 700);
    });
})(jQuery);
</script>
