import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatDetailRPage } from './chat-detail-r.page';

describe('ChatDetailPage', () => {
  let component: ChatDetailRPage;
  let fixture: ComponentFixture<ChatDetailRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDetailRPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatDetailRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
