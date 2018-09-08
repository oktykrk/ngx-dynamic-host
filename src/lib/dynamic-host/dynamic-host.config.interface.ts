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
