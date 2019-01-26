import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/addons'
import Header from '../core/Header'
import Bio from '../components/Bio'

const Page = props => {
  const { offset, caption, first, second, gradient, component, onClick } = props
  return (
    <React.Fragment>
      <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
        <div className="slopeBegin" />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={-0.2} onClick={onClick}>
        <div className={`slopeEnd ${gradient}`} />
      </ParallaxLayer>

      <ParallaxLayer className="text number" offset={offset} speed={0.3}>
        <span>0{offset + 1}</span>
      </ParallaxLayer>

      <ParallaxLayer className="text header" offset={offset} speed={0.4}>
        {props.children}
      </ParallaxLayer>
    </React.Fragment>
  )
}
const PageContent = ({ caption, first, second, gradient }) => (
  <span>
    <p style={{ fontSize: 20 }}>{caption}</p>
    <div className={`stripe ${gradient}`} />
    <p>{first}</p>
    <p>{second}</p>
  </span>
)

export default class App extends React.Component {
  scroll = to => this.refs.parallax.scrollTo(to)
  render() {
    return (
      <div>
        <Header />
        <Parallax className="container" ref="parallax" pages={3} vertical>
          <Page
            offset={0}
            gradient="pink"
            caption="who we are"
            first="Lorem ipsum"
            second="dolor sit"
            onClick={() => this.scroll(1)}
          >
            {/* <PageContent
              gradient="pink"
              caption="who we are"
              first="Lorem ipsum"
              second="dolor sit"
            /> */}
            <Bio />
          </Page>
          <Page
            offset={1}
            gradient="teal"
            caption="what we do"
            first="consectetur"
            second="adipiscing elit"
            onClick={() => this.scroll(2)}
          >
            <PageContent
              gradient="teal"
              caption="what we do"
              first="consectetur"
              second="adipiscing elit"
            />
          </Page>
          <Page
            offset={2}
            gradient="tomato"
            caption="what we want"
            first="Morbi quis"
            second="est dignissim"
            onClick={() => this.scroll(0)}
          />
        </Parallax>
      </div>
    )
  }
}
