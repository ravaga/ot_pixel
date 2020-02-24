/*
 * OTPIXEL
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ConnectorOptionItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConnectorOptionItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Otpixel) {
      root.Otpixel = {};
    }
    root.Otpixel.ConnectorItem = factory(root.Otpixel.ApiClient, root.Otpixel.ConnectorOptionItem);
  }
}(this, function(ApiClient, ConnectorOptionItem) {
  'use strict';

  /**
   * The ConnectorItem model module.
   * @module model/ConnectorItem
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ConnectorItem</code>.
   * @alias module:model/ConnectorItem
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConnectorItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConnectorItem} obj Optional instance to populate.
   * @return {module:model/ConnectorItem} The populated <code>ConnectorItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('options'))
        obj.options = ApiClient.convertToType(data['options'], [ConnectorOptionItem]);
    }
    return obj;
  }

  /**
   * @member {String} type
   */
  exports.prototype.type = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {Array.<module:model/ConnectorOptionItem>} options
   */
  exports.prototype.options = undefined;

  return exports;

}));
