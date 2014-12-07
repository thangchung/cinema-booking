revel-go-cart
=============

A DIY go cart, set up for running revel on open shift.

INSTRUCTIONS
==============

Sign up to Openshift and create an OPENSHIFT DIY CARTIDGE
using this repo as the source repo

Once created, ssh into your machine and get the IP (echo $OPENSHIFT_DIY_IP) 

Insert into the marked position in the cont.app file, found under src/app/conf/

TODO
==============
There is not a method for sucessfull stop yet.

Because of this, inbetween commits you must rhc app-force-stop XYZ for best results
