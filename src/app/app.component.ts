import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  api = inject(ApiService);
  characters: any[] = [];
  selectedCharacter: any;

  ngOnInit() {
    this.api.getData().subscribe((res) => {
      this.characters = res;
    });
  }

  onCharacterChange(event: any) {
    const selectedName = event.target.value;
    this.selectedCharacter = this.characters.find(char => char.name === selectedName);
  }
}
