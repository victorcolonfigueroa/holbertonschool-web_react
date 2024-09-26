import { RowID, RowElement } from './interface';

declare function insertRow(row: RowElement): RowID;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowID: RowID, row: RowElement): RowID;
declare function getRow(rowID: RowID): RowElement;