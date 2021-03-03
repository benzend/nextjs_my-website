import { Box, Grid, SvgIconTypeMap, Typography } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { motion } from "framer-motion";
import { ServiceContainer } from "./ServiceContainer";

interface IServicesContainer {
  animate: boolean;
  rootStyle: any;
  variants: any;
  mainTitle: string;
  mainTitleStyle: any;
  listItemStyle: any;
  serviceGridStyle: any;
  services: {
    title: string;
    link: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    descs: string[];
  }[];
}

export const ServicesContainer = ({
  animate,
  rootStyle,
  variants,
  mainTitle,
  mainTitleStyle,
  listItemStyle,
  serviceGridStyle,
  services,
}: IServicesContainer) => {
  return (
    <Box className={rootStyle}>
      <Typography className={mainTitleStyle} variant="h4" component="h3">
        {mainTitle}
      </Typography>

      <Grid className={serviceGridStyle} container>
        {services.map((service) => (
          <Grid key={service.title} item>
            <ServiceContainer
              title={service.title}
              link={service.link}
              Icon={service.icon}
            >
              <>
                {service.descs.map((description, i) => (
                  <Typography
                    key={service.title + " " + i}
                    variant="body2"
                    className={listItemStyle}
                  >
                    {description}
                  </Typography>
                ))}
              </>
            </ServiceContainer>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
