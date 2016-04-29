//## creando libs usando la tecnica self invocation

var Util = Util || {};	// NameSpace
var Util = (function (){

    var count = 0;
 
	// devuelvo un objeto que sera disponible
    return {
		id: '333222444',
		next: function (){
			return count++;
		}
		
	};
	
})();

Util.id; // 333222444
Util.next(); // 0
Util.next(); // 1