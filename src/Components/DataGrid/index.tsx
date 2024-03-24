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
}

const CustomDataGrid: FC<DatagridProps> = ({getRowId, columns, rows }) => {
  const [overlayHeight] = useState('300px');

  return (
    <DataGrid
      autoHeight
      columns={columns}
      rows={rows}
      getRowId={getRowId || ''}
      slots={{ noRowsOverlay: CustomNoRowsOverlay }}
      sx={{ 
        '--DataGrid-overlayHeight': overlayHeight,
      }}
      hideFooter={true}
    />
  );
};

export default CustomDataGrid;
