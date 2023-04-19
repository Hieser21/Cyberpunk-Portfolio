import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme, Arwes, Image, Frame, Puffs, Words, Line, Link, Button, Logo, Paragraph, Header} from 'arwes';
import './style.css';



const App = () => (
  <ThemeProvider theme={createTheme()}>
    <Arwes background='https://playground.arwes.dev/assets/images/wallpaper.jpg'>
      <Puffs>
        <div style={{padding: 20 }}>
          <Header animate>
            <h3 style={{ margin: 0,display: 'flex', alignItems: "center", justifyContent: "center", fontFamily:"Space Crusaders", fontSize: "25px"}}> &#8249;&#8249; Cyberpunk Portfolio &#8250;&#8250;</h3>
          </Header>
        </div>
        <div style={{ display: 'flex', padding: '20px', alignItems: "center", justifyContent: "center" }}>
          <Frame level={3} corners={4} animate={true} layer='primary'>
            <div style={{ margin: '0 auto', padding: 20, maxWidth: 600 }}>
              <Line animate layer='disabled' />
              <div className='container'>
                <Paragraph className='typed'><Words animate layer='success'>
                  Hi, I'm Richard Brown and I'm a full stack developer.
                </Words></Paragraph>
              </div>
              <Line animate layer='disabled' />
              <Image animate resources='https://version1-breakpoint1.arwes.dev/static/img/wallpaper.jpg'>
                The vast universe around us
              </Image>
              <Line animate layer='success' />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button animator={{ animate: true }} palette='success' active><Link animate layer='success' href='https://github.com/rbrown29' target='_blank'>GitHub</Link></Button>
                <Logo animate size={40} />
                <Button animator={{ animate: true }} palette='success' active><Link animate layer='success' href='https://www.linkedin.com/' target='_blank'>LinkedIn</Link></Button>
              </div>
            </div>
          </Frame>
        </div>
      </Puffs>
    </Arwes>
  </ThemeProvider>
);


ReactDOM.render(<App />, document.querySelector('#root'));
