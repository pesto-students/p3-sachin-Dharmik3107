const twitter = require('twitter');

const client = new twitter({
    consumer_key:'',
    consumer_secret:'',
    access_token_key:'',
    access_token_secret:''
});

const params = {screenName:'nodejs'};
client.get("statuses/user_timeline",params, function(error, tweets, response ){
    if(!error) {
        console.log(tweets)
    }
})