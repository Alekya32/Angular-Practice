import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`Name:<input [value]='username'(input)='username=$event.target.value'/> 
  <br/>
  You Entered:{{username}}`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  username:string ='Tom';
  title = 'Angular2';
  name:string='Angular2 Basics';
  // pageHeader:string='Employee Details';
  isDisabled:boolean=false;
  hidden:boolean=false;
  badHtml:string='Hello <script>alert("hacked");</script>World';
  isBold: boolean=true;
  isItalic:boolean=true;
  fontSize:number=30;
  addStyles(){
    let styles={
      'font-size.px':this.fontSize,
      'font-style':this.isItalic?'italic':'normal',
      'font-weight':this.isBold?'bold':'normal',
    };
    return styles;
  }
  onClick():void{
    console.log('Button Clicked');
  }
}
