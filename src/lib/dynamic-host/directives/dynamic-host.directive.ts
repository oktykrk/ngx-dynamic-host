import { Directive, Input, OnInit, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from "@angular/core";
import { DynamicHostConfig } from "../dynamic-host.config.interface";

@Directive({
    selector: '[ngx-dynamic-host]'
})
export class DynamicHostDirective implements OnInit {
    /**
    * Host configuration property.
    */
    @Input() public dynamicHostConfig: DynamicHostConfig;
    
    /**
    * Reference to target component.
    */
    private _componentRef: ComponentRef<any>;
    
    /**
    * Public getter for component reference;
    */
    public get componentRef(): ComponentRef<any> {
        return this._componentRef;
    }
    
    /**
    * 
    * @param _componentFactoryResolver 
    * @param _viewContainerRef 
    */
    constructor(private _componentFactoryResolver: ComponentFactoryResolver, private _viewContainerRef: ViewContainerRef) { }
    
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
        if (!this.dynamicHostConfig) {
            console.warn(`[my-dynamic-host] Directive => 'dynamicHostConfig' must be provided.`);
            return;
        }
        
        if (!this.dynamicHostConfig.selector && !this.dynamicHostConfig.factory) {
            console.warn(`[my-dynamic-host] Directive => 'dynamicHostConfig.selector' or 'dynamicHostConfig.componentFactory' must be a valid component selector.`);
            return;
        }
        
        // get the target component's factory.
        const factory: any = this.dynamicHostConfig.factory ? this.dynamicHostConfig.factory : this.getFactory(this.dynamicHostConfig.selector);
        
        if (!factory) {
            console.warn(`[my-dynamic-host] Directive => Could not get the factory of the component. Are you sure to provide a valid 'dynamicHostConfig.componentFactory' or correctly exported as entry component 'dynamicHostConfig.selector'?`);
            return;
        }
        
        // create new instance of target component.
        this._componentRef = this._viewContainerRef.createComponent(factory, 0, this.dynamicHostConfig.injector);
        
        // project inputs
        if (this.dynamicHostConfig.inputs) {
            this.projectInputs(this.dynamicHostConfig.inputs, this._componentRef.instance);
        }
        
        // project outputs
        if (this.dynamicHostConfig.outputs) {
            this.projectOutputs(this.dynamicHostConfig.outputs, this._componentRef.instance);
        }
    }
    
    /**
    * Projects given inputs to target component.
    * @param inputs 
    * @param target 
    */
    private projectInputs(inputs: any, target: any): void {
        Object.getOwnPropertyNames(inputs).forEach(field => {
            target[field] = inputs[field];
        });
    }
    
    /**
    * Projects given outputs to target component.
    * @param outputs 
    * @param target 
    */
    private projectOutputs(outputs: any, target: any): void {
        Object.getOwnPropertyNames(outputs).forEach(field => {
            target[field].subscribe(e => {
                outputs[field](e);
            });
        });
    }
    
    /**
    * Returns the factory of component that has given selector.
    * @param selector 
    */
    private getFactory(selector: string): any {
        const factories = Array.from(this._componentFactoryResolver["_factories"].values());
        const factory: any = factories.find((x: any) => x.selector === selector);
        
        return factory;
    }
}
