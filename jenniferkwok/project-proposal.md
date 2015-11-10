# project-1-proposal: Quote App

This is an app for browsing and sharing quotes.  The web content will be imported from external API's as well as users contributions. 
Users can login to create posts and bookmark(add star to) the quotes they like. 
The frontpage consist of a random quote and posts sorted by either popularity or date. On top of the page, there is a floating navigation bar that links to several categories, submit form, login/out and user profile.
Every post has a vote count plugin, everyone can give thumbs-up to posts and push them to the top of the page.

<h4>Wireframe:</h4>
<img src="https://cloud.githubusercontent.com/assets/13576777/10688133/da735af8-7926-11e5-964f-4f4e2d1a1f52.jpg">
<img src="https://cloud.githubusercontent.com/assets/13576777/10688131/d7474d4e-7926-11e5-9247-1a23e756901c.jpg">

<h4>Possible API sources:</h4>
<ul>
<li>WikiQuotes</li>
<li>Theysaidso</li>
<li>Quotes</li></ul>
reference: http://stackoverflow.com/questions/6989487/what-apis-are-there-available-for-popular-famous-quotes

<h4>User Stories:</h4>
<ul><li>I am Leon the film-buff and I like collecting lines from movies I've seen. With this app I can quickly type and store the lines i heard of, and see my collection when I view my profile. By selecting the 'movie' tag I can view all other movie quotes.
</li>
<li>I am Zen and a spiritual lifestyle is important to me. I usually seek for inspiration by reading. This app generates a quote for me every time i visit. By filling in user preferences, I can see quotes that are more suitable for me when I visit the page. I can also select categories, for example ‘motivational’, ’philosophical’, and find quotes that inspire me.
</li>
<li>I am Queen and I am an active social media user. I make posts on Facebook, instagram, twitter everyday. I look for text contents to make my posts richer. With this app I can easily find quotes that I want to include, and I can easily share them with 2 clicks on the share buttons. 
</li></ul>

<h4>ERD:</h4>
<img src="https://cloud.githubusercontent.com/assets/13576777/10687798/b990266a-7924-11e5-9abe-f3ca524ca4e6.png">
<br>Prefer referenced to embedded data.

<h4>Schemas:</h4>
<ul>
<li>User login: username and password</li><li>
Posts: quote, author, vote-count, tags/categories</li></ul>

<h4>Cookie:</h4>
Username and password will be stored with cookie.

<h4>Trello Kanban board:</h4>
https://trello.com/b/nHmZ55CX/quote-app
