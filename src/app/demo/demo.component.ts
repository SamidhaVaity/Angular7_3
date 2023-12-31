import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  public Name : string = ""; 
  public str : string = ""; 
  public fun()
  {
    this.Name = ("Educating for better tommorrow");
  }

  public marvellous()
  {
    this.str = ("Marvellous Infosystems");
  }
}
