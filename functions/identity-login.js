export function handler({ body }, _, callback){
	const { user } = JSON.parse(body)
	const { email } = user
	console.log(`${email} signing up`)
	const domain = email.split(`@`)[1]
	let res = ``
    let statusCode = 400
    
    cmsEmailWhitelist = [`netlify.com`,]

	if(cmsEmailWhitelist.indexOf(domain) !== -1){
		console.log(`Whitelisting`)
		statusCode = 200
		res = JSON.stringify({
			app_metadata: {
				roles: [`admin`],
			},
		})
	}
	else{
		console.log(`Blocking`)
	}
	callback(null, {
		statusCode,
		body: res,
	})
}