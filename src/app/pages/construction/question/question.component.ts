import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  public answer = new FormControl();
  public text_field = new FormControl();
  @Input() question: string = '';
  @Input() questionLabel: string = '';
  @Input() options: Array<string> = [];
  @Input() hasTextField: boolean = false;
  @Input() questionType: 'polar' | 'non-polar' | 'text-only' = 'polar';
  @Output() selectedChoice: EventEmitter<any> = new EventEmitter<
    boolean | string
  >();

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    if (this.questionType == 'polar') {
      this.answer.setValue(false);
    }

    if (this.hasTextField) {
      this.text_field.valueChanges.subscribe((x: any) => {
        this.selectedChoice.emit({ label: this.questionLabel, value: x });
      });
    } else {
      this.answer.valueChanges.subscribe((x: any) => {
        this.selectedChoice.emit({ label: this.questionLabel, value: x });
      });
    }
  }

  numberToAlphabet = (number: number): string => {
    return String.fromCharCode(number + 65);
  };
}
