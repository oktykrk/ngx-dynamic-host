# DynamicHost ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)
Ngx dynamic component host module.

## Installation
```
npm install ngx-dynamic-host
```

app.module.ts
```
import { DynamicHostModule } from 'ngx-dynamic-host'; 

... 
imports: [
    ...
    DynamicHostModule
    ...
] 
... 
```

## Usage
```
<ng-template ngx-dynamic-host [dynamicHostConfig]="{ selector: '{selectorOfTargetComponent}' }"></ng-template>
```
***WARNING - Be sure to add your component to 'entryComponents'.
## Configuration

```
import { Injector, ComponentFactory, NgModuleRef } from "@angular/core";

/**
* Dynamic host configuration interface.
*/
export interface DynamicHostConfig {
    
    /**
    * The selector of the target component.
    * The host finds the factory via selector and creates the instance of the component.
    * **If both 'selector' and 'componentFactory' are provided, 'componentFactory' value will be used.
    * [OPTIONAL]
    */
    selector?: string;
    
    /**
    * Inputs that passed to target component.
    * [OPTIONAL]
    */
    inputs?: any;
    
    /**
    * Outputs that passed to target component.
    * [OPTIONAL]
    */
    outputs?: any;
    
    /**
    * Factory of target component.
    * [OPTIONAL]
    */
    factory?: ComponentFactory<any>;
    
    /**
    * You can optionally specify the {@link Injector} that will be used as parent for the Component.
    * [OPTIONAL]
    */
    injector?: Injector;
}

```

## License
[MIT](https://choosealicense.com/licenses/mit/)
