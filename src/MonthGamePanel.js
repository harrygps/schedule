import {
  Box,
  Table,
  TableBody,
  TableRow,
  TableContainer,
  Typography,
  TableCell,
} from "@mui/material";

const MonthGamePanel = ({ games }) => {
  const [monthYear, schedules] = [...games];
  return (
    <Box>
      <Typography>{monthYear}</Typography>
      <TableContainer>
        <Table>
          <TableBody>
            {schedules.map((schedule) => (
              <TableRow>
                <TableCell>
                  {schedule.day}
                  {schedule.date}
                </TableCell>
                <TableCell>
                  {`vs.${schedule.opponent_name} `} {`at ${schedule.location}`}
                </TableCell>
                <TableCell>{schedule.startTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MonthGamePanel;
