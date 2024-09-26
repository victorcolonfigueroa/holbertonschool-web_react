/// <reference path=" ./crud.d.ts" />


import { RowId, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Slava"
};

const newRowID: RowId = CRUD.insertRow(row);
const updateRow: RowElement = { ...row, age: 23};

CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);