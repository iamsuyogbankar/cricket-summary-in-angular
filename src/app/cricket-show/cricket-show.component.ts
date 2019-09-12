import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-cricket-show',
  templateUrl: './cricket-show.component.html',
  styleUrls: ['./cricket-show.component.css']
})
export class CricketShowComponent implements OnInit {
public teamArray:any = [];

  constructor(private shareData: ShareService) { }

  ngOnInit() {
  

    
    
  } 

  //india data
  onClickEngland(){
    this.shareData.engData().subscribe((eng) => {
      this.teamArray = eng
      console.log(this.teamArray); 
    });
  }

  onClickIndia(){
   


    this.shareData.indData().subscribe((ind) => {
      this.teamArray = ind
      console.log(this.teamArray); 
    });
  }

}
