import { Component } from '@angular/core';
import { clients } from '../../constant/buildingData';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dependent-dropdown',
  imports: [FormsModule],
  templateUrl: './dependent-dropdown.component.html',
  styleUrl: './dependent-dropdown.component.scss',
})
export class DependentDropdownComponent {
  clients: any[] = clients;
  sites: any[] = [];
  builds: any[] = [];
  clientId: string = '';
  siteName: string = '';
  onClientChange() {
    this.builds = [];
    const selectedClient = clients.filter(
      (client) => client.id === +this.clientId
    );
    this.sites = selectedClient ? selectedClient[0].sites : [];
  }

  onSiteChange() {
    const selectedSite = this.sites.filter(
      (site) => site.name === this.siteName
    );
    this.builds = selectedSite ? selectedSite[0].builds : [];
  }
}
