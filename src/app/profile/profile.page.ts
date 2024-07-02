import { Component, OnInit,  } from '@angular/core';
import { DataService } from '../services/data.service';
import { CustomaryModule } from '../ionic-module/customary.module';
import { IonicModules } from 'src/app/ionic-module/ionic.module';
import { UserDetailsPage } from '../dialogs/user-details/user-details.page';
import { ModalController } from '@ionic/angular/standalone';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModules,CustomaryModule],

})
export class ProfilePage implements OnInit  {

 protected students: any = [];


  constructor (
    private ds: DataService,
    private modalControler: ModalController) {
    this.getStudents()
  }

ngOnInit(): void {
  console.log("hi")
}

  private getStudents(): void {
    this.ds.request('getstudents', '', null).subscribe((res: any) => {
      console.log(res);
      this.students = res.data;
      console.log(this.students)
    });
  }


  protected async getDetails(id: number) {
    let student = this.students.find((student: any) => student.fld_recno == id)

    const modal = await this.modalControler.create({
      component: UserDetailsPage,
      componentProps: {student}
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    if (role === 'update') {
      this.students = this.students.map((student: any) => {
        if (student.fld_recno == data.fld_recno) {
          return {...student, ...data}
        }

        return student
      })
    }
  }









}

