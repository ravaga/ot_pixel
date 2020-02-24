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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Otpixel) {
      root.Otpixel = {};
    }
    root.Otpixel.ScheduleInfo = factory(root.Otpixel.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ScheduleInfo model module.
   * @module model/ScheduleInfo
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ScheduleInfo</code>.
   * @alias module:model/ScheduleInfo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScheduleInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScheduleInfo} obj Optional instance to populate.
   * @return {module:model/ScheduleInfo} The populated <code>ScheduleInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('unit'))
        obj.unit = ApiClient.convertToType(data['unit'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
      if (data.hasOwnProperty('start'))
        obj.start = ApiClient.convertToType(data['start'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} unit
   */
  exports.prototype.unit = undefined;

  /**
   * @member {Number} value
   */
  exports.prototype.value = undefined;

  /**
   * @member {Number} start
   */
  exports.prototype.start = undefined;

  return exports;

}));
