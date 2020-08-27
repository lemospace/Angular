import { dataComponents } from './data';

const DATA_STEP_1 = {
  SelectGoods: {
    type: 'select',
    options: dataComponents,
    validations: {},
    errors: {},
    placeholder: 'Bikes',
  },
  description: {
    type: 'textarea',
    validations: {},
    errors: {},
    placeholder: 'Your comments',
  },
};

const DATA_STEP_2 = {
  address: {
    type: 'text',
    validations: {},
    errors: {},
    placeholder: 'Full Address',
  },
  city: {
    type: 'text',
    validations: {},
    errors: {},
    placeholder: 'City',
  },
  country: {
    type: 'text',
    validations: {},
    errors: {},
    placeholder: 'Country',
  },
};

const DATA_STEP_3 = {
  Card: {
    type: 'radio',
    name: 'method',
    value: 'Card',
    validations: {},
    errors: {},
  },
  Paypal: {
    type: 'radio',
    name: 'method',
    value: 'Paypal',
    validations: {},
    errors: {},
  },
  Cash: {
    type: 'radio',
    name: 'method',
    value: 'Cash',
    validations: {},
    errors: {},
  },
  CardNumber: {
    type: 'number',
    validations: { pattern: /^\d{16}$/ },
    errors: { pattern: 'Please enter a valid card number' },
    placeholder: 'Card number',
  },
};
const DATA_STEP_4 = {
  Today: {
    type: 'radio',
    name: 'date',
    value: 'Today',
    validations: {},
    errors: {},
  },
  Tomorrow: {
    type: 'radio',
    name: 'date',
    value: 'Tomorrow',
    validations: {},
    errors: {},
  },
  ChooseADateConvenientForYou: {
    type: 'date',
    validations: {},
    errors: {},
    placeholder: 'Cash',
  },
};

const STEP_ITEMS = [
  { label: 'Step 1', data: DATA_STEP_1 },
  { label: 'Step 2', data: DATA_STEP_2 },
  { label: 'Step 3', data: DATA_STEP_3 },
  { label: 'Step 4', data: DATA_STEP_4 },
  { label: 'Review & Submit', data: {} },
];

export { STEP_ITEMS };
