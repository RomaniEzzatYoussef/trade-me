import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhoneSignPage } from './phone-sign.page';

describe('PhoneSignPage', () => {
  let component: PhoneSignPage;
  let fixture: ComponentFixture<PhoneSignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneSignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhoneSignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
