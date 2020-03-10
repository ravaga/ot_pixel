# otpixel

Otpixel - JavaScript client for otpixel
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.5
- Package version: 0.5
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install otpixel --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your otpixel from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('otpixel')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/otpixel
then install it via:

```shell
    npm install YOUR_USERNAME/otpixel --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Otpixel = require('otpixel');

var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix['Authorization'] = "Token"

var api = new Otpixel.InstanceResourceApi()

var body = new Otpixel.Instance(); // {Instance} Instance description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createInstance(body, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://otpixel.satrdlab.upv.es:8080/otpixel/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Otpixel.InstanceResourceApi* | [**createInstance**](docs/InstanceResourceApi.md#createInstance) | **PUT** /instances/create | Create an instance
*Otpixel.InstanceResourceApi* | [**deleteInstance**](docs/InstanceResourceApi.md#deleteInstance) | **DELETE** /instances/delete/{id} | Delete an instance
*Otpixel.InstanceResourceApi* | [**getInstance**](docs/InstanceResourceApi.md#getInstance) | **GET** /instances/get/{id} | Get an instance by id
*Otpixel.InstanceResourceApi* | [**listInstances**](docs/InstanceResourceApi.md#listInstances) | **GET** /instances/list | List all instances
*Otpixel.InstanceResourceApi* | [**updateInstance**](docs/InstanceResourceApi.md#updateInstance) | **POST** /instances/update | Update an instance
*Otpixel.KPIResourceApi* | [**createKPI**](docs/KPIResourceApi.md#createKPI) | **PUT** /kpis/create | Create a KPI
*Otpixel.KPIResourceApi* | [**deleteKPI**](docs/KPIResourceApi.md#deleteKPI) | **DELETE** /kpis/delete/{id} | Delete a kpi
*Otpixel.KPIResourceApi* | [**getKPIByID**](docs/KPIResourceApi.md#getKPIByID) | **GET** /kpis/get/{id} | Get a KPI by id
*Otpixel.KPIResourceApi* | [**getKPILastValueByID**](docs/KPIResourceApi.md#getKPILastValueByID) | **GET** /kpis/get/{id}/lastValue | Get the last value of a KPI by id
*Otpixel.KPIResourceApi* | [**getKPILastValuesByID**](docs/KPIResourceApi.md#getKPILastValuesByID) | **GET** /kpis/get/{id}/lastValues | Get the last value of a KPI by id
*Otpixel.KPIResourceApi* | [**listKPIs**](docs/KPIResourceApi.md#listKPIs) | **GET** /kpis/list | List all models
*Otpixel.KPIResourceApi* | [**updateKPI**](docs/KPIResourceApi.md#updateKPI) | **POST** /kpis/update | Update a kpi
*Otpixel.ModelResourceApi* | [**createModel**](docs/ModelResourceApi.md#createModel) | **PUT** /models/create | Create a model
*Otpixel.ModelResourceApi* | [**deleteModel**](docs/ModelResourceApi.md#deleteModel) | **DELETE** /models/delete/{id} | Delete a model
*Otpixel.ModelResourceApi* | [**getModel**](docs/ModelResourceApi.md#getModel) | **GET** /models/get/{id} | Get a model by id
*Otpixel.ModelResourceApi* | [**getModelInfo**](docs/ModelResourceApi.md#getModelInfo) | **GET** /models/get/{id}/info | Get information of a model by id
*Otpixel.ModelResourceApi* | [**listModels**](docs/ModelResourceApi.md#listModels) | **GET** /models/list | List all models
*Otpixel.ModelResourceApi* | [**updateModel**](docs/ModelResourceApi.md#updateModel) | **POST** /models/update | Update a model
*Otpixel.ScheduledInstanceResourceApi* | [**createScheduledInstance**](docs/ScheduledInstanceResourceApi.md#createScheduledInstance) | **PUT** /scheduledInstances/create | Create a scheduled instance
*Otpixel.ScheduledInstanceResourceApi* | [**deleteScheduledInstance**](docs/ScheduledInstanceResourceApi.md#deleteScheduledInstance) | **DELETE** /scheduledInstances/delete/{id} | Delete a scheduled instance
*Otpixel.ScheduledInstanceResourceApi* | [**getScheduledInstance**](docs/ScheduledInstanceResourceApi.md#getScheduledInstance) | **GET** /scheduledInstances/get/{id} | Get a scheduled instance by id
*Otpixel.ScheduledInstanceResourceApi* | [**listScheduledInstances**](docs/ScheduledInstanceResourceApi.md#listScheduledInstances) | **GET** /scheduledInstances/list | List all scheduled instances
*Otpixel.ScheduledInstanceResourceApi* | [**updateScheduledInstance**](docs/ScheduledInstanceResourceApi.md#updateScheduledInstance) | **POST** /scheduledInstances/update | Update a scheduled instance


## Documentation for Models

 - [Otpixel.ConnectorItem](docs/ConnectorItem.md)
 - [Otpixel.ConnectorOptionItem](docs/ConnectorOptionItem.md)
 - [Otpixel.DockerInfo](docs/DockerInfo.md)
 - [Otpixel.GeneralInfo](docs/GeneralInfo.md)
 - [Otpixel.InputEndpoint](docs/InputEndpoint.md)
 - [Otpixel.InputHeader](docs/InputHeader.md)
 - [Otpixel.InputItem](docs/InputItem.md)
 - [Otpixel.InputOptionItem](docs/InputOptionItem.md)
 - [Otpixel.Instance](docs/Instance.md)
 - [Otpixel.InstanceForceInputItem](docs/InstanceForceInputItem.md)
 - [Otpixel.InstanceInputItem](docs/InstanceInputItem.md)
 - [Otpixel.InstanceInputOptionItem](docs/InstanceInputOptionItem.md)
 - [Otpixel.InstanceLoggingItem](docs/InstanceLoggingItem.md)
 - [Otpixel.InstanceLoggingOptionItem](docs/InstanceLoggingOptionItem.md)
 - [Otpixel.InstanceOutputItem](docs/InstanceOutputItem.md)
 - [Otpixel.InstanceOutputOptionItem](docs/InstanceOutputOptionItem.md)
 - [Otpixel.KPI](docs/KPI.md)
 - [Otpixel.KpiOperation](docs/KpiOperation.md)
 - [Otpixel.KpiOperationDynamic](docs/KpiOperationDynamic.md)
 - [Otpixel.KpiOperationScheduled](docs/KpiOperationScheduled.md)
 - [Otpixel.KpiOperationStatic](docs/KpiOperationStatic.md)
 - [Otpixel.KpiThresholds](docs/KpiThresholds.md)
 - [Otpixel.LastKPI](docs/LastKPI.md)
 - [Otpixel.LoggingItem](docs/LoggingItem.md)
 - [Otpixel.LoggingOptionItem](docs/LoggingOptionItem.md)
 - [Otpixel.Model](docs/Model.md)
 - [Otpixel.OutputItem](docs/OutputItem.md)
 - [Otpixel.OutputOptionItem](docs/OutputOptionItem.md)
 - [Otpixel.ScheduleInfo](docs/ScheduleInfo.md)
 - [Otpixel.ScheduledInstance](docs/ScheduledInstance.md)
 - [Otpixel.SupportedTransformationItem](docs/SupportedTransformationItem.md)
 - [Otpixel.SystemInfo](docs/SystemInfo.md)
 - [Otpixel.Transform](docs/Transform.md)


## Documentation for Authorization


### apikey

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

