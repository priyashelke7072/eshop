import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordMismatch(control:AbstractControl):ValidationErrors | null{
   const value=control;
   const password=control.get('password')?.value;
   const ConfirmPassword = control.get('confirmpasword')?.value;
    
   if(password !=ConfirmPassword){
       return {'passwordMismatch':true}
   }

    return null;

}