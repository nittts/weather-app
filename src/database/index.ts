import blizzard from "../assets/blizzard.jpg";
import cloudy from "../assets/cloudy.jpg";
import fog from "../assets/fog.jpg";
import misty from "../assets/misty.jpg";
import overcast from "../assets/overcast.jpg";
import rain from "../assets/rain.jpg";
import sleet from "../assets/sleet.jpg";
import snow from "../assets/snow.jpg";
import sunny from "../assets/sunny.jpg";
import thunder from "../assets/thunder.jpg";

export default [
  {
    img: sunny,
    codes: [1000],
  },
  {
    img: cloudy,
    codes: [1003, 1006],
  },
  {
    img: overcast,
    codes: [1009],
  },
  {
    img: misty,
    codes: [1030],
  },
  {
    img: rain,
    codes: [1063, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246],
  },
  {
    img: snow,
    codes: [1066, 1210, 1213, 1216, 1219, 1255, 1258, 1261, 1264],
  },
  {
    img: sleet,
    codes: [1089, 1072, 1168, 1198, 1201, 1204, 1249, 1252],
  },
  {
    img: thunder,
    codes: [1087, 1273, 1276, 1279, 1282],
  },
  {
    img: blizzard,
    codes: [1114, 1117, 1171, 1207, 1222, 1225, 1237],
  },
  {
    img: fog,
    codes: [1135, 1147],
  },
];
