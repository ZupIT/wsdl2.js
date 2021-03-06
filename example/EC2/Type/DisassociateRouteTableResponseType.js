var Modeler = require("../Modeler.js");
var className = 'TypeDisassociateRouteTableResponseType';

var TypeDisassociateRouteTableResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    return: {
      type: "boolean",
      wsdlDefinition: {
        name: "return",
        type: "xs:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDisassociateRouteTableResponseType;
Modeler.register(TypeDisassociateRouteTableResponseType, "TypeDisassociateRouteTableResponseType");
