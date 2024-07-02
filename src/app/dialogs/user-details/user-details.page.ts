import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CustomaryModule } from 'src/app/ionic-module/customary.module';
import { IonicModules } from 'src/app/ionic-module/ionic.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
  standalone: true,
  imports: [IonicModules, CustomaryModule],
})
export class UserDetailsPage implements OnInit {
  @Input() student: any;
  protected fgDetails: FormGroup = this.fb.group({
    fld_fname: [null, Validators.required],
    fld_mname: [null, Validators.required],
    fld_lname: [null, Validators.required],
    fld_extname: [null, Validators.required],
    fld_age: [0],
  });

  constructor(
    private ds: DataService,
    private modalController: ModalController,
    private fb: FormBuilder
  ) {}

  ngOnInit():void {
    this.fgDetails.setValue({
      fld_fname: this.student.fld_fname,
      fld_mname: this.student.fld_mname,
      fld_lname: this.student.fld_lname,
      fld_extname: this.student.fld_extname,
      fld_age: this.student.fld_age
    });

  }

  protected submit() {
    let data = this.fgDetails.value;
    data['fld_recno'] = this.student.fld_recno

    return this.modalController.dismiss(this.fgDetails.value, 'update');
  }

  cancel() {
    return this.modalController.dismiss(null, 'cancel');
  }
}
