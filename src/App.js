import { Typography } from "@mui/material";
import "./App.css";
import MonthGamePanel from "./MonthGamePanel";
import DailyGamePanel from "./DailyGamePanel";
import useMediaQuery from "@mui/material/useMediaQuery";

const games = [
  {
    id: "00000000-1211-2111-2211-132108efc086",
    event_type: "game",
    status: "scheduled",
    home_away: "home",
    opponent_id: "52476d50-ace2-43ac-9947-d96c3629f333",
    opponent_name: "Bulldogs",
    start: {
      datetime: "2022-02-05T13:00:00.000Z",
    },
    end: {
      datetime: "2022-02-05T14:00:00.000Z",
    },
    timezone: "America/New_York",
    notes: null,
    location: "Holiday Park",
  },
  {
    id: "00000000-1111-1111-1111-132108efc086",
    event_type: "game",
    status: "scheduled",
    home_away: "home",
    opponent_id: "52476d50-ace2-43ac-9947-d96c3629f161",
    opponent_name: "U13 Braves",
    start: {
      datetime: "2022-02-05T19:00:00.000Z",
    },
    end: {
      datetime: "2022-02-05T20:00:00.000Z",
    },
    timezone: "America/New_York",
    notes: null,
    location: "Holiday Park",
  },
  {
    id: "00000000-1111-1111-1112-132108efc086",
    event_type: "game",
    status: "scheduled",
    home_away: "away",
    opponent_id: "52476d50-ace2-43ac-9947-d96c3629f222",
    opponent_name: "U13 Cubs",
    start: {
      datetime: "2022-02-09T22:00:00.000Z",
    },
    end: {
      datetime: "2022-02-09T23:00:00.000Z",
    },
    timezone: "America/New_York",
    notes: null,
    location: "Holiday Park",
  },
  {
    id: "00000000-1111-1111-1113-132108efc086",
    event_type: "game",
    status: "scheduled",
    home_away: "home",
    opponent_id: "52476d50-ace2-43ac-9947-d96c3629f222",
    opponent_name: "U13 Cubs",
    start: {
      datetime: "2022-02-10T22:00:00.000Z",
    },
    end: {
      datetime: "2022-02-10T23:00:00.000Z",
    },
    timezone: "America/New_York",
    notes: null,
    location: "Holiday Park",
  },
  {
    id: "00000000-1111-1111-1114-132108efc086",
    event_type: "game",
    status: "scheduled",
    home_away: "away",
    opponent_id: "52476d50-ace2-43ac-9947-d96c3629f333",
    opponent_name: "Bulldogs",
    start: {
      datetime: "2022-02-12T13:00:00.000Z",
    },
    end: {
      datetime: "2022-02-12T14:00:00.000Z",
    },
    timezone: "America/New_York",
    notes: null,
    location: "Bayview Park",
  },
  {
    id: "00000000-1111-1111-1115-132108efc086",
    event_type: "game",
    status: "scheduled",
    home_away: "away",
    opponent_id: "52476d50-ace2-43ac-9947-d96c3629f161",
    opponent_name: "U13 Braves",
    start: {
      datetime: "2022-02-19T14:00:00.000Z",
    },
    end: {
      datetime: "2022-02-19T15:00:00.000Z",
    },
    timezone: "America/New_York",
    notes: null,
    location: "Bayview Park",
  },
  {
    id: "00000000-1111-1111-1116-132108efc086",
    event_type: "game",
    status: "scheduled",
    home_away: "away",
    opponent_id: "52476d50-ace2-43ac-9947-d96c3629f222",
    opponent_name: "U13 Cubs",
    start: {
      datetime: "2022-02-26T14:30:00.000Z",
    },
    end: {
      datetime: "2022-02-26T15:30:00.000Z",
    },
    timezone: "America/New_York",
    notes: null,
    location: "Bayview Park",
  },
  {
    id: "00000000-1111-1111-1117-132108efc086",
    event_type: "game",
    status: "scheduled",
    home_away: "home",
    opponent_id: "52476d50-ace2-43ac-9947-d96c3629f161",
    opponent_name: "U13 Braves",
    start: {
      datetime: "2022-03-05T19:00:00.000Z",
    },
    end: {
      datetime: "2022-03-05T20:00:00.000Z",
    },
    timezone: "America/New_York",
    notes: null,
    location: "Holiday Park",
  },
  {
    id: "00000000-1111-1111-1118-132108efc086",
    event_type: "game",
    status: "scheduled",
    home_away: "away",
    opponent_id: "52476d50-ace2-43ac-9947-d96c3629f222",
    opponent_name: "U13 Cubs",
    start: {
      datetime: "2022-03-10T22:00:00.000Z",
    },
    end: {
      datetime: "2022-03-10T23:00:00.000Z",
    },
    timezone: "America/New_York",
    notes: null,
    location: "Holiday Park",
  },
  {
    id: "00000000-1111-1111-1119-132108efc086",
    event_type: "game",
    status: "scheduled",
    home_away: "home",
    opponent_id: "52476d50-ace2-43ac-9947-d96c3629f222",
    opponent_name: "U13 Cubs",
    start: {
      datetime: "2022-03-11T22:00:00.000Z",
    },
    end: {
      datetime: "2022-03-11T23:00:00.000Z",
    },
    timezone: "America/New_York",
    notes: null,
    location: "Holiday Park",
  },
  {
    id: "00000000-5511-1331-1120-132108efc086",
    event_type: "game",
    status: "scheduled",
    home_away: "home",
    opponent_id: "52476d50-ace2-43ac-9947-d96c3629f222",
    opponent_name: "U13 Cubs",
    start: {
      datetime: "2022-03-13T13:00:00.000Z",
    },
    end: {
      datetime: "2022-03-13T14:00:00.000Z",
    },
    timezone: "America/New_York",
    notes: null,
    location: "Bayview Park",
  },
  {
    id: "00000000-1111-1111-1120-132108efc086",
    event_type: "game",
    status: "scheduled",
    home_away: "away",
    opponent_id: "52476d50-ace2-43ac-9947-d96c3629f333",
    opponent_name: "Bulldogs",
    start: {
      datetime: "2022-03-13T19:00:00.000Z",
    },
    end: {
      datetime: "2022-03-13T20:00:00.000Z",
    },
    timezone: "America/New_York",
    notes: null,
    location: "Bayview Park",
  },
  {
    id: "00000000-1111-1111-1121-132108efc086",
    event_type: "game",
    status: "scheduled",
    home_away: "away",
    opponent_id: "52476d50-ace2-43ac-9947-d96c3629f161",
    opponent_name: "U13 Braves",
    start: {
      datetime: "2022-03-19T14:00:00.000Z",
    },
    end: {
      datetime: "2022-03-19T15:00:00.000Z",
    },
    timezone: "America/New_York",
    notes: null,
    location: "Bayview Park",
  },
  {
    id: "00000000-1111-1111-1122-132108efc086",
    event_type: "game",
    status: "scheduled",
    home_away: "away",
    opponent_id: "52476d50-ace2-43ac-9947-d96c3629f222",
    opponent_name: "U13 Cubs",
    start: {
      datetime: "2022-03-26T14:30:00.000Z",
    },
    end: {
      datetime: "2022-03-26T15:30:00.000Z",
    },
    timezone: "America/New_York",
    notes: null,
    location: "Bayview Park",
  },
  {
    id: "00000000-1111-1111-1123-132108efc086",
    event_type: "game",
    status: "scheduled",
    home_away: "home",
    opponent_id: "52476d50-ace2-43ac-9947-d96c3629f161",
    opponent_name: "U13 Braves",
    start: {
      datetime: "2022-04-02T19:00:00.000Z",
    },
    end: {
      datetime: "2022-04-02T20:00:00.000Z",
    },
    timezone: "America/New_York",
    notes: null,
    location: "Holiday Park",
  },
  {
    id: "00000000-1111-1111-11248-132108efc086",
    event_type: "game",
    status: "scheduled",
    home_away: "away",
    opponent_id: "52476d50-ace2-43ac-9947-d96c3629f222",
    opponent_name: "U13 Cubs",
    start: {
      datetime: "2022-04-10T22:00:00.000Z",
    },
    end: {
      datetime: "2022-04-10T23:00:00.000Z",
    },
    timezone: "America/New_York",
    notes: null,
    location: "Holiday Park",
  },
  {
    id: "00000000-1111-1111-1125-132108efc086",
    event_type: "game",
    status: "scheduled",
    home_away: "home",
    opponent_id: "52476d50-ace2-43ac-9947-d96c3629f222",
    opponent_name: "U13 Cubs",
    start: {
      datetime: "2022-04-11T22:00:00.000Z",
    },
    end: {
      datetime: "2022-04-11T23:00:00.000Z",
    },
    timezone: "America/New_York",
    notes: null,
    location: "Holiday Park",
  },
  {
    id: "00000000-1111-1111-1126-132108efc086",
    event_type: "game",
    status: "scheduled",
    home_away: "away",
    opponent_id: "52476d50-ace2-43ac-9947-d96c3629f333",
    opponent_name: "Bulldogs",
    start: {
      datetime: "2022-04-13T13:00:00.000Z",
    },
    end: {
      datetime: "2022-04-13T14:00:00.000Z",
    },
    timezone: "America/New_York",
    notes: null,
    location: "Bayview Park",
  },
  {
    id: "00000000-1111-1111-1127-132108efc086",
    event_type: "game",
    status: "scheduled",
    home_away: "away",
    opponent_id: "52476d50-ace2-43ac-9947-d96c3629f161",
    opponent_name: "U13 Braves",
    start: {
      datetime: "2022-04-19T14:00:00.000Z",
    },
    end: {
      datetime: "2022-04-19T15:00:00.000Z",
    },
    timezone: "America/New_York",
    notes: null,
    location: "Bayview Park",
  },
  {
    id: "00000000-1111-1111-1128-132108efc086",
    event_type: "game",
    status: "scheduled",
    home_away: "away",
    opponent_id: "52476d50-ace2-43ac-9947-d96c3629f222",
    opponent_name: "U13 Cubs",
    start: {
      datetime: "2022-04-26T14:30:00.000Z",
    },
    end: {
      datetime: "2022-04-26T15:30:00.000Z",
    },
    timezone: "America/New_York",
    notes: null,
    location: "Bayview Park",
  },
];

const monthConverter = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Oct: "October",
  Nob: "Nobember",
  Dec: "December",
};

const timeConverter = (stringTime) => {
  let stringTimeArr = stringTime.split(":");
  let time = parseInt(stringTimeArr[0]);
  let min = stringTimeArr[1];
  let suffex = "";
  if (time > 12) suffex = "PM";
  else suffex = "AM";
  return `${time}:${min} ${suffex}`;
};

function App() {
  const monthlyGamesObj = games.reduce(
    (acc, cur) => {
      const monthlyGame = { ...cur };
      let fullDate = new Date(cur.start.datetime).toString().split(" ");
      monthlyGame.day = fullDate[0];
      monthlyGame.month = monthConverter[fullDate[1]];
      monthlyGame.date = parseInt(fullDate[2]);
      monthlyGame.year = fullDate[3];
      monthlyGame.startTime = timeConverter(fullDate[4]);
      const monthlyKey = `${monthlyGame.month} ${monthlyGame.year}`;
      if (!acc.monthly[monthlyKey]) {
        acc.monthly[monthlyKey] = [];
      }
      acc.monthly[monthlyKey].push(monthlyGame);

      const dailyKey = `${monthlyGame.day} ${monthlyGame.month} ${monthlyGame.date}, ${monthlyGame.year}`;
      if (!acc.daily[dailyKey]) {
        acc.daily[dailyKey] = [];
      }
      acc.daily[dailyKey].push(monthlyGame);

      return acc;
    },
    { monthly: [], daily: [] }
  );
  const monthlyGamesArr = Object.entries(monthlyGamesObj.monthly);
  const dailyGameArr = Object.entries(monthlyGamesObj.daily);

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery(
    "(min-width:600px) and (max-width:1200px)"
  );
  const isLargeScreen = useMediaQuery("(min-width:1200px)");

  const renderPanels = () => {
    if (isSmallScreen || isMediumScreen) {
      return dailyGameArr.map((dailyGames) => (
        <DailyGamePanel key={dailyGames[0]} games={dailyGames} />
      ));
    } else {
      return monthlyGamesArr.map((monthGames) => (
        <MonthGamePanel key={monthGames[0]} games={monthGames} />
      ));
    }
  };

  return (
    <div className="App">
      <Typography fontSize={30} fontWeight={"bold"}>
        Schedule
      </Typography>
      {renderPanels()}
    </div>
  );
}

export default App;
