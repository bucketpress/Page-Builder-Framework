( function( $ ) {

	/* Layout */

	// Page width.
	wp.customize( 'page_max_width', function( value ) {
		value.bind( function( newval ) {
			if( newval == '' ) {
				newval = '1200px';
			}
			$('.wpbf-container, .wpbf-boxed-layout .wpbf-page').css('max-width', newval );
		} );
	} );

	// Boxed margin.
	wp.customize( 'page_boxed_margin', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-page').css('margin-top', newval + 'px' ).css('margin-bottom', newval + 'px' );
		} );
	} );

	// Boxed padding.
	wp.customize( 'page_boxed_padding', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-container').css('padding-left', newval + 'px' ).css('padding-right', newval + 'px' );
		} );
	} );

	// Boxed background color.
	wp.customize( 'page_boxed_background', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-page').css('background-color', newval );
		} );
	} );

	// ScrollTop position.
	wp.customize( 'scrolltop_position', function( value ) {
		value.bind( function( newval ) {
			if( newval == 'left' ) {
				$('.scrolltop').css( { 'left' : '20px', 'right' : 'auto' } );
			} else {
				$('.scrolltop').css( { 'left' : 'auto', 'right' : '20px' } );
			}
		} );
	} );

	// ScrollTop background color.
	wp.customize( 'scrolltop_bg_color', function( value ) {
		value.bind( function( newval ) {
			$('.scrolltop').css('background', ( newval ) );
		} );
	} );

	// ScrollTop icon color.
	wp.customize( 'scrolltop_icon_color', function( value ) {
		value.bind( function( newval ) {
			$('.scrolltop').css('color', ( newval ) );
		} );
	} );

	// ScrollTop border radius.
	wp.customize( 'scrolltop_border_radius', function( value ) {
		value.bind( function( newval ) {
			$('.scrolltop').css('border-radius', newval + 'px' );
		} );
	} );

	/* Typography */

	wp.customize( 'page_font_color', function( value ) {
		value.bind( function( newval ) {
			$('body').css('color', newval );
		} );
	} );

	/* 404 */

	wp.customize( '404_headline', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-404-content .entry-title').text( newval );
		} );
	} );

	wp.customize( '404_text', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-404-content p').text( newval );
		} );
	} );

	/* Navigation */

	// Width.
	wp.customize( 'menu_width', function( value ) {
		value.bind( function( newval ) {
			if( newval == '' ) {
				newval = '1200px';
			}
			$('.wpbf-nav-wrapper').css('max-width', newval );
		} );
	} );

	// Menu padding.
	wp.customize( 'menu_padding', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-navigation .wpbf-menu > .menu-item > a').css( { 'padding-left' : newval + 'px', 'padding-right' : newval + 'px' } );
		} );
	} );

	// Font size.
	wp.customize( 'menu_font_size', function( value ) {
		value.bind( function( newval ) {
			var suffix = '';
			if( $.isNumeric( newval ) ) {
				suffix = 'px';
			};
			$('.wpbf-navigation .wpbf-menu a, .wpbf-mobile-menu a').css('font-size', newval + suffix );
		} );
	} );

	/* Sub Menu */

	// Padding top.
	wp.customize( 'sub_menu_padding_top', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-sub-menu > .menu-item-has-children:not(.wpbf-mega-menu) .sub-menu a').css('padding-top', newval + 'px' );
		} );
	} );

	// Padding right.
	wp.customize( 'sub_menu_padding_right', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-sub-menu > .menu-item-has-children:not(.wpbf-mega-menu) .sub-menu a').css('padding-right', newval + 'px' );
		} );
	} );

	// Padding bottom.
	wp.customize( 'sub_menu_padding_bottom', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-sub-menu > .menu-item-has-children:not(.wpbf-mega-menu) .sub-menu a').css('padding-bottom', newval + 'px' );
		} );
	} );

	// Padding left.
	wp.customize( 'sub_menu_padding_left', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-sub-menu > .menu-item-has-children:not(.wpbf-mega-menu) .sub-menu a').css('padding-left', newval + 'px' );
		} );
	} );

	// Width.
	wp.customize( 'sub_menu_width', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-sub-menu > .menu-item-has-children:not(.wpbf-mega-menu) .sub-menu').css('width', newval + 'px' );
		} );
	} );

	// Background color.
	wp.customize( 'sub_menu_bg_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-sub-menu > .menu-item-has-children:not(.wpbf-mega-menu) .sub-menu li, .wpbf-sub-menu > .wpbf-mega-menu > .sub-menu').css('background-color', newval );
		} );
	} );

	// Accent color.
	wp.customize( 'sub_menu_accent_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-menu .sub-menu a').css('color', newval );
		} );
	} );

	// Font size.
	wp.customize( 'sub_menu_font_size', function( value ) {
		value.bind( function( newval ) {
			var suffix = '';
			if( $.isNumeric( newval ) ) {
				suffix = 'px';
			};
			$('.wpbf-menu .sub-menu a').css('font-size', newval + suffix );
		} );
	} );

	// Separator color.
	wp.customize( 'sub_menu_separator_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-sub-menu > .menu-item-has-children:not(.wpbf-mega-menu) li').css('border-bottom-color', newval );
		} );
	} );

	/* Mobile Navigation */

	// Hamburger size.
	wp.customize( 'mobile_menu_hamburger_size', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-mobile-nav-item').css('font-size', newval + 'px' );
		} );
	} );

	// Hamburger border radius (filled).
	wp.customize( 'mobile_menu_hamburger_border_radius', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-mobile-nav-item').css('border-radius', newval + 'px' );
		} );
	} );

	// Padding top.
	wp.customize( 'mobile_menu_padding_top', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-mobile-menu a, .wpbf-mobile-menu .menu-item-has-children .wpbf-submenu-toggle').css('padding-top', newval + 'px' );
		} );
	} );

	// Padding right.
	wp.customize( 'mobile_menu_padding_right', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-mobile-menu a, .wpbf-mobile-menu .menu-item-has-children .wpbf-submenu-toggle').css('padding-right', newval + 'px' );
		} );
	} );

	// Padding bottom.
	wp.customize( 'mobile_menu_padding_bottom', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-mobile-menu a, .wpbf-mobile-menu .menu-item-has-children .wpbf-submenu-toggle').css('padding-bottom', newval + 'px' );
		} );
	} );

	// Padding left.
	wp.customize( 'mobile_menu_padding_left', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-mobile-menu a, .wpbf-mobile-menu .menu-item-has-children .wpbf-submenu-toggle').css('padding-left', newval + 'px' );
		} );
	} );

	/* Logo */

	// Width desktop.
	wp.customize( 'menu_logo_size_desktop', function( value ) {
		value.bind( function( newval ) {
			var suffix = '';
			if( $.isNumeric( newval ) ) {
				suffix = 'px';
			};
			$('.wpbf-logo img, .wpbf-mobile-logo img').css('width', newval + suffix );
		} );
	} );

	// Width tablet.
	wp.customize( 'menu_logo_size_tablet', function( value ) {
		value.bind( function( newval ) {
			var suffix = '';
			if( $.isNumeric( newval ) ) {
				suffix = 'px';
			};
			$('.wpbf-mobile-logo img').css('width', newval + suffix );
		} );
	} );

	// Width mobile.
	wp.customize( 'menu_logo_size_mobile', function( value ) {
		value.bind( function( newval ) {
			var suffix = '';
			if( $.isNumeric( newval ) ) {
				suffix = 'px';
			};
			$('.wpbf-mobile-logo img').css('width', newval + suffix );
		} );
	} );

	// Font size desktop.
	wp.customize( 'menu_logo_font_size_desktop', function( value ) {
		value.bind( function( newval ) {
			var suffix = '';
			if( $.isNumeric( newval ) ) {
				suffix = 'px';
			};
			$('.wpbf-logo a, .wpbf-mobile-logo a').css('font-size', newval + suffix );
		} );
	} );

	// Font size tablet.
	wp.customize( 'menu_logo_font_size_tablet', function( value ) {
		value.bind( function( newval ) {
			var suffix = '';
			if( $.isNumeric( newval ) ) {
				suffix = 'px';
			};
			$('.wpbf-mobile-logo a').css('font-size', newval + suffix );
		} );
	} );

	// Font size mobile.
	wp.customize( 'menu_logo_font_size_mobile', function( value ) {
		value.bind( function( newval ) {
			var suffix = '';
			if( $.isNumeric( newval ) ) {
				suffix = 'px';
			};
			$('.wpbf-mobile-logo a').css('font-size', newval + suffix );
		} );
	} );

	// Color.
	wp.customize( 'menu_logo_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-logo a, .wpbf-mobile-logo a').css('color', newval );
		} );
	} );

	// Container width.
	wp.customize( 'menu_logo_container_width', function( value ) {
		value.bind( function( newval ) {
			var calculation = 100-newval;
			$('.wpbf-navigation .wpbf-1-4').css('width', newval + '%' );
			$('.wpbf-navigation .wpbf-3-4').css('width', calculation + '%' );
		} );
	} );

	// Mobile container width.
	wp.customize( 'mobile_menu_logo_container_width', function( value ) {
		value.bind( function( newval ) {
			var calculation = 100-newval;
			$('.wpbf-navigation .wpbf-2-3').css('width', newval + '%' );
			$('.wpbf-navigation .wpbf-1-3').css('width', calculation + '%' );
		} );
	} );

	/* Tagline */

	// Font size desktop.
	wp.customize( 'menu_logo_description_font_size_desktop', function( value ) {
		value.bind( function( newval ) {
			var suffix = '';
			if( $.isNumeric( newval ) ) {
				suffix = 'px';
			};
			$('.wpbf-logo .wpbf-tagline, .wpbf-mobile-logo .wpbf-tagline').css('font-size', newval + suffix );
		} );
	} );

	// Font size tablet.
	wp.customize( 'menu_logo_description_font_size_tablet', function( value ) {
		value.bind( function( newval ) {
			var suffix = '';
			if( $.isNumeric( newval ) ) {
				suffix = 'px';
			};
			$('.wpbf-mobile-logo .wpbf-tagline').css('font-size', newval + suffix );
		} );
	} );

	// Font size mobile.
	wp.customize( 'menu_logo_description_font_size_mobile', function( value ) {
		value.bind( function( newval ) {
			var suffix = '';
			if( $.isNumeric( newval ) ) {
				suffix = 'px';
			};
			$('.wpbf-mobile-logo .wpbf-tagline').css('font-size', newval + suffix );
		} );
	} );

	// Font color.
	wp.customize( 'menu_logo_description_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-tagline').css('color', newval );
		} );
	} );

	/* Mobile Menu */

	// Height.
	wp.customize( 'mobile_menu_height', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-mobile-nav-wrapper').css('padding-top', newval + 'px' ).css('padding-bottom', newval + 'px' );
		} );
	} );

	// Sub menu arrow color.
	wp.customize( 'mobile_menu_submenu_arrow_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-submenu-toggle').css('color', newval );
		} );
	} );

	/* Pre Header */

	// Width.
	wp.customize( 'pre_header_width', function( value ) {
		value.bind( function( newval ) {
			if( newval == '' ) {
				newval = '1200px';
			}
			$('.wpbf-inner-pre-header').css('max-width', newval );
		} );
	} );

	// Height.
	wp.customize( 'pre_header_height', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-inner-pre-header').css('padding-top', newval + 'px' ).css('padding-bottom', newval + 'px' );
		} );
	} );

	// Background color.
	wp.customize( 'pre_header_bg_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-pre-header').css('background-color', newval );
		} );
	} );

	// Font color.
	wp.customize( 'pre_header_font_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-pre-header').css('color', newval );
		} );
	} );

	// Font size.
	wp.customize( 'pre_header_font_size', function( value ) {
		value.bind( function( newval ) {
			var suffix = '';
			if( $.isNumeric( newval ) ) {
				suffix = 'px';
			};
			$('.wpbf-pre-header, .wpbf-pre-header .wpbf-menu, .wpbf-pre-header .wpbf-menu .sub-menu a').css('font-size', newval + suffix );
		} );
	} );

	/* Blog – Pagination */

	// Border radius.
	wp.customize( 'blog_pagination_border_radius', function( value ) {
		value.bind( function( newval ) {
			$('.pagination .page-numbers').css('border-radius', newval + 'px' );
		} );
	} );

	// Background color.
	wp.customize( 'blog_pagination_background_color', function( value ) {
		value.bind( function( newval ) {
			$('.pagination .page-numbers:not(.current)').css('background', newval );
		} );
	} );

	// Background color active.
	wp.customize( 'blog_pagination_background_color_active', function( value ) {
		value.bind( function( newval ) {
			$('.pagination .page-numbers.current').css('background', newval );
		} );
	} );

	// Font color.
	wp.customize( 'blog_pagination_font_color', function( value ) {
		value.bind( function( newval ) {
			$('.pagination .page-numbers:not(.current)').css('color', newval );
		} );
	} );

	// Font color active.
	wp.customize( 'blog_pagination_font_color_active', function( value ) {
		value.bind( function( newval ) {
			$('.pagination .page-numbers.current').css('color', newval );
		} );
	} );

	// Font size.
	wp.customize( 'blog_pagination_font_size', function( value ) {
		value.bind( function( newval ) {
			var suffix = '';
			if( $.isNumeric( newval ) ) {
				suffix = 'px';
			};
			$('.pagination .page-numbers').css('font-size', newval + suffix );
		} );
	} );

	/* Sidebar */

	// Width.
	wp.customize( 'sidebar_width', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-sidebar-wrapper').css('width', newval + '%' );
			$('.wpbf-sidebar-left .wpbf-main, .wpbf-sidebar-right .wpbf-main').css('width', 100 - newval + '%' );
		} );
	} );

	// Background color.
	wp.customize( 'sidebar_bg_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-sidebar .widget, .elementor-widget-sidebar .widget').css('background-color', newval );
		} );
	} );

	/* Buttons */

	// Border radius.
	wp.customize( 'button_border_radius', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-button, input[type="submit"]').css('border-radius', newval + 'px' );
		} );
	} );

	// Border width.
	wp.customize( 'button_border_width', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-button, input[type="submit"]').css( 'border-width', newval + 'px' ).css( 'border-style', 'solid' );
		} );
	} );

	// Border color.
	wp.customize( 'button_border_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-button, input[type="submit"]').css('border-color', newval );
		} );
	} );

	// Border color.
	wp.customize( 'button_primary_border_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-button-primary').css('border-color', newval );
		} );
	} );

	/* Breadcrumbs */

	// Background color.
	wp.customize( 'breadcrumbs_background_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-breadcrumbs-container').css('background', newval );
		} );
	} );

	// Alignment.
	wp.customize( 'breadcrumbs_alignment', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-breadcrumbs-container').css('text-align', newval );
		} );
	} );

	// Font color.
	wp.customize( 'breadcrumbs_font_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-breadcrumbs').css('color', newval );
		} );
	} );

	// Accent color.
	wp.customize( 'breadcrumbs_accent_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-breadcrumbs a').css('color', newval );
		} );
	} );

	/* Footer */

	// Width.
	wp.customize( 'footer_width', function( value ) {
		value.bind( function( newval ) {
			if( newval == '' ) {
				newval = '1200px';
			}
			$('.wpbf-inner-footer').css('max-width', newval );
		} );
	} );

	// Height.
	wp.customize( 'footer_height', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-inner-footer').css('padding-top', newval + 'px' ).css('padding-bottom', newval + 'px' );
		} );
	} );

	// Background color.
	wp.customize( 'footer_bg_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-page-footer').css('background-color', newval );
		} );
	} );

	// Font color.
	wp.customize( 'footer_font_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-inner-footer').css('color', newval );
		} );
	} );

	// Accent color.
	wp.customize( 'footer_accent_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-inner-footer a').css('color', newval );
		} );
	} );

	// Font size.
	wp.customize( 'footer_font_size', function( value ) {
		value.bind( function( newval ) {
			var suffix = '';
			if( $.isNumeric( newval ) ) {
				suffix = 'px';
			};
			$('.wpbf-inner-footer, .wpbf-inner-footer .wpbf-menu').css('font-size', newval + suffix );
		} );
	} );

	/* WooCommerce - Defaults */

	// Button border radius.
	wp.customize( 'button_border_radius', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce a.button, .woocommerce button.button').css('border-radius', newval + 'px' );
		} );
	} );

	// Custom width.
	wp.customize( 'woocommerce_loop_custom_width', function( value ) {
		value.bind( function( newval ) {
			if( newval == '' ) {
				newval = '1200px';
			}
			$('.archive.woocommerce #inner-content').css('max-width', newval );
		} );
	} );

	/* WooCommerce - Loop */

	// Image alignment.
	wp.customize( 'woocommerce_loop_image_alignment', function( value ) {
		value.bind( function( newval ) {
			if( newval == 'left' ) {
				$('.wpbf-woo-list-view .wpbf-woo-loop-thumbnail-wrapper').css('float', 'left' );
				$('.wpbf-woo-list-view .wpbf-woo-loop-summary').css('float', 'right' );
			} else {
				$('.wpbf-woo-list-view .wpbf-woo-loop-thumbnail-wrapper').css('float', 'right' );
				$('.wpbf-woo-list-view .wpbf-woo-loop-summary').css('float', 'left' );
			}
		} );
	} );

	// Image width.
	wp.customize( 'woocommerce_loop_image_width', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-woo-list-view .wpbf-woo-loop-thumbnail-wrapper').css('width', newval-2 + '%');
			$('.wpbf-woo-list-view .wpbf-woo-loop-summary').css('width', 98-newval + '%');
		} );
	} );

	// Title font size.
	wp.customize( 'woocommerce_loop_title_size', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce ul.products li.product h3, .woocommerce ul.products li.product .woocommerce-loop-product__title, .woocommerce ul.products li.product .woocommerce-loop-category__title').css('font-size', newval );
		} );
	} );

	// Title font color.
	wp.customize( 'woocommerce_loop_title_color', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce ul.products li.product h3, .woocommerce ul.products li.product .woocommerce-loop-product__title, .woocommerce ul.products li.product .woocommerce-loop-category__title').css('color', newval );
		} );
	} );

	// Price font size.
	wp.customize( 'woocommerce_loop_price_size', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce ul.products li.product .price').css('font-size', newval );
		} );
	} );

	// Price font color.
	wp.customize( 'woocommerce_loop_price_color', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce ul.products li.product .price').css('color', newval );
		} );
	} );

	// Out of stock notice.
	wp.customize( 'woocommerce_loop_out_of_stock_font_size', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce ul.products li.product .wpbf-woo-loop-out-of-stock').css('font-size', newval );
		} );
	} );

	// Out of stock color.
	wp.customize( 'woocommerce_loop_out_of_stock_font_color', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce ul.products li.product .wpbf-woo-loop-out-of-stock').css('color', newval );
		} );
	} );

	// Out of stock background color.
	wp.customize( 'woocommerce_loop_out_of_stock_background_color', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce ul.products li.product .wpbf-woo-loop-out-of-stock').css('background-color', newval );
		} );
	} );

	// Sale font size.
	wp.customize( 'woocommerce_loop_sale_font_size', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce span.onsale').css('font-size', newval );
		} );
	} );

	// Sale font color.
	wp.customize( 'woocommerce_loop_sale_font_color', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce span.onsale').css('color', newval );
		} );
	} );

	// Sale background color.
	wp.customize( 'woocommerce_loop_sale_background_color', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce span.onsale').css('background-color', newval );
		} );
	} );

	/* WooCommerce - Single */

	// Custom width.
	wp.customize( 'woocommerce_single_custom_width', function( value ) {
		value.bind( function( newval ) {
			if( newval == '' ) {
				newval = '1200px';
			}
			$('.single.woocommerce #inner-content').css('max-width', newval );
		} );
	} );

	// Image alignment.
	wp.customize( 'woocommerce_single_alignment', function( value ) {
		value.bind( function( newval ) {
			if( newval == 'right' ) {
				$('.woocommerce div.product div.summary, .woocommerce #content div.product div.summary, .woocommerce-page div.product div.summary, .woocommerce-page #content div.product div.summary').css('float', 'left' );
				$('.woocommerce div.product div.images, .woocommerce #content div.product div.images, .woocommerce-page div.product div.images, .woocommerce-page #content div.product div.images').css('float', 'right' );
				$('.single-product.woocommerce span.onsale').css('display', 'none' );
			} else {
				$('.woocommerce div.product div.summary, .woocommerce #content div.product div.summary, .woocommerce-page div.product div.summary, .woocommerce-page #content div.product div.summary').css('float', 'right' );
				$('.woocommerce div.product div.images, .woocommerce #content div.product div.images, .woocommerce-page div.product div.images, .woocommerce-page #content div.product div.images').css('float', 'left' );
				$('.single-product.woocommerce span.onsale').css('display', 'block' );
			}
		} );
	} );

	// Image width.
	wp.customize( 'woocommerce_single_image_width', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce div.product div.images, .woocommerce #content div.product div.images, .woocommerce-page div.product div.images, .woocommerce-page #content div.product div.images').css('width', newval-2 + '%' );
			$('.woocommerce div.product div.summary, .woocommerce #content div.product div.summary, .woocommerce-page div.product div.summary, .woocommerce-page #content div.product div.summary').css('width', 98 - newval + '%' );
		} );
	} );

	// Price font size.
	wp.customize( 'woocommerce_single_price_size', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce div.product span.price, .woocommerce div.product p.price').css('font-size', newval );
		} );
	} );

	// Price font color.
	wp.customize( 'woocommerce_single_price_color', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce div.product span.price, .woocommerce div.product p.price').css('color', newval );
		} );
	} );

	// Tabs font size.
	wp.customize( 'woocommerce_single_tabs_font_size', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce div.product .woocommerce-tabs ul.tabs li a').css('font-size', newval );
		} );
	} );

	/* Easy Digital Downloads - Defaults */

	// Button border radius.
	wp.customize( 'button_border_radius', function( value ) {
		value.bind( function( newval ) {
			$('.edd-submit.button').css('border-radius', newval + 'px' );
		} );
	} );

} )( jQuery );
