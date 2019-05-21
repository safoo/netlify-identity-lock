;(function(a) {
    console.log(a === window) // Outputs `true`
  
 // Get the current user:
    // const user = window.netlifyIdentity.currentUser();
    

    // console.log('user',user);
    // console.log('currentuser',netlifyIdentity.currentUser());
    // console.log('netid', netlifyIdentity);
    
    // if(!user) {
    //     console.log(`not logged in`);
    // } else {
    //     console.log('logged in');
    // }

    // netlifyIdentity.on('init', user => console.log('init', user));
    netlifyIdentity.on('login', user => console.log('jwt', user.jwt()));
    // netlifyIdentity.on('logout', () => console.log('Logged out'));
    // netlifyIdentity.on('error', err => console.error('Error', err));
    // netlifyIdentity.on('open', () => console.log('Widget opened'));
    // netlifyIdentity.on('close', () => console.log('Widget closed'));
    
    const compareDate = (exp) => {
        const d = Date.now()
        if (d > exp){
            console.log("Your identity session has expired")
            netlifyIdentity.logout();
            console.log('jwt-after logout', user.jwt());
        } else {
            console.log("the token hasn't expired, yet")
            console.log('exp',exp);
            // redirect()
        }
    }
    if (window.netlifyIdentity) {
        // Check if the JWT token is expired, if so log out the user          
        netlifyIdentity.on("login", user => {
            console.log(user)
            compareDate(user.token.expires_at)
        });
        // Redirect to the main page after a successful login
        window.netlifyIdentity.on("init", user => {
        if (!user) {
            window.netlifyIdentity.on("login", () => {
                // redirect()
            });
        }
    });   
    }



})(window)