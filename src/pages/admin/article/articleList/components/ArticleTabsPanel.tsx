import { DataGrid } from '@material-ui/data-grid';
import { mockRows, columns } from './dataGridOptions';

const ArticleTabsPanel = () => {
  return (
    <DataGrid
      autoHeight
      rows={mockRows}
      columns={columns}
      pageSize={20}
      checkboxSelection={false}
    />
  );
};

export default ArticleTabsPanel;
