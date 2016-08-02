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
