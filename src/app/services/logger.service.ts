import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Automatska registracija u DI sistem
})
export class LoggerService {
  log(message: string): void {
    console.log(`LoggerService: ${message}`);
  }
}
