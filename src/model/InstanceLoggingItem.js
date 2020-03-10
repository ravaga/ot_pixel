/*
 * OTPIXEL
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.5
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
    define(['ApiClient', 'model/InstanceLoggingOptionItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InstanceLoggingOptionItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Otpixel) {
      root.Otpixel = {};
    }
    root.Otpixel.InstanceLoggingItem = factory(root.Otpixel.ApiClient, root.Otpixel.InstanceLoggingOptionItem);
  }
}(this, function(ApiClient, InstanceLoggingOptionItem) {
  'use strict';

  /**
   * The InstanceLoggingItem model module.
   * @module model/InstanceLoggingItem
   * @version 0.5
   */

  /**
   * Constructs a new <code>InstanceLoggingItem</code>.
   * @alias module:model/InstanceLoggingItem
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InstanceLoggingItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InstanceLoggingItem} obj Optional instance to populate.
   * @return {module:model/InstanceLoggingItem} The populated <code>InstanceLoggingItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('category'))
        obj.category = ApiClient.convertToType(data['category'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ApiClient.convertToType(data['metadata'], Object);
      if (data.hasOwnProperty('options'))
        obj.options = ApiClient.convertToType(data['options'], [InstanceLoggingOptionItem]);
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} category
   */
  exports.prototype.category = undefined;

  /**
   * @member {String} type
   */
  exports.prototype.type = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {Object} metadata
   */
  exports.prototype.metadata = undefined;

  /**
   * @member {Array.<module:model/InstanceLoggingOptionItem>} options
   */
  exports.prototype.options = undefined;

  return exports;

}));
