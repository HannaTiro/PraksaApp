import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 // @Input() usersFromHomeComponent:any; //@input -> parent to child 
@Output() cancelRegister=new EventEmitter ();     // @ output-> child to parent 
model:any={};
  constructor(private accountService:AccountService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }
register()
{
  this.accountService.register(this.model).subscribe(response=>{
    console.log(response);
    this.cancel();
  },error=>{
    console.log(error);
    this.toastr.error(error.error);
  })
}

cancel()
{
  this.cancelRegister.emit(false);
}
}
