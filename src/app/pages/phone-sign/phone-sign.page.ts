import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, NgForm, Validators} from '@angular/forms';
import {PhoneNumber} from '../../models/PhoneNumber.model';
import {WindowService} from '../../services/window/window.service';
import * as firebase from 'firebase';
import {config} from 'rxjs';

@Component({
  selector: 'app-phone-sign',
  templateUrl: './phone-sign.page.html',
  styleUrls: ['./phone-sign.page.scss'],
})
export class PhoneSignPage implements OnInit {
  addUserGroup: any;
  isNext = false;
  windowRef: any;
  phoneNumber = new PhoneNumber();
  verificationCode: string;
  user: any;

  constructor(
      private formBuilder: FormBuilder,
      private win: WindowService,
  ) {}

  ngOnInit() {
    firebase.initializeApp(config);
    this.addUserGroup = this.formBuilder.group({
      fullName: new FormControl('', Validators.required),
      prefix: new FormControl('2', Validators.required),
      phone: new FormControl('', Validators.required)
    });

    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();
  }

  sendLoginCode() {
    this.isNext = true;
    const name = this.addUserGroup.value.fullName;
    const phone = '+' + this.addUserGroup.value.prefix + '' + this.addUserGroup.value.phone;
    console.log(name);
    console.log(phone);
    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = this.phoneNumber.e164;
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
        .then(result => {
          this.windowRef.confirmationResult = result;
        })
        .catch(error => console.log(error));

  }
  onCancel() {
    this.isNext = false;
  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
        .confirm(this.verificationCode)
        .then(result => {
          this.user = result.user;
        })
        .catch(error => console.log(error, 'Incorrect code entered?'));
  }
}
