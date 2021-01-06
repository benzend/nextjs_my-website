import { GitHub, Language } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

interface Props {
  imgSource: string;
  title: string;
  imgAlt: string;
  tech: string;
  gitHubUrl: string;
  liveUrl: string;
}

export default function Project({
  imgSource,
  title,
  imgAlt,
  tech,
  gitHubUrl,
  liveUrl,
}: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={imgSource} alt={imgAlt} />
      <p>{tech}</p>
      <a href={liveUrl}>
        <IconButton>
          <Language />
        </IconButton>
      </a>
      <a href={gitHubUrl}>
        <IconButton>
          <GitHub />
        </IconButton>
      </a>
    </div>
  );
}
