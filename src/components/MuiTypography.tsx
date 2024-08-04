import React  from 'react';
import { Typography } from "@mui/material"

const MuiTypography = () => {
  return (
    <div>
      <Typography variant ='h1'>h1 Heading</Typography>
      <Typography variant ='h2'>h2 Heading</Typography>
      <Typography variant ='h3'>h3 Heading</Typography>
      <Typography variant ='h4' component='h1' gutterBottom>h4 Heading</Typography>
      <Typography variant ='h5'>h5 Heading</Typography>

      <Typography variant ='subtitle1'>Sub title 1</Typography>
      <Typography variant ='subtitle2'>Sub title 2</Typography>

      <Typography variant ='body1'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas quam sunt, illo, consequuntur quibusdam obcaecati numquam at praesentium error amet neque dolorum repudiandae fugit? Vitae labore ipsum aut exercitationem sit?
      </Typography>
      <Typography variant ='body2'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum nesciunt dignissimos, quisquam nihil sequi adipisci itaque id ipsam, illo repellendus, earum aspernatur aut! Natus voluptate cupiditate, repellat vitae quidem soluta!
      </Typography>

    </div>
  )
}

export default MuiTypography
