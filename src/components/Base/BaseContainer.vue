<template>
	<div class="container">
		<slot/>
	</div>
</template>

<script>
export default {
	name: 'BaseContainer',
	props: {
		fluid: {
			type: Boolean,
			default: false
		}
	},
}
</script>

<style lang="scss" scoped>
@mixin make-container() {
	width: 100%;
	padding-right: 1.5rem;
	padding-left: 1.5rem;
	margin-right: auto;
	margin-left: auto;
}
@mixin make-grid-containers() {
	@each $breakpoint, $container-max-width in $container-max-widths{
		.container-#{$breakpoint} {
			@extend .container-fluid !optional;
		}

		@include breakpoint($breakpoint, $grid-breakpoints) {
			%responsive-container-#{$breakpoint} {
				max-width: $container-max-width;
			}

		$extend-breakpoint: true;

			@each $name, $width in $grid-breakpoints {
				@if ($extend-breakpoint) {
					.container#{breakpoint-infix($name, $grid-breakpoints)} {
						@extend %responsive-container-#{$breakpoint};
				}

					@if ($breakpoint == $name) {
						$extend-breakpoint: false;
					}
				}
			}
		}
	}
}

@include make-grid-containers();
.container {
	&-fluid {
		width: 100%;
		margin-right: auto;
		margin-left: auto;
	}
	@include make-container();
}
</style>
