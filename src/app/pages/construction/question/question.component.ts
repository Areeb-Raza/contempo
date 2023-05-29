import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormProvider } from '../quote-form/form-provider';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  public answer = new FormControl();
  public text_field = new FormControl();
  @Input() question!: any;
  // @Input() questionControlKey!: string;
  // @Input() options: Array<any> = [];
  // @Input() hasTextField: boolean = false;
  // @Input() relatedQuestionKey: any = null;
  form!: FormGroup;

  constructor(
    private formProvider: FormProvider,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const stepId = params.get('id');
      this.form = this.formProvider
        .getForm()
        .get(`step_${stepId}`) as FormGroup;
    });
    const control = this.form?.get(this.question.id.toString());
    this.answer.setValue(control?.value);

    if (this.question.has_input) {
      const control_input = this.form?.get(
        this.question.id.toString() + '_input'
      );
      this.text_field.setValue(control_input?.value);
      this.text_field.valueChanges.subscribe((x: any) => {
        control_input?.setValue(x);
      });
    }
    this.answer.valueChanges.subscribe((x: any) => {
      control?.setValue(x);
    });
  }

  numberToAlphabet = (number: number): string => {
    return String.fromCharCode(number + 65);
  };
}
