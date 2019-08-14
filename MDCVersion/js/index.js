import {MDCTextField} from '@material/textfield';
import {MDCTextFieldIcon} from '@material/textfield/icon';

const cardNumberIcon = new MDCTextFieldIcon(document.querySelector('.mdc-card-number-icon'));
const expiryDateIcon = new MDCTextFieldIcon(document.querySelector('.mdc-expiry-date-icon'));

const cardHolderField = new MDCTextField(document.querySelector('.mdc-card-holder'));
const cardNumberField = new MDCTextField(document.querySelector('.mdc-card-number'));
const expiryDateField = new MDCTextField(document.querySelector('.mdc-expiry-date'));
const securityCodeField = new MDCTextField(document.querySelector('.mdc-security-code'));

// const testTextField = new MDCTextField(document.querySelector('.test-text-field'));
