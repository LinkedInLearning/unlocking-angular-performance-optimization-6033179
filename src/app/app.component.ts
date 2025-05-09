import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ServerStatsComponent } from "./components/server-stats/server-stats.component";
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, ServerStatsComponent]
})
export class AppComponent {
  public messageService = inject(MessageService);
}
