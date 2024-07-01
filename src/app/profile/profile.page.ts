import { Component, OnInit,  } from '@angular/core';
import { IonicModules } from '../ionic-module/ionic.module';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModules],

})
export class ProfilePage implements OnInit {

  protected user: any;
  constructor(private ds: DataService)
  {
     this.getStudents()
  };

  ngOnInit(): void {
    console.log("TAB2 ngOnInit")
  }
  private getStudents(): void {
    this.ds.request('getstudents', '', null).subscribe((res: any) => {
      console.log(res);
      this.user = res.data;
      console.log(this.user)
    });
  }
}
