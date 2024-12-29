# random-gifs

# what is the axios , and what is the use of axios in any project , and what is the differece between axios and fetch in making any api calling


Axios is the javascript library used for making http request in web application, it is promise based and provide and intuitive api ti interact with restful api.

use of axios:

1. make http request:
it support all http methods like get, post, delete,put.
2. handle request and response:
automatically parses the json responseand simplifies error handling .
3. interseptor:
you can intersept requests and response for task like adding header or logging.
4. timeout: axios allow you to set request timeout
5. crosss browser compatibility:
it works uniformally in both modern and older browser .
6. data transformation :
you can modify request and response before they are sent or received.

import axios from "axios";
axios.get("https://api.example.com/data").then(response=>console.log(response.data)).catch(error=>console.error(error))


# difference between axios and fetch 

feature ease of use :
axios simplify the http request with built in feature like json parsing but in fetch require manual handling in json parsing 

browser support: in axios work well in all browser including older version like ie , in fetch soupported only in modern browser no ie support without polyfills/

default behaviour: automaticallly parses json response but fetch does not parse json by default , require .json() to be called .

error handling:
automatically reject the promise for http status code >= 400 but fetch does not reject for status code >=400 , must check response.ok manually

interseptor:
provides interseptor for request and response but in fecth no build in interseptor for request and response , require custom code 

timeouts;
has built in support for request timeout in axios but in fetch no native timeout support , require manual implementation using Abortcontroller

nodejs support : in axios built in support for node js but in fetch need external library for nodejs like node-fetch 

# which is best in axios and fetch:

use axios:

when you need cross browser compatibility 
when you want to simplyfy error handling and response parsing.
if you need interseptor and built in time out support4
for large skill project where conveniense and features outweigh the slight overhead of adding an external library 

use fetch :
when you need a lightweight, natie solution without additional dependencies 
for small scale projects or when working in envoirments that fully support modern javascript ,
if you are comfertable handling json parsing timeouts, and error manually.

in general , axios is considered better for most senarios , espascially in larger application where its advanced feature save development time, fetch might be preferred for minimaql setups,
or project with modern browser requirements.

