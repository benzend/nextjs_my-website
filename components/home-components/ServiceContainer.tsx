import { ReactChild } from "react";
import {
  Box,
  Divider,
  makeStyles,
  SvgIconTypeMap,
  Typography,
} from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

interface IServiceContainer {
  title: string;
  children: ReactChild;
  link: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "370px",
    height: "400px",
    left: "23px",
    top: "238px",

    [theme.breakpoints.up("sm")]: {
      width: "40%",
    },
  },
  titleStyle: {
    color: theme.palette.secondary.main,
    textShadow: "0 4px 2px #0008",
    fontSize: "1.7rem",
    textAlign: "center",
  },
  textStyle: {
    padding: "1rem 0 1.3rem",
    color: theme.palette.secondary.contrastText,
    textAlign: "center",
  },
  icon: {
    color: "#0003",
  },
  svgContainer: {
    position: "relative",
  },
  svg: {
    position: "absolute",
    left: "3px",
    zIndex: -3,
  },
  builtWithText: {
    color: theme.palette.secondary.contrastText,
    textShadow: "0 4px 2px #0008",
    textAlign: "center",
  },
}));

export const ServiceContainer = ({
  title,
  link,
  children,
  Icon,
}: IServiceContainer) => {
  const {
    root,
    titleStyle,
    textStyle,
    icon,
    svg,
    svgContainer,
    builtWithText,
  } = useStyles();

  return (
    <Box className={root}>
      <Box className={svgContainer}>
        <svg
          className={svg}
          width="391"
          height="413"
          viewBox="0 0 391 413"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <path
              d="M0 0L184 29.5693L370 0V336.351L184 369L0 336.351V0Z"
              fill="#4A4A4A"
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="0"
              y="0"
              width="408"
              height="413"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="20" dy="26" />
              <feGaussianBlur stdDeviation="9" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </Box>
      <Box>
        <Box pt={6}>
          <Typography className={builtWithText} variant="body1">
            Built With
          </Typography>
          <Typography className={titleStyle} variant="h5" component="h4">
            {title}
          </Typography>
        </Box>
        <Box justifyItems="center" justifyContent="center" ml={1} mt={1}>
          <Icon className={icon} />
        </Box>
        <Divider />
        <Box className={textStyle}>{children}</Box>
      </Box>
    </Box>
  );
};
