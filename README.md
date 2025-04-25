Milestone 34: Validating JWT Token from Cookie 
=> Extracting JWT from Cookie

Retrieved the JWT token from the browser’s cookie storage.
Sent the token to the backend with each request.
=> JWT Token Validation

Created a middleware in the backend to validate the incoming JWT token.
Used verify() method from jsonwebtoken to decode and verify token authenticity.
=> Route Protection

Applied the JWT validation middleware to secure routes.
Ensured only authenticated users can access protected pages.
=> Benefits

Enhances app security by verifying token on every request.
Prevents unauthorized access to sensitive routes and pages.