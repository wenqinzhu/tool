/*
* ���ߣ�����
* ���ڣ�2016-4-5
*/
function getUrlParam(param){
			if(typeof param != 'string'){
				console.error('your param is not a string , you must check your param');
				return false;
			}
			var url = decodeURIComponent(location.href);  //��url�е�ĳЩ�������ַ��������ַ����н���
			return url.slice(url.indexOf(param + '=')).slice(param.length +1).indexOf('&') < 0
			? url.slice(url.indexOf(param + '=')).slice(param.length +1)
			: url.slice(url.indexOf(param + '=')).slice(param.length +1,url.slice(url.indexOf(param + '=')).indexOf('&'));
		}