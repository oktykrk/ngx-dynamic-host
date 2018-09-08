import { NgModule } from "@angular/core";
import { DynamicHostDirective } from "./directives/dynamic-host.directive";

@NgModule({
    declarations: [
        DynamicHostDirective
    ],
    providers: [
        DynamicHostDirective
    ],
    exports: [
        DynamicHostDirective
    ] 
})
export class DynamicHostModule { }
