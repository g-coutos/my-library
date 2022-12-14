import { sectionsLink } from './data/sectionsLink';

import { Switch, Route } from 'react-router-dom';

import { Box, Flex } from '@chakra-ui/react';

import { Contact } from './pages/Contact';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Instructions } from './pages/Instructions';
import { SectionPage } from './components/SectionPage';

export const App = () => {
  return (
    <>
      <Header />
      <Flex as='main' justifyContent='center'>
        <Box maxWidth='1200px'>
          <Switch>
            <Route exact path='/' component={Home}></Route>

            <Route exact path='/instructions' component={Instructions} />

            <Route exact path='/contact' component={Contact} />
            {sectionsLink.map((item) => {
              return (
                <Route exact path={item.url}>
                  <SectionPage sectionName={item.innerText} data={item.data} />
                </Route>
              );
            })}
          </Switch>
        </Box>
      </Flex>
    </>
  );
};
