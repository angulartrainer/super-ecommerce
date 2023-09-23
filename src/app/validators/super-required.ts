import { AbstractControl } from "@angular/forms";

export function SuperRequired(control: AbstractControl){

    if(control.value.includes("super"))
        {
            return null
        }

    return { superrequired : true }
}