type setCookieType = {
	name: string;
	value: any;
	expire?: number;
};
type loaderType = {
	image?: string;
	bg?: string;
	size?: number;
};

// for cookies
const mbrCookies = () => {
	// set cookie
	const setCookie = (data: setCookieType) => {
		const { name, value, expire = 1 } = data;
		const date = new Date();
		date.setTime(date.getTime() + expire * 24 * 60 * 60 * 1000);
		document.cookie = `${name}=${JSON.stringify(
			value
		)};expires=${date.toUTCString()}`;
	};
	// get cookie
	const getCookie = (name: string) => {
		const cookies = document.cookie.split(";");
		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i].split("=");
			if (cookie[0].trim() === name) {
				return JSON.parse(cookie[1]);
			}
		}
		return null;
	};
	// delete cookie
	const deleteCookie = (name: string) => {
		if (getCookie(name)) {
			const date = new Date();
			date.setTime(date.getTime() - 1);
			document.cookie = `${name}=;expires=${date.toUTCString()}`;
		}
	};
	return {
		setCookie,
		getCookie,
		deleteCookie,
	};
};

// copy to clipboard
const mbrClipboard = () => {
	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
	};
	return {
		copyToClipboard,
	};
};

// website loader for loading a website
const mbrLoader = (data: loaderType) => {
	const { image, bg = "rgba(0,0,0,.5)", size = 100 } = data;
	const wesite_inner_loader = `<div style="width:${size}px; height:${size}px; background:${bg}; border:5px solid transparent; border-top:5px solid white; border-bottom:5px solid white; border-radius:50%;  animation:spinn 1s linear infinite;"></div>`;
	const loader_img = `<img src="${image}" style="width:${size}px; height:${size}px;">`;
	const website_loader = `<div id="mbr_loader" style="background:${bg}; display:flex; width:100%; min-height:100vh; justify-content:center; align-items:center; z-index:9999; position:fixed; top:0;">${
		image ? loader_img : wesite_inner_loader
	}</div>`;
	const init = function () {
		document.body.insertAdjacentHTML("afterbegin", website_loader);
		spinn();
	};
	const destroy = function () {
		document.querySelector("#mbr_loader")?.remove();
	};
	const spinn = () => {
		let dynamicStyles = null as any;
		function addAnimation(body: string) {
			if (!dynamicStyles) {
				dynamicStyles = document.createElement("style");
				dynamicStyles.type = "text/css";
				document.head.appendChild(dynamicStyles);
			}

			dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
		}

		addAnimation(`
		  @keyframes spinn { 
			from{
				transform:rotate(0deg);
			  }
			  to{
				transform:rotate(360deg);
			  }
		  }
		`);
	};

	return {
		init,
		destroy,
	};
};

// generate unique id
const mbrUniqueId = () => {
	let result = "";
	for (let i = 1; result.length < 19; i++) {
		result += Math.floor(Math.random() * 16).toString(36);
		if (i % 4 === 0 && i !== 16) {
			result += "-";
		}
	}
	return result;
};
