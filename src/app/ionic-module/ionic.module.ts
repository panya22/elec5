import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    IonIcon,
    IonList,
    IonLabel
} from '@ionic/angular/standalone';

const var_modules = [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    IonIcon,
    IonList,
    IonLabel
]
@NgModule({
    imports: var_modules,
    exports: var_modules
})
export class IonicModules {}
