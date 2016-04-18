angular.module('myApp',[],['$provide',function($provide){
     console.log('config');
}])

.config(function(APIKEY){
        console.log(APIKEY);
        console.log('config');
    })

//在config之后 controller等其他服务之前
.run(function(){
        console.log('run');
    })

.constant('APIKEY','XXXXX')

.value('vension','1.0.0')

.controller('firstController',['APIKEY','vension',function(APIKEY,vension){
    console.log(APIKEY);
    console.log(vension);
      console.log('constructor');
}
    ])