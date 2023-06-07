import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  //Gửi title và imageSrc sang HTML (Property Binding)
  public title = "Le Manh Cuong";
  public imageSrc = "https://images.pexels.com/photos/351434/pexels-photo-351434.jpeg";

  //Event Binding
  public onButtonClick() {
    console.log("Button Click!!!");
  }
}
