/// <reference path=" ./crud.d.ts" />


import { RowId, RowElement } from './interface';
import * as CRUD from './crud';

/**
 * Represents a row element with a first name and a last name.
 * 
 * @type {RowElement}
 * @property {string} firstName - The first name of the row element.
 * @property {string} lastName - The last name of the row element.
 */
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Slava"
};

const newRowID: RowId = CRUD.insertRow(row);
const updateRow: RowElement = { ...row, age: 23};

CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);