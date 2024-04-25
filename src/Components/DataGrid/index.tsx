import { FC, useState } from 'react';
import { DataGrid, GridRowIdGetter, GridValidRowModel } from "@mui/x-data-grid";
import { CustomNoRowsOverlay } from "./NoRowsOverlay";

interface Column {
  field: string;
  headerName: string;
  width: number;
}

interface DatagridProps {
  columns: Column[];
  rows: GridValidRowModel[];
  getRowId: GridRowIdGetter<GridValidRowModel>;
  hideFooter?: boolean;
}

const CustomDataGrid: FC<DatagridProps> = ({getRowId, hideFooter, columns, rows }) => {
  const [overlayHeight] = useState('300px');

  return (
    <DataGrid
      autoHeight
      columns={columns}
      rows={rows}
      getRowId={getRowId || ''}
      hideFooter={hideFooter}
      slots={{ noRowsOverlay: CustomNoRowsOverlay }}
      sx={{ 
        '--DataGrid-overlayHeight': overlayHeight,
      }}
    />
  );
};

export default CustomDataGrid;
