function Food(){
    this.getFood = function(){
      var mysql  = require('mysql');
      var connection = mysql.createConnection({     
        host     : 'localhost',
        user     : 'root',
        password : '',     
        database: 'meal', 
      }); 
      
      connection.connect();
       
      var modSql = "SELECT * FROM food_list";
      
      connection.query(modSql,function (err, result){
         if(err){
           console.log('[UPDATE ERROR] - ',err.message);
           return;
         } 
         console.log('1~~' + result);  
         return result; 
         
      }); 
      connection.end(); 
    }
    
}
module.exports = Food;