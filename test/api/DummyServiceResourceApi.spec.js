/*
 * OTPIXEL
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.11
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

  beforeEach(function() {
    instance = new Otpixel.DummyServiceResourceApi();
  });

  describe('(package)', function() {
    describe('DummyServiceResourceApi', function() {
      describe('getDummyService', function() {
        it('should call getDummyService successfully', function(done) {
          // TODO: uncomment getDummyService call and complete the assertions
          /*

          instance.getDummyService(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Otpixel.DummyJSON);
            expect(data.obj).to.be.a(Object);
            expect(data.obj).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postDummyService', function() {
        it('should call postDummyService successfully', function(done) {
          // TODO: uncomment, update parameter values for postDummyService call and complete the assertions
          /*
          var body = new Otpixel.JsonNode();
          body._array = false;
          body._null = false;
          body._int = false;
          body._float = false;
          body.nodeType = "ARRAY";
          body._number = false;
          body.valueNode = false;
          body._double = false;
          body._short = false;
          body.containerNode = false;
          body._boolean = false;
          body.textual = false;
          body.bigInteger = false;
          body.bigDecimal = false;
          body.binary = false;
          body._long = false;
          body._object = false;
          body.missingNode = false;
          body.pojo = false;
          body.integralNumber = false;
          body.floatingPointNumber = false;

          instance.postDummyService(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));