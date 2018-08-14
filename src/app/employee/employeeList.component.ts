import {Component} from '@angular/core';

@Component({
    selector:'list-employee',
    templateUrl:'app/employee/employeeList.component.html',
    styleUrls:['app/employee/employeeList.component.css']
})

export class EmployeeListComponent{
    employees:any[];
    constructor(){
        [
        {code:'emp101',name:'Tom',gender:'Male',annualSalary:5500,dateOfBirth:'25/6/1988'},
        {code:'emp102',name:'Alex',gender:'Male',annualSalary:5700,dateOfBirth:'5/7/1982'},
        {code:'emp103',name:'Mike',gender:'Male',annualSalary:5900,dateOfBirth:'2/8/1979'},
        {code:'emp104',name:'Mary',gender:'Female',annualSalary:6500,dateOfBirth:'9/2/1992'}
    ];
}
getEmployees():void{
    this.employees=[
        {}
    ];
  }
}