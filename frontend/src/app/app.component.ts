import { Component } from '@angular/core';
import { CommonServiceService } from './services/common-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(private CommonServiceService: CommonServiceService) { }

  callWords(){
    this.CommonServiceService.getSarita().subscribe((json: any) => {
        console.log("Backend returned:" + json.data)
    });
  }

}
