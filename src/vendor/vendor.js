/* This file contains references to the vendor libraries we're using
in this project. This is used by webpack in the production build only.
A separate bundle for vendor code is useful since it's unlikely to change 
as often as the application's code. So all the libraries we reference
here will be wreitten to vendor.js so they can be cached until on of them
changes. They only have to download vendor.js when a vendor library changes.
They only have to download vendor.js when a vendor library changes which should 
be less frequest. Any files that aren't referenced here will be bundled into 
main.js for the production build.
*/

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';