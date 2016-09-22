$(function() {
		if (isAndroid()) {
			alert("安卓")
		}
		if (isIpad()) {
			alert("ipad")
		}
		if (isIphone()) {
			alert("苹果")
		}
		if (iswindowsPhone()) {
			alert("windoesphone")
		}
		if (isweixin()) {
			alert("微信")
		}
		if (IsAndroidPad()) {
			alert("安卓pad")
		}
	})
	//安卓
function isAndroid() {
	if (/(Android)/i.test(navigator.userAgent)) {
		alert(navigator.userAgent);
		return true;
	}
	return false;
}
//苹果
function isIphone() {
	if (/(iPhone)/i.test(navigator.userAgent)) {
		alert(navigator.userAgent);
		return true;
	}
	return false;
}
//pad
function isIpad() {
	if (/(iPad)/i.test(navigator.userAgent)) {
		alert(navigator.userAgent);
		return true;
	}
	return false;
}
//windowsphone
function iswindowsPhone() {
	if (/(windows phone)/i.test(navigator.userAgent)) {
		alert(navigator.userAgent);
		return true;
	}
	return false;
}
//weixin
function isweixin() {
	if (/(micromessenger)/i.test(navigator.userAgent)) {
		alert(navigator.userAgent);
		return true;
	}
	return false;
} 
//androw ipad
function IsAndroidPad() {
	if ((/(Android)/i.test(navigator.userAgent))&&!(/(Mobile)/i.test(navigator.userAgent))) {
		alert(navigator.userAgent);
		return true;
	}
	return false;
}