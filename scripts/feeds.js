/*const request = new XMLHTTPRequest();
const instagramApiUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS-TOKEN';
request.open('GET', instagramApiUrl);
request.send();
request.onreadystatechange= (e)=> {
	if (e.status !== 200) {
		// Didn't successfully get result
	}
}*/
const instagramApiUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS-TOKEN';
fetch(instagramApiUrl)
	.then(data=>{parseInstagramJson(data.json())})
	.then(result=>{})
	.catch(error=>{});