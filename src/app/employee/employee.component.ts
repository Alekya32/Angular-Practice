import {Component} from '@angular/core';

@Component({
    selector:'my-emp',
    template:`<my-emp></my-emp>`
})

export class EmployeeComponent{
    firstName:string="Harry";
    lastName:string="potter";
    gender:string='Male';
    age:number=24;
    columnSpan:number=2;
    showDetails:boolean =false;

    toggleDetails():void{
        this.showDetails=!this.showDetails;
    }
}