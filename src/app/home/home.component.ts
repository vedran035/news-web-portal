import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedDate: Date | null = null; // Praćenje odabranog datuma
  currentIndex = 0;
  itemsPerSlide = 3; // Prikazivanje 3 sporta po ekranu
  sports = [
    { name: 'Fudbal', description: 'Najpopularniji sport na svijetu...', image: 'https://images.pexels.com/photos/2209/people-men-grass-sport.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Košarka', description: 'Brzi sport s visokim intenzitetom...', image: 'https://images.pexels.com/photos/934083/pexels-photo-934083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Atletika', description: 'Sport koji okuplja najbolje atlete...', image: 'https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Tenis', description: 'Elegantan sport koji zahtijeva izdržljivost...', image: 'https://images.pexels.com/photos/5740519/pexels-photo-5740519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Ragbi', description: 'Sport poznat po svojoj brutalnoj igri...', image: 'https://images.pexels.com/photos/3662553/pexels-photo-3662553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Hokej', description: 'Brzi i agresivni sport na ledu...', image: 'https://images.pexels.com/photos/6468954/pexels-photo-6468954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
  ];

  constructor(private logger: LoggerService) {}

  get visibleSports() {
    const sportsCount = this.sports.length;
    return [
      this.sports[(this.currentIndex) % sportsCount],
      this.sports[(this.currentIndex + 1) % sportsCount],
      this.sports[(this.currentIndex + 2) % sportsCount]
    ];
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.sports.length) % this.sports.length;
    this.logger.log('Previous slide activated.');
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.sports.length;
    this.logger.log('Next slide activated.');
  }
}
