var Modeler = require("../Modeler.js");
var className = 'TypeReleaseAddressResponseType';

var TypeReleaseAddressResponseType = function(json, parentObj) {
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

module.exports = TypeReleaseAddressResponseType;
Modeler.register(TypeReleaseAddressResponseType, "TypeReleaseAddressResponseType");
