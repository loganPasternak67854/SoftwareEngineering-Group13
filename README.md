Project Title: Goods.com

Project Report 1: Part 1: Project Proposal 

Project Description:
	
	Goods.com is an e-commerce website. One can explore the site and make purchases with or without an account. Signing up for an account provides numerous perks to consumers such as access to product discounts, an add free experience, and a reduced flat sales fee. After one has created an account, one must login using two factor authentication. This feature is implemented in order to provide account security. One will have the option to view the customer reviews that others have made on the site and add their own. If an item is in stock, then it can be added to a cart whereby one has the option to continue looking through the product catalog or proceed to checkout. Upon verifying a payment method, the estimated time of delivery, flat sales fee, and shipping tax will be displayed before the user. A user will be prompted to confirm their purchase and provide their shipping address as well as their email address. Upon confirmation, one will be sent a receipt and a product tracking number via email. This number is used to track the progress of one’s shipment. Whilst the order is being processed in the warehouse and products in the cart are being packed, one can always cancel their order. However, once an item has been shipped, one can no longer return their item and cannot get access to a refund. During the shipping process, one will be able to track the package in real time heading towards your location. Once the order has reached the designated shipping address a notification will be sent via email stating that the package has been properly delivered. 

Data Operations:

Priority scale (1pts→5pts)
5pts=highest priority
1pts=lowest priority

/* 
* Create a member account (5 pts)
* Login (Two factor authentication) (5 pts)
* Forgot password (1 pts)
* Logout (5 pts)
* User inactivity logout (2 pts) 
* Search product catalog (5 pts)
* Ad banners (removed for members with account) (1 pts)
* List discounted products (for members with account) (4 pts)
* View product details (5 pts)
* View product review (4 pts)
* Add product review (3 pts)
* Profanity filter for reviews (1 pts)
* Check whether product is in stock (5 pts)
* Add product to shopping cart (5 pts)
* Ask user whether they want to proceed to checkout (5 pts)
* Choose payment method (5 pts)
* Display estimated time of delivery and shipping tax (there is a reduced sales tax for those with an account) (3 pts)
* Confirm purchase, shipping address, and email address
 (choice of default for user with account)  (5 pts)
* Send receipt to user with tracking number via email (5 pts)
* Check status of order (5 pts)
* Order cancelation (5 pts)
* Track package once shipped (iphone tracking) (4 pts)
* Confirm package has reached destination (end) (5 pts)
*/

Business Rules/Policies:

/*
* An order can stay in the cart for three days before being taken out? 
* An order can be canceled any time before it is shipped with a full refund.
* Items cannot be returned
* There will be shipping taxes
* The use of profanity is discouraged in our review system (this is a pg13 site)
* If an item is not is stock then you will be notified
* If you do not own an account then you will not be able to access product discounts
* If you do not own an account then ads will appear in the product catalog
* You are responsible for protecting your own account information
*/

Search:

/*
The user can search for products by name, as well as the description of business policies by typing in the search topic. 
*/

