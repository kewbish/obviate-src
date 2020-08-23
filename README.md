# Obviate
Obviate, well, obviates the tedium of setting up static sites away.  

Created by [Kewbish](https://github.com/kewbish).  
Written in Vue.  
Made for Hack the 6ix 2020.  
Released under GPLv3.

## Access
Right now, it's only accessible through localhost (haven't found the time to get it on Netlify yet).
Clone the source, and place a store.js file as a sibling of the main.js file. This'll need to include a GitHub OAuth Client ID and Secret. (The application's callback doesn't matter at the moment.)

## Use
Customize your Hugo blog's template, and click 'submit' on the customize page. This'll fork the template and place an action in to replace all the variables. NetlifyCMS is already integrated in the template, but you'll need to make your own OAuth app to verify in the Netlify dashboard.

## Roadmap
I was asleep for approximately 61% of this hackathon, so in the future, I'd like to:
- properly integrate Netlify
- make the Action run on fork (currently blocked)
- add an account system to keep track of your Obviate sites
- and perhaps add a small monetization feature :eyes:

## About
I make static sites quite frequently, and I'm tired of constantly repeating the same steps to mock up a quick blog for a friend or something. So: Obviate was born. (And the name's just from my vocabulary book - I was studying the day before the hackathon).

Check out my GitHub if you found me through the Hackathon, and feel free to star and see where (if there's a where) this project goes in the future!