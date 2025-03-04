import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // ✅ Add this

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(FormsModule), // ✅ Ensure FormsModule is included
    provideHttpClient()
  ]
}).catch(err => console.error(err));
