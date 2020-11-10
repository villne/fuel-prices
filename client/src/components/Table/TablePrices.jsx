import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchPrices } from "../../api/index";

function createData(
  city,
  company,
  address,
  createdAt,
  petrol95,
  petrol98,
  diesel,
  ethanol
) {
  return {
    city,
    company,
    address,
    createdAt,
    petrol95,
    petrol98,
    diesel,
    ethanol,
  };
}

const rows = [
  createData("Tampere", "Kesoil", "Katu 1", 11.5, 1.345, 1.345, 1.43, 1.023),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const TablePrices = () => {
  const classes = useStyles();
  //const dispatch = useDispatch();
  /*const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };*/

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>City</TableCell>
            <TableCell align="right">Company</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">95E10</TableCell>
            <TableCell align="right">98E5</TableCell>
            <TableCell align="right">Diesel</TableCell>
            <TableCell align="right">Ethanol</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.city}>
              <TableCell component="th" scope="row">
                {row.city}
              </TableCell>
              <TableCell align="right">{row.company}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.createdAt}</TableCell>
              <TableCell align="right">{row.petrol95}</TableCell>
              <TableCell align="right">{row.petrol98}</TableCell>
              <TableCell align="right">{row.diesel}</TableCell>
              <TableCell align="right">{row.ethanol}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablePrices;
