import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme, Arwes, Frame, Line, Link, Button, Header} from 'arwes';
import './style.css';
import {Animator} from '@arwes/react-animator'
import { GridLines, Dots, MovingLines } from '@arwes/react-bgs';
let siteKey = `${process.env.SITE_KEY}`
const App = () => {
 

return (
  <ThemeProvider theme={createTheme()}>
    <Arwes>
    <Animator duration={{ interval: 10 }}>
      <div style={{
        position: 'absolute',
        height: '140%',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#000906',
        backgroundImage: 'radial-gradient(85% 85% at 50% 50%, hsla(185, 100%, 25%, 0.25) 0%, hsla(185, 100%, 25%, 0.12) 50%, hsla(185, 100%, 25%, 0) 100%)'
      }}>
        <GridLines
          lineColor='hsla(180, 100%, 75%, 0.05)'
          distance={50}
        />
        <Dots
          color='hsla(180, 100%, 75%, 0.05)'
          distance={50}
        />
        <MovingLines
          lineColor='hsla(180, 100%, 75%, 0.07)'
          distance={50}
          sets={20}
        />
        <div style={{ display: 'flex', padding: '20px', alignItems: "center", justifyContent: "center" }}>
          <Frame style={{width: '400px'}} level={3} corners={4} animate={true} layer='primary'>
            <div style={{ margin: '0 auto', padding: 20, maxWidth: 600 }}>
              <Line animate layer='disabled' />
              <div className='container'>
                
                  <h3 style={{textAlign: 'center'}}>xhax</h3>
               
              </div>
              <Line animate layer='disabled' />
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Button animator={{ animate: true }} palette='success' active><Link animate layer='success' href='https://discord.com/users/988863332960321577' target='_blank'>Discord</Link></Button>
                <Button animator={{ animate: true }} palette='success' active><Link animate layer='success' href='https://twitter.com/xhaxOfficial' target='_blank'>Twitter</Link></Button>
                <Button animator={{ animate: true }} palette='success' active><Link animate layer='success' href='https://keybase.io/xhax' target='_blank'>Keybase</Link></Button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Button animator={{ animate: true }} palette='success' active><Link animate layer='success' href='https://en.pronouns.page/@xhax' target='_blank'>Pronouns.page</Link></Button>
                <Button animator={{ animate: true }} palette='success' active><Link animate layer='success' href='https://cash.app/xhaxOfficial' target='_blank'>Cash App</Link></Button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
                <Button animator={{ animate: true }} palette='success' active><Link animate layer='success' href='https://github.com/xhaxOfficial' target='_blank'>GitHub</Link></Button>
                <Button animator={{ animate: true }} palette='success' active><Link animate layer='success' href='https://reddit.com/user/xhaxOfficial' target='_blank'>Reddit</Link></Button>
              </div>
              <Line animate layer='success' />
              <form className='node-email-form' method='post' action='/email' style={{colorScheme: 'dark'}}>
                <h4 style={{textAlign: 'center', textDecoration: 'underline'}}>Contact Me!</h4>
                <div className='input'><input type='text' placeholder='Name' name='name'></input></div>
                <div className='input'><input type='text' placeholder='Email' name='email'></input></div>
                <div className='input'><input type='text' placeholder='Message' name='message'></input></div>
                <div class="cf-turnstile" data-sitekey={siteKey} data-theme="dark"></div>
                <Button className='button' animator={{ animate: true }} palette='success' active>Submit</Button>
              </form>
              <Line animate layer='success' />
              <h4 style={{textAlign: 'center', textDecoration: 'underline'}}>Legal</h4>
              <Button animator={{animate: true}} style={{display: 'block', textAlign: 'center', paddingBottom: '8px'}} palette='success' active>Trademark Notice</Button>
              <Button animator={{animate: true}} style={{display: 'block', textAlign: 'center'}} palette='success' active>Privacy Notice</Button>
            </div>
          </Frame>
        </div>
        </div>
      </Animator>
    </Arwes>
  </ThemeProvider>
);
};


ReactDOM.render(<App />, document.querySelector('#root'));
