# Otpixel.InstanceResourceApi

All URIs are relative to *http://otpixel.satrdlab.upv.es:8080/otpixel/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInstance**](InstanceResourceApi.md#createInstance) | **PUT** /instances/create | Create an instance
[**deleteInstance**](InstanceResourceApi.md#deleteInstance) | **DELETE** /instances/delete/{id} | Delete an instance
[**getInstance**](InstanceResourceApi.md#getInstance) | **GET** /instances/get/{id} | Get an instance by id
[**listInstances**](InstanceResourceApi.md#listInstances) | **GET** /instances/list | List all instances
[**updateInstance**](InstanceResourceApi.md#updateInstance) | **POST** /instances/update | Update an instance


<a name="createInstance"></a>
# **createInstance**
> Instance createInstance(body)

Create an instance

If id is not provided, it will be randomly generated

### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.InstanceResourceApi();

var body = new Otpixel.Instance(); // Instance | Instance description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createInstance(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Instance**](Instance.md)| Instance description | 

### Return type

[**Instance**](Instance.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteInstance"></a>
# **deleteInstance**
> deleteInstance(id)

Delete an instance



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.InstanceResourceApi();

var id = "id_example"; // String | ID of instance


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInstance(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of instance | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getInstance"></a>
# **getInstance**
> Instance getInstance(id)

Get an instance by id



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.InstanceResourceApi();

var id = "id_example"; // String | instance


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInstance(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| instance | 

### Return type

[**Instance**](Instance.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listInstances"></a>
# **listInstances**
> [Instance] listInstances(opts)

List all instances



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.InstanceResourceApi();

var opts = { 
  'idRef': "idRef_example", // String | idRef
  'user': "user_example", // String | user
  'status': "status_example" // String | status
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listInstances(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idRef** | **String**| idRef | [optional] 
 **user** | **String**| user | [optional] 
 **status** | **String**| status | [optional] 

### Return type

[**[Instance]**](Instance.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateInstance"></a>
# **updateInstance**
> Instance updateInstance(body)

Update an instance



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.InstanceResourceApi();

var body = new Otpixel.Instance(); // Instance | Instance description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateInstance(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Instance**](Instance.md)| Instance description | 

### Return type

[**Instance**](Instance.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

