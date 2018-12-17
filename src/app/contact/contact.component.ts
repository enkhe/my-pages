import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;

  pageTitle = 'Contact me';

  pageNotice = true;
  pageNoticeDesc = 'The ' +this.pageTitle + ' page is under construction.';
  
  constructor(private formBuilder: FormBuilder) { 
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    this.success = true;
  }

  ngOnInit() {
  }

}
