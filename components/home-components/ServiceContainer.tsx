import Link from "next/link";
import {
  Box,
  Button,
  Divider,
  makeStyles,
  SvgIconTypeMap,
  Typography,
} from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

interface IServiceContainer {
  title: string;
  children: string;
  link: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const useStyles = makeStyles({
  root: {
    padding: "3rem 0 0 0",
  },
  titleStyle: {
    padding: ".8rem 0",
  },
  textStyle: {
    padding: "1rem 0 1.3rem",
  },
  icon: {
    color: "#0003",
  },
});

export const ServiceContainer = ({
  title,
  link,
  children,
  Icon,
}: IServiceContainer) => {
  const { root, titleStyle, textStyle, icon } = useStyles();
  return (
    <Box className={root}>
      <Box display="flex" alignItems="center">
        <Typography className={titleStyle} variant="h5" component="h4">
          {title}
        </Typography>
        <Box justifyItems="center" justifyContent="center" ml={1} mt={1}>
          <Icon className={icon} />
        </Box>
      </Box>
      <Divider />
      <Typography className={textStyle} variant="body1">
        {children}
      </Typography>
      <Link href={link}>
        <Button color="secondary" fullWidth variant="outlined">
          Pricing
        </Button>
      </Link>
    </Box>
  );
};
