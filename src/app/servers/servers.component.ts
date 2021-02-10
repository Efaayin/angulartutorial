import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = 'Testserver';
  username: any = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];

  toggleBtn = false;
  log = [];

 
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUsername() {
    this.username = '';
  }

  logDetails() {
    this.toggleBtn = !this.toggleBtn;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
