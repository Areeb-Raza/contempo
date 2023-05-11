import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss'],
})
export class QuoteFormComponent implements OnInit {
  validateForm!: FormGroup;
  prevButton: boolean = true;
  nextButton: boolean = true;
  questionDefaultValue = '1';
  questions: Array<string> = [];
  isRenderNext: boolean = false;
  currentStep: number = 1;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      fullName: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      email: [null, [Validators.required]],
      address: [null, [Validators.required]],

      change_floor_plan: [false, [Validators.required]],
      remove_walls: [false, [Validators.required]],
      load_bearing_1: ['', [Validators.required]],
      remove_second_wall: ['', [Validators.required]],
      load_bearing_2: ['', [Validators.required]],
      remove_third_wall: ['', [Validators.required]],
      load_bearing_3: ['', [Validators.required]],
      remove_fourth_wall: ['', [Validators.required]],
      load_bearing_4: ['', [Validators.required]],
      oven_type: ['None', [Validators.required]],
      need_plumbing_lines: [false, [Validators.required]],
      need_other_vents: [false, [Validators.required]],
      material: ['', [Validators.required]],
      need_cabinet_waterfalls: [false, [Validators.required]],
      need_island_waterfalls: [false, [Validators.required]],
      change_floor: [false, [Validators.required]],
      remove_flooring_type: ['', [Validators.required]],
      install_flooring_type: ['', [Validators.required]],
      has_island_cabinet: ['No', [Validators.required]],
    });
  }

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }

  getSelectedChoice = ($event: any) => {
    console.log(typeof $event);
    console.log($event);
    if (typeof $event.value == 'boolean') {
      this.isRenderNext = $event.value;
    }
    this.validateForm.get($event.label)?.setValue($event.value);
  };

  getControl = (controlName: string) => {
    return this.validateForm.get(controlName);
  };

  incrementcurrentStep = () => {
    if (this.currentStep != 5) this.currentStep += 1;
  };

  decrementcurrentStep = () => {
    this.currentStep -= 1;
  };
}
