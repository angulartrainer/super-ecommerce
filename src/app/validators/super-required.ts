import { AbstractControl } from "@angular/forms";

export function SuperRequired(text: string = "super"){
    
    
    return function(control: AbstractControl){
        if(control.value.includes(text))
        {
            return null
        }

        return { superrequired : true }
    }
    
}