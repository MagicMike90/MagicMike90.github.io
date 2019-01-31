import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/addons';
import Bio from '../components/Bio';

const Page = ({ offset, gradient,children }) => {
  return (
    <React.Fragment>
      <ParallaxLayer offset={offset} speed={0.2}>
        <div className="slopeBegin" />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={-0.2}>
        <div className={`slopeEnd ${gradient}`} />
      </ParallaxLayer>

      <ParallaxLayer className="text number" offset={offset} speed={0.3}>
        <span>0{offset + 1}</span>
      </ParallaxLayer>

      <ParallaxLayer className="text header" offset={offset} speed={0.4}>
        {children}
      </ParallaxLayer>
    </React.Fragment>
  );
};
const PageContent = ({ caption, first, second, gradient }) => (
  <span>
    <p style={{ fontSize: 20 }}>{caption}</p>
    <div className={`stripe ${gradient}`} />
    <p>{first}</p>
    <p>{second}</p>
  </span>
);
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
  }`;
export default class App extends React.Component {
  scroll = to => this.refs.parallax.scrollTo(to);
  render() {
    return (
      <React.Fragment>
        <Parallax className="container" ref="parallax" pages={3} vertical>
          <Page offset={0} gradient="pink">
            <Bio />
          </Page>

          <Page offset={1} gradient="teal">
            <PageContent
              gradient="teal"
              caption="About me"
              first="consectetur"
              second="adipiscing elit"
            />
          </Page>
          <Page offset={2} gradient="tomato">
            <PageContent
              gradient="teal"
              caption="Skills"
              first="consectetur"
              second="adipiscing elit"
            />
          </Page>
        </Parallax>
      </React.Fragment>
    );
  }
}
