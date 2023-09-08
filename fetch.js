import fetch from 'node-fetch';



export async function fetchWorkList()
{
	return await fetch("https://kwork.ru/projects", {
	  "headers": {
	    "accept": "application/json, text/plain, */*",
	    "accept-language": "ru-RU,ru;q=0.9",
	    "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7uiz1svR4gsItUAB",
	    "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
	    "sec-ch-ua-mobile": "?1",
	    "sec-ch-ua-platform": "\"Android\"",
	    "sec-fetch-dest": "empty",
	    "sec-fetch-mode": "cors",
	    "sec-fetch-site": "same-origin",
	    "x-requested-with": "XMLHttpRequest",
	    "cookie": "_kmid=97bfd6a24d1bd03611bbff49a9a35b5b; _kmfvt=1694208044; RORSSQIHEK=5f10a2f5301d8782990d107e53478e8d; _gcl_au=1.1.1664619658.1694208046; _ga_5PPLL9HRHT=GS1.1.1694208046.1.0.1694208046.60.0.0; _ga=GA1.2.1482462582.1694208046; _gid=GA1.2.51024063.1694208046; _dc_gtm_UA-68703836-1=1; _ubtcuid=clmb3q6ws00003bchkepczpqt; google_client_id=1482462582.1694208046; _sp_ses.b695=*; _ym_uid=1694208049900289311; _ym_d=1694208049; yandex_client_id=1694208049900289311; _ym_isad=2; _sp_id.b695=0cad57b7-2fba-48bd-9d36-076a380e617c.1694208046.1.1694208056.1694208046.61c9a9d3-d2d3-4b1d-8b55-4c67e98980ba; _gali=search-keyword; referrer_url=https%3A%2F%2Fkwork.ru%2Fprojects%3Fkeyword%3Dvue%26a%3D1; site_version=mobile",
	    "Referer": "https://kwork.ru/projects?keyword=vu&a=1",
	    "Referrer-Policy": "strict-origin-when-cross-origin"
	  },
	  "body": "------WebKitFormBoundary7uiz1svR4gsItUAB\r\nContent-Disposition: form-data; name=\"keyword\"\r\n\r\nvue\r\n------WebKitFormBoundary7uiz1svR4gsItUAB\r\nContent-Disposition: form-data; name=\"a\"\r\n\r\n1\r\n------WebKitFormBoundary7uiz1svR4gsItUAB--\r\n",
	  "method": "POST"
	}).then(async resa=>{
		let data = await resa.json();
		return data.data.pagination.data
	});
}