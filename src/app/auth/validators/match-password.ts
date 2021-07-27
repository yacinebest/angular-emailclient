import { Validator, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
    validate(formGroup: FormGroup | AbstractControl): ValidationErrors | null {
        const { password, passwordConfirmation } = formGroup.value;

        if (password === passwordConfirmation) {
            return null;
        } else {
            return { passwordsDontMatch: true };
        }
    }
}
