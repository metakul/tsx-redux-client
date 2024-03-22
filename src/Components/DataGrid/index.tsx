import  { FC, useState } from 'react';
import { DataGrid,GridRowIdGetter   } from "@mui/x-data-grid";
import { CustomNoRowsOverlay } from "./NoRowsOverlay";
import { Ipost } from '../../interfaces/interface';
interface Column {
  field: string;
  headerName: string;
  width: number;
}

interface DatagridProps {
  columns: Column[];
  rows: Ipost[];
  getRowId: GridRowIdGetter<Ipost>;
}

const CustomDataGrid: FC<DatagridProps> = ({getRowId, columns, rows }) => {
  const [overlayHeight] = useState('300px');

  return (
    <DataGrid
      autoHeight
      columns={columns}
      rows={rows}
      getRowId={getRowId}
      slots={{ noRowsOverlay: CustomNoRowsOverlay }}
      sx={{ 
        '--DataGrid-overlayHeight': overlayHeight,
      }}
      hideFooter={true}
    />
  );
};

export default CustomDataGrid;
