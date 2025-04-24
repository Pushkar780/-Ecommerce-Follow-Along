Milestone 33: JWT Authentication Setup 
=> Install jsonwebtoken Package

Installed jsonwebtoken package via NPM: npm install jsonwebtoken.
Added it to the project to handle JWT generation.
=> Generate and Set Expiry for JWT

Used sign() method from jsonwebtoken to create a token with email and ID.
Set maxAge to define the token's expiration time.
=> Store Token in Response Cookie

Added the generated JWT to the response cookie.
Configured the cookie to be stored in the browser for subsequent requests.e