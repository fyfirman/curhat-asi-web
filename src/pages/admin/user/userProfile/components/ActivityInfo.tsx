import { DataGrid } from '@material-ui/data-grid';
import { useMemo } from 'react';
import { RootState } from '@redux/reducers';
import { useSelector } from 'react-redux';
import { columns, IActivityRow } from './activityGridOptions';

const ActivityInfo = () => {
  const activities = useSelector((state: RootState) => state.userProfile.payload?.activities);

  const rows: IActivityRow[] | undefined = useMemo(
    () =>
      activities?.map(
        (activity: IUserActivity, index): IActivityRow => ({
          id: activity.id,
          number: index + 1,
          createdAt: activity.createdAt,
          eventName: activity.eventName,
        }),
      ),
    [activities],
  );

  return (
    <>
      {rows && (
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          pageSize={20}
          checkboxSelection={false}
        />
      )}
    </>
  );
};

export default ActivityInfo;
