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
    define(['ApiClient', 'model/DockerInfo', 'model/GeneralInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DockerInfo'), require('./GeneralInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Otpixel) {
      root.Otpixel = {};
    }
    root.Otpixel.Model = factory(root.Otpixel.ApiClient, root.Otpixel.DockerInfo, root.Otpixel.GeneralInfo);
  }
}(this, function(ApiClient, DockerInfo, GeneralInfo) {
  'use strict';

  /**
   * The Model model module.
   * @module model/Model
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Model</code>.
   * @alias module:model/Model
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Model</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Model} obj Optional instance to populate.
   * @return {module:model/Model} The populated <code>Model</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('generalInfo'))
        obj.generalInfo = GeneralInfo.constructFromObject(data['generalInfo']);
      if (data.hasOwnProperty('dockerInfo'))
        obj.dockerInfo = DockerInfo.constructFromObject(data['dockerInfo']);
      if (data.hasOwnProperty('creation'))
        obj.creation = ApiClient.convertToType(data['creation'], 'Number');
      if (data.hasOwnProperty('otStatus'))
        obj.otStatus = ApiClient.convertToType(data['otStatus'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {module:model/GeneralInfo} generalInfo
   */
  exports.prototype.generalInfo = undefined;

  /**
   * @member {module:model/DockerInfo} dockerInfo
   */
  exports.prototype.dockerInfo = undefined;

  /**
   * @member {Number} creation
   */
  exports.prototype.creation = undefined;

  /**
   * @member {String} otStatus
   */
  exports.prototype.otStatus = undefined;

  return exports;

}));
