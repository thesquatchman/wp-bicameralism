## WP Bicameralism

Bicameralism (the philosophy of "two-chamberedness") is a hypothesis in psychology that argues that the human mind once assumed a state in which cognitive functions were divided between one part of the brain which appears to be "speaking", and a second part which listens and obeys — a bicameral mind. This theme uses a decoupled front end built with React.js which plays the part of the "listener", while the Wordpress Rest API is the "speaker".

The idea here is to create a fully functional Wordpress/Woocommerce theme using React. The php only theme template file is the `index.php` and any files that need to be included to override other plugins taking control of the routing like `woocommerce.php`.

The `functions.php` file adds extra REST endpoints, and removes the "users" endpoint because "wtf Wordpress?".

This app is not yet finished, below is a todo list for anyone interested in contributing.

-expand page template component
-expand posts and post components
-expand product template
-fix cart to update qty correctly
-get a checkout functioning with C.O.D. to start
-create & import a few seperate modules on npm to process payments: Square, Paypal, Stripe
-add a user log in and recent orders

Fairly ambitious yes, but considering the number of sites using Woocommerce it opens up a lot of fun possibilities for Front-End Devs.
