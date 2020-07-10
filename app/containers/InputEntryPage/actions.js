/*
 * InputEntryPage Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { CHANGE_INPUT, RESET_INPUT, VALID_INPUT } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} input The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_INPUT
 */
export function changeInput(input) {
  return {
    type: CHANGE_INPUT,
    input,
  };
}

/**
 * Dispatched to erase user input from form
 *
 * @param  {array} input The user input string
 *
 * @return {object}      An action object with a type of RESET_INPUT
 */
export function resetInput() {
  console.log('inside App/actions, resetInput called');
  return {
    type: RESET_INPUT,
  };
}

/**
 * Dispatched to change state of whether user input is valid or not
 *
 * @param  {array} valid Boolean for whether input is valid or not
 *
 * @return {object}      An action object with a type of VALID_INPUT and a valid boolean
 */
export function toggleValidInput(valid) {
  return {
    type: VALID_INPUT,
    valid,
  };
}