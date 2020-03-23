# Otpixel.KPIResourceApi

All URIs are relative to *http://otpixel.satrdlab.upv.es:8080/otpixel/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createKPI**](KPIResourceApi.md#createKPI) | **PUT** /kpis/create | Create a KPI
[**deleteKPI**](KPIResourceApi.md#deleteKPI) | **DELETE** /kpis/delete/{id} | Delete a kpi
[**getKPIByID**](KPIResourceApi.md#getKPIByID) | **GET** /kpis/get/{id} | Get a KPI by id
[**listKPIs**](KPIResourceApi.md#listKPIs) | **GET** /kpis/list | List all models
[**updateKPI**](KPIResourceApi.md#updateKPI) | **POST** /kpis/update | Update a kpi


<a name="createKPI"></a>
# **createKPI**
> KPI createKPI(body)

Create a KPI

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

var apiInstance = new Otpixel.KPIResourceApi();

var body = new Otpixel.KPI(); // KPI | KPI description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createKPI(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**KPI**](KPI.md)| KPI description | 

### Return type

[**KPI**](KPI.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteKPI"></a>
# **deleteKPI**
> deleteKPI(id)

Delete a kpi



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.KPIResourceApi();

var id = "id_example"; // String | ID of KPI


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteKPI(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of KPI | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getKPIByID"></a>
# **getKPIByID**
> KPI getKPIByID(id)

Get a KPI by id



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.KPIResourceApi();

var id = "id_example"; // String | kpi


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getKPIByID(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| kpi | 

### Return type

[**KPI**](KPI.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listKPIs"></a>
# **listKPIs**
> [KPI] listKPIs(opts)

List all models



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.KPIResourceApi();

var opts = { 
  'category': "category_example" // String | category
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listKPIs(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **String**| category | [optional] 

### Return type

[**[KPI]**](KPI.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateKPI"></a>
# **updateKPI**
> KPI updateKPI(body)

Update a kpi



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.KPIResourceApi();

var body = new Otpixel.KPI(); // KPI | KPI description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateKPI(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**KPI**](KPI.md)| KPI description | 

### Return type

[**KPI**](KPI.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

