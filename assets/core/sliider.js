let size = 220;
if ($(window).width() < 650)  {
	size = 180;
} else if (($(window).width() >= 650)&&($(window).width() <= 1200))  {
	size = 220;
} else if ($(window).width() > 1200)  {
	size = 280;
};
$(document.body).append(`<a href="https://webup.icu" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="${size}" height="${size}" viewBox="0 0 500 500" xml:space="preserve" style="position: fixed; bottom: 0; z-index: 9999">
<desc>Created with Fabric.js 4.6.0</desc>
<defs>
</defs>
<g transform="matrix(5.76 5.76 -0.94 0.94 195.52 295.59)" id="xzSxf9GI-tpj6giwbynwS"  >
<linearGradient id="SVGID_168" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -50 -50)"  x1="0" y1="50.000000000000036" x2="99.93967489240495" y2="50.369207801371445">
<stop offset="0%" style="stop-color:#904CAA;stop-opacity: 1"/>
<stop offset="52.814859737755896%" style="stop-color:#B83F8C;stop-opacity: 1"/>
<stop offset="100%" style="stop-color:#CE3879;stop-opacity: 1"/>
</linearGradient>
<path style="stroke: rgb(74,76,202); stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: url(#SVGID_168); fill-rule: nonzero; opacity: 0.77;" vector-effect="non-scaling-stroke"  transform=" translate(0, 0)" d="M -50 -50 L 50 -50 L 50 50 L -50 50 z" stroke-linecap="round" />
</g>
<g transform="matrix(0.71 0.71 -0.71 0.71 224.57 277.83)" style="" id="_RvE6UGuFksSzGCEbwznH"  >
		<text xml:space="preserve" font-family="Comfortaa" font-size="40" font-style="normal" font-weight="700" line-height="1" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; white-space: pre;" ><tspan x="-78.26" y="6.08" >Web UP</tspan></text>
</g>
<g transform="matrix(0.71 0.71 -0.71 0.71 184.06 346.87)" style="" id="pBqeauKAmW-O7AHD9A3hT"  >
		<text xml:space="preserve" font-family="Comfortaa" font-size="29" font-style="normal" font-weight="600" line-height="1" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; white-space: pre;" ><tspan x="-151.2" y="6.26" >Не публиковать!</tspan></text>
</g>
<g transform="matrix(0.71 0.71 -0.71 0.71 171.32 277.83)" style="" id="3Bduw2AN8wMmOXoiThK65"  >
		<text xml:space="preserve" font-family="Comfortaa" font-size="29" font-style="normal" font-weight="600" line-height="1" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; white-space: pre;" ><tspan x="-150.88" y="7.88" >Веб-сайт в разработке!</tspan></text>
</g>
</svg></a>`);
