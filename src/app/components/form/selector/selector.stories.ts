import { Component, Input } from '@angular/core';
import { SelectorDirective } from './selector.directive';
import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { FormFieldComponent } from '../form-field/form-field.component';
import { IconModule } from '../../icon/icon.module';
import { SelectorButtonComponent } from '../selector-button/selector-button.component';
import { InputDirective } from '../input/input.directive';
import { InputAfterDirective } from '../input-after/input-after.directive';

@Component({
  selector: 'app-story-selector',
  template: `
    <app-form-field>
      <label *ngIf="label" [for]="inputId">{{ label }}</label>
      <input
        [id]="inputId"
        appSelector
        placeholder="{{ placeholder }}"
        list="story-list" />
      <datalist id="story-list">
        <option *ngFor="let value of values" [value]="value">
          {{ value }}
        </option>
      </datalist>
    </app-form-field>
  `,
})
class StorySelectorComponent {
  @Input() label: string | undefined;
  @Input() inputAfter: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() values: string[] = [];
  inputId = 'story-selector';
}

const meta: Meta<StorySelectorComponent> = {
  title: 'Form/Selector',
  component: StorySelectorComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        FormFieldComponent,
        SelectorDirective,
        SelectorButtonComponent,
      ],
      imports: [InputDirective, InputAfterDirective, IconModule],
    }),
  ],
};
export default meta;

type Story = StoryObj<StorySelectorComponent>;

export const Template: Story = {
  args: {
    label: 'Select your fav pizza style',
    values: ['NY Style', 'Neapolitana', 'Chicago', 'Detroid'],
  },
};

export const Placeholder: Story = {
  args: {
    ...Template.args,
    placeholder: 'New York Pizza',
  },
};
