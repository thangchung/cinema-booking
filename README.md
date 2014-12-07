revel-go-cart
=============

A DIY go cart, set up for running revel on open shift.

INSTRUCTIONS::

Create OPENSHIFT DIY CARTIDGE with this repo as the source

Once created, ssh into your machine and get the IP (echo OPENSHIFT_DIY_IP) and insert into the cont.app file found under src/app/conf/

TODO::

There is not a method for sucessfull stop yet.

Because of this, inbetween commits you must rhc app-force-stop XYZ for best results
