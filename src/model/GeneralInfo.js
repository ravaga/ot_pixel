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
    define(['ApiClient', 'model/InputItem', 'model/LoggingItem', 'model/OutputItem', 'model/SystemInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InputItem'), require('./LoggingItem'), require('./OutputItem'), require('./SystemInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Otpixel) {
      root.Otpixel = {};
    }
    root.Otpixel.GeneralInfo = factory(root.Otpixel.ApiClient, root.Otpixel.InputItem, root.Otpixel.LoggingItem, root.Otpixel.OutputItem, root.Otpixel.SystemInfo);
  }
}(this, function(ApiClient, InputItem, LoggingItem, OutputItem, SystemInfo) {
  'use strict';

  /**
   * The GeneralInfo model module.
   * @module model/GeneralInfo
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>GeneralInfo</code>.
   * @alias module:model/GeneralInfo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GeneralInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeneralInfo} obj Optional instance to populate.
   * @return {module:model/GeneralInfo} The populated <code>GeneralInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('supportSubscription'))
        obj.supportSubscription = ApiClient.convertToType(data['supportSubscription'], 'Boolean');
      if (data.hasOwnProperty('supportExecSync'))
        obj.supportExecSync = ApiClient.convertToType(data['supportExecSync'], 'Boolean');
      if (data.hasOwnProperty('supportExecAsync'))
        obj.supportExecAsync = ApiClient.convertToType(data['supportExecAsync'], 'Boolean');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('category'))
        obj.category = ApiClient.convertToType(data['category'], 'String');
      if (data.hasOwnProperty('system'))
        obj.system = SystemInfo.constructFromObject(data['system']);
      if (data.hasOwnProperty('input'))
        obj.input = ApiClient.convertToType(data['input'], [InputItem]);
      if (data.hasOwnProperty('output'))
        obj.output = ApiClient.convertToType(data['output'], [OutputItem]);
      if (data.hasOwnProperty('logging'))
        obj.logging = ApiClient.convertToType(data['logging'], [LoggingItem]);
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} version
   */
  exports.prototype.version = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {Boolean} supportSubscription
   */
  exports.prototype.supportSubscription = undefined;

  /**
   * @member {Boolean} supportExecSync
   */
  exports.prototype.supportExecSync = undefined;

  /**
   * @member {Boolean} supportExecAsync
   */
  exports.prototype.supportExecAsync = undefined;

  /**
   * @member {String} type
   */
  exports.prototype.type = undefined;

  /**
   * @member {String} category
   */
  exports.prototype.category = undefined;

  /**
   * @member {module:model/SystemInfo} system
   */
  exports.prototype.system = undefined;

  /**
   * @member {Array.<module:model/InputItem>} input
   */
  exports.prototype.input = undefined;

  /**
   * @member {Array.<module:model/OutputItem>} output
   */
  exports.prototype.output = undefined;

  /**
   * @member {Array.<module:model/LoggingItem>} logging
   */
  exports.prototype.logging = undefined;

  return exports;

}));
