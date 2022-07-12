## set cookie

**const { setCookie, getCookie, deleteCookie } = mbrCookies();**

pass object
setCookies({
'name': 'value', || string
'value': 'value2', || any
'expire': 1 || int days(default: 1)
})

## get cookie

**getCookie("kub");** || name of the cookie || string || will return the value of the cookie if it exists or null if it doesn't

## delete cookie

**deleteCookie("kub");** || name of the cookie || string || will delete the cookie if it exists

## copyToClipboard

**copyToClipboard("text");** || string || will copy the text to the clipboard

## websiteLoader

const options = {
image: gifURL || string || url of the gif to load, default spinner,
bg: "rgba(0,0,0,.5)" || string || background color only in rgba, default rgba(0,0,0,.5),
bgOpacity: 0.5 || int 0 to 1 || background opacity, default 0.5,
size: 100 || int || size of the loader, default 100px,
}

**const loader = mbrLoader(options);**
**loader.init();**
**loader.destroy();**

## unique id

**mbrUniqueId();** || will return a unique id string of length 19 including the ('-')
