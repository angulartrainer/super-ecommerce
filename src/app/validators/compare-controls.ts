import { AbstractControl } from "@angular/forms";

export function CompareControls(controlA: string, controlB: string){
    
    return function(group: AbstractControl){

        const controlAValue = group.get(controlA)?.value
        const controlBValue = group.get(controlB)?.value

        if(controlAValue !== controlBValue) {
            return { compare: true, controlAValue, controlBValue, controlA, controlB }
        }

        return null
    }

}