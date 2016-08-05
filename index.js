/* @flow */
const CHARACTERS: Array<string> = ['Luke', 'Anakin', 'Obiwan', 'Yoda', 'Palpatine'];

function log(thing: any) {
  console.log(thing);
}

function isCharacterPresent(name: string): boolean {
  return CHARACTERS.indexOf(name) > -1;
}

log(isCharacterPresent('Luke'));
log(isCharacterPresent('Tyrion'));
//log(isCharacterPresent(42)); // this will not pass flow type checking

type OK =  any;
type KO = any;
type RESULT = OK | KO;

function check(something: any): RESULT {
  return 'what?';
}

type device = {
  name: string,
  vendor: string,
  price: number
}

const MacBook: device = {
  name: 'MacBook',
  vendor: 'Apple',
  price: 1500}; // Try with '1500' string, typechecking will raise an error.
