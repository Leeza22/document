const url = 'http://ep-saas.oss-cn-beijing.aliyuncs.com/blob:http://localhost:8080/08431a39-113b-418a-8900-a5e7353dabc1?Expires=1610504383&OSSAccessKeyId=LTAINDAcAAPrnyXq&Signature=RMW4wvDiLci26nhRg/Vpyf5f41M='
function parseQueryString(url) {
	var obj = {}
	var paraString = url.substring(url.indexOf("?")+1, url.length).split("&");
	for(let i in paraString) {
	  let keyvalue = paraString[i];
		let index = keyvalue.indexOf('=')
		let key = keyvalue.substring(0, index)
		let value = keyvalue.substring(index + 1, keyvalue.length);
		obj[key] = value
	}
	return obj;
}
console.log(parseQueryString(url))