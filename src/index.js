import react from 'react';
import reactDOM from 'react-dom';
import GlobalStyles from './styles/globalStyles'
import Routes from './routes'

reactDOM.render(
    <>
        <Routes />
        <GlobalStyles />
    </>,
    document.getElementById('root')
);