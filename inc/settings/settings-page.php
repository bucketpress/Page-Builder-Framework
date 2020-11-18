<?php
/**
 * Theme setting's customizer metabox template.
 *
 * @package Page Builder Framework
 */

defined( 'ABSPATH' ) || die( "Can't access directly" );

?>

<div class="wrap heatbox-wrap wpbf-admin-page">

	<div class="wpbf-admin-page-header heatbox-margin-bottom">

		<div class="heatbox-container heatbox-container-center">

			<div class="wpbf-logo-container">

				<div>
					<h1>
						<?php echo esc_html( get_admin_page_title() ); ?>
						<span class="version"><?php echo esc_html( WPBF_VERSION ); ?></span>
					</h1>
				</div>

				<div>
					<img src="<?php echo esc_url( WPBF_THEME_URI ); ?>/img/page-builder-framework-logo.png" alt="Page Builder Framework Logo">
				</div>

			</div>

			<nav>
				<ul class="wpbf-admin-page-navigation">
					<li class="wpbf-admin-page-nav-item settings-panel"><a href="#settings"><?php _e( 'Getting Started', 'page-builder-framework' ); ?></a></li>
					<li class="wpbf-admin-page-nav-item premium-panel"><a href="#premium"><?php _e( 'Premium Add-On', 'page-builder-framework' ); ?></a></li>
					<li class="wpbf-admin-page-nav-item recommended-panel"><a href="#recommended"><?php _e( 'Recommended Plugins', 'page-builder-framework' ); ?></a></li>
					<li class="wpbf-admin-page-nav-item documentation-panel"><a href="#documentation"><?php _e( 'Help', 'page-builder-framework' ); ?></a></li>
				</ul>
			</nav>

		</div>

	</div>

	<div class="heatbox-container heatbox-container-center heatbox-column-container wpbf-admin-panel wpbf-settings-panel">

		<div class="heatbox-main">

			<?php
			require __DIR__ . '/metaboxes/customizer.php';
			?>

		</div>

		<div class="heatbox-sidebar">

			<?php
			require __DIR__ . '/metaboxes/community.php';
			require __DIR__ . '/metaboxes/review.php';
			require __DIR__ . '/metaboxes/resources.php';
			?>

		</div>

	</div>

	<div class="heatbox-container heatbox-container-center heatbox-column-container wpbf-admin-panel wpbf-premium-panel">

		<div class="heatbox-main">

			<?php
			require __DIR__ . '/metaboxes/premium.php';
			?>

		</div>

		<div class="heatbox-sidebar">

			<?php
			require __DIR__ . '/metaboxes/community.php';
			require __DIR__ . '/metaboxes/review.php';
			require __DIR__ . '/metaboxes/resources.php';
			?>

		</div>

	</div>

	<div class="heatbox-container heatbox-container-center heatbox-column-container wpbf-admin-panel wpbf-recommended-panel">

		<div class="heatbox-main">

			<?php
			require __DIR__ . '/metaboxes/recommended.php';
			?>

		</div>

		<div class="heatbox-sidebar">

			<?php
			require __DIR__ . '/metaboxes/community.php';
			require __DIR__ . '/metaboxes/review.php';
			require __DIR__ . '/metaboxes/resources.php';
			?>

		</div>

	</div>

	<div class="heatbox-container heatbox-container-center heatbox-column-container wpbf-admin-panel wpbf-documentation-panel">

		<div class="heatbox-main">

			<?php
			require __DIR__ . '/metaboxes/documentation.php';
			?>

		</div>

		<div class="heatbox-sidebar">

			<?php
			require __DIR__ . '/metaboxes/community.php';
			require __DIR__ . '/metaboxes/review.php';
			require __DIR__ . '/metaboxes/resources.php';
			?>

		</div>

	</div>


</div>
