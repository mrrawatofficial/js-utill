## set cookie

const { setCookie, getCookie, deleteCookie } = mbrCookies();

pass object
setCookies({
'name': 'value', || string
'value': 'value2', || any
'expire': 1 || int days(default: 1)
})

## get cookie

getCookie("kub"); || name of the cookie || string || will return the value of the cookie if it exists or null if it doesn't

## get cookie

deleteCookie("kub"); || name of the cookie || string || will delete the cookie if it exists

## copyToClipboard

<script>
    const { copyToClipboard } = mbrClipboard();
    const input = document.querySelector('[data-input="copy"]');
    const button = document.querySelector('[data-button="copy"]');
    button.addEventListener("click", () => {
        copyToClipboard(input.value);
    });
</script>

copyToClipboard("text"); || string || will copy the text to the clipboard

## websiteLoader

const options = {
image: gifURL || string || url of the gif to load, default spinner,
bg: "#333" || string || background color, default #333,
bgOpacity: 0.5 || int 0 to 1 || background opacity, default 0.5,
size: 100 || int || size of the loader, default 100px,
}
const loader = mbrLoader(options);
loader.init();
loader.destroy();
