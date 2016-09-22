/*
* 作者：李运
* 日期：2016-4-5
*/
function getUrlParam(param){
			if(typeof param != 'string'){
				console.error('your param is not a string , you must check your param');
				return false;
			}
			var url = decodeURIComponent(location.href);  //对url中的某些从中文字符编码后的字符进行解码
			return url.slice(url.indexOf(param + '=')).slice(param.length +1).indexOf('&') < 0
			? url.slice(url.indexOf(param + '=')).slice(param.length +1)
			: url.slice(url.indexOf(param + '=')).slice(param.length +1,url.slice(url.indexOf(param + '=')).indexOf('&'));
		}