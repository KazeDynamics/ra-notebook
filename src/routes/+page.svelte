<div class="flex-auto" style="margin-top: -4px">
	<div class="wrap-layer">
		<div class="content w-full">
			<h2>Regulatory Affiars</h2>
			<h2>Regulatory Affiars</h2>
		</div>
		<div class="text-layer mt-8">
			<div class="flex flex-col items-center h-full w-full">
				<h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-100 top-16">
					<a href="/login">Login</a> or <a href="/register">Register</a>
				</h2>
				<p class="text-center mt-1 text-base-100">to start boosting your performance! 🚀</p>
			</div>
		</div>
		<div class="background-layer">
			<svg
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				width="100%"
				height="100%"
				viewBox="0 0 1600 900"
				preserveAspectRatio="xMidYMax slice"
			>
				<defs>
					<linearGradient id="bg">
						<stop offset="0%" style="stop-color:rgba(130, 158, 249, 0.06)" />
						<stop offset="50%" style="stop-color:rgba(76, 190, 255, 0.6)" />
						<stop offset="100%" style="stop-color:rgba(115, 209, 72, 0.2)" />
					</linearGradient>
					<path
						id="wave"
						fill="url(#bg)"
						d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
					/>
				</defs>
				<g>
					<use xlink:href="#wave" opacity=".3">
						<animateTransform
							attributeName="transform"
							attributeType="XML"
							type="translate"
							dur="10s"
							calcMode="spline"
							values="270 230; -334 180; 270 230"
							keyTimes="0; .5; 1"
							keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
							repeatCount="indefinite"
						/>
					</use>
					<use xlink:href="#wave" opacity=".6">
						<animateTransform
							attributeName="transform"
							attributeType="XML"
							type="translate"
							dur="8s"
							calcMode="spline"
							values="-270 230;243 220;-270 230"
							keyTimes="0; .6; 1"
							keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
							repeatCount="indefinite"
						/>
					</use>
					<use xlink:href="#wave" opacty=".9">
						<animateTransform
							attributeName="transform"
							attributeType="XML"
							type="translate"
							dur="6s"
							calcMode="spline"
							values="0 230;-140 200;0 230"
							keyTimes="0; .4; 1"
							keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
							repeatCount="indefinite"
						/>
					</use>
				</g>
			</svg>
		</div>
	</div>
</div>

<style>
	svg {
		/* position: relative; */
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		box-sizing: border-box;
		display: block;
		background-color: #07457e;
		background-image: linear-gradient(to bottom, rgba(7, 69, 126 0.86), #0e4166);
	}
	.wrap-layer {
		position: relative;
	}
	.text-layer {
		position: absolute;
		width: 100%;
		height: auto;
		top: 200px;
		left: 0;
	}
	.content {
		position: relative;
		top: 100px;
		display: flex;
		justify-content: center;
	}

	.content h2 {
		color: #fff;
		font-size: 5em;
		position: absolute;
	}

	.content h2:nth-child(1) {
		color: transparent;
		-webkit-text-stroke: 2px #3b82f6;
	}

	.content h2:nth-child(2) {
		color: #1fb2a5;
		animation: animate 4s ease-in-out infinite;
	}

	@keyframes animate {
		0%,
		100% {
			clip-path: polygon(
				0% 45%,
				16% 44%,
				33% 50%,
				54% 60%,
				70% 61%,
				84% 59%,
				100% 52%,
				100% 100%,
				0% 100%
			);
		}

		50% {
			clip-path: polygon(
				0% 60%,
				15% 65%,
				34% 66%,
				51% 62%,
				67% 50%,
				84% 45%,
				100% 46%,
				100% 100%,
				0% 100%
			);
		}
	}
</style>
