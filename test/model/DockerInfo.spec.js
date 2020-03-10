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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Otpixel);
  }
}(this, function(expect, Otpixel) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('DockerInfo', function() {
      beforeEach(function() {
        instance = new Otpixel.DockerInfo();
      });

      it('should create an instance of DockerInfo', function() {
        // TODO: update the code to test DockerInfo
        expect(instance).to.be.a(Otpixel.DockerInfo);
      });

      it('should have the property dockerName (base name: "dockerName")', function() {
        // TODO: update the code to test the property dockerName
        expect(instance).to.have.property('dockerName');
        // expect(instance.dockerName).to.be(expectedValueLiteral);
      });

      it('should have the property label (base name: "label")', function() {
        // TODO: update the code to test the property label
        expect(instance).to.have.property('label');
        // expect(instance.label).to.be(expectedValueLiteral);
      });

    });
  });

}));
