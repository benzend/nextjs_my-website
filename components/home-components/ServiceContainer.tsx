import Link from "next/link";
import {
  Box,
  Button,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";

interface IServiceContainer {
  title: string;
  children: string;
  link: string;
}

const useStyles = makeStyles({
  root: {
    padding: "1rem 0",
  },
  titleStyle: {
    padding: ".8rem 0",
  },
  textStyle: {
    padding: "1rem 0 1.3rem",
  },
});

export const ServiceContainer = ({
  title,
  link,
  children,
}: IServiceContainer) => {
  const { root, titleStyle, textStyle } = useStyles();
  return (
    <Box className={root}>
      <Typography className={titleStyle} variant="h5" component="h4">
        {title}
      </Typography>
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
