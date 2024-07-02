import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
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
    IonLabel,
    ModalController,
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
    IonLabel,
    ExploreContainerComponent,

]
@NgModule({
    imports: var_modules,
    exports: var_modules
})
export class IonicModules {}
