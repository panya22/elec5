import { Component, OnInit,  } from '@angular/core';
import { IonicModules } from '../ionic-module/ionic.module';
import { DataService } from '../services/data.service';
import { CustomaryModule } from '../ionic-module/customary.module';
import { UserDetailsPage } from '../dialogs/user-details/user-details.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModules,CustomaryModule],

})
export class ProfilePage implements OnInit {

  protected students: any;

  constructor(
    private ds: DataService,
    private modalCtrl: ModalController
  )

  {
     this.getStudents()
  };

  ngOnInit(): void {
    console.log("TAB2 ngOnInit")
  }

  private getStudents(): void {
    this.ds.request('getstudents', '', null).subscribe((res: any) => {
      console.log(res);
      this.students = res.data;
      console.log(this.students)
    });
  }

async getDetails(id: number){
  let student = this.students.find((students: any) => student.fld.recno == id)

  const modal =  await this.modalCtrl.create({
    component: UserDetailsPage,
    componentProps: {student}
  });
  modal.present();

  const {data, role } = await modal.onWillDismiss();

  if (role == "update"){
    this.students = this.students.map((student:any) =>{
      if(student.fld_recno == data.fld_recno){
        return {...student, ...data}
      }
      return student
    })
  }

}


}
