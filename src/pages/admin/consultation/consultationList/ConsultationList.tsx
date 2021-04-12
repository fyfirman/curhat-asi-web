import { useEffect, useMemo } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { requestConsultations } from '@redux/actions/consultationListActions';
import { RootState } from '@redux/reducers';
import { columns, IRowConsultation } from './dataGridOptions';

const useStyle = makeStyles((theme: Theme) => ({
  header: {
    marginBottom: theme.spacing(3),
  },
}));

const Consultations = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const consultationList = useSelector((state: RootState) => state.consultationList);

  useEffect(() => {
    dispatch(requestConsultations());
  }, []);

  const rows: IRowConsultation[] = useMemo(
    () => consultationList.payload.data.map((consultation, index) => ({
      id: consultation.id,
      no: index + 1,
      openBy: consultation.user?.fullName || 'Belum mengisi profil',
      problem: consultation.description,
    })),
    [consultationList],
  );

  return (
    <>
      <Typography variant="h4" className={classes.header}>
        Daftar Konsultasi
      </Typography>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        pageSize={20}
        checkboxSelection={false}
      />
    </>
  );
};

export default Consultations;
