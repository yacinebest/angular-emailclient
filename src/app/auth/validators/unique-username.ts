import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class UniqueUsername implements AsyncValidator {
    constructor(private authService: AuthService) { }

    validate = (control: FormControl | AbstractControl) => {
        const { value } = control;

        return this.authService.usernameAvailable(value).pipe(
            map(value => {
                if (value.available) {
                    return null;
                }
                return of({ notFound: true });
            }),
            catchError(err => {
                if (err.error.username) {
                    return of({ nonUniqueUsername: true });
                } else {
                    return of({ noConnection: true });
                }
            })
        );
    };
}
