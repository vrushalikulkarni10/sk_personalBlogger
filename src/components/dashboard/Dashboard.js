import React from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box"; // Import Box

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  { id: "actions", label: "Actions", minWidth: 170 }
];

function createData(name, code) {
  return { name, code };
}

const rows = [
  createData("India", "IN"),
  createData("China", "CN"),
  createData("Italy", "IT"),
  createData("United States", "US"),
  createData("Canada", "CA"),
  createData("Australia", "AU"),
  createData("Germany", "DE"),
  createData("Ireland", "IE"),
];

const Dashboard = () => {
  const navigate = useNavigate();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleButtonClick = () => {
    navigate("/writeBlog");
  };

  const handleUpdate = (row) => {
    navigate("/writeBLog")
    console.log("Update", row);
  };

  const handleDelete = (row) => {
    console.log("Delete", row);
  };

  return (
    <>
      <Box textAlign="center" mb={2}>
        <h2>DASHBOARD</h2>
        <Button variant="contained" className="my-button" onClick={handleButtonClick}>
          Create Blog
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" p={2}>
        <Paper sx={{ width: "80%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.id} align="center" style={{ minWidth: column.minWidth }}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          if (column.id === "actions") {
                            return (
                              <TableCell key={column.id} align="center">
                                <Box display="flex" justifyContent="center" gap={1}>
                                  <Button variant="contained" color="primary" onClick={() => handleUpdate(row)}>
                                    Update
                                  </Button>
                                  <Button variant="contained" color="secondary" onClick={() => handleDelete(row)}>
                                    Delete
                                  </Button>
                                </Box>
                              </TableCell>
                            );
                          }
                          return (
                            <TableCell key={column.id} align="center">
                              {value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[2, 3, 5]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </>
  );
};

export default Dashboard;
