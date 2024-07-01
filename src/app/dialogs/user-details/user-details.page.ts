import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CustomaryModule } from 'src/app/ionic-module/customary.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CustomaryModule], // Ensure IonicModule is imported here
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
    private modalCtrl: ModalController,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
     this.fgDetails.setValue({
      fld_fname: this.student.fld.fname,
      fld_mname: this.student.fld.mname,
      fld_lname: this.student.fld.lname,
      fld_extname: this.student.fld.extname,
      fld_age: this.student.fld.age,
    });
  }

  protected submit() {
    let data = this.fgDetails.value;
    data['fld_recno'] = this.student.fld_recno

    return this.modalCtrl.dismiss(this.fgDetails.value, 'update');
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
