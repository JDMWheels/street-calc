(function(){"use strict";angular.module("dalcApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){return a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}])}).call(this),function(){"use strict";angular.module("dalcApp").controller("MainCtrl",["$scope","$http",function(a,b){return a.itemCost=0,a.shippingCost=0,a.bankFee=function(){return a.itemCost<3e4?500:630},a.brokerFee=function(){var b,c;return b=a.itemCost,c=function(){switch(!1){case!(1e4>b):return 1e3;case!(35e3>b):return.1*b;case!(b>5e4):return.07*b;default:return 3500}}(),100*Math.floor(c/100)},a.tyres=0,a.tyresTotal=function(){return 1e3*a.tyres},a.weight=300,a.quantity=1,a.shippingTypes=["Sea","Surface","EMS"],a.countries=["AUS/NZ","USA/Canada","Europe"],a.country=a.countries[0],a.shippingType=a.shippingTypes[0],a.currencies={AUD:"$",USD:"$",EUR:"€"},a.currCountries=Object.keys(a.currencies),a.myCurrency="AUD",a.shipping=function(){var b,c,d;return d=a.weight,c=a.shippingType,b=function(){switch(!1){case"Sea"!==c:return a.sea(d);case"Surface"!==c:return a.surface(d);case"EMS"!==c:return a.ems(d,a.country)}}(),b*a.quantity},a.sea=function(a){var b,c,d,e,f;return f=[1800,550,350],d=f[0],c=f[1],b=f[2],e=function(){switch(!1){case!(1e4>=a):return d+c*(Math.ceil(a/1e3)-1);case!(a>1e4):return d+9*c+b*(Math.ceil(a/1e3)-10)}}()},a.surface=function(a){var b,c,d,e,f;return f=[2700,1050,700],d=f[0],c=f[1],b=f[2],e=function(){switch(!1){case!(5e3>=a):return d+1150*(Math.ceil(a/1e3)-1);case!(1e4>=a):return 7300+c*(Math.ceil(a/1e3)-5);case!(12e3>=a):return d+9*c+b*(Math.floor(a/1e3)-10);case!(14e3>=a):return 14350;case!(15e3>=a):return 16050;case!(a>15e3):return 16050+b*(Math.ceil(a/1e3)-15)}}()},a.ems=function(a,b){var c,d,e,f,g,h,i;return i=function(){switch(!1){case!("AUS/NZ"===b||"USA/Canada"===b):return[1200,180,400,700,1100];case"Europe"!==b:return[1500,200,450,800,1300]}}(),h=i[0],e=i[1],g=i[2],f=i[3],d=i[4],c=function(){switch(!1){case!(300>=a):return h;case!(500>=a):return h+300;case!(1e3>=a):return h+300+e*(Math.ceil(a/100)-5);case!(2e3>=a):return h+300+5*e+g*(Math.ceil(a/250)-4);case!(6e3>=a):return h+300+5*e+4*g+f*(Math.ceil(a/500)-4);case!(a>6e3):return h+300+5*e+4*g+8*f+d*(Math.ceil(a/1e3)-6)}}()},a.handling=0,a.totWithoutShipping=function(){return a.itemCost+a.shippingCost+a.bankFee()+a.brokerFee()+a.tyresTotal()+a.handling},a.tot=function(){return a.itemCost+a.shippingCost+a.bankFee()+a.brokerFee()+a.shipping()+a.tyresTotal()+a.handling},a.paypal=function(){return 1.04*a.tot()},a.exchangeRateDefaults=function(){return a.exchangeRate=function(){switch(!1){case"AUD"!==a.myCurrency:return 95.5;case"USD"!==a.myCurrency:return 109.87;case"EUR"!==a.myCurrency:return 138.6}}()},a.exchangeRate=a.exchangeRateDefaults(),a.exchangeRateSub=function(){return a.exchangeRate-3.3},a.priceAUD=function(){return a.tot()/a.exchangeRateSub()},a.paypalPriceAUD=function(){return a.paypal()/a.exchangeRateSub()},a.fetching=!1,a.fetchYenAUD=function(c){var d,e;return c.preventDefault(),a.fetching=!0,d=a.myCurrency,e="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22"+d+"JPY%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=",b.get(e).then(function(b){return a.exchangeRate=Math.round(100*b.data.query.results.rate.Rate)/100,a.fetching=!1})}}])}.call(this),angular.module("dalcApp").controller("MainCtrl",["$scope","$http",function(a,b){return a.itemCost=0,a.shippingCost=0,a.bankFee=function(){return a.itemCost<3e4?500:630},a.brokerFee=function(){var b,c;return b=a.itemCost,c=function(){switch(!1){case!(1e4>b):return 1e3;case!(35e3>b):return.1*b;case!(b>5e4):return.07*b;default:return 3500}}(),100*Math.floor(c/100)},a.tyres=0,a.tyresTotal=function(){return 1e3*a.tyres},a.weight=300,a.quantity=1,a.shippingTypes=["Sea","Surface","EMS"],a.countries=["AUS/NZ","USA/Canada","Europe"],a.country=a.countries[0],a.shippingType=a.shippingTypes[0],a.currencies={AUD:"$",USD:"$",EUR:"€"},a.currCountries=Object.keys(a.currencies),a.myCurrency="AUD",a.shipping=function(){var b,c,d;return d=a.weight,c=a.shippingType,b=function(){switch(!1){case"Sea"!==c:return a.sea(d);case"Surface"!==c:return a.surface(d);case"EMS"!==c:return a.ems(d,a.country)}}(),b*a.quantity},a.sea=function(a){var b,c,d,e,f;return f=[1800,550,350],d=f[0],c=f[1],b=f[2],e=function(){switch(!1){case!(1e4>=a):return d+c*(Math.ceil(a/1e3)-1);case!(a>1e4):return d+9*c+b*(Math.ceil(a/1e3)-10)}}()},a.surface=function(a){var b,c,d,e,f;return f=[2700,1050,700],d=f[0],c=f[1],b=f[2],e=function(){switch(!1){case!(5e3>=a):return d+1150*(Math.ceil(a/1e3)-1);case!(1e4>=a):return 7300+c*(Math.ceil(a/1e3)-5);case!(12e3>=a):return d+9*c+b*(Math.floor(a/1e3)-10);case!(14e3>=a):return 14350;case!(15e3>=a):return 16050;case!(a>15e3):return 16050+b*(Math.ceil(a/1e3)-15)}}()},a.ems=function(a,b){var c,d,e,f,g,h,i;return i=function(){switch(!1){case!("AUS/NZ"===b||"USA/Canada"===b):return[1200,180,400,700,1100];case"Europe"!==b:return[1500,200,450,800,1300]}}(),h=i[0],e=i[1],g=i[2],f=i[3],d=i[4],c=function(){switch(!1){case!(300>=a):return h;case!(500>=a):return h+300;case!(1e3>=a):return h+300+e*(Math.ceil(a/100)-5);case!(2e3>=a):return h+300+5*e+g*(Math.ceil(a/250)-4);case!(6e3>=a):return h+300+5*e+4*g+f*(Math.ceil(a/500)-4);case!(a>6e3):return h+300+5*e+4*g+8*f+d*(Math.ceil(a/1e3)-6)}}()},a.handling=0,a.totWithoutShipping=function(){return a.itemCost+a.shippingCost+a.bankFee()+a.brokerFee()+a.tyresTotal()+a.handling},a.tot=function(){return a.itemCost+a.shippingCost+a.bankFee()+a.brokerFee()+a.shipping()+a.tyresTotal()+a.handling},a.paypal=function(){return 1.04*a.tot()},a.exchangeRateDefaults=function(){return a.exchangeRate=function(){switch(!1){case"AUD"!==a.myCurrency:return 95.5;case"USD"!==a.myCurrency:return 109.87;case"EUR"!==a.myCurrency:return 138.6}}()},a.exchangeRate=a.exchangeRateDefaults(),a.exchangeRateSub=function(){return a.exchangeRate-3.3},a.priceAUD=function(){return a.tot()/a.exchangeRateSub()},a.paypalPriceAUD=function(){return a.paypal()/a.exchangeRateSub()},a.fetching=!1,a.fetchYenAUD=function(c){var d,e;return c.preventDefault(),a.fetching=!0,d=a.myCurrency,e="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22"+d+"JPY%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=",b.get(e).then(function(b){return a.exchangeRate=Math.round(100*b.data.query.results.rate.Rate)/100,a.fetching=!1})}}]),function(){"use strict";angular.module("dalcApp").controller("AboutCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}])}.call(this);