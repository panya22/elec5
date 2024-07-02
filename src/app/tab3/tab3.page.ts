import { Component } from '@angular/core';
import { IonicModules } from 'src/app/ionic-module/ionic.module';
import { CustomaryModule } from '../ionic-module/customary.module';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModules,CustomaryModule],
})
export class Tab3Page {
  constructor() {}
}
