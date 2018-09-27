{ // init particles.js
	particlesJS("particle-container", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":0.2,"direction":"left","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":100,"line_linked":{"opacity":0.8}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true})
}

{ // tooltips
	let tooltips = document.getElementsByClassName("tooltip");
	let container = document.getElementById("tooltips-container");

	let tt = document.createElement("div");
	tt.classList.add("tooltip-container", "hidden");

	container.appendChild(tt);

	[].forEach.call(tooltips, (tooltip) => {
		let content = tooltip.getAttribute("title");

		tooltip.addEventListener("pointerenter", () => {
			tt.setAttribute("text", content);
			tt.classList.remove("hidden");
		});

		tooltip.addEventListener("pointermove", (e) => {
			tt.style.left = e.clientX + window.scrollX + "px";
			tt.style.top = e.clientY + window.scrollY + "px";
		});

		tooltip.addEventListener("pointerleave", () => {
			tt.classList.add("hidden");
		});

		tooltip.removeAttribute("title");
	});
}

{ // smooth scroll
	let links = document.getElementsByClassName("link");

	[].forEach.call(links, (link) => {
		let anchor = document.getElementById(link.getAttribute("href").substring(1));

		link.addEventListener("click", () =>
			anchor.scrollIntoView({ behavior: "smooth" })
		);

		link.removeAttribute("href");
	});
}

{ //jumpers
	{ // jump to top
		let jump = document.getElementById("jump");
	
		jump.classList.add("hidden");
	
		document.addEventListener("scroll", () =>
			window.scrollY > window.innerHeight - 1 ?
				jump.classList.remove("hidden") :
				jump.classList.add("hidden")
		);
	}

	
	{ // jump to bottom
		let jump = document.getElementById("jumpb");

		jump.classList.remove("hidden");

		document.addEventListener("scroll", () =>
			window.scrollY > 1 ?
				jump.classList.add("hidden") :
				jump.classList.remove("hidden")
		);
	}
}

{ // easter egg owo
	let input = "";
	let key = "38384040373937396665";

	document.addEventListener("keydown", (e) => {
		input += "" + e.keyCode;

		if (input == key) return window.location = "https://www.youtube.com/watch?v=RiHRI_Z2Kgs";
		if (!key.indexOf(input)) return;

		input = "" + e.keyCode;
	});
}

{ //edge sux
	if (navigator.appName == 'Microsoft Internet Explorer' ||
		(navigator.appName == "Netscape" && navigator.appVersion.indexOf('Edge') > -1) ||
		(navigator.appName == "Netscape" && navigator.appVersion.indexOf('Trident') > -1)) {
		let warning = document.getElementById("edge-warning");
		warning.removeAttribute("style");

		let dismiss = document.getElementById("edge-warning-dismiss");
		dismiss.addEventListener("click", () => warning.style.display = "none");
	}
}
