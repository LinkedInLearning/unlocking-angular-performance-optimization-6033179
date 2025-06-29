import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerListComponent } from './player-list.component';

describe('PlayerListComponent', () => {
  let component: PlayerListComponent;
  let fixture: ComponentFixture<PlayerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PlayerListComponent);
    fixture.componentRef.setInput('players', []);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
