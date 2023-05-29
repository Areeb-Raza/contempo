import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormProvider } from '../quote-form/form-provider';

@Component({
  selector: 'app-form-step',
  templateUrl: './form-step.component.html',
  styleUrls: ['./form-step.component.scss'],
})
export class FormStepComponent implements OnInit {
  stepId!: any;
  currentStepData!: any;
  currentStep: any = 1;
  form!: FormGroup;
  data = [
    {
      id: 1,
      label: 'GENERAL CONDITIONS TOTAL',
      code: '1.00',
      questions: [
        {
          id: 2,
          question: 'Does the Customer want to Change the Floorplan?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 3,
          question: 'Do we need to Remove Walls?',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: 2,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 4,
          question: 'Wall #1\r\nIs Wall #1 a Loading Bearing Wall?',
          has_input: true,
          input_option: 1,
          input_title: '19',
          related_question: 3,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 5,
          question: 'Is there a Second Wall to Remove?',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: 4,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 6,
          question: 'Wall #2\r\nIs Wall#2 a Loading Bearing Wall?',
          has_input: true,
          input_option: 1,
          input_title: '20',
          related_question: 5,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 7,
          question: 'Is there a Third Wall to Remove?',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: 6,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 8,
          question: 'Wall #3\r\nIs Wall#3 a Loading Bearing Wall?',
          has_input: true,
          input_option: 1,
          input_title: '-1',
          related_question: 7,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 9,
          question: 'Is there a Fourth Wall to Remove?',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: 8,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 11,
              label: 'None',
            },
          ],
        },
        {
          id: 10,
          question: 'Wall #4\r\nIs Wall#4 a Loading Bearing Wall?*',
          has_input: true,
          input_option: null,
          input_title: '-1',
          related_question: 9,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      label: 'ELECTRICAL',

      code: '4.00',
      questions: [
        {
          id: 11,
          question: 'Does the customer has a cooktop or a range?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 3,
              label: 'CookTop',
            },
            {
              id: 4,
              label: 'Range',
            },
          ],
        },
        {
          id: 12,
          question: 'What do we need to do with it?\r\n*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 5,
              label: 'Remove&Replace',
            },
            {
              id: 6,
              label: 'Relocate',
            },
            {
              id: 7,
              label: 'Nothing',
            },
            {
              id: 12,
              label: 'Remove',
            },
            {
              id: 29,
              label: 'Add a new one',
            },
          ],
        },
        {
          id: 13,
          question: 'Is it Gas or Electric?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 8,
              label: 'Gas',
            },
            {
              id: 9,
              label: 'Electric',
            },
          ],
        },
        {
          id: 14,
          question: 'What Type of Detached oven do they Have?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 10,
              label: 'Single Oven',
            },
            {
              id: 11,
              label: 'None',
            },
            {
              id: 30,
              label: 'Double Oven',
            },
          ],
        },
        {
          id: 15,
          question: 'Gas or Electric?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 8,
              label: 'Gas',
            },
            {
              id: 9,
              label: 'Electric',
            },
          ],
        },
        {
          id: 16,
          question: 'What do we need to do with the Oven(s)?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 5,
              label: 'Remove&Replace',
            },
            {
              id: 6,
              label: 'Relocate',
            },
            {
              id: 7,
              label: 'Nothing',
            },
            {
              id: 12,
              label: 'Remove',
            },
            {
              id: 29,
              label: 'Add a new one',
            },
          ],
        },
        {
          id: 17,
          question: 'What do we need to do with the Microwave?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 5,
              label: 'Remove&Replace',
            },
            {
              id: 6,
              label: 'Relocate',
            },
            {
              id: 7,
              label: 'Nothing',
            },
            {
              id: 12,
              label: 'Remove',
            },
            {
              id: 29,
              label: 'Add a new one',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      label: 'PLUMBING',
      code: '5.00',
      questions: [
        {
          id: 18,
          question: 'What do we need to do with the Sink?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 5,
              label: 'Remove&Replace',
            },
            {
              id: 6,
              label: 'Relocate',
            },
            {
              id: 7,
              label: 'Nothing',
            },
            {
              id: 12,
              label: 'Remove',
            },
            {
              id: 29,
              label: 'Add a new one',
            },
          ],
        },
        {
          id: 19,
          question: 'What do we need to do with the Potfiller?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 5,
              label: 'Remove&Replace',
            },
            {
              id: 6,
              label: 'Relocate',
            },
            {
              id: 7,
              label: 'Nothing',
            },
            {
              id: 12,
              label: 'Remove',
            },
            {
              id: 29,
              label: 'Add a new one',
            },
          ],
        },
        {
          id: 20,
          question: 'Do we need to add any other plumbing Lines?*',
          has_input: true,
          input_option: 1,
          input_title: 'How many plumbing lines?',
          related_question: null,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 21,
          question: 'Mechanical\r\nWhat do we need to do with the Hood?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 5,
              label: 'Remove&Replace',
            },
            {
              id: 6,
              label: 'Relocate',
            },
            {
              id: 7,
              label: 'Nothing',
            },
            {
              id: 12,
              label: 'Remove',
            },
          ],
        },
        {
          id: 22,
          question: 'Do we need to add any other Vents?*',
          has_input: true,
          input_option: null,
          input_title: 'How Many Vents?*',
          related_question: null,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
      ],
    },
    {
      id: 4,
      label: 'FRAMING',
      code: '6.0',
      questions: [],
    },
    {
      id: 5,
      label: 'PAINT',
      code: '10.0',
      questions: [],
    },
    {
      id: 6,
      label: 'FLOORING',
      code: '12.0',
      questions: [
        {
          id: 34,
          question: 'Does the Customer wants to change the floor?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
      ],
    },
    {
      id: 7,
      label: 'STUCCO / SIDING',
      code: '13.0',
      questions: [],
    },
    {
      id: 8,
      label: 'TILES',
      code: '15.0',
      questions: [],
    },
    {
      id: 9,
      label: 'CABINETS',
      code: '18.0',
      questions: [
        {
          id: 23,
          question: 'Wall Cabinets (LnFt)*',
          has_input: true,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 31,
              label: '-1',
            },
          ],
        },
        {
          id: 24,
          question: 'Wall Cabinets New or Refacing?*',
          has_input: true,
          input_option: 14,
          input_title: 'Base Cabinets (LnFt)*',
          related_question: null,
          options: [
            {
              id: 13,
              label: 'New',
            },
            {
              id: 14,
              label: 'Refacing',
            },
          ],
        },
        {
          id: 25,
          question:
            'Island Cabinets\r\nDoes the Customer has or want a kitchen Island?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 11,
              label: 'None',
            },
            {
              id: 15,
              label: 'Yes, he has one',
            },
            {
              id: 16,
              label: 'Yes, We Will Create a new one',
            },
          ],
        },
        {
          id: 26,
          question: 'Does the Island have a sink?*',
          has_input: true,
          input_option: 1,
          input_title: 'Island Cabinets (LnFt)*',
          related_question: null,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 27,
          question: 'Island Cabinets New or Refacing?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 13,
              label: 'New',
            },
            {
              id: 14,
              label: 'Refacing',
            },
          ],
        },
        {
          id: 28,
          question: 'How many sides for The Island Cabinets?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 17,
              label: '1',
            },
            {
              id: 18,
              label: '2',
            },
          ],
        },
        {
          id: 29,
          question:
            'Counter Tops\r\nWhat type of stone does the customer wants?*',
          has_input: true,
          input_option: 28,
          input_title: 'Please write the specific material?',
          related_question: null,
          options: [
            {
              id: 19,
              label: 'White Grannite',
            },
            {
              id: 20,
              label: 'Various Grannite',
            },
            {
              id: 21,
              label: 'Black Grannite',
            },
            {
              id: 22,
              label: 'Exotic Grannite',
            },
            {
              id: 23,
              label: 'Quartzite/Taj Mahal',
            },
            {
              id: 24,
              label: 'Exotic Quarzite',
            },
            {
              id: 25,
              label: 'Calacatta Quartz',
            },
            {
              id: 26,
              label: 'Pure White Quartz',
            },
            {
              id: 27,
              label: 'Premium Selection',
            },
            {
              id: 28,
              label: 'Other',
            },
          ],
        },
        {
          id: 30,
          question: 'Does the Customer wants Waterfalls in the cabinets?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 31,
          question: 'Does the Cabinets Waterfall will be in one or two sides?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: 30,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 32,
          question:
            'Does the Customer wants Waterfalls in the Kitchen Island?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 33,
          question: 'Does the Island Waterfall will be in one or two sides?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 17,
              label: '1',
            },
            {
              id: 18,
              label: '2',
            },
          ],
        },
      ],
    },
    {
      id: 10,
      label: 'COUNTERTOPS',
      code: '19.0',
      questions: [],
    },
    {
      id: 11,
      label: 'DRYWALL',
      code: '20.0',
      questions: [],
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private formProvider: FormProvider,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.stepId = params.get('id');
      this.currentStep = parseInt(this.stepId);
      this.currentStepData = this.data[this.currentStep - 1];
      this.form = this.formProvider
        .getForm()
        .get(`step_${this.stepId}`) as FormGroup;
      // console.log(this.form);
      console.log(this.currentStepData);
    });
  }

  // getSelectedChoice = (selectedChoice: any) => {
  //   // console.log(selectedChoice);
  //   // this.form
  //   //   .get(selectedChoice.key.toString())
  //   //   ?.setValue(selectedChoice.value);
  // };

  getControlValue = (controlName: any) => {
    // for (let index = 2; index > controlName; index--) {
    //   this.form.get(index.toString())?.value;

    // }
    // console.log(controlName);
    // console.log(this.form.get(controlName.toString())?.value);
    return this.form.get(controlName.toString())?.value;
    // return 1;
  };

  incrementcurrentStep = () => {
    if (this.currentStep < this.data.length) this.currentStep += 1;
    this.navigateToStep(this.currentStep);
  };

  decrementcurrentStep = () => {
    if (this.currentStep > 1) this.currentStep -= 1;
    this.navigateToStep(this.currentStep);
  };

  navigateToStep(stepNumber: number) {
    const stepUrl = `new-quote/step/${stepNumber}`;
    this.router.navigate([stepUrl]);
  }
}
