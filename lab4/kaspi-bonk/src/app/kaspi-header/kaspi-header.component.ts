import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalViewComponent } from '../modal-view/modal-view.component';
@Component({
  selector: 'app-kaspi-header',
  templateUrl: './kaspi-header.component.html',
  styleUrls: ['./kaspi-header.component.scss'],
})
export class KaspiHeaderComponent {
  links: string[];
  constructor(public dialog: MatDialog) {
    this.links = ['Клиентам', 'Бизнесу', 'Kaspi Гид'];
  }
  openModal(): void {
    const dialogRef = this.dialog.open(ModalViewComponent, {
      width: '250px', // настройте ширину модального окна по вашему усмотрению
      // здесь могут быть другие настройки модального окна
    });
  }
}
