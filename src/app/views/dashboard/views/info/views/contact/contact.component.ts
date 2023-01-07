import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { mockContacts } from '@core/mocks/contacts.mock';
import { Contact } from '@core/models/contact.interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  protected contacts$ = new BehaviorSubject<Contact[]>(mockContacts);

  protected getPhoneString(email: string): string {
    return `tel:${email}`;
  }

  protected getEmailString(email: string): string {
    return `mailto:${email}`;
  }
}
