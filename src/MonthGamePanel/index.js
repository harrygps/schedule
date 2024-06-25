import {
  Box,
  Table,
  TableBody,
  TableRow,
  TableContainer,
  Typography,
  TableCell,
} from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./style.css";

const MonthGamePanel = ({ games }) => {
  const [monthYear, schedules] = [...games];
  return (
    <Box sx={{ marginTop: "50px" }}>
      <Typography fontSize={20} fontWeight={"bold"}>
        {monthYear}
      </Typography>
      <TableContainer
        sx={{
          borderRadius: 2,
          border: "1px solid #d9d9d9",
          padding: 0,
          marginTop: "20px",
        }}
      >
        <Table sx={{ borderStyle: "hidden" }}>
          <TableBody>
            {schedules.map((schedule) => (
              <TableRow>
                <TableCell>
                  <Typography fontSize={15} sx={{ color: "#8c8c8c" }}>
                    {schedule.day.toUpperCase()}
                  </Typography>
                  <Typography
                    sx={{ marginTop: "-5px" }}
                    fontSize={25}
                    fontWeight={"bold"}
                  >
                    {schedule.date}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight={"bold"} fontSize={18} sx={{}}>
                    {`vs.${schedule.opponent_name} `}
                  </Typography>
                  <Typography fontSize={15} sx={{ color: "#8c8c8c" }}>
                    {`at ${schedule.location}`}
                  </Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "right" }}>
                  <Typography fontSize={20} sx={{ color: "#8c8c8c" }}>
                    {schedule.startTime}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MonthGamePanel;
