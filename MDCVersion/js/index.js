import {MDCTextField} from '@material/textfield';
import {MDCTextFieldIcon} from '@material/textfield/icon';

const cardHolderIcon = new MDCTextFieldIcon(document.querySelector('.mdc-card-holder-icon'));
const cardNumberIcon = new MDCTextFieldIcon(document.querySelector('.mdc-card-number-icon'));
const expiryDateIcon = new MDCTextFieldIcon(document.querySelector('.mdc-expiry-date-icon'));
const securityCodeIcon = new MDCTextFieldIcon(document.querySelector('.mdc-security-code-icon'));

const cardHolderField = new MDCTextField(document.querySelector('.mdc-card-holder'));
const cardNumberField = new MDCTextField(document.querySelector('.mdc-card-number'));
const expiryDateField = new MDCTextField(document.querySelector('.mdc-expiry-date'));
const securityCodeField = new MDCTextField(document.querySelector('.mdc-security-code'));
