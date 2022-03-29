import React, { FC, useContext } from 'react';
import { Box, Typography } from '@material-ui/core';
import { AppToastContext } from '../../Contexts/AppToastContext';
import NavigationMenu from 'Screens/Home/NavigationMenu';
import WebApp from 'Screens/Home/WebApp';
import SpotifyGetPlaylists from 'Screens/Home/SpotifyGetPlaylists';
import SpotifySubscription from 'Screens/Home/SpotifySubscription';

const Landing: FC = () => {
    const { showToast } = useContext(AppToastContext);
    return (
        <Box>
            <NavigationMenu />
            <WebApp />
            <SpotifySubscription />
            <SpotifyGetPlaylists />
        </Box>
    );
};

export default Landing;
