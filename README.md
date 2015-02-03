# Cinema Booking Application
* Database: The [schema](http://www.databaseanswers.org/data_models/cinema_bookings/index.htm) and the business [rule](http://www.databaseanswers.org/data_models/cinema_bookings/facts.htm)
* Server side: [Revel](http://revel.github.io) framework([golang](https://golang.org) language)
* Client side: [Reactjs](http://facebook.github.io/react) with [Flux](https://github.com/facebook/flux) architecture
* Build system: [Gulp](http://gulpjs.com) streaming system
* 

# How to run it?
* Make sure you have golang, npm, gulp, webpack and bower packages installed
* Export golang path to working directory
* Get Revel framework: go get github.com/revel/revel
* Get Revel command: go get github.com/revel/cmd/revel
* Export bin directory: export PATH="$PATH:$GOPATH/bin"
* Run npm to update node package: sudo npm update
* Run bower command to get vendors: bower update
* Build packages and bundle scripts: gulp dev
* Run website on localhost: revel run app

That's it (y)
