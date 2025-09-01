import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.scss']
})
export class UserAddEditComponent implements OnInit {
userForm!: FormGroup;
  id!: number;
  editMode = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });

    this.id = this.route.snapshot.params['id'];

    if (this.id) {
      this.editMode = true;
      this.userService.getUser(this.id).subscribe(
        user => {
        this.userForm.patchValue(user);
      });
    }
  }

  onSubmit() {
    const user: any = this.userForm.value;
    if (this.editMode) {
      user.id = this.id;
      this.userService.updateUser(user).subscribe(() => this.router.navigate(['/users']));
    } else {
      this.userService.addUser(user).subscribe(() => this.router.navigate(['/users']));
    }
  }
}
