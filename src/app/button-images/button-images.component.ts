import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button-images',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-images.component.html'
})
export class ButtonImagesComponent {

  banderas : boolean[] = [false, false, false];

  buttons=["😀","😢","🤪"];

  imgs = ['https://i.pinimg.com/originals/f2/ce/c9/f2cec98f06e8f66ff0bcfb2ffdb413eb.jpg','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sad-dog-1537347496.jpg?resize=480:*', 'https://townsquare.media/site/757/files/2014/08/names.jpg']


  showOrHide(index: number){
    if(this.banderas[index]){
      this.banderas[index] = false;
    }else{
      this.banderas[index] = true;
    }
  }

}
